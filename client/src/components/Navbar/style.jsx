import styled from "styled-components";
import {Avatar, Button, Input} from "antd";
const { Search } = Input;

export const NavbarContainer = styled.div`
  width:100%;
  display:flex;
  margin-left:284px;
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
  width: 30%;
  display: flex;
  align-items: center;
`;

export const NavbarItemContainer = styled.div`
  width: 520px;
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
  height: 32px;
  color: #dbdbdb;
  border: 1px solid #feb04a;
  border-radius: 2px;
  background-color:#323232;
  padding-right:10px;
  
  &:hover{
    transition: background-color .2s ease,margin .2s ease;
    background: #feb04a;
    color: #fff;
    border: 1px solid #feb04a
  }
`;

export const LiItemContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  list-style: none;
  height: 60px;
`;