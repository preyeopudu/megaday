import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import FormButton from "../../components/ForButton";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles/index";

const ProfileButton = ({ title }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
      }}
      onPress={() => navigate(title)}
    >
      <Text style={{ fontFamily: "bold", fontSize: 15 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const ProfileScreen = () => {
  return (
    <View style={[styles.scrollContainer, { backgroundColor: "#F6F6F6" }]}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/car.png")}
            style={{ width: 37, height: 37, borderRadius: 30, marginRight: 10 }}
          />
          <Text style={{ fontSize: 13, fontFamily: "circularbold" }}>
            Sarah Ayo
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../../../assets/images/setting.png")} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileButton title={"My Adverts"} />
        <ProfileButton title={"Performance"} />
        <ProfileButton title={"Megaday plans"} />
        <ProfileButton title={"Feedback"} />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Image source={require("../../../assets/images/crown.png")} />
          <Text style={{ marginLeft: 10, fontFamily: "bold", fontSize: 15 }}>
            Optimum Package
          </Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 40 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "bold",
              color: primary,
              fontSize: 14,
            }}
          >
            FAQ
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "bold",
              color: primary,
              fontSize: 14,
              marginVertical: 15,
            }}
          >
            About
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "bold",
              color: primary,
              fontSize: 14,
            }}
          >
            Terms of service
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: secondary,
            borderRadius: 40,
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 100,
            right: 0,
          }}
        >
          <Image source={require("../../../assets/images/support.png")} />
        </TouchableOpacity>
        <FormButton title={"Sign Out"} style={{ marginBottom: 20 }} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
