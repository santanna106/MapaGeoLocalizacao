import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      region: null
    }

  }

  async componentDidMount(){

    let state = this.state;
    Geolocation.getCurrentPosition((info) => {
      
      this.setState({
        region:{
          latitude:info.coords.latitude,
          longitude:info.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }
      });
      
    } );

  }

 render(){
  const {region} = this.state;
  return (
    <View style={styles.container}>
    <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       minZoomLevel={10}
       showsUserLocation
       style={styles.map}
       region={region}
     >
     </MapView>
   </View>
    
  );
 }
}


const styles = StyleSheet.create({
  
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
  },map: {
    width:'100%',
    height:500
  },
  viewMarker: {
    height:30,
    padding:5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5
    
  },

  textoMarker: {
    color:'#FFF'
  }

 });
