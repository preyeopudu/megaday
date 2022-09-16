import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { primary } from "../../constants/color";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import EmojiSelector, { Categories } from "react-native-emoji-selector";

const ChatInput = () => {
  const [image, setImage] = useState(null);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    const uri = result.uri;
    let fileName = "";
    fileName = result.uri.split("/").slice(-1)[0];
    console.log("URI;", uri);
    result = await FileSystem.getInfoAsync(uri);
    console.log("filesize", result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ height: isEmojiPickerOpen ? "50%" : "auto" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#F1F1F1",
          paddingVertical: 15,
          paddingHorizontal: 15,
          borderRadius: 30,
          alignItems: "center",

          alignSelf: "center",
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "80%" }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsEmojiPickerOpen(true);
            }}
          >
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

      {isEmojiPickerOpen && <EmojiSelector columns={8} />}
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
