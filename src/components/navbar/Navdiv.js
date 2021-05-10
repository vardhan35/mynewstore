import React from 'react'
import styled from'styled-components'
import {Link, NavLink} from 'react-router-dom'
import { useSelector} from 'react-redux'
import {selectUserName, selectUserPhoto} from '../../redux/user/userSlice'
import {device} from '../../media'




const Navdiv = (props) => {
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);
    return (
        <NavDiv>
            <Navlist>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/cart' >Cart</NavLink>
            </Navlist>
            <Signout>
                <UserImage src={userphoto} alt={username}/>
                <DropDown>
                    <Link onClick={props.auth}>Sign Out</Link>
                </DropDown>
            </Signout>
        </NavDiv> 
    )
}
export default Navdiv


const NavDiv = styled.div`
    display:flex;
    @media ${device.tablet}{
        display:none;
}
`

const Navlist = styled.ul`
    width:300px;
    align-items:center;
    display:flex;
    a{  
        font-size:1.5rem;
        padding :0.3em;
        color:#30384e;
        font-weight:500;
        margin:0.2em auto;
        /* border:2px solid transparent; */
    }
    a::after{
        content:"";
        display:block;
        height:2px;
        border-radius:1px;
        width:0;
        background:transparent;
        transition: width 0.2s ease-in-out;
    }
    a:hover::after{
        width:100%;
        background-color:#30384e;
        /* border-bottom:2px solid #30384e; */
    }
    @media ${device.tablet}{
    display:flex;
    flex-direction:column; 
    margin:auto;
}
`

const DropDown = styled.div`
    box-sizing:border-box;
    position:absolute;
    width:100px;
    top:63px;
    opacity:0;
    a{  
        text-transform:uppercase;
        font-weight:500;
        color:#f6c90e;
        background-color:#303841;
        border:3px solid #303841;
        border-radius:0.25em;
        padding:0.35em;
    }
    a:hover{
        color:#303841;
        background-color:#ffffff;
        border:3px solid #303841;
    }
`

const Signout = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;

&:hover{
    ${DropDown}{
        opacity: 1;
        transition-delay:0.5s;
    }
}
@media ${device.tablet}{
    display:none;
}
`

const UserImage = styled.img`
height:50px;
width:50px;
margin:0.70em 1em;
border-radius:50%;
cursor: pointer;
`
