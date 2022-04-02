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

        itemViewsP: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },

        itemViewsL: {
            marginLeft: 50,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        inputGroupViewP: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: w(90),
            height: h(20),
            marginTop: h(4)

        },

        inputGroupViewL: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: w(50),
            height: h(40),
        },

        inputItemViewP: {
            width: '100%',
            height: '45%',
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
        txtLabelL: {
            marginLeft: w(1),
            fontSize: h(4),
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

        btnForgetL: {
            paddingHorizontal: 5,
            paddingVertical: 2,
            marginTop: w(2)
        },
        txtBtnForgetL: {
            fontSize: h(4),
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

        btnLoginL: {
            width: h(70),
            height: w(6),
            borderRadius: w(7) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            margin: h(3)
        },
        txtBtnLoginL: {
            fontSize: h(4),
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
        },


        txtJoinL: {
            color: mainLight,
            fontSize: h(4),
        },
        txtBtnJoinL: {
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: h(4),
        },
        btnJoinL: {
            paddingHorizontal: 5,
        }

    });
}