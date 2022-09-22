import { Text, TouchableOpacity } from "react-native";
import { secondary } from "../../constants/color";
import JumboSection from "../../sections/Deals/jumbosection";
import styles from "../../styles";
import { ScrollView } from "react-native-virtualized-view";
import JumboDates from "../../sections/Deals/JumboDates";
import FormButton from "../../components/ForButton";
const DealScreen = ({ route }) => {
  const { title } = route.params;
  return (
    <ScrollView
      style={[styles.scrollContainer, { backgroundColor: "#EDEDED" }]}
    >
      <Text
        style={{
          color: secondary,
          fontFamily: "bold",
          fontSize: 35,
          marginVertical: 10,
        }}
      >
        {title}
      </Text>

      <JumboSection />
      <JumboDates />

      <FormButton title={"Proceed tp payment"} />
    </ScrollView>
  );
};

export default DealScreen;
