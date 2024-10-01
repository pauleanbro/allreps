import React from "react";
import { Link, router } from "expo-router";
import {
  Text,
  View,
  Modal,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";

export default function Register({}) {
  const { height } = Dimensions.get("window");

  return (
    <ImageBackground
      source={require("../assets/images/bg2.jpg")}
      className="flex-1 justify-end"
    >
      <View className="bg-white/30 bg-opacity-50 pt-5 rounded-t-[50px]">
        <View
          className={`w-full bg-white rounded-t-[50px] p-5`}
          style={{ height: height / 1.5, elevation: 10 }}
        >
          <Text className="text-lg font-bold">Modal screen</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
