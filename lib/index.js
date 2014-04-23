var pleeease  = require('pleeease');

var PleeeaseCompiler;

module.exports = PleeeaseCompiler = (function() {

	PleeeaseCompiler.prototype.brunchPlugin = true;
	PleeeaseCompiler.prototype.type = 'stylesheet';
	PleeeaseCompiler.prototype.extension = 'css';
	PleeeaseCompiler.prototype.pattern = /\.(?:css|scss|sass|less|styl)$/;

	function PleeeaseCompiler(config) {

		var _ref;
		if ((_ref = config.plugins) !== null && _ref.pleeease) {

			this.pleeeaseConfig = _ref.pleeease;

		}

	}

	PleeeaseCompiler.prototype.compile = function (params, callback) {

		return callback(null, params);

	};

	PleeeaseCompiler.prototype.optimize = function(params, callback) {

		var result = pleeease.process(params.data, this.pleeeaseConfig);

		return callback(null, result);

	};

	return PleeeaseCompiler;

})();