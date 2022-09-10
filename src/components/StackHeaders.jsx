import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { primary } from "../constants/color";
const StackHeaders = ({ title }) => {
  const { goBack } = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1.5,
        paddingBottom: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "circularmedium",
            fontSize: 20,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default StackHeaders;
