import { View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Header from "../../components/Header";
import AnalysisSection from "../../sections/Performance/Analysis";
import GraphSection from "../../sections/Performance/graph";
import styles from "../../styles";

const PerformanceScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <Header title={"Performance"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: "space-between" }}
      >
        <View>
          <GraphSection />
          <AnalysisSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default PerformanceScreen;
