
This is a fork of WowUp that's been modified to do its best not to phone home to WowUp's servers or to force updates

I recommend you visit the [Main WowUp repositories](https://github.com/WowUp/), or if it's gotten even more evil and invasive, just go straight to the max-evil, max-convenience option and hop on the [Overwolf train](https://download.curseforge.com/).

Fortunately, since it's open source software, if you don't like something, you can easily modify the code:

1. First you're going to want to set up your dev machine, search the web for something like "Making an electron app", you'll need to download some tooling like Node.js ( https://nodejs.org/en/download/ )

1. Clone the source

1. Run your local version of the app:

Open a terminal and run:
```
npm start
```
4. If you've made some changes you like, hit the "Fork" button on Github, upload your changes, then you can send a pull request here and/or to the main WowUp repo.

5. You can package up the app for redistribution using electron-builder with the script the WowUp team has included in package.json like so:

```
npm run electron:build
```

## Main WowUp License
Copyright (c) WowUp LLC. All rights reserved.

Licensed under the [GNU General Public License v3.0](https://github.com/WowUp/WowUp/blob/master/LICENSE) license.

## WowUp-NoUpdates fork License
Copyright (c) Some Internet Jerk.

Licensed under the [GNU General Public License v3.0](https://github.com/WowUp/WowUp/blob/master/LICENSE) license.
