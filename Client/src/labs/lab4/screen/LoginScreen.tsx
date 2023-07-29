import React, { useState } from 'react';
import { Pressable, Text, TextInput, Alert } from 'react-native';
import { Container, Feather, Row } from '../../../components';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { axiosPost } from '../../../config/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleDirection = (route: string) => {
    navigation.dispatch(CommonActions.navigate(route));
  };

  const handleLogin = async () => {
    const response = await axiosPost('/account/login', {
      username: username,
      password: password,
    });
    if (!response) {
      Alert.alert('Notification', 'Account is not exist or wrong password');
    } else {
      await AsyncStorage.setItem('_id', response._id);
      await AsyncStorage.setItem('name', response.name);
      handleDirection('home');
    }
  };

  return (
    <Container>
      <Text className="font-bold text-center mb-4 text-2xl">Login</Text>
      <TextInput
        onEndEditing={e => setUsername(e.nativeEvent.text)}
        placeholder="Username"
        className="w-full px-3 border-2 rounded-md border-gray-500 mb-4"
      />
      <Row className="relative mb-4">
        <TextInput
          secureTextEntry={isHidePassword}
          onEndEditing={e => setPassword(e.nativeEvent.text)}
          placeholder="Password"
          className="w-full pl-3 pr-12 border-2 rounded-md border-gray-500"
        />
        <Pressable
          className="absolute self-center right-0 mr-3"
          onPress={() => setIsHidePassword(!isHidePassword)}>
          <Feather
            name={isHidePassword ? 'eye' : 'eye-off'}
            color="black"
            size={24}
          />
        </Pressable>
      </Row>
      <Pressable onPress={() => handleDirection('register')}>
        <Text className="text-center text-md">
          Don't have an account ?{' '}
          <Text className="text-blue-400 underline">Register</Text>
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleLogin()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Login
        </Text>
      </Pressable>
    </Container>
  );
};

export default LoginScreen;
