import React from 'react';
import { View, Text } from 'react-native';

interface IVersionItemProps {
  ver?: string;
  name?: string;
  api?: string;
}

const VersionItem: React.FC<IVersionItemProps> = props => {
  return (
    <View className="mt-3 border-b-2 border-gray-400 py-3">
      <Text>{props.name}</Text>
      <Text>{props.ver}</Text>
      <Text>{props.api}</Text>
    </View>
  );
};

export default VersionItem;
