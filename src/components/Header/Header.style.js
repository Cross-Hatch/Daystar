import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

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
  filter: ${props => props.theme.shadow};
  position: absolute;
  inset: 0 auto auto 0;
  z-index: 10;
`

export const LogoImg = styled(GatsbyImage)`
  width: auto;
  min-width: 50px;
`

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  a {
    margin-right: auto;
    padding: 0.3em 0;
    color: black;

    &:active {
      color: black;
    }
  }

  a.is-active {
    border-bottom: 2px solid black;
  }
`
