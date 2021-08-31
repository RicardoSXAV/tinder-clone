import React, { useState, useRef } from "react";
import {
  Animated,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../types";

import { onboardingData } from "../../constants/data";
import COLORS from "../../constants/colors";
import SIZES from "../../constants/sizes";

import RegularText from "../../components/TextStyles/RegularText";
import BoldText from "../../components/TextStyles/BoldText";
import Button from "../../components/Button";
import FONTS from "../../constants/fonts";
interface OnboardingProps {
  navigation: StackNavigationProp<RootStackParamList, "Onboarding">;
}
interface OnboardingItemProps {
  item: {
    image: ImageSourcePropType;
    title: string;
    description: string;
  };
}

function OnboardingItem({ item }: OnboardingItemProps) {
  return (
    <View style={styles.onboardingContainer}>
      <Image style={styles.image} source={item.image} />

      <BoldText style={styles.title}>{item.title}</BoldText>
      <RegularText style={styles.description}>{item.description}</RegularText>
    </View>
  );
}

export default function Onboarding({ navigation }: OnboardingProps) {
  return (
    <>
      <FlatList
        data={onboardingData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {onboardingData.map((_, index) => (
          <View style={index === 0 ? styles.activeDot : styles.dot} />
        ))}
      </View>

      <Button onPress={() => navigation.navigate("SignUp")}>
        Create an account
      </Button>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginBottom: 30,
        }}
      >
        <RegularText>Already have an account? </RegularText>
        <BoldText
          style={{ color: COLORS.red }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign In
        </BoldText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  onboardingContainer: {
    width: SIZES.width,
    height: SIZES.height / 1.3,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: SIZES.height / 2,
    width: SIZES.width / 1.7,
    borderRadius: 10,
    marginTop: 70,
  },
  imagesContainer: {},
  title: {
    color: COLORS.red,
    fontSize: FONTS.h3,
    marginTop: 40,
    marginBottom: 15,
  },
  description: {
    color: COLORS.textSecondary,
    width: SIZES.width / 1.3,
    textAlign: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: COLORS.red,
    marginHorizontal: 4,
  },
});
