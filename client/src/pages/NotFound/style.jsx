import styled from 'styled-components';
import {Button} from "antd";

import bg from "../../img/pages/404.svg";

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 6%;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
`;

export const CardContainer = styled.div`
  background-image: url(${bg});
  width:620px;
  height:380px;
  margin-bottom: 30px;
`;

export const H1Container = styled.h1`
  height: 36px;
  margin-bottom: 30px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.3;
  color: #262B40;
`;

export const PContainer = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const ButtonContainer = styled(Button)`
  display: flex;
  justify-content: center;
  color:#ffff;
  width: 164px;
  height: 44px;
  background-color: #262B40;
  border-radius: 8px;
  font-weight: 600;
  line-height: 1.5;
  padding: 0.55rem 0.75rem;
  font-size: 1rem;
`;