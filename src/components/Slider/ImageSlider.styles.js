import styled, { keyframes } from "styled-components"

const pulse = keyframes`
  0% {
    transform: scale(.95);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`

export const ImageSliderContainer = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-12%, -24%); */
  width: 100vw;
  height: 100%;

  .right-arrow,
  .left-arrow {
    position: absolute;
    fill: ${props => props.theme.light};
    font-size: 3em;
    background-color: ${props => props.theme.dark000};
    border-radius: 50%;
    padding: 0.2em;
    filter: ${props => props.theme.shadow("0px", "10px", "#000000", "55")};
    cursor: pointer;
    transition: transform 300ms ease-in-out;

    &:hover {
      transform: translateY(-4px);
    }

    &:active {
      transform: translateY(4px);
    }
  }

  .right-arrow {
    top: 50%;
    right: 10%;
  }

  .left-arrow {
    top: 50%;
    left: 10%;
  }

  .product-label {
    position: absolute;
    top: 20%;
    left: 20%;
    height: 15px;
    width: 20px;
    font-size: 5em;
    font-weight: bold;
    font-family: monospace;
    color: white;
  }

  .slide,
  .active {
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .image {
    transition: transform 300ms ease-in-out;
    position: relative;
    z-index: -10;

    &:hover {
      transform: rotate(-15deg);
      transform-origin: center;
    }
  }
  .product-info {
    position: absolute;
    top: 60%;
    left: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 12em;
    width: 20em;
    padding: 0.2em;
    border-radius: 3%;
    font-size: 1.2em;
    font-weight: bold;
    font-family: monospace;
    color: white;

    .button {
      background-color: ${props => props.theme.dark000};
      color: white;
      width: 5em;
      border-radius: 20px;
      font-size: 1.5em;
      font-weight: bold;
      font-family: monospace;
    }
  }

  .hide-i .more-info {
    display: none;
  }

  .more-info {
    font-size: 1.2em;
    font-weight: bold;
    font-family: monospace;
    color: white;
    background-color: black;
    padding: 0.3em 0.75em;
    border-radius: 50%;
    position: absolute;
    top: 60%;
    right: 1%;
    /* z-index: 10; */
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      inset: 0 0 0 0;
      background-color: ${props => props.theme.dark000};
      border-radius: 50%;
      transform: scale(1.2);
      z-index: -1;

      animation: ${pulse} 1s infinite ease-in-out;
    }

    &:hover {
      transform: translateY(-4px);
    }

    &:active {
      transform: translateY(4px);
    }
  }
`
