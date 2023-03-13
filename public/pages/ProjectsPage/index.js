"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _Header = _interopRequireDefault(require("../../components/Header/Header"));
var _framerMotion = require("framer-motion");
var _motion = _interopRequireDefault(require("./motion.config"));
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ProjectsPage = function ProjectsPage() {
  return /*#__PURE__*/React.createElement(_framerMotion.motion.section, _extends({
    className: "container project"
  }, _motion["default"].containerAnimation), /*#__PURE__*/React.createElement("div", {
    className: "header-regular"
  }, /*#__PURE__*/React.createElement(_Header["default"], {
    title: "MES PROJETS"
  })), /*#__PURE__*/React.createElement("div", {
    className: "general"
  }, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("p", {
    className: "subtitle"
  }, "Vous retrouverez ici les diff\xE9rents projets que j'aie pu mener, personnels ou non : "), /*#__PURE__*/React.createElement("section", {
    className: "general-section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "general-subtitle"
  }, "Projets termin\xE9s :"), /*#__PURE__*/React.createElement("div", {
    className: "projects-link"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("a", {
    href: "../../projects/IMC/index.html"
  }, /*#__PURE__*/React.createElement("img", {
    className: "project-img",
    src: "/images/imc.png",
    alt: "Projet IMC"
  }), /*#__PURE__*/React.createElement("p", {
    className: "link-text"
  }, "Calculateur d'IMC"))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("a", {
    href: "../../projects/Kultur'Kwizz/index.html"
  }, /*#__PURE__*/React.createElement("img", {
    className: "project-img",
    src: "/images/kultur.png",
    alt: "Projet Kultur'Kwizz"
  }), /*#__PURE__*/React.createElement("p", {
    className: "link-text"
  }, "Kultur'Kwizz"))))), /*#__PURE__*/React.createElement("section", {
    className: "general-section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "general-subtitle"
  }, "Projets en cours :"), /*#__PURE__*/React.createElement("div", {
    className: "projects-link"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("p", {
    className: "link-text"
  }, "La biblioth\xE8que fantastique de Maggie"), /*#__PURE__*/React.createElement("p", null, "Lien \xE0 venir")))))));
};
var _default = /*#__PURE__*/(0, _react.memo)(ProjectsPage);
exports["default"] = _default;