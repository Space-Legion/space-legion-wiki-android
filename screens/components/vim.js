import React from 'react';
import {WebView} from 'react-native-webview';

export default function vim() {
  return (
    <WebView source={{uri: 'https://space-legion.github.io/vimguide.html'}} />
  );
}
