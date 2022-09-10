import { TouchableOpacity, View, ScrollView, Image, Text } from "react-native";
import StackHeaders from "../../components/StackHeaders";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles/index";

const favourites = [
  {
    title: "Nike Running Shoe",
    category: "shoes",
    location: "ikeja,lagos ",
    price: "17,000",
  },
  {
    title: "adidas Running Shoe",
    category: "shoes",
    location: "ikeja,lagos ",
    price: "17,000",
  },
];

const FavouriteComponent = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: 10,
        marginVertical: 5,
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../../assets/images/car.png")}
        style={{ height: 110, width: 110 }}
      />
      <View style={{ marginLeft: 25 }}>
        <View>
          <Text style={{ fontFamily: "bold", fontSize: 12 }}>{item.title}</Text>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: 10,
              color: primary,
              marginVertical: 2,
            }}
          >
            {item.category}
          </Text>
          <Text
            style={{
              fontFamily: "circularmedium",
              fontSize: 12,
              color: primary,
            }}
          >
            {item.location}
          </Text>
        </View>
        <Text
          style={{
            color: secondary,
            fontFamily: "bold",
            fontSize: 16,
            marginTop: 10,
          }}
        >
          {"\u20A6"} {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const FavouriteScreen = () => {
  return (
    <View style={[styles.scrollContainer, { backgroundColor: "#EDEDED" }]}>
      <StackHeaders title="Favourites" />
      <ScrollView>
        {favourites.map((favourite) => (
          <FavouriteComponent key={favourite.title} item={favourite} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FavouriteScreen;
