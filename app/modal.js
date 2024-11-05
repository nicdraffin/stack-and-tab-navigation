import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { router } from 'expo-router';

const Model = () => {
  return (
    <View>
      <Text>Model Screen</Text>
      <Button title="close" onPress={() => router.back()}></Button>
    </View>
  );
};

export default Model;