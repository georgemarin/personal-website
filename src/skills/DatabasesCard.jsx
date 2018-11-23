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

const skills = [
  {
    alt: 'Postgre',
    src: PostgresIcon,
    text: 'PostgreSQL',
    value: 50,
  },
  {
    alt: 'Oracle',
    src: OracleIcon,
    text: 'OracleSQL',
    value: 40,
  },
  {
    alt: 'MongoDB',
    src: MongoIcon,
    text: 'MongoDB',
    value: 50,
  },
  {
    alt: 'Cassandra',
    src: CassandraIcon,
    text: 'Cassandra',
    value: 30,
  },
];

function DatabasesCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Databases
        </Typography>
        {skills.map(skill => (
          <div className={classes.skill} key={skill.alt}>
            <Typography className={classes.pos} color="textSecondary">
              <img alt={skill.alt} className={classes.icon} src={skill.src} />
              {skill.text}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              className={classes.progress}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

DatabasesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatabasesCard);
