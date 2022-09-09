import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout/Layout"
import {
  Container,
  WelcomeBox,
  FormContainer,
  WelcomeText,
  LoginText,
  ProductsImage,
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
            Login into your Daystar account to make purchases
          </LoginText>
          <ProductsImage src="../images/productsImage.png" alt="image" />
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
