import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>
      <Link href="/">Home</Link>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
