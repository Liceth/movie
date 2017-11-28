import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Search' };
        }

    render() {
        const Details = () => Actions.Detail();
        return (
            <View>
                <View>
                    <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({text})}
                    value={this.state.text} />
                </View>
                <View style={{backgroundColor:'#E6D2E0'}}>
                <Text onPress={Details}>Go to Details</Text>
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