import React from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

export default function Tarea({ tarea, recargar }) {
  const eliminar = async () => {
    await axios.delete(`http://localhost:3000/tareas/${tarea.id}`);
    recargar();
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
      <Text>{tarea.titulo}</Text>
      <Button title="Eliminar" onPress={eliminar} />
    </View>
  );
}
