import 'localstorage-polyfill';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './core/theme'
import { registerRootComponent } from 'expo';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './screens'
import { useAuthStore } from '~stores/authStore';
const Stack = createStackNavigator()

 function App() {
  const {isLoggedIn} = useAuthStore();
  return (  
    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn===true?"Dashboard":"StartScreen"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

registerRootComponent(App);
