pleeease-brunch
===============

[Process CSS with ease](https://github.com/iamvdo/pleeease), and [Brunch](https://github.com/brunch/brunch).

##Install

	`npm install --save pleeease-brunch`

##Add options

All options are in `brunch-config` file, in the `plugins.pleeease` section, for example:

```javascript
	plugins:
		pleeease:
			autoprefixer:
				browsers: ['last 3 versions']
			rem: ['20px']
```

Note that pleeease-brunch is an optimizer, so it runs only when `optimize` is set to `true`.

##Preprocessors

Pleeease makes so easy to combine preprocessors and PostCSS. Set which one you want to use from options. For example Stylus and Autoprefixer:

```javascript
  plugins:
    pleeease:
      stylus: true
      autoprefixer:
        browsers: ['last 3 versions']
```

##Sourcemaps

Brunch concatenates files and manages sourcemaps on its own. But, if you `@import` CSS files using Pleeease, you can force sourcemaps generation for these files too. Simply add `plugin.pleeease.sourcemaps: true` option in your `brunch-config` file.

##Options

See [Pleeease](http://pleeease.io/docs/#features).

##Changelog

3.0.0 - 03-09-2016
- Update to Pleeease 4

2.0.1 - 08-14-2015
- Fix package creation

2.0.0 - 08-13-2015
- Match Pleeease v3