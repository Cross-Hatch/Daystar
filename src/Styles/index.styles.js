import styled from "styled-components"

export const PageWrapper = styled.div`
  background-color: ${props => props.theme.bg} !important;
  height: 100vh;
  width: 100%;
`
//wraps inner elements of the index page
export const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  position: absolute;
  /* inset: 4em auto auto auto; */

  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 4em;
  }

  .bg-lines {
    opacity: 0.2 !important;
  }
`
