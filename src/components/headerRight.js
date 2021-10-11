import React from "react";
import {Pressable, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";

const headerRight = (navigation) =>{
    return (
        <Pressable onPress={() => navigation.navigate('Logout')}>
            <Feather name="settings" size={21} color="black" style={styles.settingsIcon}/>
        </Pressable>
    )
};

const styles = StyleSheet({
    settingsIcon: {
        marginRight: 14
    }
})
export default headerRight;
