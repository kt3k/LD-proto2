
var dice = function (n) {
    return Math.floor(Math.random() * n);
};

var coinToss = function () { return dice(2); };

var sample = function (array) { return arguments[dice(arguments.length)]; };

var bindEvents = function (up, down, left, right, reset) {

    $('.wrapper')
        .swipeCross()
        .on('swipeup', function () { console.log('swipeup'); up();})
        .on('swiperight', function () { console.log('swiperight'); right(); })
        .on('swipeleft', function () { console.log('swipeleft'); left(); })
        .on('swipedown', function () { console.log('swipedown'); down(); })
        .on('swipecancel', function () { console.log('swipecancel'); });

    $(document)
        .arrowkeys()
        .on('upkey', function () { console.log('upkey'); up();})
        .on('rightkey', function () { console.log('rightkey'); right(); })
        .on('leftkey', function () { console.log('leftkey'); left(); })
        .on('downkey', function () { console.log('downkey'); down(); });

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

    $('.reset')
        .off('click');
};
