import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2em;
  padding-inline: clamp(2em, 5em, 500em);
  min-width: 100%;
  margin: 0 0 1em 0;
  height: 4em;
  border-radius: 0 0 20px 20px;
  background-color: yellow;
`

export const LogoImg = styled(GatsbyImage)`
    width: auto;
`