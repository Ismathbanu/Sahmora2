import fs from 'fs';
import path from 'path';

const pages = [
  'Home',
  'AboutUs',
  'WhatWeDo',
  'IndustriesWeServe',
  'ContactUs',
  'ventures/Ventures',
  'ventures/Talbar',
  'ventures/IgradeGoods'
];

pages.forEach(p => {
  const name = p.split('/').pop();
  const content = `import { Helmet } from 'react-helmet-async';

const ${name} = () => {
  return (
    <>
      <Helmet>
        <title>${name} | Sahmora Investment LLC</title>
      </Helmet>
      <div className="min-h-screen pt-24">
        <div className="container-width">
          <h1>${name} Page Ready</h1>
        </div>
      </div>
    </>
  );
};

export default ${name};
`;
  fs.writeFileSync(path.join('src/pages', p + '.jsx'), content);
});

console.log('Pages created.');
