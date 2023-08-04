import React, { useEffect, useState } from 'react';
import { Container, Row } from '../../components';
import { Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { axiosPost } from '../../config/axiosInstance';

const Lab6Screen: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [type, setType] = useState<string>('F to C');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    (async () => {
      const response = await axiosPost('/calc/exchange-temp', { value, type });
      setResult(response.result);
    })();
  }, [type, value]);

  return (
    <Container>
      <RadioButton.Group onValueChange={value => setType(value)} value={type}>
        <Row className="w-full justify-around">
          <RadioButton.Item label="F To C" value="F to C" />
          <RadioButton.Item label="C To F" value="C to F" />
        </Row>
      </RadioButton.Group>
      <TextInput
        onChangeText={text => setValue(text)}
        inputMode="numeric"
        placeholder="Enter your value you wanna exchange"
        className="w-full self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
      />
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
    </Container>
  );
};

export default Lab6Screen;
