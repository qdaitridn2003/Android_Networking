import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { IProduct } from '../../types';
import { axiosGet, axiosPost } from '../../config/axiosInstance';
import ProductItem from '../../components/ProductItem';
import { Col, Container, Row } from '../../components';

const Lab5Screen: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [nameProduct, setNameProduct] = useState<string>('');
  const [priceProduct, setPriceProduct] = useState<string>('');
  const [descProduct, setDescProduct] = useState<string | undefined>('');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleGetProduct = async () => {
    const response = await axiosGet('/product');
    setProducts(response.result);
  };

  const handleAddProduct = async () => {
    const result = await axiosPost('/product/add', {
      name: nameProduct,
      price: priceProduct,
      description: descProduct,
    });
    Alert.alert('Notification', result.message);
    handleGetProduct();
    closeModal();
  };

  return (
    <Container>
      <Pressable
        onPress={() => handleGetProduct()}
        className="bg-blue-700 px-3 py-4 w-1/2 self-center mt-3 rounded">
        <Text className="text-center text-white font-semibold text-base">
          Get Product
        </Text>
      </Pressable>
      <Pressable
        onPress={() => openModal()}
        className="bg-blue-700 px-3 py-4 w-1/2  self-center mt-3 rounded">
        <Text className="text-center text-white font-semibold text-base">
          Add Product
        </Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        {products.map(product => (
          <ProductItem
            key={product._id}
            _id={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            handleGetProduct={handleGetProduct}
          />
        ))}
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => closeModal()}>
        <Col className="flex-1 justify-center items-center mx-1 shadow-2xl">
          <Col className="bg-blue-200 w-full h-2/3">
            <Text className="text-center text-2xl">Add Product</Text>
            <TextInput
              onEndEditing={e => setNameProduct(e.nativeEvent.text)}
              placeholder="Name Product"
              className="w-2/3 self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
            />
            <TextInput
              onEndEditing={e => setPriceProduct(e.nativeEvent.text)}
              inputMode="numeric"
              placeholder="Product Price"
              className="w-2/3 self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
            />
            <TextInput
              onEndEditing={e => setDescProduct(e.nativeEvent.text)}
              placeholder="Product Description"
              className="w-2/3 self-center px-3 mt-3 border-2 rounded-md border-gray-500 mb-4"
            />
            <Row className="justify-around">
              <Pressable
                onPress={() => handleAddProduct()}
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
    </Container>
  );
};

export default Lab5Screen;
