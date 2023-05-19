import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Fab from './components/Fab';

const FancyCounter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Fancy Counter
      </Text>
      <View style={styles.innerContainer}>
        <Text style={styles.counter}>{counter}</Text>
        <View style={styles.botonera}>
          <Fab color='tomato' text='-' setCounter={() => setCounter(counter - 1)} />
          <Fab color='green' text='+' setCounter={() => setCounter(counter + 1)} />
        </View>
      </View>
    </View>
  )
}

export default FancyCounter

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#121212'
  },
  innerContainer: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '30%',
    borderRadius: 50,
  },
  text: {
    color: '#fff',
    fontSize: 50,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'GreatVibes-Regular'
  },
  counter: {
    fontFamily: 'Consolas',
    fontWeight: 'bold',
    fontSize: 80,
    color: '#212121',
  },

  botonera: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    width: '100%'
  }
});