import styled from "styled-components";

export const StyledNewsletterContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto  128px;
    max-width: 1160px;
    align-items: center;
    width: 100%;

`;

export const StyledNewsletterWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 48px;
    max-width: 624px;
    justify-content: center;
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

export const StyledNewsletterMessage = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;

    color: ${({error, theme}) => error ? theme.colors.error : theme.colors.success}
`;
