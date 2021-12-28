import { 
    StyledHeader, 
    StyledButton, 
    StyledLinkWrapper, 
    StyledInnerWrapper, 
    StyledBurger,
    StyledMobileMenu
} from './Header.styles'
import {  NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const getLinks = async () => {

    const links = await axios.get(`${process.env.REACT_APP_API_URL}pages`,{
            auth: {
                username: process.env.REACT_APP_USERNAME,
                password: process.env.REACT_APP_PASSWD
            }
        })
    return links.data;
}

const formatLinkTitle = (title) => {
    if (title === '/'){
        return 'home'
    }else {
        return title.replace('/', '').replace(/-/g, ' ');
    }
}


const Header = () => {
    const [links, setLinks ] = useState([]);
    const [activeBurger, setActiveBurger ] = useState(false);

    useEffect(
        ()=> {
            getLinks()
                .then(data => {
                    setLinks(data)
                }
            )
            return;
        }
        , 
        []
    );
    return (
        <>
        <StyledHeader >
            <StyledInnerWrapper>
                <StyledLinkWrapper>
                    <NavLink to='/' >
                        <img src={logo}/>
                    </NavLink>
                        {links.map(el => (
                            <NavLink key={el.id} to={el.url}>
                                {formatLinkTitle(el.url)}
                            </NavLink>
                            )
                        )}
                </StyledLinkWrapper>
                <StyledButton >
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </StyledButton>
                <StyledBurger onClick={() => setActiveBurger(!activeBurger)} active={activeBurger}>
                    <span></span>
                    <span></span>
                </StyledBurger>
            </StyledInnerWrapper>
        </StyledHeader>
        <StyledMobileMenu active={activeBurger}>
            {links.map(el => (
                <NavLink key={el.id} to={el.url} onClick={() => setActiveBurger(!activeBurger)}>
                    {formatLinkTitle(el.url)}
                </NavLink>
                )
            )}
        </StyledMobileMenu>
        </>
    )
}

export default Header