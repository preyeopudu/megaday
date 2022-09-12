import { Text, Image, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { secondary } from "../../constants/color";
import styles from "../../styles";
const Message = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderBottomColor: "#F8F8F8",
        borderBottomWidth: 2,
        paddingBottom: 20,
      }}
    >
      <Image
        style={{
          width: 55,
          height: 55,
          borderRadius: 60,
        }}
        source={require("../../../assets/images/car.png")}
      />
      <View>
        <Text style={{ fontFamily: "circularmedium", fontSize: 13 }}>
          Sarah Ayo
        </Text>
        <Text
          style={{
            color: "#9F9F9F",
            fontSize: 11,
            fontFamily: "circularmedium",
            marginTop: 5,
          }}
        >
          Hello,is this product available?
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontFamily: "circular", fontSize: 10 }}>02:22pm</Text>
        <View
          style={{
            backgroundColor: secondary,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 5,
          }}
        >
          <Text style={{ fontFamily: "circular", fontSize: 10, color: "#fff" }}>
            2
          </Text>
        </View>
      </View>
    </View>
  );
};

const MessagesScreen = () => {
  return (
    <View
      style={[
        styles.scrollContainer,
        {
          backgroundColor: "#EDEDED",
          width: "85%",
          paddingHorizontal: 0,
          alignSelf: "center",
        },
      ]}
    >
      <Text style={{ fontFamily: "bold", fontSize: 16, marginVertical: 15 }}>
        Messages
      </Text>
      <View style={{}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: "#fff",
            paddingBottom: 100,
            paddingTop: 20,
          }}
        >
          <Message />
          <Message />
          <Message />
          <Message />
        </ScrollView>
      </View>
    </View>
  );
};

export default MessagesScreen;
