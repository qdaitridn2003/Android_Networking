import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Pressable } from 'react-native';
import { Container } from '../../components';

const Lab3MainScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleDirection = (route: string) => {
    navigation.dispatch(CommonActions.navigate(route));
  };

  return (
    <Container>
      <Text className="text-center uppercase text-2xl font-bold">Lab 3</Text>
      <Pressable
        onPress={() => handleDirection('bai1')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Bài 1
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('bai2')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Bài 2
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('bai3')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Bài 3
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('bai4')}
        className="w-full bg-blue-600 px-4 py-3 rounded mt-4">
        <Text className="uppercase text-white text-center text-lg font-semibold">
          Bài 4
        </Text>
      </Pressable>
    </Container>
  );
};

export default Lab3MainScreen;
