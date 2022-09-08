import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 10em 0 0 4em;
  position: absolute;

  .text-container {
    height: 30%;
    width: 70%;
    position: relative;
    margin-bottom: 1em;
  }

  .Contactus-button {
    position: relative;
    background-color: ${props => props.theme.bg};
    border: 2px solid ${props => props.theme.bg};
    font-weight: bold;
    filter: ${props => props.theme.shadow};
  }
`
