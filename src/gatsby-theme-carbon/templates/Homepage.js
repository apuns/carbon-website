/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { blue90, gray10, white } from '@carbon/elements';
import styles from './Homepage.module.scss';
import HomepageVideo from '../../components/HomepageVideo/HomepageVideo';

const FirstLeftText = () => <p>Web Guidelines for PSECI</p>;

const FirstRightText = () => (
  <p>
    Use the writing for web guidelines and Carbon Fibre design system when creating all digital products and experiences. Carbon Fibre is a fork of IBM’s Carbon <strong>open source</strong> design system. 
  </p>
);

/*const SecondLeftText = () => (
  <p>
    Wondering how
    <br />
    to contribute?
  </p>
);

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best
    possible experience for our users. If you’re interested in contributing,
    check out our contributing guidelines to get started.
    <a className={styles.calloutLink} href="/contributing/overview/">
      Start contributing →
    </a>
  </p>
); */

const customProps = {
  Banner: (
    <>
      <span className="homepage--dots" />
      <section className="homepage--header">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-2 bx--offset-lg-8 bx--offset-md-4 bx--offset-sm-2 homepage--tile-header">
              <ResourceCard
                className={styles.callToAction}
                title="What is all this, anyway?"
                href="/introduction/introduction"
                color="dark"
                actionIcon="arrowRight"
              />
            </div>
            <HomepageVideo />
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303" // not quite black, but not in color pallete
      color={gray10}
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  /*SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color={white}
      backgroundColor={blue90}
    />
  ),*/
}; 

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
