import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import ProductImage from "../../components/ProductImage";
import { AntDesign } from "@expo/vector-icons";
import { secondary } from "../../constants/color";
import { scale } from "react-native-size-matters";

const ProductImages = () => {
  const { width } = useWindowDimensions();
  const [images, SetImages] = useState([
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
      id: "54694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ]);

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontFamily: "circularbold", fontSize: 14 }}>
        Product image
      </Text>
      <Text style={{ fontFamily: "circular", fontSize: 10 }}>
        (Not less than 4 images)
      </Text>

      <FlatList
        data={images}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ProductImage item={item} />}
        numColumns={4}
        ListFooterComponent={
          <TouchableOpacity
            style={{
              backgroundColor: secondary,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
              width: scale(65),
              height: scale(65),
            }}
          >
            <AntDesign name="plus" size={24} color="#fff" />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default ProductImages;
