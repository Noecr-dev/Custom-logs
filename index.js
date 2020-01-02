'use strict';

module.exports = {
    ok,
    log,
    error,
    warning
};

function ok(msg) {
    const styles = 'background-color: green; color: white; font-size: 30px; display: block; text-align: center';
    showLog(msg, styles);
}

function log(msg) {
    const styles = 'background-color: blue; color: white; font-size: 30px; display: block; text-align: center';
    showLog(msg, styles);
}

function error(msg) {
    const styles = 'background-color: red; color: white; font-size: 30px; display: block; text-align: center';
    showLog(msg, styles);
}

function warning(msg) {
    const styles = 'background-color: yellow; color: white; font-size: 30px; display: block; text-align: center';
    showLog(msg, styles);
}

function showLog(msg, styles) {
    console.log('%c %s', styles, msg);
}