
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import Realm from 'realm';

const ProductSchema = {
  name: 'Product',
  properties: {
    _id: 'objectId',
    name: 'string',
    description: 'string',
    image: 'string',
    price: 'double',
    location: 'string',
  },
  primaryKey: '_id',
};

const AddProduct = ({ productToEdit, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setDescription(productToEdit.description);
      setImage(productToEdit.image);
      setPrice(productToEdit.price.toString());
      setLocation(productToEdit.location);
    }
  }, [productToEdit]);

  const handleSave = async () => {
    const realm = await Realm.open({ schema: [ProductSchema] });
    realm.write(() => {
      const newProduct = productToEdit || realm.create('Product', {
        _id: new Realm.BSON.ObjectId(),
        name,
        description,
        image,
        price: parseFloat(price),
        location,
      });
      if (productToEdit) {
        newProduct.name = name;
        newProduct.description = description;
        newProduct.image = image;
        newProduct.price = parseFloat(price);
        newProduct.location = location;
      }
    });
    onSave();
  };

  const handleDelete = async () => {
    const realm = await Realm.open({ schema: [ProductSchema] });
    realm.write(() => {
      const productToDelete = realm.objectForPrimaryKey('Product', productToEdit._id);
      realm.delete(productToDelete);
    });
    onCancel();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Product Name"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Product Description"
      />
      <TextInput
        style={styles.input}
        value={image}
        onChangeText={setImage}
        placeholder="Image URL"
      />
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Product Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Product Location"
      />
      <Button title={productToEdit ? 'Save Changes' : 'Add Product'} onPress={handleSave} />
      {productToEdit && <Button title="Delete Product" onPress={handleDelete} color="red" />}
      <Button title="Cancel" onPress={onCancel} color="gray" />
      {image !== '' && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
  },
});



export default AddProduct

// import { View, Text } from 'react-native'
// import React from 'react'

// const AddProduct = () => {
//   return (
//     <View>
//       <Text>AddProduct</Text>
//     </View>
//   )
// }

// export default AddProduct