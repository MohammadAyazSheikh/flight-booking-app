
import React, { useEffect, useRef, } from 'react';
import { View, Animated, Text, TouchableOpacity } from "react-native";
import IconMt from 'react-native-vector-icons/MaterialCommunityIcons'
import Svg, { G, Circle, Rect } from "react-native-svg";

const AnimatedRect = Animated.createAnimatedComponent(Rect);


export default function AnimatedButton({
    percentage = 100,
    strokeWidth = 5,
    duration = 1000,
    color = 'tomato',
    delay = 0,
    max = 100,
    width = 50,
    height = 50,
    borderRadius = 10,
    Icon,
    onPress
}) {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const backColor = animatedValue.interpolate({
        inputRange: [0, percentage - (percentage / 100 * 60), percentage],
        outputRange: ['transparent', 'transparent', color]
    })
    const rectRef = useRef();
    const RectWidth = width + strokeWidth;
    const RectHeight = height + strokeWidth
    const svgWidth = RectWidth;
    const svgHeight = RectHeight;
    const rectLenght = width * 4;
    //  const strokeDashoffset = circleCircumference - (circleCircumference / 100) * percentage;

    const animation = (toValue) => {
        return Animated.timing(animatedValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: false
        }).start();
    }

    useEffect(() => {

        animation(percentage);

        animatedValue.addListener((v) => {
            if (rectRef?.current) {
                // const maxPerc = 100 * percentage / max;
                const maxPerc = 100 * v.value / max;
                const strokeDashoffset = rectLenght - (rectLenght / 100) * maxPerc;
                rectRef.current.setNativeProps({
                    strokeDashoffset,
                })
            }
        })



        return () => {
            animatedValue.removeAllListeners();
        }

    }, [max, percentage])
    return (
        //  viewBox={`0 0 ${(width + strokeWidth) / 2}  ${(height + strokeWidth) / 2}`}
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: RectWidth, height: RectHeight }}
            onPress={() => { typeof onPress === 'function' ? onPress() : false }}
        >
            <Svg width={svgWidth} height={svgHeight}  >
                <G >
                    <AnimatedRect
                        width={width}
                        height={height}
                        x={(svgWidth / 2) - (width / 2)}
                        y={(svgHeight / 2) - (height / 2)}
                        strokeWidth={strokeWidth}
                        stroke={color}
                        fill={backColor}
                        ry={borderRadius}
                        strokeDasharray={width * 4}
                        strokeDashoffset={rectLenght}
                        strokeLinecap='round'
                        ref={rectRef}
                    />

                </G>
            </Svg>
            {
                Icon ?
                    <Icon style={{ position: 'absolute' }} />
                    :
                    <IconMt size={!width > height ? width / 2 : height / 2} name='plus' style={{ position: 'absolute' }} color={'#FFF'} />
            }
        </TouchableOpacity>


    )
}



