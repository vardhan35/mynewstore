import React from 'react'
import {addToCart} from '../../redux/cart/cartSlice'
import {useDispatch} from 'react-redux'
import styled from 'styled-components';
const ProductsItem = ({data}) => {
    const dispatch = useDispatch(addToCart);
    // console.log("ProductssItem", props);
    return (
        <Container>
            <h2>{data.name}</h2>
            <Button type='button' className='button' onClick={()=>dispatch(addToCart(data.id))}>Add To Cart </Button>
        </Container>
    )
}

export default ProductsItem;
/* background-color:#533Ea8; */

const Container = styled.div`
    max-width:1047px;
    width:90%;
    margin:1em auto;
    color:#3a4750;
    background-color:#eeeeee;
    padding:1em 0.5em;
    border-radius:0.25em;
`

const Button = styled.button`
    cursor: pointer;
    background-color:#303841;
    max-width:150px;
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
