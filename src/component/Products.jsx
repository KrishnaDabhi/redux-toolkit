import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';


const Products = () => {
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setProduct(data);

    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAdd = (product) =>{

        dispatch(add(product));
    }
    return (
        <>Products
            <Grid container spacing={2}>
                {
                    product.map((x) => {
                        return (
                            <Grid item xs={4} sm={4} md={4} lg={3} sx={{marginTop:'50px'}}>
                                <Card sx={{ minWidth: 275 ,minHeight:200,maxHeight :270}}>
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
                                        <Button sx={{textAlign:'center',margin:'0 auto'}} variant="contained" size="small" onClick={()=>handleAdd(x)}>Add to Cart</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </>
    )
}

export default Products