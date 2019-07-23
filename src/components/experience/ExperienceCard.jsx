import React, { Fragment } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
    paddingBottom: '1rem',
    marginBottom: '3rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: '1.7rem',
    fontFamily: 'Saira',
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#343a40',
  },
  company: {
    fontSize: '1.2rem',
    fontFamily: 'Saira',
    textTransform: 'uppercase',
    fontWeight: '500',
    color: '#868e96',
  },
  duration: {
    fontSize: '1rem',
    fontFamily: 'Saira',
    fontWeight: '500',
    color: '#bd5d38',
    paddingBottom: '2rem',
  },
  description: {
    fontSize: '1rem',
    fontFamily: 'Saira',
    fontWeight: '500',
    color: '#868e96',
  },
  media: {
    marginTop: '2rem',
    marginLeft: '1rem',
    height: 150,
    minWidth: 200,
    display: 'inline',
    float: 'right',
  },
};

function ExperienceCard(props) {
  const {
    classes,
    title,
    company,
    image,
    period,
    description,
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div style={{ display: 'inline', float: 'left' }}>
          <Typography className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.company}>
            {company}
          </Typography>
          <Typography className={classes.duration}>
            {period}
          </Typography>
          <Typography className={classes.description}>
            {description}
          </Typography>
        </div>
        <Responsive as={Fragment} minWidth={768}>
          <CardMedia
            className={classes.media}
            title="Anonos"
            image={image}
          />
        </Responsive>
      </CardContent>
    </Card>
  );
}

ExperienceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withStyles(styles)(ExperienceCard);
