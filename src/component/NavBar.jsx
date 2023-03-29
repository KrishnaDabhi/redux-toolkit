import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';

const NavBar = () => {

    const item = useSelector((state)=>state.cart);
    console.log(item);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Redux Store</span>
            <div>
                <Link to='/' style={{margin:'20px',paddingLeft:'20px'}}>Home</Link>
                <Link to='/cart' style={{margin:'20px',paddingLeft:'20px'}}>Cart</Link>
                <span style={{margin:'20px',paddingLeft:'20px'}}>Cart Items:{item.length}</span>
            </div>
        </div>
    )
}

export default NavBar