import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import PendoCard from "../components/PendoCard";

const HomeScreen = () => {
    return (
        <ScrollView style={styles.root} overScrollMode={'always'}>
           <PendoCard
               title='Visitor Overview'
               textLeft='Unique Visitors'
               textRight='Unique Accounts'
               numerRight='4,255'
               numberLeft='506'
           />
            <PendoCard
                title='Guides Overview'
                textLeft='Active Guides'
                textRight='NPS Score'
                numerRight='32'
                numberLeft='12'
            />
            <PendoCard
                title='Time On App'
                textLeft='Daily Average'
                numberLeft='4m'
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
