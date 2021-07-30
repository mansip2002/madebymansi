import React from 'react'
import {IntroContainer, IntroWrapper, IntroRow, IntroColumn1, IntroColumn2, IntroTextWrapper, IntroTopLine, IntroHeading, IntroSubtitle, IntroImg, IntroImgWrap} from './IntroElements';
import pic from '../../images/intro.png';

const IntroSection = ({lightText, lightBg, id, imgStart, topLine, darkText, headline, alt}) => {
    return (
        <React.Fragment>
            <IntroContainer lightBg={lightBg} id={id}>
                <IntroWrapper>
                    <IntroRow imgStart={imgStart}>
                        <IntroColumn1>
                        <IntroImgWrap>
                            <IntroImg src={pic} alt={alt}/>
                        </IntroImgWrap>
                        </IntroColumn1>
                        <IntroColumn2>
                        <IntroTextWrapper>
                            <IntroTopLine>{topLine}</IntroTopLine>
                            <IntroHeading lightText={lightText}>{headline}</IntroHeading>
                            <IntroSubtitle darkText = {darkText}>
                            Computer Engineering Student  <br /><br />  Designer <br /><br/> Learner
                            </IntroSubtitle>
                        </IntroTextWrapper>
                       
                        </IntroColumn2>
                    </IntroRow>
                </IntroWrapper>
            </IntroContainer>
        </React.Fragment>
    )
}

export default IntroSection
