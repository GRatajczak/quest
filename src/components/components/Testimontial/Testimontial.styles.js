import styled from "styled-components";

export const TestimontialContainer = styled.section`
    padding: 128px 30px;
    width: 100%;
    margin-bottom: 128px;
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: ${({theme}) => theme.colors.black};
    @media (max-width: 800px){
        padding: 60px 30px;
        margin-bottom: 60px;
    }
`
export const TestimontialInnerWrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    max-width: 1116px;
`

export const StyledImage = styled.img`
    width: 48px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 68px;
    @media (max-width: 800px){
        margin-bottom: 28px;
    }
`;