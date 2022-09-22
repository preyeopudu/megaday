import { View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { secondary } from "../../constants/color";

const list = [
  { title: "Spotlight visibility" },
  { title: "Spotlight on Categories" },
  { title: "Social media/Webiste Link inclusion" },
  { title: "Spotlight auto review" },
  { title: "Number of items to be promoted" },
  { title: "Social media / Email promotions" },
];

const Info = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <AntDesign name="checkcircle" size={24} color={secondary} />
    </View>
  );
};

const JumboSection = () => {
  return (
    <View>
      <Info />
    </View>
  );
};

export default JumboSection;
