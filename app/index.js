import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Index = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
      }} // Soft, professional background
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Welcome Back!</Text>

          {/* Username Input */}
          <View style={styles.inputGroup}>
            <Ionicons
              style={styles.icon}
              name="person-outline"
              size={24}
              color="#555"
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#aaa"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputGroup}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="lock-outline"
              size={24}
              color="#555"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("(drawer)")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Link to Register */}
          <Link href="/register" style={styles.link}>
            Don't have an account? Sign up
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent for modern effect
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    color: "#333",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#333",
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    color: "#007BFF",
    textAlign: "center",
    marginTop: 10,
  },
});
