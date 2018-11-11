import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import materialIcon from '../static/materialUi.png';
import bootstrapIcon from '../static/bootstrap.jpeg';
import ReactIcon from '../static/react.png';
import CssIcon from '../static/css.png';
import HtmlIcon from '../static/html.png';

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

function FrontendCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Frontend
        </Typography>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="html" className={classes.icon} src={HtmlIcon} />
            HTML
          </Typography>
          <LinearProgress
            variant="determinate"
            value={80}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="react" className={classes.icon} src={ReactIcon} />
          React
          </Typography>
          <LinearProgress
            variant="determinate"
            value={40}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="css" className={classes.icon} src={CssIcon} />
          Css
          </Typography>
          <LinearProgress
            variant="determinate"
            value={30}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="material" className={classes.icon} src={materialIcon} />
            Material UI
          </Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="bootstrap" className={classes.icon} src={bootstrapIcon} />
            Bootstrap
          </Typography>
          <LinearProgress
            variant="determinate"
            value={30}
            className={classes.progress}
          />
        </div>
      </CardContent>
    </Card>
  );
}

FrontendCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontendCard);
