import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

interface RegularTextProps {
  children: React.ReactNode;
}

export default function RegularText({ children }: RegularTextProps) {
  const [loaded] = useFonts({
    SKModernistRegular: require("../../../../assets/fonts/SK-Modernist-Regular.otf"),
  });

  return (
    <>
      {loaded ? (
        <Text style={{ fontFamily: "SKModernistRegular" }}>{children}</Text>
      ) : (
        <Text>{children}</Text>
      )}
    </>
  );
}
