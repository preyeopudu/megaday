import { ScrollView, View, Text } from "react-native";
import styles from "../../styles";

const NewPassword = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View>
        <Text>Create new password</Text>
        <Text>
          your new password must be different from previously used passwords
        </Text>
      </View>
      <View></View>
    </ScrollView>
  );
};

export default NewPassword;
