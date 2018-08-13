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

const Sample3 = ({ navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('Sample1')}
    accessibilityLabel="screen3"
  >
    <Text>Sample3</Text>
  </TouchableOpacity>
);

Sample3.navigationOptions = { title: 'Sample3' };

export default Sample3;
