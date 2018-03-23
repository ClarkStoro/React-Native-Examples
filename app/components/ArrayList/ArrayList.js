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
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';


const users = [
  { name: 'Leanne Graham', username: 'Bret', },
  { name: 'Ervin Howell', username: 'Antonette' },
  { name: 'Clementine Bauch', username: 'Samantha' },
  { name: 'Patricia Lebsack', username: 'Karianne' },
  { name: 'Chelsey Dietrich', username: 'Kamren' },
  { name: 'Mrs. Dennis Schulist', username: 'Leopoldo' },

]


export default class ArrayList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Array List',
    headerStyle: {
      backgroundColor: '#1565c0',
    },
    headerTintColor: 'white',
    headerLeft:
    <TouchableWithoutFeedback onPress={() => navigation.navigate('DrawerOpen')} title="=">
        <Image source={require('React_Native_Examples/app/images/iconHamburger.png')} style={{ marginLeft: 10, marginRight: 10, width: 30, height: 30, }} />
    </TouchableWithoutFeedback>,
});
  
  //Layout for every seprator
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  //Layout for each row
  renderRow= ({item}) => (
      <View style={styles.row}>
          <Text style={styles.txt}>{item.name}</Text>
          <Text style={styles.txt}>{item.username}</Text>
      </View>
  );//end renderRow


  render() {
    return (
      <FlatList
        data={users}
        renderItem={this.renderRow}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
      />
    );
  }
}




const styles = StyleSheet.create({
  row:{

  },
  txt:{
    marginLeft: 20,
    fontSize: 20,
  },
});


AppRegistry.registerComponent('React_Native_Example', () => ArrayList);