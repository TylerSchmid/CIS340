import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {
  function getFullName(fName, lName) {
    return fName + ' ' + lName;
  }

  const pet = 'dog';
  return (
    <Text>
      {'\n\n\n\n\n\n\n'}
      Hello, I am a student in CIS 340! {'\n'}
      My full name is {getFullName('Tyler', 'Schmid')}
      {'\n'}I have a {pet}!
    </Text>
  );
}




