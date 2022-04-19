import styled from "styled-components";
import {Button} from "antd";


export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  gap:30px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 336px;
  height: 340px;
  background: #FFFFFF;
  box-shadow: 0 26px 49px rgba(146, 165, 184, 0.14);
  border-radius: 14px;
  padding: 40px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 381px;
  height: 322px;
  margin-top: 30px;
`;

export const TitleContainer = styled.div`
  display:flex;
  flex-direction:row;
  gap: 15px;
  align-items: center;
  padding-bottom: 32px;
`;

export const TextContainer = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #0A093D;
`;

export const MemberContainer = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #5D5B70;
`;

export const DescTitleContainer = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  color: #0A093D;
  margin-bottom: 30px;

`;

export const TextBodyContainer = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #8C8C8C;
  margin-bottom: 30px;
`;

export const CardButtonContainer = styled(Button)`
   border: none;
   text-align: start;
`;