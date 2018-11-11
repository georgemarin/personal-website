import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import CassandraIcon from '../static/cassandra.jpg';
import MongoIcon from '../static/mongodb.jpeg';
import OracleIcon from '../static/oracle.png';
import PostgresIcon from '../static/postgres.png';

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

function DatabasesCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Databases
        </Typography>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="Postgre" className={classes.icon} src={PostgresIcon} />
            PostgreSQL
          </Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="Oracle" className={classes.icon} src={OracleIcon} />
          Oracle SQL
          </Typography>
          <LinearProgress
            variant="determinate"
            value={40}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="MongoDB" className={classes.icon} src={MongoIcon} />
            MongoDB
          </Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            className={classes.progress}
          />
        </div>
        <div className={classes.skill}>
          <Typography className={classes.pos} color="textSecondary">
            <img alt="Cassandra" className={classes.icon} src={CassandraIcon} />
            Cassandra
          </Typography>
          <LinearProgress
            variant="determinate"
            value={20}
            className={classes.progress}
          />
        </div>
      </CardContent>
    </Card>
  );
}

DatabasesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatabasesCard);
