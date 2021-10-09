import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Platform} from 'react-native';
import PendoCard from "../../components/PendoCard";
import {fetchVisitorOverviewLast30Days, parseNumber, fetchAccountOverviewLast30Days, fetchActiveGuides, fetchNPSScore} from './HomeScreen.utils'


const HomeScreen = () => {
    const [visitorOverview,setVisitorOverview] = useState('');
    const [accountOverview,setAccountOverview] = useState('');
    const [activeGuides,setActiveGuides] = useState('');
    const [npsScore,setNpsScore] = useState('');
    const [isLoadingVisitorOverview, setIsLoadingVisitorOverview] = useState(true);
    const [isLoadingAccountOverview, setIsLoadingAccountOverview] = useState(true);
    const [isLoadingActiveGuides, setIsLoadingActiveGuides] = useState(true);
    const [isLoadingNPSScore, setIsLoadingNPSScore] = useState(true);

    useEffect(() => {
        async function fetchUniqueVisitor() {
            const response = await fetchVisitorOverviewLast30Days();
            const number = parseNumber(response.data.messages[0].rows[0].count)
            setVisitorOverview(number);
        }
        async function fetchUniqueAccounts() {
            const response = await fetchAccountOverviewLast30Days();
            const number = parseNumber(response.data.messages[0].rows[0].count)
            setAccountOverview(number)
        }
        async function fetchTotalActiveGuides() {
            const response = await fetchActiveGuides();
            const number = parseNumber(response.data.messages[0].rows[0].activeCount)
            setActiveGuides(number)
        }
        async function fetchNpsScore() {
            const response = await fetchNPSScore();
            const number = Math.round((parseNumber(response.data.messages[0].rows[0].score).slice(0,4) * 100));
            setNpsScore(number)
        }
        fetchUniqueVisitor();
        fetchUniqueAccounts();
        fetchTotalActiveGuides();
        fetchNpsScore()
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoadingVisitorOverview(false);
            setIsLoadingNPSScore(false)
            setIsLoadingActiveGuides(false)
            setIsLoadingAccountOverview(false);
        },1000)
    },[isLoadingVisitorOverview, isLoadingAccountOverview, isLoadingActiveGuides, isLoadingNPSScore])

    return (
        <ScrollView style={styles.root} overScrollMode={'always'}>
            <PendoCard
                    title='Visitor Overview'
                    textLeft='Unique Visitors'
                    textRight='Unique Accounts'
                    numberRight={accountOverview}
                    numberLeft={visitorOverview}
                    isLoadingLeft={isLoadingVisitorOverview}
                    isLoadingRight={isLoadingAccountOverview}
                    filter={'Last 30 Days'}
            />
            <PendoCard
                title='Guides Overview'
                textLeft='Active Guides'
                textRight='NPS Score'
                numberRight={npsScore}
                numberLeft={activeGuides}
                isLoadingLeft={isLoadingActiveGuides}
                isLoadingRight={isLoadingNPSScore}
            />
            <PendoCard
                title='Time On App'
                textLeft='Daily Average'
                numberLeft='4m'
                filter={'Last 30 Days'}
            />
        </ScrollView>
    )
};
const styles = StyleSheet.create({
root:{
    flex:1,
}
});

export default HomeScreen;
