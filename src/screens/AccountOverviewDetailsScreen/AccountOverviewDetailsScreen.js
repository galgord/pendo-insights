import React, {useEffect, useState} from "react";
import {StyleSheet, ScrollView, Text, View, ActivityIndicator, Image} from "react-native";
import {Card} from "react-native-elements";
import FilterIcon from "../../components/FilterIcon";
import {parseNumber} from "../HomeScreen/HomeScreen.utils";
import {getUniqueAccountVisitors} from "./AccountOverviewDetailsScreen.utils";
import {getRevenueForAccount} from "../../../axios";
const AccountOverviewDetailsScreen = ({account}) => {
    const [uniqueVisitors, setUniqueVisitors] = useState(null);
    const [isLoadingUniqueVisitors,setIsLoadingUniqueVisitors ]=useState(true)
    const [revenue, setRevenue] = useState(null);
    const [isLoadingRevenue,setIsLoadingRevenue ]=useState(true)


    useEffect(() => {
        async function fetchUniqueVisitors() {
            if(!account){
                return
            }else {
                const response = await getUniqueAccountVisitors(account.accountId);
                const number = parseNumber(response.data.messages[0].rows[0].numVisitors)
                setUniqueVisitors(number)
                setIsLoadingUniqueVisitors(false)
            }
        }
        async function fetchRevenue() {
            if (!account){
                return
            } else {
                const response = await getRevenueForAccount(account.accountId);
                const number = parseNumber(response.data.metadata.salesforce.arr__c);
                setRevenue(number);
                setIsLoadingRevenue(false)
            }
        }
        fetchUniqueVisitors();
        fetchRevenue();
    },[account])
    return (
        <ScrollView style={styles.root}>
                <Card containerStyle={styles.containerStyle}>
                    <View style={styles.textWrapper}>
                        { isLoadingUniqueVisitors ? (
                            <>
                                <ActivityIndicator color="#0000ff" />
                            </>
                        ):(
                            <>
                                <View>
                                    <Text style={styles.number}>{uniqueVisitors}</Text>
                                    <Text style={styles.text}>Unique Visitors</Text>
                                </View>
                            </>
                        )}
                        { isLoadingRevenue ? (
                            <>
                                <ActivityIndicator color="#0000ff" />
                            </>
                        ):(
                            <>
                                    <View style={styles.rightNumber}>
                                        <Text style={styles.number}>{revenue}</Text>
                                        <Text style={styles.text}>Revenue</Text>
                                    </View>
                            </>
                        )}
                    </View>
                    <View style={styles.filterContainer}>
                        <FilterIcon filter={'Everyone'}/>
                        <FilterIcon style={styles.secondFilter} filter={'Today | Nov 30, 2020'}/>
                    </View>
                </Card>
            <View style={{alignItems:'center'}}>
                <Image source={require('../../assets/timeOnApp.png')} style={{width: '90%', height:355, marginTop: 10, marginRight:12}}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
    },
    containerStyle:{
        width: '90%',
        justifyContent:'center',
    },
    textWrapper:{
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginTop: 28
    },
    number: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 55,
        lineHeight: 60,
        textAlign: 'center'
    },
    text:{
        textAlign:'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 23
    },
    filterContainer:{
        flex: 1,
        marginTop: 38,
        flexDirection: 'row',
    },
    rightNumber: {
        marginLeft: 60
    },
    secondFilter: {
        marginLeft: 10
    }
})

export default AccountOverviewDetailsScreen;
