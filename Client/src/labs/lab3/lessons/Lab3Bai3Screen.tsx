import React, { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import { Container, VersionItem } from '../../../components';
import { axiosGet } from '../../../config/axiosInstance';
import { IVersionAndroid } from '../../../types';

const Lab3Bai3Screen: React.FC = () => {
  const [versionList, setVersionList] = useState<IVersionAndroid[]>([]);

  const getVersionAndroid = async () => {
    const response = await axiosGet('/version');
    setVersionList(response.android);
  };

  return (
    <Container>
      <Pressable
        onPress={() => getVersionAndroid()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Get Android Version
        </Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        {versionList.map((version, index) => {
          return (
            <VersionItem
              key={index}
              api={version.api}
              name={version.name}
              ver={version.ver}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Lab3Bai3Screen;
