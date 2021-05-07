import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components';
import {removeFromCart} from '../../redux/cart/cartSlice'

const CartItem = ({cartData}) => {
    const dispatch = useDispatch(removeFromCart);
    return (
        <Container>
            <h1>{cartData.name}</h1>
            <Button onClick={()=>dispatch(removeFromCart(cartData.id))} >Remove From Cart</Button>
        </Container>
        )
}

export default CartItem;


const Container = styled.div`
    max-width:770px;
    margin:1em 0.25em;
    color:#3a4750;
    background-color:#eeeeee;
    padding:1em 0.5em;
    border-radius:0.25em;
`

const Button = styled.button`
    background-color:#303841;
    max-width:210px;
    color:#ffff;
    height:35px;
    border-radius:0.2em;
    padding:0.5em;
    font-size:1rem;
    border:none;
    margin:1em auto 0 ;
    :hover{
        transform:scale(1.02);
        background-color:#3a4750;
    }
`
