import React from 'react';
import {Text, View} from 'react-native';
import {CustomButton} from '../../components';
import {WelcomeScreenStyles as styles} from './styles';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to Niish, click here to continue
      </Text>
      <CustomButton
        title="Continue"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

export default Welcome;
