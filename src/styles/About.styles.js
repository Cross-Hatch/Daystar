import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  padding: 10em 0 0 4em;

  .text-container {
    height: 30%;
    width: 70%;
    position: relative;
    margin-bottom: 1em;
  }

  .contact-button {
    position: relative;
    background-color: ${props => props.theme.bg};
    border: 2px solid ${props => props.theme.bg};
    font-weight: bold;
    padding: .5em 1em;
    border-radius: 10px;
    margin: 1em;
    filter: ${props => props.theme.shadow};
  }
`
