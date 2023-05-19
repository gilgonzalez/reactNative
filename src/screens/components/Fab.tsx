import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface Props {
  color: 'tomato' | 'green',
  text: string,
  setCounter: () => void
}

const Fab = ({ color, text, setCounter }: Props) => {
  return (
    <TouchableOpacity onPress={setCounter}>
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.innerButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Fab;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 100,
    color: '#fff'
  },
  innerButton: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins-ExtraBold'
  },
})