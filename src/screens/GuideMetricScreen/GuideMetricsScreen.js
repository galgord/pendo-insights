import React, {useEffect} from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import {Feather} from "@expo/vector-icons";


const headerRight = () =>{
    return (
        <Pressable>
            <Feather name="settings" size={21} color="black" style={styles.settingsIcon}/>
        </Pressable>
    )
};

const GuideMetricsScreen = ({route, navigation}) => {
    const guide = route.params.guide;
    useEffect(()=> {
        navigation.getParent().setOptions({headerTitle:guide.name, headerLeft: headerRight})
    },[])

    return (
        <View>
            <Text>Guide Metric Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default GuideMetricsScreen;
