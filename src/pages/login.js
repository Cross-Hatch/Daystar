import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout/Layout"
import {
  Container,
  WelcomeBox,
  FormContainer,
  WelcomeText,
  LoginText,
  Form,
  FormInput,
  FormButton,
  SignUpText,
} from "../components/Login/Login.style"

const Login = () => {
  return (
    <Layout>
      <Container>
        <WelcomeBox>
          <WelcomeText>Welcome Back</WelcomeText>
          <LoginText>
            Login into your Daystar <br /> account to make purchases
          </LoginText>
          <StaticImage width={270} src="../images/productsImage.png" />
        </WelcomeBox>
        <FormContainer>
          <Form>
            <FormInput placeholder="EMAIL OR PHONE" />
            <FormInput placeholder="PASSWORD" />
            <FormButton>LOGIN</FormButton>
            <SignUpText>
              Don't have an account?{" "}
              <b>
                <Link to="/signup">Sign up.</Link>
              </b>
            </SignUpText>
          </Form>
        </FormContainer>
      </Container>
    </Layout>
  )
}

export default Login
