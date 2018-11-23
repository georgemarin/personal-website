import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';

const styles = {
  header: {
    fontSize: '3rem',
    fontFamily: 'Saira',
    letterSpacing: '-3px',
    textTransform: 'uppercase',
    fontWeight: '600',
    lineHeight: '5.5rem',
    color: '#343a40',
    paddingBottom: '3rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#868e96',
    marginBottom: '3rem',
  },
};

function Interests(props) {
  const { classes, inputRef } = props;
  return (
    <div ref={inputRef} style={{ paddingBottom: '20vh', paddingTop: '30vh' }}>
      <Typography className={classes.header}>
          Interests
      </Typography>
      <Typography className={classes.description}>
        I really enjoy being a software developer, as I am a really curios person.
        My end goal is to become a Solution / System architect as I find this role
        really challenging and complex.
      </Typography>
      {' '}
      <Typography className={classes.description}>
        Apart from being a software developer, I enjoy traveling. I am trying to
        visit new countries every year and experience as much as I can the local culture.
        Other than traveling, I also enjoy playing video games (Xbox) and boxing.
      </Typography>
      <Divider light />
    </div>
  );
}

Interests.propTypes = {
  classes: PropTypes.object.isRequired,
  inputRef: PropTypes.object.isRequired,
};

export default withStyles(styles)(Interests);
