import React, { Component, useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { useFunctionalOrientaion } from '../../utils/responsiveUtils';
import responsiveStyles from './styles';



const MyFlight = ({ navigation }) => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientaion(responsiveStyles);



    return (
        <View style={styles.container} >

        </View>
    );
}

export default MyFlight;


