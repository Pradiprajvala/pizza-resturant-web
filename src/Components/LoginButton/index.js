import React from 'react'
import  {Button,LoginLink} from './LoginButtonElements.js'
const LoginButton = () => {
  return (
     
        <LoginLink to="/LoginPage">
        <Button> Login </Button>
        </LoginLink>
      
    )
};

export default LoginButton;