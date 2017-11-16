import React from 'react';
import { Platform, StatusBar, Easing, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import SignIn from '../screens/SignInScreen';
import Register from '../screens/RegisterScreen';


const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#2b303b',
};

export default StackNavigator(
    {
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                title: "Prijavi se",
                headerStyle,
                headerTitleStyle: {
                    color: '#f5f5f5'
                },
            },
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: "Prijavi se",
                headerStyle,
                headerTitleStyle: {
                    color: '#f5f5f5'
                },
            },
        }
    },
    {
        headerMode: "none",
        transitionConfig: () => ({
            transitionSpec: {
                duration: 1000,
                easing: Easing.step0,
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps
                const { index } = scene

                const height = layout.initHeight
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                })

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                })

                return { opacity, transform: [{ translateY }] }
            },
        }),
    }
);
