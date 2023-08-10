import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './screens/AuthScreen';
import ProfileScreen from './screens/ProfileScreen';

const SignUpScreen: React.FC = () => {
  const SignUpStack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <SignUpStack.Navigator screenOptions={{ headerShown: false }}>
        <SignUpStack.Screen name="auth" component={AuthScreen} />
        <SignUpStack.Screen name="profile" component={ProfileScreen} />
      </SignUpStack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpScreen;
