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
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useState } from "react";

const ImagesScreen = () => {
  const [image, setImage] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const [imageName, setName] = useState();
  const { navigate } = useNavigation();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const uri = result.uri;
    let fileName = "";
    fileName = result.uri.split("/").slice(-1)[0];
    setName(fileName);
    result = await FileSystem.getInfoAsync(uri);
    console.log("filesize", result.size);
    setImageSize(result.size);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
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
            <FormButton title="Upload image" onPress={pickImage} />
          </View>
        </View>
        {imageSize ? <ImageDetails size={imageSize} name={imageName} /> : <></>}
        <ProductImages />
        <FormButton
          title="Next"
          style={{ marginVertical: 30 }}
          onPress={() => navigate("AdDetails")}
        />
      </ScrollView>
    </View>
  );
};

export default ImagesScreen;
