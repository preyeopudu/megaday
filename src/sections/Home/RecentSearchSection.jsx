import { Text, TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const searches = [
  { name: "Shirts" },
  { name: "SwimWears" },
  { name: "Suits & Blazers" },
];

const SearchComponent = ({ search }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: "100%",
        marginVertical: 2,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "circularmedium", fontSize: 15 }}>
        {search.name}
      </Text>

      <TouchableOpacity>
        <Fontisto name="redo" size={16} color="#909090" />
      </TouchableOpacity>
    </View>
  );
};

const RecentSearch = () => {
  return (
    <View style={{ alignSelf: "center", width: "100%", marginVertical: 20 }}>
      {searches.map((search) => (
        <SearchComponent search={search} key={search.name} />
      ))}
    </View>
  );
};

export default RecentSearch;
