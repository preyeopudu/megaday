import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { primary, secondary } from "../../constants/color";

const ChatSection = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        marginTop: 30,
        paddingVertical: 40,
        borderRadius: 10,
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <ScrollView></ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></View>

      {/* <TouchableOpacity>
        <FontAwesome5 name="telegram-plane" size={28} color={secondary} />
      </TouchableOpacity> */}
    </View>
  );
};

export default ChatSection;
