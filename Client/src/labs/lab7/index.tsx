import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../../components';
import { Pressable, Text, TextInput, ScrollView } from 'react-native';
import io from 'socket.io-client';
import { localhost } from '../../config/axiosInstance';

const Lab7Screen: React.FC = () => {
  const [message, setMesssage] = useState<string>('');
  const messageRef = useRef<{ message: string }[]>([]);
  const socket = io(`http://${localhost}:8080`);

  const sendMessage = () => {
    socket.emit('send-message', { message: message });
  };

  useEffect(() => {
    socket.on('receive-message', data => {
      console.log(data);
      if (data) {
        messageRef.current.push(data);
      }
    });
  }, [socket]);

  return (
    <Container>
      <TextInput
        onEndEditing={e => setMesssage(e.nativeEvent.text)}
        placeholder="Message"
        className="w-full px-3 border-2 rounded-md border-gray-500 mb-4"
      />
      <Pressable
        onPress={() => sendMessage()}
        className="bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Send Message
        </Text>
      </Pressable>
      <Text className="text-center font-bold text-2xl">Message</Text>
      <ScrollView>
        {messageRef.current.map((data, index) => (
          <Text key={index}>{data.message}</Text>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Lab7Screen;
