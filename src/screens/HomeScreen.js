import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.root}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
root:{
    flex:1,
}
});

export default HomeScreen;
