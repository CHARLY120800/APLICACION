import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function AgregarTarea({ navigation, route }) {
  const [titulo, setTitulo] = useState('');

  const agregar = async () => {
    await axios.post('http://localhost:3000/tareas', { titulo });
    route.params.recargar();
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Título de la tarea" value={titulo} onChangeText={setTitulo} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <Button title="Guardar" onPress={agregar} />
    </View>
  );
}
