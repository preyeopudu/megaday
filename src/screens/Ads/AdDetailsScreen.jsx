import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import FormInput from "../../components/forInput";
import AdTop from "../../sections/Ads/AdTop";
import styles from "../../styles";
import { AntDesign } from "@expo/vector-icons";
import { primary, secondary } from "../../constants/color";
import FormButton from "../../components/ForButton";
import { useNavigation } from "@react-navigation/native";

const AdDetailsScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <AdTop screen={3} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#fff",
          paddingTop: 20,
          paddingHorizontal: 15,
        }}
      >
        <FormInput label="Product Name" />
        <FormInput label="Sub category" />
        <FormInput label="Location" />
        <FormInput label="Description" />
        <FormInput label="Quantity" />
        <FormInput label="Price" />

        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignItems: "center",
          }}
        >
          <AntDesign name="checkcircleo" size={24} color={secondary} />
          <Text
            style={{
              color: secondary,
              fontFamily: "circularmedium",
              marginLeft: 5,
              fontSize: 14,
              marginVertical: 15,
            }}
          >
            Negotiable
          </Text>
        </View>
        <FormInput
          label={"Discount (only for users on mega deal plan)"}
          style={{ marginVertical: 5 }}
        />

        <Text style={{ fontSize: 12, fontFamily: "circular" }}>
          Price after discount :
          <Text style={{ fontFamily: "circularbold" }}>N580,000.00</Text>
        </Text>

        <View
          style={{
            marginBottom: 80,
            marginTop: 20,
          }}
        >
          <Text style={{ color: primary }}>Condition</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 0,
            }}
          >
            <TouchableOpacity
              style={{
                borderColor: primary,
                borderWidth: 1.6,
                flex: 1,
                marginRight: 2,
              }}
            >
              <Text
                style={{
                  color: primary,
                  fontSize: 15,
                  fontFamily: "circularbold",
                  textAlign: "center",
                  paddingVertical: 10,
                }}
              >
                New
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: secondary,
                flex: 1,
                marginLeft: 2,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: secondary,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  textAlign: "center",
                  fontFamily: "circularbold",
                }}
              >
                Used
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FormButton
          title="Next"
          style={{ marginBottom: 50 }}
          onPress={() => navigate("AdSubmit")}
        />
      </ScrollView>
    </View>
  );
};

export default AdDetailsScreen;
