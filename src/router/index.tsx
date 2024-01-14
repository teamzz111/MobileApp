import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTab';

const Stack = createNativeStackNavigator();

const RouterContainer = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="home" component={BottomTabs} />
      </Stack.Navigator>
    </>
  );
};

export default RouterContainer;
