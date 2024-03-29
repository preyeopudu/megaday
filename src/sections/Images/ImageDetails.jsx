import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { secondary } from "../../constants/color";
const ImageDetails = ({ size, name }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        marginTop: 10,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: secondary,
              paddingVertical: 10,
              marginRight: 10,
              paddingHorizontal: 22,
            }}
          >
            <Ionicons name="md-document-text-outline" size={20} color="#fff" />
          </View>

          <View>
            <Text
              style={{
                fontFamily: "circularbold",
                color: secondary,
                fontSize: 14,
              }}
            >
              {name.slice(0, 5)}
            </Text>
            <Text
              style={{
                fontFamily: "circularmedium",
                fontSize: 12,
                color: secondary,
              }}
            >
              {parseFloat(size / (1000 * 1024)).toFixed(2)}mb
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <AntDesign name="closecircleo" size={20} color={secondary} />
        </TouchableOpacity>
      </View>

      <View
        style={{ backgroundColor: secondary, height: 10, marginVertical: 10 }}
      />
    </View>
  );
};

export default ImageDetails;
