//library
import React from 'react';
import { Form, Input } from 'antd';
import { Link, useNavigate } from "react-router-dom";

// utils
import {getCookie, setCookie} from "../../helpers/util";
import { authenticationService } from "../../services/authentication";

//icons
import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    MailOutlined,
    UnlockOutlined,
    LeftOutlined
} from '@ant-design/icons';
import { FaGithub,FaGoogle,FaFacebook} from "react-icons/fa";

//style
import {
    SignInContainer,
    LoginBGContainer,
    LoginContainer,
    H3Container,
    InputContainer,
    PContainer,
    InputPasswordContainer,
    CheckboxContainer,
    AContainer,
    ButtonContainer,
    LoginWith,
    BrandIcons,
    CreateContainer
} from "./style";
import "antd/dist/antd.min.css";


export default function SignIn() {
    const token = getCookie('token');
    const navigate = useNavigate();

    if (token) navigate('/');

    const handleFinish = async (values) => {
            const { password, email } = values;

            try {
                const response = await authenticationService.signin({ email, password });
                if (!response.token) throw Error(JSON.stringify(response));
                const date = new Date();
                setCookie('token', response.token, { expires: date.setDate(date.getDate() + 1) });
                navigate('/');
            } catch (e) {
                console.error(e.message);
            }
    }

    return (
        <SignInContainer>
            <LoginBGContainer>
                <PContainer>
                    <AContainer as={Link} to={"/"}>
                        <LeftOutlined /> Back to homepage
                    </AContainer>
                </PContainer>
                <LoginContainer>
                    <H3Container>
                        Sign in to our platform
                    </H3Container>
                    <Form
                        style={{width:"90%"}}
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                        onFinish={handleFinish}
                    >
                        <Form.Item
                            label="Your email"
                            name="email"
                            rules={[{ required: true, message: 'Please input Email!' }]}
                        >
                            {/*<PContainer>Your Email</PContainer>*/}
                            <InputContainer prefix={<MailOutlined />} placeholder="example@compant.com" />
                        </Form.Item>
                        <Form.Item
                            label="Your password"
                            name="password"
                            rules={[{ required: true, message: 'Please input Password!' }]}
                        >
                            {/*<PContainer>Your Password</PContainer>*/}
                            <InputPasswordContainer
                                prefix={<UnlockOutlined />}
                                placeholder="Password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <CheckboxContainer>Remember me</CheckboxContainer>
                            </Form.Item>
                            <AContainer href="">
                                Lost password
                            </AContainer>
                        </Form.Item>

                        <Form.Item>
                            <ButtonContainer type="primary" htmlType="submit">
                                Log in
                            </ButtonContainer>
                            <LoginWith >
                                or login with
                            </LoginWith>
                            <BrandIcons>
                                <FaGithub style={{width:20,height:20,marginRight:20}}/>
                                <FaGoogle style={{width:20,height:20}}/>
                                <FaFacebook style={{width:20,height:20,marginLeft:20}}/>
                            </BrandIcons>
                            <CreateContainer>
                                <PContainer>Not Registered?</PContainer>
                                <AContainer as={Link} to={"/signup"}>Create Account</AContainer>
                            </CreateContainer>
                        </Form.Item>
                    </Form>
                </LoginContainer>
            </LoginBGContainer>
        </SignInContainer>
    );
}