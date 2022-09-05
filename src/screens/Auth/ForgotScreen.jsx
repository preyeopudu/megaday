import { View, Text } from "react-native";
import styles from "../../styles";

const ForgotScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
      <Text>
        Enter the email address associated with your account and we'll send a
        password reset link there.
      </Text>
    </View>
  );
};

export default ForgotScreen;
