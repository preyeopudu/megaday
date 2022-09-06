import { TouchableOpacity, FlatList, Text, View } from "react-native";
import { useState } from "react";
import { category } from "../constants/category";
import { primary, secondary } from "../constants/color";

const VendorList = () => {
  const [selected, setSelected] = useState(null);

  const Category = ({ item }) => {
    const Action = () => {
      setSelected(item.title);
    };
    return (
      <TouchableOpacity
        onPress={Action}
        style={{
          backgroundColor: selected != item.title ? "#F5F5F5" : secondary,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "regular",
            fontSize: 14,
            paddingVertical: 20,
            color: selected != item.title ? "#000" : "#fff",
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {category.map((item) => (
        <Category item={item} />
      ))}
      {/* <FlatList
        data={category}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      /> */}
    </View>
  );
};

export default VendorList;
