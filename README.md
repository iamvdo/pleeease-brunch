pleeease-brunch
=============

Add [Pleeease](https://github.com/iamvdo/pleeease) support to [Brunch](https://github.com/brunch/brunch)

##Install

Add this package to your `package.json` file, then `npm install`.

	{
		"pleeease-brunch": "0.4.x"
	}

Or you can `npm install --save pleeease-brunch`.

Actually, it matches Pleeease 0.4.x.

##Add options

All options are in `brunch-config` file (all set to `true`), in the `plugins.pleeease` section, like so:

```javascript
	plugins:
		pleeease:
			fallbacks:
				autoprefixer: true
				variables: true
				filters: true
				rem: true
				pseudoElements: true
			optimizers:
				import: true
				mqpacker: true
				minifier: true
			sourcemaps: false
```

Note that pleeease-brunch is an optimizer, so it runs only when `optimize` is set to `true`.

##Sourcemaps

Brunch concatenates files and manages sourcemaps on its own. But, if you `@import` CSS files using Pleeease, you can force sourcemaps generation for these files too. Simply add `plugin.pleeease.sourcemaps: true` option in your `brunch-config` file.

##More documentation

See [Pleeease](https://github.com/iamvdo/pleeease).
