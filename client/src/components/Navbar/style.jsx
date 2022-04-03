import styled from "styled-components";
import {Avatar, Button, Input} from "antd";
const { Search } = Input;

export const NavbarContainer = styled.div`
  position:fixed;
  width:100%;
  display:flex;
  margin-left:284px;
  align-items: center;
  height:66px;
  background-color:#323232;
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
  padding-left: 40px;
  width: 30%;
  display: flex;
  align-items: center;
`;

export const AvatarSC =styled(Avatar)`
  color: #f56a00;
  background-color: #fde3cf;
`;

export const NavbarItemContainer = styled.div`
  width: 400px;
  display: flex;
    
`;
export const ButtonContainer = styled(Button)`
    
`