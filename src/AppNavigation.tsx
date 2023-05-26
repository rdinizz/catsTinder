/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import catPaw from '../assets/images/catPaw.png';
import messageCircle from '../assets/images/messageCircle.png';
import user from '../assets/images/user.png';
import TabBarIcon from './components/TabBarIcon';
const Tab = createBottomTabNavigator();

function AppNavigation(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon size={size} focused={focused} icon={catPaw} />
          ),
        }}
      />
      <Tab.Screen
        name="Second Screen"
        component={SecondScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon size={size} focused={focused} icon={messageCircle} />
          ),
        }}
      />
      <Tab.Screen
        name="Third Screen"
        component={ThirdScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon size={size} focused={focused} icon={user} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;

const styles = StyleSheet.create({
  tabBar: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
    width: 156,
    height: 44,
    borderRadius: 36,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    alignSelf: 'center',
    marginBottom: 30,
    borderTopWidth: 0,
  },
});
