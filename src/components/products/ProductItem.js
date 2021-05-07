import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {addToCart} from '../../redux/cart/cartSlice';
import {selectUserName} from '../../redux/user/userSlice';

const ProductItem = ({product}) => {
    const username = useSelector(selectUserName);
    const dispatch = useDispatch();
    const handleClick =()=>{
        if(!username){
            window.alert('You Havent Loged In')
        }else{
            dispatch(addToCart(product.id));
        }
    }
    return (
            <ProdDiv key={product.id}>
                <img src={product.image} alt={product.name} />
                <Prodinfo>
                    <h1>{product.name}</h1>
                    <p>Price : {product.price},Rupees</p>
                    <p>Ratings : ⭐⭐⭐⭐</p>
                </Prodinfo>
                <Prodaction>
                    <Button type='button' onClick={()=>handleClick(product.id)}>Add to Cart</Button>
                </Prodaction>
            </ProdDiv>
        )
}

export default ProductItem

const ProdDiv = styled.div`
max-width:350px;
height:500px;
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

const Prodinfo = styled.div`
text-align:left;
margin-left:1em;
h1{
    margin:0.12em auto;
};
p{
    margin:0.12em auto;
}
`
const Prodaction = styled.div`
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