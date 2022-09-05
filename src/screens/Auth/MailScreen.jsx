import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, Linking, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FormButton from "../../components/ForButton";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles";

const MailScreen = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "space-around",
        flex: 1,
      }}
      style={[styles.scrollContainer]}
    >
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../../assets/images/sms.png")} />
        <View style={{ marginVertical: verticalScale(30) }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "circularbold",
              fontSize: scale(20),
            }}
          >
            Check your mail
          </Text>
          <Text
            style={{
              fontSize: scale(14),
              textAlign: "center",
              fontFamily: "circular",
              color: primary,
            }}
          >
            We’ve sent a password recover link to your mail check your mail for
            instructions.
          </Text>
        </View>

        <FormButton
          title="Open email app"
          onPress={() => Linking.openURL("mailto:")}
        />
      </View>

      <View style={{}}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "circularbold",
            color: primary,
          }}
        >
          Did not receive the mail? Try checking your spam folder or
          <Text
            style={{ color: secondary }}
            onPress={() => navigate("NewPassword")}
          >
            {" "}
            try again
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default MailScreen;
