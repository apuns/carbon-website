import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';

const CustomChildren = () => (
  <>
      <SwitcherLink href="http://www.hemingwayapp.com/">Hemingway App</SwitcherLink>
      <SwitcherLink href="https://ibm.com/design/language">
        IBM Design Language
      </SwitcherLink>
      <SwitcherLink href="https://ibm.com/brand">IBM Brand Center</SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/able/">
        IBM Accessibility
      </SwitcherLink>
      <SwitcherDivider>Additional Resources</SwitcherDivider>
      <SwitcherLink href="https://www.carbondesignsystem.com/">
        Product
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/standards/web/ibm-dotcom-library/">
        Digital
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/event/">Event</SwitcherLink>
      <SwitcherLink disabled>Workplace</SwitcherLink>
      <SwitcherDivider>Design practices</SwitcherDivider>
      <SwitcherLink href="https://www.ibm.com/design/thinking/">
        Enterprise Design Thinking
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/research/">
        IBM Design Research
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/ai">
        IBM Design for AI
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/services/ibmix/">
        IBM iX
      </SwitcherLink>
      </>
  );
  
  const CustomSwitcher = (props) => <Switcher {...props} DefaultChildren={CustomChildren} />;

  export default CustomSwitcher;