import { View, ScrollView, Image, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../../styles/index";

const Target = ({ title, focus }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FontAwesome5
        name="check-circle"
        size={20}
        color={focus ? "#05CC31" : "#A09E9E"}
      />
      <Text
        style={{
          marginLeft: 3,
          fontFamily: "circularmedium",
          fontSize: 13,
          color: focus ? "#000" : "#A09E9E",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const AdTop = ({ screen }) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 15,
          marginBottom: 15,
          fontFamily: "circularmedium",
          fontSize: 13,
        }}
      >
        Post an Ad
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Target title="product" focus={screen >= 1 ? true : false} />
        <Target title="Image" focus={screen >= 2 ? true : false} />
        <Target title="Details" focus={screen >= 3 ? true : false} />
        <Target title="Submit" focus={screen >= 4 ? true : false} />
      </View>
    </View>
  );
};

export default AdTop;
