import { ScrollView, Text, TouchableOpacity } from "react-native";
import { secondary } from "../constants/color";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
const AdvertTabs = () => {
  const [selected, setSelected] = useState(null);

  const Advert = ({ title }) => {
    const Action = () => {
      setSelected(title);
    };
    return (
      <TouchableOpacity
        onPress={Action}
        style={{
          flexDirection: "row",
          backgroundColor: selected == title ? secondary : "#fff",
          width: 100,
          marginHorizontal: 3,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather
          name="shield"
          size={20}
          color={selected == title ? "#fff" : secondary}
        />
        <Text
          style={{
            fontFamily: "circularbold",
            color: selected == title ? "#fff" : secondary,
            fontSize: 10,
            marginHorizontal: 3,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      alwaysBounceHorizontal={true}
      style={{}}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <Advert title={"Active"} />
      <Advert title={"Pending"} />
      <Advert title={"Declined"} />
      <Advert title={"Draft"} />
    </ScrollView>
  );
};

export default AdvertTabs;
