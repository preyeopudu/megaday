import { View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Header from "../../components/Header";
import GraphSection from "../../sections/Performance/graph";
import styles from "../../styles";

const PerformanceScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <Header title={"Performance"} />
      <ScrollView>
        <GraphSection />
      </ScrollView>
    </View>
  );
};

export default PerformanceScreen;
