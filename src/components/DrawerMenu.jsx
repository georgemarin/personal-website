import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import ImageAvatar from './ImageAvatar';

const drawerWidth = 270;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#bd5d38',
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: '0.1rem',
    color: '#c9b1a9',
    '&:hover': {
      color: 'white',
    }
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    },
  }
});

class DrawerMenu extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      >
      <div className= {classes.toolbar} />
      <div style={{ marginTop: '70px', marginBottom: '10px' }}>
        <ImageAvatar />
      </div>
      <List>
        {[ 'ABOUT', 'EXPERIENCE', 'EDUCATION', 'SKILLS', 'INTERESTS', 'CERTIFICATIONS' ].map((text) => (
          <ListItem button key={text} className={classes.button}>
            <ListItemText
              primary={<Typography className={classes.listItem}>{text}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
    )
  }
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerMenu);