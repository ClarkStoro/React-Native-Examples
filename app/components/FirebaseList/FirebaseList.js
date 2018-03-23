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
  Alert,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';

//Import firebase writing from console: 'npm install firebase --save'
import * as firebase from "firebase";

export default class FirebaseList extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        title: 'Firebase List',
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
        this.itemsRef = firebase.database().ref();
        this.dbRef = this.itemsRef.child('posts');
        this.state = {
            postDataSource: [],
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }
    
    fetchUsers() {
        var items = [];
        this.dbRef.on('value', snapshot => {
            snapshot.forEach(function (childSnapshot) {
                items.push({
                    Title: childSnapshot.child("Title").val(),
                    Post: childSnapshot.child("Post").val(),
                    Username: childSnapshot.child("Username").val(),
                });
            });
        this.setState({postDataSource: items})
        });
    }

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
    renderRow = ({item}) => (
        <View style={styles.row}>
            <Text style={styles.txtT}>{item.Title}</Text>
            <Text style={styles.txtP}>{item.Post}</Text>
            <Text style={styles.txtU}>{item.Username}</Text>
        </View>  
    );//end renderRow


    render() {
        return (
        <FlatList
            data={this.state.postDataSource}
            renderItem={this.renderRow}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
        />
        );
    }
}

      

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
    },
    txtT:{
        fontSize: 20,
    },
    txtP:{
        fontSize: 16,
    },
    txtU:{
        fontSize: 15,
    },

});

AppRegistry.registerComponent('React_Native_Example', () => FirebaseList);