import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'red' }}></View>
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}></View>
      <View style={{ flex: 1, backgroundColor: 'skyblue' }}></View>
    </View>
  );
}

