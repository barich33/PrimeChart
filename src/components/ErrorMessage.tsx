import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '~core/theme'
const ErrorMessage=({error})=> {
 
    return (    
    
    <Text style={styles.text}>{error}</Text>

    )

}

export default ErrorMessage

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color:theme.colors.error
  },
})
