hoganify
========

Mustache_ precompiler transform plugin for Browserify_, using Hogan.js_ as the compiler.

Compiles Mustache templates to CommonJS modules. The compiled templates only have one copy of the Hogan.js compiler. By default templates are precompiled, but a ``--live`` option can be supplied to compile templates at runtime.

.. _Mustache: http://mustache.github.io/
.. _Browserify: https://github.com/substack/node-browserify
.. _Hogan.js: https://github.com/twitter/hogan.js
