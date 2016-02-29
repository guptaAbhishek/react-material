import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

class AppBarNew extends React.Component{
  constructor(props){
    super(props);
  }

  handleTouchTap(){

  }

  render(){
    return(
      <div>
        <AppBar
          title="Zoukloans Admin"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Profile" onTouchTap={this.handleTouchTap} />
            <MenuItem primaryText="Setting" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
        />
      </div>
    );
  }

};

export default AppBarNew;
