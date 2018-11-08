import React from 'react';
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
    textTransform: 'uppercase',
    color: '#c9b1a9',
    '&:hover': {
      color: 'white',
    },
  },
  button: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

class DrawerMenu extends React.Component {
  render() {
    const { classes, scrollAction, refs } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <div style={{ paddingTop: '70px', paddingBottom: '10px' }}>
          <ImageAvatar />
        </div>
        <List>
          {['about', 'experience', 'education', 'skills', 'interests', 'certifications', 'hobbies'].map(text => (
            <ListItem
              button
              key={text}
              className={classes.button}
              onClick={() => {
                if (text === 'about') {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                } else {
                  scrollAction(refs[text].current);
                }
              }}
            >
              <ListItemText primary={<Typography className={classes.listItem}>{text}</Typography>} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  refs: PropTypes.object.isRequired,
  scrollAction: PropTypes.func.isRequired,
};

export default withStyles(styles)(DrawerMenu);
