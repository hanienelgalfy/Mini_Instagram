"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigationStack = require("react-navigation-stack");

var _reactNavigation = require("react-navigation");

var _signIn = _interopRequireDefault(require("../screens/auth/signIn"));

var _feed = _interopRequireDefault(require("../screens/feed/feed"));

var _bucketList = _interopRequireDefault(require("../screens/feed/bucketList"));

var _profile = _interopRequireDefault(require("../screens/feed/profile"));

var _post = _interopRequireDefault(require("../screens/feed/post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var screens = {
  SignIn: {
    screen: _signIn["default"]
  },
  Feed: {
    screen: _feed["default"]
  },
  BucketList: {
    screen: _bucketList["default"]
  },
  Profile: {
    screen: _profile["default"]
  },
  Post: {
    screen: _post["default"]
  }
};
var theStack = (0, _reactNavigationStack.createStackNavigator)(screens);

var _default = (0, _reactNavigation.createAppContainer)(theStack);

exports["default"] = _default;