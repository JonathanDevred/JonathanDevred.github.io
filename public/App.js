"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./App.css");
var _reactRouterDom = require("react-router-dom");
var _HomePage = _interopRequireDefault(require("./pages/HomePage"));
var _ContactPage = _interopRequireDefault(require("./pages/ContactPage"));
var _ErrorPage = _interopRequireDefault(require("./pages/ErrorPage"));
var _ProjectsPage = _interopRequireDefault(require("./pages/ProjectsPage"));
var _ResumePage = _interopRequireDefault(require("./pages/ResumePage"));
var _ServicesPage = _interopRequireDefault(require("./pages/ServicesPage"));
var _AboutPage = _interopRequireDefault(require("./pages/AboutPage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/React.createElement(_HomePage["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/about",
    element: /*#__PURE__*/React.createElement(_AboutPage["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/contact",
    element: /*#__PURE__*/React.createElement(_ContactPage["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/projects",
    element: /*#__PURE__*/React.createElement(_ProjectsPage["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/cv",
    element: /*#__PURE__*/React.createElement(_ResumePage["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/services",
    element: /*#__PURE__*/React.createElement(_ServicesPage["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(_ErrorPage["default"], null)
  })));
}
var _default = App;
exports["default"] = _default;