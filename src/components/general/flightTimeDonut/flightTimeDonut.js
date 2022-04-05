
import React, { useEffect, useRef, } from 'react';
import { View, Animated, Text } from "react-native";
import IconMt from 'react-native-vector-icons/MaterialCommunityIcons'
import Svg, { G, Circle } from "react-native-svg";


const AnimatedCircle = Animated.createAnimatedComponent(Circle);


export default function Donut({
    percentage = 75,
    radius = 40,
    strokeWidth = 10,
    duration = 500,
    color = 'tomato',
    delay = 0,
    max = 100,
    iconSize = 25,
    fontSize = 12,
    time = '1h 20mins'
}) {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const circleRef = useRef();
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
    //  const strokeDashoffset = circleCircumference - (circleCircumference / 100) * percentage;

    const animation = (toValue) => {
        return Animated.timing(animatedValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: true
        }).start(
            () => {
                // animation(toValue === 0 ? percentage : 0)
                console.log('ended')
            }
        );
    }

    useEffect(() => {

        animation(percentage);

        animatedValue.addListener((v) => {
            if (circleRef?.current) {
                // const maxPerc = 100 * percentage / max;
                const maxPerc = 100 * v.value / max;
                const strokeDashoffset = circleCircumference - (circleCircumference / 100) * maxPerc;
                circleRef.current.setNativeProps({
                    strokeDashoffset,
                })
            }



        })

        return () => {
            animatedValue.removeAllListeners();
        }

    }, [max, percentage])
    return (
     
            <View style={{ justifyContent: 'center', alignItems: 'center', width: halfCircle * 2, height: halfCircle * 2 }} >
                <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle * 2}  ${halfCircle * 2} `}  >
                    <G rotation='180' origin={`${halfCircle},${halfCircle}`}>
                        {/* <Circle
                        cx={'50%'}
                        cy='50%'
                        stroke={color}
                        r={radius}
                        fill='transparent'
                        strokeOpacity={0.2}
                        strokeWidth={strokeWidth}
                    /> */}
                        <AnimatedCircle
                            ref={circleRef}
                            cx='50%'
                            cy='50%'
                            stroke={color}
                            r={radius}
                            fill='transparent'
                            strokeWidth={strokeWidth}
                            strokeDasharray={circleCircumference}
                            strokeDashoffset={circleCircumference}
                            strokeLinecap='round'
                        />
                    </G>
                </Svg>
                <IconMt size={iconSize} name='airplane-takeoff' style={{ position: 'absolute' }} color={color} />
                <Text style = {{color,fontSize,position:'absolute', bottom:'10%' }}>{time}</Text>
            </View>
            
      
    )
}



