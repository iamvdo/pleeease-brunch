pleeease-brunch
===============

Add [Pleeease](https://github.com/iamvdo/pleeease) support to [Brunch](https://github.com/brunch/brunch)

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

##Sourcemaps

Brunch concatenates files and manages sourcemaps on its own. But, if you `@import` CSS files using Pleeease, you can force sourcemaps generation for these files too. Simply add `plugin.pleeease.sourcemaps: true` option in your `brunch-config` file.

##Options

See [Pleeease](http://pleeease.io/docs/#features).
