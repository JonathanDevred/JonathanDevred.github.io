"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _framerMotion = require("framer-motion");
var _motion = _interopRequireDefault(require("./motion.config"));
require("./styles.scss");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ErrorPage = function ErrorPage() {
  return /*#__PURE__*/React.createElement(_framerMotion.motion.section, _extends({
    className: "container errorpage"
  }, _motion["default"].containerAnimation), /*#__PURE__*/React.createElement("h1", {
    className: "errorpagetitle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "oops"
  }, "Oops,"), " apparemment vous \xEAtes perdu \uD83D\uDD0D\uD83E\uDD14"), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "errorlink",
    to: "/"
  }, "Cliquez ici pour revenir \xE0 l'accueil"));
};
var _default = /*#__PURE__*/(0, _react.memo)(ErrorPage);
exports["default"] = _default;