import { main, mainLight } from '../../utils/colors';
import { StyleSheet } from 'react-native';


export default function responsiveStyles(screenInfo, w, h) {


    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: main,
            justifyContent: 'center',
            alignItems: 'center'
        },
      

    });
}