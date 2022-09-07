import { View, Image, Text, useWindowDimensions } from "react-native";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import styles from "../styles";
import AutoHeightImage from "react-native-auto-height-image";

const SplashScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "#BB00DA",
          justifyContent: "flex-end",
        },
      ]}
    >
      <View style={{}}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: scale(30),
            fontFamily: "circularbold",
            width: 210,
            alignSelf: "center",
            marginBottom: verticalScale(20),
          }}
        >
          Join the Marketplace for Everything
        </Text>

        <Text
          style={{
            color: "#fff",
            alignSelf: "center",
            fontFamily: "regular",
            fontSize: scale(15),
            width: scale(100),
            textAlign: "center",
          }}
        >
          Buy and Sell on Megaday
        </Text>
        <View style={{ alignSelf: "center" }}>
          <AutoHeightImage
            width={width * 0.96}
            source={require("../../assets/images/splashman.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
