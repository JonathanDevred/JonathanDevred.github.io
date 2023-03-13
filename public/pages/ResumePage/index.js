"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _Header = _interopRequireDefault(require("../../components/Header/Header"));
require("./styles.scss");
var _framerMotion = require("framer-motion");
var _motion = _interopRequireDefault(require("./motion.config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ResumePage = function ResumePage() {
  return /*#__PURE__*/React.createElement(_framerMotion.motion.section, _extends({
    className: "container resume"
  }, _motion["default"].containerAnimation), /*#__PURE__*/React.createElement("div", {
    className: "header-regular"
  }, /*#__PURE__*/React.createElement(_Header["default"], {
    title: "MON CURRICULUM VITAE"
  })), /*#__PURE__*/React.createElement("a", {
    className: "cv-download-link",
    href: "/images/cv.pdf",
    download: true
  }, " Cliquez ici pour t\xE9l\xE9charger le CV (PDF) "), /*#__PURE__*/React.createElement("div", {
    className: "cv-container"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cv",
    src: "/images/cv.png",
    alt: "cv de Jonathan Devred"
  })));
};
var _default = /*#__PURE__*/(0, _react.memo)(ResumePage);
exports["default"] = _default;