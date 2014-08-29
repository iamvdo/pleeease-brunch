brunch-pleeease
===============

Add [Pleeease](https://github.com/iamvdo/pleeease) support to [Brunch](https://github.com/brunch/brunch)

##Install

Add this package to your `package.json` file, then `npm install`.

	{
		"brunch-pleeease": "^1.0.0"
	}

Or you can `npm install --save brunch-pleeease`.

Actually, it matches Pleeease 1.x.x.

##Add options

All options are in `brunch-config` file, in the `plugins.pleeease` section, like so:

```javascript
	plugins:
		pleeease:
			autoprefixer: true
			filters: true
			rem: true
			pseudoElements: true
			opacity: true
			import: true
			mqpacker: true
			minifier: true
			next: false
			sourcemaps: false
```

Note that brunch-pleeease is an optimizer, so it runs only when `optimize` is set to `true`.

##Sourcemaps

Brunch concatenates files and manages sourcemaps on its own. But, if you `@import` CSS files using Pleeease, you can force sourcemaps generation for these files too. Simply add `plugin.pleeease.sourcemaps: true` option in your `brunch-config` file.

##Options

See [Pleeease](http://pleeease.io/docs/#features).
