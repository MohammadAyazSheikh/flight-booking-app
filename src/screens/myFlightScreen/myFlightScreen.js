import React, { Component, useRef, useEffect } from 'react';
import { View, Animated, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useFunctionalOrientaion } from '../../utils/responsiveUtils';
import IconIonic from 'react-native-vector-icons/Ionicons';
import responsiveStyles from './styles/styles';
import { main } from '../../utils/colors';
import FlightTimeDonut from '../../components/general/flightTimeDonut/flightTimeDonut';
import AimatedButton from '../../components/general/animatedButton/animatedButton';
import AnimatedButton from '../../components/general/animatedButton/animatedButton';
import IconMt from 'react-native-vector-icons/MaterialCommunityIcons'


const MyFlight = (props) => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientaion(responsiveStyles);



    return (
        <View style={styles.container} >
            <StatusBar
                backgroundColor='#FFF'
                animated={true}
                barStyle='dark-content'
                hidden={isPortrait ? false : true}
            />

            <View style={styles.topView}>
                <View style={styles.topHeaderView}>
                    <TouchableOpacity
                        onPress={() => { props.navigation.goBack() }}
                    >
                        <IconIonic name='chevron-back' color={main} size={isPortrait ? widthToDp(10) : heightToDp(10)} />
                    </TouchableOpacity>

                    <Image source={require('../../../assets/images/user.jpg')}
                        style={styles.imgUser}
                    />
                </View>
                <View style={styles.headingView}>
                    <Text style={styles.txtHeader}>
                        My Flights
                    </Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <AnimatedButton
                    duration={1000}
                    color='#fff'
                    strokeWidth={2}
                    width={widthToDp(20)}
                    height={widthToDp(20)}
                    Icon={({ style }) => {
                        return (
                            <IconMt size={widthToDp(10)} name='airplane-takeoff' style={style} color={main} />
                        )
                    }}
                    onPress={null}
                />
                <FlightTimeDonut
                    percentage={50}
                    radius={widthToDp(12)}
                    color='#FFF'
                    strokeWidth={5}
                    time='20 mins'
                    iconSize={widthToDp(10)}
                    fontSize={widthToDp(4.5)}
                />
            </View>
        </View>
    );
}

/*
  <FlightTimeDonut
        percentage={50}
        radius={widthToDp(12)}
        color='#FFF'
        strokeWidth={5}
        time = '20 mins'
        iconSize={widthToDp(10)}
        fontSize = {widthToDp(4.5)}
    />
*/
export default MyFlight;

