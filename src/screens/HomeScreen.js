import React, { Component, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { backColor, foreColor, widthToPer, heightToPer } from '../utils/config';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { GetProducts } from '../redux/actions/getProductsActions';
import { ADD_CART, REMOVE_CART } from '../redux/actions/cartActions';
import useOreintation from '../utils/responsiveUtils';
import { color } from 'react-native-reanimated';


const RenderProduct = ({ name, desc, price, ratting, image, setCartItems, addCart, item, removeCart, id }) => {

    const [isOnCart, setIsOnCart] = useState(false);
    return (
        <View style={styles.productView}>
            <View style={styles.productNameView}>
                <Text style={styles.txtProduct}>{name.length > 10 ? name.slice(0, 10) : name}</Text>
            </View>
            <View style={styles.imageView}>
                {
                    image ?
                        <Image style={styles.imgStyle} source={{ uri: image }} />
                        :
                        <Image style={styles.imgStyle} source={require('../../assets/images/React.webp')} />
                }

            </View>
            <View style={styles.productInfoView}>
                <Text style={styles.txtInfo}>{ratting}</Text>
                <Text style={styles.txtInfo}>{parseInt(price)} $</Text>
            </View>

            <View style={styles.descView}>
                <Text style={styles.txtDesc}>{desc.length > 100 ? desc.slice(0, 100) + ' ....' : desc}</Text>
            </View>
            <View style={styles.bottomView}>

                <TouchableOpacity style={styles.btnCart}
                    onPress={() => {
                        setIsOnCart(prev => !prev);
                        if (isOnCart) {
                            removeCart(id)
                            setCartItems(prev => prev - 1);
                        }
                        else {
                            setCartItems(prev => prev + 1);
                            addCart(item);
                        }
                    }}
                >
                    <Text style={styles.txtBtn}>
                        {
                            isOnCart ?
                                'Remove From Cart'
                                :
                                'Add To Cart'
                        }
                    </Text>
                </TouchableOpacity>


            </View>

        </View>
    );
}



const mapStateToProps = state => {
    return {
        products: state?.products
    }
}




const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(GetProducts());
        },
        addCart: (product) => {
            dispatch(ADD_CART(product))
        },
        removeCart: (id) => {
            dispatch(REMOVE_CART(id))
        },
    }
};



const Home = (props) => {


    const [data, setData] = useState(() => []);
    const [cartItems, setCartItems] = useState(() => 0);

    useEffect(() => {

        props.getProducts();
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data);
            })

    }, []);




    return (
        <View style={[styles.container]}>
            <View style={styles.headerView}>
                <Text style={styles.txtHeader}>Products</Text>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Cart');
                    }}
                >
                    <Icon name='shopping-cart' size={widthToPer(8)} color = '#FFF' />
                    <Text style={styles.txtCart}>{cartItems}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.productContainer}>

                {
                    props.props?.products?.isLoading ?
                        <ActivityIndicator size={24} color='tomato' />
                        :

                        <FlatList
                            data={props?.products?.products}
                            keyExtractor={(data) => data.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <RenderProduct
                                        image={item.image}
                                        name={item.title}
                                        desc={item.description}
                                        ratting={item.rating.rate}
                                        price={item.price}
                                        setCartItems={setCartItems}
                                        addCart={props.addCart}
                                        item={item}
                                        id={item.id}
                                        removeCart={props.removeCart}
                                    />
                                );
                            }}
                            contentContainerStyle={{ alignItems: 'center' }}
                        />
                }

            </View>
        </View>
    );
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
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
        color: '#FFF'
    },
    txtCart: {
        position: 'absolute',
        left: '-50%',
        color: 'tomato',
        fontWeight: 'bold'
    },

    productContainer: {
        flex: 1,
        width: '100%',
    },
    productView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2f33',
        width: widthToPer(90),
        height: heightToPer(70),
        elevation: 5,
        borderRadius: widthToPer(5),
        marginVertical: 10
    },

    txtDesc: {
        color: '#FFF'
    },
    productNameView: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        padding: 5,
        alignItems: "center",
        color: '#FFF'

    },

    txtProduct: {
        fontSize: widthToPer(6),
        fontWeight: 'bold',
        color:'#FFF',
    },
    productInfoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        width: '80%',
        height: '5%',
    },
    txtInfo: {
        fontSize: widthToPer(4.5),
        fontWeight: 'bold',
        color: 'tomato'
    },

    imageView: {
        width: '90%',
        height: '50%',
        backgroundColor: backColor
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    descView: {
        height: '15%',
        width: '100%',
        paddingHorizontal: '5%'
    },
txtDesc:{
color:'#FFF',
fontSize:widthToPer(3.5)
},
    bottomView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnCart: {
        // width:'50%',
        backgroundColor: 'tomato',
        elevation: 5,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    txtBtn: {
        color: backColor,
        fontWeight: 'bold'
    },

    btnQty: {
        backgroundColor: backColor,
        elevation: 5,
        flexDirection: 'row',
        padding: 10,
        width: '15%',
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    txtBtnQty: {
        fontWeight: 'bold',
        fontSize: 16
    }






});


