import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import MyComponent from '../../../../component/mycomponent'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const User2 = () => {
  return (
    <View>
      <Text>User 2</Text>
      <Link style={{ fontSize: 20, color: "red"}} href="/user/user1">
        Go back to User1</Link>
        <MyComponent />
    </View>
  )
}

export default User2;