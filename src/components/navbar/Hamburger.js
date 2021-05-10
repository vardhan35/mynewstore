import React,{useState} from 'react'
import styled from 'styled-components'
import {device} from '../../media'




const Hamburger = () => {
    const [isclick , setisClick] = useState(false);
    const handleClick = ()=>{
        setisClick(!isclick);
    }

    return (
        <Navmenu onClick={handleClick} >
            <i className={ isclick ? "fa fa-times" : "fa fa-bars"} ></i>
        </Navmenu>
    )
}

export default Hamburger

const Navmenu = styled.div`
    display:none;
    font-size:2rem;
    cursor: pointer;
@media ${device.tablet}{
    display:flex;
    justify-content:flex-end;
    margin-right: 22px;
    margin-bottom: 22px;
    margin-top: 22px;
}
`