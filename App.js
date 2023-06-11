import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  const [i, setI] = useState(3);
  const [showD, setShowD] = useState(dias[i]);

  const handleText = (bS) => {
    switch (bS) {
      case 'atras':
        setI((prevState) => (prevState > 0 ? prevState - 1 : dias.length - 1));
        break;
      case 'adelante':
        setI((prevState) => (prevState < dias.length - 1 ? prevState + 1 : 0));
        break;
      default:
        setI(3);
        break;
    }
  };

  useEffect(() => {
    setShowD(dias[i]);
  }, [i]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleText('atras')} style={styles.boton}>
        <Text>Atras</Text>
      </TouchableOpacity>

      <Text>{showD}</Text>

      <TouchableOpacity onPress={() => handleText('adelante')} style={styles.boton}>
        <Text>Adelante</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#f0f0f0',
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
