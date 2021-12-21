import React, { useEffect, useState } from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import COLORS from "../../constants/colors";
import BoldText from "../TextStyles/BoldText";

interface CodeNumpadProps {
  verificationSuccess: Function;
}

export default function CodeNumpad({ verificationSuccess }: CodeNumpadProps) {
  const [code, setCode] = useState<number[]>([0, 0, 0, 0]);
  const [codeError, setCodeError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const firstRow = [1, 2, 3];
  const secondRow = [4, 5, 6];
  const thirdRow = [7, 8, 9];
  const fourthRow = [0];

  function addNumber(number: number) {
    if (activeIndex < code.length) {
      const newCode = [...code];
      newCode[activeIndex] = number;

      setActiveIndex(activeIndex + 1);
      setCode(newCode);
    }
  }

  function removeNumber() {
    if (activeIndex > 0) {
      const newCode = [...code];
      newCode[activeIndex - 1] = 0;

      setCode(newCode);
      setActiveIndex(activeIndex - 1);
    }
  }

  useEffect(() => {
    if (activeIndex + 1 > code.length) {
      if (code.join("") !== "1234") {
        setCodeError(true);
        setTimeout(() => setCodeError(false), 1500);
      } else {
        verificationSuccess();
      }

      setActiveIndex(0);
      setCode([0, 0, 0, 0]);
    }
  }, [activeIndex]);

  return (
    <View>
      <NumberInput numberList={code} activeIndex={activeIndex} />

      {codeError && (
        <BoldText
          style={{ color: COLORS.red, alignSelf: "center", marginTop: 10 }}
        >
          Wrong verification code!
        </BoldText>
      )}

      <View style={styles.numberPadContainer}>
        <View style={styles.row}>
          {firstRow.map((number) => (
            <NumpadButton onPress={() => addNumber(number)} key={number}>
              {number}
            </NumpadButton>
          ))}
        </View>

        <View style={styles.row}>
          {secondRow.map((number) => (
            <NumpadButton onPress={() => addNumber(number)} key={number}>
              {number}
            </NumpadButton>
          ))}
        </View>

        <View style={styles.row}>
          {thirdRow.map((number) => (
            <NumpadButton onPress={() => addNumber(number)} key={number}>
              {number}
            </NumpadButton>
          ))}
        </View>

        <View style={styles.lastRow}>
          {fourthRow.map((number) => (
            <NumpadButton onPress={() => addNumber(number)} key={number}>
              {number}
            </NumpadButton>
          ))}
        </View>

        <Entypo
          name="erase"
          size={25}
          color={COLORS.red}
          style={{ position: "absolute", top: "83%", left: "78%" }}
          onPress={() => removeNumber()}
        />
      </View>
    </View>
  );
}

function NumpadButton({ children, ...otherProps }: PressableProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#EEEEEE" : COLORS.white,
          ...styles.button,
        },
      ]}
      {...otherProps}
    >
      <BoldText style={{ fontSize: 23 }}>{children}</BoldText>
    </Pressable>
  );
}

interface NumberInputProps {
  numberList: number[];
  activeIndex: number;
}

function NumberInput({ numberList, activeIndex }: NumberInputProps) {
  return (
    <View style={styles.numberRow}>
      {numberList.map((number, index) => (
        <View
          style={
            index < activeIndex
              ? styles.numberSquareCompleted
              : index === activeIndex
              ? styles.numberSquareActive
              : styles.numberSquare
          }
        >
          <BoldText
            style={{
              fontSize: 30,
              color:
                index < activeIndex
                  ? COLORS.white
                  : index === activeIndex
                  ? COLORS.red
                  : COLORS.lightGray,
            }}
          >
            {number}
          </BoldText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  numberPadContainer: { marginTop: 30 },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginBottom: 10,
    borderRadius: 20,
  },
  numberRow: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
  },
  numberSquare: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.lightGray,
    margin: 8,
  },
  numberSquareActive: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.red,
    margin: 8,
  },
  numberSquareCompleted: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: COLORS.red,
    margin: 8,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  lastRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
