import React from 'react'
import { ActivityIndicator as AcIndicator, MD2Colors } from 'react-native-paper';

const ActivityIndicator=({ loading})=> {
  return (
    <>
    <AcIndicator animating={loading} 
      color={MD2Colors.deepPurpleA200} size={40} />
      </>
  )
}

export default ActivityIndicator
