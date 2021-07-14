import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: linear-gradient(#1b1725,#22303c);

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col2' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;

    grid-area: col1;
`;

export const Column2 = styled.div` //text
    text-align: center;
    padding: 0px 15px;
    grid-area: col2;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase:
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    text-align: left;
    font-size: 48px;
    line-height: 1.1;
    margin-left: 5%;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa':'#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const CompanyName = styled.p`
    max-width: 100%;
    font-size: 24px;
    margin-left: 5%;
    line-height: 24px;
    text-align: left;
    color: ${({darkText}) => (darkText ? '#010606':'#fff')};
`;

export const PositionDates = styled.p`
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    margin-left: 5%;
    line-height: 24px;
    text-align: left;
    color: ${({darkText}) => (darkText ? '#010606':'#fff')};
`;


export const RoleDescription = styled.p`
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    margin-left: 5%;
    line-height: 24px;
    text-align: left;
    color: ${({darkText}) => (darkText ? '#010606':'#fff')};
`;

export const ImgWrap = styled.div`
    max-width: 444px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
`;