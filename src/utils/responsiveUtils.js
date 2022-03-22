import React, { useState, useEffect, useRef, Component } from 'react';
import { Dimensions, PixelRatio } from 'react-native';
let { width, height } = Dimensions.get('window');


export const useFunctionalOrientaion = (callBack) => {

    const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));


    const widthToDp = (number) => {

        let givenWidth = typeof number === 'number' ? number : parseFloat(number);
        return PixelRatio.roundToNearestPixel((screenInfo.width * givenWidth) / 100);

    }


    const heightToDp = (number) => {

        let givenHeight = typeof number === 'number' ? number : parseFloat(number);
        return PixelRatio.roundToNearestPixel((screenInfo.height * givenHeight) / 100);

    }


    useEffect(() => {

        const onScreenChange = (change) => {

            setScreenInfo(change.screen);
        }

        const listener = Dimensions.addEventListener('change', onScreenChange);

        return () => listener.remove();

    }, [])


    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width,
        widthToDp: widthToDp,
        heightToDp: heightToDp,
        styles: callBack(screenInfo, widthToDp, heightToDp)
    };

}



export const orientaionListener = (self) => {



    const onScreenChange = (change) => {

        self.setState({
            screenInfo: change.screen,
        })
    }

    const listenTpOrientationChanges = () => {

        self.listner = Dimensions.addEventListener('change', onScreenChange);


    }

    const removeOrientationChanges = () => {
        return self.listner.remove()
    }


    return {
        addOrientationListener: listenTpOrientationChanges,
        removeOrientationListener: removeOrientationChanges,
    };

}

export const useClassOrientaion = (self, callBack) => {


    const widthToDp = (number) => {

        let givenWidth = typeof number === 'number' ? number : parseFloat(number);
        return PixelRatio.roundToNearestPixel((self.state.screenInfo.width * givenWidth) / 100);

    }


    const heightToDp = (number) => {

        let givenHeight = typeof number === 'number' ? number : parseFloat(number);
        return PixelRatio.roundToNearestPixel((self.state.screenInfo.height * givenHeight) / 100);

    }

    return {
        ...self.state.screenInfo,
        isPortrait: self.state.screenInfo.height > self.state.screenInfo.width,
        styles: callBack(self.state.screenInfo, widthToDp, heightToDp),
    }
}



export const widthToDp = (number) => {

    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);

}


export const heightToDp = (number) => {

    let givenHeight = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);

}