import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const ProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    padding: 20,
  },
  box: {
    width: width * 0.42,
    height: height * 0.2,
    backgroundColor: 'rgba(87,74,74,0.77)',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  name: {
    color: 'black',
    fontSize: 19,
    fontWeight: '500',
    fontFamily: 'Roboto-Italic',
  },
  count: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Roboto-Italic',
  },
  backText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    paddingLeft: 10,
  },
  heading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
    alignSelf: 'center',
  },
});
