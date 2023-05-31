import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import VersionCheck from 'react-native-version-check';

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Build number: {VersionCheck.getCurrentVersion()}</Text>
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
