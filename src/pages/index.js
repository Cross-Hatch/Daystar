import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/seo"
import ImageSlider from "../components/Slider/ImageSlider"
import { Wrapper, PageWrapper } from "../styles/Index.styles"
// import ProductCard from "../components/ProductCard/ProductCard.js"
import { StaticImage } from "gatsby-plugin-image"
import { SliderData } from "../components/Slider/SliderData"
import { redTheme } from "../components/ThemeProvider"

const IndexPage = () => (
  <Layout theme={redTheme}>
    <Seo title="Home" />
    <PageWrapper>
      <Wrapper>
        <StaticImage
          src="../images/lines.svg"
          alt="bg"
          imgClassName="bg-lines"
          className="wrapper"
        />
        <ImageSlider slides={SliderData} />
      </Wrapper>
    </PageWrapper>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

