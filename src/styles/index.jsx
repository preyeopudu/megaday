import { ScaledSheet } from "react-native-size-matters";
import { StatusBar } from "react-native";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "30@s",
    marginTop: StatusBar.currentHeight,
  },
});

export default styles;
