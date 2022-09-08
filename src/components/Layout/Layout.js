import * as React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { GlobalStyle } from "../GlobalStyles"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../ThemeProvider"

const Layout = ({ children, theme }) => {
  return (
    <ThemeProvider theme={
      theme ? theme : defaultTheme
    }>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
}

export default Layout
