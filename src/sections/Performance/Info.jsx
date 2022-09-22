import { View, Text, Image } from "react-native";
import { secondary } from "../../constants/color";

const Info = ({ color, number, title, image }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: color,
        padding: 15,
        alignItems: "center",
        marginVertical: 10,
        paddingVertical: 20,
      }}
    >
      <Image source={image} />
      <Text
        style={{
          marginHorizontal: 10,
          color: "#fff",
          fontSize: 16,
          fontFamily: "circularbold",
        }}
      >
        {title}
      </Text>
      <Text style={{ color: "#fff", fontFamily: "bold", fontSize: 24 }}>
        {number}
      </Text>
    </View>
  );
};

const GraphInfoSection = () => {
  return (
    <View>
      <Info
        image={require("../../../assets/images/status-up.png")}
        title="Impressions"
        number="20"
        color={secondary}
      />
      <Info
        image={require("../../../assets/images/message-notif.png")}
        title="Visitors"
        number="20"
        color={"#000"}
      />
      <Info
        image={require("../../../assets/images/message-notif.png")}
        title="Chat request"
        number="20"
        color={"#FFB84D"}
      />
    </View>
  );
};

export default GraphInfoSection;
