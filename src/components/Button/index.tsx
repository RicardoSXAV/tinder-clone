import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import COLORS from "../../constants/colors";

import BoldText from "../TextStyles/BoldText";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle> | undefined;
  [otherProps: string]: any;
}

export default function Button({
  children,
  style,
  ...otherProps
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...(style as object) }}
      activeOpacity={0.55}
      {...otherProps}
    >
      <BoldText style={styles.buttonText}>{children}</BoldText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.red,
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 17,
  },
});
