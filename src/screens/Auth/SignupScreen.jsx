import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FormButton from "../../components/ForButton";
import FormInput from "../../components/forInput";
import PhoneInput from "../../components/PhoneInput";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles";
import { ScrollView } from "react-native-virtualized-view";
import CodePicker from "../../components/CodePicker";

const SignupScreen = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView style={styles.scrollContainer} nestedScrollEnabled={true}>
      <Text
        style={{
          fontFamily: "circularmedium",
          fontSize: scale(22),
          paddingTop: scale(60),
        }}
      >
        Create account
      </Text>
      <Text style={{ fontFamily: "circular", color: primary, marginTop: 5 }}>
        Fill in the following information to create account and get started.
      </Text>
      <FormInput label="Full name" style={{ marginTop: 20 }} />
      <FormInput label="Email" style={{ marginTop: 20 }} />
      <PhoneInput label="Phone Input" style={{ marginTop: 20 }} />
      <FormInput label="Password" style={{ marginTop: 20 }} isSecure />
      <FormInput
        label="Confirm password"
        style={{ marginVertical: 20 }}
        isSecure
      />

      <FormButton
        title="Create account"
        style={{ marginTop: verticalScale(30) }}
      />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: scale(10),
          paddingBottom: 40,
        }}
      >
        <Text style={{ fontFamily: "circularmedium" }}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => navigate("Login")}
        >
          <Text
            style={{
              color: secondary,
              fontFamily: "circularmedium",
              fontSize: 14,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
