import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components';
import {removeFromCart,addToCart} from '../../redux/cart/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    console.log('hello', item.qty);
    return (
    <ItemDiv key={item.id}>
        <img src={item.image} alt={item.name} />
        <Iteminfo>
            <h2>{item.name}</h2>
            <p>Price : {item.price},₹</p>
            <p>Ratings : ⭐⭐⭐⭐</p>
        </Iteminfo>
        <Itemaction>
            <Buton type='button' onClick={()=>dispatch(addToCart(item.id))}>Add Quantity({item.qty})</Buton>
            <Button type='button' onClick={()=>dispatch(removeFromCart(item.id))}>Remove</Button>
        </Itemaction>
    </ItemDiv>
        )
}

export default CartItem;


const ItemDiv = styled.div`
width:265px;
height:420px;
margin:2em 1em 0 1em;
background-color:white;
display:flex;
flex-direction:column;
justify-content:center;
box-shadow:0 5px 20px rgba(0,0,0,0.090);
img{
    width:220px;
    height:220px;
    margin:0.5em auto;
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
width:90%;
margin:1em auto;
display:flex;
justify-content:space-between;
`

const Button = styled.button`
color:white;
width:40%;
height:40px;
font-size:1rem;
margin:1 auto 0.5em 0.5em;
border:none;
border-radius:0.25em;
cursor: pointer;
/* background-color:#303841; */
background-color:#df4759;
&:hover{
    transform:scale(1.02);
    transition:all 0.5s ease;
    background-color:#3a4750, 
}
&:active{
    background-color:#eeeeee;
}
`
const Buton = styled.button`
color:white;
width:55%;
height:40px;
font-size:1rem;
margin:1 auto 0.5em 0.5em;
border:none;
border-radius:0.25em;
cursor: pointer;
background-color:#303841;
&:hover{
    transform:scale(1.02);
    transition:all 0.5s ease;
    background-color:#3a4750, 
}
&:active{
    background-color:#eeeeee;
}
`
