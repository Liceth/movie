import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Detail extends Component {

    render() {
        const goToHome = () => Actions.Home();
        return (
            <View>
                <Text> Hello Detail</Text>
                <View>
                    <Text onPress={goToHome}>Go To Home</Text>
                </View>
            </View>
        );
    
    }
}
