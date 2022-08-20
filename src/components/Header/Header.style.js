import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  min-width: 100%;
  height: 3em;
`

export const LogoImg = styled(GatsbyImage)`
    width: auto;
`