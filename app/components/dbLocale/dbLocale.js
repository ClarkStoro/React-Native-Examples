import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    AsyncStorage,
    Alert,
    TextInput,
    Button,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';



export default class dbLocale extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'dbLocale',
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
            txt: '',
            userDataSource: [],
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        AsyncStorage.getAllKeys().then(notes => {
            console.log(notes);
            this.setState({
                userDataSource: notes,
            });
        });
    }

    save(){
        try {
            AsyncStorage.setItem(this.state.txt, this.state.txt);
            Alert.alert('Success', 'Note saved');
            this.fetchUsers();
        } catch (error) {
            // Error saving data
        }
    }//end save

  
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
            <Text style={styles.txt}>{item}</Text>
        </View>
    );//end renderRow

    render() {
        return (     
            <View style={styles.container}>
                <View style={styles.inserisci}>
                    <Text style={styles.txtTitle}>Notes</Text>
                    <TextInput
                        placeholder="Write here your note"
                        onChangeText={(value) => this.setState({ txt: value })}
                    />
                    <Button title="Save note" onPress={this.save.bind(this)} />
                </View>
                
                <FlatList
                    title='Note saved'
                    data={this.state.userDataSource}
                    renderItem={this.renderRow}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginLeft: 20,
        marginRight:20,
    },
    txtTitle:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    inserisci: {
        marginBottom:30,
    },
    row:{
  
    },
    txt:{
      marginLeft: 20,
      marginRight: 20,
      marginBottom:5,
      marginTop:5,
      fontSize: 18,
    },
  });
  



AppRegistry.registerComponent('React_Native_Example', () => dbLocale);
