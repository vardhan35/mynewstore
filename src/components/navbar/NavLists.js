import React from 'react'
import styled from 'styled-components'
import Navdiv from './Navdiv'
import SliderNav from './SliderNav'
import {device} from '../../media'

const NavLists = ({auth}) => {
    return (
        <Container>
        <Navdiv auth={auth}/>
        <SliderNav auth={auth} /> 
        </Container>
    )
}

export default NavLists

const Container = styled.div`
    @media ${device.tablet}{
    width:70%;
}
`