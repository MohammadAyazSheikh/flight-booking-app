import React, { Component, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, FlatList, } from 'react-native';
import { backColor, foreColor, widthToPer, heightToPer } from '../utils/config';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { GetProducts } from '../redux/actions/getProductsActions';
import { ADD_CART, REMOVE_CART } from '../redux/actions/cartActions';
import { useFunctionalOrientaion, orientaionListener, useClassOrientaion } from '../utils/responsiveUtils';
import { color } from 'react-native-reanimated';

const screen = Dimensions.get('screen');





let w = Dimensions.get('screen').width;

let h = Dimensions.get('screen').height;

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const Test = (props) => {


    const Oreintation = useFunctionalOrientaion(responsiveStyles);
    const [visible, setVisible] = React.useState(true);

    useEffect(() => {

        console.log("***")

    }, [])

    return (
        <View style={[styles.container]}>
            <Image source={require('../../assets/images/logo.png')} />
        </View>
    );
}





export default Test;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },



});

function responsiveStyles(screenInfo, w, h) {


    return StyleSheet.create({
        lpSTyye: {
            width: w(50),
            height: h(70),
            backgroundColor: 'grey',
        },
        ptStyle: {
            width: w(50),
            height: h(70),
            backgroundColor: 'lightpink',
        },
    });
}


