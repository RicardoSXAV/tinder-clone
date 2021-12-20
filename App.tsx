import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./src/types";

import Onboarding from "./src/screens/Onboarding";
import SignUp from "./src/screens/SignUp";
import SignUpNumber from "./src/screens/SignUpNumber";

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpNumber" component={SignUpNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
