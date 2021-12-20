import React from "react";
import { StyleSheet, View } from "react-native";

import LargeTitle from "../../components/TextStyles/LargeTitle";
import RegularText from "../../components/TextStyles/RegularText";
import Button from "../../components/Button";
import PhoneNumberInput from "../../components/PhoneNumberInput";

export default function SignUpNumber() {
  return (
    <View style={styles.globalContainer}>
      <LargeTitle style={styles.title}>My mobile</LargeTitle>
      <RegularText style={styles.text}>
        Please enter your valid phone number. We will send you a 4-digit code to
        verify your account.
      </RegularText>

      <PhoneNumberInput wrapperStyle={{ marginBottom: 70 }} />

      <Button>Continue</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: "80%",
  },
  title: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 35,
  },
});
