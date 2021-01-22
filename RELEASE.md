# How to release

This project is hosted on NPM.  You can find the terra packages [here][project-url].

Below is a guide for releasing packages:

1. Update the versions of the components and changelogs via `npm run prepare-for-release`
2. Create a Release PR, Get approvals
3. Merge PR to `main`
4. Watch main to ensure releases get pushed to npm and tagged in github appropriately

If you are publishing a new package, e.g. a v1.0.0 release, the package will be listed with only you as the collaborator.
You'll need to move the package into the terra-ui team under the Cerner org on npm.

- Log into npm's website
- Navigate to the terra-ui [package page](https://www.npmjs.com/settings/cerner/teams/team/terra-ui/access)
- At the top of this page, there should be an input labeled, "Package". Type in the full package name and press enter.
- This will add the package to the terra-ui team's packages under the Cerner org on npm and then all team members on the terra-ui team in npm will have access to publish in future releases.

[project-url]: https://www.npmjs.com/org/cerner
