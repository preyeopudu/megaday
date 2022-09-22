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

const Info = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "40%",
        marginVertical: 5,
      }}
    >
      <AntDesign name="checkcircle" size={12} color={secondary} />
      <Text
        style={{
          color: "#202020",
          fontSize: 11,
          marginLeft: 10,
          fontFamily: "circularmedium",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const JumboSection = () => {
  return (
    <View>
      <FlatList
        data={list}
        keyExtractor={(item) => item.title}
        numColumns={2}
        renderItem={({ item }) => <Info title={item.title} />}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default JumboSection;
