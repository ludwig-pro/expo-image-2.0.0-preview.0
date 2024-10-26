import { StyleSheet, Platform } from "react-native";

import { useImage, Image } from "expo-image";
import { Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <MyImage />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

export function MyImage() {
  const image = useImage("https://picsum.photos/1000/800", {
    maxWidth: 800,
    onError(error, retry) {
      console.error("Loading failed:", error.message);
    },
  });

  if (!image) {
    return <Text>Image is loading...</Text>;
  }

  return (
    <Image
      source={image}
      style={{ width: "100%", height: image.height / 2 }}
      placeholder={{
        blurhash:
          "|mJ89IxuIUayjZWBj[WBof~pofWBofWBjtayf7ayRkWBoej[WBoeWBofWBxtofRkayfQj[WBj[j[Rjj[j[ofayj[j[azfQM{WBfQayofayj[ayfjofoLWBayj[ayj[ayj[ofj[j@j[ayayoeayfQj[ayWCayayj[WVj[ay",
      }}
    />
  );
}
