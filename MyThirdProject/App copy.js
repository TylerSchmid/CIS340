import React from 'react';
import {Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, My name is {props.name}, I am a student in CIS340</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
    <View style={{ 
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'center'
    }}  >
      <Text>Welcome to CIS340 </Text>
      <Student name ='Tyler Schmid' />
      <Student name = 'Billy Bob'/>
      <Student name = 'mike'/>
      <Student name = 'steve'/>
    </View>

  );
  }
