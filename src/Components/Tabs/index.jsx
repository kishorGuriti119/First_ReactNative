import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Image} from 'react-native';

import Home from '../../Screens/InterfaceScreens/Home';
import Favorities from '../../Screens/InterfaceScreens/Favorities';
import Profile from '../../Screens/InterfaceScreens/Profile';
import {style} from './style';
import {colors} from '../../utility/colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('../../assets/home_active.png')
              : require('../../assets/home.png');
          } else if (route.name === 'Favorities') {
            icon = focused
              ? require('../../assets/bookmark_active.png')
              : require('../../assets/bookmark.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('../../assets/profile_active.png')
              : require('../../assets/profile.png');
          }

          return <Image source={icon} style={{height: 24, width: 24}} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
          borderTopColor: colors.inputborder,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorities" component={Favorities} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
