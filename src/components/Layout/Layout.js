import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { GlobalStyle } from "../GlobalStyles"
import { ThemeProvider } from "styled-components"

const  Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      <Footer />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
