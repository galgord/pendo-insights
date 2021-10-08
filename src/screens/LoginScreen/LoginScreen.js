import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux'
import { saveUser } from '../../store/taskAction';
import * as Google from 'expo-google-app-auth';

const LoginScreen = () => {
    const dispatch = useDispatch()

    const createUser = async () => {
        const config = {
            iosClientId: `388694407818-d2glm85mfuj7kpcnii2vll6qpfg5ca9r.apps.googleusercontent.com`,
            androidClientId: `388694407818-lfrstg4t5uraposabj8sen22pf6amdmn.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        }
        try {
            const user = await Google.logInAsync(config);
            dispatch(saveUser(user))
        }catch (e){
            console.warn(e)
        }
    }

    return (
    <SafeAreaView style={styles.root}>
        <View style={styles.imageWrapper}>
            <Image source={require('../../assets/splash.png')} resizeMode='contain' style={styles.image}/>
        </View>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => createUser()}>
                <Text style={styles.button}> Sign in with  <Image
                    style={{
                        width: 20,
                        height: 20,
                        marginBottom: -16
                    }}
                    source={require('../../assets/google.png')}
                /></Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    image: {
        width: 97,
        height: 95
    },
    imageWrapper: {
        alignItems: 'center',
        top: '10%'
    },
    buttonWrapper: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35,
        width: '80%',
    },
    button: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#128297',
        borderStyle: 'solid',
        borderRadius: 3,
        color: '#128297',
        fontSize: 14,
        lineHeight: 17,
        paddingVertical: 12.5
    }
});

export default LoginScreen
