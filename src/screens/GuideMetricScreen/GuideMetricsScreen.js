import React, {useEffect, useState} from "react";
import {View, StyleSheet, ScrollView, Text} from "react-native";
import PendoFilterBar from '../../components/PendoFilterBar'
import {Card} from "react-native-elements";
import PendoDivider from "../../components/PendoDivider";
import {VictoryPie} from "victory-native";
import {getFirstTimeViews} from './GuideMetricsScreen.utils';
import {
    fetchAccountOverviewLast30Days, fetchActiveGuides, fetchNPSScore,
    fetchVisitorOverviewLast30Days,
    parseNumber
} from "../HomeScreen/HomeScreen.utils";


const GuideMetricsScreen = ({guide}) => {
    // const guide = route.params.guide;
    const [data,setData] = useState([{ y: 0 },{ y: 1 }])
    const [firstTimeViews, setFirstTimeViews] = useState(null);
    const [isLoadingFirstTimeViews,setIsLoadingFirstTimeViews ]=useState(true)

    useEffect(() => {
        async function fetchFirstTimeGuides() {
            if(!guide){
                return
            }else {
                const response = await getFirstTimeViews(guide.id,guide.steps[0].id);
                const number = parseNumber(response.data.messages[0].rows[0].firstTimeTotal)
                setFirstTimeViews(number)
                setIsLoadingFirstTimeViews(false)
            }
        }
        fetchFirstTimeGuides();
    },[guide])

    useEffect(() => {
        setTimeout(() =>{
            setData([{y:60},{y:15}])
        }, 500)
    }, [])
    return (
        <ScrollView style={styles.root}>
            <View style={styles.filterBar}>
                <PendoFilterBar/>
            </View>
            <View style={{alignItems:'center'}}>
                <Card containerStyle={styles.containerStyle}>
                <View style={styles.titleStyle}>
                    <View>
                        <Card.Title style={styles.title}>Some Title</Card.Title>
                    </View>
                </View>
                <Card.Divider/>
                <View style={styles.textWrapper}>
                    <PendoDivider
                        textLeft='First Time Views'
                        textRight='Total Views'
                        numberLeft={firstTimeViews}
                        numberRight='47'
                        isLoadingLeft={isLoadingFirstTimeViews}
                        isLoadingRight={false}
                    />
                </View>
                <View style={styles.midContainer}>
                    <VictoryPie
                        width={150}
                        height={150}
                        animate={{ easing: 'exp' }}
                        innerRadius={15}
                        colorScale={["#128297", "#EAECF1"]}
                        data={data}
                        style={{
                            data: {
                                backgroundColor: '#EAECF1'
                            },
                            labels:{
                                opacity:0
                            },
                            parent:{
                                marginRight: -40,
                            }
                        }}
                    />
                    <View>
                        <Text style={styles.pieTitle}>60 OF 75</Text>
                        <Text style={styles.pieSubTitle}>Eligible visitors</Text>
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <PendoDivider
                        textLeft='First Time Views'
                        textRight='Total Views'
                        numberLeft='37'
                        numberRight='47'
                        isLoadingLeft={false}
                        isLoadingRight={false}
                    />
                </View>
            </Card>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    midContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '15%'
    },
    containerStyle:{
        width: '90%',
        justifyContent:'center',
    },
    pieTitle: {
        fontSize:22,
        fontWeight: 'bold'
    },
    pieSubTitle: {
      fontSize: 14,
      lineHeight: 18
    },
    title: {
        textAlign: 'left',
    },
    textWrapper:{
        flexDirection: 'row',
    },
    titleStyle: {
        flexDirection: 'row',
    },
    filterContainer:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
})

export default GuideMetricsScreen;
