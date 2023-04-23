import React, { Component } from "react";
import '../stylesheet/PersonCard.css';

class PersonCard extends Component {
  render(props) {
    // const {firstName, lastName} = this.props;
    return (
      <div classList="contenedor">
        <h1 classList="titulo-nombre">
          {this.props.lastName}, {this.props.firstName}
        </h1>
        <p>Age: {this.props.age}</p>                    
        <p>Hair Color: {this.props.hairColor}</p>
      </div>
    );
  }
}

export default PersonCard;


//*tengo que colocarle una clase a cada elemento?*//