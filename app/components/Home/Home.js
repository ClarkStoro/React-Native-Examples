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
  TouchableWithoutFeedback,
  Button,
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';



export default class Home extends Component {
  static navigationOptions = {   
    header: false,
};
  render() {
    return (
       <View style={styles.container}>
          <Text style={styles.txt}>Here some React Native Examples</Text>
          <Text style={styles.txt}>Hope you glad it!</Text>
          <View style={styles.btnOpenDrawer}>
            <Button color="#ff0000"  title="LETS GO" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
          </View>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e92f3'
  },
  txt:{
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
  },
  btnOpenDrawer:{
    marginTop: 50,
  },
});

AppRegistry.registerComponent('React_Native_Examples', () => Home);