import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { scale } from "react-native-size-matters";
import { primary } from "../constants/color";
import CodePicker from "./CodePicker";

const PhoneInput = ({ label, onSelectCountry, onChangeText, style }) => {
  const [isActive, SetIsActive] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCode] = useState("+234");

  return (
    <View style={style}>
      <Text
        style={{
          fontSize: scale(15),
          fontFamily: "circular",
          color: isActive == true ? "#BB00DA" : "#8B8B8B",
        }}
      >
        {label}
      </Text>
      <View
        style={{
          borderColor: "#BB00DA",
          borderWidth: isActive == true ? 1.5 : 0.9,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 0,
          paddingLeft: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              color: primary,
              fontFamily: "circular",
              marginRight: 5,
              fontSize: 15,
            }}
          >
            {countryCode}
          </Text>
          <Image source={require("../../assets/images/Vector.png")} />
        </TouchableOpacity>
        <TextInput
          onFocus={() => SetIsActive(true)}
          onBlur={() => SetIsActive(false)}
          style={{
            paddingVertical: 10,

            width: "80%",
          }}
          onChangeText={onChangeText}
        />
      </View>

      <CodePicker isVisible={show} setIsvisible={setShow} setCode={setCode} />
    </View>
  );
};

export default PhoneInput;
