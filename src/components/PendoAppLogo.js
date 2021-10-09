import React from 'react';
import {StyleSheet, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
const PendoAppLogo = ({type, size,appLogoStyle}) => {
    return (
        <View style={appLogoStyle}>
            {type === 'android' && (<AntDesign name="android1" size={size} color="black" />)}
            {type === 'ios' && (<AntDesign name="apple1" size={size} color="black" />)}
            {type !== 'ios' && type !== 'android' && (<SimpleLineIcons name="screen-desktop" size={size} color="black" />)}
        </View>
    )
};

export default PendoAppLogo;
