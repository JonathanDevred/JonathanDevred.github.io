"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ContactForm = _interopRequireDefault(require("../../components/ContactForm/ContactForm"));
var _Header = _interopRequireDefault(require("../../components/Header/Header"));
var _framerMotion = require("framer-motion");
var _motion = _interopRequireDefault(require("./motion.config"));
require("./styles.scss");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ContactPage = function ContactPage() {
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.section, _extends({
    className: "container contact"
  }, _motion["default"].containerAnimation), /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-regular"
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    title: "ME CONTACTER"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "general"
  }, /*#__PURE__*/_react["default"].createElement("main", {
    className: "general-main"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "general-section"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "general-text"
  }, "Si vous souhaitez me contacter pour discuter d'un projet de d\xE9veloppement web, proposer du travail ou si vous avez des questions, n'h\xE9sitez pas \xE0 utiliser le formulaire de contact ci-dessous (une page de courrier \xE9lectronique s'ouvrira)."), /*#__PURE__*/_react["default"].createElement("p", {
    className: "general-text-alt"
  }, "Vous pr\xE9f\xE9rez d'autres alternatives ?"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", {
    className: "option"
  }, "Laissez-moi un message sur LinkedIn :", /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: "linked-in",
    to: "https://www.linkedin.com/in/jonathan-devred/",
    target: "_blank"
  }, "Cliquez ici")), /*#__PURE__*/_react["default"].createElement("li", {
    className: "option"
  }, "Appelez-moi ou \xE9crivez-moi au : ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "phone-number"
  }, "06.03.26.83.81"), " "), /*#__PURE__*/_react["default"].createElement("li", {
    className: "option-joke"
  }, "Vous pouvez aussi tenter d'envoyer un pigeon voyageur (mais le temps de r\xE9ponse risque d'\xEAtre long...)")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "general-text"
  }, "Dans tous les cas, je serai heureux de vous r\xE9pondre dans les plus brefs d\xE9lais. ")))), /*#__PURE__*/_react["default"].createElement("section", {
    className: "general message-container "
  }, /*#__PURE__*/_react["default"].createElement(_ContactForm["default"], null)));
};
var _default = /*#__PURE__*/(0, _react.memo)(ContactPage);
exports["default"] = _default;