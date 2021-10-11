import React, {useEffect} from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";


const headerLeft = (navigation) =>{
    return (
        <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" style={styles.leftArrow}/>
        </Pressable>
    )
};

const GuideMetricsScreen = ({route, navigation}) => {
    const guide = route.params.guide;
    useEffect(()=> {
        navigation.getParent().setOptions({
            headerTitle:guide.name,
            headerLeft: () => headerLeft(navigation)
        })
    },[])

    return (
        <View>
            <Text>Guide Metric Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    leftArrow: {
        marginLeft: 10
    }
})

export default GuideMetricsScreen;
