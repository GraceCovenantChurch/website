import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import withTitle from '../../hoc/withTitle';
import TitleBanner from '../../components/TitleBanner';

import styles from './FamilyGroup.css';

const FamilyGroupRow = props => (
  <div className={styles.tableRow}>
    <div className="col-sm-4">
      <strong>{props.title}</strong>
      <br />
      {props.days}
    </div>
    <div className="col-sm-8">
      {props.description}
      <br />
      <br />
      <a href={props.signupLink}>Signup here!</a>
    </div>
  </div>
);

FamilyGroupRow.propTypes = {
  title: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  signupLink: PropTypes.string.isRequired,
};

const FamilyGroup = () => (
  <div id={styles.familyGroup}>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="/public/assets/pages/FamilyGroup.bundle.css" />
    </Helmet>

    <TitleBanner src="/static/images/home/philly.jpg">
      Family Group
    </TitleBanner>

    <div className={styles.pageContent}>
      <div className="description">
        {'At GCC we place a high emphasis on Family Groups because we believe that it is in these smaller settings that we are able to meet with God, building meaningful relationships, and develop biblical accountability. Family groups meet on a weekly basis at various places.'}
        <br />
        <br />
        {'Through Bible study, discussions, sharing and prayer, we learn to live out the teachings of the Bible in our daily lives. You are strongly encouraged to join a family group that fits your needs,interests and life situation.'}
        <br />
        <br />
        {'Family groups are divided between the Harvest (undergraduate), Crossroad (post-college), and International groups.'}
        <br />
        <br />
        {'Please watch the video below to learn more!'}
      </div>

      <div className={styles.video}>Video Placeholder Div</div>

      <div className={styles.signupTable}>
        <FamilyGroupRow
          title="College"
          days="Mondays to Thursdays"
          description="Our College Family Groups meet once a week on Drexel, Moore, Penn, Temple, and USciences!"
          signupLink="#"
        />
        <FamilyGroupRow
          title="Young Adults"
          days="Mondays to Thursdays"
          description="Our Young Adult Family Groups have a mix of post-undergraduate, grad students, PhD's, working adults, and young married couples."
          signupLink="#"
        />
        <FamilyGroupRow
          title="International"
          days="Thursdays"
          description="Description needed"
          signupLink="#"
        />
      </div>
    </div>
  </div>
);

export default withTitle('Family Group')(FamilyGroup);
