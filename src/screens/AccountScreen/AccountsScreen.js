import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Text, View, FlatList, ActivityIndicator, Pressable} from 'react-native';
import PendoCard from "../../components/PendoCard";
import AccountListItem from "../../components/AccountListItem";
import {fetchAccounts} from './AccountScreen.utils'
import axios from "axios";
import headerLeft from "../../components/headerLeft";
import {SearchBar} from "react-native-elements";


const AccountsScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [accounts, setAccounts] = useState(null);
    const [search, setSearch] = useState(null);
    const [filteredAccounts, setFilteredAccounts] = useState([]);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            navigation.getParent().setOptions({
                headerTitle: 'Accounts',
                headerLeft
            })
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() =>{
        async function fetchAccountList() {
            setIsLoading(true)
            try {
                const response = await fetchAccounts();
                if (response.data.messages[0].url){
                    const url = response.data.messages[0].url
                    const res = await axios.get(url)
                    res.data.shift()
                    const accountData = res.data.map((account) => {
                        if(account.accountId.length > 35){
                            return {
                                ...account,
                                name: account.accountId.slice(0,35) + '...'
                            }
                        } else {
                            return account
                        }
                    })
                    setAccounts(accountData)
                    setIsLoading(false)
                } else {
                    setAccounts(response.data)
                    setIsLoading(false)
                }
            } catch (e){
                console.warn('error', e)
            }
        }
        fetchAccountList();
    }, [])

    useEffect(() => {
        if (!accounts){
            return
        }
        if (search === ''){
            setFilteredAccounts([])
        } else {
            const filteredAccounts = Object.values(accounts).filter((account) => account.accountId.toLowerCase().includes(search.toLowerCase()));
            setFilteredAccounts(filteredAccounts)
        }
    },[search])
    const renderItem = ({item}) => (
        <Pressable onPress={() => navigation.navigate('AccountOverview', {account:item})}>
            <AccountListItem
                accountId={item.accountId}
            />
        </Pressable>
    );
    const dataToShow = () => {
        if (filteredAccounts.length === 0) {
            return accounts
        }else {
            return filteredAccounts
        }
    }

    return (
        <SafeAreaView style={styles.root}>

            { isLoading ? (
                <>
                    <View style={styles.loading}>
                        <ActivityIndicator color="#0000ff" size={'large'}/>
                    </View>
                </>
            ):(
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
            <View style={styles.accountOverview}>
                <PendoCard
                    title={'Account Overview'}
                    textLeft={'Number Of Accounts'}
                    numberLeft={'4,8954'}
                    textRight={'AVG DAILY TIME'}
                    numberRight={'41m4s'}
                    textStyle={styles.textStyle}
                    labelStyle={styles.labelStyle}/>
            </View>
            <View style={styles.accountsList}>
                <FlatList data={dataToShow()} renderItem={renderItem} keyExtractor={data => data.accountId}/>
            </View>
                </>
                )}
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    root:{
        flex:1,
        paddingBottom: 165
    },
    textStyle: {
        fontSize: 40
    },
    labelStyle: {
        fontSize: 18
    },
    accountOverview :{
        flex: 1,
    },
    accountsList:{
        flex: 3,
        marginTop: 32
     },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        width: '100%'
    }
});

export default AccountsScreen;
