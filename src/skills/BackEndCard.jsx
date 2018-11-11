import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import SpringIcon from '../static/springBoot.svg';
import DockerIcon from '../static/docker.jpg';
import NodeIcon from '../static/nodejs.png';
import JavaIcon from '../static/java.png';

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
  pos: {
    fontSize: 16,
    display: 'flex',
    lineHeight: '40px',
    width: '20%',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    paddingRight: '1em',
  },
  skill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '1em',
  },
  progress: {
    width: '75%',
    verticalAlign: 'middle',
    margin: 'auto',
  },
};

function BackEndCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Backend
        </Typography>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="java" className={classes.icon} src={JavaIcon} />
            Java
          </Typography>
          <LinearProgress
            variant="determinate"
            value={70}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="nodejs" className={classes.icon} src={NodeIcon} />
            NodeJs
          </Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="SpringBoot" className={classes.icon} src={SpringIcon} />
          Spring Boot
          </Typography>
          <LinearProgress
            variant="determinate"
            value={40}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="docker" className={classes.icon} src={DockerIcon} />
            Docker
          </Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            className={classes.progress}
          />
        </div>
      </CardContent>
    </Card>
  );
}

BackEndCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackEndCard);
