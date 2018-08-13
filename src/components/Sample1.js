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

const Sample1 = ({ navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('Sample2')}
  >
    <Text>Sample1</Text>
  </TouchableOpacity>
);

Sample1.navigationOptions = { title: 'Sample1' };

export default Sample1;
