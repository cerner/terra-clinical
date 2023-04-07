// eslint-disable-next-line import/no-extraneous-dependencies
import { danger, fail } from 'danger';

const CHANGELOG_PATTERN = /^packages\/terra-([a-z-])*\/CHANGELOG\.md/i;

const changedFiles = danger.git.created_files.concat(danger.git.modified_files);
const allowedFilepaths = ['package.json', 'CHANGELOG.md', 'src', 'translations'];

const changedChangelogs = new Set();
const changedPackages = new Set();

changedFiles.forEach((file) => {
  // file isn't in a package so it has no changelog, skip further processing
  if (file.substring(0, 9) !== 'packages/') {
    return;
  }

  if (!allowedFilepaths.some(filepath => file.includes(filepath))) {
    // skip further processing if the changed file is not among the allowed filepaths
    return;
  }

  const packageName = file.split('packages/')[1].split('/')[0];

  if (CHANGELOG_PATTERN.test(file)) {
    // changed file is the CHANGELOG itself
    changedChangelogs.add(packageName);
    return;
  }

  // for other allowed files
  changedPackages.add(packageName);
});

const missingChangelogs = [...changedPackages].filter(packageName => !changedChangelogs.has(packageName));

// Fail if there are package changes without a CHANGELOG update
if (missingChangelogs.length > 0) {
  fail(`Please include a CHANGELOG entry for each changed package this PR. Looks like a CHANGELOG entry is missing for: \n\n - ${missingChangelogs.join('\n - ')}`);
}
