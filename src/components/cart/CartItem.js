import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components';
import {removeFromCart} from '../../redux/cart/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch(removeFromCart);
    return (
        <ItemDiv key={item.id}>
        <img src={item.image} alt={item.name} />
        <Iteminfo>
            <h1>{item.name}</h1>
            <p>Price : {item.price},Rupees</p>
            <p>Ratings : ⭐⭐⭐⭐</p>
        </Iteminfo>
        <Itemaction>
            <Button type='button' onClick={()=>dispatch(removeFromCart(item.id))}>Remove from Cart</Button>
        </Itemaction>
    </ItemDiv>
        )
}

export default CartItem;


const ItemDiv = styled.div`
max-width:350px;
/* height:500px; */
margin:2em 2em;
background-color:white;
display:flex;
flex-direction:column;
justify-content:center;
box-shadow:0 5px 20px rgba(0,0,0,0.090);
img{
    width:300px;
    height:350px;
    margin:0.5em auto;
    padding:1em;
}
`
const Iteminfo = styled.div`
text-align:left;
margin-left:1em;
h1{
    margin:0.12em auto;
};
p{
    margin:0.12em auto;
}
`

const Itemaction = styled.div`
width:100%;
margin:auto;
text-align:center;
`

const Button = styled.button`
color:white;
max-width:300px;
width:90%;
height:40px;
font-size:1rem;
margin:1em auto;
border:none;
border-radius:0.25em;
/* font-weight:500; */
cursor: pointer;
background-color:#303841;
/* background-image: linear-gradient(to right bottom, #3a4750, #37434c, #353f49, #323c45, #303841); */
&:hover{
    transform:scale(1.02);
    transition:all 0.5s ease;
    background-color:#3a4750, 
}

`
