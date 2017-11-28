import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Detail extends Component {

    render() {
        const goToHome = () => Actions.Home();
        return (
            <View>
                <Text> Hello Detail</Text>
                <View style={{backgroundColor:'#E6D2E0'}}>
                    <Text onPress={goToHome}>Home</Text>
                </View>
            </View>
        );
    
    }
}
