import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity } from "react-native";
import { primary } from "../../constants/color";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const ChatInput = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
        <TouchableOpacity onPress={pickImage}>
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
