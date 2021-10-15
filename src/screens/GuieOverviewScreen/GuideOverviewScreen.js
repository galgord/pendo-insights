import React, {useEffect} from "react";
import {StyleSheet, Pressable, SafeAreaView} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GuideMetricsScreen from "../GuideMetricScreen/GuideMetricsScreen";
const Tab = createMaterialTopTabNavigator();

const headerLeft = (navigation) =>{
    return (
        <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" style={styles.leftArrow}/>
        </Pressable>
    )
};

const GuideOverviewScreen = ({route, navigation}) => {

    const guide = route.params.guide;
    useEffect(()=> {
        navigation.getParent().setOptions({
            headerTitle:guide.name,
            headerLeft: () => headerLeft(navigation)
        })
    },[])

    return (
        <SafeAreaView style={{flex:1}}>
            <Tab.Navigator
                screenOptions={{
                    tabBarItemStyle: styles.tabBarItemStyle,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
                }}>
                <Tab.Screen name="Metrics" children={() => <GuideMetricsScreen guide={guide}/>}  />
                <Tab.Screen name="Responses" component={GuideMetricsScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    leftArrow: {
        marginLeft: 10
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    guideStepImage:{
        margin:10,
        width:'90%',
        height: 350
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

export default GuideOverviewScreen;
