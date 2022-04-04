import { main, mainLight } from '../../../utils/colors';
import { StyleSheet } from 'react-native';



export default landscapeStyles = (w, h) => {
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
            height: h(35),
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '2%',
        },
        topHeaderView: {
            width: '100%',
            height: '60%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor:'red'
        },
        imgUser: {
            width: h(15),
            height: h(15),
            borderRadius: h(20) / 10
        },
        headingView: {
            width: '100%',
            height: '40%',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        txtHeader: {
            color: main,
            fontSize: h(10),
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
            height: h(65),
            borderTopLeftRadius: h(75) / 15,
            borderTopRightRadius: h(75) / 15
        }

    });
}




