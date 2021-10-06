import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const PendoCard = ({numberLeft,textLeft,textRight,numerRight}) => {
    return (
        <View style={styles.root}>
                <View style={styles.textWrapper}>
                    <View>
                        <Text style={styles.number}>{numberLeft}</Text>
                        <Text style={styles.text}>{textLeft}</Text>
                    </View>
                    { textRight && numerRight && (<View style={styles.verticleLine}/>)}
                    { textRight && numerRight && (
                        <View>
                        <Text style={styles.number}>{numerRight}</Text>
                        <Text style={styles.text}>{textRight}</Text>
                        </View>
                        )}
                </View>
        </View>
    )
};

const styles = StyleSheet.create({
    root:{
        flex:1,
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
    textWrapper:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    }
});

export default PendoCard;
