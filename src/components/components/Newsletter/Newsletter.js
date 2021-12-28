import React, {useState} from 'react'
import Input from '../../atoms/Input/Input'
import {
    StyledNewsletterContainer, 
    StyledNewsletterTitle, 
    StyledNewsletterWrapper, 
    StyledButton, 
    StyledNewsletterMessage,
    StyledNewsletterMessageInnerSpan
} from './Newsletter.styles'
import axios from 'axios'

const Newsletter = () => {

    const [valid, setValid] = useState(false);
    const [activeButton, setActiveButton] = useState(true);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validMail = (el) => {
        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(el.target.value)){
            setValid(false);
            setEmail(el.target.value);
            setActiveButton(false);
        }else {
            setValid(true);
            setActiveButton(true);
            setEmail('');
        }
    }

    const sendMail = (el) => {
        axios.post(
        `${process.env.REACT_APP_API_URL}newsletter`, 
        {
            email: email
        }, 
        {
            auth: {
                username: process.env.REACT_APP_USERNAME,
                password: process.env.REACT_APP_PASSWD
            }
        })
        .then(el => {
            setMessage(el.data.message);
        })
    }
    console.log(valid);
    return (
        <StyledNewsletterContainer>
            <StyledNewsletterTitle>
                Sign up for Newsletter
            </StyledNewsletterTitle>
            <StyledNewsletterWrapper>
                <Input 
                    validError={valid}
                    onChange={validMail} 
                    placeholder="Type your email"
                />
                <StyledButton 
                    onClick={sendMail} 
                    disabled={activeButton}
                >
                    <span>
                        Submit
                    </span>
                </StyledButton>
            </StyledNewsletterWrapper>

            <StyledNewsletterMessage>
                <StyledNewsletterMessageInnerSpan show={message}>
                    {message}
                </StyledNewsletterMessageInnerSpan>
            </StyledNewsletterMessage>

        </StyledNewsletterContainer>
    )
}

export default Newsletter;