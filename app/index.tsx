import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
const image = require("../assets/images/react-logo.png")
import "../global.css";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Home', headerTransparent: true, headerTitleStyle: { color: "white" }, headerStyle: { backgroundColor: "#000000df" } }} />
      <StatusBar style="dark" backgroundColor="#0d1117" />
      <View className="flex-1 justify-start items-center bg-[#0d1117] pt-14 p-4">
        <View className="w-full h-52 bg-yellow-500 mt-16 rounded-lg"
        >
          <Text style={{
            color: "white", fontSize: 20, fontWeight: 700
          }}>Hello World</Text>
          <Image source={image} className="w-10 h-10" />
        </View>
        <View style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 200, height: 200, backgroundColor: "dodgerblue", borderRadius: 10, marginTop: 10 }}>
          <Image source={image} style={{ width: 150, height: 150, objectFit: "cover" }} />
        </View>
      </View>
    </>

  );
}
