import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity } from "react-native";
import { primary } from "../../constants/color";

const ChatInput = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F1F1F1",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 30,
        alignItems: "center",
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "80%" }}
      >
        <TouchableOpacity>
          <Entypo name="emoji-happy" size={18} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholder="Type a message"
          style={{
            width: "100%",
            marginHorizontal: 5,
            fontFamily: "circular",
            fontSize: 14,
          }}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Feather
            name="paperclip"
            size={20}
            style={{ marginRight: 15 }}
            color={primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;
