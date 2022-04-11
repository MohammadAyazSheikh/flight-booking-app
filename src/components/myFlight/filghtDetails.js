import React, { Component, useRef, useEffect } from 'react';
import { View, Animated, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useFunctionalOrientaion } from '../../utils/responsiveUtils';
import responsiveStyles from '../../screens/myFlightScreen/styles/styles';
import FlightTimeDonut from '../general/flightTimeDonut/flightTimeDonut';
import { timing } from 'react-native-reanimated';



const MyFlight = ({ toCity, toCityShort, fromCity, fromCityShort, date, flightNo, timeRemaining }) => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientaion(responsiveStyles);



    return (
        <>
            <View style={styles.detailsView}>
                <View>
                    <Text style={styles.txtCityShort}>
                        {fromCityShort}
                    </Text>
                    <Text style={styles.txtCity}>
                        {fromCity}
                    </Text>
                </View>
                <View>
                    <Text style={styles.txtDateHeading}>
                        DATE
                        </Text>
                    <Text style={styles.txtDate}>
                        {date}
                    </Text>
                </View>
            </View>
            <View style={styles.timeView}>
                <FlightTimeDonut
                    percentage={50}
                    radius={widthToDp(10)}
                    color='#FFF'
                    strokeWidth={5}
                    time={timeRemaining}
                    iconSize={widthToDp(8)}
                    fontSize={widthToDp(4)}
                />
            </View>
            <View style={styles.detailsView}>
                <View>
                    <Text style={styles.txtCityShort}>
                        {toCityShort}
                    </Text>
                    <Text style={styles.txtCity}>
                        {toCity}
                    </Text>
                </View>
                <View>
                    <Text style={styles.txtDateHeading}>
                        FLIGHT NO
                        </Text>
                    <Text style={styles.txtDate}>
                        {flightNo}
                    </Text>
                </View>
            </View>
        </>
    );
}

/*

  <AnimatedButton
        duration={1000}
        color='#fff'
        strokeWidth={2}
        width={widthToDp(20)}
        height={widthToDp(20)}
        borderRadius={15}
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
*/
export default MyFlight;

