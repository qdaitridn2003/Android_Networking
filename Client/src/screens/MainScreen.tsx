import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Container } from '../components';

const MainScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleDirection = (route: string) => {
    navigation.dispatch(CommonActions.navigate(route));
  };

  return (
    <Container>
      <Pressable
        onPress={() => handleDirection('lab1')}
        className="w-full bg-blue-600 px-4 py-3 rounded">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Lab 1
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('lab2')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Lab 2
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('lab3')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Lab 3
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('lab4')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Lab 4
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('lab5')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Lab 5
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('lab6')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Lab 6
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('lab7')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Lab 7
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('lab8')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Lab 8
        </Text>
      </Pressable>
    </Container>
  );
};

export default MainScreen;
