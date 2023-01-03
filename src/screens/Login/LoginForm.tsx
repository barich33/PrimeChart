import * as React from 'react';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useAuthStore } from 'stores/authStore';
import { login } from '../../services/services';
import {Button, Input, Text, View} from 'ui';

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
    <>
      <View marginVertical="xl">
        <Input
          placeholder="Email"
          onChangeText={t => setValue('email', t)}
          error={errors.email}
        />

        <Input
          placeholder="Password"
          onChangeText={t => setValue('password', t)}
          secureTextEntry={true}
          error={errors.password}
        />
        <Text color="grey" textAlign="right">
          FORGOT?
        </Text>
      </View>
       <Button
        label="Sign in"
        onPress={handleSubmit(onSubmit)}
        testID="sign-in-button"
      />
      <Button
        variant="outline"
        label="Create account"
        onPress={() => console.log('button 1')}
      /> 
    </>
  );
};
