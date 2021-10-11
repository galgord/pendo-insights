import React from "react";
import {Image, StyleSheet} from "react-native";

const headerLeft = () => {
    return (
        <Image
            style={styles.tinyLogo}
            source={require('../assets/logo.png')}
        />
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 22,
        height: 22,
        marginLeft: 14,
    },
})
export default headerLeft;
