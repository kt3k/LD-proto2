
var dice = function (n) {
    return Math.floor(Math.random() * n);
};

var coinToss = function () { return dice(2); };

var sample = function (array) { return arguments[dice(arguments.length)]; };

var _console = {log: function () { /*console.log.apply(console, arguments);*/ }};

var swipe$dom;

var bindEvents = function (up, down, left, right, reset, score) {

    swipe$dom = $('.wrapper')
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
    swipe$dom
        .swipeCrossUnbind()
        .off('swipeup')
        .off('swipedown')
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

var wait = function (n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n);
    });
};
