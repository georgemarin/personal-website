import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DrawerMenu from './menu/DrawerMenu';
import About from './about/About';
import Education from './education/Education';
import Experience from './experience/Experience';
import Skills from '../skills/Skills';
import Interests from './Interests';
import Certifications from './Certifications';

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
        <DrawerMenu
          refs={{
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
          <About inputRef={this.about} />
          <Experience inputRef={this.experience} />
          <Education inputRef={this.education} />
          <Skills inputRef={this.skills} />
          <Interests inputRef={this.interests} />
          <Certifications inputRef={this.certifications} />
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
