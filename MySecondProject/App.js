import React from 'react';
import {Text, TextInput, View } from 'react-native';

 function MyApp() {
  return (
    <View>
      <Text>
        Hello I am a student in CIS340!
      </Text>
    </View>
  
  );
}

export default function MultiComp() { 
  return(
    <View Style= {{
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'center',
    }}>
      <Text> Welcomew to My Class </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}




