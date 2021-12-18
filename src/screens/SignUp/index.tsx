import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import COLORS from "../../constants/colors";
import SquareButton from "../../components/SquareButton";

export default function SignUp() {
  return (
    <>
      <View style={styles.socialButtonsContainer}>
        <SquareButton>
          <AntDesign name="facebook-square" size={24} color={COLORS.red} />
        </SquareButton>
        <SquareButton>
          <AntDesign name="google" size={24} color={COLORS.red} />
        </SquareButton>
        <SquareButton>
          <AntDesign name="apple1" size={24} color={COLORS.red} />
        </SquareButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  socialButtonsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});
