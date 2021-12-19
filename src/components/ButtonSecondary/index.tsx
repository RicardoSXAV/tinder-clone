import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import COLORS from "../../constants/colors";

import BoldText from "../TextStyles/BoldText";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: object;
  [otherProps: string]: any;
}

export default function ButtonSecondary({
  children,
  style,
  ...otherProps
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...style }}
      activeOpacity={0.55}
      {...otherProps}
    >
      <BoldText style={styles.buttonText}>{children}</BoldText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
  },
  buttonText: {
    color: COLORS.red,
    fontSize: 17,
  },
});
