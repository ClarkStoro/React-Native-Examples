/**
 * React-Native-Examples
 * Emanuele Maso
 * https://github.com/ClarkStoro
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';

import I18n from 'React_Native_Examples/app/i18n/i18n';

export default class Translations extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Translations',
        headerStyle: {
            backgroundColor: '#1565c0',
        },
        headerTintColor: 'white',
        headerLeft:
        <TouchableWithoutFeedback onPress={() => navigation.navigate('DrawerOpen')} title="=">
            <Image source={require('React_Native_Examples/app/images/iconHamburger.png')} style={{ marginLeft: 10, marginRight: 10, width: 30, height: 30, }} />
        </TouchableWithoutFeedback>,
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt1}>{I18n.t("Hello")}</Text>
                <Text style={styles.txt2}>{I18n.t("React")}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1:{
      fontSize: 20,
  },
  txt2:{
      fontSize: 20,
      fontWeight: 'bold',
  },
 
});

AppRegistry.registerComponent('React_Native_Example', () => Translations);