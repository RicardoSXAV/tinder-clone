import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../types";
import formatTime from "../../utils/formatTime";
import COLORS from "../../constants/colors";
import SquareButton from "../../components/SquareButton";
import RegularText from "../../components/TextStyles/RegularText";
import BoldText from "../../components/TextStyles/BoldText";
import LargeTitle from "../../components/TextStyles/LargeTitle";
import CodeNumpad from "../../components/CodeNumpad";

interface SignUpNumberCodeProps {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
}

export default function SignUpNumberCode({
  navigation,
}: SignUpNumberCodeProps) {
  const [countdownSeconds, setCountdownSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(decreaseCountdown, 1000);

    function decreaseCountdown() {
      if (countdownSeconds > 0) {
        setCountdownSeconds(countdownSeconds - 1);
      } else {
        clearInterval(interval);
      }
    }

    return () => clearInterval(interval);
  }, [countdownSeconds]);

  function handleSuccessCode() {
    navigation.navigate("ProfileDetails");
  }

  return (
    <View style={styles.globalContainer}>
      <SquareButton
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="chevron-left" size={25} color={COLORS.red} />
      </SquareButton>

      <LargeTitle style={styles.countdown}>
        {formatTime(countdownSeconds)}
      </LargeTitle>
      <RegularText style={styles.text}>
        Type the verification code we've sent you
      </RegularText>

      <CodeNumpad verificationSuccess={handleSuccessCode} />

      <BoldText style={{ color: COLORS.red }}>Send again</BoldText>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    justifyContent: "flex-start",
    marginTop: "15%",
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 50,
  },
  countdown: {
    marginBottom: 18,
  },
  text: {
    width: "70%",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 40,
  },
});
