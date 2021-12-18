import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import COLORS from "../../constants/colors";

interface ButtonProps {
  children: React.ReactNode;
  style?: object;
  [otherProps: string]: any;
}

export default function SquareButton({
  children,
  style,
  ...otherProps
}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...otherProps}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
  },
});
