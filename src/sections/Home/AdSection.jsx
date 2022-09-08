import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Text,
} from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import numbro from "numbro";
import { primary, secondary } from "../../constants/color";

const AdSection = () => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        marginTop: 20,
      }}
    >
      <AutoHeightImage
        style={{ alignSelf: "center", marginBottom: 10 }}
        width={width * 0.85}
        source={require("../../../assets/images/car.png")}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontFamily: "bold", fontSize: 14 }}>
            Nike Running Shoe
          </Text>
          <Text style={{ fontSize: 10, fontFamily: "regular", color: primary }}>
            shoes
          </Text>
        </View>
        <Text style={{ fontFamily: "bold", color: secondary, fontSize: 16 }}>
          {"\u20A6"}
          {numbro(17000).format({ thousandSeparated: true })}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AdSection;
