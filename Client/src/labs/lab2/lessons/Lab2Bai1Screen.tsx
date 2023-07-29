import React, { useState } from 'react';
import { Pressable, Text, TextInput } from 'react-native';
import { Container, Row } from '../../../components';
import { axiosPost } from '../../../config/axiosInstance';

const Lab2Bai1Screen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [name1, setName1] = useState<string>('');
  const [score, setScore] = useState<string>('');
  const [score1, setScore1] = useState<string>('');
  const handleGetStudent = async () => {
    const response = await axiosPost('/student', { name: name, score: score });
    setName1(response.name);
    setScore1(response.score);
  };
  return (
    <Container>
      <TextInput
        placeholder="Name"
        onEndEditing={e => setName(e.nativeEvent.text)}
        className="border-2 border-gray-400 w-full rounded px-3"
      />
      <TextInput
        onEndEditing={e => setScore(e.nativeEvent.text)}
        placeholder="Score"
        inputMode="numeric"
        className="border-2 border-gray-400 w-full rounded px-3 mt-4"
      />
      <Pressable
        onPress={() => handleGetStudent()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Submit
        </Text>
      </Pressable>
      <Row className="justify-around mt-4">
        <Text className="font-semibold text-lg">Name: {name1}</Text>
        <Text className="font-semibold text-lg">Score: {score1}</Text>
      </Row>
    </Container>
  );
};

export default Lab2Bai1Screen;
