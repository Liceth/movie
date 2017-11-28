import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import Detail from './components/Detail';

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} initial={true}/>
        <Scene key="Detail" component={Detail} />
      </Scene>
    </Router>
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
});
