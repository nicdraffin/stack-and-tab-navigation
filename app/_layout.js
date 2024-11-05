import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="register" 
        options={
          {headerRight: () => (<Button title="Open" onPress={()=>router.back()}></Button>)}} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="modal" 
      options={{ 
        title: "Modal", 
        presentation:"modal", 
        animation:"fade", 
        headerLeft: () => (<Button title="Open" onPress={()=>router.back()}></Button>)}} />
      <Stack.Screen name="(drawer)" options={{ title: "About" }} />
    </Stack>
  );
};

export default Layout;
