import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
} from '@material-ui/core';
import DrawerMenu from './DrawerMenu';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Interests from './Interests';
import Certifications from './Certifications';
import Hobbies from './Hobbies';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.education = React.createRef();
    this.about = React.createRef();
    this.experience = React.createRef();
    this.skills = React.createRef();
    this.interests = React.createRef();
    this.certifications = React.createRef();
    this.hobbies = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  scrollToDomRef = (element) => {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <DrawerMenu
          refs={{
            hobbies: this.hobbies,
            about: this.about,
            experience: this.experience,
            education: this.education,
            skills: this.skills,
            interests: this.interests,
            certifications: this.certifications,
          }}
          scrollAction={this.scrollToDomRef}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <About inputRef={this.about} />
          <Experience inputRef={this.experience} />
          <Education inputRef={this.education} />
          <Skills inputRef={this.skills} />
          <Interests inputRef={this.interests} />
          <Certifications inputRef={this.certifications} />
          <Hobbies inputRef={this.hobbies} />
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
