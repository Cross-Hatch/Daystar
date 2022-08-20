import * as React from "react"
import { FooterContainer } from "./Footer.style";

const Footer = () => {
    return ( 
        <FooterContainer>
            © {new Date().getFullYear()} &middot; Built by
            {` `}
            <a href="https://cross-hatch.github.io/Portfolio/">Cross Hatch</a>
        </FooterContainer>
     );
}
 
export default Footer;