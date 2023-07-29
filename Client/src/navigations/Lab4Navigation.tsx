import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  LoginScreen,
  ChangePasswordScreen,
  RegisterScreen,
  HomeScreen,
} from '../labs';
const Lab4Navigation: React.FC = () => {
  const Lab4Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Lab4Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}>
        <Lab4Stack.Screen name="login" component={LoginScreen} />
        <Lab4Stack.Screen name="home" component={HomeScreen} />
        <Lab4Stack.Screen name="register" component={RegisterScreen} />
        <Lab4Stack.Screen name="changepass" component={ChangePasswordScreen} />
      </Lab4Stack.Navigator>
    </NavigationContainer>
  );
};

export default Lab4Navigation;
