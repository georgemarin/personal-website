import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import ExperienceCard from './ExperienceCard';
import Anonos from '../../static/Anonos.png';
import Bitdefender from '../../static/Bitdefender.png';
import Ing from '../../static/ing.GIF';
import Opatros from '../../static/optaros.png';

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
};

function Experience(props) {
  const { classes, inputRef } = props;
  return (
    <div ref={inputRef} style={{ marginBottom: '10vh', marginTop: '10vh' }}>
      <Typography className={classes.header}>
        Experience
      </Typography>
      <ExperienceCard
        title="Full Stack Developer"
        company="Anonos: BigPrivacy Unlocks Data"
        period="December 2017 - Present"
        description="Anonos BigPrivacy technology enforces real-time, policy-based Privacy Rights
        Management (PRM®) to support compliant big data processing (both in the cloud and on-premise)
            using Hadoop, Spark, Cassandra, and other popular data stores."
        image={Anonos}
      />
      <ExperienceCard
        title="Java Developer"
        company="Ing"
        period="September 2016 - September 2018"
        description="We are a global financial institution with a strong European base, offering banking services.
        We draw on our experience and expertise, our commitment to excellent service and our global
        scale to meet the needs of a broad customer base, comprising individuals, families,
        small businesses, large corporations, institutions and governments. Our customers are at the heart of what we do."
        image={Ing}
      />
      <ExperienceCard
        title="Junior Automation Engineer"
        company="Bitdefender"
        period="February 2016 - September 2016"
        description="We are led by a vision to be the most trusted cybersecurity technology provider in the world, which means we constantly anticipate, innovate and go the extra mile. Bitdefender delivers robust security you can rely on. With a global security delivery infrastructure protecting half a billion users, visionary solutions, and a wealth of awards, we have been a trusted security provider since 2001."
        image={Bitdefender}
      />
      <ExperienceCard
        title="Associate QA Engineer"
        company="Optaros by MRM//McCann"
        period="April 2015 - February 2016"
        description="Optaros is the e-commerce offering for MRM//McCann. Whether it’s e-commerce strategy, interactive and visual design or technical development, we are the trusted e-commerce partner to enable your businesses goals and solve complex problems through technology. We create useful, frictionless, and personalized e-commerce sites that deliver on your brand promise and optimize your business throughout the customer experience in order to ensure meaningful conversion."
        image={Opatros}
      />
      <Divider light style={{ marginTop: '5rem' }} />
    </div>
  );
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
  inputRef: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
