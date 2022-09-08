import { View, Text, Image, TouchableOpacity } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { secondary } from "../../constants/color";

const TopSection = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontFamily: "bold", fontSize: 24, color: secondary }}>
          Mega<Text style={{ color: "#000" }}>day</Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={{ marginHorizontal: 20 }}>
          <AutoHeightImage
            source={require("../../../assets/images/search.png")}
            width={20}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AutoHeightImage
            width={20}
            source={require("../../../assets/images/bell.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopSection;
