import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput } from 'react-native';
import { Container, Feather, Row } from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosPatch } from '../../../config/axiosInstance';
import { CommonActions, useNavigation } from '@react-navigation/native';

const ChangePasswordScreen: React.FC = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
  const [isHidePassword1, setIsHidePassword1] = useState<boolean>(true);
  const [isHidePassword2, setIsHidePassword2] = useState<boolean>(true);

  const navigation = useNavigation();

  const handleChangePassword = async () => {
    const _id = await AsyncStorage.getItem('_id');
    const response = await axiosPatch('account/changepassword', {
      _id,
      oldPassword,
      newPassword,
      confirmPassword,
    });
    if (response.message === 'Account updated new password successfully') {
      navigation.dispatch(
        CommonActions.reset({ index: 1, routes: [{ name: 'login' }] }),
      );
      await AsyncStorage.clear();
    } else {
      Alert.alert('Notification', response.message);
    }
  };

  return (
    <Container>
      <Text className="font-bold text-center mb-4 text-2xl">
        Change Password
      </Text>
      <Row className="relative mb-4">
        <TextInput
          secureTextEntry={isHidePassword1}
          onEndEditing={e => setOldPassword(e.nativeEvent.text)}
          placeholder="Old Password"
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
      <Row className="relative mb-4">
        <TextInput
          secureTextEntry={isHidePassword}
          onEndEditing={e => setNewPassword(e.nativeEvent.text)}
          placeholder="New Password"
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
          secureTextEntry={isHidePassword2}
          onEndEditing={e => setConfirmPassword(e.nativeEvent.text)}
          placeholder="Confirm New Password"
          className="w-full pl-3 pr-12 border-2 rounded-md border-gray-500"
        />
        <Pressable
          className="absolute self-center right-0 mr-3"
          onPress={() => setIsHidePassword2(!isHidePassword2)}>
          <Feather
            name={isHidePassword2 ? 'eye' : 'eye-off'}
            color="black"
            size={24}
          />
        </Pressable>
      </Row>
      <Pressable
        onPress={() => handleChangePassword()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Submit
        </Text>
      </Pressable>
    </Container>
  );
};

export default ChangePasswordScreen;
