import React, { useState } from 'react';
import { Text, TextInput, Pressable } from 'react-native';
import { axiosPost } from '../../../config/axiosInstance';
import { Container } from '../../../components';

const Lab2Bai4Screen: React.FC = () => {
  const [aValue, setAValue] = useState<string>('');
  const [bValue, setBValue] = useState<string>('');
  const [cValue, setCValue] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const handleCalcQuadratic = async () => {
    const response = await axiosPost('/calc/quadratic', {
      a: aValue,
      b: bValue,
      c: cValue,
    });
    setResult(response.value);
  };
  return (
    <Container>
      <TextInput
        placeholder="A Value"
        inputMode="numeric"
        onEndEditing={e => setAValue(e.nativeEvent.text)}
        className="border-2 border-gray-400 w-full rounded px-3"
      />
      <TextInput
        onEndEditing={e => setBValue(e.nativeEvent.text)}
        placeholder="B Value"
        inputMode="numeric"
        className="border-2 border-gray-400 w-full rounded px-3 mt-4"
      />
      <TextInput
        onEndEditing={e => setCValue(e.nativeEvent.text)}
        placeholder="C Value"
        inputMode="numeric"
        className="border-2 border-gray-400 w-full rounded px-3 mt-4"
      />
      <Pressable
        onPress={() => handleCalcQuadratic()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Submit
        </Text>
      </Pressable>
      <Text className="font-semibold text-lg mt-4">Result: {result}</Text>
    </Container>
  );
};

export default Lab2Bai4Screen;
