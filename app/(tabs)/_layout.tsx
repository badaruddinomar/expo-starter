import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#e91e63" }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  );
};

export default _layout;
// start from 30 min
