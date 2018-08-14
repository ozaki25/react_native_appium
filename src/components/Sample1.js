import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Sample1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Sample2')}
        accessibilityLabel="screen1"
      >
        <Text accessibilityLabel="sample1">Sample1</Text>
        <TextInput
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          accessibilityLabel="inputName"
        />
        <Text accessibilityLabel="name">{this.state.name}</Text>
      </TouchableOpacity>
    );
  }
}

Sample1.navigationOptions = { title: 'Sample1' };

export default Sample1;
