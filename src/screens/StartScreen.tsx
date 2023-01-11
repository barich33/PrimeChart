import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];
 const StartScreen=({ navigation })=> {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
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