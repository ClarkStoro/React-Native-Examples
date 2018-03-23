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
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';


export default class JSONList extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        title: 'JSON List',
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
            userDataSource: [],
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }
    
    fetchUsers() {
        //Get the json from the link and put the response on an array
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userDataSource: response,
                });
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
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('JSONDetailsNav', { item: item })}>
            <View style={styles.row}>
                <Text style={styles.txt}>{item.name}</Text>
                <Text style={styles.txt}>{item.username}</Text>
            </View>
        </TouchableWithoutFeedback>
    );//end renderRow


    render() {
        return (
        <FlatList
            data={this.state.userDataSource}
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
        marginBottom: 5
    },
    txt:{
        marginLeft: 20,
        fontSize: 15,
    },
});

AppRegistry.registerComponent('React_Native_Example', () => JSONList);