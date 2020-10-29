import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'New Website',
    href: 'https://gww.gov.bc.ca',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => (
  <ResourceLinks includeDividerSpace={false} shouldOpenNewTabs links={links} />
);

export default CustomResources;
