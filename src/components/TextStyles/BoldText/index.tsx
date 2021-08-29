import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

interface RegularTextProps {
  children: React.ReactNode;
}

export default function RegularText({ children }: RegularTextProps) {
  const [loaded] = useFonts({
    SKModernistBold: require("../../../../assets/fonts/SK-Modernist-Bold.otf"),
  });

  return (
    <>
      {loaded ? (
        <Text style={{ fontFamily: "SKModernistBold" }}>{children}</Text>
      ) : (
        <Text>{children}</Text>
      )}
    </>
  );
}
