import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PendoAppLogo from "./PendoAppLogo";
import PendoGuideState from "./PendoGuideState";
import { AntDesign } from '@expo/vector-icons';


const GuideListCard = ({name, app, state}) => {
    return (
        <View style={styles.container}>
            <View style={styles.appContainer}>
                <PendoAppLogo type={app.platform} size={12} appLogoStyle={styles.appLogo}/>
                <Text style={styles.appDiplayName}>{app.displayName}</Text>
            </View>
            <View style={styles.guideNameWrapper}>
                <PendoGuideState stateStyle={styles.stateStyle} state={state}/>
                <Text style={styles.guideName}>{name}</Text>
            </View>
            <AntDesign name="right" size={12} color="black" style={styles.rightArrow}/>
        </View>
    )
};

const styles = StyleSheet.create({
    rightArrow:{
        position: 'absolute',
        right:8,
    },
    guideName: {
        marginLeft: 8,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22
    },
    guideNameWrapper:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    stateStyle: {
      marginLeft: 14,
      marginTop: 10
    },
    appDiplayName: {
      marginLeft: 5,
      fontSize: 12,
      lineHeight: 14,
      color: '#2A2C35'
    },
    appContainer: {
        flexDirection: 'row'
    },
    appLogo:{
      marginLeft: 14
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DADCE5',
        borderRadius: 3,
        marginVertical: 2,
        height: 60,
        justifyContent: 'center'
    }
});

export default GuideListCard;
