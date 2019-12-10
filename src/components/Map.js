import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import icon from '../earthquake.png'

class MapContainer extends Component {
  
  displayMarkers = () => {
    return this.props.detail.map((location, index) => {
      return <Marker 
	    key={index} 
	    id={index} 
	    position={{
               lat: location.geometry.coordinates[1],
               lng: location.geometry.coordinates[0]
            }}
           onClick={() => console.log(`You clicked ${location.properties.title}`)}
	   icon = {icon}/>
    })
  }
  
    mapStyles = ()=>{
       return{
       width: '38%',
       height: '150%',
      }
    };

  render() {
	  console.log(icon)
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style = {this.mapStyles()}
	  initialCenter={{ lat: 37.78, lng: -122.44}}
          icon = {icon}
	>
		<img src ={icon}/>
          {this.displayMarkers()}
        </Map>
    );
  }

}
	
export default GoogleApiWrapper({ apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'})(MapContainer)
