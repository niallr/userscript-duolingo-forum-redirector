// ==UserScript==
// @name        Duolingo Forum Redirector
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Redirects dead Duolingo forum links to the hobune.stream archive
// @author      niallr
// @match       *://www.duolingo.com/comment/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Get the current URL
    var currentUrl = window.location.href;

    // Replace the domain and path to point to the archive
    var archiveUrl = currentUrl.replace("www.duolingo.com/comment/", "duolingo.hobune.stream/comment/");

    // Redirect immediately
    window.location.replace(archiveUrl);
})();
