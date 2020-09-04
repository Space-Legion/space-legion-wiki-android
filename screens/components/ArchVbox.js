import React from 'react';
import WebView from 'react-native-webview';

function archvbox() {
  return (
    <WebView
      source={{uri: 'https://space-legion.github.io/virtualbox-arch.html'}}
    />
  );
}

export default archvbox;
