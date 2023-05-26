import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
const image02 = require('../../assets/images/02.png');

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={image02} />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    paddingTop: 60,
  },
});
