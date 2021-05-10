import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {auth, provider} from '../../firebase'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {selectUserName, setUserLoginDetails,setSignoutState} from '../../redux/user/userSlice'
import {device} from '../../media'
import NavLists from './NavLists'

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);


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
                <h1>My<span>Store</span></h1>
            </Logo>
            {
                !username ? <Login><Link to='' onClick={handleAuth}>Login</Link></Login>
                    : <NavLists auth={handleAuth}/>
            }
            </NavContainer>
        </Container>
    )
}

export default Navbar


const Container = styled.div`
    width:100%;
    height:80px;
    top:0;
    left:0;
    position:fixed;
    z-index:5;
    display:flex;
    background-color:#f6c90e;
    justify-content:space-between;

`
const NavContainer = styled.div`
    max-width:1280px;
    width:90%;
    height:100%;
    margin:auto;
    display:flex;
    background-color:#f6c90e;
    justify-content:space-between;
    @media ${device.tablet}{
    width:100%;
}
`



const Logo = styled.div`
    margin:auto auto auto 2em;
    color:#30384e;
    h1{
        font-size:1.5rem;
    }
    span{
        font-style:italic ;
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









