import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from '../screens';
import { Lab1Screen, Lab2Screen, Lab3Screen, Lab4Screen } from '../labs';

const MainNavigation: React.FC = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="home" component={MainScreen} />
        <MainStack.Screen name="lab1" component={Lab1Screen} />
        <MainStack.Screen name="lab2" component={Lab2Screen} />
        <MainStack.Screen name="lab3" component={Lab3Screen} />
        <MainStack.Screen name="lab4" component={Lab4Screen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
