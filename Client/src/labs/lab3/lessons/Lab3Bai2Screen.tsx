import React, { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import { Container, PersonItem } from '../../../components';
import { IPerson } from '../../../types';
import { axiosGet } from '../../../config/axiosInstance';

const Lab3Bai2Screen: React.FC = () => {
  const [personObj, setPersonObj] = useState<IPerson>({});
  const [personArr, setPersonArr] = useState<IPerson[]>([]);
  const getPersonObj = async () => {
    const response = await axiosGet('/contact/object');
    setPersonObj(response);
  };
  const getPersonArr = async () => {
    const response = await axiosGet('/contact/array');
    setPersonArr(response);
  };
  return (
    <Container>
      <Pressable
        onPress={() => getPersonObj()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Get Person Object
        </Text>
      </Pressable>
      <Pressable
        onPress={() => getPersonArr()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Get Person Array
        </Text>
      </Pressable>
      {personObj ? (
        <PersonItem
          name={personObj.name}
          email={personObj.email}
          phone={personObj.phone}
        />
      ) : null}
      {personArr ? (
        <ScrollView>
          {personArr.map((person, index) => {
            return (
              <PersonItem
                key={index}
                name={person.name}
                email={person.email}
                phone={person.phone}
              />
            );
          })}
        </ScrollView>
      ) : null}
    </Container>
  );
};

export default Lab3Bai2Screen;
