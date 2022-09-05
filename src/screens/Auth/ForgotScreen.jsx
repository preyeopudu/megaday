import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FormButton from "../../components/ForButton";
import FormInput from "../../components/forInput";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles";

const ForgotScreen = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView style={styles.scrollContainer}>
      <Text
        style={{
          fontFamily: "circularbold",
          marginTop: verticalScale(25),
          fontSize: scale(20),
        }}
      >
        Forgot Password?
      </Text>
      <Text
        style={{
          fontFamily: "circular",
          color: primary,
          fontSize: scale(14),
          marginTop: 10,
        }}
      >
        Enter the email address associated with your account and we'll send a
        password reset link there.
      </Text>

      <FormInput label="Email" style={{ marginVertical: scale(50) }} />
      <FormButton title="Reset" onPress={() => navigate("Mail")} />
    </ScrollView>
  );
};

export default ForgotScreen;
