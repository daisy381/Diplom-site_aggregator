//library
import React from 'react';
import { Form } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

//icons
import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    LeftOutlined,
    MailOutlined,
    UnlockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { FaGithub,FaGoogle,FaFacebook } from "react-icons/fa";

// utils
import { getCookie, setCookie } from "../../helpers/util";
import { authenticationService } from "../../services/authentication";

//style
import {
    SignUpContainer,
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


function SignUp() {
    const token = getCookie('token');
    const navigate = useNavigate();

    if (token) navigate('/');

    const onFinish = async (values) => {
        const { confirm, password, email, name } = values;

        if (confirm !== password) return;

        try {
            const response = await authenticationService.signup({ email, password, name });
            if (!response.token) throw Error(JSON.stringify(response));
            const date = new Date();
            setCookie('token', response.token, { expires: date.setDate(date.getDate() + 1) });
            navigate('/');
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        <SignUpContainer>
            <LoginBGContainer>
                <PContainer>
                    <AContainer as={Link} to={"/"}>
                        <LeftOutlined /> Back to homepage
                    </AContainer>
                </PContainer>
                <LoginContainer>
                    <H3Container>
                        Create an account
                    </H3Container>
                    <Form
                        style={{width:"90%"}}
                        initialValues={{ remember: true }}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Your email"
                            name="email"
                            rules={[{ required: true, message: 'Please input email!' }]}
                        >
                            <InputContainer prefix={<MailOutlined />} placeholder="example@compant.com" />
                        </Form.Item>
                        <Form.Item
                            label="Your password"
                            name="password"
                            rules={[{ required: true, message: 'Please input password!' }]}
                        >
                            <InputPasswordContainer
                                prefix={<UnlockOutlined />}
                                placeholder="Password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                        </Form.Item>
                        <Form.Item
                            label="Confirm password"
                            name="confirm"
                            rules={[{ required: true, message: 'Please confirm password!' }]}
                        >
                            <InputPasswordContainer
                                prefix={<UnlockOutlined />}
                                placeholder="Confirm Password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                        </Form.Item>
                        <Form.Item
                            label="Your name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <InputContainer
                                prefix={<UserOutlined />}
                                placeholder="John Doe" />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <CheckboxContainer>I agree to the terms and conditions</CheckboxContainer>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <ButtonContainer type="primary" htmlType="submit" className="login-form-button">
                                Sign up
                            </ButtonContainer>
                            <LoginWith >
                                or
                            </LoginWith>
                            <BrandIcons>
                                <FaGithub style={{width:20,height:20,marginRight:20}}/>
                                <FaGoogle style={{width:20,height:20}}/>
                                <FaFacebook style={{width:20,height:20,marginLeft:20}}/>
                            </BrandIcons>
                            <CreateContainer>
                                <PContainer>Already have an account?</PContainer>
                                <AContainer as={Link} to={"/signin"}>Login here</AContainer>
                            </CreateContainer>
                        </Form.Item>
                    </Form>
                </LoginContainer>
            </LoginBGContainer>
        </SignUpContainer>
    );
}

export default SignUp;