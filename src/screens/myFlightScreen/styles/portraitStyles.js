import { main, mainLight } from '../../../utils/colors';
import { StyleSheet } from 'react-native';
import { widthToDp } from '../../../utils/responsiveUtils';


export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        topView: {
            backgroundColor: '#FFF',
            width: w(100),
            height: h(25),
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '5%'
        },
        topHeaderView: {
            width: '100%',
            height: '50%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        imgUser: {
            width: w(20),
            height: w(20),
            borderRadius: w(20) / 10
        },
        headingView: {
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        txtHeader: {
            color: main,
            fontSize: w(10),
            fontWeight: 'bold',
            textShadowColor: '#000',
            textShadowRadius: 1,
            textShadowOffset: {
                width: 1,
                height: 1
            }
        },
        bottomView: {
            backgroundColor: main,
            width: w(100),
            height: h(75),
            borderTopLeftRadius: h(75) / 15,
            borderTopRightRadius: h(75) / 15,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            overflow: 'hidden'
        },
        timeView: {
            backgroundColor: main,
            height: h(20),
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        detailsView: {
            flex: 1,
            backgroundColor: main,
            width: '35%',
            height: h(20),
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        txtCityShort: {
            fontSize: w(12),
            color: '#FFF',
            // fontWeight: 'bold'
        },
        txtCity: {
            fontSize: w(4),
            color: '#FFF',
            fontWeight: "bold"
        },
        txtDateHeading: {
            color: mainLight
        },
        txtDate: {
            color: '#FFF',
            fontWeight: 'bold'
        }


    });
}




