import React, { Component, useRef, useEffect } from 'react';
import { View, Image, Text, Animated, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useFunctionalOrientaion } from '../utils/responsiveUtils';
import Icon from 'react-native-vector-icons/Entypo';
// import { TextInput } from 'react-native-paper';
import { main, mainLight } from '../utils/colors';




const Login = () => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientaion(responsiveStyles);

    const logoAnim = useRef(new Animated.Value(0)).current;

    const scale = logoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.3]
    })

    const translateY = logoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [heightToDp(-20), heightToDp(0)]
    })

    const StartAnim = () => {

        Animated.spring(logoAnim, {
            toValue: 1,
            duration: 2500,
            stiffness: 30,
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
                        <View style={styles.vLineP} />
                    </View>
                    <View style={styles.inputViewP}>
                        <Text style={styles.txtLabelP}>
                            Email
                        </Text>
                        <TextInput
                            placeholder='enter email'
                            style={styles.inputStylesP}
                        />
                    </View>
                    <View style={styles.hLineP} />
                </View>
                <View style={[styles.inputItemViewP,]}>
                    <View style={styles.iconViewP}>
                        <Icon name='lock' size={widthToDp(10)} color='#FFF' />
                        <View style={styles.vLineP} />
                    </View>
                    <View style={styles.inputViewP}>
                        <Text style={styles.txtLabelP}>
                            Password
                        </Text>
                        <TextInput
                            placeholder='enter password'
                            style={styles.inputStylesP}
                        />
                        <TouchableOpacity style={styles.btnHidden}>
                            <Icon name='eye' size={widthToDp(5)} color='#FFF' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hLineP} />
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
            justifyContent: 'center',
            alignItems: 'center',
            width: w(90),
            height: h(20),
            marginTop:h(4)

        },

        inputItemViewP: {
            width: '100%',
            height: '50%',
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