import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Card, Divider, Button, Icon } from 'react-native-elements'
import PendoDivider from "./PendoDivider";
const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]


const PendoCard = ({title,numberLeft,textLeft,textRight,numerRight}) => {
    return (
        <View style={styles.root}>
            <Card containerStyle={styles.containerStyle}>
                <Card.Title style={styles.title}>{title}</Card.Title>
                <Card.Divider/>
                <View style={styles.textWrapper}>
                   <PendoDivider textLeft={textLeft} textRight={textRight} numberLeft={numberLeft} numerRight={numerRight}/>
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
