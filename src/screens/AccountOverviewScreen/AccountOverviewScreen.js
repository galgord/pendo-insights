import React, {useEffect, useState} from "react";
import {StyleSheet, Pressable, SafeAreaView, Image, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AccountOverviewDetailsScreen from "../AccountOverviewDetailsScreen/AccountOverviewDetailsScreen";
const Tab = createMaterialTopTabNavigator();

const headerLeft = (navigation) =>{
    return (
        <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" style={styles.leftArrow}/>
        </Pressable>
    )
};

const AccountOverviewScreen = ({route, navigation}) => {
    const account = route.params.account;
    useEffect(()=> {
        const unsubscribe = navigation.addListener('focus', () => {
            navigation.getParent().setOptions({
                headerTitle: account.accountId,
                headerLeft: () => headerLeft(navigation),
            })
        });
        return unsubscribe;
    },[navigation])

    return (
        <SafeAreaView style={{flex:1}}>
            <Tab.Navigator

                screenOptions={{
                    tabBarItemStyle: styles.tabBarItemStyle,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
                    tabBarStyle: {backgroundColor: '#f3f3f3'}
                }}>
                <Tab.Screen name="OverView" children={() => <AccountOverviewDetailsScreen account={account}/>}/>
                <Tab.Screen name="Feedback" component={AccountOverviewDetailsScreen}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    leftArrow: {
        marginLeft: 10
    },
    tabBarLabelStyle: {
        fontSize: 14,
        color:'#2A2C35',
        textTransform: 'none'
    },
    tabBarActiveTintColor: {
        color:'#2A2C35'
    },
    tabBarItemStyle: {
        width: 100,
        alignItems: 'center',
        flex: 1,
        marginBottom: -8
    },
    tabBarIndicatorStyle: {
        backgroundColor: '#2A2C35',
        width: '20%',
        left:'15%'
    },
})
export default AccountOverviewScreen;
