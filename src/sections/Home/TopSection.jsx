import { View, Text, Image, TouchableOpacity } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { secondary } from "../../constants/color";
import { scale } from "react-native-size-matters";

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
        <Text
          style={{ fontFamily: "bold", fontSize: scale(25), color: secondary }}
        >
          Mega<Text style={{ color: "#000" }}>day</Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={{ marginHorizontal: 20 }}>
          <AutoHeightImage
            source={require("../../../assets/images/search.png")}
            width={scale(22)}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AutoHeightImage
            width={scale(22)}
            source={require("../../../assets/images/bell.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopSection;
