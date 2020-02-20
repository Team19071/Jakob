/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Button, Alert, YellowBox} from 'react-native';
console.ignoredYellowBox = ['Remote debugger'];
//YellowBox.ignoredWarnings(['Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?']);

//import StartCobot from '.components/StartCobot';

var ws = new WebSocket("ws://192.168.0.101:5555/send");
var status = "";
ws.onopen = function(event){
  console.log("Connection open ...");
};
ws.onmessage = function(event){
  console.log("Received Message: " + ab2str(event.data));
  Alert.alert(
    'feedback',
    ab2str(event.data),[{text: 'OK', onPress: () => console.log('OK Pressed')}],
    { cancelable: false}
  )
};

function ab2str(buf){
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

function str2ab(str){
  var buf = new ArrayBuffer(str.length*2);
  var bufView = new Uint8Array(buf);
  for(var i=0, strLen = str.length; i<strLen; i++){
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

export default class App extends React.Component{
  render(){
    return (
    <View style = {styles.container}>
        
      <Button title = "Connect to Cobot" progress style = {styles.button} 
      onPress = {this.Connect}></Button>
      <Button title = "Start Cobot" type = "primary" style = {styles.button} 
      onPress = {this.Send}></Button>
      <Button title = "Stop Cobot" type = "primary" style = {styles.button}
      onPress = {this.Stop}></Button>

      </View>
    );
  }

  Connect(){
    var state = ws.readyState;
    if(state == 1){
      status = "connected";
    }
    else{
      status = "not connect";
    }
    Alert.alert(
      'Connection status',
      status,[{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: false}
    )
  }

  Send(){
    ws.send(str2ab("play\n"));
  }

  Stop(){
    ws.send(str2ab("stop\n"));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
  }
});