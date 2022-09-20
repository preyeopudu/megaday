import { View, Text, FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import AdTop from "../../sections/Ads/AdTop";
import styles from "../../styles";
import SubmitImage from "../../components/SubmitImage";
import { useRef, useMemo, useCallback } from "react";
import { primary, secondary } from "../../constants/color";
import FormButton from "../../components/ForButton";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../../components/Backdrop";
import SuccessSection from "../../sections/Ads/Success";

const imagelist = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "338694a0f-3da1-471f-bd96-145571e29d72",
    title: "Thir Item",
  },
];

const Details = ({ title, body }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text
        style={{ color: secondary, fontFamily: "circularbold", fontSize: 14 }}
      >
        {title}
      </Text>
      <Text
        style={{ color: primary, fontFamily: "circularbold", fontSize: 13 }}
      >
        {body}
      </Text>
    </View>
  );
};

const SubmitScreen = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["75%", "75%"], []);

  const Close = () => {
    bottomSheetModalRef.current?.close();
  };
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <AdTop screen={4} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#fff",
          padding: 20,
        }}
      >
        <Details title="Product Name" body="Product Name" />
        <Details title="Image" body="Feature images" />

        <SubmitImage />

        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={2}
          data={imagelist}
          renderItem={() => <SubmitImage />}
          keyExtractor={(item) => item.id}
        />

        <Details title="Details" body="Product details" />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <Details title="Category" body={"Category"} />
          <Details title="Sub Category" body={"Sub Category"} />
          <Details title={"Loacation"} body="Abuja" />
        </View>

        <Details
          title={"Details"}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <Details title="Quantity" body={"Category"} />
          <Details title="Price" body={"N500,000"} />
          <Details title={"Negotiable"} body="Yes" />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <Details title="Quantity" body={"Category"} />
          <View style={{ width: 30 }} />
          <Details title="Price" body={"N500,000"} />
        </View>

        <FormButton
          title="Submit"
          style={{ marginBottom: 40 }}
          onPress={handlePresentModalPress}
        />
        <BottomSheetModal
          enableHandlePanningGesture={false}
          backdropComponent={CustomBackdrop}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
        >
          <SuccessSection Close={Close} />
        </BottomSheetModal>
      </ScrollView>
    </View>
  );
};

export default SubmitScreen;
