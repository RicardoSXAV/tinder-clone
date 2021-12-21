import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./src/types";

import Onboarding from "./src/screens/Onboarding";
import SignUp from "./src/screens/SignUp";
import SignUpNumber from "./src/screens/SignUpNumber";
import SignUpNumberCode from "./src/screens/SignUpNumberCode";
import ProfileDetails from "./src/screens/ProfileDetails";

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
        <Stack.Screen name="SignUpNumberCode" component={SignUpNumberCode} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
