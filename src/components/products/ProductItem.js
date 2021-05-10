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
                    <h2>{product.name}</h2>
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
width:300px;
height:450px;
margin:2em 1em 0 1em;
background-color:white;
display:flex;
flex-direction:column;
justify-content:center;
box-shadow:0 5px 30px rgba(0,0,0,0.090);
img{
    width:250px;
    height:250px;
    margin:0.5em auto;
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
margin:0.5em auto 0 auto;
text-align:center;
`
const Button = styled.button`
color:white;
max-width:300px;
width:80%;
height:40px;
font-size:1rem;
margin:1em auto 0 auto;
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