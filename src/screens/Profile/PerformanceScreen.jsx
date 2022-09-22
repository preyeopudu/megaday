import { View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Header from "../../components/Header";
import AnalysisSection from "../../sections/Performance/Analysis";
import GraphSection from "../../sections/Performance/graph";
import GraphInfoSection from "../../sections/Performance/Info";
import styles from "../../styles";

const PerformanceScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#EDEDED" }]}>
      <Header title={"Performance"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <GraphSection />
          <AnalysisSection />
        </View>
        <View style={{ marginTop: 90 }}>
          <GraphInfoSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default PerformanceScreen;
