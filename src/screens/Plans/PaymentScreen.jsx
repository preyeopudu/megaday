import { ScrollView } from "react-native-virtualized-view";
import styles from "../../styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { primary, secondary } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import FormButton from "../../components/ForButton";

const PaymentMethod = ({ image }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 10,
      }}
    >
      <View style={{ backgroundColor: "#F6F6F6", padding: 10 }}>
        <Image source={image} />
      </View>

      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontFamily: "circularbold", fontSize: 13 }}>
          Paystack
        </Text>
        <Text style={{ fontSize: 10, fontFamily: "circular", color: primary }}>
          Checkout with paystack
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const PaymentScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={[styles.scrollContainer, { backgroundColor: "EDEDED" }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ fontSize: 16, fontFamily: "circularmedium" }}>
        Plan payment
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#666666",
          fontFamily: "bold",
          marginVertical: 15,
        }}
      >
        please make payment to start enjoying all the features as soon as
        possible
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ backgroundColor: "#fff", padding: 5, marginVertical: 20 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#F3EAF5",
              borderColor: secondary,
              borderWidth: 2,
              padding: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../../../assets/images/megacrown.png")} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontFamily: "circularmedium", fontSize: 14 }}>
                  Mega Deals
                </Text>
                <TouchableOpacity onPress={() => navigate("pricing")}>
                  <Text
                    style={{
                      color: secondary,
                      fontSize: 10,
                      fontFamily: "circularbold",
                    }}
                  >
                    Change Plan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: "circularmedium",
                  fontSize: 16,
                  color: secondary,
                }}
              >
                N 22,000.00
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "circularmedium",
                  color: primary,
                }}
              >
                1 month
              </Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: secondary,
                fontSize: 14,
                fontFamily: "circularbold",
                marginTop: 20,
              }}
            >
              Payment Method
            </Text>
            <PaymentMethod
              image={require("../../../assets/images/paystack.png")}
            />
            <PaymentMethod
              image={require("../../../assets/images/paypal.png")}
            />
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            color: primary,
            fontSize: 11,
            fontFamily: "circularbold",
            marginBottom: 100,
          }}
        >
          Secure Payments
        </Text>

        <FormButton title="Pay" style={{ marginBottom: 100 }} />
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
