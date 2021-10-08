import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Card } from 'react-native-elements'
import PendoDivider from "./PendoDivider";

const PendoCard = ({title,numberLeft,textLeft,textRight,numberRight, isLoadingLeft, isLoadingRight}) => {
    return (
        <View style={styles.root}>
            <Card containerStyle={styles.containerStyle}>
                <Card.Title style={styles.title}>{title}</Card.Title>
                <Card.Divider/>
                <View style={styles.textWrapper}>
                   <PendoDivider
                       textLeft={textLeft}
                       textRight={textRight}
                       numberLeft={numberLeft}
                       numberRight={numberRight}
                       isLoadingLeft={isLoadingLeft}
                       isLoadingRight={isLoadingRight}
                   />
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    root:{
       flex:1,
        alignItems:'center',
    },
    containerStyle:{
        width: '90%',
        justifyContent:'center',
    },
    title: {
        textAlign: 'left',
    },
    textWrapper:{
        flexDirection: 'row',
    },
});

export default PendoCard;
