import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  Chip,
  CardContent,
  Typography,
} from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';

const styles = {
  card: {
    width: '90%',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: '1em',
  },
  chip: {
    marginLeft: '1em',
    marginBottom: '0.5em',
  },
};

function OthersCard(props) {
  const skills = ['NPM', 'Express.js', 'Kubernetes', 'Kafka', 'Hadoop', 'Maven', 'Selenium', 'ESLint', 'ECMAScript',
    'Git', 'Travis', 'Jenkins', 'Unix', 'Jest', 'Enzyme', 'Mockito', 'JUnit', 'Calypso',
    'Financial Markets', 'Back Office', 'Agile Methodologies', 'AWS'];
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Others
        </Typography>
        {
          skills.map(skill => (
            <Chip
              key={skill}
              icon={<FaCheckCircle size="2em" />}
              label={skill}
              className={classes.chip}
              color="primary"
            />
          ))
        }
      </CardContent>
    </Card>
  );
}

OthersCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OthersCard);
