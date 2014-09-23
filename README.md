hoganify
========

[Mustache](http://mustache.github.io/) precompiler transform plugin for
[Browserify](https://github.com/substack/node-browserify), using
[Hogan.js](https://github.com/twitter/hogan.js) as the compiler. Highly
inspired by [hbsfy](https://github.com/epeli/node-hbsfy).

Compiles Mustache templates to CommonJS modules. The compiled templates
only have one copy of the Hogan.js compiler.

Usage
-----

Install hoganify locally to your project:

    npm install --save hoganify

You will also need Hogan.js installed:

    npm install --save hogan.js

Then use it as Browserify transform module with `-t`:

    browserify -t hoganify main.js > bundle.js

Or through [grunt-browserify](https://github.com/jmreidy/grunt-browserify)
using the `transform` option:

    browserify: {
      options: {
        transform: ['hoganify']
      }
    }

In your CommonJS code you simply require files with `.hogan`, `.mustache`
or `.ms` extensions:

    var template = require('widget.mustache');
    document.body.innerHTML = template.render({ title: "Hulk" });

Options
-------

By default templates are precompiled, but a `--live` option can be
supplied to compile templates at runtime:

    browserify -t [ hoganify --live ] main.js > bundle.js

Or again, through grunt-browserify:

    browserify: {
      options: {
        transform: [['hoganify', { live: true }]]
      }
    }

If you want to support other extensions than the default ones, you can use the
`--ext` option with one or more comma separated extensions:

    browserify -t [ hoganify --ext .html,.hg ] main.js > bundle.js

Or similarly in grunt-browserify:

    browserify: {
      options: {
        transform: [['hoganify', { ext: '.html,.hg' }]]
      }
    }

Changelog
---------

### 0.2.0

- Support for `--ext` option

### 0.1.1

-   Minor README update

### 0.1.0

-   Initial release

