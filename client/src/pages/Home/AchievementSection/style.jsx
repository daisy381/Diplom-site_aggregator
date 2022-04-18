import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
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

export const TextBodyContainer = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #5D5B70;
`;