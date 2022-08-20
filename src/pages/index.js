import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/seo"
import ProductCard from "../components/ProductCard/ProductCard.js"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ProductCard data={{title: "ginger lime", description: "ginger lemon drink"}} />
   Index
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
