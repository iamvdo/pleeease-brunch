var pleeease = require('pleeease'),
    postcss  = require('pleeease/node_modules/postcss'),
    importer = require('pleeease/lib/processors/import'),
    path     = require('path');

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

        var data;
        // resolve @import
        if (this.pleeeaseConfig.optimizers.import) {
            data =  postcss().
                    use(importer(path.dirname(params.path)).processor).
                    process(params.data).
                    css;
        } else {
            data = params.data;
        }

        params.data = data;

        return callback(null, params);

    };

    PleeeaseCompiler.prototype.optimize = function(params, callback) {

        var result = pleeease.process(params.data, this.pleeeaseConfig);

        return callback(null, result);

    };

    return PleeeaseCompiler;

})();