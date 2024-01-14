/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';

import RouterContainer from './src/router';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RouterContainer />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
