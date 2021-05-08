import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import { selectuserCart } from '../../redux/cart/cartSlice'
import CartItem from './CartItem'


const Cart = () => {
    const cartItems = useSelector(selectuserCart);
    return (
        <Container>
            {   cartItems.length === 0 ? <h1>😜Cart Empty😜</h1> :
                cartItems.map((item)=>{
                    return <CartItem key={item.id} item={item}/>
                })
            }
        </Container>
    )
}
export default Cart;

const Container = styled.div`
max-width:1280px;
width:90%;
margin:80px auto;
display:flex;
flex-wrap:wrap;
justify-content:center;
`


// const CartDiv = styled.div`
// margin-left:0.25em;
// width:800px;
// display:block;
// `


// const Profile = styled.div`
//     width:200px;
//     margin:1em auto;
//     padding:1em;
//     position:fixed;
//     right:16%;
//     height:70vh;
//     color:#3a4750;
//     background-color:#eeeeee;
//     border-radius:0.25em;
//     overflow:auto;
// `


