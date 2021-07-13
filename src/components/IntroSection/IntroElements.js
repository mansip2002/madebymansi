import styled from 'styled-components';

export const IntroContainer = styled.div`
    color: #fff;
    background: linear-gradient(#22303c,#1b1725);
    

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const IntroWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const IntroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col2' 'col2 col2'`};
    }
`;

export const IntroColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const IntroColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const IntroTopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase:
    margin-bottom: 16px;
`;

export const IntroHeading = styled.h1`
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;
    font-size: 48px;
    text-shadow:  
    0 0 21px #fff,
    0 0 151px #cdf7f6;
    
    color: ${({lightText}) => (lightText ? '#f7f8fa':'#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const IntroTextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const IntroSubtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 24px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606':'#fff')};
`;

export const IntroImgWrap = styled.div`
    max-width: 444px;
    height: 100%;
`;

export const IntroImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
`;