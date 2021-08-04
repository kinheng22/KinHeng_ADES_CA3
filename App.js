import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';

const App = () => {

  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  );
};

export default App;
