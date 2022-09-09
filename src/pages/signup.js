import { graphql } from 'gatsby';
import React from 'react'
import Layout from "../components/Layout/Layout";
import { Container, ImageView ,Details,SignUpDetails} from '../components/signUp/SignUpPage.styled'

import Form from '../components/signUp/Form';


// import { GatsbyImage, getImage } from "gatsby-plugin-image";


const  SignUpPage = () => {
 
 //const image = getImage(data.file.childImageSharp.gatsbyImageData) 

  return (
    <Layout>
      
    <Container>
       <ImageView>
          <headerText>
        <h1>So Say Swww</h1>
          </headerText>
       </ImageView>
       <SignUpDetails>
        <Details>
           <Form/>
        </Details>
       
  </SignUpDetails> </Container>
    </Layout>
  )
}






export default SignUpPage


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