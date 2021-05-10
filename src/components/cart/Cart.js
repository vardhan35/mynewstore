import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import { selectuserCart } from '../../redux/cart/cartSlice'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import {device} from '../../media'

const Cart = () => {
    const cartItems = useSelector(selectuserCart);
    return (
        <Container>
            {   cartItems.length === 0 ? <EmptyCart/>
            :
                cartItems.map((item)=>{
                    return <CartItem key={item.id} item={item}/>
                })
            }
        </Container>
    )
}
export default Cart;

const Container = styled.div`
max-width:896px;
width:70%;
margin:0 1em;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
@media ${device.laptop}{
    width:90%;
    margin:0 auto;
}
`
