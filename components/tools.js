"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Tools = /*#__PURE__*/function (_React$Component) {
  _inherits(Tools, _React$Component);

  var _super = _createSuper(Tools);

  function Tools(props) {
    var _this;

    _classCallCheck(this, Tools);

    _this = _super.call(this);
    _this.state = {
      text: []
    };
    _this.allCaps = _this.allCaps.bind(_assertThisInitialized(_this));
    _this.allLows = _this.allLows.bind(_assertThisInitialized(_this));
    _this.upperFirst = _this.upperFirst.bind(_assertThisInitialized(_this));
    _this.reverseText = _this.reverseText.bind(_assertThisInitialized(_this));
    _this.copyText = _this.copyText.bind(_assertThisInitialized(_this));
    _this.clearText = _this.clearText.bind(_assertThisInitialized(_this));
    return _this;
  } // Convert to all to uppercase


  _createClass(Tools, [{
    key: "allCaps",
    value: function allCaps() {
      if (this.nameTextInput !== null) {
        this.setState({
          text: this.nameTextInput.value.toUpperCase()
        });
      }
    } // Convert to all to lowercase

  }, {
    key: "allLows",
    value: function allLows() {
      if (this.nameTextInput !== null) {
        this.setState({
          text: this.nameTextInput.value.toLocaleLowerCase()
        });
      }
    } // Convert the first char in every word to uppercase

  }, {
    key: "upperFirst",
    value: function upperFirst() {
      if (this.nameTextInput !== null) {
        var capitalizeFirstLetters = function capitalizeFirstLetters(str) {
          return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
            return letter.toUpperCase();
          });
        };

        var string = this.nameTextInput.value;
        this.setState({
          text: capitalizeFirstLetters(string)
        });
      }
    } // Reverse text abc to cba

  }, {
    key: "reverseText",
    value: function reverseText() {
      if (this.nameTextInput !== null) {
        this.setState({
          text: this.nameTextInput.value.split('').reverse().join('')
        });
      }
    } // Copy text to clipboard

  }, {
    key: "copyText",
    value: function copyText() {
      if (this.nameTextOutput !== null) {
        this.nameTextOutput.select();
        document.execCommand('copy');
      }
    } // Clear the output text

  }, {
    key: "clearText",
    value: function clearText() {
      if (this.nameTextOutput !== null) {
        this.setState({
          text: ''
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "bg-gray-100"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "max-w-7xl mx-auto py-12 sm:px-6 lg:px-8"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "max-w-4xl mx-auto"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "bg-white shadow overflow-hidden sm:rounded-lg"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "px-4 py-5 border-b border-gray-200 sm:px-6"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "w-10 mb-5",
        src: "src/assets/img/logo.png"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "pl-3 pr-4 py-3 justify-center text-sm leading-5"
      }, /*#__PURE__*/_react["default"].createElement("textarea", {
        type: "text",
        placeholder: "Input ... ",
        ref: function ref(_ref) {
          return _this2.nameTextInput = _ref;
        },
        className: "transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-6 pl-8 block w-full h-32 appearance-none leading-normal border border-transparent rounded focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-200 bg-gray-200"
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-center"
      }, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
        onClick: this.allCaps
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "w-8 mr-2 ml-2",
        src: "src/assets/img/a-A.png"
      })), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
        onClick: this.allLows
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "w-8 mr-2 ml-2",
        src: "src/assets/img/A-a.png"
      })), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
        onClick: this.upperFirst
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "w-20",
        src: "src/assets/img/abc-Abc.png"
      })), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: this.reverseText,
        className: "m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "w-20",
        src: "src/assets/img/abc-cba.png"
      }))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("textarea", {
        type: "text",
        placeholder: "Output ... ",
        ref: function ref(_ref2) {
          return _this2.nameTextOutput = _ref2;
        },
        value: this.state.text,
        className: "transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-6 pl-8 block w-full h-32 appearance-none leading-normal border border-transparent rounded focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-200 bg-gray-200"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-center"
      }, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "m-1 bg-white hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
        onClick: this.copyText
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-center"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "w-5 mr-2",
        src: "src/assets/img/copy.png"
      }), "Copy")), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "m-1 bg-white hover:bg-red-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
        onClick: this.clearText
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-center"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "w-5 mr-2",
        src: "src/assets/img/trash.png"
      }), "Clear"))))))));
    }
  }]);

  return Tools;
}(_react["default"].Component);

var _default = Tools;
exports["default"] = _default;