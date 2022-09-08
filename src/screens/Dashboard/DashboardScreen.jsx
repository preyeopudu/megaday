import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import TopSection from "../../sections/Home/TopSection";
import styles from "../../styles";

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <TopSection />
    </ScrollView>
  );
};

export default DashboardScreen;
