please-brunch
=============

Add [Please](https://github.com/iamvdo/please) support to [brunch](https://github.com/brunch/brunch)

##Install

Add this package to your `package.json` file, then `npm install`.

	{
		"please-brunch": "0.1.x"
	}

Or you can `npm install --save please-brunch`.

##Add options

All options are in brunch-config file, in the `plugins.please` section, like so:

```javascript
	plugins:
		please:
			autoprefixer: true
			minifier: true
			mqpacker: true
			polyfills:
				variables: true
				rem: false
```

Note that please-brunch is an optimizer, so it runs only when `optimize` is set to `true`.

##More documentation

See [Please](https://github.com/iamvdo/please).
