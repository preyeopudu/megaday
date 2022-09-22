import { View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { secondary } from "../../constants/color";

const list = [
  { price: "1000", date: "1 week" },
  { price: "100000", date: "1 month" },
];

const Info = () => {
  return (
    <View
      style={{
        alignItems: "center",
        borderColor: secondary,
        borderWidth: 3,
        padding: 10,
        marginVertical: 10,
      }}
    >
      <Text
        style={{ fontSize: 20, fontFamily: "circularbold", color: secondary }}
      >
        N 11,500.00
      </Text>
      <Text
        style={{ fontSize: 15, fontFamily: "circularmedium", color: secondary }}
      >
        1 Month
      </Text>
    </View>
  );
};

const JumboDates = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Info />
      <Info />
    </View>
  );
};

export default JumboDates;
