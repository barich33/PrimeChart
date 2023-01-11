import React from 'react'
import { SafeAreaView, ScrollView, StatusBar,StyleSheet} from 'react-native'

const Scroll=({children})=>{
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets ={true}
       contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',alignSelf:'center', width: '100%' }} >  
      {children}  
      </ScrollView>
        </SafeAreaView>  
  )
}

export default Scroll
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingVertical: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {    
   marginHorizontal: 20,
   //  flex: 1,
    width: '100%',
    maxWidth:340
   
  },
})