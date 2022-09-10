import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import FormButton from "../../components/ForButton";
import VendorList from "../../components/VendorList";
import { Login } from "../../store/actions/Login";
import { primary } from "../../constants/color";
import { scale } from "react-native-size-matters";

const CategorySection = () => {
  const dispatch = useDispatch();

  const HandleRegister = async () => {
    alert(2);
    dispatch(Login());
  };
  return (
    <View style={{ marginHorizontal: 30 }}>
      <Text style={{ fontFamily: "bold", fontSize: 24, textAlign: "center" }}>
        Vendor Category
      </Text>
      <Text
        style={{
          fontFamily: "bold",
          fontSize: 14,
          textAlign: "center",
          color: primary,
          marginHorizontal: scale(30),
          marginVertical: 5,
          marginBottom: 10,
        }}
      >
        Please, choose one of the following category for your product
      </Text>

      <VendorList />

      <FormButton
        onPress={HandleRegister}
        title="Continue"
        style={{ marginVertical: 15 }}
      />
    </View>
  );
};

export default CategorySection;
