import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import {Button, Alert, YellowBox} from 'react-native';

export default function App() {
    //This data set needs to grab inputs from database
        let data = [{
          value: 'Cobot Board #1',
        }, {
          value: 'Cobot Board #2',
        }, {
          value: 'Cobot Board #3',
        }, {
        value: 'Cobot Board #4',
      }, {
        value: 'Cobot Board #5',
      }, {
        value: 'Cobot Board #6',
      }, {
        value: 'Cobot Board #7',
      }
        ];
    
        return (
        <View style = {styles.container}>    
          <Dropdown
            label='Select Cobot'
            data={data}
          />
        <Button title = "Select Cobot" progress style = {styles.button} ></Button>
        <View style={{flex:0.1}}/>
        {/*This will need a complete app and Screen Navigator Stack*/}
        <Button title = "Home Screen" progress style = {styles.button} ></Button>
        </View>
        );
    }

function SetCobotSelection(){
    //Set selection after all pages are put in
    //one cohesive app.
    pass;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 30,
      },
});