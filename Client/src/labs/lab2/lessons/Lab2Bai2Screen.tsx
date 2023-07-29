import React, { useState } from 'react';
import { Text, TextInput, Pressable } from 'react-native';
import { Container, Row } from '../../../components';
import { axiosPost } from '../../../config/axiosInstance';

const Lab2Bai2Screen: React.FC = () => {
  const [shortEdge, setShortEdge] = useState<string>('');
  const [longEdge, setLongEdge] = useState<string>('');
  const [perimeter, setPerimeter] = useState<string>('');
  const [acreage, setAcreage] = useState<string>('');
  const handleCalcWithEdge = async () => {
    const response = await axiosPost('/calc/retangle', { shortEdge, longEdge });
    setAcreage(response.acreage);
    setPerimeter(response.perimeter);
  };
  return (
    <Container>
      <TextInput
        placeholder="Long Edge"
        inputMode="numeric"
        onEndEditing={e => setLongEdge(e.nativeEvent.text)}
        className="border-2 border-gray-400 w-full rounded px-3"
      />
      <TextInput
        onEndEditing={e => setShortEdge(e.nativeEvent.text)}
        placeholder="Short Edge"
        inputMode="numeric"
        className="border-2 border-gray-400 w-full rounded px-3 mt-4"
      />
      <Pressable
        onPress={() => handleCalcWithEdge()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Submit
        </Text>
      </Pressable>
      <Row className="justify-around mt-4">
        <Text className="font-semibold text-lg">Perimeter: {perimeter}</Text>
        <Text className="font-semibold text-lg">Acreage: {acreage}</Text>
      </Row>
    </Container>
  );
};

export default Lab2Bai2Screen;
