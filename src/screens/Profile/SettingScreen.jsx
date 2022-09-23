import { ScrollView, View } from "react-native";
import FormInput from "../../components/forInput";
import Header from "../../components/Header";
import PhoneInput from "../../components/PhoneInput";
import styles from "../../styles";

const SettingScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <Header title={"Profile settings"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff", padding: 10 }}
      >
        <FormInput label="Name" />
        <FormInput label="Email" />
        <PhoneInput />
        <FormInput label="Password" />
        <FormInput label="Address" />
        <FormInput label="State" />
      </ScrollView>
    </View>
  );
};

export default SettingScreen;
