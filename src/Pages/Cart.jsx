import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import { useSelector ,useDispatch} from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const item = useSelector((state)=>state.cart);
    console.log("remove id = ",item);


const handleRemoveItem = (itemId) =>{
dispatch(remove(itemId));
}
    return (
        <div>Cart

            <Grid container spacing={2}>
                {
                    item.map((x) => {
                        return (
                            <Grid item xs={4} sm={4} md={4} lg={3} sx={{ marginTop: '50px' }}>
                                <Card sx={{ minWidth: 275, minHeight: 200, maxHeight: 270 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            <img src={x.image} height='50px' />
                                        </Typography>
                                        <Typography component="div">
                                            {x.title}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {x.price}
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button sx={{ textAlign: 'center', margin: '0 auto' }} variant="contained" size="small" onClick={()=>handleRemoveItem(x.id)} >Remove</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Cart