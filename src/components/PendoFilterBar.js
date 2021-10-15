import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import PendoTabBarIcon from "../icons/PendoTabBarIcon";
const PendoFilterBar = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Everyone   |   Last 30 Days   |   All Languages</Text>
            <PendoTabBarIcon style={styles.filterIcon} iconName='FilterIcon'/>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        marginLeft: 18,
        marginVertical: 8,
        justifyContent:'space-between',
        alignItems: 'center'
    },
    text:{
        fontSize:14,
        lineHeight: 17
    },
    filterIcon: {
        marginRight: 18,
    }
})

export default PendoFilterBar;
