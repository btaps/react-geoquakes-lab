import React, { Component } from 'react';
import Quakes from './components/Quakes'
import MapContainer from './components/Map'

class App extends Component {
  state = {
	  title: []
  }
componentDidMount() {
      // Using fect to get URL and recieve a promise
      fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
	// parse response into json
        .then(response=> response.json())
	// Use arrow function with .setState method to pass in an array of objects to this.state.title
	// **** NOTE**** before we passed in an array of names as STRING
         .then(data=> {this.setState({ title: data.features}) })
	.catch(err=> console.log(err))
}
  render() {
console.log(this.state.title)
    return (
      <div className="app">
        <div className="mapContainer">
		<MapContainer detail = {this.state.title}  />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            {/* Use ternary operator to pass in our array of objects.
                **** NOTE **** the console.log(this.state.title) under render logs twice because
                                the first 'render' nothing is passed in. When we pass in our values
                                using setState method, setState automatically 're-renders' creating
                                a new console.log with an array of objects.  */}
	    {
	      this.state.title.length === 0
	      ? "Loading..."
	      : <Quakes
            detail ={this.state.title}
          />
	    }
	</div>
      </div>
    );
  }
}
export default App;
