import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
/*!
* Resets form Piccalilli - A Modern CSS Reset
* @link https://piccalil.li/blog/a-modern-css-reset/
*/
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* My reset */
:root {
  overflow-x: hidden;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
h1 {
  font-weight: bold !important;
  /* color: ${props => props.theme.light}; */
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  font-family: "Popins", sans-serif !important;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  /* My reset */
  color: ${props => props.theme.color};
  /* background-color: ${props => props.theme.dark000}; */
}
/* A elements that don't have a class get default styles */
a {
  text-decoration: none;
  color: ${props => props.theme.color};
}

* .active-link {
  /* color: ${props => props.theme.light}; */
}

a:not([class]) {
  text-decoration-skip-ink: auto;
  color: ${props => props.theme.color};
  text-decoration: none;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`
