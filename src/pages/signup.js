import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import {useState} from "react";
import Layout from "../components/Layout/Layout";
import { Container, FormContainer, SignupText, WelcomeBox, WelcomeText,Form, FormInput, FormButton, LoginText
           
        } from "../components/Signup/Signup.style";
import app from "../context/firebase";        
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const auth = getAuth(app);
    const handleAdd= () => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert("HEYYYYYY")
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        });
        
        setEmail('')
        setPassword('')
    }
    return ( 
        <Layout>
           <Container>
            <WelcomeBox>
            <WelcomeText>Join The Family</WelcomeText>
            <SignupText>Sign Up and enjoy convenient<br></br> and other benefits from Daystar </SignupText>
            <StaticImage width={270} src="../images/productsImage.png"/>
            </WelcomeBox>
            <FormContainer>
                <Form onSubmit={preventDefault}>    
                <FormInput type="text" placeholder="FIRST NAME"/>
                <FormInput type="text" placeholder="OTHER NAME"/>
                <FormInput type="text" placeholder="LAST NAME"/>
              
                <FormInput type="email"placeholder ="EMAIL" onChange={(e)=> setEmail(e.target.value)} />
                <FormInput type="tel"  placeholder="PHONE"/>
                <FormInput type="password"placeholder="PASSWORD" onChange={(e)=> setPassword(e.target.value)} />
                
                <FormInput placeholder="STREET ADDRESS"/>
                <FormInput placeholder="GPS ADDRESS" />
                <FormInput placeholder="CITY"/>
                <FormInput type="   " placeholder="REGION"></FormInput>
                <FormButton onClick={handleAdd} >SIGN UP</FormButton>
                <LoginText>
              Have an account?{" "}
              <b>
                <Link to="/login">Login.</Link>
              </b>
            </LoginText>
                </Form>
            </FormContainer>
           </Container>
        </Layout>
     );
     
}
const preventDefault = email => {
    email.preventDefault()
  }
 
export default SignupPage;