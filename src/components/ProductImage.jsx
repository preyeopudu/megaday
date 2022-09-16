import { Text, TouchableOpacity, View } from "react-native";
import { secondary } from "../constants/color";
import { AntDesign } from "@expo/vector-icons";

const ProductImage = () => {
  return (
    <TouchableOpacity
      style={{
        borderStyle: "dashed",
        borderWidth: 1.6,
        borderColor: secondary,
        backgroundColor: "rgba(187, 0, 218, 0.05)",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        flex: 1 / 4,
        paddingVertical: 20,
      }}
    >
      <AntDesign name="plus" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default ProductImage;
