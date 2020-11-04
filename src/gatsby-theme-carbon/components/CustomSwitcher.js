import React from 'react';
import { Switcher } from 'gatsby-theme-carbon/src/components/Switcher';

// https://css-tricks.com/using-css-transitions-auto-dimensions/
  // Note: if you change this, update the max-height in the switcher stylesheet

const CustomChildren = () => (
    <>
      <SwitcherLink href="https://www2.gov.bc.ca/gov/content?id=14FD003042FC422182796E84A6C343C9">Writing for Web</SwitcherLink>
      <SwitcherLink href="https://www2.gov.bc.ca/gov/content?id=11F049BC113345D6AAE492D61960A499">
        Web Accessibility
      </SwitcherLink>
      <SwitcherDivider>External Resources</SwitcherDivider>
      <SwitcherLink href="http://www.hemingwayapp.com/">
        Hemingway Readability Checker
      </SwitcherLink>
    </>
  );

  
  const CustomSwitcher = () => <Switcher children={CustomChildren} />;
  export default CustomSwitcher;