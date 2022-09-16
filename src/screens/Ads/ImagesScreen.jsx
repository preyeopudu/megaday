import { View, Image, Text } from "react-native";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";
import FormButton from "../../components/ForButton";
import AdSection from "../../sections/Home/AdSection";
import AdTop from "../../sections/Ads/AdTop";
import { secondary } from "../../constants/color";
import ImageDetails from "../../sections/Images/ImageDetails";
import ProductImages from "../../sections/Ads/ProductImages";
import { ScrollView } from "react-native-virtualized-view";

const ImagesScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <AdTop screen={2} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ alignSelf: "center" }}
      >
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: "circularbold", fontSize: 14 }}>
            Feature image
          </Text>
          <Text
            style={{ fontFamily: "circular", fontSize: 12, marginVertical: 5 }}
          >
            (Only for customers on Jumbo and Dandy deals)
          </Text>

          <View
            style={{
              borderColor: secondary,
              borderWidth: 2,
              padding: 40,
              backgroundColor: "rgba(187, 0, 218, 0.05)",
              borderStyle: "dashed",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../../assets/images/gallery.png")} />
            <Text
              style={{
                textAlign: "center",
                fontSize: 11,
                marginVertical: 20,
                fontFamily: "circular",
              }}
            >
              must not exceed 5 Mb Supported formats are *.jpg and *.png
            </Text>
            <FormButton title="Upload image" />
          </View>
        </View>
        <ImageDetails />
        <ProductImages />
        <FormButton title="Next" style={{ marginVertical: 30 }} />
      </ScrollView>
    </View>
  );
};

export default ImagesScreen;
