import { View, useWindowDimensions, ScrollView } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { verticalScale } from "react-native-size-matters";
import FormButton from "../../components/ForButton";
import styles from "../../styles";

const AuthScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <ScrollView style={styles.scrollContainer}>
      <AutoHeightImage
        style={{ top: verticalScale(90), alignSelf: "center" }}
        width={width * 0.95}
        source={require("../../../assets/images/industry.png")}
      />
      <FormButton title="Create Account" style={{ alignSelf: "center" }} />
      <FormButton
        title="Login"
        outlined={true}
        style={{ alignSelf: "center", marginTop: verticalScale(20) }}
      />
      {/* 
      <View>
        <Text>or continue with</Text>

        <View></View>
      </View> */}
    </ScrollView>
  );
};

export default AuthScreen;
