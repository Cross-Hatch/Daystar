import * as React from "react"
import { FooterContainer } from "./Footer.style"

const Footer = () => {
  return (
    <FooterContainer>
      <p className="daystar-mark">
        DaystarMax Enterprise<sup>&copy;</sup> &middot;{" "}
        {new Date().getFullYear()}
      </p>{" "}
      <p className="crosshatch-mark">
        Made with ❤️&nbsp;|&nbsp;
        <a href="https://cross-hatch.github.io/Portfolio/">Cross Hatch</a>
      </p>
    </FooterContainer>
  )
}

export default Footer
