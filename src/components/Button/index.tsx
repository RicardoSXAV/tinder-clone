import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import COLORS from "../../constants/colors";

import BoldText from "../TextStyles/BoldText";

interface ButtonProps {
  children: React.ReactNode;
  style?: object;
  [otherProps: string]: any;
}

export default function Button({
  children,
  style,
  ...otherProps
}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...otherProps}>
      <BoldText style={styles.buttonText}>{children}</BoldText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.red,
    alignSelf: "center",
    width: 330,
    marginBottom: 30,
    padding: 18,
    borderRadius: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 17,
    textAlign: "center",
  },
});
