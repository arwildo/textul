"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./styles.css");

var _tools = _interopRequireDefault(require("./components/tools"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Index = function Index() {
  return /*#__PURE__*/_react["default"].createElement(_tools["default"], null);
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Index, null), document.getElementById('index'));