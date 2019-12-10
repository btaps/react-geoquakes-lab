import React, { Component } from 'react'

class Quakes extends Component {



  render(){
	  // Create a variable and the the value of each index of the Array using map().
	  // inside of map return a list item html tag with the value of the title
	  // Next put the <li> tag inside of our <ul> element
	  const listItem = this.props.detail.map((title, index) =>{
	      return <p key={index}>{ `${title.properties.title} ` }</p>
	  })
    return(
        <div id ="info">
	     { listItem } 
	</div>
    )
  }
  
}

export default Quakes

