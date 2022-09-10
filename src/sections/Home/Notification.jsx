import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles";

const notifications = [
  {
    title: "New message",
    message: "Hello, is the product available",
  },
  {
    title: "Offer",
    message: "can i get this for N30,000",
  },
  {
    title: "Approval",
    message: "Your ad has been approved",
  },
];

const NotificationComponent = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
      }}
    >
      <Image
        style={{ height: 55, width: 55, borderRadius: 50, marginRight: 10 }}
        source={require("../../../assets/images/car.png")}
      />
      <View>
        <Text
          style={{
            fontFamily: "circularmedium",
            color: secondary,
            marginBottom: 2,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ color: primary, fontFamily: "circularmedium" }}>
          {item.message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const NotificationSection = () => {
  return (
    <View style={{ height: "50%" }}>
      <Text
        style={{
          fontFamily: "circularmedium",
          textAlign: "right",
          color: secondary,
          marginVertical: 10,
        }}
      >
        Clear
      </Text>
      <ScrollView
        style={{
          backgroundColor: "#fff",
          padding: 10,
          paddingBottom: 200,
        }}
      >
        {notifications.map((notification) => (
          <NotificationComponent
            item={notification}
            key={notification.message}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationSection;
