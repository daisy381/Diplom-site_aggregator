import styled from "styled-components";
import {Button} from "antd";

export const WelcomeContainer = styled.div`
  position: relative;
  padding: 60px 30px 30px 30px;
  width:100%;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%);
`;

export const ImgContainer = styled.div`
  position: relative;
  width:100%;
  text-align:center;
  flex: 1 1 calc((100% / 2) - 1rem);
`;

export const TextContainer = styled.div`
  padding-left: 90px;
  display: flex;
  flex-direction: column;
  flex: 1 1 calc((100% / 2) - 1rem);
`;

export const TitleContainer = styled.h4`
  margin-top: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 66px;
  color: #0A093D;
  text-align: start;
`;

export const DescContainer = styled.h5`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #656464;
  text-align: start;
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ButtonGhostContainer = styled(Button)`
  background: transparent;
  border: 1px  #feb049 solid;
  width: 200px;
  height: 38px;
  color: #656464;
  border-radius:8px;
`