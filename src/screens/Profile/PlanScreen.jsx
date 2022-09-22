import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles";

const plans = [
  { title: "Mega Deals" },
  { title: "Optimum" },
  { title: "Galore" },
  { title: "Nifty" },
];

const PlanComponent = ({ title }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate("deals", { title: title })}
      style={{
        backgroundColor: "#F3EAF5",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderColor: secondary,
        borderWidth: 2,
        marginVertical: 10,
      }}
    >
      <Image source={require("../../../assets/images/megacrown.png")} />
      <Text
        style={{ marginLeft: 15, fontSize: 14, fontFamily: "circularbold" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const PlanScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <Text style={{ fontSize: 16, fontFamily: "circularmedium" }}>
        Pricing
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#666666",
          fontFamily: "bold",
          marginVertical: 15,
        }}
      >
        Choose the right plan for your ads and start selling faster
      </Text>

      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff", padding: 15 }}
        >
          {plans.map((plan) => (
            <PlanComponent key={plan.title} title={plan.title} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PlanScreen;
