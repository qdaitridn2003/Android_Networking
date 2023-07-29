import React, { useState } from 'react';
import { Pressable, Text, TextInput, Alert } from 'react-native';
import { Container, Feather, Row } from '../../../components';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { axiosPost } from '../../../config/axiosInstance';

const RegisterScreen: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
  const [isHidePassword1, setIsHidePassword1] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleDirection = (route: string) => {
    navigation.dispatch(CommonActions.navigate(route));
  };

  const handleRegister = async () => {
    const response = await axiosPost('/account/register', {
      username,
      password,
      confirmPassword,
      name,
    });
    console.log(response);
    if (response.message === 'Password do not match') {
      Alert.alert('Notification', response.message);
    } else {
      handleDirection('login');
    }
  };

  return (
    <Container>
      <Text className="font-bold text-center mb-4 text-2xl">Register</Text>
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
      <Row className="relative mb-4">
        <TextInput
          secureTextEntry={isHidePassword1}
          onEndEditing={e => setConfirmPassword(e.nativeEvent.text)}
          placeholder="Confirm Password"
          className="w-full pl-3 pr-12 border-2 rounded-md border-gray-500"
        />
        <Pressable
          className="absolute self-center right-0 mr-3"
          onPress={() => setIsHidePassword1(!isHidePassword1)}>
          <Feather
            name={isHidePassword1 ? 'eye' : 'eye-off'}
            color="black"
            size={24}
          />
        </Pressable>
      </Row>
      <TextInput
        onEndEditing={e => setName(e.nativeEvent.text)}
        placeholder="Name"
        className="w-full px-3 border-2 rounded-md border-gray-500 mb-4"
      />
      <Pressable onPress={() => handleDirection('login')}>
        <Text className="text-center text-md">
          Already have an account ?{' '}
          <Text className="text-blue-400 underline">Login</Text>
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleRegister()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Register
        </Text>
      </Pressable>
    </Container>
  );
};

export default RegisterScreen;
