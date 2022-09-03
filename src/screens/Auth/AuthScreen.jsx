import { View, useWindowDimensions, ScrollView } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { verticalScale } from "react-native-size-matters";
import FormButton from "../../components/ForButton";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";

const AuthScreen = () => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();
  return (
    <ScrollView
      style={[styles.scrollContainer]}
      showsVerticalScrollIndicator={false}
    >
      <AutoHeightImage
        style={{ top: verticalScale(90), alignSelf: "center" }}
        width={width}
        source={require("../../../assets/images/industry.png")}
      />

      <FormButton
        title="Create Account"
        style={{ alignSelf: "center" }}
        onPress={() => {
          navigate("Register");
        }}
      />
      <FormButton
        onPress={() => {
          navigate("Login");
        }}
        title="Login"
        outlined={true}
        style={{ marginTop: verticalScale(20), alignSelf: "center" }}
      />
    </ScrollView>
  );
};

export default AuthScreen;
