import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const htmlContent = `
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>用户隐私协议</h1>
    </body>
    </html>
  `;
export default () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{html: htmlContent}}
      scalesPageToFit={true} // 启用缩放
      style={styles.webview}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    width: SCREEN_WIDTH,
  },
});
