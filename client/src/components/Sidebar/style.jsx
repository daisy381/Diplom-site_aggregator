import styled from "styled-components";
import {Link} from "react-router-dom";
import {Menu} from 'antd';

export const LogoContainer = styled.li`
  background-color: #feb049;
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
`;

export const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2rem;
  background: none;
  color:#f5f5f5;
  text-decoration: none;
  
  & :hover{
    color:#507487;;
  }
`;

export const LogoTitle = styled.span`
    font-family: 'Nunito Bold', sans-serif;
    height: 80px;
    display: flex;
    font-size: 36px;
    align-items: center;
    justify-content: start;
    margin-left: 20px;
`;

export const SideContainer= styled.nav`
    background-color: #fff;
    width:284px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    transition: width .3s ease-in-out;
`;

export const UlContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LiItemContainer = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 12px 8px 16px;
  list-style: none;
  height: 60px;
  
  & a{
    text-decoration: none;
    color: #000;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 0 16px;
    border-radius: 12px;
  }
  
  & a:hover{
    background-color: #f4dba2;
  }
  
  & .active{
    background-color: #f4dba2;
  }
`;

export const SpanContainer = styled.span`
  margin-left: 16px;
`;

export const H5Container = styled.h5`
  margin: 25px 0 0 30px;
  font-size: 1.4rem;
  transition: opacity .3s ease-in-out;
  color:rgba(0,0,0,0.5);
`;

export const HrContainer =  styled.hr`
  margin: 40px auto auto auto;
  width: 80%;
`;

export const MenuContainer = styled(Menu)`
  padding: 8px 12px 8px 16px;
  
  & li{
    text-decoration: none;
    color: #000;
    font-size: 18px;
    border-radius: 12px;
  }

  & li:hover{
    background-color: #f4dba2 !important;
    color:#000 !important;
  }

  & li:active{
    background-color: #f4dba2 !important;
  }
  
  & .ant-menu:not(.ant-menu-horizontal),
  .ant-menu-item-selected{
    background-color: #f4dba2 !important;
    color:#000 !important;
  }
`;