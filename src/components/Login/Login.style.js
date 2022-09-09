import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5em 0;
  text-align: center;
  height: 80vh;
  padding: 5em;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    min-height: 60em;
    margin-top: -2em;
    margin-bottom: -2em;
    height: 100vh;
    font-weight: lighter;
  }
`

export const WelcomeBox = styled.div`
  padding: 3em;
  height: 30em;

  @media screen and (max-width: 820px) {
    margin-bottom: 1em;
    height: auto;
  }
`

export const WelcomeText = styled.div`
  font-size: 2.7em;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    font-size: 1.6em;
  }
`

export const LoginText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 1em;
`

export const FormContainer = styled.div`
  height: 21em;
  width: 23em;
  box-shadow: 0 0 15px -7px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormInput = styled.input`
  margin: 2em;
  display: block;
  width: 18em;
  border: none;
  border-bottom: 1.8px solid ${props => props.theme.bg};
  border-radius: 0.2em;
  background-color: lightgray;
`

export const FormButton = styled.button`
  width: 5.5em;
  border-radius: 6px;
  margin: 0.2em;
  font-size: 1.5em;
  font-weight: bolder;
  cursor: pointer;
  border: none;
  background-color: ${props => props.theme.bg};
  box-shadow: 0 0 5px -3px;
`

export const SignUpText = styled.text`
  display: block;
  margin: 2em;
  margin-bottom: -1em;
`

export const Form = styled.form``
