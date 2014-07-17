var pleeease = require('pleeease'),
    postcss  = require('pleeease/node_modules/postcss'),
    extend   = require('pleeease/node_modules/deep-extend');

var PleeeaseCompiler;

module.exports = PleeeaseCompiler = (function() {

    PleeeaseCompiler.prototype.brunchPlugin = true;
    PleeeaseCompiler.prototype.type = 'stylesheet';
    PleeeaseCompiler.prototype.extension = 'css';
    PleeeaseCompiler.prototype.pattern = /\.(?:css|scss|sass|less|styl)$/;

    function PleeeaseCompiler(config) {

        var _ref;
        if ((_ref = config.plugins) !== null && _ref.pleeease) {
            this.pleeeaseConfig = extend({}, _ref.pleeease);
        }

    }

    PleeeaseCompiler.prototype.compile = function (params, callback) {

        return callback(null, params);

    };

    PleeeaseCompiler.prototype.optimize = function(params, callback) {

        var _path = params.path;
        var _data = params.data;
        var _map  = params.map;

        if (this.pleeeaseConfig.sourcemaps) {
            this.pleeeaseConfig.sourcemaps = {
                map: {
                    prev: _map.toJSON()
                },
                from: _path
            };
        }

        var result = pleeease.process(_data, this.pleeeaseConfig);

        return callback(null, {
            data: result.css,
            map : result.map.toJSON()
        });

    };

    return PleeeaseCompiler;

})();