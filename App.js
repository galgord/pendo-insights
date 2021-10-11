import React, {useEffect, useState} from 'react';
import { StyleSheet, Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import GuidesScreen from './src/screens/GuideScreen/GuidesScreen'
import AccountsScreen from './src/screens/AccountScreen/AccountsScreen'
import AccountOverviewScreen from './src/screens/AccountOverviewScreen/AccountOverviewScreen'
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import GuideMetricScreen from './src/screens/GuideMetricScreen/GuideMetricsScreen'
import LogoutScreen from './src/screens/LogoutScreen/LogoutScreen'
import PendoTabBarIcon from './src/icons/PendoTabBarIcon'
import {createStackNavigator} from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux'
import headerLeft from "./src/components/headerLeft";
import headerRight from "./src/components/headerRight";


const GuideStack = createNativeStackNavigator()

const GuideNavigation = () => {
    return (
        <GuideStack.Navigator>
            <GuideStack.Screen name={'Guides'} component={GuidesScreen} options={{
                headerShown: false,
            }}/>
            <GuideStack.Screen name={'GuideMetrics'} component={GuideMetricScreen} options={({ route }) => ({
                headerTitle: route.params.guide.name,
                headerShown: false,
            })}/>
        </GuideStack.Navigator>
    )
}

const AccountStack = createNativeStackNavigator()

const AccountNavigation = () => {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name={'AccountsList'} component={AccountsScreen} options={{headerShown: false}}/>
            <AccountStack.Screen name={'AccountOverview'} component={AccountOverviewScreen} options={{headerShown: false}}/>
        </AccountStack.Navigator>
    )
}
const App = () => {
    const [isuserAuth, setUserisUserAuth] = useState(false)
    const tempUser = useSelector(state => state.user)

    useEffect(() => {
        tempUser.idToken ? setUserisUserAuth(tempUser): setUserisUserAuth(false);
    },[tempUser])
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator()


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
                                } else if (route.name === 'Accounts') {
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
                        <Tab.Screen name="Guide Metrics" component={GuideNavigation}/>
                        <Tab.Screen name="Accounts" component={AccountNavigation}/>
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
      }
});
export default App;
