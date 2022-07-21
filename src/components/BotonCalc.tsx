import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Theme/appTheme'

interface Props {
texto: string;
color: string;

}

export const BotonCalc = ({ texto, color = 'black' } : Props) => {
  return (
    <View style={styles.boton}>
        <Text style={styles.botonTexto}> {texto} </Text>
      </View>
  )
}
