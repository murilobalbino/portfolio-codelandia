import styled from "styled-components";

export const Container = styled.section`
  height: 565px;
  background: #151515;
`

export const Content = styled.div`
  padding-top: 100px;
  max-width: 1080px;
  margin: auto;
  
  display: flex;
  justify-content: space-between;
  
  div {
    color: #FFF;
    h3 {
      font-size: 24px;
      padding-bottom: 40px;
    }
    h4 {
      font-weight: 500;
      font-size: 20px;
      padding-bottom: 21px;
    }
    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 32px;
      color: var(--gray-light);
    }
    .icons {
      padding-top: 43px;
      a {
        padding-right: 31px;
      }
    }
    .btn {
      display: flex;
      margin-top: 42px;
      button {
        margin-right: 48px;
      }
    }
  }
`

export const Photo = styled.div`
  width: 367px;
  height: 367px;
  background: var(--dark);
`