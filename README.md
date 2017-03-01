# WP Grunt Child
This is a WordPress child theme template that has a grunt config already built for compiling JS and SASS. 
We have also included some helpful functions, helpers and mixins under the src/scss/global directory to help get you on your way.


## Prerequisites
* NodeJS
* Ruby

## Install

Must have [NodeJS](https://nodejs.org/en/) installed. Make sure it is up to date by running:
``` bash
$ npm update -g npm
```
Install [Grunt](https://gruntjs.com/getting-started) CLI:
``` bash
$ npm install -g grunt-cli
```
Install Compass: *Ruby must be installed*
``` bash
$ gem install compass
```
Install Grunt and the necessary plugins in your project: *Might need to be done as root*
``` bash
$ npm install
```

Install JS libraries with Bower:
```bash
$ bower install
```

## Usage

All of our grunt task aliases are under grunt/aliases.yml.

Run a compile and watch by simply running
```bash
$ grunt
```
or run a build without the file watcher:
```bash
$ grunt build
```

## JS Packages Included
* [Font Awesome](http://fontawesome.io/)
* [Fitvids.js](http://fitvidsjs.com/)
* [jquery-match-height](https://github.com/liabru/jquery-match-height)
* [Modernizer](https://modernizr.com/)

## More Information
For more information on:
* Grunt configurations visit: [https://gruntjs.com/getting-started](https://gruntjs.com/getting-started)
* SASS with the SCSS syntax visit: [sass-lang.com](http://sass-lang.com/)
* Package management with Bower, please visit: [https://bower.io/#getting-started](https://bower.io/#getting-started)
