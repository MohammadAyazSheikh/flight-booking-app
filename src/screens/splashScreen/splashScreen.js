import React, { Component, useRef, useEffect } from 'react';
import { View, Animated, StatusBar } from 'react-native';
import { main } from '../../utils/colors';
import { useFunctionalOrientaion } from '../../utils/responsiveUtils';
import responsiveStyles from './styles';



const Splash = ({ navigation }) => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientaion(responsiveStyles);

    const logoAnim = useRef(new Animated.Value(0)).current;

    const scale = logoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.3]
    })

    const translateY = logoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [heightToDp(20), heightToDp(0)]
    })

    const StartAnim = () => {

        Animated.spring(logoAnim, {
            toValue: 1,
            duration: 2500,
            stiffness: 30,
            useNativeDriver: true
        }).start(() => {
            setTimeout(() => {
                navigation.navigate('Login');
            }, 1000);

        });
    };


    useEffect(() => {
        StartAnim();
    }, [])



    return (
        <View style={styles.container} >
            <StatusBar
                backgroundColor={main}
                animated={true}
                barStyle='light-content'
            />
            <Animated.Image source={require('../../../assets/images/logoWhite.png')}
                style={[isPortrait ? styles.imageStyleP : styles.imageStyleL, {
                    transform: [
                        { scale },
                        { translateY }
                    ]
                }]} />
        </View>
    );
}

export default Splash;


