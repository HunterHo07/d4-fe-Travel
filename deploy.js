const ghpages = require('gh-pages');
const path = require('path');

console.log('Starting deployment...');

ghpages.publish(
  path.join(process.cwd(), 'out'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/HunterHo07/d4-fe-Travel.git',
    message: 'Auto-generated commit [ci skip]',
    dotfiles: true
  },
  (err) => {
    if (err) {
      console.error('Deployment failed:', err);
      process.exit(1);
    } else {
      console.log('Deployment complete!');
    }
  }
);
