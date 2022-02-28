import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  Pressable,
  Alert,
} from 'react-native';
import axios from 'axios';
import {ProductStyles as styles} from './styles';

const {width, height} = Dimensions.get('window');

const Products = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProduct();
  }, []);

  const FetchProduct = async () => {
    setLoading(true);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Basic Y2tfMjJkM2ViMWJmMTIyYjcxMjJiNTIxNjM2ZjYzMmY5YjY4ZmFjOWVhNjpjc180NzJkNThmMjY0N2Y4YjM2ZGMzNjQwNzlhZTNjY2M2NzgyY2Q3MTBk`,
    };
    await axios
      .get(
        `https://kasppe.com.ng/farmsolhub/wp-json/wc/v3/products/categories`,
        {headers: headers},
      )
      .then(async response => {
        await setProducts(response.data);
        await setLoading(false);
      })
      .catch(err => {
        console.log(err, 'Err');
        setLoading(false);
      });
  };

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => Alert.alert('Category', item.name)}>
        <ImageBackground
          resizeMode={'cover'}
          imageStyle={{
            borderRadius: 10,
          }}
          source={{
            uri: item.image
              ? item.image
              : 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
          }}
          style={styles.box}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.count}>Items left:{item.count}</Text>
        </ImageBackground>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.pop()} style={styles.backText}>
        Back
      </Text>

      <Text style={styles.heading}>Product Categories</Text>

      {loading ? (
        <ActivityIndicator color={'grey'} size={'large'} />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Products;
