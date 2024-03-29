import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    FlatList,
    View,
    ActivityIndicator,
    Image,
    Dimensions,
    Pressable
} from 'react-native';
import GuideListCard from "../../components/GuideListCard";
import {fetchGuideList} from "./GuideScreen.utils";
import axios from "axios";
import headerLeft from '../../components/headerLeft'
import {SearchBar} from "react-native-elements";
import headerRight from "../../components/headerRight";
const GuidesScreen = ({ navigation }) => {
    const [guides, setGuides] = useState(null);
    const [filteredGuides, setFilteredGuides] = useState([]);
    const [count, setCount] = useState(null);
    const [search, setSearch] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [haveGuides, setHaveGuides] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            navigation.getParent().setOptions({
                headerTitle: 'My Guides',
                headerLeft,
                headerRight
            })
        });
        return unsubscribe;
    }, [navigation]);

    async function fetchGuides() {
        setIsLoading(true)
        try {
            const response = await fetchGuideList();
            if (response.data.messages[0].url){
                const url = response.data.messages[0].url
                const res = await axios.get(url)
                const guideData = res.data.map((guide) => {
                    if(guide.name.length > 35){
                        return {
                            ...guide,
                            newName: guide.name.slice(0,35) + '...'
                        }
                    } else {
                        return guide
                    }
                })
                setGuides(guideData)
                setCount(guideData.length)
                setHaveGuides(true)
                setIsLoading(false)
            } else {
                setGuides(response.data)
                setCount(response.data.length)
                setIsLoading(false)
            }
        } catch (e){
            console.warn('error', e)
        }
    }
    useEffect(() =>{
        fetchGuides();
    }, [])

    useEffect(() => {
        if (!guides){
            return
        }
        if (search === ''){
            setFilteredGuides([])
        } else {
            const filterGuides = Object.values(guides).filter((guide) => guide.name.toLowerCase().includes(search.toLowerCase()));
            setFilteredGuides(filterGuides)
        }
        },[search])
    const renderItem = ({item}) => (
        <Pressable onPress={() => navigation.navigate('GuideOverview', {guide:item})}>
            <GuideListCard
            name={item.newName || item.name}
            app={item.app}
            state={item.state}
        />
        </Pressable>
    );


    return (
        <SafeAreaView style={styles.container}>
            { isLoading ? (
                <>
                    <View style={styles.loading}>
                        <ActivityIndicator color="#0000ff" size={'large'}/>
                    </View>
                </>
                    ):(
                <>
                    { !haveGuides ? (
                        <>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/noGuides.png')} style={styles.noGuideImage}/>
                            </View>
                        </>
                        ) : (
                        <>
                            <View style={styles.searchBar}>
                                <SearchBar
                                    inputContainerStyle={{backgroundColor: 'white'}}
                                    containerStyle={{backgroundColor: 'none'}}
                                    onChangeText={setSearch}
                                    value={search}
                                    lightTheme={'default'}
                                    placeholder="Type Here..."/>
                            </View>
                            <View style={styles.guideCountContainer}>
                                <Text style={styles.guideCount}> You Have {count} Public Guides </Text>
                            </View>
                            { filteredGuides.length !== 0 ? (
                                <>
                                    <View style={styles.guidesContainer}>
                                        <FlatList data={filteredGuides} renderItem={renderItem} keyExtractor={data => data.id}/>
                                    </View>
                                </>
                            ) : (
                                <>
                            <View style={styles.guidesContainer}>
                                <FlatList data={guides} renderItem={renderItem} keyExtractor={data => data.id}/>
                            </View>
                                </>
                            )}
                        </>
                        )}
                        </>
                    )}
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 165,
        alignItems: 'center',
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    guideCountContainer: {
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 3,
      height: 60,
      marginTop: 15,
      paddingLeft: 22,
      marginBottom: 4,
      width: '90%',
      borderWidth: 1,
      borderColor: '#DADCE5'
    },
    guideCount: {
        fontSize:16,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    guidesContainer: {
        width: '90%'
    },
    noGuideImage: {
        width: Dimensions.get('window').width - 20,
        height: 350,
        marginTop: 15
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        width: '100%'
    }
});

export default GuidesScreen;
