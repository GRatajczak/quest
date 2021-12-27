import styled from 'styled-components';


export const StyledHeader = styled.header`

    padding: 32px 64px 32px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey};
    background-color:  ${({theme}) => theme.colors.white};
    transition: padding .3s;
    &.scrolled {
        padding: 16px 64px 16px;
    }
`;

export const StyledInnerWrapper = styled.header`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled.button`
    padding: 12px 55px;
    background-color: ${({theme}) => theme.colors.pink};
    color: ${({theme}) => theme.colors.black};
    border: none;
    border-radius: 24px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

`;

export const StyledLinkWrapper = styled.div`
    display: flex;
    align-items:center;
    a{
        font-size: 1rem;
        text-decoration: none;
        font-weight: 500;
        color: ${({theme}) => theme.colors.black};

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
    }
`