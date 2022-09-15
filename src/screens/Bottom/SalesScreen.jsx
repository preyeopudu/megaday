import { View, ScrollView, Image, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../../styles/index";
import AdTop from "../../sections/Ads/AdTop";
import FormInput from "../../components/forInput";
import FormButton from "../../components/ForButton";
import { useNavigation } from "@react-navigation/native";
const SalesScreen = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView
      style={[styles.scrollContainer, { backgroundColor: "#EDEDED" }]}
    >
      <AdTop screen={1} />
      <View
        style={{
          backgroundColor: "#fff",

          paddingVertical: 30,
          marginTop: 40,
        }}
      >
        <FormInput label="Product name" />
      </View>
      <FormButton
        title="Next"
        onPress={() => navigate("Image")}
        style={{ marginTop: 100 }}
      />
    </ScrollView>
  );
};

export default SalesScreen;
