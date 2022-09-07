import React from "react"
import PropTypes from "prop-types"
import { NavLinkContainer } from "./NavLink.style"
import { Link } from "gatsby"

const NavLink = ({ children, to, activeClassName }) => {
  return (
    <NavLinkContainer>
      <Link to={`/${to}`} activeClassName={activeClassName}>{children}</Link>
    </NavLinkContainer>
  )
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string
}

export default NavLink
