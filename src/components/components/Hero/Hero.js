import React from 'react'
import { StyledHeroContainer } from './Hero.styled'
import Title from '../../atoms/Title/Title'
import Image from '../../atoms/Image/Image'
import PropTypes from 'prop-types'

const Hero = ({title, imgSrc}) => {
    return (
        <StyledHeroContainer>
            <Title> {title} </Title>
            <Image src={imgSrc} />
        </StyledHeroContainer>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    imgSrc: PropTypes.string
}
Hero.defaultProps = {
    imgSrc: '',
    title: ''
  };
  

export default Hero;