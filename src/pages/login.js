import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import {useState} from "react"
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../context/firebase"




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const loginuser = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
    setEmail('')
    setPassword('')
  }
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
          <Form onSubmit={preventDefault}>
            <FormInput type="email" placeholder="EMAIL OR PHONE" onChange={(e) => setEmail(e.target.value)} />
           
            <FormInput type="password" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)}/>
            
            <FormButton onClick={loginuser}>LOGIN</FormButton>
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
const preventDefault = email => {
  email.preventDefault()
}

export default Login
