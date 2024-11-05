import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
const Id = () => {
    const { id } = useLocalSearchParams();
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Detail of User based on {id}</Text>
    </View>
  );
};

export default Id;