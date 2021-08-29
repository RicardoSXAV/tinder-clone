import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

import RegularText from "../../components/TextStyles/RegularText";
import BoldText from "../../components/TextStyles/BoldText";

interface OnboardingItemProps {
  item: {
    title: string;
    description: string;
  };
}

function OnboardingItem({ item }: OnboardingItemProps) {
  return (
    <View>
      <BoldText>{item.title}</BoldText>
      <RegularText>{item.description}</RegularText>
    </View>
  );
}

export default function Onboarding() {
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
        style={styles.imagesContainer}
        data={onboardingData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 0.4,
  },
  title: {
    color: COLORS.red,
  },
  description: {},
});
