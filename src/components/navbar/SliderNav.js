import React,{useState, useEffect} from 'react'
import styled from'styled-components'
import {Link, NavLink} from 'react-router-dom'
import { useSelector} from 'react-redux'
import {selectUserName, selectUserPhoto} from '../../redux/user/userSlice'
import {device} from '../../media'
import { selectuserCart } from '../../redux/cart/cartSlice'





const SliderNav = (props) => {
    const cartItem = useSelector(selectuserCart);
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);
    const [isclick , setisClick] = useState(false);
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


    const handleClick = ()=>{
        setisClick(!isclick);
    }
    return (
        <Container>
        <Navmenu onClick={handleClick} >
            <i className={ isclick ? "fa fa-times" : "fa fa-bars"} ></i>
        </Navmenu>        
        <NavDiv isclick={isclick} >
            <Navsumary>
                <UserImage src={userphoto} alt={username}/>
                <h4>{username}</h4>
                <Cartinfo>
                <h2>Your Orders</h2>
                <Total>
                    <h3>Quantity Total :{count}</h3>
                    <h3>Price Total : {prize},₹</h3>
                </Total>
                <Button>Place Order</Button>
            </Cartinfo>
            </Navsumary>
            <Navlist>
                <NavLink to='/' onClick={handleClick} >Home</NavLink>
                <NavLink to='/cart' onClick={handleClick} >Cart</NavLink>
            </Navlist>
            <Signout>
                    <Link onClick={props.auth}>Sign Out</Link>
            </Signout>
        </NavDiv> 
        </Container>
    )
}
export default SliderNav

const Navmenu = styled.div`
    display:none;
    font-size:2rem;
    cursor: pointer;
    margin-right:3em;
@media ${device.tablet}{
    display:flex;
    justify-content:flex-end;
    margin-right: 22px;
    margin-bottom: 22px;
    margin-top: 22px;
}
`


const Container = styled.div`
    display:flex;
    flex-direction:column;
`


const NavDiv = styled.div`
    display:flex;
    display:none;
    transition:all 0.5s ease;
    overflow-x:auto;
    font-size:0.8rem;
    height:100vh;
    @media ${device.tablet}{
        display:block;
        background-color:${(props)=>(props.isclick ? '#f6c90e' : 'none')};
        margin-right:${(props)=>(props.isclick ? '-1px' : '-250%')}
}
`

const Navsumary = styled.div`
    display:none;
    text-align:center;
    color:#30384e;
    @media ${device.tablet}{
        display:inline-block;
        width:100%;
        margin:3em auto;
}
`
const Navlist = styled.ul`
    align-items:center;
    display:flex;
    a{  
        font-size:1.5rem;
        padding :0;
        color:#30384e;
        font-weight:500;
        margin:0.2em auto;
        border:2px solid transparent;
    }
    a:hover{
        border-bottom:2px solid #30384e;
    }
    @media ${device.tablet}{
    display:flex;
    flex-direction:column; 
    margin:0 auto 1em auto;
}
`

const Signout = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
margin:1em auto;
    a{  
        width:100px;
        text-align:center;
        text-transform:uppercase;
        font-weight:500;
        color:#f6c90e;
        background-color:#303841;
        border:3px solid #303841;
        border-radius:0.25em;
        padding:0.35em;
    }
    a:active{
    background-color:#eeeeee;
}
`

const UserImage = styled.img`
max-width:110px;
width:50%;
margin:0.70em 1em;
border-radius:50%;
cursor: pointer;
`

const Cartinfo = styled.div`
    max-width:150px;
    width:80%;
    font-size:0.7rem;
    color:#303841;
    height:200px;
    background-color:#ffffff;
    margin: 1em auto 0 auto;
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
margin:0.5em auto 0 auto;
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
`