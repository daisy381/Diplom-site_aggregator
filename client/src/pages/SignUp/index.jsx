//library
import React from 'react';
import { Form } from 'antd';
import {Link, useNavigate} from 'react-router-dom';


//icons
import {
    EyeInvisibleOutlined,
    EyeTwoTone, LeftOutlined,
    MailOutlined,
    UnlockOutlined
} from '@ant-design/icons';
import { FaGithub,FaGoogle,FaFacebook} from "react-icons/fa";

// utils
import { getCookie } from "../../helpers/util";

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

    const onFinish = values => {
        console.log('Received values of form: ', values);
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
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Email!',
                                },
                            ]}
                        >
                            <PContainer>Your Email</PContainer>
                            <InputContainer
                                prefix={<MailOutlined/>}
                                placeholder="example@compant.com" />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Password!',
                                },
                            ]}
                        >
                            <PContainer>Your Password</PContainer>
                            <InputPasswordContainer
                                prefix={<UnlockOutlined />}
                                placeholder="Password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm Password!',
                                },
                            ]}
                        >
                            <PContainer>Confirm Password</PContainer>
                            <InputPasswordContainer
                                prefix={<UnlockOutlined />}
                                placeholder="Confirm Password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
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