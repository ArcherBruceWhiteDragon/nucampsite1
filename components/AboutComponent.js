import React, { Component } from 'react';
import { Card, Text } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PARTNERS } from '../shared/partners';
import { ListItems } from 'react-native-elements';

class About extends Component {
  constructor(props) {
    super(props);
    this.state= {
      property: 'value'
    }
  }
  static navigationOptions = {
    title: 'About'
}
  render() {
  return(
   <ScrollView>
   </ScrollView>
  )
  }
}
export default About;