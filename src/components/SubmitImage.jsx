import { View, Text } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { secondary } from "../constants/color";

const SubmitImage = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        width: "45%",
      }}
    >
      <View
        style={{
          backgroundColor: secondary,
          justifyContent: "center",
          marginRight: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <Ionicons name="md-document-text-outline" size={24} color="#fff" />
      </View>
      <View>
        <Text
          ellipsizeMode="tail b"
          numberOfLines={1}
          style={{
            fontSize: 15,
            fontFamily: "circularbold",
            color: secondary,
            width: "60%",
          }}
        >
          Image 11111
        </Text>
        <Text
          style={{ fontFamily: "circular", color: secondary, fontSize: 12 }}
        >
          2mb
        </Text>
      </View>
    </View>
  );
};

export default SubmitImage;
