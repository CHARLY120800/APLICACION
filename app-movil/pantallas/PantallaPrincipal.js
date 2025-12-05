import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Tarea from '../componentes/Tarea';

export default function PantallaPrincipal({ navigation }) {
  const [tareas, setTareas] = useState([]);

  const cargarTareas = async () => {
    const res = await axios.get('http://localhost:3000/tareas');
    setTareas(res.data);
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Agregar Tarea" onPress={() => navigation.navigate('AgregarTarea', { recargar: cargarTareas })} />
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Tarea tarea={item} recargar={cargarTareas} />}
      />
    </View>
  );
}
