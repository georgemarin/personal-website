import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Picture from '../../static/GeorgeMarin.png';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    width: 160,
    height: 160,
    borderRadius: '200px',
    boxSizing: 'border-box',
    backgroundColor: '#c98200',
    border: '8px',
    borderStyle: 'solid',
    borderColor: '#c9865d',
  },
};

function ImageAvatar(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="George Marin"
        src={Picture}
        className={classNames(classes.bigAvatar)}
      />
    </div>
  );
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
