var Execution = require('execution');
var path = require('path');
var Record = require('record');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, regexp, function and object.
    options: {
        version: {
            label: 'Your KISSY version',
            type: 'string',
            placeholder: 'default is latest version'
        }
    },
    run: function (inputs, options, logger, settings) {
        return this._run(inputs, options, logger, settings);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        var XTemplate = require('kissy-xtemplate');
        var xt = new XTemplate(options);

        var records = inputs.map(function(input){
            var originExt = path.extname(input.path);
            var compiledExt = '.js';
            return new Record({
                contents: xt._compile(input.contents, 'utf8', 'utf8'),
                path: input.path.replace(originExt, compiledExt)
            })
        });

        resolve(records);
    }
})