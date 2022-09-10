import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FormButton from "../../components/ForButton";
import FormInput from "../../components/forInput";
import PhoneInput from "../../components/PhoneInput";
import { primary, secondary } from "../../constants/color";
import styles from "../../styles";
import { ScrollView } from "react-native-virtualized-view";
import { useRef, useMemo, useCallback } from "react";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../../components/Backdrop";
import VendorList from "../../components/VendorList";
import CategorySection from "../../sections/Auth/CategorySection";

const SignupScreen = () => {
  const { navigate } = useNavigation();
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["75%", "95%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <ScrollView style={styles.scrollContainer} nestedScrollEnabled={true}>
      <Text
        style={{
          fontFamily: "circularmedium",
          fontSize: scale(22),
          paddingTop: scale(60),
        }}
      >
        Create account
      </Text>
      <Text style={{ fontFamily: "circular", color: primary, marginTop: 5 }}>
        Fill in the following information to create account and get started.
      </Text>
      <FormInput label="Full name" style={{ marginTop: 20 }} />
      <FormInput label="Email" style={{ marginTop: 20 }} />
      <PhoneInput label="Phone Input" style={{ marginTop: 20 }} />
      <FormInput label="Password" style={{ marginTop: 20 }} isSecure />
      <FormInput
        label="Confirm password"
        style={{ marginVertical: 20 }}
        isSecure
      />

      <FormButton
        title="Create account"
        style={{ marginTop: verticalScale(30) }}
        onPress={handlePresentModalPress}
      />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: scale(10),
          paddingBottom: 40,
        }}
      >
        <Text style={{ fontFamily: "circularmedium" }}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => navigate("Login")}
        >
          <Text
            style={{
              color: secondary,
              fontFamily: "circularmedium",
              fontSize: 14,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <BottomSheetModal
        backdropComponent={CustomBackdrop}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView>
          <CategorySection />
        </BottomSheetScrollView>
      </BottomSheetModal>
    </ScrollView>
  );
};

export default SignupScreen;
