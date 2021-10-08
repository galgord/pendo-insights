import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen'
import GuidesScreen from './src/screens/GuidesScreen'
import AccountsScreen from './src/screens/AccountsScreen'
import LoginScreen from './src/screens/LoginScreen'
import PendoTabBarIcon from './src/icons/PendoTabBarIcon'
import { Feather } from '@expo/vector-icons';
import {createStackNavigator} from "@react-navigation/stack";
import { useSelector } from 'react-redux'

const headerLeft = () => {
    return (
        <Image
            style={styles.tinyLogo}
            source={require('./src/assets/logo.png')}
        />
    )
}

const headerRight = () =>{
    return <Feather name="settings" size={21} color="black" style={styles.settingsIcon}/>
};
const App = () => {
    const [user, setUser] = useState(false)
    const tempUser = useSelector(state => state.user)

    useEffect(() => {
        tempUser.idToken ? setUser(tempUser): setUser(false);
    },[tempUser])

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator()
        return (
        <NavigationContainer style={styles.root}>
                { user ? (
                    <>
                        <Tab.Navigator
                            initialRouteName="Overview"
                            screenOptions={({ route }) => ({
                                tabBarStyle: styles.bottomNav,
                                tabBarLabelStyle: styles.label,
                                tabBarIcon: ({ focused }) => {
                                    let iconName;

                                    if (route.name === 'Overview') {
                                        iconName = focused ? 'OverviewSelected' : 'OverviewNotSelected';
                                    } else if (route.name === 'Guide Metrics') {
                                        iconName = focused ? 'GuideSelected' : 'GuidesNotSelected';
                                    } else if (route.name === 'Account') {
                                        iconName = focused ? 'AccountsSelected' : 'AccountsNotSelected';
                                    }
                                    return <PendoTabBarIcon iconName={iconName} style={styles.icon}/>;
                                },
                                tabBarActiveTintColor: '#6A6C75',
                                tabBarInactiveTintColor: '#9A9CA5',
                                headerStyle: styles.headerStyle,
                                headerTitleContainerStyle: styles.headerTitleContainerStyle,
                                headerLeft,
                                headerRight
                            })}>
                            <Tab.Screen name="Overview" component={HomeScreen} />
                            <Tab.Screen name="Guide Metrics" component={GuidesScreen}/>
                            <Tab.Screen name="Account" component={AccountsScreen}/>
                        </Tab.Navigator>
                    </>
                ) : (
                    <>
                        <Stack.Navigator>
                            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                        </Stack.Navigator>
                    </>
                )
                }
        </NavigationContainer>
        );
};

const styles = StyleSheet.create({
      root: {
          flex:1
      },
    headerStyle: {
       backgroundColor:'#F8F8F9',
       height: 90,
    },
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    bottomNav: {
          height: Platform.OS==='ios' ? 95 : 70,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute'
      },
    tinyLogo: {
        width: 22,
        height: 22,
        marginLeft: 14,
    },
    settingsIcon: {
        marginRight: 14
    }
});
export default App;

