import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

export default class App extends Component{

  render(){
    const title = "Not To Do List";

    return (
      <View>
        <Header title={title}/>

        <Body/>
      </View>
    )
  }
}
