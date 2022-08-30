import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavLink from "../NavLink/NavLink"
import { NavItems } from "./Header.style"

const Header = ({siteTitle}) => {
  return ( 
    <HeaderContainer>
      <Link to="/">
        {wpMediaItem ? (
          <LogoImg
            image={wpMediaItem.localFile.childImageSharp.gatsbyImageData}
            alt={wpMediaItem.altText}
          />
        ) : (
          siteTitle
        )}
      </Link>
      <NavItems>
        <NavLink to="about" activeClassName="is-active">
          About Us
        </NavLink>
        <NavLink to="store" activeClassName="is-active">
          Order
        </NavLink>
        <NavLink to="signup" activeClassName="is-active">
          Sign Up
        </NavLink>
        <NavLink to="contact" activeClassName="is-active">
          Contact
        </NavLink>
      </NavItems>
    </HeaderContainer>
   );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
