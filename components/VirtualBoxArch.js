import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

export default function virtualBoxInstall() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#FD5901',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
