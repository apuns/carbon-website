import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import packageJson from '../../../package.json';

const currentYear = new Date().getFullYear();
const versions = {
  components: packageJson.devDependencies['carbon-components'],
  react: packageJson.dependencies['carbon-components-react'],
};

const Content = ({ buildTime }) => (
  <>
    <p>
      Have questions? <br /> Email Corporate Communications <br />
      at <a href="mailto:EmployeeNews@gov.bc.ca">EmployeeNews@gov.bc.ca</a> 
    </p>
    <p>
      Vanilla Components version {versions.components}
      <br />
      React Components version {versions.react}
      <br />
      Last updated {buildTime}
      <br />
      Components Copyright © {currentYear} IBM
    </p>
  </>
);

const links = {
  firstCol: [
    {
      href: 'mailto:EmployeeNews@gov.bc.ca',
      linkText: 'Contact us',
    },
    { href: 'https://www.ibm.com/', linkText: 'Intranet Link' },
    { href: 'https://www.ibm.com/', linkText: 'Another Link' },
  ],
  secondCol: [
    { href: 'https://medium.com/carbondesign', linkText: 'Writing for Web' },
    { href: 'https://twitter.com/_carbondesign', linkText: 'Carbon Fibre Design System' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
