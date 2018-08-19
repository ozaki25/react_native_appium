import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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
      <ScrollView style={styles.container} accessibilityLabel="screen1">
        <Text accessibilityLabel="sample1">Sample1</Text>
        <TextInput
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          accessibilityLabel="inputName"
        />
        <Text accessibilityLabel="name">{this.state.name}</Text>
        <View style={{ height: 1000 }} />
        <Button
          title="ボタン"
          onPress={() => navigation.navigate('Sample2')}
          accessibilityLabel="Button"
        />
      </ScrollView>
    );
  }
}

Sample1.navigationOptions = { title: 'Sample1' };

export default Sample1;
