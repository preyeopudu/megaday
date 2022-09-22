import { View, Text } from "react-native";

const Analysis = (color, title) => {
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={{ width: 10, height: 10, backgroundColor: "black" }} />
    <Text style={{}}>Impression</Text>
  </View>;
};

const AnalysisSection = () => {
  return (
    <View>
      <Text>Data Graph Analysis</Text>
      <Analysis />
    </View>
  );
};
