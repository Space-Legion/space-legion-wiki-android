import React from 'react';
import WebView from 'react-native-webview';

export default function gitcheatsheet() {
  return (
    <WebView
      source={{uri: 'https://space-legion.github.io/git%20cheatsheet.html'}}
    />
  );
}
