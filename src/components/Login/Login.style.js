import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5em;
  text-align: center;
  height: 80vh;
  padding: 5em;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    min-height: 60em;
  }
`

export const WelcomeBox = styled.div`
  padding: 3em;
  height: 30em;
`

export const WelcomeText = styled.div`
  font-size: 2.3em;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`

export const ProductsImage = styled.img``

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
`

export const Form = styled.form``
