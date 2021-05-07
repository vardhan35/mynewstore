import React from 'react'
// import {useSelector} from 'react-redux'
import styled from 'styled-components'
// import { selectCart } from '../../redux/cart/cartSlice'
// import CartItem from './CartItem'


const Cart = () => {
    return (
        <Container>
            <CartDiv>

            </CartDiv>
        </Container>
    )
}

export default Cart;

const Container = styled.div`
max-width:1047px;
display:flex;
width:90%;
margin:80px auto 0 auto;
padding:0.01em 0;
background-color:#ffffff;
`


const CartDiv = styled.div`
margin-left:0.25em;
width:800px;
display:block;
`


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


