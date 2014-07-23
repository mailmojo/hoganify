hoganify
========

Mustache_ precompiler transform plugin for Browserify_, using Hogan.js_ as the compiler. Highly inspired by hbsfy_.

Compiles Mustache templates to CommonJS modules. The compiled templates only have one copy of the Hogan.js compiler.

Usage
:::::

Install hoganify locally to your project:

::

  npm install --save hoganify

You will also need Hogan.js installed:

::

  npm install --save hogan.js

Then use it as Browserify transform module with ``-t``:

::

  browserify -t hoganify main.js > bundle.js

Or through grunt-browserify_ using the ``transform`` option:

::

  browserify: {
    options: {
      transform: ['hoganify']
    }
  }

In your CommonJS code you simply require files with ``.hogan`` or ``.mustache`` extensions:

::

  var template = require('widget.mustache');
  document.body.innerHTML = template.render({ title: "Hulk" });

Options
:::::::

By default templates are precompiled, but a ``--live`` option can be supplied to compile templates at runtime:

::

  browserify -t [ hoganify --live ] main.js > bundle.js

Or again, through grunt-browserify:

::

  browserify: {
    options: {
      transform: [['hoganify', { live: true }]]
    }
  }

Changelog
:::::::::

0.1.0
-----

- Initial release

.. _Mustache: http://mustache.github.io/
.. _Browserify: https://github.com/substack/node-browserify
.. _Hogan.js: https://github.com/twitter/hogan.js
.. _hbsfy: https://github.com/epeli/node-hbsfy
.. _grunt-browserify: https://github.com/jmreidy/grunt-browserify
