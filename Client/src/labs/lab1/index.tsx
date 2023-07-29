import React, { useState } from 'react';
import { Container } from '../../components';
import { Image, Pressable, Text, View } from 'react-native';

const Lab1Screen: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const handleSetImage = () => {
    const imageUrl =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png';
    setTimeout(() => {
      setImageUrl(imageUrl);
    }, 3000);
  };
  return (
    <Container>
      <View className="self-center w-full">
        {imageUrl ? (
          <Image
            source={{
              uri: imageUrl,
            }}
            className="w-full h-32"
          />
        ) : null}
      </View>
      <Pressable
        onPress={() => handleSetImage()}
        className="w-1/2 self-center bg-blue-600 px-3 py-2 rounded mt-3">
        <Text className="text-white text-center uppercase font-semibold text-lg">
          Show Image
        </Text>
      </Pressable>
    </Container>
  );
};

export default Lab1Screen;
