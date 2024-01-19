import {useMutation} from '@tanstack/react-query';
import React, {useMemo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import UsersService from '../../actions/user';
import Toast from 'react-native-toast-message';

const AddUser = () => {
  const [textName, setTextName] = React.useState('');
  const [textDescription, setTextDescription] = React.useState('');

  const isReady = useMemo(() => {
    return textName && textDescription;
  }, [textName, textDescription]);

  const {mutate, isPending} = useMutation({
    mutationFn: UsersService.createNewUser,
    onError: () =>
      Toast.show({
        type: 'error',
        text1: 'Ocurrió un problema, intente de nuevo',
      }),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Usuario creado',
      });
      setTextDescription('');
      setTextName('');
    },
  });

  const onClickSubmit = () =>
    mutate({
      name: textName,
      description: textDescription,
    });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title} variant="headlineSmall">
        Registro de usuario
      </Text>
      <TextInput
        label="Nombre"
        value={textName}
        onChangeText={text => setTextName(text)}
      />

      <TextInput
        style={styles.inputDescription}
        label="Descripción"
        value={textDescription}
        onChangeText={text => setTextDescription(text)}
      />

      <Button
        loading={isPending}
        disabled={!isReady}
        style={styles.registerButton}
        onPress={onClickSubmit}
        mode="contained">
        Registrar usuario
      </Button>
    </ScrollView>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },

  inputDescription: {
    marginTop: 10,
  },

  registerButton: {
    marginTop: 20,
  },
});
