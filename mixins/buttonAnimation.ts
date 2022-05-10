import {Animated, Easing} from "react-native";

const animatedValue = new Animated.Value(0);

const buttonScale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.25, 1.5]
});

const animatedScaleStyle = {
    transform: [{scale: buttonScale}]
};

const onPressIn = () => {
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true
    }).start();
}

const onPressOut = () => {
    Animated.timing(animatedValue, {
        toValue: 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true
    }).start();
};


export  {
    buttonScale,
    animatedScaleStyle,
    onPressIn,
    onPressOut
}
