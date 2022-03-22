import React, { Component, useRef, useEffect, useState } from 'react';
import { View, Image, Text, Animated, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useFunctionalOrientaion } from '../utils/responsiveUtils';
import Icon from 'react-native-vector-icons/Entypo';
// import { TextInput } from 'react-native-paper';
import { main, mainLight } from '../utils/colors';
import { transform } from '@babel/core';
import { backColor } from '../utils/config';




const Login = () => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientaion(responsiveStyles);

    const logoAnim = useRef(new Animated.Value(0)).current;
    const inputAnim1 = useRef(new Animated.Value(0)).current;
    const inputAnim2 = useRef(new Animated.Value(0)).current;


    const scale = logoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.3]
    })

    const translateY = logoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [heightToDp(-20), heightToDp(0)]
    })

    const scaleX1 = inputAnim1.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    const scaleY1 = inputAnim1.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    const scaleX2 = inputAnim2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    const scaleY2 = inputAnim2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    const StartAnim = () => {

        Animated.spring(logoAnim, {
            toValue: 1,
            duration: 2500,
            stiffness: 30,
            useNativeDriver: true
        }).start();
    };

    const StartInputAnim = (animVal, toValue) => {

        Animated.timing(animVal, {
            toValue,
            duration: 500,
            useNativeDriver: true
        }).start();
    };


    useEffect(() => {
        StartAnim();
    }, [])



    return (
        <View style={styles.container} >
            <Animated.Image source={require('../../assets/images/logoWhite.png')}
                style={[isPortrait ? styles.imageStyleP : styles.imageStyleL, {
                    transform: [
                        { scale },
                        { translateY }
                    ]
                }]} />
            <View style={styles.inputGroupViewP}>
                <View style={styles.inputItemViewP}>
                    <View style={styles.iconViewP}>
                        <Icon name='mail' size={widthToDp(10)} color='#FFF' />
                        <View style={[styles.vLineP, { backgroundColor: mainLight }]} />
                        <Animated.View style={[styles.vLineP, { transform: [{ scaleY: scaleY1 }] }]} />
                    </View>
                    <View style={styles.inputViewP}>
                        <Text style={styles.txtLabelP}>
                            Email
                        </Text>
                        <TextInput
                            placeholder='enter email'
                            style={styles.inputStylesP}
                            onFocus={() => {
                                StartInputAnim(inputAnim1, 1);
                            }}
                            onBlur={() => {
                                StartInputAnim(inputAnim1, 0);
                            }}
                        />
                    </View>
                    <View style={[styles.hLineP, { backgroundColor: mainLight }]} />
                    <Animated.View style={[styles.hLineP, { transform: [{ scaleX: scaleX1 }] }]} />
                </View>
                <View style={[styles.inputItemViewP,]}>
                    <View style={styles.iconViewP}>
                        <Icon name='lock' size={widthToDp(10)} color='#FFF' />
                        <View style={[styles.vLineP, { backgroundColor: mainLight }]} />
                        <Animated.View style={[styles.vLineP, { transform: [{ scaleY: scaleY2 }] }]} />
                    </View>
                    <View style={styles.inputViewP}>
                        <Text style={styles.txtLabelP}>
                            Password
                        </Text>
                        <TextInput
                            placeholder='enter password'
                            style={styles.inputStylesP}
                            onFocus={() => {
                                StartInputAnim(inputAnim2, 1);
                            }}
                            onBlur={() => {
                                StartInputAnim(inputAnim2, 0);
                            }}
                        />
                        <TouchableOpacity style={styles.btnHidden}>
                            <Icon name='eye' size={widthToDp(5)} color='#FFF' />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.hLineP, { backgroundColor: mainLight }]} />
                    <Animated.View style={[styles.hLineP, { transform: [{ scaleX: scaleX2 }] }]} />
                </View>
            </View>
            <TouchableOpacity style={styles.btnForgetP}>
                <Text style={styles.txtBtnForgetP}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLoginP}>
                <Text style={styles.txtBtnLoginP}>Login</Text>
            </TouchableOpacity>
            <View style={styles.btnJoinViewP}>
                <Text style={styles.txtJoinP}>don't have account?</Text>
                <TouchableOpacity style={styles.btnJoinP}>
                    <Text style={styles.txtBtnJoinP}> Join Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;


function responsiveStyles(screenInfo, w, h) {


    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: main,
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageStyleL: {
            width: h(40),
            height: h(40),
            resizeMode: 'contain',
            position: 'relative'

        },
        imageStyleP: {
            width: w(40),
            height: w(40),
            resizeMode: 'contain',
            position: 'relative',

        },
        inputGroupViewP: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: w(90),
            height: h(20),
            marginTop: h(4)

        },

        inputItemViewP: {
            width: '100%',
            height: '45%',
            flexDirection: "row"
        },
        hLineP: {
            height: 2,
            width: '100%',
            backgroundColor: '#FFF',
            position: 'absolute',
            right: 0,
            bottom: 0
        },
        iconViewP: {
            height: '100%',
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        vLineP: {
            height: '100%',
            width: 2,
            backgroundColor: '#FFF',
            position: 'absolute',
            right: 0,
            top: 0
        },

        inputViewP: {
            height: '100%',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        txtLabelP: {
            marginLeft: w(1),
            fontSize: w(4),
            color: '#FFF',
            fontWeight: 'bold'
        },
        inputStylesP: {
            width: '100%',
            color: '#FFF',
            textAlign: 'left',
        },
        btnHidden: {
            padding: 5,
            position: 'absolute',
            right: 10
        },
        btnForgetP: {
            paddingHorizontal: 5,
            paddingVertical: 2,
            marginTop: h(2)
        },
        txtBtnForgetP: {
            fontSize: w(4),
            fontWeight: 'bold',
            color: '#FFF'
        },

        btnLoginP: {
            width: w(70),
            height: h(6),
            borderRadius: h(7) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            margin: h(3)
        },
        txtBtnLoginP: {
            fontSize: w(4),
            fontWeight: 'bold',
            color: main
        },
        btnJoinViewP: {
            flexDirection: 'row'
        },
        txtJoinP: {
            color: mainLight,
            fontSize: w(4),
        },
        txtBtnJoinP: {
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: w(4),
        },
        btnJoinP: {
            paddingHorizontal: 5,
        }

    });
}