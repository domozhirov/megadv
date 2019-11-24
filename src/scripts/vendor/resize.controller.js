// RESIZE_CONTROL

var resizeController = function() {
  var $win = $(window),
    winWidth = $win.width(),
    range = [],
    func = [],
    toggleState = [undefined, undefined];

  if (!!arguments.length) {
    for (var i = 0; i <= arguments.length-1; i++) {
      if ($.isArray(arguments[i])) {
        range = arguments[i];
      } else if ($.isNumeric(arguments[i])) {
        range.push(arguments[i]);
      } else if ($.isFunction(arguments[i])) {
        func.push(arguments[i]);
      }
    }
  }

  $win.resize(function() {
    winWidth = $win.width();

    if (range.length > 1) {
      if (winWidth >= range[0] && winWidth <= range[range.length-1] && typeof toggleState[0] === "undefined") {
        func[0]();
        toggleState[0] = true;
        toggleState[1] = undefined;
      } else if ((winWidth < range[0] || winWidth > range[range.length-1]) && typeof toggleState[1] === "undefined") {
        toggleState[0] = undefined;
        toggleState[1] = true;

        if ($.isFunction(func[1])) {
          func[1]();
        }
      }
    } else if (range.length === 1) {
      if (winWidth <= range[0] && typeof toggleState[0] === "undefined") {
        func[0]();
        toggleState[0] = true;
        toggleState[1] = undefined;
      } else if (winWidth > range[0] && typeof toggleState[1] === "undefined") {
        toggleState[0] = undefined;
        toggleState[1] = true;

        if ($.isFunction(func[1])) {
          func[1]();
        }
      }
    }
  }).trigger('resize');
};

window.resizeController = resizeController;
