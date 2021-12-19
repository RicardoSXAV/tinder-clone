import React from "react";
import { TouchableHighlightProps } from "react-native";
import { StyleSheet, TouchableHighlight } from "react-native";

import COLORS from "../../constants/colors";

interface ButtonProps extends TouchableHighlightProps {
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
    <TouchableHighlight
      style={{ ...styles.button, ...style }}
      {...otherProps}
      underlayColor="#EEEEEE"
    >
      {children}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 13,
  },
});
