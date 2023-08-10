import React, { useEffect, useState } from 'react';
import { Container } from '../../components';
import Lab5Screen from '../lab5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from '../../config/supabase';
import { Text } from 'react-native';

const CrudScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  useEffect(() => {
    (async () => {
      const auth_id = await AsyncStorage.getItem('user_id');
      const { data, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('auth_id', auth_id);
      if (data) {
        setName(data[0].name);
        setGender(data[0].gender);
      }
      if (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Container>
      <Text>{name}</Text>
      <Text>{gender}</Text>
      <Lab5Screen />
    </Container>
  );
};

export default CrudScreen;
