import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HeaderContainer, LogoImg } from "./Header.style";
import useHeaderQuery from "../../hooks/useHeaderQuery";

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
