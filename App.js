import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import ItemList from './ItemList'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      data: []
    };
  }
  handleSave = () => {
    const { text, data } = this.state;
    data.push({ text });
    this.setState({ data, text: '' });

  };
  render() {
    const { text, data } = this.state;
    let id=0;
    return (
      <View>
        <View style={style.Viewtitle}>
          <Text style={style.ViewDisplay}>TODO LIST APP</Text>
        </View>
        <View style={style.InputArea}>
          <TextInput
            style={style.Input}
            value={text}
            onChangeText={(text) => { this.setState({ text: text }) }} />

          <TouchableOpacity style={style.SubmitButton} onPress={this.handleSave}>
            <Text style={style.SubmitButtonText}>EKLE</Text>
          </TouchableOpacity>
        </View>
        <View style={style.ListArea}>
          {
            data.map((item,id) => {
              return (<ItemList id={id} text={item.text}/>)
            })
          }
        </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  Viewtitle: {
    backgroundColor: '#7579e7',
  },
  ViewDisplay: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '700'
  },
  InputArea: {
    backgroundColor: '#9ab3f5',
    padding: 10,
    flexDirection: 'row'

  },
  Input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    flex: 4
  },
  SubmitButton: {
    flex: 1,
    backgroundColor: '#583d72',
    marginLeft: 10,
    borderRadius: 5,
    textAlign: 'center'
  },
  SubmitButtonText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10
  },
  ListArea: {
    backgroundColor: '#a3d8f4',
    height:610
  },
});