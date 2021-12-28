import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: ${({bigText}) => bigText ? '40px': '24px'};
    line-height: ${({bigText}) => bigText ? '60px': '40px'};
    width: 100%;
    max-width: 948px;
    text-align: ${({bigText}) => bigText ? 'center': 'left'};
    
    margin-bottom: ${({noMarginBottom}) => noMarginBottom ? '0px' : '96px'};
    margin-top: ${({bigText}) => bigText ? '96px' : '0px'};
    margin-left: ${({bigText}) => bigText ? 'auto' : '0px'};
    margin-right: ${({bigText}) => bigText ? 'auto' : '0px'};

    color: ${({dark,theme}) => dark ? theme.colors.grey : theme.colors.lightGrey};

    @media (max-width: 800px){
        font-size: ${({bigText}) => bigText ? '30px': '18px'};
        line-height: ${({bigText}) => bigText ? '40px': '30px'};
        margin-bottom: ${({noMarginBottom}) => noMarginBottom ? '0px' : '36px'};
    }
`;

export default Paragraph;