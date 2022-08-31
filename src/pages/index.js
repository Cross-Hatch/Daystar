import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/seo"
import { Wrapper } from "../Styles/index.styles"
// import ProductCard from "../components/ProductCard/ProductCard.js"

const IndexPage = () => (
  <Wrapper>
    <Layout>
      <Seo title="Home" />
      {/* <ProductCard data={{title: "ginger lime", description: "ginger lemon drink"}} /> */}
      Index
    </Layout>
  </Wrapper>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
