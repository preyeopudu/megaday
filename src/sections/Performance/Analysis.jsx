import { View, Text } from "react-native";
import { primary, secondary } from "../../constants/color";

const Analysis = ({ color, title }) => {
  console.log(color);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 3,
      }}
    >
      <View
        style={{
          width: 11,
          height: 11,
          backgroundColor: color,
          borderRadius: 4,
        }}
      />
      <Text
        style={{
          marginLeft: 5,
          fontFamily: "regular",
          color: primary,
          fontSize: 10,
          marginVertical: 15,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const AnalysisSection = () => {
  return (
    <View>
      <Text style={{ fontFamily: "regular", fontSize: 17 }}>
        Data Graph Analysis
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          alignItems: "center",
        }}
      >
        <Analysis title="Impression" color={secondary} />
        <Analysis title="Visitors" color={"#000"} />
        <Analysis title="Chat request" color={"#FF9900"} />
      </View>
    </View>
  );
};

export default AnalysisSection;
