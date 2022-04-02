import { main, mainLight } from '../../../utils/colors';
import { StyleSheet } from 'react-native';
import landscapeStyles from './landscapeStyles';
import portraitStyles from './portraitStyles';




export default function responsiveStyles(screenInfo, w, h, isPortrait) {

    return isPortrait ? portraitStyles : landscapeStyles
}

