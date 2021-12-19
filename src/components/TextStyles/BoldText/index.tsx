import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { useFonts } from "expo-font";

interface RegularTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle> | undefined;
  [otherProps: string]: any;
}

export default function RegularText({
  children,
  style,
  ...otherProps
}: RegularTextProps) {
  const [loaded] = useFonts({
    SKModernistBold: require("../../../../assets/fonts/Sk-Modernist-Bold.otf"),
  });

  return (
    <>
      {loaded ? (
        <Text
          style={{ fontFamily: "SKModernistBold", ...(style as object) }}
          {...otherProps}
        >
          {children}
        </Text>
      ) : (
        <Text>{children}</Text>
      )}
    </>
  );
}
