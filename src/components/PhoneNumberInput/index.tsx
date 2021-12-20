import React from "react";
import { StyleProp, StyleSheet, TextStyle, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PhoneInput, { PhoneInputProps } from "react-native-phone-number-input";

import COLORS from "../../constants/colors";

interface PhoneNumberInputProps extends PhoneInputProps {
  wrapperStyle?: StyleProp<TextStyle>;
  [otherProps: string]: any;
}

export default function PhoneNumberInput({
  wrapperStyle,
  ...otherProps
}: PhoneNumberInputProps) {
  const downIcon = <AntDesign name="down" color={COLORS.mediumGray} />;

  return (
    <View style={wrapperStyle}>
      <PhoneInput
        defaultCode="US"
        containerStyle={styles.container}
        textContainerStyle={styles.textContainer}
        countryPickerButtonStyle={styles.countryButton}
        renderDropdownImage={downIcon}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 18,
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    height: "98%",
  },
  countryButton: {
    borderRightColor: COLORS.lightGray,
    borderRightWidth: 1,
    height: "50%",
  },
});
