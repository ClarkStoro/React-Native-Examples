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

//install react-native-device-info -> https://github.com/rebeccahughes/react-native-device-info
import DeviceInfo from 'react-native-device-info';

export default class DevInfo extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Device Info',
        headerStyle: {
            backgroundColor: '#1565c0',
        },
        headerTintColor: 'white',
        headerLeft:
        <TouchableWithoutFeedback onPress={() => navigation.navigate('DrawerOpen')} title="=">
            <Image source={require('React_Native_Examples/app/images/iconHamburger.png')} style={{ marginLeft: 10, marginRight: 10, width: 30, height: 30, }} />
        </TouchableWithoutFeedback>,
    });

    constructor() {
        super();
        this.state = {
            brand: 'Brand: ' + DeviceInfo.getBrand(),
            arch: 'Architecture : ' + DeviceInfo.getModel(),
            sysVersion: 'System Version: ' + DeviceInfo.getSystemVersion(),
            deviceLocale: 'Device Locale: ' + DeviceInfo.getDeviceLocale(),
            deviceCountry: 'Device Country: ' + DeviceInfo.getDeviceCountry(),
            isTablet: 'Is this a tablet? : ' + DeviceInfo.isTablet(),
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>{this.state.brand}</Text>
                <Text style={styles.txt}>{this.state.arch}</Text>
                <Text style={styles.txt}>{this.state.sysVersion}</Text>
                <Text style={styles.txt}>{this.state.deviceLocale}</Text>
                <Text style={styles.txt}>{this.state.deviceCountry}</Text>
                <Text style={styles.txt}>{this.state.isTablet}</Text>
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
  txt:{
      fontSize: 20
  },
});

AppRegistry.registerComponent('React_Native_Example', () => DevInfo);