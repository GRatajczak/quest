import React from 'react'
import {TestimontialContainer, TestimontialInnerWrapper ,StyledImage} from './Testimontial.styles'
import questionMark from '../../../assets/quotation-mark.svg'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const Testimontial = () => {
    return (
        <TestimontialContainer>
            <TestimontialInnerWrapper>
                <StyledImage src={questionMark} />
                <Paragraph>
                    Torquatos nostros? quos dolores eos, qui studiose antiqua persequeris, claris et quasi naturalem. In quo enim inter mediocrem animadversionem atque insitam in malis dolor, non numquam. At vero eos et dolore suo sanciret.
                </Paragraph>
                <Paragraph dark noMarginBottom>
                    John Doe, Street Artist
                </Paragraph>
            </TestimontialInnerWrapper>
        </TestimontialContainer>
    )
}


export default Testimontial;