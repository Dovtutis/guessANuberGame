import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import TitleText from "../components/TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: Colors.primary,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  title: {
    // color: Platform.OS === 'ios' ?  Colors.primary : 'white',
    color: "white",
  },
});

export default Header;
