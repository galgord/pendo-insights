import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux'
import { saveUser } from '../../store/taskAction';
import * as Google from 'expo-google-app-auth';

const LogoutScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const createUser = async () => {
        const config = {
            iosClientId: `388694407818-d2glm85mfuj7kpcnii2vll6qpfg5ca9r.apps.googleusercontent.com`,
            androidClientId: `388694407818-lfrstg4t5uraposabj8sen22pf6amdmn.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        }
        try {
            const user = await Google.logOutAsync(config);
            dispatch(saveUser(user))
        }catch (e){
            console.warn(e)
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.closeBtn}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoutBtnWrapper}>
                <TouchableOpacity onPress={() => createUser()}>
                    <Text style={styles.logoutBtn}> Log Out </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.goBackBtnWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.goBacktBtn}>Never Mind, Go Back </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoutBtnWrapper: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 100,
        width: '80%',
    },
    logoutBtn: {
        color: '#FFFFFF',
        textAlign: 'center',
        borderRadius: 3,
        fontSize: 16,
        lineHeight: 22,
        paddingVertical: 18,
        backgroundColor: '#E6416A'
    },
    goBackBtnWrapper: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35,
        width: '80%',
    },
    goBacktBtn: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#E6416A',
        borderStyle: 'solid',
        borderRadius: 3,
        color: '#E6416A',
        fontSize: 14,
        lineHeight: 17,
        paddingVertical: 18
    },
    closeBtn: {
        marginLeft: 24,
        marginTop: 36,
        fontSize:18,
    }
});

export default LogoutScreen
