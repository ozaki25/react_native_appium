import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Sample2 = ({ navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('Sample3')}
    accessibilityLabel="screen2"
  >
    <Text>Sample2</Text>
  </TouchableOpacity>
);

Sample2.navigationOptions = { title: 'Sample2' };

export default Sample2;
