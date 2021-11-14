import React, {useEffect, useState} from "react";
import {View, StyleSheet, ScrollView, Text} from "react-native";
import PendoFilterBar from '../../components/PendoFilterBar'
import {Card} from "react-native-elements";
import PendoDivider from "../../components/PendoDivider";
import {VictoryPie} from "victory-native";
import {getFirstTimeViews, getTotalViews, getAverageTime} from './GuideMetricsScreen.utils';
import {parseNumber, msToTime} from "../HomeScreen/HomeScreen.utils";
import get from 'lodash/get'

const GuideMetricsScreen = ({guide}) => {
    // const guide = route.params.guide;
    const [data,setData] = useState([{ y: 0 },{ y: 1 }])
    const [firstTimeViews, setFirstTimeViews] = useState(null);
    const [totalViews, setTotalViews] = useState(null);
    const [average, setAverage] = useState(null);
    const [median, setMedian] = useState(null);
    const [isLoadingFirstTimeViews,setIsLoadingFirstTimeViews ]=useState(true)
    const [isLoadingAverage,setIsLoadingAverage ]=useState(true)
    const [isLoadingMedian,setIsLoadingMedian ]=useState(true)
    const [isLoadingTotalViews,setIsLoadingTotalViews ]=useState(true)

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
        async function fetchTotalViews() {
            if(!guide){
                return
            }else {
                const response = await getTotalViews(guide.id,guide.steps[0].id);
                const number = parseNumber(response.data.messages[0].rows[0].totalStepCount)
                setTotalViews(number)
                setIsLoadingTotalViews(false)
            }
        }
        async function fetchAverageTime() {
            if(!guide){
                return
            }else {
                const response = await getAverageTime(guide.id,guide.steps[0].id);
                const average = msToTime(get(response,'data.messages[0].rows[1].average', 0))
                const median = msToTime(get(response,'data.messages[0].rows[1].median', 0))
                setAverage(average)
                setMedian(median)
                setIsLoadingAverage(false)
                setIsLoadingMedian(false)
            }
        }
        fetchFirstTimeGuides();
        fetchTotalViews();
        fetchAverageTime();
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
                        numberRight={totalViews}
                        isLoadingLeft={isLoadingFirstTimeViews}
                        isLoadingRight={isLoadingTotalViews}
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
                        textLeft='Average Time On Guide'
                        textRight='Median View Time'
                        numberLeft={average}
                        numberRight={median}
                        isLoadingLeft={isLoadingAverage}
                        isLoadingRight={isLoadingMedian}
                        labelStyle={{fontSize:16}}
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
