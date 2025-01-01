import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false, title: 'Home', headerStyle: { backgroundColor: "red" } }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green"
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>Hello World</Text>
        <StatusBar style="dark" backgroundColor="blue" />
      </View>
    </>

  );
}
