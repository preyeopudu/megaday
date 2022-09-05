import { FlatList, View, Modal, Text, TouchableOpacity } from "react-native";
import { code } from "../constants/countrycode";

const CodePicker = ({ isVisible, setIsvisible, setCode }) => {
  const CodeItem = ({ item }) => {
    const onPress = () => {
      setIsvisible(false);
      setCode(item.dial_code);
    };
    return (
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontFamily: "circular",
            letterSpacing: 1,
            fontSize: 18,
            marginVertical: 10,
            marginHorizontal: 20,
          }}
        >
          {item.name} ({item.dial_code})
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Modal visible={isVisible} animationType="slide">
        <View>
          <FlatList
            data={code}
            renderItem={({ item }) => <CodeItem item={item} />}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CodePicker;
