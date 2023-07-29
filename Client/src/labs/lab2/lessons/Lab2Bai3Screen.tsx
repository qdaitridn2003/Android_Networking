import React, { useState } from 'react';
import { Pressable, Text, TextInput } from 'react-native';
import { Container } from '../../../components';
import { axiosPost } from '../../../config/axiosInstance';

const Lab2Bai3Screen: React.FC = () => {
  const [edge, setEdge] = useState('');
  const [volume, setVolume] = useState('');
  const handleGetVolumeOfCube = async () => {
    const response = await axiosPost('/calc/cube', { edge });
    setVolume(response.volume);
  };
  return (
    <Container>
      <TextInput
        placeholder="Cube Edge"
        onEndEditing={e => setEdge(e.nativeEvent.text)}
        className="border-2 border-gray-400 w-full rounded px-3"
      />
      <Pressable
        onPress={() => handleGetVolumeOfCube()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Submit
        </Text>
      </Pressable>
      <Text className="font-semibold text-lg mt-4">Volume: {volume}</Text>
    </Container>
  );
};

export default Lab2Bai3Screen;
