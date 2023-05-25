import { useRef, useState } from "react"
import { Operadores } from "../screens/CalculatorScreen"
import Toast from 'react-native-toast-message';

const useCalculator = () => {

  const [numero, setNumero] = useState('0')
  const [almacenado, setAlmacenado] = useState('0')
  const [signo, setSigno] = useState('')
  const [error, setError] = useState(false)
  const calculo = useRef<Operadores>()


  const clear = () => {
    setNumero('0')
    setAlmacenado('0')
    setSigno('')
    setError(false)
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  const addCharacter = (char: string) => {
    if (numero.includes('.') && char === '.') return;
    if (numero.length > 8) return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (char === '.') {
        setNumero(numero + char)
      }
      else if (char === '0' && numero.includes('.')) {
        setNumero((prev) => prev += char)
      }
      else if (char !== '0' && !numero.includes('.')) {
        setNumero(char)
      } else if (char === '0' && !numero.includes('.')) {
        setNumero(char)
      } else {
        setNumero(numero + char)
      }
    } else {
      setNumero(numero + char)
    }
  }
  const deleteCharacter = () => {
    if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
      setNumero('0')
    } else {
      setNumero((prev) => prev.slice(0, -1))
    }
  }
  const changeSign = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''))
    } else {
      setNumero('-' + numero)
    }
  }
  const prepareOperation = () => {
    if (numero.endsWith('.')) {
      setAlmacenado(numero.slice(0, -1))
    } else {
      setAlmacenado(numero)
    }
    setNumero('0')
  }
  const btnDividir = () => {
    setSigno('÷')
    prepareOperation()
    calculo.current = Operadores.DIVIDIR
  }
  const btnMultiplicar = () => {
    setSigno('x')
    prepareOperation()
    calculo.current = Operadores.MULTIPLICAR
  }
  const btnSumar = () => {
    setSigno('+')
    prepareOperation()
    calculo.current = Operadores.SUMAR
  }
  const btnRestar = () => {
    setSigno('-')
    prepareOperation()
    calculo.current = Operadores.RESTAR
  }
  const calcular = () => {
    const num1 = Number(almacenado)
    const num2 = Number(numero)
    switch (calculo.current) {
      case Operadores.SUMAR:
        setNumero(`${num1 + num2}`)
        break;
      case Operadores.RESTAR:
        setNumero(`${num1 - num2}`)
        break;
      case Operadores.MULTIPLICAR:
        setNumero(`${num1 * num2}`)
        break;
      case Operadores.DIVIDIR:
        if (num1 === 0) {
          setNumero('Error, cannot divide by 0')
          setError(true)
        } else {
          setNumero(`${num1 / num2}`)
        }
        break;
    }
    setAlmacenado('0')
    setSigno('')
  }


  return {
    error,
    almacenado,
    signo,
    numero,
    clear,
    changeSign,
    calcular,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    deleteCharacter,
    addCharacter

  }
}

export default useCalculator