import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'
import CartSumary from './CartSumary'


function index() {
    return (
        <Container>
            <CartSumary/>
            <Cart/>
        </Container>
    )
}

export default index
const Container = styled.div`
max-width:1280px;
width:90%;
margin:80px auto;
display:flex;
`