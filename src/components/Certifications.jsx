import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

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
  card: {
    minWidth: 275,
  },
};

function Certifications(props) {
  const { classes, inputRef } = props;
  return (
    <div ref={inputRef} style={{ paddingBottom: '35vh', paddingTop: '25vh' }}>
      <Typography className={classes.header}>
        Certifications
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Oracle Certified Associate Java SE 8 Programmer I
          </Typography>
          <Typography color="textSecondary">
            May 2017 – Present
          </Typography>
          <Typography color="textSecondary">
            License 316621314
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open('https://www.youracclaim.com/badges/f47c9212-a9e9-4b10-8183-81da16efadbd', '_target')}
          >
            See certification
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Certifications.propTypes = {
  classes: PropTypes.object.isRequired,
  inputRef: PropTypes.object.isRequired,
};

export default withStyles(styles)(Certifications);
