import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { login } from '../services/services';
import { useAuthStore } from '../stores/authStore';
import { Text } from '../ui/Text';
  const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setTokensToLocalStorage, refreshToken, isLoggedIn} = useAuthStore();
    const onLogin = async () => {
     
      try {     
       
        const response = await login({email, password});
        const { accessToken, refreshToken } = response.data;
        setTokensToLocalStorage({ accessToken, refreshToken });
         console.log(accessToken,refreshToken);
      } catch (error:any) {
        return {
          error: error?.response?.data?.message || error.message,
          tokens: null,
        };
      }
    };
    
  return (
      <SafeAreaView style={styles.container}>
        <Text variant="header">Login Page</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fefefe"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
            value={email}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fefefe"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <Button title="Login"  onPress={() => onLogin()} />
      </SafeAreaView>
    );  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  logo: {
    fontSize: 60,
    color: '#fff',
    margin: '20%',
  },
  form: {
    width: '80%',
    margin: '10%',
  },
  input: {
    fontSize: 20,
    color: '#fff',
    paddingBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  button: {},
});

export default LoginScreen;
