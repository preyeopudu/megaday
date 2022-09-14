import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { primary, secondary } from "../../constants/color";
import ChatSection from "../../sections/Home/ChatSection";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import ChatInput from "../../sections/Home/ChatInput";
const ChatScreen = () => {
  const { goBack } = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={goBack}
          />
          <Image
            source={require("../../../assets/images/car.png")}
            style={{
              width: 37,
              height: 37,
              borderRadius: 37,
              marginHorizontal: 5,
            }}
          />
          <Text style={{ fontFamily: "circularmedium", fontSize: 14 }}>
            Sarah Ayo
          </Text>
        </View>

        <TouchableOpacity>
          <Feather name="phone-call" size={24} color={secondary} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/car.png")}
            style={{ width: 56, height: 56, borderRadius: 10, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontFamily: "circularbold", fontSize: 14 }}>
              JBL Speakers
            </Text>
            <Text
              style={{ fontSize: 13, color: primary, fontFamily: "circular" }}
            >
              Is this available?
            </Text>
          </View>
        </View>

        <Text
          style={{ color: secondary, fontSize: 12, fontFamily: "circularbold" }}
        >
          N 32,000,000
        </Text>
      </View>

      <ChatSection />
      <ChatInput />
    </View>
  );
};

export default ChatScreen;
