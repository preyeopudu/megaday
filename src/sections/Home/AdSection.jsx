import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Text,
} from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

const AdSection = () => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        marginTop: 20,
        alignItems: "center",
      }}
    >
      <AutoHeightImage
        width={width * 0.8}
        source={require("../../../assets/images/car.png")}
      />
      <View>
        <View>
          <Text>Nike Running Shoe</Text>
          <Text>shoes</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AdSection;
