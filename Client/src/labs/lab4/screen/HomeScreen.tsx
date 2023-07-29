import React, { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { Container } from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const [ownName, setOwnName] = useState<string | null>(null);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      const name = await AsyncStorage.getItem('name');
      setOwnName(name);
    })();
  }, []);

  const handleDirection = (route: string) => {
    navigation.dispatch(CommonActions.navigate(route));
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.dispatch(
      CommonActions.reset({ index: 1, routes: [{ name: 'login' }] }),
    );
  };

  return (
    <Container>
      <Text>{ownName}</Text>
      <Pressable
        onPress={() => {
          handleDirection('changepass');
        }}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Change Password
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleLogout()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Logout
        </Text>
      </Pressable>
    </Container>
  );
};

export default HomeScreen;
