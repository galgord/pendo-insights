import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

const PendoCard = ({numberLeft,textLeft,textRight,numberRight, isLoadingLeft, isLoadingRight, textStyle,labelStyle}) => {
    return (
        <View style={styles.root}>
                <View style={styles.textWrapper}>
                    { isLoadingLeft ? (
                        <>
                            <ActivityIndicator color="#0000ff" />
                        </>
                    ):(
                        <>
                    <View>
                        <Text style={[styles.number, textStyle]}>{numberLeft}</Text>
                        <Text style={[styles.text, labelStyle]}>{textLeft}</Text>
                    </View>
                        </>
                    )}
                    { textRight && (
                        <View style={styles.verticleLine} />
                    )}
                    { isLoadingRight ? (
                        <>
                            <ActivityIndicator color="#0000ff" />
                        </>
                    ):(
                        <>
                    { textRight && (
                        <View>
                        <Text style={[styles.number, textStyle]}>{numberRight}</Text>
                        <Text style={[styles.text, labelStyle]}>{textRight}</Text>
                        </View>
                        )}
                        </>
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
