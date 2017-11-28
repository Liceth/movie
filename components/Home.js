import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Home extends Component {

    render() {
        const goToPageTwo = () => Actions.Detail();
        return (
            <View>
                <View>
                    <Text> Hello Home</Text>
                </View>
            </View>
        );
    
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });