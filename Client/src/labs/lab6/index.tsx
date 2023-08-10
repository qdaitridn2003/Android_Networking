import React, { useState } from 'react';
import { Container, Row } from '../../components';
import { Pressable, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { axiosPost } from '../../config/axiosInstance';

const Lab6Screen: React.FC = () => {
  const [value2, setValue2] = useState<string>('0');
  const [value1, setValue1] = useState<string>('0');
  const [type, setType] = useState<string>('F to C');
  const [type1, setType1] = useState<string>('Dollar to VND');
  const [result, setResult] = useState<string>('');
  const [result1, setResult1] = useState<string>('');

  const exchangeTemperature = async () => {
    const response = await axiosPost('/calc/exchange-temp', {
      value: value2,
      type: type,
    });
    setResult(response?.result ?? '');
  };

  const exchangeMoney = async () => {
    const response = await axiosPost('/calc/exchange-money', {
      value: value1,
      type: type1,
    });
    setResult1(response?.result ?? '');
  };

  return (
    <Container>
      <Text className="text-center font-bold text-2xl">
        Exchange Temperature
      </Text>
      <RadioButton.Group onValueChange={value => setType(value)} value={type}>
        <Row className="w-full justify-around">
          <RadioButton.Item label="F To C" value="F to C" />
          <RadioButton.Item label="C To F" value="C to F" />
        </Row>
      </RadioButton.Group>
      <TextInput
        onChangeText={text => setValue2(text)}
        inputMode="numeric"
        placeholder="Enter your value you wanna exchange"
        className="w-full self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
      />
      <Pressable
        onPress={() => exchangeTemperature()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Exchange Temperature
        </Text>
      </Pressable>
      <View>
        {type === 'F to C' ? (
          <Text className="text-xl mt-3 font-semibold">
            Result: {result} °C
          </Text>
        ) : (
          <Text className="text-xl mt-3 font-semibold">
            Result: {result} °F
          </Text>
        )}
      </View>
      <Text className="text-center mt-8 font-bold text-2xl">
        Exchange Money
      </Text>
      <RadioButton.Group onValueChange={value => setType1(value)} value={type1}>
        <Row className="w-full justify-around">
          <RadioButton.Item label="Dollar To VND" value="Dollar to VND" />
          <RadioButton.Item label="VND To Dollar" value="VND to Dollar" />
        </Row>
      </RadioButton.Group>
      <TextInput
        onChangeText={text => setValue1(text)}
        inputMode="numeric"
        placeholder="Enter your value you wanna exchange"
        className="w-full self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
      />
      <Pressable
        onPress={() => exchangeMoney()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Exchange Money
        </Text>
      </Pressable>
      <View>
        {type1 === 'Dollar to VND' ? (
          <Text className="text-xl mt-3 font-semibold">
            Result: {result1} VND
          </Text>
        ) : (
          <Text className="text-xl mt-3 font-semibold">
            Result: {result1} $
          </Text>
        )}
      </View>
    </Container>
  );
};

export default Lab6Screen;
