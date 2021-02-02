import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { Image, ScrollView } from 'react-native';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state= {
      property: 'value'
    }
  }
  static navigationOptions = {
    title: 'Contact'
}
  render() {
  return(
    <ScrollView>
    </ScrollView>
  )
  }
}
export default Contact;