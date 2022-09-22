import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { secondary } from "../../constants/color";
import { AntDesign } from "@expo/vector-icons";

const GraphSection = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{}}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      <View
        style={{
          backgroundColor: secondary,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          borderTopEndRadius: 15,
          borderTopStartRadius: 15,
        }}
      >
        <Text
          style={{ color: "#fff", fontFamily: "circularbold", fontSize: 7.7 }}
        >
          Perfomance
        </Text>
        <TouchableOpacity
          style={{
            borderColor: "#fff",
            borderWidth: 0.8,
            paddingHorizontal: 10,
            paddingVertical: 5,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "circularbold",
              fontSize: 8,
              marginHorizontal: 2,
            }}
          >
            Today
          </Text>
          <AntDesign name="down" size={10} color="#fff" />
        </TouchableOpacity>
      </View>
      <LineChart
        bezier
        withHorizontalLabels={true}
        withVerticalLabels={true}
        width={width - 60}
        data={{
          labels: [
            " Jan",
            " Feb",
            " Mar",
            " Apr",
            " May",
            " Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              data: [1, 7, 6, 4, 2, 50, 30, 30, 40, 20, 11, 25],
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(187,0,218,${opacity})`, // optional
            },
            {
              data: [2, 4, 6, 80, 18, 20, 50, 60, 21, 20, 50, 70, 80],
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(255,153,0, ${opacity})`, // optional
            },
            {
              data: [90, 14, 7, 8, 2, 41, 22, 33, 10, 1, 50, 50, 23, 60, 20],
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(0,0,0, ${opacity})`, // optional
            },
          ],
        }}
        height={180}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          propsForLabels: {
            fontFamily: "normal",
            fontSize: 5,
          },
          propsForBackgroundLines: {
            color: "#D9E1E7",
          },
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,

          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default GraphSection;
