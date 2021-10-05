import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen'
import GuidesScreen from './src/screens/GuidesScreen'
import AccountsScreen from './src/screens/AccountsScreen'
import PendoTabBarIcon from './src/icons/PendoTabBarIcon'

const App = () => {

    const Tab = createBottomTabNavigator();

        return (
    <NavigationContainer style={styles.root}>
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
            })}>
            <Tab.Screen name="Overview" component={HomeScreen}/>
            <Tab.Screen name="Guide Metrics" component={GuidesScreen}/>
            <Tab.Screen name="Account" component={AccountsScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
        );
};

const styles = StyleSheet.create({
      root: {
          flex:1
      },
      bottomNav: {
          height: 95,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'space-between',
          position: 'absolute'
      },
    icon: {
          marginBottom: -30
    },
    label: {
        paddingBottom: 20
    }
});
export default App;

