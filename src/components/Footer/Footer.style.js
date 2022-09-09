import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.bg};
  height: 4em;
  width: 100vw;
  padding: 0 2em;
  font-size: 0.8em;

  .daystar-mark {
    margin-right: auto;
  }
`
