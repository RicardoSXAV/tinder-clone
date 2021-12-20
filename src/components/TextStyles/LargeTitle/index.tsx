import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { useFonts } from "expo-font";

interface LargeTitleProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle> | undefined;
  [otherProps: string]: any;
}

export default function LargeTitle({
  children,
  style,
  ...otherProps
}: LargeTitleProps) {
  const [loaded] = useFonts({
    SKModernistBold: require("../../../../assets/fonts/Sk-Modernist-Bold.otf"),
  });

  return (
    <>
      {loaded ? (
        <Text
          style={{
            fontFamily: "SKModernistBold",
            fontSize: 35,
            ...(style as object),
          }}
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
