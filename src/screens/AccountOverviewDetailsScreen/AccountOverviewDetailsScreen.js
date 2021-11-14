import React from "react";
import {StyleSheet, ScrollView, Text} from "react-native";


const AccountOverviewDetailsScreen = ({account}) => {

    return (
        <ScrollView style={styles.root}>
            <Text>some Text</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
    },

})

export default AccountOverviewDetailsScreen;
