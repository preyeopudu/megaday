import { View, ScrollView, Image, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../../styles/index";
import AdTop from "../../sections/Ads/AdTop";

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
    <ScrollView style={styles.scrollContainer}>
      <Text
        style={{ marginBottom: 15, fontFamily: "circularmedium", fontSize: 13 }}
      >
        Post an Ad
      </Text>
      <AdTop screen={1} />
    </ScrollView>
  );
};

export default SalesScreen;
