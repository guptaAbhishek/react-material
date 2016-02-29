import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';


export default class LeftNavUndockedExample extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      open: false,
    };
  }

  handleToggle(){
      this.setState({
        open: !this.state.open,
      });
  }

  handleClose(){
      this.setState({
        open: false,
      });
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Open LeftNav"
          onTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
        
        <TextField
          hintText="Search"
          floatingLabelText="Search"
          />
          <MenuItem onTouchTap={this.handleClose}>Credit Dashboard</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>BD Dashboard</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Lending Partners</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Strategic Partners</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Zouk Advisort Partners</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Admin Users</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Product Managment</MenuItem>
        </LeftNav>
      </div>
    );
  }
}
