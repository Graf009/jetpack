import _typeof from 'babel-runtime/helpers/typeof';
var createHelper = function createHelper(func, helperName) {
  var setDisplayName = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
  var noArgs = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
    var _ret = function () {
      // const wrapDisplayName = require('./wrapDisplayName').default
      var wrapDisplayName = require('./wrapDisplayName');

      if (noArgs) {
        return {
          v: function v(BaseComponent) {
            var Component = func(BaseComponent);
            Component.displayName = wrapDisplayName(BaseComponent, helperName);
            return Component;
          }
        };
      }

      return {
        v: function v() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (args.length > func.length) {
            console.error('Too many arguments passed to ' + helperName + '(). It should called ' + ('like so: ' + helperName + '(...args)(BaseComponent).'));
          }

          return function (BaseComponent) {
            var Component = func.apply(undefined, args)(BaseComponent);
            Component.displayName = wrapDisplayName(BaseComponent, helperName);
            return Component;
          };
        }
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  return func;
};

export default createHelper;