import { Dimensions, } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const widthToPer = (percentage) => Width / 100 * percentage;

export const heightToPer = (percentage) => Height / 100 * percentage;

export const backColor = '#25282d';
export const foreColor = '#2a2f33';
