import {
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

const styles = {
  top: {
    paddingLeft: '20px',
    paddingTop: '25vh',
  },
  title: {
    display: 'inline',
    fontFamily: 'Saira',
    letterSpacing: '-5px',
    fontWeight: '600',
    fontSize: '5.5rem',
    lineHeight: '5.5rem',
    textTransform: 'uppercase',
  },
  subTitle: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontFamily: 'Saira',
    fontSize: '1.2rem',
    color: '#868e96',
    paddingBottom: '4rem',
  },
  description: {
    display: 'inline',
    paddingTop: '4rem',
    fontSize: '1.2rem',
    boxSizing: 'border-box',
    color: '#868e96',
    marginBottom: '3rem',
  },
  socialContainer: {
    marginBottom: '15vh',
    marginTop: '6rem',
  },
  social: {
    '&:hover': {
      backgroundColor: '#bd5d38',
    },
  },
};

function About(props) {
  const { classes, inputRef } = props;
  const Marin = (<p style={{ color: '#bd5d38' }} className={classes.title}> Marin</p>);
  const java = (<p style={{ fontWeight: 'bold', display: 'inline' }} className={classes.description}> Java </p>);
  const email = (
    <Typography
      style={
        {
          color: '#bd5d38',
          fontSize: '1.2rem',
          paddingLeft: '5px',
        }}
      className={classes.subtitle}
    >
      <a
        href="mailto:dev@georgemarin.tech"
        style={{ color: '#bd5d38', textDecoration: 'none' }}
      >
        dev@georgemarin.tech
      </a>
    </Typography>
  );
  return (
    <div ref={inputRef} className={classes.top}>
      <div>
        <Typography className={classes.title}>George</Typography>
        {Marin}
      </div>
      <div style={{ display: 'flex' }}>
        <Typography className={classes.subTitle}>
          Bucharest, Romania · +40 729 641 715 ·
        </Typography>
        {email}
      </div>
      <Typography className={classes.description}>
        I am a young, ambitious engineer, with experience as a Java Developer and
        Full Stack Developer, looking to work on challenging projects.
        My goal is to deliver clean, quality code in an effective way. My affinity is for
        backend development, in particular
      </Typography>
      {java}
      <Typography className={classes.description}>
         but I enjoy writing front end code as well.
      </Typography>
      <div className={classes.socialContainer}>
        <Button
          onClick={() => window.open('https://www.linkedin.com/in/maringeorge', '_blank')}
          className={classes.social}
        >
          <FaLinkedin size="4rem" />
        </Button>
        <Button
          onClick={() => window.open('https://github.com/georgemarin', '_blank')}
          className={classes.social}
        >
          <FaGithub size="4rem" />
        </Button>
        <Button
          onClick={() => window.open('https://www.facebook.com/marin.george.37', '_blank')}
          className={classes.social}
        >
          <FaFacebook size="4rem" />
        </Button>
      </div>
      <Divider light />
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  inputRef: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
