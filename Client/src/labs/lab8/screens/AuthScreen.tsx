import React, { useState } from 'react';
import { Container, Feather, Row } from '../../../components';
import { Pressable, Text, TextInput } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import supabase from '../../../config/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthScreen: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();
  const handleDirection = (route: string) => {
    navigation.dispatch(CommonActions.navigate(route));
  };

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: username,
      password: password,
    });
    if (data) {
      const result = data.user?.id as string;
      await AsyncStorage.setItem('user_id', result);
      handleDirection('profile');
    }
    if (error) {
      console.log(error);
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
      <Pressable onPress={() => handleDirection('login')}>
        <Text className="text-center text-md">
          Already have an account ?{' '}
          <Text className="text-blue-400 underline">Login</Text>
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleSignUp()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Next
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleDirection('profile')}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Next Profile
        </Text>
      </Pressable>
    </Container>
  );
};

export default AuthScreen;
