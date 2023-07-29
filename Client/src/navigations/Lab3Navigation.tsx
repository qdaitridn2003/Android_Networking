import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Lab3Bai1Screen,
  Lab3Bai2Screen,
  Lab3Bai3Screen,
  Lab3Bai4Screen,
  Lab3MainScreen,
} from '../labs';
const Lab3Navigation: React.FC = () => {
  const Lab3Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Lab3Stack.Navigator
        initialRouteName="main"
        screenOptions={{ headerShown: false }}>
        <Lab3Stack.Screen name="main" component={Lab3MainScreen} />
        <Lab3Stack.Screen name="bai1" component={Lab3Bai1Screen} />
        <Lab3Stack.Screen name="bai2" component={Lab3Bai2Screen} />
        <Lab3Stack.Screen name="bai3" component={Lab3Bai3Screen} />
        <Lab3Stack.Screen name="bai4" component={Lab3Bai4Screen} />
      </Lab3Stack.Navigator>
    </NavigationContainer>
  );
};

export default Lab3Navigation;
