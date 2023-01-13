import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Platform, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../core/theme'

  const Background=({ children }:{children:any})=> {
  return (
    <SafeAreaView style={styles.safeareaview}>
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container}  behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={1}>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
    </SafeAreaView>
  )
}
export default Background;

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.errorContainer,
    paddingTop: StatusBar.currentHeight,
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
   flex: 1,
   // padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
