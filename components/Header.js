import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component{

  render(){
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}
