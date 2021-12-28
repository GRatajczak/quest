import React from 'react'
import {TestimontialContainer, TestimontialInnerWrapper ,StyledImage} from './Testimontial.styles'
import questionMark from '../../../assets/quotation-mark.svg'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import PropTypes from 'prop-types'

const Testimontial = ({text, author}) => {
    return (
        <TestimontialContainer>
            <TestimontialInnerWrapper>
                <StyledImage src={questionMark} />
                <Paragraph>
                    {text}
                </Paragraph>
                <Paragraph dark noMarginBottom>
                    {author}
                </Paragraph>
            </TestimontialInnerWrapper>
        </TestimontialContainer>
    )
}

Testimontial.propTypes = {
    text: PropTypes.string,
    author: PropTypes.string
}
Testimontial.defaultProps = {
    text: '',
    author: ''
};

export default Testimontial;