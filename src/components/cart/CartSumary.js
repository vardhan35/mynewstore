import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import { selectuserCart } from '../../redux/cart/cartSlice'
import {selectUserName, selectUserPhoto, selectUserEmail} from '../../redux/user/userSlice'
import {device} from '../../media'


function CartSumary() {
    const cartItem = useSelector(selectuserCart);
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);
    const useremail = useSelector(selectUserEmail);
    const [count, setcount] = useState(0);
    const [prize, setprize] = useState();
    useEffect(()=>{
        let count = 0;
        let prize = 0;
        cartItem.forEach(item => {
            count += item.qty;
            prize += item.price*item.qty;
        });
        setcount(count);
        setprize(prize);
    }, [cartItem, count]);
    console.log("CartSumaryPrize", prize);
    return (
        <Container>
            <Userinfo>
                <img src={userphoto} alt={username} />
                <h3>{username}</h3>
                <p>{useremail}</p>
            </Userinfo>
            <Cartinfo>
                <h2>Your Orders</h2>
                <Total>
                    <h3>Quantity Total :{count}</h3>
                    <h3>Price Total : {prize},₹</h3>
                </Total>
                <Button>Place Order</Button>
            </Cartinfo>
        </Container>
    )
}

export default CartSumary

const Container = styled.div`
height:510px;
width:250px;
margin:2em 1em 2em 1em;
background-color:#eeeeee;
color:#303841;
border-radius:0.5em;
@media ${device.laptop}{
    display:none; 
}
`

const Userinfo = styled.div`
text-align:center;
width:90%;
margin:auto;
img{
    width:40%;
    margin:2.5em auto 1em auto;
    border-radius:50%;
}
p{
    font-size:0.6rem;
}
`


const Cartinfo = styled.div`
    width:80%;
    color:#303841;
    height:250px;
    background-color:#ffffff;
    margin: 2em auto;
    border-radius:0.25em;
    h2{
        padding:1em 0 0 0;
        text-align:center;
    }
`

const Total = styled.div`
width:90%;
height:50%;
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h3{
margin:1em auto 0 auto;
}

`

const Button = styled.button`
    width:80%;
    height:35px;
    color:#000000;
    margin:0.5em 10% 0.5em 10%;
    border-radius:0.25em;
    border:none;
    background-color:#24a0ed;
    font-size:1.1rem;
    font-weight:520;
    :hover{
        transform:scale(1.02);
    }
    &:active{
    background-color:#eeeeee;
}
`