import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { login } from '~services/services'
import { useAuthStore } from '~stores/authStore'
import ActivityIndicator from '~components/ActivityIndicator'
import Scroll from '~components/Scroll'
import ErrorMessage from '~components/ErrorMessage'

const LoginScreen=({ navigation })=> {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
    const [loading,setLoading]=useState(false);
    const [errorMsg,setErrorMsg]=useState(null);
    const {setTokensToLocalStorage, refreshToken, isLoggedIn} = useAuthStore();
    const onLoginPressed =async () => {
      const emailError = emailValidator(email.value)
      const passwordError = passwordValidator(password.value)
      if (emailError || passwordError) {
        setEmail({ ...email, error: emailError })
        setPassword({ ...password, error: passwordError })
        return
      }
      setLoading(true);
       const data={
        email:email.value,
        password:password.value
       };
       try {  
        const response =  await login({data});   
        console.log(response); 
        if(response?.data?.code?.length>0){
          setErrorMsg(response?.data?.message)
          setLoading(false);
          return;
        }    
        const { accessToken, refreshToken } = response?.data;
        setTokensToLocalStorage({ accessToken, refreshToken });
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
        
      } catch (error:any) {
        return {
          error: error?.response?.data?.message || error.message,
          tokens: null,
        };
      }
  }
 
  return (   
    <Background>
      <BackButton goBack={navigation.goBack} />   
      <Scroll>
      <Logo />
      <Header>Login to Access EHR</Header>
      {errorMsg && 
      <ErrorMessage error={errorMsg}/>
      }
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address" description={undefined}      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry description={undefined}      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed} style={undefined}>
        Login
      </Button>
      <ActivityIndicator loading={loading} />
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Register Here</Text>
        </TouchableOpacity>       
      </View>     
      </Scroll>
    </Background>
   
  )
}

export default LoginScreen;
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
 
})
