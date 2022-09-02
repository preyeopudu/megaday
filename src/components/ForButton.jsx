import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const FormButton = ({ title, outlined, onPress, style }) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        borderColor: "#BB00DA",
        borderWidth: 3,
        width: width * 0.8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: outlined ? "#fff" : "#BB00DA",
        ...style,
      }}
    >
      <Text
        style={{
          fontFamily: "circular",
          color: outlined ? "#BB00DA" : "#fff",
          fontSize: scale(16),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;
