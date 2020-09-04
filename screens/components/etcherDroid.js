import React from 'react';
import WebView from 'react-native-webview';

function etcher() {
  return (
    <WebView
      source={{uri: 'https://f-droid.org/packages/eu.depau.etchdroid/'}}
    />
  );
}

export default etcher;
