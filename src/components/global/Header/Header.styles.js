import styled from 'styled-components';


export const StyledHeader = styled.header`
    z-index: 10;
    padding: 32px 64px 32px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey};
    background-color:  ${({theme}) => theme.colors.white};
    transition: padding .3s;
    @media (max-width: 800px){
        padding: 12px 30px 12px;
    }
 
`;

export const StyledInnerWrapper = styled.header`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export const StyledButton = styled.button`
    background-color: ${({theme}) => theme.colors.pink};
    color: ${({theme}) => theme.colors.black};
    border: none;
    border-radius: 24px;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    @media (max-width: 800px){
        display: none;
    }
    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        transition: transform .3s;
        transform-origin: left;
        background-color: ${({theme}) => theme.colors.darkPink};
        transform: translateX(-100%);
    }
    &:hover:after{
        transform: translateX(0%);
    }
    a {
        position: relative;
        z-index: 1;
        padding: 12px 55px;
        display: block;
        color: ${({theme}) => theme.colors.black};
    }
    cursor: pointer;

`;

export const StyledLinkWrapper = styled.div`
    display: flex;
    align-items:center;
    a{
        font-size: 16px;
        text-decoration: none;
        font-weight: 500;
        color: ${({theme}) => theme.colors.black};
        position: relative;
        @media (max-width: 800px){
            display: none;
        }
        &:first-letter{
            text-transform: uppercase;
        }
        img{
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
        &:not(:last-child){
            margin-right: 48px;
        }
        &:first-child{
            margin-right: 97px;
            display: flex;
            align-items: center;
        }
        &:not(:first-child){
            &:after{
                content: "";
                transform: scaleX(0);
                position: absolute;
                bottom: 0;
                left: 0px;
                width: 100%;
                height: 1px;
                background-color: ${({theme}) => theme.colors.black};
                transition: transform .2s;
                transform-origin: left;
            }
            &:hover:after{
                transform: scaleX(1);
            }
        }
    }
`;

export const StyledBurger = styled.div`
    width: 35px;
    height: 30px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    outline: 0;
    display: none;
    @media (max-width: 800px){
        display: block;
    }
    span{
        width: 100%;
        height: 2px;
        background-color: ${({theme}) => theme.colors.black};
        transition: transform .2s;
        display: block;
        
        &:first-child {
            margin: 10px 0 5px;
            transform: ${({active}) => active ? 'rotate(45deg) translateY(4px)' : ''};
        }
        &:last-child {
            margin: 5px 0 5px;
            transform: ${({active}) => active ? 'rotate(-45deg) translateY(-4px)' : ''};
        }
    }
`

export const StyledMobileMenu = styled.div`
    position: fixed;
    left: 0;
    top: 57px;
    background-color: ${({theme}) => theme.colors.white};
    z-index: 10;
    width: 100%;
    height: calc(100vh  - 57px);
    transition: transform .3s;
    transform: ${({active}) => active ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: top;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 70px 30px 30px;
    a {
        font-size: 28px;
        text-decoration: none;
        font-weight: 500;
        color: ${({theme}) => theme.colors.black};
        transition: opacity .3s .3s;
        opacity: ${({active}) => active ? '1' : '0'};
        &:first-letter{
            text-transform: uppercase;
        }
        &:not(:last-child){
            margin-bottom: 20px;
        }
    }
`;
