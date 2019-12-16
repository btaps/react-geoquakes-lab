import React, { Component } from 'react'

class Quakes extends Component {

createQuakesElement = ()=>{
   let listItem = this.props.detail.map((title, index) =>{
          // this gets the time the earthquake happened
	  let newDate = new Date();
          newDate.setTime(this.props.detail[index].properties.time*1000);
          let dateString = newDate.toLocaleDateString()    
          
	   // Use Date.now() to subtract from when earquake happened in milliseconds
	   // Store in hoursElapsed and round. (1 hr = 3600000, dive by that to get hours)
	  let millisecondsElapsed = Date.now() - this.props.detail[index].properties.time
	  let hoursElapsed = Math.floor(millisecondsElapsed/3600000)
          
	   // Take title of quake and slice the front information off          
	   // turn string into array
	   let tempString = title.properties.title
	   let quakeString = title.properties.title.slice(8, 100).split(' ')
	   // ittirate through array to is for the f in 'of' in the title
	   // splice the rest of the sentence to only show the name of the city
	   let getQuakeName = (arr=>{ 
		   arr.map((element, index)=>{ 
		     if(element === 'of'){
		       return arr = arr.splice(index,arr.length )
		     }
		     return arr
		   })
		 return arr
	   })
	   // store new title string in variable neqQuakeString
	  //let newQuakeString = getQuakeName(quakeString).join('')
          console.log(quakeString)
	  return <p key={index}>{ `${tempString} / ${hoursElapsed} hours ago
		  ${`${dateString.slice(0, 4)}/19`}
		  ` }</p>
	        })
   return listItem
}

  render(){
	 console.log(this.props.detail[0].properties.time)
	// console.log(new Date())
	//  var newDate = new Date();
         // newDate.setTime(1576031366067*1000);
          //let dateString = newDate.toUTCString();
	  //console.log(dateString)
	  // Create a variable and the the value of each index of the Array using map().
	  // inside of map return a list item html tag with the value of the title
	  // Next put the <li> tag inside of our <ul> element
	 // const listItem = this.props.detail.map((title, index) =>{
	   //   return <p key={index}>{ `${title.properties.title} ` }</p>
	  //})
    return(
        <div id ="info">
	     { this.createQuakesElement() } 
	</div>
    )
  }
  
}

export default Quakes

