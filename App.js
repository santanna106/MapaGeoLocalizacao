import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';



export default class App extends Component{
//-12.962658, -38.500569
//-12.973021, -38.502252
  constructor(props){
    super(props);
    this.state = {
      region: null,
      destLocation: null
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
  const {region,destLocation} = this.state;
  return (
    <View style={styles.container}>
    <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       minZoomLevel={10}
       showsUserLocation
       style={styles.map}
       region={region}
     >
       { this.state.destLocation && 

           <MapViewDirections
           origin={region}
           destination={destLocation}
           apikey={"AIzaSyBTkCXqMTNGrTMzl5cGHjuoFxIkjgs6sJo"}
           strokeWidth={5}
           strokeColor="#000"
         />

       }
     </MapView>

     
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.box}>
     <View style={styles.localView}> 
          <TouchableOpacity styel={styles.localBtn} onPress={() => {
            this.setState({destLocation:{
              latitude:-12.962658,
              longitude:-38.500569
            }})
          }}>
            <Text style={styles.localTexto}>Escola</Text>
          </TouchableOpacity>
       </View>  

       <View style={styles.localView}> 
          <TouchableOpacity styel={styles.localBtn} onPress={() => {
            this.setState({destLocation:{
              latitude:-12.973021,
              longitude:-38.502252
            }})
          }}>
            <Text style={styles.localTexto}>Escola</Text>
          </TouchableOpacity>
       </View>  
       <View style={styles.localView}> 
          <TouchableOpacity styel={styles.localBtn}>
            <Text style={styles.localTexto}>Shopping</Text>
          </TouchableOpacity>
       </View>     
       <View style={styles.localView}> 
          <TouchableOpacity styel={styles.localBtn}>
            <Text style={styles.localTexto}>Shopping</Text>
          </TouchableOpacity>
       </View>    
       <View style={styles.localView}> 
          <TouchableOpacity styel={styles.localBtn}>
            <Text style={styles.localTexto}>Shopping</Text>
          </TouchableOpacity>
       </View>    
       <View style={styles.localView}> 
          <TouchableOpacity styel={styles.localBtn}>
            <Text style={styles.localTexto}>Shopping</Text>
          </TouchableOpacity>
       </View>      
     </ScrollView>


   </View>
    
  );
 }
}


const styles = StyleSheet.create({
  
  container: {
    flex:1,
   
  },
  box:{
    position:"absolute",
    top:30,
    margin:10,
    height:70

  },
  map: {
   flex:1
  },
  localView:{
    height:40,
    paddingRight:5,
    alignItems:"center",
    justifyContent:"center",
    
    borderRadius:5
  },
  localBtn: {
    height:40,
    
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5

  },
  localTexto: {
    color:'#FFF',
    backgroundColor:'#FF0000',
    borderRadius:5,
    height:25,
    width:65,
    textAlign:"center"


  }

 });
