"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("font-awesome/css/font-awesome.min.css");

require("./Rating.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = function (_Component) {
    _inherits(Rating, _Component);

    function Rating(props) {
        _classCallCheck(this, Rating);

        var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

        _this.__renderIcons = function () {
            var starArr = [];
            var style = _this.props.selectedIcon === "fa-star" ? " selectedStar" : "";
            var iconsInterval = _this.props.disabled ? "iconsIntervalDisabled" : "iconsInterval";

            for (var i = 1; i < _this.props.iconCount + 1; i++) {
                var className = _this.__convertClickedIconToText(i);
                if (_this.__checkFloatInterval() && parseInt(_this.state.selectedKey) === i - 1) {
                    starArr.push(_react2.default.createElement(
                        "span",
                        { key: i, className: iconsInterval + style, style: _this.props.style },
                        _react2.default.createElement("i", { className: "fa fa-star-half-o " + _this.__convertSizeToText(), "aria-hidden": "true", data: i })
                    ));
                } else {
                    starArr.push(_react2.default.createElement(
                        "span",
                        { key: i, className: iconsInterval + style, style: _this.props.style },
                        _react2.default.createElement("i", { className: "fa " + className,
                            onMouseOver: !_this.props.disabled ? _this.__onMouseOver : null,
                            onMouseLeave: !_this.props.disabled ? _this.__onMouseLeave : null,
                            "aria-hidden": "true", data: i,
                            onClick: !_this.props.disabled ? _this.__handleClick : null })
                    ));
                }
            }

            return starArr;
        };

        _this.__onMouseOver = function (e) {
            var key = e.target.getAttribute("data");
            e.target.value = key;
            e.target.parsedValue = parseInt(key);
            if (_this.state.selectedKey === "") _this.setState({ hoveredKey: key });

            if (_this.props.onMouseOver) _this.props.onMouseOver(e);
        };

        _this.__onMouseLeave = function () {
            if (_this.state.selectedKey === "") _this.setState({ hoveredKey: "" });else _this.setState({ hoveredKey: _this.state.selectedKey });
        };

        _this.__handleClick = function (e) {
            var key = e.target.getAttribute("data");
            e.target.value = key;
            e.target.parsedValue = parseInt(key);
            _this.setState({ selectedKey: key, hoveredKey: key });

            if (_this.props.onChange) _this.props.onChange(e);
        };

        _this.__checkFloatInterval = function () {
            var check = false;
            var value = _this.state.selectedKey;
            var disabled = _this.props.disabled;
            var icon = _this.props.selectedIcon === "fa-star";
            if (_this.__isFloat(value) && disabled && icon) {
                var splittedValue = value.toFixed(2).split(".")[1];
                if (parseInt(splittedValue) >= 25 && parseInt(splittedValue) <= 99) check = true;
            }

            return check;
        };

        _this.__convertClickedIconToText = function (i) {
            var key = _this.state.hoveredKey || "";
            var initialIcon = _this.props.initialIcon;
            var selectedIcon = _this.props.selectedIcon;
            var sizeText = _this.__convertSizeToText();

            if (key === "") return initialIcon + sizeText;else {
                if (key < i) return initialIcon + sizeText;else return selectedIcon + sizeText;
            }
        };

        _this.__convertSizeToText = function () {
            var size = _this.props.size;
            switch (size) {
                case 0:
                    return " fa-lg";
                case 1:
                    return " fa-2x";
                case 2:
                    return " fa-3x";
                case 3:
                    return " fa-4x";
                case 4:
                    return " fa-5x";
                default:
                    return " fa-lg";
            }
        };

        _this.id = "Rating-" + Rating.idCounter;
        Rating.idCounter++;
        _this.state = {
            selectedKey: _this.props.currentValue || "",
            hoveredKey: _this.props.currentValue || ""
        };
        return _this;
    }

    /**
     * defaultProps
     * @static
     */


    _createClass(Rating, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "span",
                { id: this.id },
                this.props.label ? _react2.default.createElement(
                    "span",
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.ControlLabel,
                        null,
                        this.props.label
                    ),
                    _react2.default.createElement("br", null)
                ) : null,
                this.__renderIcons()
            );
        }
    }, {
        key: "__isFloat",
        value: function __isFloat(n) {
            return Number(n) === n && n % 1 !== 0;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.currentValue && nextProps.disabled) this.setState({
                selectedKey: nextProps.currentValue,
                hoveredKey: nextProps.currentValue
            });
        }
    }]);

    return Rating;
}(_react.Component);

Rating.propTypes = {
    /**
     * Size of Rating icons
     */
    size: _propTypes2.default.oneOf([0, 1, 2, 3, 4]),
    /**
     * Direct selected value
     */
    currentValue: _propTypes2.default.number,
    /**
     * Count of icons
     */
    iconCount: _propTypes2.default.number,
    /**
     * Initial icon type (Works with font-awesome icons like "fa-star-o")
     */
    initialIcon: _propTypes2.default.string,
    /**
     * Selected icon type (Works with font-awesome icons like "fa-star")
     */
    selectedIcon: _propTypes2.default.string,
    /**
     * Disable icons
     */
    disabled: _propTypes2.default.bool,
    /**
     * Change event for the component (Returns (clickedKey))
     */
    onChange: _propTypes2.default.func,
    /**
     * MouseOver event for the component (Returns (hoveredKey))
     */
    onMouseOver: _propTypes2.default.func,
    /**
     * Style of Rating icons
     */
    style: _propTypes2.default.object,
    /**
     * Label for Rating component
     */
    label: _propTypes2.default.string
};
Rating.defaultProps = {
    size: 0,
    iconCount: 10,
    initialIcon: "fa-star-o",
    selectedIcon: "fa-star",
    disabled: false
};
Rating.idCounter = 1;
exports.default = Rating;