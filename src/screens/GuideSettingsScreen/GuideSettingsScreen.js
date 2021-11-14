import React, {useEffect,useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PendoGuideState from "../../components/PendoGuideState";


const GuideSettingsScreen = ({navigation,route}) => {
    const guide = route.params
    const [segment, setSegment] = useState(null);

    useEffect(() => {
    },[])

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.closeBtn}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', marginHorizontal: 10, marginTop: 8}}>
                <Text style={styles.guideName}>{guide.name}</Text>
                <PendoGuideState state={'public'} stateStyle={styles.state}/>
            </View>
            <View style={styles.horizontalLineHeader} />
            <View style={styles.textWrapper}>
                <Text style={styles.leftText}>Last{"\n"}Updated</Text>
                <Text>by {guide.lastUpdatedBy}{"\n"}{new Date(guide.lastUpdatedAt).toUTCString()}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.leftText}>Created</Text>
                <Text>by {guide.createdBy}{"\n"}{new Date(guide.createdAt).toUTCString()}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.leftText}>Activation</Text>
                <Text>{guide.launchMethod}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.leftText}>Segment</Text>
                <Text></Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={styles.horizontalLine} />
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
    },
    guideName: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 28
    },
    state: {
        justifyContent: 'center',
    },
    horizontalLine: {
        height: 1,
        width: '90%',
        backgroundColor: '#F4F4F7',
    },
    horizontalLineHeader: {
        marginTop: 37,
        height: 1,
        width: '100%',
        backgroundColor: '#F4F4F7',
    },
    textWrapper: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 17,
        marginBottom: 17
    },
    leftText: {
        fontSize: 14,
        lineHeight: 17,
        marginRight: 20
    }
});

export default GuideSettingsScreen
