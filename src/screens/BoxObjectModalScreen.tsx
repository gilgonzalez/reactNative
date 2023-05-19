import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

const BoxObjectModalScreen = () => {
  const dWindow = Dimensions.get('window');
  const ancho = Math.round(dWindow.width);
  const alto = Math.round(dWindow.height);

  const { height, width } = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box ObjectModel</Text>
      <View style={styles.dimensiones}>
        <View style={[styles.azul, { width: width / 2 }]} />
        <Text style={styles.dataDimensions}>Ancho: {ancho} Alto: {alto}</Text>
        <Text style={styles.dataDimensions}>Ancho: {Math.round(width)} Alto: {Math.round(height)}</Text>
      </View>
      <View style={styles.relative}>
        <View style={styles.morada} />
        <View style={styles.naranja} />
      </View>
      <View style={styles.absoluta}>
        <View style={styles.verde} />
        <View style={styles.fucsia} />
      </View>
    </View>
  )
}

export default BoxObjectModalScreen

const styles = StyleSheet.create({
  relative: {
    flex: 3,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluta: {
    backgroundColor: 'red',
    flex: 3,
  },
  verde: {
    backgroundColor: 'green',
    borderWidth: 5,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // left: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject // Esto es para que se expanda a todo el ancho y alto
  },
  fucsia: {
    backgroundColor: 'fuchsia',
    width: 100,
    height: 100,
    position: 'absolute',
    borderWidth: 5,
    borderColor: 'white',
    bottom: 0,
    left: 0,
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 100,
    fontWeight: 'bold',
    backgroundColor: 'red',
    borderWidth: 5,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    textAlign: 'center'

  },
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
  dimensiones: {
    backgroundColor: 'white',
    flex: 1,
  },
  azul: {
    backgroundColor: 'blue',
    width: '50%',
    height: 50,
  },
  morada: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
  },
  naranja: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white'
  },
  dataDimensions: {
    fontSize: 20,
  }

});