import styled from "styled-components";

export const TestimontialContainer = styled.section`
    padding: 128px 30px 128px;
    width: 100%;
    margin-bottom: 128px;
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: ${({theme}) => theme.colors.black};
`
export const TestimontialInnerWrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    max-width: 1160px;
`

export const StyledImage = styled.img`
    width: 48px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 68px;
    
`;