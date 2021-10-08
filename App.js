import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Platform, Pressable} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import GuidesScreen from './src/screens/GuideScreen/GuidesScreen'
import AccountsScreen from './src/screens/AccountScreen/AccountsScreen'
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import LogoutScreen from './src/screens/LogoutScreen/LogoutScreen'
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

const headerRight = (navigation) =>{
    return (
        <Pressable onPress={() => navigation.navigate('Logout')}>
            <Feather name="settings" size={21} color="black" style={styles.settingsIcon}/>
        </Pressable>
    )
};


const App = () => {
    const [isuserAuth, setUserisUserAuth] = useState(false)
    const tempUser = useSelector(state => state.user)

    useEffect(() => {
        tempUser.idToken ? setUserisUserAuth(tempUser): setUserisUserAuth(false);
    },[tempUser])


    const Home = () => {
        return (
            // isuserAuth ? (
                    <Tab.Navigator
                        initialRouteName="Overview"
                        screenOptions={({navigation, route}) => ({
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
                            headerRight: () => {return headerRight(navigation)}
                        })}>
                        <Tab.Screen name="Overview" component={HomeScreen} />
                        <Tab.Screen name="Guide Metrics" component={GuidesScreen}/>
                        <Tab.Screen name="Account" component={AccountsScreen}/>
                    </Tab.Navigator>
            // ) : (
            //     <>
            //         <Stack.Navigator>
            //             <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
            //         </Stack.Navigator>
            //     </>
            // )
        );
    }

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator()
        return (
        <NavigationContainer style={styles.root}>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Logout" component={LogoutScreen} options={{headerShown: false}} />
            </Stack.Navigator>
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
