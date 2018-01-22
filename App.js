import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DEFAULT_CONTAINER_STYLE = {
  flex: 1,
  backgroundColor: 'blue',
  alignItems: 'center',
  justifyContent: 'center',
}

export default class App extends React.Component {
  state = {
    background: '#fff'
  }
  componentDidMount (){
    setInterval(this.handleChangeBackground, 1000)
  }
  render() {
    const {
      background: backgroundColor = '#fff'
    } = this.state
    const containerStyle = {...DEFAULT_CONTAINER_STYLE, backgroundColor}
    const styleSheet = StyleSheet.create({
      container: containerStyle,
    })

    return (
      <View style={styleSheet.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }

  handleChangeBackground = () => {
    const background = this.generateRandoColor()
    this.setState({background})
  }

  generateRandoColor = (size = 3) => {
    const colorBitList = Array.from(Array(size)).map(() => this.generateRandomColorValue())
    colorBitList.unshift('#')
    return colorBitList.join('')
  }

  generateRandomColorValue = () => {
    let rand = Math.ceil(Math.random() * 16).toString(16)
    if (rand === '10') {
      rand = 'a'
    }
    return rand
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
