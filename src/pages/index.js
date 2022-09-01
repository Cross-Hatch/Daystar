import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/seo"
import { Wrapper, PageWrapper } from "../styles/index.styles"
// import ProductCard from "../components/ProductCard/ProductCard.js"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <PageWrapper>
    <Seo title="Home" />
    <Layout>
      <Wrapper>
        //background lines
        <StaticImage
          src="../images/lines.svg"
          alt="bg"
          imgClassName="bg-lines"
          className="wrapper"
        />
      </Wrapper>
    </Layout>
  </PageWrapper>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
