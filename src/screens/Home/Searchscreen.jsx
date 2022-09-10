import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../styles";
import { AntDesign } from "@expo/vector-icons";
import { secondary } from "../../constants/color";
import { scale } from "react-native-size-matters";
import CategorySection from "../../sections/Auth/CategorySection";
import RecentSearch from "../../sections/Home/RecentSearchSection";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const { goBack } = useNavigation();
  return (
    <ScrollView
      style={[styles.scrollContainer, { backgroundColor: "#F6F6F6" }]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity style={{ marginRight: 10 }} onPress={goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            borderColor: secondary,
            borderWidth: 1.2,
            padding: 4,
            width: "85%",
          }}
        >
          <TextInput
            placeholder="What are you searching for?"
            style={{ fontFamily: "circularmedium" }}
          />
        </View>
      </View>

      <RecentSearch />
    </ScrollView>
  );
};

export default SearchScreen;
