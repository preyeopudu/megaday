import { ScrollView, View, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FormButton from "../../components/ForButton";
import FormInput from "../../components/forInput";
import { primary } from "../../constants/color";
import styles from "../../styles";

const NewPassword = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ justifyContent: "space-around", flex: 1 }}
    >
      <View>
        <Text
          style={{ fontFamily: "circularbold", fontSize: 20, marginBottom: 10 }}
        >
          Create new password
        </Text>
        <Text style={{ fontFamily: "circular", color: primary, fontSize: 14 }}>
          your new password must be different from previously used passwords
        </Text>
        <View style={{ marginVertical: 30 }}>
          <FormInput
            label="New password"
            isSecure={true}
            style={{ marginBottom: 5 }}
          />
          <Text style={{ color: primary, fontFamily: "circular" }}>
            must be atleast 8 characters
          </Text>
        </View>

        <FormInput label="Confirm password" isSecure={true} />
        <Text style={{ color: primary, fontFamily: "circular", marginTop: 5 }}>
          must be atleast 8 characters
        </Text>
      </View>
      <View>
        <FormButton title="Reset and Continue" />
      </View>
    </ScrollView>
  );
};

export default NewPassword;
