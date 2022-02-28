import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../constants';

const Button = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="white" size="small" style={{marginTop: 10}} />
      ) : (
        <Text style={styles.buttonTitle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 10,
    height: 50,
    paddingHorizontal: 20,
    width: 150,
  },
  buttonTitle: {
    color: COLORS.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
});

export default Button;
