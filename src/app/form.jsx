import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';


export default class Button extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    <div>
      <RaisedButton label="Secondary" secondary={true} />
    </div>
  }
}
