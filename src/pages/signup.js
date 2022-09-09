import { graphql } from 'gatsby';
import React from 'react'
import Layout from "../components/Layout/Layout";
import { Container, ImageView ,Details,SignUpDetails , HeaderText} from '../components/signUp/SignUpPage.styled'

import Form from '../components/signUp/Form';


// import { GatsbyImage, getImage } from "gatsby-plugin-image";


const  SignUpPage = () => {
 
 //const image = getImage(data.file.childImageSharp.gatsbyImageData) 

  return (
    <Layout>
      
    <Container>
       <ImageView>
          <HeaderText>
           
        <h1>Join The Family</h1>
        <p>Sign Up and Enjoy Conviniece other <br /> benefits froms Daystar</p>
  
   </HeaderText>
        <img src={`../../SignUpImage.png`}/>
       
       </ImageView>
       <SignUpDetails>
        <Details>
           <Form/>
        </Details>
       
  </SignUpDetails> </Container>
    </Layout>
  )
}






export default SignUpPage;

export const query = graphql`
query Banner {
  file(relativePath: {eq: "SignUpImage.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}
`

console.log(query)