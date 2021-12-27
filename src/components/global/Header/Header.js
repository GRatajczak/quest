import { StyledHeader, StyledButton, StyledLinkWrapper, StyledInnerWrapper } from './Header.styles'
import {  NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import React from 'react'

const getLinks = () => {

    // add axios 
    return [
        {
            url: "/",
            id: "MPz3uDxgKR"
        },
        {
            url: "/solutions",
            id: "BsX5PfVVxl"
        },
        {
            url: "/about",
            id: "RsQPoaZWdp"
        }
    ]
}

const formatLinkTitle = (title) => {
    if (title === '/'){
        return 'home'
    }else {
        return title.replace('/', '').replace(/-/g, ' ');
    }
}


const Header = () => {
    return (
        <StyledHeader >
            <StyledInnerWrapper>
                <StyledLinkWrapper>
                    <NavLink to='/' >
                        <img src={logo}/>
                    </NavLink>
                        {getLinks().map(el => (
                            <NavLink key={el.id} to={el.url}>
                                {formatLinkTitle(el.url)}
                            </NavLink>
                            )
                        )}
                </StyledLinkWrapper>
                <StyledButton>Contact</StyledButton>
            </StyledInnerWrapper>
        </StyledHeader>
    )
}

export default Header