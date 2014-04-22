var please  = require('please');

var PleaseCompiler;

module.exports = PleaseCompiler = (function() {

	PleaseCompiler.prototype.brunchPlugin = true;
	PleaseCompiler.prototype.type = 'stylesheet';
	PleaseCompiler.prototype.extension = 'css';
	PleaseCompiler.prototype.pattern = /\.(?:css|scss|sass|less|styl)$/;

	function PleaseCompiler(config) {

		var _ref;
		if ((_ref = config.plugins) !== null && _ref.please) {

			this.pleaseConfig = _ref.please;

		}

	}

	PleaseCompiler.prototype.compile = function (params, callback) {

		return callback(null, params);

	};

	PleaseCompiler.prototype.optimize = function(params, callback) {

		var result = please.process(params.data, this.pleaseConfig);

		return callback(null, result);

	};

	return PleaseCompiler;

})();