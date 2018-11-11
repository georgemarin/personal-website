import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Divider, Typography } from '@material-ui/core';
import BackEndCard from './BackEndCard';
import FrontEndCard from './FrontEndCard';
import OthersCard from './OthersCard';
import DatabasesCard from './DatabasesCard';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: '2rem',
    paddingTop: '2rem',
  },
  gridList: {
    width: '90%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
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
});

function Skills(props) {
  const { classes, inputRef } = props;

  return (
    <div ref={inputRef}>
      <Typography className={classes.header}>
        Skills
      </Typography>
      <div className={classes.root}>
        <GridList className={classes.gridList}>
          <BackEndCard />
          <FrontEndCard />
          <DatabasesCard />
          <OthersCard />
        </GridList>
      </div>
      <Divider light style={{ marginTop: '5rem' }} />
    </div>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
  inputRef: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
