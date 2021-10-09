import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AccountListItem = ({accountId}) => {
    return (
        <View style={styles.root}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{accountId}</Text>
                <AntDesign name="right" size={12} color="black" style={styles.rightArrow}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWrapper: {
      flexDirection:'row',
      backgroundColor: '#FFFFFF',
      borderColor: '#DADCE5',
      borderWidth: 1,
      borderRadius: 3,
      width: '90%',
      alignItems: 'center'
    },
    text:{
        fontSize: 16,
        lineHeight: 22,
        paddingLeft: 8,
        paddingTop: 12,
        height: 50,
    },
    rightArrow: {
        position: 'absolute',
        right:8,
    }
});

export default AccountListItem;
