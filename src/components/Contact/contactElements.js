import styled from 'styled-components';


export const ProjectsContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1b1725;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const Text = styled.div`

    color: #fff;
    font-size: 20px;
    text-shadow:  
    0 0 7px #fff,
    0 0 42px #cdf7f6,
    0 0 151px #cdf7f6;
  

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 50px;
    max-height: 2000px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH2 = styled.h2`
    cont-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;