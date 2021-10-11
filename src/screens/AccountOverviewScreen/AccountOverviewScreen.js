import React, {useEffect} from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";


const headerLeft = (navigation) =>{
    return (
        <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" style={styles.leftArrow}/>
        </Pressable>
    )
};

const AccountOverviewScreen = ({route,navigation}) => {
    const account = route.params.account;
    useEffect(()=> {
        navigation.getParent().setOptions({
            headerTitle:account.accountId,
            headerLeft: () => headerLeft(navigation)
        })
    },[])



    return (
        <View>
            <Text>Acocunt Overview Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default AccountOverviewScreen
