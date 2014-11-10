
var dice = function (n) {
    return Math.floor(Math.random() * n);
};

var coinToss = function () { return dice(2); };

var sample = function (array) { return arguments[dice(arguments.length)]; };

var _console = {log: function () {}};

var bindEvents = function (up, down, left, right, reset, score) {

    $('.wrapper')
        .swipeCross()
        .on('swipeup', function () { _console.log('swipeup'); up();})
        .on('swiperight', function () { _console.log('swiperight'); right(); })
        .on('swipeleft', function () { _console.log('swipeleft'); left(); })
        .on('swipedown', function () { _console.log('swipedown'); down(); })
        .on('swipecancel', function () { _console.log('swipecancel'); });

    $(document)
        .arrowkeys()
        .on('upkey', function () { _console.log('upkey'); up();})
        .on('rightkey', function () { _console.log('rightkey'); right(); })
        .on('leftkey', function () { _console.log('leftkey'); left(); })
        .on('downkey', function () { _console.log('downkey'); down(); })
        .on('score', function (event, param) { console.log('score'); score(event, param); });

    $('.reset')
        .on('click', function () { unbindEvents(); reset(); });

};

var unbindEvents = function () {
    $('.wrapper')
        .swipeCrossUnbind()
        .off('swipeup')
        .off('swipeudown')
        .off('swipeleft')
        .off('swiperight')
        .off('swipecancel');

    $(document)
        .arrowkeysUnbind()
        .off('upkey')
        .off('rightkey')
        .off('leftkey')
        .off('downkey')
        .off('score');

    $('.reset')
        .off('click');
};
