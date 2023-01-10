import * as React from 'react';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useAuthStore } from 'stores/authStore';
import { login } from '../../services/services';
import {Button, Input, Text, View} from 'ui';
import { Image, StyleSheet, TextInput} from 'react-native';
import styles from "./style";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native-elements';
const primechart=require('../../images/primechart.png');
type Inputs = {
  email: string;
  password: string;
};

const validation = {
  email: {
    required: {value: true, message: 'Email is required'},
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid Email Format',
    },
  },
  password: {
    required: {value: true, message: 'Password is required'},
  },
};

export const LoginForm = () => {
  const {handleSubmit, formState: { errors }, setValue, register,getValues} = useForm<Inputs>();
 
  const {setTokensToLocalStorage, refreshToken, isLoggedIn} = useAuthStore();

  const onSubmit = async (data: Inputs) => {
    try {  
      
      const response = await login({data});
      console.log(response)
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
  React.useEffect(() => {
    register('email', validation.email);
    register('password', validation.password);
  }, [register]); 

  return (
    <View  style={styles.container}> 
   <Image style={styles.image} source={primechart} /> 

   <StatusBar style="auto" />
      <Input  style={styles.TextInput}
          placeholder="Email"
          onChangeText={t => setValue('email', t)}
          error={errors.email}
        />
      
        <Input  style={styles.TextInput}
          placeholder="Password"
          onChangeText={t => setValue('password', t)}
          secureTextEntry={true}
          error={errors.password}          
        />

        <Text color="grey" textAlign="right">
          FORGOT Password?
        </Text>
        <Button 
        label="Login"
        onPress={handleSubmit(onSubmit)}
        testID="sign-in-button"
      />
      <Button
        variant="secondary"
        label="Don’t have an account? Register Here"
        onPress={() => console.log('button 1')}        
      />  
    
   </View>
  );
}