var pleeease = require('pleeease'),
    extend   = require('deep-extend');

var PleeeaseCompiler;

module.exports = PleeeaseCompiler = (function() {

    PleeeaseCompiler.prototype.brunchPlugin = true;
    PleeeaseCompiler.prototype.type = 'stylesheet';
    PleeeaseCompiler.prototype.extension = 'css';
    PleeeaseCompiler.prototype.pattern = /\.(?:css|scss|sass|less|styl)$/;

    function PleeeaseCompiler(config) {
        this.pleeeaseConfig = {};
        if (config.plugins && config.plugins.pleeease) {
            this.pleeeaseConfig = extend({}, config.plugins.pleeease);
        }
    }

    PleeeaseCompiler.prototype.compile = function (params, callback) {
        return callback(null, params);
    };

    PleeeaseCompiler.prototype.optimize = function(params, callback) {

        var opts = {
            from: params.path,
            to:   params.path,
            map:  {
                inline: false,
                annotation: false,
                sourcesContent: false
            }
        };
        if (params.map) {
            opts.map.prev = params.map.toJSON();
        }

        this.pleeeaseConfig.sourcemaps = opts;

        return pleeease.process(params.data, this.pleeeaseConfig).then(function(result) {
            if (result.map) {
                result = {
                    data: result.css,
                    map : result.map.toJSON()
                };
            }
    
            return callback(null, result);
        });

    };

    return PleeeaseCompiler;

})();
