import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const PendoGuideState = ({ stateStyle, state }) => {
    return (
        <>
        { state === 'public' && (<View style={stateStyle}>
            <View style={styles.stateWrapper}>
                <Text style={styles.stateText}>{state.toUpperCase()}</Text>
            </View>
        </View>
        )}
        </>
    )
};
const styles = StyleSheet.create({
    stateWrapper:{
        backgroundColor: '#00C583',
        borderRadius: 38,
        width: 43,
        height: 14,
        justifyContent: 'center'
    },
    stateText:{
        textAlign: 'center',
        fontSize: 8,
        lineHeight: 8,
        color: '#FFFFFF'
    }
})
export default PendoGuideState;
