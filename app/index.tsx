import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
const image = require("../assets/images/react-logo.png")

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Home', headerTransparent: true, headerTitleStyle: { color: "white" }, headerStyle: { backgroundColor: "#000000df" } }} />
      <StatusBar style="dark" backgroundColor="#0d1117" />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#0d1117",
          paddingTop: 50
        }}
      >

        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "gold",
            marginTop: 60,
            borderRadius: 10
          }}
        >
          <Text style={{
            color: "white", fontSize: 20, fontWeight: 700
          }}>Hello World</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 200, height: 200, backgroundColor: "dodgerblue", borderRadius: 10, marginTop: 10 }}>
          <Image source={image} style={{ width: 150, height: 150, objectFit: "cover" }} />
        </View>
      </View>
    </>

  );
}
