import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FormButton from "../../components/ForButton";
import FormInput from "../../components/forInput";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollContainer}
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <View style={{ marginTop: verticalScale(150) }}>
        <Text style={{ fontSize: scale(24), fontFamily: "circularmedium" }}>
          Welcome back
        </Text>
        <Text
          style={{ fontFamily: "regular", marginTop: 5, fontSize: scale(14) }}
        >
          Input your login details below
        </Text>
      </View>
      <View style={{ marginVertical: verticalScale(30) }}>
        <FormInput label="Email" />
        <Text
          style={{
            fontFamily: "circular",
            marginVertical: 5,
            fontSize: 10,
            color: "#ED1F34",
            marginBottom: 15,
          }}
        >
          Wrong credentials
        </Text>
        <FormInput label="Password" isSecure={true} />
      </View>
      <View
        style={{ alignItems: "center", alignSelf: "center", width: "100%" }}
      >
        <FormButton title="Login" />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-end",
            marginTop: 20,
          }}
        >
          <Text style={{ fontFamily: "circular", color: primary }}>
            Forgot password?
          </Text>
          <TouchableOpacity onPress={() => navigate("Forgot")}>
            <Text
              style={{
                fontFamily: "circularmedium",
                color: secondary,
                marginLeft: 3,
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
