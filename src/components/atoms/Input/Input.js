import styled from "styled-components";

const Input = styled.input`
    padding: 14px 32px;
    border-radius: 24px;
    width: 416px;
    height: 48px;
    outline: none;
    appearance: none;
    border: 1px solid ${({theme, validError}) => validError ? theme.colors.error : theme.colors.lightGrey};
    font-size: 16px;
    margin-right: 16px;
    color: ${({theme}) => theme.colors.black};
    background-color: ${({theme}) => theme.colors.lightGrey};
    transition: border .3s;

    &::placeholder{
        color: ${({theme}) => theme.colors.black};
        font-size: 16px;
    }

`;

export default Input;