import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

 const StartScreen=({ navigation })=> {
  return (
    <Background>
      <Logo />
      <Header>Login</Header>
      <Paragraph>
        PrimeChart ......
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')} style={undefined}      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')} style={undefined}      >
        Register
      </Button>
    </Background>
  )
}

export default StartScreen;