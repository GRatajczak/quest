import styled from "styled-components";


export const Title = styled.h1`
    font-size: 48px;
    font-weight: 500;
    line-height: 64px;
    text-align: left;
    width: 100%;
    max-width: 516px;
    margin-right: 24px;
    color:  ${({theme}) => theme.colors.black};
`

export default Title;
