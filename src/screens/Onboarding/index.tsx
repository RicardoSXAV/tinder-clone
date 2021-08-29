import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../types";

import COLORS from "../../constants/colors";

import BoldText from "../../components/TextStyles/BoldText";
import Button from "../../components/Button";
import RegularText from "../../components/TextStyles/RegularText";

interface OnboardingProps {
  navigation: StackNavigationProp<RootStackParamList, "Onboarding">;
}
interface OnboardingItemProps {
  item: {
    title: string;
    description: string;
  };
}

function OnboardingItem({ item }: OnboardingItemProps) {
  return (
    <View style={styles.onboardingContainer}>
      <BoldText style={styles.title}>{item.title}</BoldText>
      <RegularText style={styles.description}>{item.description}</RegularText>
    </View>
  );
}

export default function Onboarding({ navigation }: OnboardingProps) {
  const onboardingData = [
    {
      title: "Algorithm",
      description:
        "Users going through a vetting process to ensure you never match with bots.",
    },
    {
      title: "Matches",
      description:
        "We match you with people that have a large array of similar interests.",
    },
    {
      title: "Premium",
      description:
        "Sign up today and enjoy the first month of premium benefits on us.",
    },
  ];

  return (
    <>
      <FlatList
        data={onboardingData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Button onPress={() => navigation.navigate("SignUp")}>
        Create an account
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagesContainer: {
    flex: 0.4,
  },
  title: {
    color: COLORS.red,
  },
  description: {
    color: COLORS.textSecondary,
  },
});
