import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import db from '../../firebase';
import {setProducts} from '../../redux/cart/cartSlice';
import {selectUserName} from '../../redux/user/userSlice';
import {selectclothing} from '../../redux/cart/cartSlice'
import ProductItem from './ProductItem';


const Products = () => {
    const clothes = useSelector(selectclothing);
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);

    useEffect(()=>{
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = snapshot.docs.map((doc) => {
                console.log("snapshot", doc.data());
                return {id : doc.id, ...doc.data()};
            })
            dispatch(setProducts(tempProducts));
            })
    },[username, dispatch])

    return (
        <Container>
            {
                clothes && 
                clothes.map((product, key)=>{
                    return  <ProductItem key={product.id} product={product} />
                })
            }
        </Container>
    )
}

export default Products;

const Container = styled.div`
max-width:1280px;
width:90%;
margin:80px auto;
display:flex;
flex-wrap:wrap;
justify-content:center;
`  
