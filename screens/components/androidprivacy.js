import React from 'react';
import {WebView} from 'react-native-webview';

export default function androidprivacy() {
  return (
    <WebView
      source={{uri: 'https://github.com/nebulaxyz/android-privacy-guide-2020'}}
    />
  );
}
