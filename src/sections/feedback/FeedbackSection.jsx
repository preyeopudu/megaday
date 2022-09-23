import { ScrollView, Text, View, Image } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { primary } from "../../constants/color";

const list = [
  {
    customername: "James Ward",
    message: "Great product",
    rating: 5,
  },
];

const Feedback = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        padding: 5,
        alignSelf: "center",

        width: "90%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../../assets/images/car.png")}
          style={{ height: 60, width: 60, borderRadius: 60 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 14, fontFamily: "circularmedium" }}>
            James Ward
          </Text>
          <Text
            numberOfLines={2}
            style={{
              width: 120,
              fontSize: 12,
              fontFamily: "circularmedium",
              color: primary,
            }}
          >
            Great product you have there, really love it bee ejevddbdb3
          </Text>
        </View>
      </View>

      <View style={{}}></View>
      <View>
        <Octicons name="smiley" size={20} color="#05CC31" />
        <Text
          style={{ fontSize: 15, fontFamily: "medium", textAlign: "center" }}
        >
          5
        </Text>
      </View>
    </View>
  );
};

const FeedBackSection = () => {
  return (
    <View style={{}}>
      <Text
        style={{
          fontFamily: "bold",
          fontSize: 24,
          marginVertical: 10,
          textAlign: "center",
        }}
      >
        FeedBack
      </Text>
      <Text
        style={{
          color: "#737373",
          fontFamily: "bold",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        your page feedback
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
      </ScrollView>
    </View>
  );
};

export default FeedBackSection;
