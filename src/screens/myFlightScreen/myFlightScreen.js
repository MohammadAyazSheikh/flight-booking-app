import React, { Component, useRef, useEffect } from 'react';
import { View, Animated, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useFunctionalOrientaion } from '../../utils/responsiveUtils';
import IconIonic from 'react-native-vector-icons/Ionicons';
import responsiveStyles from './styles/styles';
import { main } from '../../utils/colors';



const MyFlight = (props) => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientaion(responsiveStyles);



    return (
        <View style={styles.container} >
            <StatusBar
                backgroundColor='#FFF'
                animated={true}
                barStyle='dark-content'
                hidden = {isPortrait? false: true}
            />

            <View style={styles.topView}>
                <View style={styles.topHeaderView}>
                    <TouchableOpacity
                        onPress={() => { props.navigation.goBack()}}
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

            </View>
        </View >
    );
}

export default MyFlight;


