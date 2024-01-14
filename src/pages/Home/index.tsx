import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

const Home = (): JSX.Element => {
  return (
    <View>
      <Text>hola</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
};

export default Home;
