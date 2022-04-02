import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Animated, TextInput, TouchableOpacity } from 'react-native';
import { useFunctionalOrientaion } from '../../utils/responsiveUtils';
import Icon from 'react-native-vector-icons/Entypo';
import { main, mainLight } from '../../utils/colors';
import responsiveStyles from './styles';




const Login = (props) => {

    const { styles, isPortrait, heightToDp, widthToDp, width, height } = useFunctionalOrientaion(responsiveStyles);


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
        <View style={isPortrait ? styles.container : { ...styles.container, flexDirection: 'row' }} >
            <Animated.Image source={require('../../../assets/images/logoWhite.png')}
                style={[isPortrait ? styles.imageStyleP : styles.imageStyleL, {
                    transform: [
                        { scale },
                        { translateY }
                    ]
                }]} />
            <View style={isPortrait ? styles.itemViewsP : styles.itemViewsL}>
                <View style={isPortrait ? styles.inputGroupViewP : styles.inputGroupViewL}>
                    <View style={styles.inputItemViewP}>
                        <View style={styles.iconViewP}>
                            <Icon name='mail' size={isPortrait ? widthToDp(8) : heightToDp(8)} color='#FFF' />
                            <View style={[styles.vLineP, { backgroundColor: mainLight }]} />
                            <Animated.View style={[styles.vLineP, { transform: [{ scaleY: scaleY1 }] }]} />
                        </View>
                        <View style={styles.inputViewP}>
                            <Text style={isPortrait ? styles.txtLabelP : styles.txtLabelL}>
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
                    <View style={styles.inputItemViewP}>
                        <View style={styles.iconViewP}>
                            <Icon name='lock' size={isPortrait ? widthToDp(8) : heightToDp(8)} color='#FFF' />
                            <View style={[styles.vLineP, { backgroundColor: mainLight }]} />
                            <Animated.View style={[styles.vLineP, { transform: [{ scaleY: scaleY2 }] }]} />
                        </View>
                        <View style={styles.inputViewP}>
                            <Text style={isPortrait ? styles.txtLabelP : styles.txtLabelL}>
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
                                <Icon name='eye' size={isPortrait ? widthToDp(5) : heightToDp(5)} color='#FFF' />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.hLineP, { backgroundColor: mainLight }]} />
                        <Animated.View style={[styles.hLineP, { transform: [{ scaleX: scaleX2 }] }]} />
                    </View>
                </View>
                <TouchableOpacity style={isPortrait ? styles.btnForgetP : styles.btnForgetL}>
                    <Text style={isPortrait ? styles.txtBtnForgetP : styles.txtBtnForgetL}>Forget Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isPortrait ? styles.btnLoginP : styles.btnLoginL}
                    onPress={() => {
                        props.navigation.navigate('MyFlight')
                    }}
                >
                    <Text style={isPortrait ? styles.txtBtnLoginP : styles.txtBtnLoginL}>Login</Text>
                </TouchableOpacity>
                <View style={styles.btnJoinViewP}>
                    <Text style={isPortrait ? styles.txtJoinP : styles.txtJoinL}>don't have account?</Text>
                    <TouchableOpacity style={isPortrait ? styles.btnJoinP : styles.btnJoinL}>
                        <Text style={isPortrait ? styles.txtBtnJoinP : styles.txtBtnJoinL}> Join Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;


