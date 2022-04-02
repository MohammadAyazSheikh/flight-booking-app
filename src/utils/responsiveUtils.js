import React, { useState, useEffect, useRef, Component } from 'react';
import { Dimensions, PixelRatio } from 'react-native';
let { width, height } = Dimensions.get('window');

//-------------For functional component--------------------------
export const useFunctionalOrientaion = (callBack) => {

    const [screenInfo, setScreenInfo] = useState(Dimensions.get('window'));


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

            // setScreenInfo(change.screen);
            setScreenInfo(Dimensions.get('window'))
        }

        const listener = Dimensions.addEventListener('change', onScreenChange);

        return () => listener.remove();

    }, [])

    const isPortrait = screenInfo.height > screenInfo.width;
    return {
        ...screenInfo,
        isPortrait: isPortrait,
        widthToDp: widthToDp,
        heightToDp: heightToDp,
        styles: callBack(screenInfo, widthToDp, heightToDp, isPortrait)
    };

}


// ----------------------------For Class Component---------------------------------------
export const orientaionListener = (self) => {



    const onScreenChange = (change) => {

        self.setState({
            // screenInfo: change.screen,
            screenInfo: Dimensions.get('window')
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
    const isPortrait = self.state.screenInfo.height > self.state.screenInfo.width;
    return {
        ...self.state.screenInfo,
        isPortrait: isPortrait,
        styles: callBack(self.state.screenInfo, widthToDp, heightToDp, isPortrait),
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