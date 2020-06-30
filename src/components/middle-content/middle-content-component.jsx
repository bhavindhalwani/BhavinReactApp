import React from 'react';

/*
function middleContentComponent(){
    return(
    <div className = "middleContentComponent">
        <h1>Middle Pannel </h1>      
    </div>
    );
}*/
function MiddleContentComponent(props) {
    return(
     <div>
     <h1>Welcome, {props.name}</h1>
     </div>
    )
  }

export default MiddleContentComponent;