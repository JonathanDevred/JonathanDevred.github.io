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
var ServicesPage = function ServicesPage() {
  return /*#__PURE__*/React.createElement(_framerMotion.motion.section, _extends({
    className: "container services"
  }, _motion["default"].containerAnimation), /*#__PURE__*/React.createElement("div", {
    className: "header-regular"
  }, /*#__PURE__*/React.createElement(_Header["default"], {
    title: "MES SERVICES"
  })), /*#__PURE__*/React.createElement("div", {
    className: "general"
  }, /*#__PURE__*/React.createElement("main", {
    className: "general-main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "general-section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "general-subtitle"
  }, "Mes diff\xE9rentes prestations :"), /*#__PURE__*/React.createElement("p", {
    className: "services-text"
  }, "Cr\xE9ation de site Web et/ou Web Mobile."), /*#__PURE__*/React.createElement("p", {
    className: "services-text"
  }, "Revue de code (debug, optimisation SEO, algorithmique, architechture projet..)."), /*#__PURE__*/React.createElement("p", {
    className: "services-text"
  }, "Int\xE9gration de syst\xE8me tiers sur site/application."), /*#__PURE__*/React.createElement("p", {
    className: "services-subtext"
  }, "(Ajout d'un syst\xE8me de paiement, gestion de base de donn\xE9es, connexion via services tiers"), /*#__PURE__*/React.createElement("p", {
    className: "services-subtext"
  }, " (google, spotify..))."), /*#__PURE__*/React.createElement("p", {
    className: "services-text"
  }, "Conseil en UI/UX et design"), /*#__PURE__*/React.createElement("p", {
    className: "services-subtext"
  }, "(optimisation exp\xE9rience utilisateur et recherche de design..)."), /*#__PURE__*/React.createElement("p", {
    className: "services-text"
  }, "Maintenance de site"), /*#__PURE__*/React.createElement("p", {
    className: "services-subtext"
  }, "(Mise \xE0 jour de la s\xE9curit\xE9, des plugins du CMS...)."), /*#__PURE__*/React.createElement("p", {
    className: "services-text"
  }, "Les projets pouvant diff\xE9rer en terme de taille, de complexit\xE9, et de temps requis \xE0 sa r\xE9alisation,"), /*#__PURE__*/React.createElement("p", {
    className: "services-subtext"
  }, " les tarifs vous seront communiqu\xE9 apr\xE8s \xE9tablissement d'un devis personnalis\xE9."), /*#__PURE__*/React.createElement("p", {
    className: "services-text"
  }, "Ces services sont pr\xE9sent\xE9s \xE0 titre informatif, si vous avez un projet en t\xEAte qui ne figure pas sur la liste,"), /*#__PURE__*/React.createElement("p", {
    className: "services-subtext"
  }, "n'h\xE9sitez pas \xE0 me contacter afin que nous \xE9changions \xE0 ce sujet. Je suis ouvert \xE0 tout type de proposition.")))));
};
var _default = /*#__PURE__*/(0, _react.memo)(ServicesPage);
exports["default"] = _default;