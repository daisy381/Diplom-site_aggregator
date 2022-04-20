import styled from "styled-components";
import {Button, Input} from "antd";
const { Search } = Input;

export const ProductsContainer = styled.div`
  width: 80%;
  margin-left: 40px;
`;

export const ConfigBar = styled.div`
  width: 100%;
  height: 84px;
  padding: 23px 23px;
  border-radius: 8px;
  background-color: #fff;
`;

export const InputSC = styled(Search)`
  border-radius: 8px;
  height: 40px;
  width: 100%;
  & input{
    color: #4A5073;
  }

  &.ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
    border-radius: 0 8px 8px 0;
    background-color: #feb049;
    border-color: #feb049;
  }

  &.ant-input-group > .ant-input:last-child, .ant-input-group-addon:last-child{
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const InputContainer = styled.div`
  padding-left: 15px;
  width: 50%;
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  display:flex;
  padding:20px;
  width: 345px;
  height: 540px;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
`;

export const DescriptionContainer = styled.p`
  padding-left:5px;
  margin: 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  font-weight: 400;
`;

export const PriceContainer = styled.div`
  font-size: 18px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 600;
  line-height: 1.2;
`;

export const DescriptionCardContainer = styled.div`
  margin:10px 0 6px 0;
  font-size: 12px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 1.2;
`;

export const ButtonContainer = styled(Button)`
  margin-top: 20px;
  height: 38px;
  color: #fff;
  border: 1px solid #feb04a;
  border-radius: 2px;
  background-color:#feb04a;
`;

