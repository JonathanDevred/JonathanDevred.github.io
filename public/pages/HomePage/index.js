"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
require("./styles.scss");
var _framerMotion = require("framer-motion");
var _motion = _interopRequireDefault(require("./motion.config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var HomePage = function HomePage() {
  return /*#__PURE__*/React.createElement(_framerMotion.motion.section, _extends({
    className: "container homepage"
  }, _motion["default"].containerAnimation), /*#__PURE__*/React.createElement("header", {
    className: "header-homepage"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "header__title"
  }, "BIENVENUE !"), /*#__PURE__*/React.createElement("img", {
    className: "photo",
    src: "./images/jonathan-no-background.png",
    alt: "photo jonathan"
  })), /*#__PURE__*/React.createElement("main", {
    className: "main-homepage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "JONATHAN DEVRED"), /*#__PURE__*/React.createElement("h3", {
    className: "subtitle"
  }, "WEB D\xC9VELOPPEUR")), /*#__PURE__*/React.createElement("div", {
    className: "navigation-container"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "navigation-title"
  }, "Navigation"), /*#__PURE__*/React.createElement("div", {
    className: "links-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "link"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "link-navigation",
    to: "/about"
  }, /*#__PURE__*/React.createElement("img", {
    className: "svg",
    src: "./images/3.svg",
    alt: "A propose"
  }), /*#__PURE__*/React.createElement("span", null, "\xC0 PROPOS"))), /*#__PURE__*/React.createElement("div", {
    className: "link"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "link-navigation",
    to: "/projects"
  }, /*#__PURE__*/React.createElement("img", {
    className: "svg",
    src: "./images/1.svg",
    alt: "Projets"
  }), /*#__PURE__*/React.createElement("span", null, "MES PROJETS"))), /*#__PURE__*/React.createElement("div", {
    className: "link"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "link-navigation",
    to: "/cv"
  }, /*#__PURE__*/React.createElement("img", {
    className: "svg",
    src: "./images/4.svg",
    alt: "CV"
  }), /*#__PURE__*/React.createElement("span", null, "MON CV"))), /*#__PURE__*/React.createElement("div", {
    className: "link"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "link-navigation",
    to: "/services"
  }, /*#__PURE__*/React.createElement("img", {
    className: "svg",
    src: "./images/5.svg",
    alt: "Services"
  }), /*#__PURE__*/React.createElement("span", null, "MES SERVICES"))), /*#__PURE__*/React.createElement("div", {
    className: "link"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "link-navigation",
    to: "https://linktr.ee/rvntch",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    className: "svg",
    src: "./images/6.svg",
    alt: "r\xE9seaux sociaux"
  }), /*#__PURE__*/React.createElement("span", null, "MES R\xC9SEAUX"))), /*#__PURE__*/React.createElement("div", {
    className: "link"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "link-navigation",
    to: "/contact"
  }, /*#__PURE__*/React.createElement("img", {
    className: "svg-contact",
    src: "./images/2.svg",
    alt: "Contact"
  }), /*#__PURE__*/React.createElement("span", null, "ME CONTACTER")))))));
};
var _default = /*#__PURE__*/(0, _react.memo)(HomePage);
exports["default"] = _default;