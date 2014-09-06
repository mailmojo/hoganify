var
    Hogan = require('hogan.js'),
    path = require('path'),
    through = require('through2');

var extensions = ['.hogan', '.mustache', '.html'];

module.exports = function hoganify (file, options) {
    if (extensions.indexOf(path.extname(file)) === -1) {
        return through();
    }

    var buffer = '';

    function write (chunk, enc, next) {
        buffer += chunk;
        next();
    }

    function end () {
        var
            template = null,
            text = JSON.stringify(buffer),
            compiled = '';

        compiled += "var Hogan = require('hogan.js');\n";
        if (options.live) {
            compiled += "module.exports = Hogan.compile(" + text + ");";
        }
        else {
            template = Hogan.compile(buffer, { asString: true });
            compiled += "module.exports = new Hogan.Template(" + template + ", " + text + ", Hogan);";
        }

        this.push(compiled);
        this.push(null);
    }

    return through(write, end);
};
