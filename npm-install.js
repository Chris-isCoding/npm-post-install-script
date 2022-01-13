const glob = require('glob');
const cp = require('child_process');
const os = require('os').platform();
const { resolve } = require('path');

const modulesPaths = glob
  .sync(resolve(__dirname, './src/js/apps/*/package.json'))
  .map((mod) => mod.replace('/package.json', ''));

const npmCmd = os.startsWith('win') ? 'npm.cmd' : 'npm';

modulesPaths.forEach((modPath) => {
  cp.spawn(npmCmd, ['i'], {
    env: process.env,
    cwd: modPath,
    stdio: 'inherit',
  });
});
