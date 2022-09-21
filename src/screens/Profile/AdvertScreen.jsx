import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import styles from "../../styles";
import { secondary } from "../../constants/color";
import AdvertTabs from "../../components/AdvertTab";

const Ads = () => {
  return (
    <View style={{ backgroundColor: "#fff", marginVertical: 15 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <Image
          source={require("../../../assets/images/car.png")}
          style={{ width: 56, height: 56 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontFamily: "circularbold", fontSize: 14 }}>
            Jbl Speakers
          </Text>
          <Text
            style={{
              fontFamily: "circularbold",
              color: secondary,
              fontSize: 12,
            }}
          >
            N 33,000,000
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: secondary,
          paddingVertical: 15,
          marginTop: 15,
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff" }}>Sold</Text>
      </TouchableOpacity>
    </View>
  );
};

const AdvertScreen = () => {
  return (
    <View style={[styles.scrollContainer, { backgroundColor: "EDEDED" }]}>
      <Header title={"My Adverts"} />
      <View style={{ marginVertical: 15 }}>
        <AdvertTabs />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <Ads />
        <Ads />
      </ScrollView>
    </View>
  );
};

export default AdvertScreen;
