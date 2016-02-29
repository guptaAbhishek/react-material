import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class DialogExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }
  handleRequestClose(){
    this.setState({
      open: false,
    });
  }

  handleTouchTap(){
    this.setState({
      open:true,
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />,
      <FlatButton
        label="Login"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleRequestClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="SIGN UP" onTouchTap={this.handleTouchTap} />
        <Dialog
          title="ZoukLoans Sign Up"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <TextField
          hintText="Email"
          floatingLabelText="Email Address"
        />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
        />
        </Dialog>
      </div>
    );
  }
}
