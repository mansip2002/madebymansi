import styled from 'styled-components';


export const ProjectsContainer = styled.div`
    height: 150px;
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
    margin-bottom: 10px;
  

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 50px;
    max-height: 2000px;
`;

export const ProjectIcon = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 10%;
    margin-right: 30px;
    margin-bottom: 10px;
`;