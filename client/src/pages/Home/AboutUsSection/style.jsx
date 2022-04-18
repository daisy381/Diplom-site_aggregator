import styled from "styled-components";

import img_1 from "../../../img/pages/Home/img-1.svg"
import img_2 from "../../../img/pages/Home/img-2.svg"
import img_3 from "../../../img/pages/Home/img-3.svg"
import li_icon from "../../../img/pages/Home/list-icon.svg";



export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width:100%;
  height: 576px;
  padding: 34px;
`;

export const DescriptionContainer = styled.div`
  display: flex; 
  flex-direction: column;
  flex: 1 1 calc((100% / 2) - 1rem);
`;

export const SubTitleContainer = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #feb049;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
  font-family: 'Inter Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  color: #0A093D;
`;

export const ContentContainer = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #656464;
  margin-bottom: 20px;
`;

export const LiItem = styled.div`
  width: 120px;
  height: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #171648;
  background-repeat: no-repeat;
  text-align: end;
  background-image: url(${li_icon});
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  flex: 1 1 calc((100% / 2) - 1rem);
`;

export const MainImgContainer = styled.div`
  width: 270px;
  height: 368px;
  background-image: url(${img_2});
`;

export const OtherImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubImg1Container = styled.div`
  width: 267px;
  height: 252px;
  background-repeat: no-repeat;
  background-image: url(${img_3});
`;

export const SubImg2Container = styled.div`
  width: 267px;
  height: 252px;
  background-repeat: no-repeat;
  background-image: url(${img_3});
`;


