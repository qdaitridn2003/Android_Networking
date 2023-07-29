import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Lab2Bai1Screen,
  Lab2Bai2Screen,
  Lab2Bai3Screen,
  Lab2Bai4Screen,
  Lab2MainScreen,
} from '../labs';
const Lab2Navigation: React.FC = () => {
  const Lab2Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Lab2Stack.Navigator
        initialRouteName="main"
        screenOptions={{ headerShown: false }}>
        <Lab2Stack.Screen name="main" component={Lab2MainScreen} />
        <Lab2Stack.Screen name="bai1" component={Lab2Bai1Screen} />
        <Lab2Stack.Screen name="bai2" component={Lab2Bai2Screen} />
        <Lab2Stack.Screen name="bai3" component={Lab2Bai3Screen} />
        <Lab2Stack.Screen name="bai4" component={Lab2Bai4Screen} />
      </Lab2Stack.Navigator>
    </NavigationContainer>
  );
};

export default Lab2Navigation;
