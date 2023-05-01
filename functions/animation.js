import { Animated, Easing } from 'react-native';

export const playAnimationOnce = (animationProgress, duration = 5000) => {
    Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: false
    }).start();
}

export const playAnimationAsLoop = (animationProgress, duration = 5000) => {
    Animated.loop(
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: duration,
            easing: Easing.linear,
            useNativeDriver: false,
        }),
        { iterations: -1 }
    ).start();
}