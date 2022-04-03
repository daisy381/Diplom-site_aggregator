import styled from "styled-components";
import {Button, Checkbox, Input} from "antd";

//icons
import bg from "../../img/pages/signin.svg"

export const SignUpContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background-color: #f5f8fb;
`;

export const LoginBGContainer = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width:1160px;
    height:620px;
    background-image: url(${bg});
    background-repeat: no-repeat;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  padding:3rem;
  width:500px;
  background-color: #ffff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 18px rgb(0 0 0 / 2%);
`;

export const H3Container = styled.h3`
  height: 36px;
  margin-bottom: 30px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.3;
  color: #262B40;
`;

export const InputContainer = styled(Input)`
  border-radius: 8px;
  height: 40px;
  
  & input{
    color: #4A5073;
    margin-left: 10px;
  }
`;

export const PContainer = styled.p`
  margin-right: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;
  color: #4A5073;
`;


export const InputPasswordContainer= styled(Input.Password)`
  border-radius: 8px;
  height: 40px;

  & input{
    color: #4A5073;
    margin-left: 10px;
  }
`;

export const CheckboxContainer = styled(Checkbox)`
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #262B40;
    border-color: #262B40;
  }
`;

export const AContainer = styled.a`
  margin-bottom: 20px;
  color: #262B40;
  font-size: 14px;
  line-height: 1.5;
`;

export const ButtonContainer = styled(Button)`
  width: 100%;
  background-color: #262B40;
`;

export const LoginWith = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const CreateContainer = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;