"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var defaultStyle = {
    width: '316px',
    'min-width': '316px',
    height: '250px',
    'min-height': '200px',
    border: '5px solid rgba(235, 235, 235, 0.54)',
    background: 'rgba(255, 255, 255, 0.5)',
    position: 'fixed',
    'z-index': 1000,
    top: '20px',
    right: '20px',
    'transform-origin': '100% 0',
    'box-sizing': 'border-box',
    transform: '',
};
var MockingFrogWrap = /** @class */ (function () {
    function MockingFrogWrap(scale, style) {
        this.style = defaultStyle;
        this.show = true;
        this.dom = document.createElement('div');
        this.style = style ? __assign({}, this.style, style) : this.style;
        this.scale = scale;
        this.style.transform = 'scale(' + this.scale + ')';
        this.style.width = localStorage.getItem('mocking_frog_wrap_width') || this.style.width;
        this.style.height = localStorage.getItem('mocking_frog_wrap_height') || this.style.height;
        this.style.top = localStorage.getItem('mocking_frog_wrap_top') || this.style.top;
        this.style.right = localStorage.getItem('mocking_frog_wrap_right') || this.style.right;
        util_1.applyStyle(this.dom, {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
        });
        this.content = document.createElement('div');
        util_1.applyStyle(this.content, {
            overflow: 'scroll',
            '-webkit-box-flex': 1,
        });
        this.dom.appendChild(this.content);
        this.updateStyle();
    }
    MockingFrogWrap.prototype.setVisibility = function (show) {
        this.show = show;
        this.dom.setAttribute('hide', show ? '0' : '1');
    };
    MockingFrogWrap.prototype.updateStyle = function () {
        var _this = this;
        localStorage.setItem('mocking_frog_wrap_width', this.style.width);
        localStorage.setItem('mocking_frog_wrap_height', this.style.height);
        localStorage.setItem('mocking_frog_wrap_top', this.style.top);
        localStorage.setItem('mocking_frog_wrap_right', this.style.right);
        Object.keys(this.style).forEach(function (v) {
            _this.dom.style[v] = _this.style[v];
        });
    };
    return MockingFrogWrap;
}());
exports.MockingFrogWrap = MockingFrogWrap;
