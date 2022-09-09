import * as React from "react"
import Layout from "../components/Layout/Layout"
import { Wrapper } from "../styles/About.styles"
// import { defaultTheme } from "../components/ThemeProvider"

const AboutPage = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>WHO WE ARE</h1>
        <p className="text-container">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem2000
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem2000
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nulla lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nulla lorem2000 ipsum dolor sit
          amet, consectetur adipiscing elit.lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla lorem2000 ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla lorem2000 ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla lorem ipsum dolor sit amet,
        </p>
        <button className="contact-button">CONTACT US</button>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage
