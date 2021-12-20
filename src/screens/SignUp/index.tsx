import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../types";
import COLORS from "../../constants/colors";
import SIZES from "../../constants/sizes";
import BoldText from "../../components/TextStyles/BoldText";
import SquareButton from "../../components/SquareButton";
import TextDivider from "../../components/TextDivider";
import Button from "../../components/Button";
import ButtonSecondary from "../../components/ButtonSecondary";
import RegularText from "../../components/TextStyles/RegularText";

interface SignUpProps {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
}

export default function SignUp({ navigation }: SignUpProps) {
  function handleSocialAuth() {
    console.log("Social Auth");
  }

  return (
    <View style={styles.globalContainer}>
      <Image
        source={require("../../../assets/adaptive-icon.png")}
        style={styles.logoImage}
      />

      <BoldText style={styles.signUpHeading}>Sign up to continue</BoldText>

      <View style={styles.signUpButtons}>
        <Button>Continue with email</Button>
        <ButtonSecondary onPress={() => navigation.navigate("SignUpNumber")}>
          Use phone number
        </ButtonSecondary>
      </View>

      <View style={styles.divider}>
        <TextDivider>or sign up with</TextDivider>
      </View>

      <View style={styles.socialButtons}>
        <SquareButton onPress={handleSocialAuth}>
          <AntDesign name="facebook-square" size={30} color={COLORS.red} />
        </SquareButton>
        <SquareButton onPress={handleSocialAuth}>
          <AntDesign name="google" size={30} color={COLORS.red} />
        </SquareButton>
        <SquareButton onPress={handleSocialAuth}>
          <AntDesign name="apple1" size={30} color={COLORS.red} />
        </SquareButton>
      </View>

      <View style={styles.flexRow}>
        <RegularText style={{ color: COLORS.red }}>Terms of Use</RegularText>
        <RegularText style={{ color: COLORS.red }}>Privacy Policy</RegularText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: SIZES.width / 1.3,
  },
  logoImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "stretch",
  },
  divider: {
    flex: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  signUpHeading: {
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 30,
  },
  signUpButtons: {
    flex: 0.45,
    marginBottom: 70,
    justifyContent: "space-between",
  },
  socialButtons: {
    flexDirection: "row",
    flex: 0.2,
    justifyContent: "space-around",
  },
  flexRow: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 70,
  },
});
