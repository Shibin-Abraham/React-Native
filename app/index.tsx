import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
const image = require("../assets/images/react-logo.png")
import "../global.css";

export default function Index() {
  return (
    <>
      {<Stack.Screen options={{ headerShown: true, title: 'Home', headerTransparent: true, headerTitleStyle: { color: "white" }, headerStyle: { backgroundColor: "#000000df" } }} />}
      <StatusBar style="dark" backgroundColor="#0d1117" />
      <ScrollView className="flex-1 bg-[#0d1117] p-4">
        <View className="w-full h-52 bg-yellow-500 mt-24 rounded-lg flex items-center justify-center flex-row"
        >
          <Text className="text-xl text-white font-bold text-center">Hello World</Text>
          <Image source={image} className="w-10 h-10" />
        </View>
        <View className="w-full h-52 bg-blue-800 mt-4 rounded-lg flex items-center justify-center flex-row">
          <Image source={image} style={{ width: 150, height: 150, objectFit: "cover" }} />
        </View>
        <View className="w-full h-52 bg-red-800 mt-4 rounded-lg flex items-center justify-center flex-row">
          <Image source={image} style={{ width: 150, height: 150, objectFit: "cover" }} />
        </View>
        <View className="w-full h-52 bg-green-600 mt-4 rounded-lg flex items-center justify-center flex-row">
          <Image source={image} style={{ width: 150, height: 150, objectFit: "cover" }} />
        </View>
        <View className="w-full h-52 bg-pink-700 mt-4 rounded-lg flex items-center justify-center flex-row">
          <Image source={image} style={{ width: 150, height: 150, objectFit: "cover" }} />
        </View>
        <View className="w-full h-52 bg-[#c411e8] mt-4 rounded-lg flex items-center justify-center flex-row mb-10">
          <Image source={image} style={{ width: 150, height: 150, objectFit: "cover" }} />
        </View>
      </ScrollView>
    </>

  );
}
