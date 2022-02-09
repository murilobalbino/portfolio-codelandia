import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--dark);
  height: 734px;
  
  .buttons {
    display: flex;
    button {
      margin-right: 24px;
    }
  }
  .looper-img {
    position: absolute;
    top: 0;
  }
`

export const Content = styled.div`
  max-width: 1080px;
  margin: auto;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-bottom: 2px solid #151515;
  
  font-style: normal;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 500;
  padding: 40px 0;
  
  color: var(--blue);
  a {
    font-size: 18px;
    padding-left: 66px;
    color: var(--gray-light);
    transition: 500ms;
    :hover {
     color: var(--blue) 
    }
  }
`

export const Presentation = styled.div`
  font-style: normal;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  padding: 152px 0 60px 0;
  
  color: #FFFFFF;
  
  div {
    font-size: 64px;
    line-height: 77.45px;
    color: var(--blue);
  }
`