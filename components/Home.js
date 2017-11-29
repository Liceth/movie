import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import api from '../api/api';

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
    render() {
        const Details = () => Actions.Detail();
        return (
            <View>
                <View>
                    {/* <Text>Movies:{this.state.homepage}</Text> */}
                    {
                        this.state.movies.map(movie => <Text>{movie.original_title}</Text>)
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