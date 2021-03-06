import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import { Responsive } from 'semantic-ui-react';
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
    fontSize: 14,
    display: 'flex',
    width: '200px',
    marginLeft: '0.5em',
  },
  icon: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
    paddingRight: '1em',
  },
  skill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '1em',
  },
  progress: {
    width: '70%',
    margin: 'auto',
  },
  skillName: {
    marginTop: '1.5em',
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
            <div className={classes.pos} color="textSecondary">
              <img alt={skill.alt} className={classes.icon} src={skill.src} />
              <Typography className={classes.skillName}>{skill.text}</Typography>
            </div>
            <Responsive as={Fragment} minWidth={768}>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                className={classes.progress}
              />
            </Responsive>
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
