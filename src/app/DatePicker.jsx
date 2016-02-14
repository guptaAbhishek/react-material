import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AutoComplete from 'material-ui/lib/auto-complete';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionAndroid from 'material-ui/lib/svg-icons/action/android';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import DatePicker from 'material-ui/lib/date-picker/date-picker';





const styles = {
  card:{
    width:1020,
    marginLeft:140,
  },
  floatingActionButtonStyle:{
     marginTop:10,
     marginRight: 20,
  },
  button:{
    margin:12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      dataSource: [],
    };
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
            <MenuItem primaryText="Profile" />
            <MenuItem primaryText="Setting" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
        />

      <Card style={styles.card}>
       <CardHeader
         title="URL Avatar"
         subtitle="Subtitle"
         avatar="http://lorempixel.com/100/100/nature/"
       />
       <CardMedia
         overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
       >
         <img src="http://lorempixel.com/600/337/nature/" />
       </CardMedia>
       <CardTitle title="Card title" subtitle="Card subtitle" />
       <CardText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
         Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
         Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
       </CardText>
       <CardActions>
         <FlatButton label="Action1" />
         <FlatButton label="Action2" />
       </CardActions>
     </Card>

     <Card style={styles.card}>

       <CardHeader
     title="Without Avatar"
     subtitle="Subtitle"
     actAsExpander={true}
     showExpandableButton={true}
   />
   <CardText expandable={true}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
   </CardText>
   <CardActions expandable={true}>
     <FlatButton label="Action1"/>
     <FlatButton label="Action2"/>
   </CardActions>
 </Card>
 

      <RaisedButton label="Default" style={styles.button} />
          <RaisedButton
            label="Primary"
            primary={true}
            style={styles.button}
            icon={<ActionAndroid />}
             />
          <RaisedButton label="Secondary" secondary={true} style={styles.button} />
          <RaisedButton label="Disabled" disabled={true} style={styles.button} />
            <FlatButton label="Choose an Image">
        <input type="file" style={styles.exampleImageInput} />
      </FlatButton>

      <FlatButton
        label="Label before"
        labelPosition="before"
        primary={true}
        style={styles.button}
        icon={<ActionAndroid />}
      />

      <FlatButton
        label="GitHub Link"
        linkButton={true}
        href="https://github.com/callemall/material-ui"
        secondary={true}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />

      <DatePicker hintText="Portrait Dialog" />
        <DatePicker hintText="Landscape Dialog" mode="landscape" />
        <DatePicker hintText="Dialog Disabled" disabled={true} />

      </div>
    );
  }
}


export default App;
