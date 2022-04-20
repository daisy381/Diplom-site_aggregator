import styled from "styled-components";
import {Button} from "antd";

export const MainContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 3rem;
  flex-direction: column;
  background-color: rgb(240, 242, 245);
`;

export const BodyContainer = styled.div`
  width: 100%;
  background-color: rgb(240, 242, 245);
  border-radius: 8px;
  padding: 40px 40px 60px;
`;

export const ImgContainer = styled.div`
  position: relative;
  border-radius: 8px;
  width: 100%;
  height: 350px;
  
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
  max-width: 100%;
  height: auto;
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

export const ButtonContainer = styled(Button)`
  background: #feb049 !important;
  border: none;
  width: 200px;
  height: 38px;
  color: #fff;
  border-radius:8px;
`