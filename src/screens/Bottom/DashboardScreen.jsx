import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import AdSection from "../../sections/Home/AdSection";
import TopSection from "../../sections/Home/TopSection";
import styles from "../../styles";

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <TopSection />
      <AdSection />
    </ScrollView>
  );
};

export default DashboardScreen;
