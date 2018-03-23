import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';



export default class JSONDetails extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Details',
        headerStyle: {
            backgroundColor: '#1565c0',
        },
        headerTintColor: 'white',
    });

  
    render() {
        const { params } = this.props.navigation.state; //get item passed from the JSONList component
        return (     
            <View style={styles.container}>
                <Text style={styles.txt}>{params.item.name}</Text> 
                <Text style={styles.txt}>{params.item.username}</Text>
                <Text style={styles.txt}>{params.item.email}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt:{
        fontSize: 20,
    },
});



AppRegistry.registerComponent('React_Native_Example', () => JSONDetails);
