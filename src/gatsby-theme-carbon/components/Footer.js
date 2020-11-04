import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import packageJson from '../../../package.json';
import Logo from 'gatsby-theme-carbon/src/components/logo.png';

console.log(Logo)

const currentYear = new Date().getFullYear();
const versions = {
  components: packageJson.devDependencies['carbon-components'],
  react: packageJson.dependencies['carbon-components-react'],
};

function WIWLogo () {
  return (
    <img src={Logo} alt="Where Ideas Work Logo" />
  )
}

function Content({ buildTime }) {
  return (
    <>
      <p>
        Have questions?<br /> Email Corporate Communications <br />
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
}

const links = {
  firstCol: [
    {
      href: 'mailto:EmployeeNews@gov.bc.ca',
      linkText: 'Contact us',
    },
    { href: 'http://wordpress-apache-b07dd3-dev.apps.silver.devops.gov.bc.ca/wp-admin/', linkText: 'WordPress Test Site' },
    { href: 'https://gww.gov.bc.ca', linkText: '@Work Intranet' },
  ],
  secondCol: [
    { href: '/web-writing-guidelines/web-writing-guidelines', linkText: 'Writing for Web' },
    { href: '/components/overview', linkText: 'Carbon Fibre Design System' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} Logo={WIWLogo} />;

export default CustomFooter;
