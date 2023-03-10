import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Plus} from 'ui/icons/Plus';
import {Home} from 'screens';
import {Button} from 'ui';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  function signOut(): void {
    throw new Error('Function not implemented.');
  }

  //const {signOut} = useAuth();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button label="sign out " onPress={signOut} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home 2" component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarBadge: 1,
          title: 'custom title',
          tabBarIcon: ({
            color,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => <Plus color={color} />,
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
