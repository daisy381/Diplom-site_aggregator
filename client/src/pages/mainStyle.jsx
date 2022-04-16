import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-left: 284px;
  font-size: 3rem;
  flex-direction: column;
  background-color: rgb(240, 242, 245);
`;

export const BodyContainer = styled.div`
  transform: translateY(-30%);
  width: 90%;
  background-color:#fff ;
  border-radius: 8px;
  padding: 30px 20px;
`;

export const ImgContainer = styled.div`
  position: relative;
  border-radius: 8px;
  width: 100%;
  height: 450px;
  
  &::before{
    border-radius: 8px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(33, 47, 61, 0.3);
  }
`;

export const ImgSC = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  margin: 15px 0 5px 0;
  font-size: 1.25rem;
  line-height: 1.375;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(52, 71, 103);
  font-weight: 600;
`;