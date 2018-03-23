/**
 * React-Native-Examples
 * Emanuele Maso
 * https://github.com/ClarkStoro
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';



import NavBar from 'React_Native_Examples/app/components/NavBar/NavBar';

import HomeNav from 'React_Native_Examples/app/components/Home/Home';
import ArrayListNav from 'React_Native_Examples/app/components/ArrayList/ArrayList';
import JSONListNav from 'React_Native_Examples/app/components/JSONList/JSONList';
import JSONDetailsNav from 'React_Native_Examples/app/components/JSONDetails/JSONDetails';
import dbLocaleNav from 'React_Native_Examples/app/components/dbLocale/dbLocale';
import DeviceInfoNav from 'React_Native_Examples/app/components/DevInfo/DevInfo';
import TranslationsNav from 'React_Native_Examples/app/components/Translations/Translations';
import FirebaseDataNav from 'React_Native_Examples/app/components/FirebaseData/FirebaseData';
import FirebaseListNav from 'React_Native_Examples/app/components/FirebaseList/FirebaseList';
import FirebaseAuthNav from 'React_Native_Examples/app/components/FirebaseAuth/FirebaseAuth';



import * as firebase from "firebase";
// Initialize Firebase
var config = {
 
};
firebase.initializeApp(config);

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <StatusBar
              backgroundColor="#003c8f"
              barStyle="light-content"    
          />
        <Draw />
      </View>
    );
  }
}

const HomeNavStack = StackNavigator({
   
  HomeNav: {screen: HomeNav,},
  ArrayListNav: {screen: ArrayListNav},
  JSONListNav: {screen: JSONListNav},
  JSONDetailsNav: {screen: JSONDetailsNav},
  dbLocaleNav: {screen: dbLocaleNav},
  DeviceInfoNav: {screen: DeviceInfoNav},
  TranslationsNav: {screen: TranslationsNav},
  FirebaseDataNav: {screen: FirebaseDataNav},
  FirebaseListNav: {screen: FirebaseListNav},
  FirebaseAuthNav: {screen: FirebaseAuthNav},
});

const DrawerRoutes = ({
  Home: {screen: HomeNavStack},
});

const Draw= DrawerNavigator(DrawerRoutes,
  {
      initialRouteName: 'Home',
      contentComponent: ({ navigation }) => <NavBar navigation={navigation} routes={DrawerRoutes} />, //you dont need the routes props, but just in case you wanted to use those instead for the navigation item creation you could
  }
)      




const styles = StyleSheet.create({
 
 
});
