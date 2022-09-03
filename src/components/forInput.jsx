import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

const FormInput = ({ label, onChangeText, isSecure }) => {
  const [isActive, SetIsActive] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <View style={{}}>
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
        }}
      >
        <TextInput
          secureTextEntry={show}
          onFocus={() => SetIsActive(true)}
          onBlur={() => SetIsActive(false)}
          style={{
            paddingVertical: 10,
            width: isSecure ? "85%" : "100%",
          }}
          onChangeText={onChangeText}
        />

        {isSecure ? (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => setShow(!show)}
          >
            {show == false ? (
              <Feather name="eye" size={20} color="black" />
            ) : (
              <Feather name="eye-off" size={20} color="black" />
            )}
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default FormInput;
