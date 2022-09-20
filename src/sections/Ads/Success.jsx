import { View, Text } from "react-native";
import { secondary, primary } from "../../constants/color";
import { AntDesign } from "@expo/vector-icons";
import FormButton from "../../components/ForButton";
import { useNavigation } from "@react-navigation/native";

const SuccessSection = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        alignItems: "center",
        width: "80%",
        alignSelf: "center",
        paddingVertical: 20,
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(187, 0, 218, 0.5)",
          height: 190,
          width: 190,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: secondary,
            height: 130,
            width: 130,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <AntDesign name="checkcircleo" size={92} color="#fff" />
        </View>
      </View>
      <View style={{ width: "100%", alignSelf: "center" }}>
        <Text style={{ fontFamily: "bold", fontSize: 24, textAlign: "center" }}>
          Successful
        </Text>
        <Text
          style={{
            color: primary,
            fontFamily: "medium",
            fontSize: 14,
            lineHeight: 20,
            textAlign: "center",
          }}
        >
          Submitted Successfully for review
        </Text>

        <FormButton
          title="Go home"
          style={{ marginTop: 40, width: "100%" }}
          onPress={() => navigate("main")}
        />
      </View>
    </View>
  );
};

export default SuccessSection;
