import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles as globalStyle } from '../theme/appTheme';
import ButtonCalculator from './components/ButtonCalculator';
import useCalculator from '../hooks/useCalculator';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export enum Operadores {
  SUMAR,
  RESTAR,
  MULTIPLICAR,
  DIVIDIR,
  TOTAL
}

const CalculatorScreen = () => {

  const {
    error,
    almacenado,
    signo,
    numero,
    addCharacter,
    deleteCharacter,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    changeSign,
    clear } = useCalculator()
  
  return (
    <View style={styles.container}>
      <Toast />
      <Text style={globalStyle.title}>Apple Calculator</Text>
      <View style={styles.screen}>
        {almacenado !== '0' && <Text style={globalStyle.saveResult}> {almacenado} </Text>}

        {signo !== '' && <Text style={globalStyle.signo}> {signo} </Text>}
        <Text style={error ? globalStyle.error : globalStyle.result}> {numero} </Text>
      </View>
      <View style={styles.buttonPanel}>
        <View style={styles.row1}>
          <ButtonCalculator colorText='black' innerText='C' backgroundColor='#9B9B9B' action={clear} />
          <ButtonCalculator disabled={error} colorText='black' innerText='+/-' backgroundColor='#9B9B9B' action={changeSign} />
          <ButtonCalculator disabled={error} colorText='black' innerText='del' backgroundColor='#9B9B9B' action={deleteCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='÷' backgroundColor='#FF9427' action={btnDividir} />
        </View>
        <View style={styles.row1}>
          <ButtonCalculator disabled={error} colorText='white' innerText='7' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='8' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='9' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='X' backgroundColor='#FF9427' action={btnMultiplicar} />
        </View>
        <View style={styles.row1}>
          <ButtonCalculator disabled={error} colorText='white' innerText='4' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='5' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='6' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='-' backgroundColor='#FF9427' action={btnRestar} />
        </View>
        <View style={styles.row1}>
          <ButtonCalculator disabled={error} colorText='white' innerText='1' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='2' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='3' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='+' backgroundColor='#FF9427' action={btnSumar} />
        </View>
        <View style={styles.row1}>
          <ButtonCalculator disabled={error} colorText='white' innerText='0' backgroundColor='#2D2D2D' stretch action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='.' backgroundColor='#2D2D2D' action={addCharacter} />
          <ButtonCalculator disabled={error} colorText='white' innerText='=' backgroundColor='#FF9427' action={calcular} />
        </View>
      </View>
    </View>
  )
}

export default CalculatorScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  screen: {
    flex: 2,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttonPanel: {
    flex: 6,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  }
});