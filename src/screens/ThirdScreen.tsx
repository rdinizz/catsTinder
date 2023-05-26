import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
const image03 = require('../../assets/images/03.png');

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={image03} />
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
