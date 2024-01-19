import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTab';

const Stack = createNativeStackNavigator();

const RouterContainer = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Bienvenido"
          component={BottomTabs}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#336666',
            },
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RouterContainer;
