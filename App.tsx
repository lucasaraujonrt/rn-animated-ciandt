import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  FadeIn,
  BounceIn,
  FlipInXUp,
  StretchInX,
  ZoomInRotate,
  SlideInRight,
} from "react-native-reanimated";

const { width: WIDTH } = Dimensions.get("window");

export default function App() {
  const width = useSharedValue(Math.PI);
  const height = useSharedValue(Math.PI);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        // duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      height: withTiming(height.value, { easing: Easing.bounce }),
      backgroundColor: "#ED1941",
    };
  });

  return (
    <View style={styles.container}>
      {/* <Animated.View style={animatedStyles} />
      <TouchableOpacity
        onPress={() => {
          width.value = withSpring(Math.random() * 250);
          height.value = withSpring(Math.random() * 150);
        }}
        style={{ alignSelf: "center", paddingTop: 30 }}
      >
        <Text>Random Value</Text>
      </TouchableOpacity> */}
      <LayoutAnimation />
      <StatusBar style="auto" />
    </View>
  );
}

const LayoutAnimation = () => {
  return (
    <View>
      <Animated.View style={styles.square} entering={FadeIn.duration(2000)} />
      <Animated.View style={styles.square} entering={BounceIn.duration(2000)} />
      <Animated.View
        style={styles.square}
        entering={FlipInXUp.duration(2000)}
      />
      <Animated.View
        style={styles.square}
        entering={StretchInX.duration(2000)}
      />
      <Animated.View
        style={styles.square}
        entering={ZoomInRotate.duration(2000)}
      />
      <Animated.View
        style={styles.square}
        entering={SlideInRight.duration(2000)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#ED1941",
    marginVertical: 10,
  },
});
