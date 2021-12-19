import React from "react";
import { StyleSheet, View } from "react-native";

import COLORS from "../../constants/colors";
import RegularText from "../TextStyles/RegularText";

interface TextDividerProps {
  children: React.ReactNode;
}

export default function TextDivider({ children }: TextDividerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.dividerLine} />
      <RegularText style={{ color: COLORS.textPrimary, marginHorizontal: 20 }}>
        {children}
      </RegularText>
      <View style={styles.dividerLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dividerLine: {
    width: "27%",
    height: 1,
    backgroundColor: COLORS.lightGray,
  },
});
