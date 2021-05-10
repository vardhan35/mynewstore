import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function EmptyCart() {
    return (
        <Container>
            <H1>😜Cart Empty😜</H1>
            <Button><Link to='/' > «Back to Shopping</Link></Button>
        </Container>
    )
}

export default EmptyCart

const Container = styled.div`
    width:70%;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    height:70vh;
    flex-direction:column;
`

const H1 = styled.h1``

const Button = styled.button`
margin:1em auto;
width:10em;
height:2.5em;
border-radius:0.25em;
border:none;
background-color:#303841;
a{
    text-decoration:none;
    list-style:none;
    color:white;
}
&:hover{
    transform:scale(1.02);
    transition:all 0.2s ease-in;
    background-color:#3a4750;
}
&:active{
    background-color:#eeeeee;
}
`
