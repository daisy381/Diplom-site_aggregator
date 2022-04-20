import styled from 'styled-components';
import {Avatar} from "antd";

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(33, 47, 61, 0.3);
  }
`;

export const BodyContainer = styled.div`
  transform: translateY(-20%);
  width: 90%;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 40px 60px;
`;

export const ImgSC = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export const ProfileContentDesc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AvatarSC =styled(Avatar)`
  width: 74px;
  height: 74px;
  font-size:22px;
`;

export const AvatarContainer = styled.div`
  display:flex;
  margin: 24px 0 0 24px;
`;

export const AvatarContainerInfo = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const AvatarContainerName = styled.p`
  padding-top: 12px;
  margin-bottom: 2px;
  font-size: 1.25rem;
  line-height: 1.375;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  color: rgb(52, 71, 103)
`;

export const AvatarContainerPosition = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  font-family: "Nunito Sans", sans-serif;
  color: rgb(123, 128, 154);
  font-weight: 400;
`;

export const PrfileDesc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 30px 0 30px;
`;

export const ProfileDescInform = styled.div`
  display:flex;
  flex-direction: column;
  width: 400px;
`;

export const ProfileDescInformTitle = styled.div`
  margin: 0;
  font-size: 1.2rem;
  line-height: 2.5;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0.0075em;
  opacity: 1;
  text-transform: capitalize;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(52, 71, 103);
  font-weight: 600;
`;

export const ProfileDescInformText = styled.div`
  margin: 10px 0 5px 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(123, 128, 154);
  font-weight: 300;
`;

export const ProfileDescItem = styled.div`
  margin-top:10px;
  display:flex;
  flex-direction: row;
`;

export const TitleContainer = styled.span`
  margin: 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  opacity: 1;
  text-transform: capitalize;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(52, 71, 103);
  font-weight: 700;
`;

export const DescContainer = styled.span`
  margin: 0 0 0 10px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(123, 128, 154);
  font-weight: 400;
`;

export const ProfileProducts = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-top:30px;
`;

export const BoughtProducts = styled.div`
  display: flex;
  flex-direction: row;
`;