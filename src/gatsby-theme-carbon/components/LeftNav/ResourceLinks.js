import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'WordPress Test Site',
    href: 'https://gww.gov.bc.cahttp://wordpress-apache-b07dd3-dev.apps.silver.devops.gov.bc.ca/wp-admin/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => (
  <ResourceLinks includeDividerSpace={false} shouldOpenNewTabs links={links} />
);

export default CustomResources;
