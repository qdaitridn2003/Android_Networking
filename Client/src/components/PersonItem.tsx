import React from 'react';
import { Text, View } from 'react-native';

type PhoneType = {
  home?: string;
  mobile?: string;
};

interface IPersonItemProps {
  name?: string;
  email?: string;
  phone?: PhoneType;
}

const PersonItem: React.FC<IPersonItemProps> = props => {
  return (
    <View className="border-b-2 border-gray-300 py-2 mt-3">
      <Text className="font-bold text-xl text-blue-800">{props.name}</Text>
      <Text className="text-pink-400">{props.email}</Text>
      <Text>{props.phone?.mobile}</Text>
      {props.phone?.home ? <Text>{props.phone?.home}</Text> : null}
    </View>
  );
};

export default PersonItem;
