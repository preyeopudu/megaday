import { View, ScrollView, Image, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../../styles/index";
import AdTop from "../../sections/Ads/AdTop";
import FormInput from "../../components/forInput";
import FormButton from "../../components/ForButton";

const Target = ({ title, focus }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FontAwesome5
        name="check-circle"
        size={20}
        color={focus ? "#05CC31" : "#A09E9E"}
      />
      <Text
        style={{
          marginLeft: 3,
          fontFamily: "circularmedium",
          fontSize: 13,
          color: focus ? "#000" : "#A09E9E",
        }}
      >
        Product
      </Text>
    </View>
  );
};

const SalesScreen = () => {
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
      <FormButton title="Next" style={{ marginTop: 100 }} />
    </ScrollView>
  );
};

export default SalesScreen;
