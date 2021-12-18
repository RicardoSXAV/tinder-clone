import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

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
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      {...otherProps}
    >
      <BoldText style={styles.buttonText}>{children}</BoldText>
    </TouchableHighlight>
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
