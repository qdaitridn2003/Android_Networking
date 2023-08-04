import React, { useState } from 'react';
import { ICRUDProductMethod } from '../types';
import { Alert, Modal, Pressable, Text, TextInput } from 'react-native';
import { Col, Row } from './styles/ViewStyle';
import { AntDesign } from './VectorIcon';
import { axiosDelete, axiosPatch } from '../config/axiosInstance';

const ProductItem: React.FC<ICRUDProductMethod> = props => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [nameProduct, setNameProduct] = useState<string>(props.name);
  const [priceProduct, setPriceProduct] = useState<string>(
    props.price.toString(),
  );
  const [descProduct, setDescProduct] = useState<string | undefined>(
    props.description,
  );

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleDelete = async () => {
    Alert.alert('Notification', 'Do you want to delete this product', [
      {
        text: 'OK',
        onPress: () => {
          (async () => {
            const response = await axiosDelete(`/product/del/${props._id}`);
            Alert.alert('Notification', response.message);
            if (props.handleGetProduct) {
              props.handleGetProduct();
            }
          })();
        },
        style: 'destructive',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const handleEdit = async () => {
    const result = await axiosPatch(`/product/edit/${props._id}`, {
      name: nameProduct,
      price: priceProduct,
      description: descProduct,
    });
    Alert.alert('Notification', result.message);
    if (props.handleGetProduct) {
      props.handleGetProduct();
    }
    closeModal();
  };

  return (
    <Row className="mt-3 bg-blue-300 rounded p-3 shadow-2xl">
      <Col>
        <Text className="text-2xl">{props.name}</Text>
        <Text className="text-lg mt-2">{props.price} $</Text>
        <Text className="text-base mt-2">{props.description}</Text>
      </Col>
      <Col className="flex-1 justify-around items-end">
        <Pressable onPress={() => openModal()}>
          <AntDesign name="edit" color="black" size={32} />
        </Pressable>
        <Pressable onPress={() => handleDelete()}>
          <AntDesign name="delete" color="black" size={32} />
        </Pressable>
      </Col>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => closeModal()}>
        <Col className="flex-1 justify-center items-center mx-1 shadow-2xl">
          <Col className="bg-blue-200 w-full h-2/3">
            <Text className="text-center text-2xl">Edit Product</Text>
            <TextInput
              onEndEditing={e => setNameProduct(e.nativeEvent.text)}
              placeholder={props.name}
              defaultValue={props.name}
              className="w-2/3 self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
            />
            <TextInput
              onEndEditing={e => setPriceProduct(e.nativeEvent.text)}
              inputMode="numeric"
              placeholder={props.price?.toString()}
              defaultValue={props.price?.toString()}
              className="w-2/3 self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
            />
            <TextInput
              onEndEditing={e => setDescProduct(e.nativeEvent.text)}
              placeholder={props.description}
              defaultValue={props.description}
              className="w-2/3 self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
            />
            <Row className="justify-around">
              <Pressable
                onPress={() => handleEdit()}
                className="bg-blue-700 px-2 py-3 w-1/3 self-center mt-3 rounded">
                <Text className="text-center text-white font-semibold text-base">
                  Confirm
                </Text>
              </Pressable>
              <Pressable
                onPress={() => closeModal()}
                className="bg-blue-700 px-2 py-3 w-1/3 self-center mt-3 rounded">
                <Text className="text-center text-white font-semibold text-base">
                  Cancel
                </Text>
              </Pressable>
            </Row>
          </Col>
        </Col>
      </Modal>
    </Row>
  );
};

export default ProductItem;
