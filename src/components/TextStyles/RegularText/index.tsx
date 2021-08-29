import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

interface RegularTextProps {
  children: React.ReactNode;
  style: object;
  [otherProps: string]: any;
}

export default function RegularText({
  children,
  style,
  ...otherProps
}: RegularTextProps) {
  const [loaded] = useFonts({
    SKModernistRegular: require("../../../../assets/fonts/Sk-Modernist-Regular.otf"),
  });

  return (
    <>
      {loaded ? (
        <Text
          style={{ fontFamily: "SKModernistRegular", ...style }}
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
