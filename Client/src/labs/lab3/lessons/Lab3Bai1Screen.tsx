import React, { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import { Container, PersonItem } from '../../../components';
import { IContact } from '../../../types';
import { axiosGet } from '../../../config/axiosInstance';

const Lab3Bai1Screen: React.FC = () => {
  const [contactList, setContactList] = useState<IContact[]>([]);
  const getContactWithoutAvt = async () => {
    const response = await axiosGet('/contact/list');
    setContactList(response.contacts);
  };
  return (
    <Container>
      <Pressable
        onPress={() => getContactWithoutAvt()}
        className="mt-4 bg-blue-600 w-1/2 self-center px-4 py-3 mb-4 rounded-md">
        <Text className="text-center uppercase font-semibold text-md text-white">
          Get Contact Without Avatar
        </Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        {contactList.map(contact => {
          return (
            <PersonItem
              key={contact.id}
              email={contact.email}
              name={contact.name}
              phone={{ mobile: contact.phone?.mobile }}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Lab3Bai1Screen;
