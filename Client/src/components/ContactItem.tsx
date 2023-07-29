import React from 'react';
import { Image, Text } from 'react-native';
import { Col, Row } from './styles/ViewStyle';

interface IContactItemProps {
  name?: string;
  email?: string;
  profile_pic?: string;
}

const ContactItem: React.FC<IContactItemProps> = props => {
  const tempUri =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541';
  return (
    <Row className="border-b-2 border-gray-300 py-2 mt-3">
      <Image
        source={{ uri: props.profile_pic ?? tempUri }}
        className="w-16 h-16 rounded-lg"
      />
      <Col className="ml-3">
        <Text>{props.name}</Text>
        <Text>{props.email}</Text>
      </Col>
    </Row>
  );
};

export default ContactItem;
