import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import COLORS from "../../constants/colors";

export default function SignUp() {
  return (
    <View>
      <AntDesign name="facebook-square" size={24} color={COLORS.red} />
      <AntDesign name="google" size={24} color={COLORS.red} />
      <AntDesign name="apple1" size={24} color={COLORS.red} />
    </View>
  );
}

const styles = StyleSheet.create({});
