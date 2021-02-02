import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Constants from 'expo-constants';
import { useState } from 'react';

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
      <Card title='Contact Information' wrapperStyle={{margin: 10}}>    
      </Card>
    </ScrollView>
  )
  } 
}

class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: "This is not really a bird nest."
    };
  }
  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText}</Text>
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});


export default Contact;