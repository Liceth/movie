import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Image,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import api from '../api/api';
import Details from '../components/Details.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    componentWillMount() {
        api.getMovies().then((res) => {
            this.setState({
                movies: res.results
            })
        });
    }
    static navigationOptions = {
        title: 'Movie',
        headerRight: <Button title="Info" onPress={Details}/> 
      /*  titleImage: require('../img/Logo_Epk_.png'),*/
      }
    render() {
        const Details = () => Actions.Detail();
        return (
            <View>
                <View>
                    {/* <Text>Movies:{this.state.homepage}</Text> */}
                    {
                        this.state.movies.map(movie => <View><Text>{movie.original_title}</Text><Text h1>{movie.vote_average}</Text></View>)
                    }
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