import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CrudScreen from '../labs/lab8/CrudScreen';
import SignInScreen from '../labs/lab8/SignInScreen';
import SignUpScreen from '../labs/lab8/SignUpScreen';
const Lab8Navigation: React.FC = () => {
  const Lab8Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Lab8Stack.Navigator screenOptions={{ headerShown: false }}>
        <Lab8Stack.Screen name="login" component={SignInScreen} />
        <Lab8Stack.Screen name="register" component={SignUpScreen} />
        <Lab8Stack.Screen name="home" component={CrudScreen} />
      </Lab8Stack.Navigator>
    </NavigationContainer>
  );
};

export default Lab8Navigation;
