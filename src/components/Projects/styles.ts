import styled from "styled-components";

export const Container = styled.section`
  height: 1325px;
  background: #151515;
`

export const Content = styled.div`
  max-width: 1080px;
  margin: auto;
  color: #fff;
  padding-top: 100px;
  h1 {
    padding-bottom: 60px;
  }
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #C4C4C4;
  }
  
  .project-photo {
    border-left: 4px solid var(--blue);
    border-radius: 4px;
    
    width: 530px;
    height: 200px;
    background-color: #121212;
    
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    

    font-weight: 500;
    font-size: 24px;
    padding: 40px 0 20px 0;
    font-style: normal;
  }
  p {
    font-weight: 300;
    font-size: 16px;
    color: #C4C4C4;
    line-height: 26px;
    
    max-width: 420px;
  }
  h6 {
    font-size: 14px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: var(--blue);
    padding: 26px 0 32px 0;
  }
  button {
    margin-bottom: 80px;
  }
`