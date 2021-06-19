import { Github } from './services/Github.js';
import { Preferences } from './services/Preferences.js';

const bar = document.querySelector('ul');
const progress = document.querySelector('li');

export async function start() {
  const { colors, user, repository } = Preferences.get();
  const { opened, closed } = await Github.getIssues(user, repository);
  
  const allIssues = opened + closed;

  if(allIssues <= 0) {
    progress.style.width = '0';
    progress.innerHTML = '0%';

    return;
  };

  const progressDone = Math.floor((opened * 100) / allIssues);
  
  progress.style.width = `${progressDone}%`;
  progress.innerHTML = `${progressDone}%`;

  progress.style.background = `#${colors[0]}`;
  bar.style.background = `#${colors[1]}`;
}