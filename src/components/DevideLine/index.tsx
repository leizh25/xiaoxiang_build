import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default ({top = 10, bottom = 10}: {top?: number; bottom?: number}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        marginTop: top,
        marginBottom: bottom,
      }}>
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#ccc',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});
