import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../../theme/appTheme'

interface Props {
  backgroundColor?: string,
  innerText?: string,
  colorText?: string,
  stretch?: boolean,
  action: (char: string) => void
  disabled?: boolean

}

const ButtonCalculator = ({ disabled = false, action, backgroundColor = 'white', innerText = '1', colorText = 'black', stretch = false }: Props) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={() => action(innerText)} style={[styles.button, { backgroundColor, width: stretch ? 180 : 80 }]}>
      <Text numberOfLines={1} adjustsFontSizeToFit style={[styles.innerButton, { color: colorText }]}>{innerText}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCalculator