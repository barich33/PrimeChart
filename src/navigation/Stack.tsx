import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from 'screens';
import TabNavigator from './Tab';
//import RNBootSplash from 'react-native-bootsplash';
import { useAuthStore } from 'stores/authStore';

const Stack = createStackNavigator();

export const StackNavigator = () => {  
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
/*   React.useEffect(() => {
    if (!isLoggedIn) {
      RNBootSplash.hide();
    }
  }, [isLoggedIn]); */
  return (
    <Stack.Navigator
      //headerMode="none"
      screenOptions={{
        cardOverlayEnabled: false,
        gestureEnabled: false,
        animationEnabled: false,
      }}>
      {isLoggedIn === true ? (
        <Stack.Screen name="Home" component={TabNavigator} />
      ) : (
        
     
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      )}
    </Stack.Navigator>
  );
};
