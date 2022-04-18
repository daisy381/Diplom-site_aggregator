import styled from "styled-components";
import {Avatar, Button, Input} from "antd";
const { Search } = Input;

export const NavbarContainer = styled.div`
  position: fixed;
  width:100%;
  display:flex;
  padding-left:284px;
  align-items: center;
  justify-content: space-between;
  height:66px;
  background-color:transparent;
  z-index: 1;
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
  width: 40%;
  display: flex;
  align-items: center;
`;

export const NavbarItemContainer = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
    
`;

export const AvatarSC =styled(Avatar)`
  width: 38px;
  height: 38px;
  font-size:22px;
  margin-left: 20px;
  color: #f56a00;
  background-color: #fde3cf;
  
  & .ant-avatar-string{
    top:3px;
  }
`;

export const ButtonContainer = styled(Button)`
  width: 123px;
  height: 50px;
  color: #fff;
  background: #feb049 !important;
  border:none;
  border-radius:14px;
  margin: 20px 20px 20px 60px;
`;

export const LiItemContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  list-style: none;
  height: 60px;
`;

export const NavbarBeforeLoginContainer = styled.div`
  display: flex;
  width:100%;
  align-items: center;
  justify-content: end;
  position: fixed;
  height:66px;
  padding-left:284px;
  margin-top: 20px;
  background-color:transparent;
  z-index: 1;
`;