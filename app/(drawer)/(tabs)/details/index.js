import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>index</Text>
      <Link href="/details/1" style={{fontSize:26, color:"red"}}>Details of User1</Link>
      <Link href="/details/2" style={{fontSize:26, color:"red"}}>Details of User2</Link>
      <Link href="/details/3" style={{fontSize:26, color:"red"}}>Details of User3</Link>

    </View>
  )
}

export default index