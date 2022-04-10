import styled from 'styled-components';
import {Button} from "antd";

export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-left: 284px;
  font-size: 3rem;
  flex-direction: column;
  background-color: rgb(240, 242, 245);
`;

export const HomeContent = styled.div`
  transform: translateY(-50%);
  width: 90%;
  background-color:#fff ;
  height: 90vh;
  border-radius: 8px;
  padding: 30px 20px;
`;

export const TitleContainer = styled.div`
  margin: 0 0 15px 0;
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

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;

`;

export const ProductImages = styled.div`
  display: flex;
  flex-direction: column;

`;

export const ProductMainImage = styled.div`
  padding-top: 14px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ProductOtherImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 15px;
`;

export const ProductDescriptionTitle = styled.p`
  margin: 0;
  font-size: 1.875rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(52, 71, 103);
  font-weight: 700;
`;

export const DescriptionContainer = styled.p`
  margin: 0;
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

export const ButtonContainer = styled(Button)`
  margin-top: 20px;
  width: 200px;
  height: 38px;
  color: #fff;
  border: 1px solid #feb04a;
  border-radius: 2px;
  background-color:#feb04a;
  padding-right:10px;
`