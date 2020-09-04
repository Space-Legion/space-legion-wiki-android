import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
function ventoy() {
  return (
    <WebView source={{uri: 'https://space-legion.github.io/ventoy.html'}} />
  );
}

export default ventoy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },

  guide: {
    top: 1,
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
