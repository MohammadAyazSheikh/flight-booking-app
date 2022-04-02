import { main } from '../../utils/colors';
import { StyleSheet } from 'react-native';

export default function responsiveStyles(screenInfo, w, h) {


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

        }
    });
}