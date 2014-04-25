pleeease-brunch
=============

Add [Pleeease](https://github.com/iamvdo/pleeease) support to [Brunch](https://github.com/brunch/brunch)

##Install

Add this package to your `package.json` file, then `npm install`.

	{
		"pleeease-brunch": "0.2.x"
	}

Or you can `npm install --save pleeease-brunch`.

##Add options

All options are in brunch-config file, in the `plugins.pleeease` section, like so:

```javascript
	plugins:
		pleeease:
			autoprefixer: true
			minifier: true
			mqpacker: true
			fallbacks:
				variables: true
				rem: false
```

Note that pleeease-brunch is an optimizer, so it runs only when `optimize` is set to `true`.

##More documentation

See [Pleeease](https://github.com/iamvdo/pleeease).
