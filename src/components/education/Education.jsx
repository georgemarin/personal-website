import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Divider, Typography,
} from '@material-ui/core';
import {
  LibraryBooks,
}
  from '@material-ui/icons';
import { Timeline } from 'react-material-timeline';

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
};

const events = [
  {
    title: 'Titu Maiorescu University',
    subheader: 'October 2017 - June 2019',
    description: 'Bachelor Degree, Computer Science',
    icon: <LibraryBooks />,
  },
  {
    title: 'University of Bucharest',
    subheader: 'October 2014 - October 2017',
    description: 'Bachelor Degree, Computer Science (not graduated) ',
    icon: <LibraryBooks />,
  },
  {
    title: 'Radu Greceanu National College',
    subheader: 'September 2015 - June 2016',
    description: 'High School Diploma, Maths and Computer Science ',
    icon: <LibraryBooks />,
  },
  {
    title: 'Ion Minulescu National College',
    subheader: 'September 2012 - June 2015',
    description: 'High School, Maths and Computer Science ',
    icon: <LibraryBooks />,
  },
];


function Education(props) {
  const { classes, inputRef } = props;
  return (
    <div ref={inputRef} style={{ marginBottom: '10vh', marginTop: '10vh' }}>
      <Typography className={classes.header}>
        Education
      </Typography>
      <Timeline events={events} />
      <Divider light style={{ marginTop: '5rem' }} />
    </div>
  );
}

Education.propTypes = {
  inputRef: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);
