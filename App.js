import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Lottie from 'lottie-react-native';
import animationMap from './animations/animationMap';
import { playAnimationAsLoop, playAnimationOnce } from "./functions/animation";

export default function App() {
  const [selectedAnimation, setSelectedAnimation] = useState("dinosaur-running");
  const animationDuration = 3000;
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    // play animation once
    // playAnimationOnce(animationProgress, animationDuration);
    // play animation as loop
    playAnimationAsLoop(animationProgress, animationDuration);
  }, []);

  const pickerOptions = Object.keys(animationMap).map((key) => {
    return <Picker.Item key={key} label={animationMap[key].name} value={key} />
  });

  const selectedAnimationFile = animationMap[selectedAnimation].json;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.headingText}>Lottie Animation</Text>
      </View>
      <Picker
        style={styles.picker}
        selectedValue={selectedAnimation}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedAnimation(itemValue)
        }>
        {pickerOptions}
      </Picker>
      <View style={styles.animationContainer}>
        <Lottie
          style={styles.lottie}
          source={selectedAnimationFile}
          progress={animationProgress.current}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 32
  },
  picker: {
    width: '90%',
    height: 200
  },
  animationContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  lottie: {
    width: '100%',
    height: 320
  },
});
