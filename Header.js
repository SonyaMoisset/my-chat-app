import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    StatusBar } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  }
});

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar 
            backgroundColor="#03a9f4" 
            barStyle="light-content" />
        <Text style={styles.title}>
          #{this.props.title}
        </Text>
      </View>
    )
  }
}
