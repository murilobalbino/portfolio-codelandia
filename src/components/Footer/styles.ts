import styled from "styled-components";

export const Container = styled.section`
  height: 100px;
  background-color: #121212;
`

export const Content = styled.div`
  max-width: 1080px;
  margin: auto;
  padding-top: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #C4C4C4;
    .logo {
      position: relative;
      top: 5px;
    }
  }
`