import { TouchableOpacity, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const { goBack } = useNavigation();
  return (
    <View
      style={{ alignItems: "center", flexDirection: "row", marginVertical: 10 }}
    >
      <TouchableOpacity onPress={goBack}>
        <AntDesign name="arrowleft" size={25} color="#292D32" />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "circularbold", fontSize: 15, marginLeft: 20 }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
