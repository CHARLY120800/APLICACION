import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaPrincipal from './pantallas/PantallaPrincipal';
import AgregarTarea from './pantallas/AgregarTarea';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaPrincipal">
        <Stack.Screen name="PantallaPrincipal" component={PantallaPrincipal} />
        <Stack.Screen name="AgregarTarea" component={AgregarTarea} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
