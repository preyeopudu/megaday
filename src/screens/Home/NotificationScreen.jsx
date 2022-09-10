import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import NotificationSection from "../../sections/Home/Notification";
import styles from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import StackHeaders from "../../components/StackHeaders";

const NotificationScreen = () => {
  return (
    <View style={[styles.scrollContainer, { backgroundColor: "#F6F6F6" }]}>
      <StackHeaders title={"Notifications"} />
      <NotificationSection />
    </View>
  );
};

export default NotificationScreen;
