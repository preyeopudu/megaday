import { ScaledSheet } from "react-native-size-matters";
import { StatusBar } from "react-native";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "30@s",
    paddingTop: StatusBar.currentHeight,
  },
});

export default styles;
