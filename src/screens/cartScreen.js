import React, { Component, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { backColor, foreColor, widthToPer, heightToPer } from '../utils/config';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconET from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';

function numberWithCommas(x) {
    x = parseInt(x);

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const RenderProduct = ({ name, price, image, setTotalPrice }) => {

    const [totalItem, setTotalItem] = useState(1);
    return (
        <View style={styles.productView}>
            <View style={styles.topView}>
                <View style={styles.imageView}>
                    {
                        image ?
                            <Image style={styles.imgStyle} source={{ uri: image }} />
                            :
                            <Image style={styles.imgStyle} source={require('../../assets/images/React.webp')} />
                    }
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.txtName}>
                        {
                            name.length > 10 ? name.slice(0, 10) : name
                        }
                    </Text>
                    <Text style={styles.txtPrice}>
                        {parseInt(price)} $
                </Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.btnQty}
                    onPress={() => {
                        setTotalItem(pre => {
                            return pre + 1;
                        });

                        setTotalPrice(pre => pre + price);
                    }}
                >
                    <IconET name='plus' size={widthToPer(7)} color = '#FFF' />
                </TouchableOpacity>
                <Text style={styles.txtQty} >{totalItem}</Text>
                <TouchableOpacity style={styles.btnQty}
                    onPress={() => {
                        if (totalItem > 1) {
                            setTotalItem(pre => {
                                return pre - 1;
                            })
                            setTotalPrice(pre => pre - price);
                        }
                    }}
                >
                    <IconET name='minus' size={widthToPer(7)}  color = '#FFF'/>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const mapStateToProps = state => {
    return {
        cart: state?.Cart
    }
}


const Cart = (props) => {



    const [totalPrice, setTotalPrice] = useState(() => 0);
    useEffect(() => {
        let total = 0;
        props?.cart?.cart?.forEach(element => {
            total += element.price;
        });
        setTotalPrice(total)
    }, [])



    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.txtHeader}>My Cart</Text>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Home');
                    }}
                >
                    <IconIO name='arrow-back' size={widthToPer(8)}  color = '#FFF'/>
                </TouchableOpacity>
            </View>
            <View style={styles.productContainer}>
                {
                    props?.cart?.cart.length > 0 ?
                        <FlatList
                            data={props?.cart?.cart}
                            keyExtractor={(data) => data.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <RenderProduct
                                        image={item.image}
                                        name={item.title}
                                        desc={item.description}
                                        ratting={item.rating.rate}
                                        price={item.price}
                                        setTotalPrice={setTotalPrice}
                                    />
                                );
                            }}
                            contentContainerStyle={{ alignItems: 'center' }}
                        />
                        :
                        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Nothing Here..!</Text>
                }

            </View >
            <View style={styles.checkOutView}>
                <Text style={styles.btnTotalPrice}>{numberWithCommas(totalPrice)} $</Text>
                <TouchableOpacity style={styles.btnCheckOut}>
                    <Text style={styles.txtBtnCheckOut}> Check Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default connect(mapStateToProps, null)(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#25282d',
    },

    headerView: {
        width: '100%',
        height: '8%',
        // backgroundColor: '#F7A278',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '10%',
    },
    txtHeader: {
        fontSize: widthToPer(8),
        fontWeight: 'bold',
        color:'#FFF'
    },
  
    productContainer: {
        width: '100%',
        height: '77%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2f33',
        width: widthToPer(90),
        height: heightToPer(25),
        elevation: 5,
        borderRadius: widthToPer(2),
        marginVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topView: {
        width: '100%',
        height: '60%',
        paddingLeft: 5,
        paddingTop: 5,
        flexDirection: 'row'
    },

    imageView: {
        width: widthToPer(27),
        height: widthToPer(27),
        backgroundColor: backColor
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    infoView: {
        flex: 1,
        height: '100%',
        paddingLeft: 5,
        paddingTop: 10
    },
    txtName: {
        fontSize: widthToPer(5),
        fontWeight: 'bold',
        color:'#FFF'

    },
    txtPrice: {
        color: 'tomato',
        fontSize: widthToPer(3.5),
        fontWeight: 'bold',
        marginTop: 5
    },

    bottomView: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },


    btnQty: {
        backgroundColor: 'tomato',
        elevation: 5,
        flexDirection: 'row',
        padding: 10,
        width: '15%',
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    txtQty: {
        fontWeight: 'bold',
        fontSize: widthToPer(5),
        marginHorizontal: 20,
        color:'#FFF'
    },
    checkOutView: {
        width: '100%',
        height: '15%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    btnCheckOut: {
        paddingHorizontal:10,
        height: '40%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',
        elevation: 5
    },
    txtBtnCheckOut: {
        fontSize: widthToPer(5),
        fontWeight: 'bold',
        color:'#FFF'
    },
    btnTotalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#FFF'
    }
});


