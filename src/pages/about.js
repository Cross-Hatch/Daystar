import * as React from "react"
import Layout from "../components/Layout/Layout"
import { Wrapper } from "../styles/About.styles"
// import { defaultTheme } from "../components/ThemeProvider"

const AboutPage = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>WHO WE ARE</h1>
        <div className="text-container">
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
        </div>
        <div className="text-container">
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
        </div>
        <button className="Contactus-button">CONTACT US</button>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage
