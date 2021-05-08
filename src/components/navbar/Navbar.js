import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {auth, provider} from '../../firebase'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import {selectUserName, selectUserPhoto, setUserLoginDetails, setSignoutState} from '../../redux/user/userSlice'


const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    // const useremail = useSelector(selectUserEmail);
    const userphoto = useSelector(selectUserPhoto);


    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLoginDetails({
                    name : user.displayName,
                    email: user.email,
                    photo : user.photoURL,
                }));
                history.push('/');
            }
        })
    })

    const handleAuth = () =>{
        if(!username){
        auth.signInWithPopup(provider).then((res)=>{
            setUser(res.user);
            console.log("Handle Auth", res);
        }).catch((err)=>{
            alert(err.message);
        })
    }else if(username){
        auth.signOut().then(()=>{
            dispatch(setSignoutState());
            history.push('/');
        }).catch(err =>{
            alert(err.message);
        })
    }
    }

    const setUser = (user) =>{
        dispatch(setUserLoginDetails({
            name : user.displayName,
            email: user.email,
            photo : user.photoURL,
        }))
    }



    return (
        <Container>
            <NavContainer>
            <Logo>
                <h1>myWebStore</h1>
            </Logo>
            {
                !username ? <Login><Link to='' onClick={handleAuth}>Login</Link></Login>
                    :
                    <>
                    <Navlist>
                        <Link to='/'>Home</Link>
                        <Link to='/cart' >Cart : </Link>
                    </Navlist>
                    <Signout>
                    <UserImage src={userphoto} alt={username}/>
                    <DropDown>
                        <Link onClick={handleAuth}>Sign Out</Link>
                    </DropDown>
                    </Signout>
                    </>
            }
            {/* <Login>
                <Link to='' onClick={handleAuth}>Login</Link>
            </Login> */}
            </NavContainer>
        </Container>
    )
}

export default Navbar

// background-color:#291965;

const Container = styled.div`
    width:100%;
    height:80px;
    top:0;
    left:0;
    position:fixed;
    z-index:1;
    display:flex;
    background-color:#f6c90e;
    justify-content:space-between;
`
const NavContainer = styled.div`
    max-width:1280px;
    width:90%;
    margin:auto;
    display:flex;
    background-color:#f6c90e;
    justify-content:space-between;
`


const Logo = styled.div`
    margin:auto auto auto 2em;
    color:#30384e;
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
        border:2px solid transparent;
    }
    /* a::before{
        content:'';
        bottom:-6px;
        background-color:#30384e;
        border-radius:0px 0px 4px 4px;
        display:block;
        height:2px;
        position:absolute;
        transform-origin:left center;
        transform:scaleX(0);
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        visibility:hidden;
        width:auto;
    } */

    a:hover{
        border-bottom:2px solid #30384e;
    }
`

const Login = styled.div`
    align-items:center;
    display:flex;
    margin:auto 2em;
    text-transform:uppercase;
    font-size:1.4rem;
    font-weight:700;
    outline:none;
    a{
        color:#f6c90e;
        background-color:#303841;
        border:3px solid #303841;
        border-radius:0.25em;
        padding:0.35em;
    }
    a:hover{
        background-color:#f6c90e;
        color:#3a4750;
        border:3px solid #3a4750;
    }
`

const UserImage = styled.img`
height:50px;
width:50px;
margin:0.70em 1em;
border-radius:50%;
cursor: pointer;
`
const DropDown = styled.div`
    position:absolute;
    top:63px;
    opacity:0;
    /* background-color:#f6c90e;
    color:#3a4750;
    padding:0.2em;
    font-size:1.5rem;
    border-radius:0.25em; */
    a{  
        font-weight:500;
        color:#f6c90e;
        background-color:#303841;
        border:3px solid #303841;
        border-radius:0.25em;
        padding:0.35em;
    }
    a:hover{
        color:white;
        background-color:#eeeeee;
        color:#3a4750;
        border:3px solid #3a4750;
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
`
