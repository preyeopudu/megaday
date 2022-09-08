import { View, TouchableOpacity, Image } from "react-native";

const AdSection = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text>Megaday</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={require("../../../assets/images/search.png")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../../../assets/images/bell.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdSection;
