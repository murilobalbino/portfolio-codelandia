import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--dark);
  height: 585px;
`

export const Content = styled.div`
  max-width: 1080px;
  margin: auto;
  
  display: flex;
  
  h2 {
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    color: #FFF;
    
    padding-top: 100px;
  }
`

export const Experiences = styled.div`
  height: 330px;
  width: 193px;
  
  padding-top: 26px;
  
  div {
    cursor: pointer;
    width: 100%;
    height: 55px;
    border-left: 2px solid #151515;
    transition: 300ms ease-in-out;
    
    padding-top: 18px;
    padding-left: 36px;
    

    p {
      color: #C4C4C4;
      font-weight: 500;
      font-size: 18px;
    }
    
    &.active {
      border-left: 2px solid var(--blue);
    }
  } 
`

export const Description = styled.div`
  padding-left: 88px;
  padding-top: 52px;
  
  div {
    display: flex;
    color: #fff;
    h2 {
      text-transform: none;
      font-weight: 500;
      font-size: 24px;
    }
    p {
      padding-left: 104px;
      padding-top: 106px;
      
      font-weight: 500;
      font-size: 16px;
    }
  }
  
  h4 {
    padding-top: 26px;
    padding-bottom: 26px;
    
    font-weight: 500;
    font-size: 16px;
    color: var(--blue);
  }
  p {
    font-weight: 300;
    size: 18px;
    color: var(--gray-light);

    max-width: 636px;
    max-height: 84px;
  }
`