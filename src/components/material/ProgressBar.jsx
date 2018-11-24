import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function ProgressBar(props) {
  const { classes, completed } = props;
  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={completed} />
    </div>
  );
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  completed: PropTypes.number.isRequired,
};

export default withStyles(styles)(ProgressBar);
