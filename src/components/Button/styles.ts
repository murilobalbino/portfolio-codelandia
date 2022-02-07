import styled from "styled-components";

export const Btn = styled.button`
  width: 153px;
  height: 45px;

  font-style: normal;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  
  img {
    margin-right: 10px;
  }
  
  &.pink {
    border: double 2px transparent;
    border-radius: 4px;
    background-image: linear-gradient(#121212, #121212), linear-gradient(90deg, rgba(210,64,116,1) 0%, rgba(101,24,180,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  &.purple {
    border: double 2px transparent;
    border-radius: 4px;
    background-image: linear-gradient(#121212, #121212), linear-gradient(135deg, rgba(147,88,247,1) 0%, rgba(16,215,226,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box
  }
`