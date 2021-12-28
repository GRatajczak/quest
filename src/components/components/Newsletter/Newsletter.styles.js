import styled from "styled-components";

export const StyledNewsletterContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto  128px;
    max-width: 1116px;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    @media (max-width: 800px){
        margin: 0 auto  60px;
    }

`;

export const StyledNewsletterWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 48px;
    max-width: 624px;
    justify-content: center;
    @media (max-width: 800px){
        flex-direction: column;
        margin-bottom: 28px;
    }
`;

export const StyledNewsletterTitle = styled.h2`
    font-size: 40px;
    font-weight: 500;
    line-height: 56px;
    text-align: left;
    width: 100%;
    margin-bottom: 64px;
    text-align: center;
    color:  ${({theme}) => theme.colors.black};
    @media (max-width: 800px){
        font-size: 30px;
        margin-bottom: 30px;
    }

`;

export const StyledButton = styled.button`
    padding: 12px 55px;
    overflow: hidden;
    position: relative;
    background-color: ${({theme}) => theme.colors.pink};
    color: ${({theme}) => theme.colors.black};
    border: none;
    border-radius: 24px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    opacity: ${({disabled}) => disabled ? '.6': '1'};
    transition: opacity .3s;
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
        transform:  translateX(-100%);
    }
    span {
        position: relative;
        z-index: 1;
    }
    &:hover:after{
        transform: ${({disabled}) => disabled ? '': 'translateX(0%)'} ;
    }
    @media (max-width: 800px){
        width: 100%;
    }

`;

export const StyledNewsletterMessage = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    overflow: hidden;
`;
export const StyledNewsletterMessageInnerSpan = styled.span`
    transition: transform .3s;
    transform: ${({show}) => show ? 'translateY(0%)': 'translateY(100%)'};
    display: block;
    text-align:center;
    color: ${({error, theme}) => error ? theme.colors.error : theme.colors.success}
`;
