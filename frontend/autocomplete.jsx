import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    const names = this.props.names.map((name, index) => (
      <li key={index}>{name}</li>
    ));
    return(
      <div>
        <h1>Autocomplete</h1>
        {names}
      </div>
    )
  }
}

export default Autocomplete;