import React from 'react'
import Input from '../../atoms/Input/Input'
import {StyledNewsletterContainer , StyledNewsletterTitle, StyledNewsletterWrapper, StyledButton, StyledNewsletterMessage} from './Newsletter.styles'
const Newsletter = () => {
    return (
        <StyledNewsletterContainer>
            <StyledNewsletterTitle>
                Sign up for Newsletter
            </StyledNewsletterTitle>
            <StyledNewsletterWrapper>
                <Input  placeholder="Type your email"/>
                <StyledButton>Submit</StyledButton>
            </StyledNewsletterWrapper>
            <StyledNewsletterMessage>
            Thank you for signing up for the Breally newsletter.
            </StyledNewsletterMessage>
        </StyledNewsletterContainer>
    )
}

export default Newsletter;