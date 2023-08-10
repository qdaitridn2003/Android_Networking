import React, { useState } from 'react';
import { Container, Row } from '../../../components';
import { Alert, Pressable, Text, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import supabase from '../../../config/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [dob, setDob] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const auth_id = await AsyncStorage.getItem('user_id');
      const { data, error } = await supabase
        .from('Profile')
        .insert([
          { name: name, gender: gender, dob: new Date(dob), auth_id: auth_id },
        ])
        .select();
      if (data) {
        console.log(data);
        Alert.alert('Notification', 'Sign up account successfully');
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Text className="font-bold text-center mb-4 text-2xl">Register</Text>
      <TextInput
        onEndEditing={e => setName(e.nativeEvent.text)}
        placeholder="Name"
        className="w-full px-3 border-2 rounded-md border-gray-500 mb-4"
      />
      <TextInput
        onEndEditing={e => setDob(e.nativeEvent.text)}
        placeholder="Date of birth"
        className="w-full px-3 border-2 rounded-md border-gray-500 mb-4"
      />
      <RadioButton.Group
        onValueChange={value => setGender(value)}
        value={gender}>
        <Row className="w-full justify-around">
          <RadioButton.Item label="Male" value="male" />
          <RadioButton.Item label="Female" value="female" />
        </Row>
      </RadioButton.Group>
      <Pressable
        onPress={() => handleSubmit()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Confirm
        </Text>
      </Pressable>
    </Container>
  );
};

export default ProfileScreen;
