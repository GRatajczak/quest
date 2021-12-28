import styled from "styled-components";

export const StyledHeroContainer = styled.section`
    padding: 127px 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 800px){
        padding: 30px 0px 0;
        flex-direction: column-reverse;
        margin: 0 auto 60px;
    }
    
`;
export const StyledHeroWrapper = styled.section`
    padding: 0;
    display: flex;
    margin: 0 auto 152px;
    max-width: 1116px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 800px){
        padding: 30px 30px 0;
        flex-direction: column-reverse;
        margin: 0 auto 60px;
    }
    
`;


