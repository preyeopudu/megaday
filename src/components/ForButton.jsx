import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const FormButton = ({ title, outlined, onPress, style }) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        paddingVertical: 10,
        borderColor: "#BB00DA",
        borderWidth: 3,
        width: "100%",
        height: 54,
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
          fontSize: scale(19),
          letterSpacing: 1,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;
