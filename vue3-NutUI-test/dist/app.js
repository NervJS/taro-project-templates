require("./runtime");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createForOfIteratorHelper; });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/nutui.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/nutui.es.js ***!
  \*********************************************************/
/*! exports provided: default, ActionSheet, Address, Avatar, BackTop, Button, Calendar, Cell, Checkbox, Collapse, DatePicker, Dialog, Drag, Icon, InfiniteLoading, Input, InputNumber, Layout, Navbar, Notify, OverLay, Picker, Popup, Price, Radio, Range, Rate, ShortPassword, Steps, Swiper, Switch, Tabbar, TextArea, Toast, Uploader */
/*! exports used: Button, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, Element, window) {/* unused harmony export ActionSheet */
/* unused harmony export Address */
/* unused harmony export Avatar */
/* unused harmony export BackTop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Z; });
/* unused harmony export Calendar */
/* unused harmony export Cell */
/* unused harmony export Checkbox */
/* unused harmony export Collapse */
/* unused harmony export DatePicker */
/* unused harmony export Dialog */
/* unused harmony export Drag */
/* unused harmony export Icon */
/* unused harmony export InfiniteLoading */
/* unused harmony export Input */
/* unused harmony export InputNumber */
/* unused harmony export Layout */
/* unused harmony export Navbar */
/* unused harmony export Notify */
/* unused harmony export OverLay */
/* unused harmony export Picker */
/* unused harmony export Popup */
/* unused harmony export Price */
/* unused harmony export Radio */
/* unused harmony export Range */
/* unused harmony export Rate */
/* unused harmony export ShortPassword */
/* unused harmony export Steps */
/* unused harmony export Swiper */
/* unused harmony export Switch */
/* unused harmony export Tabbar */
/* unused harmony export TextArea */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return We; });
/* unused harmony export Uploader */
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__);









var e = Object.defineProperty,
    t = Object.defineProperties,
    l = Object.getOwnPropertyDescriptors,
    a = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable,
    s = function s(t, l, a) {
  return l in t ? e(t, l, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
  }) : t[l] = a;
},
    i = function i(e, t) {
  for (var l in t || (t = {})) {
    n.call(t, l) && s(e, l, t[l]);
  }

  if (a) {
    var _iterator = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(a(t)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var l = _step.value;
        o.call(t, l) && s(e, l, t[l]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return e;
},
    c = function c(e, a) {
  return t(e, l(a));
}
/*!
* @nutui/nutui-taro v3.0.3 Wed Jul 07 2021 14:27:15 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/
;





function J(e) {
  var t = "nut-" + e;
  return {
    componentName: t,
    create: function create(l) {
      return l.baseName = e, l.name = t, l.install = function (e) {
        var t;
        e.component(l.name, l), (null == (t = null == l ? void 0 : l.children) ? void 0 : t.length) && (null == l || l.children.forEach(function (t) {
          e.component(t.name, t);
        }));
      }, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* defineComponent */ "l"])(l);
    },
    createDemo: function createDemo(t) {
      return t.baseName = e, t.name = "demo-" + e, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* defineComponent */ "l"])(t);
    }
  };
}

var _J = J("button"),
    G = _J.componentName,
    K = _J.create;

var Z = K({
  props: {
    color: String,
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup: function setup(e, _ref) {
    var t = _ref.emit,
        l = _ref.slots;

    var _u = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e),
        a = _u.type,
        n = _u.size,
        o = _u.shape,
        s = _u.disabled,
        i = _u.loading,
        c = _u.color,
        r = _u.plain,
        p = _u.block;

    return {
      handleClick: function handleClick(e) {
        i.value || s.value || t("click", e);
      },
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        var _ref2;

        var e = G;
        return _ref2 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, e, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "".concat(e, "--").concat(a.value), a.value), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "".concat(e, "--").concat(n.value), n.value), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "".concat(e, "--").concat(o.value), o.value), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "".concat(e, "--plain"), r.value), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "".concat(e, "--block"), p.value), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "".concat(e, "--disabled"), s.value), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, "".concat(e, "--loading"), i.value), _ref2;
      }),
      getStyle: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        var e;
        var t = {};
        return (null == c ? void 0 : c.value) && (r.value ? (t.color = c.value, t.background = "#fff", (null == (e = c.value) ? void 0 : e.includes("gradient")) || (t.borderColor = c.value)) : (t.color = "#fff", t.background = c.value)), t;
      })
    };
  }
});
var ee = {
  class: "nut-button__warp"
};

Z.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes,
    style: e.getStyle,
    onClick: t[1] || (t[1] = function () {
      return e.handleClick && e.handleClick.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", ee, [e.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 0,
    class: "nut-icon-loading"
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.icon && !e.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 1,
    class: e.icon,
    name: e.icon
  }, null, 8, ["class", "name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.$slots.default ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 2,
    class: {
      text: e.icon || e.loading
    }
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)])], 6);
};

var _J2 = J("cell-group"),
    te = _J2.componentName,
    le = _J2.create;

var ae = le({
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup: function setup() {
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, te, !0);
      })
    };
  }
});
var ne = {
  key: 0,
  class: "nut-cell-group__title"
},
    oe = {
  class: "nut-cell-group__warp"
};

ae.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [e.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", ne, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", oe, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")])], 2);
};

var _J3 = J("cell"),
    se = _J3.componentName,
    ie = _J3.create;

var ce = ie({
  children: [ae],
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    descTextAlign: {
      type: String,
      default: "right"
    },
    isLink: {
      type: Boolean,
      default: !1
    },
    to: {
      type: String,
      default: ""
    },
    replace: {
      type: Boolean,
      default: !1
    },
    url: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  components: Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, ae.name, ae),
  setup: function setup(e, _ref4) {
    var t = _ref4.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref5;

      return _ref5 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, se, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref5, "".concat(se, "--clickable"), e.isLink || e.to), _ref5;
    }),
        a = Object(vue_router__WEBPACK_IMPORTED_MODULE_12__[/* useRouter */ "a"])();
    return {
      handleClick: function handleClick(l) {
        t("click", l), e.to && a ? a[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      },
      classes: l
    };
  }
});
var re = {
  class: "title"
},
    ue = {
  class: "nut-cell__title-desc"
};

ce.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes,
    onClick: t[1] || (t[1] = function () {
      return e.handleClick && e.handleClick.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default", {}, function () {
    return [e.title || e.subTitle || e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
      key: 0,
      class: ["nut-cell__title", {
        icon: e.icon
      }]
    }, [e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
      key: 0,
      class: "icon",
      name: e.icon
    }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.subTitle ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", re, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", ue, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.subTitle), 1)], 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
      key: 2
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)], 64))], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.desc ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
      key: 1,
      class: "nut-cell__value",
      style: {
        "text-align": e.descTextAlign
      }
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.desc), 5)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.$slots.link ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "link", {
      key: 2
    }) : e.isLink || e.to ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
      key: 3,
      class: "nut-cell__link",
      name: "right"
    })) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)];
  })], 2);
};

var de = function de(e) {
  return isNaN(Number(e)) ? String(e) : "".concat(e, "px");
},
    _J4 = J("icon"),
    pe = _J4.componentName,
    me = _J4.create;

var ye = me({
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nutui-iconfont"
    },
    color: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: "i"
    }
  },
  emits: ["click"],
  setup: function setup(e, _ref6) {
    var t = _ref6.emit,
        l = _ref6.slots;

    var a = function a(e) {
      t("click", e);
    };

    return function () {
      var t;
      var n = !!e.name && -1 !== e.name.indexOf("/");
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])(n ? "img" : e.tag, {
        class: n ? "".concat(pe, "__img") : "".concat(e.classPrefix, " ").concat(pe, " ").concat(pe, "-").concat(e.name),
        style: {
          color: e.color,
          fontSize: de(e.size),
          width: de(e.size),
          height: de(e.size)
        },
        onClick: a,
        src: n ? e.name : ""
      }, null == (t = l.default) ? void 0 : t.call(l));
    };
  }
});

var _J5 = J("price"),
    ve = _J5.componentName,
    fe = _J5.create;

var ge = fe({
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    needSymbol: {
      type: Boolean,
      default: !0
    },
    symbol: {
      type: String,
      default: "&yen;"
    },
    decimalDigits: {
      type: Number,
      default: 2
    },
    thousands: {
      type: Boolean,
      default: !1
    }
  },
  setup: function setup(e) {
    var t = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, ve, !0);
    }),
        l = function l(e) {
      return e = (e = (e = (e = (e = (e = e.replace(/&quot;/g, '"')).replace(/&amp;/g, "&")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&nbsp;/g, " ")).replace(/&yen;/g, "￥");
    },
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return e.needSymbol ? l(e.symbol) : "";
    }),
        n = function n(e) {
      return String(e).indexOf(".") > 0;
    };

    return {
      classes: t,
      showSymbol: a,
      checkPoint: n,
      formatThousands: function formatThousands(t) {
        return 0 == Number(t) && (t = 0), t = n(t) ? "string" == typeof (t = Number(t).toFixed(e.decimalDigits)).split(".") ? t.split(".") : t.split(".")[0] : t.toString(), e.thousands ? (t || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : t;
      },
      formatDecimal: function formatDecimal(t) {
        0 == Number(t) && (t = 0), t = n(t) ? "string" == typeof (t = Number(t).toFixed(e.decimalDigits)).split(".") ? 0 : t.split(".")[1] : t.toString();
        var l = Number("0." + t).toFixed(e.decimalDigits);
        return String(l).substring(2, l.length);
      },
      replaceSpecialChar: l
    };
  }
});
var he = {
  class: "nut-price--big"
},
    be = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
  class: "nut-price--point"
}, ".", -1),
    ke = {
  class: "nut-price--small"
};

ge.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [e.needSymbol ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 0,
    class: "nut-price--symbol",
    decode: "true",
    innerHTML: e.showSymbol
  }, null, 8, ["innerHTML"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", he, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.formatThousands(e.price)), 1), be, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", ke, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.formatDecimal(e.price)), 1)], 2);
};

var _J6 = J("avatar"),
    we = _J6.componentName,
    Se = _J6.create;

var Ce = Se({
  props: {
    size: {
      type: String,
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["active-avatar"],
  setup: function setup(e, _ref8) {
    var t = _ref8.emit,
        l = _ref8.slots;

    var _u2 = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e),
        a = _u2.size,
        n = _u2.shape,
        o = _u2.bgColor,
        s = _u2.icon,
        i = ["large", "normal", "small"];

    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        var _ref9;

        return _ref9 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref9, we, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref9, "avatar-" + a.value, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref9, "avatar-" + n.value, !0), _ref9;
      }),
      styles: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return {
          width: i.indexOf(a.value) > -1 ? "" : "".concat(a.value, "px"),
          height: i.indexOf(a.value) > -1 ? "" : "".concat(a.value, "px"),
          backgroundColor: "".concat(o.value)
        };
      }),
      iconStyles: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return s.value ? s.value : "";
      }),
      isShowText: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return l.default;
      }),
      activeAvatar: function activeAvatar(e) {
        t("active-avatar", e);
      }
    };
  }
});
var xe = {
  key: 0,
  class: "text"
};

Ce.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    style: e.styles,
    class: e.classes,
    onClick: t[1] || (t[1] = function (t) {
      return e.activeAvatar(e.e);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
    class: "icon",
    name: e.iconStyles
  }, null, 8, ["name"]), e.isShowText ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", xe, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 6);
};

var De = 0;

var Te = function Te(e) {
  return [function () {
    e() && (!De && document.body.classList.add("nut-overflow-hidden"), De++);
  }, function () {
    e() && De && (De--, !De && document.body.classList.remove("nut-overflow-hidden"));
  }];
},
    _J7 = J("overlay"),
    Ne = _J7.componentName,
    _e = _J7.create,
    Ie = {
  visible: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: .3
  },
  overlayClass: {
    type: String,
    default: ""
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  overlayStyle: {
    type: Object
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  }
};

var $e = _e({
  props: Ie,
  emits: ["click", "update:visible"],
  setup: function setup(e, _ref10) {
    var t = _ref10.emit;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        var _ref11;

        return _ref11 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref11, Ne, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref11, e.overlayClass, !0), _ref11;
      }),
      style: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return i({
          animationDuration: "".concat(e.duration, "s"),
          zIndex: e.zIndex
        }, e.overlayStyle);
      }),
      touchmove: function touchmove(t) {
        e.lockScroll && t.preventDefault();
      },
      onClick: function onClick(l) {
        t("click", l), e.closeOnClickOverlay && t("update:visible", !1);
      }
    };
  }
});

$e.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: "overlay-fade"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: e.classes,
        onTouchmove: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
          return e.touchmove && e.touchmove.apply(e, arguments);
        }, ["stop"])),
        onClick: t[2] || (t[2] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        }),
        style: e.style
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")], 38), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  });
};

var _J8 = J("popup"),
    Be = _J8.componentName,
    Ae = _J8.create;

var ze = 2e3;
var Oe = c(i({}, Ie), {
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  style: {
    type: Object
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  closeIcon: {
    type: String,
    default: "close"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  }
});
var Ve = Ae({
  children: [$e],
  components: {
    "nut-overlay": $e
  },
  props: i({}, Oe),
  emits: ["click", "click-close-icon", "open", "close", "opend", "closed", "update:visible", "click-overlay"],
  setup: function setup(e, _ref12) {
    var t = _ref12.emit;
    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "m"])();

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      zIndex: e.zIndex ? e.zIndex : ze,
      showSlot: !0,
      transitionName: "popup-fade-".concat(e.position),
      overLayCount: 1,
      keepAlive: !1
    }),
        _Te = Te(function () {
      return e.lockScroll;
    }),
        _Te2 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_Te, 2),
        a = _Te2[0],
        n = _Te2[1],
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref13;

      return _ref13 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref13, Be, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref13, "round", e.round), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref13, "popup-".concat(e.position), !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref13, e.popClass, !0), _ref13;
    }),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return i({
        zIndex: l.zIndex,
        animationDuration: e.duration ? "".concat(e.duration, "s") : "initial"
      }, e.style);
    }),
        r = function r() {
      e.visible || (void 0 !== e.zIndex && (ze = Number(e.zIndex)), t("update:visible", !0), a(), l.zIndex = ++ze), e.destroyOnClose && (l.showSlot = !0), t("open");
    },
        p = function p() {
      e.visible && (n(), t("update:visible", !1), e.destroyOnClose && setTimeout(function () {
        l.showSlot = !1, t("close");
      }, 1e3 * +e.duration));
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "w"])(function () {
      e.transition ? l.transitionName = e.transition : l.transitionName = "popup-slide-".concat(e.position), e.visible && r();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onBeforeUnmount */ "u"])(function () {
      e.visible && p();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onBeforeMount */ "t"])(function () {
      e.visible && n();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onActivated */ "s"])(function () {
      l.keepAlive && (t("update:visible", !0), l.keepAlive = !1);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onDeactivated */ "v"])(function () {
      e.visible && (p(), l.keepAlive = !0);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (e) {
      e ? r() : p();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.position;
    }, function (e) {
      l.transitionName = "center" === e ? "popup-fade" : "popup-slide-".concat(e);
    }), c(i({}, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(l)), {
      popStyle: s,
      classes: o,
      onClick: function onClick(e) {
        t("click", e);
      },
      onClickCloseIcon: function onClickCloseIcon(e) {
        t("click-close-icon", e), p();
      },
      onClickOverlay: function onClickOverlay(l) {
        e.closeOnClickOverlay && (t("click-overlay", l), p());
      },
      onOpened: function onOpened(e) {
        t("opend", e);
      },
      onClosed: function onClosed(e) {
        t("closed", e);
      }
    });
  }
});

Ve.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-overlay"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", null, [e.overlay ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 0,
    visible: e.visible,
    "close-on-click-overlay": e.closeOnClickOverlay,
    class: e.overlayClass,
    style: e.overlayStyle,
    "z-index": e.zIndex,
    "lock-scroll": e.lockScroll,
    duration: e.duration,
    onClick: e.onClickOverlay
  }, null, 8, ["visible", "close-on-click-overlay", "class", "style", "z-index", "lock-scroll", "duration", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: e.transitionName,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: e.classes,
        style: e.popStyle,
        onClick: t[2] || (t[2] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        })
      }, [e.showSlot ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default", {
        key: 0
      }) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.closeable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
        key: 1,
        onClick: t[1] || (t[1] = function () {
          return e.onClickCloseIcon && e.onClickCloseIcon.apply(e, arguments);
        }),
        class: ["nutui-popup__close-icon", "nutui-popup__close-icon--" + e.closeIconPosition]
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
        name: e.closeIcon,
        size: "12px"
      }, null, 8, ["name"])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 6), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])]);
};

var _J9 = J("row"),
    Pe = _J9.componentName,
    Le = _J9.create;

var Ee = Le({
  props: {
    type: {
      type: String,
      default: ""
    },
    gutter: {
      type: [String, Number],
      default: ""
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    wrap: {
      type: String,
      default: "nowrap"
    }
  },
  setup: function setup(e) {
    var t = Pe;
    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "A"])("gutter", e.gutter);

    var l = function l(e, t) {
      return e ? t ? "nut-row-".concat(e, "-").concat(t) : "" : "nut-row-".concat(t);
    };

    return {
      getClasses: function getClasses() {
        return "\n              ".concat(l("", e.type), "\n              ").concat(l("justify", e.justify), "\n              ").concat(l("align", e.align), "\n              ").concat(l("flex", e.wrap), "\n              ").concat(t, "\n              ");
      }
    };
  }
});

Ee.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.getClasses()
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")], 2);
};

var _J10 = J("col"),
    Me = _J10.componentName,
    Re = _J10.create;

var He = Re({
  props: {
    span: {
      type: [String, Number],
      default: "24"
    },
    offset: {
      type: [String, Number],
      default: "0"
    }
  },
  setup: function setup(e) {
    var t = Me,
        l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "p"])("gutter");
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        var _ref14;

        return _ref14 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref14, t, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref14, t + "-gutter", l), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref14, "nut-col-" + e.span, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref14, "nut-col-offset-" + e.offset, !0), _ref14;
      }),
      style: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return {
          paddingLeft: l / 2 + "px",
          paddingRight: l / 2 + "px"
        };
      })
    };
  }
});

He.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes,
    style: e.style
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")], 6);
};

var _J11 = J("layout"),
    Fe = _J11.create;

var je = Fe({
  children: [Ee, He]
});

var _J12 = J("icon"),
    Ye = _J12.componentName,
    qe = _J12.create;

var Xe = qe({
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nutui-iconfont"
    },
    color: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: "i"
    }
  },
  emits: ["click"],
  setup: function setup(e, _ref15) {
    var t = _ref15.emit,
        l = _ref15.slots;

    var a = function a(e) {
      t("click", e);
    };

    return function () {
      var t;
      var n = !!e.name && -1 !== e.name.indexOf("/");
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])(n ? "img" : e.tag, {
        class: n ? "".concat(Ye, "__img") : "".concat(e.classPrefix, " ").concat(Ye, " ").concat(Ye, "-").concat(e.name),
        style: {
          color: e.color,
          fontSize: de(e.size),
          width: de(e.size),
          height: de(e.size)
        },
        onClick: a,
        src: n ? e.name : ""
      }, null == (t = l.default) ? void 0 : t.call(l));
    };
  }
});

var _J13 = J("toast"),
    Ue = _J13.create,
    We = Ue({
  components: Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Xe.name, Xe),
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: Number,
      default: 30
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: String,
    textAlignCenter: {
      type: Boolean,
      default: !0
    },
    loadingRotate: {
      type: Boolean,
      default: !0
    },
    bgColor: {
      type: String,
      default: "rgba(0, 0, 0, .8)"
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: !1
    },
    coverColor: {
      type: String,
      default: "rgba(0, 0, 0, 0)"
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "closed"],
  setup: function setup(e, _ref16) {
    var t = _ref16.emit;
    var l;

    var a = function a() {
      l && (clearTimeout(l), l = null);
    },
        n = function n() {
      t("update:visible", !1), t("closed");
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (t) {
      t && (a(), e.duration && (l = setTimeout(function () {
        n();
      }, e.duration)));
    });
    var o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return "text" !== e.type || !!e.icon;
    }),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return e.icon ? e.icon : {
        success: "success",
        fail: "failure",
        warn: "tips",
        loading: "loading"
      }[e.type];
    }),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return ["nut-toast", {
        "nut-toast-center": e.center
      }, {
        "nut-toast-has-icon": o.value
      }, {
        "nut-toast-cover": e.cover
      }, {
        "nut-toast-loading": "loading" === e.type
      }, e.customClass, "nut-toast-" + e.size];
    });
    return {
      clickCover: function clickCover() {
        e.closeOnClickOverlay && n();
      },
      hasIcon: o,
      iconName: s,
      toastBodyClass: i,
      onAfterLeave: function onAfterLeave() {
        e.visible && (a(), n());
      }
    };
  }
}),
    Qe = {
  key: 0,
  class: "nut-toast-icon-wrapper"
};

We.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: e.toastBodyClass,
        style: {
          bottom: e.center ? "auto" : e.bottom + "px",
          "background-color": e.coverColor
        },
        onClick: t[1] || (t[1] = function () {
          return e.clickCover && e.clickCover.apply(e, arguments);
        })
      }, [e.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
        key: 1,
        class: "nut-toast-inner",
        style: {
          "text-align": e.textAlignCenter ? "center" : "left",
          "background-color": e.bgColor
        }
      }, [e.hasIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Qe, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
        size: "20",
        color: "#ffffff",
        name: e.iconName
      }, null, 8, ["name"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: "nut-toast-text",
        innerHTML: e.msg
      }, null, 8, ["innerHTML"])], 4))], 6), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  }, 8, ["onAfterLeave"]);
};

var _J14 = J("notify"),
    Je = _J14.componentName,
    Ge = _J14.create;

var Ke = Ge({
  components: Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Ve.name, Ve),
  props: {
    id: String,
    color: {
      type: String,
      default: ""
    },
    msg: {
      type: Number,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    },
    className: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "danger"
    },
    visible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "closed", "click"],
  setup: function setup(e, _ref17) {
    var t = _ref17.emit;
    var l = null;

    var a = function a() {
      l && (clearTimeout(l), l = null);
    },
        n = function n() {
      t("update:visible", !1), t("closed");
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (e) {
      e && o();
    });

    var o = function o() {
      a(), e.duration && (l = setTimeout(function () {
        n();
      }, e.duration));
    };

    return {
      hide: n,
      onAfterLeave: function onAfterLeave() {
        e.visible && (a(), n());
      },
      onClick: function onClick() {
        t("click");
      }
    };
  }
});

Ke.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: "nut-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: ["popup-top", "nut-notify", "nut-notify--".concat(e.type), {
          className: e.className
        }],
        style: {
          color: e.color,
          background: e.background
        },
        onClick: t[1] || (t[1] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        })
      }, [e.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
        key: 1
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.msg), 1)], 64))], 6), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  }, 8, ["onAfterLeave"]);
};

var _J15 = J("swiper-item"),
    Ze = _J15.create,
    et = _J15.componentName;

var tt = Ze({
  props: {},
  setup: function setup(e, _ref18) {
    var t = _ref18.slots;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, et, !0);
      })
    };
  }
});
var lt = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withScopeId */ "M"])("data-v-2087051a"),
    at = lt(function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("swiper-item");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    class: e.classes
  }, {
    default: lt(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default", {}, void 0, !0)];
    }),
    _: 3
  }, 8, ["class"]);
});
tt.render = at, tt.__scopeId = "data-v-2087051a";

var _J16 = J("swiper"),
    nt = _J16.create,
    ot = _J16.componentName;

var st = nt({
  inheritAttrs: !1,
  children: [tt],
  props: {},
  emits: [],
  setup: function setup(e, t) {
    return {
      attrs: t.attrs
    };
  }
});
var it = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withScopeId */ "M"])("data-v-1ac0e5fa"),
    ct = it(function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("swiper");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, e.attrs, {
    default: it(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default", {}, void 0, !0)];
    }),
    _: 3
  }, 16);
});
st.render = ct, st.__scopeId = "data-v-1ac0e5fa";

var _J17 = J("dialog"),
    rt = _J17.componentName,
    ut = _J17.create;

var dt = ut({
  inheritAttrs: !1,
  children: [Ve, Z],
  components: {
    "nut-popup": Ve,
    "nut-button": Z
  },
  props: c(i({}, Oe), {
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    noFooter: {
      type: Boolean,
      default: !1
    },
    noOkBtn: {
      type: Boolean,
      default: !1
    },
    noCancelBtn: {
      type: Boolean,
      default: !1
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    okText: {
      type: String,
      default: "确定"
    },
    okBtnDisabled: {
      type: Boolean,
      default: !1
    },
    cancelAutoClose: {
      type: Boolean,
      default: !0
    },
    textAlign: {
      type: String,
      default: "center"
    },
    onOk: {
      type: Function,
      default: null
    },
    onCancel: {
      type: Function,
      default: null
    },
    onClose: {
      type: Function,
      default: null
    },
    onClosed: {
      type: Function,
      default: null
    },
    closeOnPopstate: {
      type: Boolean,
      default: !1
    }
  }),
  emits: ["update", "update:visible", "ok", "cancel", "open", "opened", "close", "closed"],
  setup: function setup(e, _ref20) {
    var t = _ref20.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.visible);
    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "w"])(function () {
      e.closeOnPopstate && window.addEventListener("popstate", function () {
        n();
      });
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (e) {
      l.value = e;
    });

    var a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, rt, !0);
    }),
        n = function n() {
      var e;
      t("update", e = !1), t("update:visible", e), t("closed");
    };

    return {
      closed: n,
      classes: a,
      onCancel: function onCancel() {
        t("cancel"), e.cancelAutoClose && n();
      },
      onOk: function onOk() {
        n(), t("ok");
      },
      showPopup: l
    };
  }
});
var pt = {
  key: 0,
  class: "nut-dialog__header"
},
    mt = {
  key: 1,
  class: "nut-dialog__footer"
};

dt.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-button"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, {
    teleport: e.teleport,
    visible: e.showPopup,
    "onUpdate:visible": t[1] || (t[1] = function (t) {
      return e.showPopup = t;
    }),
    "close-on-click-overlay": e.closeOnClickOverlay,
    "lock-scroll": e.lockScroll,
    round: "",
    onClickOverlay: e.closed,
    onClickCloseIcon: e.closed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: e.classes
      }, [e.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", pt, [e.$slots.header ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "header", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
        key: 1
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)], 64))])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: "nut-dialog__content",
        style: {
          textAlign: e.textAlign
        }
      }, [e.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
        key: 1,
        innerHTML: e.content
      }, null, 8, ["innerHTML"]))], 4), e.noFooter ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", mt, [e.$slots.footer ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "footer", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
        key: 1
      }, [e.noCancelBtn ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
        key: 0,
        size: "small",
        plain: "",
        type: "primary",
        class: "nut-dialog__footer-cancel",
        onClick: e.onCancel
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.cancelText), 1)];
        }),
        _: 1
      }, 8, ["onClick"])), e.noOkBtn ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
        key: 1,
        size: "small",
        type: "primary",
        class: ["nut-dialog__footer-ok", {
          disabled: e.okBtnDisabled
        }],
        disabled: e.okBtnDisabled,
        onClick: e.onOk
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.okText), 1)];
        }),
        _: 1
      }, 8, ["class", "disabled", "onClick"]))], 64))]))], 2)];
    }),
    _: 3
  }, 8, ["teleport", "visible", "close-on-click-overlay", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
};

var _J18 = J("backtop"),
    yt = _J18.componentName,
    vt = _J18.create;

var ft = vt({
  props: {
    height: {
      type: String,
      default: "100vh"
    },
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    zIndex: {
      type: Number,
      default: 10
    },
    distance: {
      type: Number,
      default: 200
    }
  },
  emits: ["click"],
  setup: function setup(e, _ref22) {
    var t = _ref22.emit;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      backTop: !1,
      scrollTop: 1
    }),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref23;

      return _ref23 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref23, yt, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref23, "show", l.backTop), _ref23;
    }),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return {
        right: "".concat(e.right, "px"),
        bottom: "".concat(e.bottom, "px"),
        zIndex: e.zIndex
      };
    });

    return c(i({}, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(l)), {
      classes: a,
      style: n,
      scroll: function scroll(t) {
        l.scrollTop = 2, l.backTop = t.detail.scrollTop >= e.distance;
      },
      click: function click(e) {
        l.scrollTop = 1, t("click", e);
      }
    });
  }
});

ft.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("scroll-view"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
    "scroll-y": !0,
    style: {
      height: e.height
    },
    onScroll: e.scroll,
    "scroll-top": e.scrollTop,
    "scroll-with-animation": "true"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "content")];
    }),
    _: 3
  }, 8, ["style", "onScroll", "scroll-top"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: e.classes,
    style: e.style,
    onClick: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.click && e.click.apply(e, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "icon", {}, function () {
    return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
      size: "19px",
      class: "nut-backtop-main",
      name: "top"
    })];
  })], 6)]);
};

var _J19 = J("overlay"),
    gt = _J19.componentName,
    ht = _J19.create,
    bt = {
  visible: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: .3
  },
  overlayClass: {
    type: String,
    default: ""
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  overlayStyle: {
    type: Object
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  }
};

var kt = ht({
  props: bt,
  emits: ["click", "update:visible"],
  setup: function setup(e, _ref24) {
    var t = _ref24.emit;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        var _ref25;

        return _ref25 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref25, gt, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref25, e.overlayClass, !0), _ref25;
      }),
      style: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return i({
          animationDuration: "".concat(e.duration, "s"),
          zIndex: e.zIndex
        }, e.overlayStyle);
      }),
      touchmove: function touchmove(t) {
        e.lockScroll && t.preventDefault();
      },
      onClick: function onClick(l) {
        t("click", l), e.closeOnClickOverlay && t("update:visible", !1);
      }
    };
  }
});

kt.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: "overlay-fade"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: e.classes,
        onTouchmove: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
          return e.touchmove && e.touchmove.apply(e, arguments);
        }, ["stop"])),
        onClick: t[2] || (t[2] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        }),
        style: e.style
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")], 38), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  });
};

var _J20 = J("popup"),
    wt = _J20.componentName,
    St = _J20.create;

var Ct = 2e3;
var xt = c(i({}, bt), {
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  style: {
    type: Object
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  closeIcon: {
    type: String,
    default: "close"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  }
});

St({
  children: [kt],
  components: {
    "nut-overlay": kt
  },
  props: i({}, xt),
  emits: ["click", "click-close-icon", "open", "close", "opend", "closed", "update:visible", "click-overlay"],
  setup: function setup(e, _ref26) {
    var t = _ref26.emit;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      zIndex: e.zIndex ? e.zIndex : Ct,
      showSlot: !0,
      transitionName: "popup-fade-".concat(e.position),
      overLayCount: 1,
      keepAlive: !1
    }),
        _Te3 = Te(function () {
      return e.lockScroll;
    }),
        _Te4 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_Te3, 2),
        a = _Te4[0],
        n = _Te4[1],
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref27;

      return _ref27 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref27, wt, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref27, "round", e.round), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref27, "popup-".concat(e.position), !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref27, e.popClass, !0), _ref27;
    }),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return i({
        zIndex: l.zIndex,
        animationDuration: e.duration ? "".concat(e.duration, "s") : "initial"
      }, e.style);
    }),
        r = function r() {
      e.visible || (void 0 !== e.zIndex && (Ct = Number(e.zIndex)), t("update:visible", !0), a(), l.zIndex = ++Ct), e.destroyOnClose && (l.showSlot = !0), t("open");
    },
        p = function p() {
      e.visible && (n(), t("update:visible", !1), e.destroyOnClose && setTimeout(function () {
        l.showSlot = !1, t("close");
      }, 1e3 * +e.duration));
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "w"])(function () {
      e.transition ? l.transitionName = e.transition : l.transitionName = "popup-slide-".concat(e.position), e.visible && r();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onBeforeUnmount */ "u"])(function () {
      e.visible && p();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onBeforeMount */ "t"])(function () {
      e.visible && n();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onActivated */ "s"])(function () {
      l.keepAlive && (t("update:visible", !0), l.keepAlive = !1);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onDeactivated */ "v"])(function () {
      e.visible && (p(), l.keepAlive = !0);
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (e) {
      e ? r() : p();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.position;
    }, function (e) {
      l.transitionName = "center" === e ? "popup-fade" : "popup-slide-".concat(e);
    }), c(i({}, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(l)), {
      popStyle: s,
      classes: o,
      onClick: function onClick(e) {
        t("click", e);
      },
      onClickCloseIcon: function onClickCloseIcon(e) {
        t("click-close-icon", e), p();
      },
      onClickOverlay: function onClickOverlay(l) {
        e.closeOnClickOverlay && (t("click-overlay", l), p());
      },
      onOpened: function onOpened(e) {
        t("opend", e);
      },
      onClosed: function onClosed(e) {
        t("closed", e);
      }
    });
  }
}).render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-overlay"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Teleport */ "c"], {
    to: e.teleport
  }, [e.overlay ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 0,
    visible: e.visible,
    "close-on-click-overlay": e.closeOnClickOverlay,
    class: e.overlayClass,
    style: e.overlayStyle,
    "z-index": e.zIndex,
    "lock-scroll": e.lockScroll,
    duration: e.duration,
    onClick: e.onClickOverlay
  }, null, 8, ["visible", "close-on-click-overlay", "class", "style", "z-index", "lock-scroll", "duration", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(vue__WEBPACK_IMPORTED_MODULE_11__[/* Transition */ "a"], {
    name: e.transitionName,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: e.classes,
        style: e.popStyle,
        onClick: t[2] || (t[2] = function () {
          return e.onClick && e.onClick.apply(e, arguments);
        })
      }, [e.showSlot ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default", {
        key: 0
      }) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.closeable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
        key: 1,
        onClick: t[1] || (t[1] = function () {
          return e.onClickCloseIcon && e.onClickCloseIcon.apply(e, arguments);
        }),
        class: ["nutui-popup__close-icon", "nutui-popup__close-icon--" + e.closeIconPosition]
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
        name: e.closeIcon,
        size: "12px"
      }, null, 8, ["name"])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 6), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.visible]])];
    }),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]);
};

var _J21 = J("actionsheet"),
    Dt = _J21.componentName,
    Tt = _J21.create,
    Nt = Tt({
  props: c(i({}, xt), {
    cancelTxt: {
      type: String,
      default: ""
    },
    optionTag: {
      type: String,
      default: "name"
    },
    optionSubTag: {
      type: String,
      default: "subname"
    },
    chooseTagValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ee0a24"
    },
    description: {
      type: String,
      default: ""
    },
    menuItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }),
  emits: ["cancel", "choose", "update:visible"],
  setup: function setup(e, _ref28) {
    var t = _ref28.emit;
    return {
      isHighlight: function isHighlight(t) {
        return e.chooseTagValue && e.chooseTagValue === t[e.optionTag] ? e.color : "#1a1a1a";
      },
      cancelActionSheet: function cancelActionSheet() {
        t("cancel"), t("update:visible", !1);
      },
      chooseItem: function chooseItem(e, l) {
        e.disable || (t("choose", e, l), t("update:visible", !1));
      },
      close: function close() {
        t("close"), t("update:visible", !1);
      },
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Dt, !0);
      })
    };
  }
}),
    _t = {
  class: "nut-actionsheet-panel"
},
    It = {
  key: 0,
  class: "nut-actionsheet-title"
},
    $t = {
  key: 1,
  class: "nut-actionsheet-item desc"
},
    Bt = {
  key: 2,
  class: "nut-actionsheet-menu"
},
    At = {
  class: "subdesc"
};

Nt.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
    "pop-class": "popclass",
    visible: e.visible,
    position: "bottom",
    round: "",
    onClickOverlay: e.close
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", _t, [e.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", It, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.description ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", $t, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.description), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.menuItems.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Bt, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.menuItems, function (t, l) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
          class: ["nut-actionsheet-item", {
            "nut-actionsheet-item-disabled": t.disable
          }],
          style: {
            color: e.isHighlight(t)
          },
          key: l,
          onClick: function onClick(a) {
            return e.chooseItem(t, l);
          }
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t[e.optionTag]), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", At, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t[e.optionSubTag]), 1)], 14, ["onClick"]);
      }), 128))])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.cancelTxt ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
        key: 3,
        class: "nut-actionsheet-cancel",
        onClick: t[1] || (t[1] = function () {
          return e.cancelActionSheet && e.cancelActionSheet.apply(e, arguments);
        })
      }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.cancelTxt), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)])];
    }),
    _: 1
  }, 8, ["visible", "onClickOverlay"])], 2);
};

var _J22 = J("infiniteloading"),
    zt = _J22.componentName,
    Ot = _J22.create;

var Vt = Ot({
  props: {
    hasMore: {
      type: Boolean,
      default: !0
    },
    threshold: {
      type: Number,
      default: 200
    },
    pullIcon: {
      type: String,
      default: "https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png"
    },
    pullTxt: {
      type: String,
      default: "松开刷新"
    },
    loadIcon: {
      type: String,
      default: "https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png"
    },
    loadTxt: {
      type: String,
      default: "加载中···"
    },
    loadMoreTxt: {
      type: String,
      default: "哎呀，这里是底部了啦"
    },
    useWindow: {
      type: Boolean,
      default: !0
    },
    containerId: {
      type: String,
      default: ""
    },
    useCapture: {
      type: Boolean,
      default: !1
    },
    isOpenRefresh: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scroll-change", "load-more", "refresh"],
  components: {
    "nut-icon": ye
  },
  setup: function setup(e, _ref30) {
    var t = _ref30.emit,
        l = _ref30.slots;

    var a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      scrollHeight: 0,
      scrollTop: 0,
      isInfiniting: !1,
      direction: "down",
      isTouching: !1,
      refreshMaxH: 0,
      y: 0,
      x: 0,
      distance: 0
    }),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, zt, !0);
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return {
        height: a.distance < 0 ? "0px" : "".concat(a.distance, "px"),
        transition: a.isTouching ? "height 0s cubic-bezier(0.25,0.1,0.25,1)" : "height 0.2s cubic-bezier(0.25,0.1,0.25,1)"
      };
    }),
        s = function s(t) {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().select(e.containerId ? "#".concat(e.containerId, " #").concat(t) : "#".concat(t));
    },
        r = function r() {
      a.isInfiniting = !1;
    },
        p = function p() {
      a.distance = 0, a.isTouching = !1;
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "w"])(function () {
      setTimeout(function () {
        s("scroller").boundingClientRect(function (e) {
          a.scrollHeight = e.height;
        }).exec();
      }, 200);
    }), c(i({
      classes: n
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(a)), {
      lower: function lower() {
        if ("up" == a.direction || !e.hasMore || a.isInfiniting) return !1;
        a.isInfiniting = !0, t("load-more", r);
      },
      scroll: function scroll(e) {
        e.detail.scrollTop <= 0 ? e.detail.scrollTop = 0 : e.detail.scrollTop >= a.scrollHeight && (e.detail.scrollTop = a.scrollHeight), e.detail.scrollTop > a.scrollTop || e.detail.scrollTop >= a.scrollHeight ? a.direction = "down" : a.direction = "up", a.scrollTop = e.detail.scrollTop, t("scroll-change", e.detail.scrollTop);
      },
      touchStart: function touchStart(t) {
        0 == a.scrollTop && !a.isTouching && e.isOpenRefresh && (a.y = t.touches[0].pageY, a.isTouching = !0, s("refreshTop").boundingClientRect(function (e) {
          a.refreshMaxH = Math.floor(1 * e.height + 10);
        }).exec());
      },
      touchMove: function touchMove(e) {
        a.distance = e.touches[0].pageY - a.y, a.distance > 0 && a.isTouching ? (e.preventDefault(), a.distance >= a.refreshMaxH && (a.distance = a.refreshMaxH)) : (a.distance = 0, a.isTouching = !1);
      },
      touchEnd: function touchEnd() {
        a.distance < a.refreshMaxH ? a.distance = 0 : t("refresh", p);
      },
      getStyle: o
    });
  }
});

Vt.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("view-block"),
      c = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("scroll-view");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(c, {
    class: e.classes,
    scrollY: "true",
    style: {
      height: "100%"
    },
    id: "scroller",
    onScrolltolower: e.lower,
    onScroll: e.scroll,
    onTouchstart: e.touchStart,
    onTouchmove: e.touchMove,
    onTouchend: e.touchEnd
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
        class: "nut-infinite-top",
        style: e.getStyle
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
            class: "top-box",
            id: "refreshTop"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
                class: "top-img",
                name: e.pullIcon
              }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
                class: "top-text"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.pullTxt), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["style"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
        class: "nut-infinite-container"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")];
        }),
        _: 3
      }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
        class: "nut-infinite-bottom"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
          return [e.isInfiniting ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, {
            key: 0,
            class: "bottom-box"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
                class: "bottom-img",
                name: e.loadIcon
              }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
                class: "bottom-text"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.loadTxt), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })) : e.hasMore ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, {
            key: 1,
            class: "tips"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.loadMoreTxt), 1)];
            }),
            _: 1
          }))];
        }),
        _: 1
      })];
    }),
    _: 1
  }, 8, ["class", "onScrolltolower", "onScroll", "onTouchstart", "onTouchmove", "onTouchend"]);
};

var _J23 = J("drag"),
    Pt = _J23.componentName,
    Lt = _J23.create;

var Et = Lt({
  props: {
    direction: {
      type: String,
      default: "all"
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    }
  },
  setup: function setup(e, _ref32) {
    var t = _ref32.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("all");
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "w"])(function () {
      "x" == e.direction && (l.value = "horizontal"), "y" == e.direction && (l.value = "vertical");
    }), {
      direction: l
    };
  }
});

Et.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("movable-view"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("movable-area");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
        style: {
          width: e.width + "px",
          height: e.height + "px"
        },
        direction: e.direction
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")];
        }),
        _: 3
      }, 8, ["style", "direction"])];
    }),
    _: 1
  });
};

var _J24 = J("step"),
    Mt = _J24.create,
    Rt = _J24.componentName;

var Ht = Mt({
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: "12px"
    }
  },
  setup: function setup(e, _ref33) {
    var t = _ref33.emit,
        l = _ref33.slots;

    var _N = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "m"])(),
        a = _N.proxy,
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "p"])("parent");

    n.relation(a);

    var o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      dot: n.props.progressDot
    }),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return n.state.children.indexOf(a) + 1;
    }),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return function () {
        var e = s.value;
        return e < +n.props.current ? "finish" : e === +n.props.current ? "process" : "wait";
      }();
    }),
        p = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref34;

      return _ref34 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref34, Rt, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref34, "".concat(Rt, "-").concat(r.value), !0), _ref34;
    });

    return c(i({}, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(o)), {
      index: s,
      classes: p
    });
  }
});
var Ft = {
  class: "nut-step-head"
},
    jt = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
  class: "nut-step-line"
}, null, -1),
    Yt = {
  key: 2,
  class: "nut-step-inner"
},
    qt = {
  class: "nut-step-main"
},
    Xt = {
  class: "nut-step-title"
};

Ht.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Ft, [jt, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: ["nut-step-icon", [e.dot ? "" : e.icon ? "is-icon" : "is-text"]]
  }, [e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 0,
    class: "nut-step-icon-inner",
    name: e.icon,
    size: e.size
  }, null, 8, ["name", "size"])) : e.dot ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 1
  }, [], 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Yt, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.index), 1))], 2)]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", qt, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Xt, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1), e.content ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 0,
    class: "nut-step-content",
    innerHTML: e.content
  }, null, 8, ["innerHTML"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)])], 2);
};

var _J25 = J("steps"),
    Ut = _J25.create,
    Wt = _J25.componentName;

var Qt = Ut({
  children: [Ht],
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    current: {
      type: [String, Number],
      default: "0"
    },
    progressDot: {
      type: Boolean,
      default: !1
    }
  },
  setup: function setup(e, _ref35) {
    var t = _ref35.emit,
        l = _ref35.slots;

    var a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      children: []
    }),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref36;

      var t = Wt;
      return _ref36 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref36, t, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref36, "".concat(t, "-").concat(e.direction), !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref36, "".concat(t, "-dot"), !!e.progressDot), _ref36;
    });

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "A"])("parent", {
      relation: function relation(e) {
        e && a.children.push(e);
      },
      state: a,
      props: e
    }), function () {
      var e;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])("view", {
        class: n.value
      }, null == (e = l.default) ? void 0 : e.call(l));
    };
  }
});

var _J26 = J("collapse-item"),
    Jt = _J26.create,
    Gt = _J26.componentName;

var Kt = Jt({
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    name: {
      type: [Number, String],
      default: -1,
      required: !0
    },
    collapseRef: {
      type: Object
    }
  },
  setup: function setup(e) {
    var t = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "p"])("collapseParent"),
        l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])(t),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref37;

      return _ref37 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref37, Gt, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref37, "".concat(Gt, "-icon"), a.props.icon), _ref37;
    });

    var o;
    (o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "m"])()).proxy && a.children.push(o.proxy);

    var s = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      icon: a.props.icon,
      iconSize: a.props.iconSize,
      iconColor: a.props.iconColor,
      openExpanded: null,
      iconStyle: {
        transform: "rotate(0deg)",
        marginTop: a.props.iconHeght ? "-" + a.props.iconHeght / 2 + "px" : "-10px"
      }
    }),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      titleIcon: a.props.titleIcon,
      titleIconSize: a.props.titleIconSize,
      titleIconColor: a.props.titleIconColor,
      titleIconPosition: a.props.titleIconPosition
    }),
        p = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        m = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        y = function y() {
      a.props.icon && !s.openExpanded ? s.iconStyle.transform = "rotate(0deg)" : s.iconStyle.transform = "rotate(" + a.props.rotate + "deg)", Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* nextTick */ "r"])(function () {
        var e = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
        e.selectAll(".collapse-content").boundingClientRect(), e.exec(function (e) {
          b();
        }), s.openExpanded || Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* nextTick */ "r"])(function () {
          a.children.forEach(function (e, t) {
            e.$el.children.forEach(function (e, t) {
              e.className.includes("collapse-wrapper") && (e.style.willChange = "auto");
            });
          });
        });
      });
    },
        v = function v() {
      s.openExpanded = !s.openExpanded, y();
    },
        f = function f() {
      v(), a.props.icon && (s.iconStyle.transform = "rotate(" + a.props.rotate + "deg)");
    },
        g = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return e.name;
    }),
        h = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return a ? a.isExpanded(e.name) : null;
    });

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(h, function (e, t) {
      e && (s.openExpanded = !0);
    });

    var b = function b() {
      a.children.forEach(function (e, t) {
        e.$el.children.forEach(function (t, l) {
          t.children.length > 0 && t.children.forEach(function (t, l) {
            var a;

            if (w.includes(t.uid)) {
              var _l2 = null == (a = k.filter(function (e) {
                return e.id == t.uid;
              })[0]) ? void 0 : a.height;

              e.conHeight = _l2;
            }
          });
        });
      });
    };

    var k = [],
        w = [];
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "w"])(function () {
      var t = e.name,
          l = a && a.props.active;
      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["eventCenter"].once(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["getCurrentInstance"])().router.onReady, function () {
        var e = _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery();
        e.selectAll(".collapse-content").boundingClientRect(), e.exec(function (e) {
          k = e[0], k.forEach(function (e) {
            w.push(e.id);
          }), b();
        });
      }), "number" == typeof l || "string" == typeof l) t == l && f();else if (Object.values(l) instanceof Array) {
        Object.values(l).filter(function (e) {
          return e == t;
        }).length > 0 && f();
      }
    }), c(i(i(i({
      classes: n
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(s)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(a.props)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(r)), {
      conHeight: l,
      wrapperRef: p,
      contentRef: m,
      open: v,
      toggleOpen: function toggleOpen() {
        a.props.accordion ? (a.children.forEach(function (e, t) {
          g.value == e.name ? e.changeOpen(!e.openExpanded) : (e.changeOpen(!1), e.animation());
        }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* nextTick */ "r"])(function () {
          a.changeVal(g.value), y();
        })) : (a.changeValAry(e.name), v());
      },
      changeOpen: function changeOpen(e) {
        s.openExpanded = e;
      },
      animation: y
    });
  }
});
var Zt = {
  class: "collapse-title"
},
    el = {
  class: "collapse-title-value"
},
    tl = {
  class: "collapse-content",
  ref: "contentRef"
};

Kt.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: ["collapse-item", {
      "item-expanded": e.openExpanded
    }, {
      "nut-collapse-item-disabled": e.disabled
    }],
    onClick: t[1] || (t[1] = function () {
      return e.toggleOpen && e.toggleOpen.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Zt, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", el, [e.titleIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 0,
    name: e.titleIcon,
    size: e.titleIconSize,
    color: e.titleIconColor,
    class: ["collapse-title-icon", "left" == e.titleIconPosition ? "titleIconLeft" : "titleIconRight"]
  }, null, 8, ["name", "size", "color", "class"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    innerHTML: e.title,
    class: "collapse-icon-title"
  }, null, 8, ["innerHTML"])])])]), e.subTitle ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 0,
    innerHTML: e.subTitle,
    class: "subTitle"
  }, null, 8, ["innerHTML"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 1,
    name: e.icon,
    size: e.iconSize,
    color: e.iconColor,
    class: ["collapse-icon", {
      "col-expanded": e.openExpanded
    }, {
      "collapse-icon-disabled": e.disabled
    }],
    style: e.iconStyle
  }, null, 8, ["name", "size", "color", "class", "style"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 2), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: ["collapse-wrapper", e.openExpanded ? "open-style" : "close-style"],
    ref: "wrapperRef",
    style: {
      height: e.openExpanded ? e.conHeight + "px" : 0
    }
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", tl, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")], 512)], 6)], 2);
};

var _J27 = J("collapse"),
    ll = _J27.create;

var al = ll({
  children: [Kt],
  props: {
    active: {
      type: [String, Number, Array]
    },
    accordion: {
      type: Boolean
    },
    titleIcon: {
      type: String,
      default: ""
    },
    titleIconSize: {
      type: String,
      default: "16px"
    },
    titleIconColor: {
      type: String,
      default: ""
    },
    titleIconPosition: {
      type: String,
      default: "left"
    },
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "16px"
    },
    iconColor: {
      type: String,
      default: ""
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  emits: ["update:active", "change"],
  setup: function setup(e, _ref38) {
    var t = _ref38.emit,
        l = _ref38.slots;

    var a = function a(e) {
      t("update:active", e), t("change", e);
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "A"])("collapseParent", {
      children: [],
      props: e,
      changeValAry: function changeValAry(t) {
        var l = e.active instanceof Object ? Object.values(e.active) : e.active;
        var n = -1;
        l.forEach(function (e, l) {
          String(e) == String(t) && (n = l);
        }), n > -1 ? l.splice(n, 1) : l.push(t), a(l);
      },
      changeVal: a,
      isExpanded: function isExpanded(t) {
        var l = e.accordion,
            a = e.active;
        if (l) return ("number" == typeof a || "string" == typeof a) && a == t;
      },
      activeIndex: function activeIndex() {
        var t;
        var a = e.active,
            n = null == (t = l.default) ? void 0 : t.call(l);
        var o = [];
        return n.forEach(function (e, t) {
          if ("number" == typeof a || "string" == typeof a) {
            if (e.props.name == a) return o.push(e.flag), o;
          } else {
            var _t2 = Array.from(a);

            (_t2.includes(String(e.props.name)) || _t2.includes(Number(e.props.name))) && o.push(e.flag);
          }
        }), o;
      },
      getParentChildren: function getParentChildren() {
        var e;
        return null == (e = l.default) ? void 0 : e.call(l);
      }
    });
  }
});

al.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")]);
};

var _J28 = J("navbar"),
    nl = _J28.componentName,
    ol = _J28.create;

var sl = ol({
  props: {
    leftShow: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    titIcon: {
      type: String,
      default: ""
    },
    tabs: {
      type: Array,
      defaul: function defaul() {
        return [];
      }
    },
    icon: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["click", "on-click-back", "on-click-title", "on-click-right", "on-click-desc", "on-click-icon", "on-click-more", "on-click-clear", "on-click-send", "on-click-slot", "on-click-slot-send", "switch-tab"],
  setup: function setup(e, _ref39) {
    var t = _ref39.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.defaultIndex);
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, nl, !0);
      }),
      handleLeft: function handleLeft() {
        t("on-click-back");
      },
      handleCenter: function handleCenter() {
        t("on-click-title");
      },
      handleCenterIcon: function handleCenterIcon() {
        t("on-click-icon");
      },
      handleClear: function handleClear() {
        t("on-click-clear");
      },
      handleSend: function handleSend() {
        t("on-click-send");
      },
      handleSlot: function handleSlot() {
        t("on-click-slot");
      },
      handleSends: function handleSends() {
        t("on-click-slot-send");
      },
      switchTitle: function switchTitle(e, a) {
        l.value = e, console.log(e), t("switch-tab", l.value, a);
      },
      activeIndex: l
    };
  }
});
var il = {
  class: "nut-navbar__left"
},
    cl = {
  class: "tab-title"
};

sl.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", il, [e.leftShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 0,
    color: "#979797",
    name: "left",
    onClick: e.handleLeft
  }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)]), e.title || e.titIcon || e.tabs ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 0,
    class: ["nut-navbar__title", {
      icon: e.icon
    }]
  }, [e.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 0,
    class: "text__title",
    onClick: t[1] || (t[1] = function () {
      return e.handleCenter && e.handleCenter.apply(e, arguments);
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.titIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 1,
    class: "icon",
    name: e.titIcon,
    onClick: e.handleCenterIcon
  }, null, 8, ["name", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", cl, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.tabs, function (t, l) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
      class: ["tab-title-box", {
        "nut-tab-active": e.activeIndex == t.id || e.activeIndex == l
      }],
      onClick: function onClick(l) {
        return e.switchTitle(t.id, t.name);
      },
      key: t.id
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.name), 11, ["onClick"]);
  }), 128))])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.desc || e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 1,
    class: ["nut-navbar__right", {
      icon: e.icon
    }]
  }, [e.desc ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 0,
    style: {
      "text-align": e.descTextAlign
    },
    onClick: t[2] || (t[2] = function () {
      return e.handleClear && e.handleClear.apply(e, arguments);
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.desc), 5)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 1,
    onClick: t[3] || (t[3] = function () {
      return e.handleSends && e.handleSends.apply(e, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "icons")])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", null, [e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 0,
    class: "rightIcon",
    name: e.icon,
    onClick: e.handleSend
  }, null, 8, ["name", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)])], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 2);
};

var _J29 = J("tabbar-item"),
    rl = _J29.create;

var ul = rl({
  props: {
    tabTitle: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    num: {
      type: String,
      default: ""
    }
  },
  setup: function setup(e, t) {
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "p"])("parent"),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      size: l.size,
      unactiveColor: l.unactiveColor,
      activeColor: l.activeColor,
      active: l.modelValue,
      index: 0
    });

    (function (e) {
      if (e.proxy) {
        var _t3 = l.children.length;
        a.index = _t3;

        var _n = Object.assign({}, e.proxy, {
          index: _t3
        });

        l.children.push(_n);
      }
    })(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "m"])());

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return l ? l.modelValue : null;
    });
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(n, function (e, t) {
      a.active = e, setTimeout(function () {
        l.children[e].href && (window.location.href = l.children[e].href);
      });
    }), {
      state: a,
      change: function change(e) {
        l.changeIndex(e);
      }
    };
  }
});
var dl = {
  class: "nut-tabbar-item_icon-box"
},
    pl = {
  key: 0,
  class: "nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_num"
},
    ml = {
  key: 1,
  class: "nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_nums"
},
    yl = {
  key: 2
};

ul.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("div", {
    class: ["nut-tabbar-item", {
      "nut-tabbar-item__icon--unactive": e.state.active != e.state.index
    }],
    style: {
      color: e.state.active == e.state.index ? e.state.activeColor : e.state.unactiveColor
    },
    onClick: t[1] || (t[1] = function (t) {
      return e.change(e.state.index);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", dl, [e.num && e.num <= 99 ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", pl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.num), 1)) : e.num && e.num > 100 ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", ml, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("99+"))) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", yl, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
    class: "nut-tabbar-item_icon-box_icon",
    size: e.state.size,
    name: e.icon
  }, null, 8, ["size", "name"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: ["nut-tabbar-item_icon-box_nav-word", {
      "nut-tabbar-item_icon-box_big-word": !e.icon
    }]
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.tabTitle), 3)])], 6);
};

var _J30 = J("tabbar"),
    vl = _J30.create;

var fl = vl({
  children: [ul],
  props: {
    visible: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "base"
    },
    size: {
      type: String,
      default: "20px"
    },
    unactiveColor: {
      type: String,
      default: "#000000"
    },
    activeColor: {
      type: String,
      default: ""
    }
  },
  emits: ["tab-switch", "update:visible"],
  setup: function setup(e, _ref41) {
    var t = _ref41.emit,
        l = _ref41.slots;

    var a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      val: e.visible,
      children: []
    });

    function n(e) {
      t("update:visible", e), o.modelValue = e, t("tab-switch", o.children[e], e);
    }

    var o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      children: a.children,
      size: e.size,
      modelValue: a.val,
      unactiveColor: e.unactiveColor,
      activeColor: e.activeColor,
      changeIndex: n
    });

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "A"])("parent", o), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (e) {
      o.modelValue = e;
    }), {
      changeIndex: n
    };
  }
});

fl.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: ["nut-tabbar", {
      "nut-tabbar-bottom": e.bottom
    }]
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")], 2);
};

var _J31 = J("inputnumber"),
    gl = _J31.componentName,
    hl = _J31.create;

var bl = hl({
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    inputWidth: {
      type: [Number, String],
      default: ""
    },
    buttonSize: {
      type: [Number, String],
      default: ""
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: 9999
    },
    step: {
      type: [Number, String],
      default: 1
    },
    decimalPlaces: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup: function setup(e, _ref42) {
    var t = _ref42.emit;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref43;

      return _ref43 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref43, gl, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref43, "".concat(gl, "--disabled"), e.disabled), _ref43;
    }),
        a = function a(l, _a2) {
      var n = Number(l).toFixed(Number(e.decimalPlaces));
      t("change", n, _a2), t("update:modelValue", n, _a2);
    },
        n = function n() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number(e.modelValue);
      return t < Number(e.max) && !e.disabled;
    },
        o = function o() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number(e.modelValue);
      return t > Number(e.min) && !e.disabled;
    },
        s = function s(l) {
      if (e.disabled) return;
      if (e.readonly) return;
      var n = +l.target.value;
      n < Number(e.min) ? n = Number(e.min) : n > Number(e.max) && (n = Number(e.max)), a(n, l), t("blur", l);
    };

    return {
      classes: l,
      change: function change(e) {
        var l = e.target;
        t("update:modelValue", l.value, e);
      },
      blur: s,
      focus: function focus(l) {
        e.disabled || (e.readonly ? s(l) : t("focus", l));
      },
      add: function add(l) {
        if (t("add", l), n()) {
          var _t4 = Number(e.modelValue) + Number(e.step);

          a(_t4, l);
        } else t("overlimit", l);
      },
      addAllow: n,
      reduce: function reduce(l) {
        if (t("reduce", l), o()) {
          var _t5 = Number(e.modelValue) - Number(e.step);

          a(_t5, l);
        } else t("overlimit", l);
      },
      reduceAllow: o,
      pxCheck: de
    };
  }
});
var kl = {
  key: 0,
  class: "nut-inputnumber__text--readonly"
};

function wl(e, t, l) {
  var a = e.indexOf(t);
  return -1 === a ? e : "-" === t && 0 !== a ? e.slice(0, a) : e.slice(0, a + 1) + e.slice(a).replace(l, "");
}

function Sl(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
  var l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  e = t ? wl(e, ".", /\./g) : e.replace(/\./g, "");
  var a = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return (e = l ? wl(e, "-", /-/g) : e.replace(/-/, "")).replace(a, "");
}

bl.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes,
    style: {
      height: e.pxCheck(e.buttonSize)
    }
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
    name: "minus",
    class: ["nut-inputnumber__icon", {
      "nut-inputnumber__icon--disabled": !e.reduceAllow()
    }],
    size: e.buttonSize,
    onClick: e.reduce
  }, null, 8, ["class", "size", "onClick"]), e.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", kl, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("input", {
    key: 1,
    type: "number",
    min: e.min,
    max: e.max,
    style: {
      width: e.pxCheck(e.inputWidth)
    },
    disabled: e.disabled,
    readonly: e.readonly,
    value: e.modelValue,
    onInput: t[1] || (t[1] = function () {
      return e.change && e.change.apply(e, arguments);
    }),
    onBlur: t[2] || (t[2] = function () {
      return e.blur && e.blur.apply(e, arguments);
    }),
    onFocus: t[3] || (t[3] = function () {
      return e.focus && e.focus.apply(e, arguments);
    })
  }, null, 44, ["min", "max", "disabled", "readonly", "value"])), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
    name: "plus",
    class: ["nut-inputnumber__icon", {
      "nut-inputnumber__icon--disabled": !e.addAllow()
    }],
    size: e.buttonSize,
    onClick: e.add
  }, null, 8, ["class", "size", "onClick"])], 6);
};

var _J32 = J("input"),
    Cl = _J32.componentName,
    xl = _J32.create;

var Dl = xl({
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入信息"
    },
    label: {
      type: String,
      default: ""
    },
    requireShow: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    textAlign: {
      type: String,
      default: "left"
    },
    maxLength: {
      type: [String, Number],
      default: "99999999"
    },
    clearable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["change", "update:modelValue", "blur", "focus", "clear"],
  setup: function setup(e, _ref44) {
    var t = _ref44.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(!1),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref45;

      return _ref45 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref45, Cl, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref45, "".concat(Cl, "-disabled"), e.disabled), _ref45;
    }),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return {
        textAlign: e.textAlign
      };
    });
    return {
      active: l,
      classes: a,
      styles: n,
      valueChange: function valueChange(l) {
        var a = l.target.value;
        e.maxLength && a.length > Number(e.maxLength) && (a = a.slice(0, Number(e.maxLength))), "digit" === e.type && (a = Sl(a, !0)), "number" === e.type && (a = Sl(a, !1)), t("change", a, l), t("update:modelValue", a, l);
      },
      valueFocus: function valueFocus(e) {
        var a = e.target.value;
        l.value = !0, t("focus", a, e);
      },
      valueBlur: function valueBlur(e) {
        setTimeout(function () {
          l.value = !1;
        }, 0);
        var a = e.target.value;
        t("blur", a, e);
      },
      handleClear: function handleClear(e) {
        t("change", "", e), t("update:modelValue", "", e);
      }
    };
  }
});
var Tl = {
  class: "nut-input-label"
},
    Nl = {
  key: 0,
  class: "nut-input-require"
},
    _l = {
  key: 1,
  class: "label-string"
},
    Il = {
  key: 0
};

Dl.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Tl, [e.requireShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Nl, "*")) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.label ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", _l, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.label), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)]), e.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Il, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("input", {
    key: 1,
    class: "input-text",
    style: e.styles,
    type: e.type,
    maxlength: e.maxLength,
    placeholder: e.placeholder,
    disabled: e.disabled,
    readonly: e.readonly,
    value: e.modelValue,
    onInput: t[1] || (t[1] = function () {
      return e.valueChange && e.valueChange.apply(e, arguments);
    }),
    onFocus: t[2] || (t[2] = function () {
      return e.valueFocus && e.valueFocus.apply(e, arguments);
    }),
    onBlur: t[3] || (t[3] = function () {
      return e.valueBlur && e.valueBlur.apply(e, arguments);
    })
  }, null, 44, ["type", "maxlength", "placeholder", "disabled", "readonly", "value"])), e.clearable && !e.readonly ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])((Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 2,
    onClick: t[4] || (t[4] = function () {
      return e.handleClear && e.handleClear.apply(e, arguments);
    }),
    class: "nut-textinput-clear"
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
    name: "close-little",
    size: "12px"
  })], 512)), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.active && e.modelValue.length > 0]]) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 2);
};

var _J33 = J("checkboxgroup"),
    $l = _J33.create,
    Bl = _J33.componentName;

var Al = $l({
  props: {
    modelValue: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(e, _ref46) {
    var t = _ref46.slots,
        l = _ref46.emit;

    var a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      children: []
    });

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "A"])("parent", {
      value: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return e.modelValue;
      }),
      disabled: e.disabled,
      updateValue: function updateValue(e) {
        l("update:modelValue", e), l("change", e);
      },
      relation: function relation(e) {
        e.proxy && a.children.push(e.proxy);
      }
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.modelValue;
    }, function (e) {
      l("change", e);
    }), function (e) {
      var t = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "m"])();
      t && Object.assign(t.proxy, e);
    }({
      toggleAll: function toggleAll(e) {
        var t = [];
        e && a.children.forEach(function (e) {
          t.push(null == e ? void 0 : e.label);
        }), l("update:modelValue", t);
      }
    }), function () {
      var e;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])("view", {
        class: "".concat(Bl)
      }, null == (e = t.default) ? void 0 : e.call(t));
    };
  }
});

var _J34 = J("checkbox"),
    zl = _J34.create,
    Ol = _J34.componentName;

var Vl = zl({
  children: [Al],
  components: {
    nutIcon: ye,
    nutCheckboxGroup: Al
  },
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    textPosition: {
      type: String,
      default: "right"
    },
    iconSize: {
      type: [String, Number],
      default: "18"
    },
    iconName: {
      type: String,
      default: "check-normal"
    },
    iconActiveName: {
      type: String,
      default: "checked"
    },
    label: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(e, _ref47) {
    var t = _ref47.emit,
        l = _ref47.slots;

    var a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "p"])("parent"),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return !!a;
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return n.value ? a.value.value.includes(e.label) : e.modelValue;
    }),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return n.value ? a.disabled : e.disabled;
    }),
        i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return !!e.modelValue;
    }),
        c = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return s.value ? "#f5f5f5" : o.value ? "#fa2c19" : "#d6d6d6";
    }),
        r = function r() {
      var t = e.iconName,
          l = e.iconSize,
          a = e.iconActiveName;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])(ye, {
        name: o.value ? a : t,
        size: l,
        color: c.value
      });
    },
        u = function u(o) {
      var c, r, u;

      if (!s.value && (r = !i.value, u = null == (c = l.default) ? void 0 : c.call(l)[0].children, t("update:modelValue", r), t("change", r, u), n.value)) {
        var _t6 = a.value.value,
            _l3 = e.label;

        var _n2 = _t6.indexOf(_l3);

        _n2 > -1 ? _t6.splice(_n2, 1) : _t6.push(_l3), a.updateValue(_t6);
      }
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "w"])(function () {
      n.value && a.relation(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* getCurrentInstance */ "m"])());
    }), function () {
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])("view", {
        class: "".concat(Ol, " ").concat("left" === e.textPosition ? "".concat(Ol, "--reverse") : ""),
        onClick: u
      }, [r(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])("view", {
        class: "".concat(Ol, "__label ").concat(s.value ? "".concat(Ol, "__label--disabled") : "")
      }, null == (t = l.default) ? void 0 : t.call(l))]);
      var t;
    };
  }
});

var _J35 = J("radiogroup"),
    Pl = _J35.componentName,
    Ll = _J35.create;

var El = Ll({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ""
    },
    textPosition: {
      type: String,
      default: "right"
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(e, _ref48) {
    var t = _ref48.emit,
        l = _ref48.slots;
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* provide */ "A"])("parent", {
      label: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* readonly */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return e.modelValue;
      })),
      position: e.textPosition,
      updateValue: function updateValue(e) {
        return t("update:modelValue", e);
      }
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.modelValue;
    }, function (e) {
      return t("change", e);
    }), function () {
      var e;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])("view", {
        class: "".concat(Pl)
      }, null == (e = l.default) ? void 0 : e.call(l));
    };
  }
});

var _J36 = J("radio"),
    Ml = _J36.componentName,
    Rl = _J36.create;

var Hl = Rl({
  children: [El],
  components: {
    "nut-radiogroup": El
  },
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    iconName: {
      type: String,
      default: "check-normal"
    },
    iconActiveName: {
      type: String,
      default: "check-checked"
    },
    iconSize: {
      type: [String, Number],
      default: 18
    }
  },
  setup: function setup(e, _ref49) {
    var t = _ref49.emit,
        l = _ref49.slots;
    var a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* inject */ "p"])("parent");

    var n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return a.label.value === e.label;
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return e.disabled ? "#f5f5f5" : n.value ? "#fa2c19" : "#d6d6d6";
    }),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return a.position;
    }),
        i = function i() {
      var t = e.iconName,
          l = e.iconSize,
          a = e.iconActiveName;
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])(ye, {
        name: n.value ? a : t,
        size: l,
        color: o.value
      });
    },
        c = function c() {
      n.value || e.disabled || a.updateValue(e.label);
    };

    return function () {
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])("view", {
        class: "".concat(Ml, " ").concat("left" === s.value ? "".concat(Ml, "--reverse") : ""),
        onClick: c
      }, [i(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* h */ "o"])("view", {
        class: "".concat(Ml, "__label ").concat(e.disabled ? "".concat(Ml, "__label--disabled") : "")
      }, null == (t = l.default) ? void 0 : t.call(l))]);
      var t;
    };
  }
});

var _J37 = J("rate"),
    Fl = _J37.componentName,
    jl = _J37.create;

var Yl = jl({
  props: {
    count: {
      type: [String, Number],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    iconSize: {
      type: [String, Number],
      default: 18
    },
    activeColor: {
      type: String,
      default: ""
    },
    voidColor: {
      type: String,
      default: ""
    },
    uncheckedIcon: {
      type: String,
      default: "star-n"
    },
    checkedIcon: {
      type: String,
      default: "star-fill-n"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    allowHalf: {
      type: Boolean,
      default: !1
    },
    spacing: {
      type: [String, Number],
      default: 14
    }
  },
  emits: ["update:modelValue", "change"],
  setup: function setup(e, _ref50) {
    var t = _ref50.emit;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Fl, !0);
      }),
      onClick: function onClick(l, a) {
        if (e.disabled || e.readonly) return;
        var n = 0;
        1 === a && e.modelValue === a || (n = a, e.allowHalf && 2 == l && (n -= .5)), t("update:modelValue", n), t("change", n);
      },
      pxCheck: de
    };
  }
});

Yl.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.count, function (t) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
      class: "nut-rate-item",
      key: t,
      style: {
        marginRight: e.pxCheck(e.spacing)
      }
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
      size: e.iconSize,
      class: ["nut-rate-item__icon", {
        "nut-rate-item__icon--disabled": e.disabled || t > e.modelValue
      }],
      onClick: function onClick(l) {
        return e.onClick(1, t);
      },
      color: t <= e.modelValue ? e.activeColor : e.voidColor,
      name: t <= e.modelValue ? e.checkedIcon : e.uncheckedIcon
    }, null, 8, ["size", "onClick", "class", "color", "name"]), e.allowHalf && e.modelValue + 1 > t ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
      key: 0,
      class: "nut-rate-item__icon nut-rate-item__icon--half",
      onClick: function onClick(l) {
        return e.onClick(2, t);
      },
      color: t <= e.modelValue ? e.activeColor : e.voidColor,
      size: e.iconSize,
      name: e.checkedIcon
    }, null, 8, ["onClick", "color", "size", "name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 4);
  }), 128))], 2);
};

var _J38 = J("switch"),
    ql = _J38.componentName,
    Xl = _J38.create;

var Ul = Xl({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disable: {
      type: Boolean,
      default: !1
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "update:modelValue"],
  setup: function setup(e, _ref52) {
    var t = _ref52.emit;
    return {
      classes: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        var _ref53;

        var t = ql;
        return _ref53 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref53, t, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref53, e.modelValue ? "switch-open" : "switch-close", !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref53, "".concat(t, "-disable"), e.disable), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref53, "".concat(t, "-base"), !0), _ref53;
      }),
      style: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
        return {
          backgroundColor: e.modelValue ? e.activeColor : e.inactiveColor
        };
      }),
      onClick: function onClick(l) {
        e.disable || (t("update:modelValue", !e.modelValue), t("change", !e.modelValue, l));
      }
    };
  }
});
var Wl = {
  class: "switch-button"
},
    Ql = {
  class: "close-line"
};

Ul.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes,
    onClick: t[1] || (t[1] = function () {
      return e.onClick && e.onClick.apply(e, arguments);
    }),
    style: e.style
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Wl, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Ql, null, 512), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], !e.modelValue]]), e.activeText ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: "nut-switch-label open"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.activeText), 513), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], e.modelValue]]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: "nut-switch-label close"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.inactiveText), 513), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vShow */ "d"], !e.modelValue]])], 64)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)])], 6);
};

var Jl = {
  isLeapYear: function isLeapYear(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  },
  getWhatDay: function getWhatDay(e, t, l) {
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][new Date(e + "/" + t + "/" + l).getDay()];
  },
  getMonthPreDay: function getMonthPreDay(e, t) {
    var l = new Date(e + "/" + t + "/01").getDay();
    return 0 == l && (l = 7), l;
  },
  getMonthDays: function getMonthDays(e, t) {
    return /^0/.test(t) && (t = t.split("")[1]), [0, 31, this.isLeapYear(Number(e)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
  },
  getNumTwoBit: function getNumTwoBit(e) {
    return ((e = Number(e)) > 9 ? "" : "0") + e;
  },
  date2Str: function date2Str(e, t) {
    t = t || "-";
    return [e.getFullYear(), this.getNumTwoBit(e.getMonth() + 1), this.getNumTwoBit(e.getDate())].join(t);
  },
  getDay: function getDay(e) {
    e = e || 0;
    var t = new Date();
    var l = 864e5 * e;
    return t = new Date(t.getTime() + l), this.date2Str(t);
  },
  compareDate: function compareDate(e, t) {
    return !(new Date(e.replace("-", "/").replace("-", "/")) >= new Date(t.replace("-", "/").replace("-", "/")));
  },
  isEqual: function isEqual(e, t) {
    return new Date(e).getTime() == new Date(t).getTime();
  }
};
var Gl = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
  window.setTimeout(e, 1e3 / 60);
} : function (e) {
  setTimeout(e, 1e3 / 60);
};

var _J39 = J("calendar-item"),
    Kl = _J39.create;

var Zl = Kl({
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: "日历选择"
    },
    defaultValue: {
      type: String,
      default: null
    },
    startDate: {
      type: String,
      default: Jl.getDay(0)
    },
    endDate: {
      type: String,
      default: Jl.getDay(365)
    }
  },
  emits: ["choose", "update", "close"],
  setup: function setup(e, _ref54) {
    var t = _ref54.emit;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(["日", "一", "二", "三", "四", "五", "六"]),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      yearMonthTitle: "",
      currDate: "",
      unLoadPrev: !1,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: "calendar-month-day",
      startData: "",
      endData: "",
      isRange: "range" === e.type,
      timer: 0
    }),
        c = function c(e) {
      return e.split("-");
    },
        r = function r(e) {
      return Jl.isEqual(s.currDate[0], e);
    },
        d = function d(e, t, l) {
      return l ? t.curData[3] + "-" + t.curData[4] + "-" + Jl.getNumTwoBit(+e.day) : t.curData[0] + "-" + t.curData[1] + "-" + Jl.getNumTwoBit(+e.day);
    },
        p = function p(t, l, a) {
      var n = d(t, l, a);
      return "curr" == t.type ? !s.isRange && Jl.isEqual(s.currDate, n) || s.isRange && (r(n) || function (e) {
        return Jl.isEqual(s.currDate[1], e);
      }(n)) ? "".concat(s.dayPrefix, "-active") : e.startDate && Jl.compareDate(n, e.startDate) || e.endDate && Jl.compareDate(e.endDate, n) ? "".concat(s.dayPrefix, "-disabled") : s.isRange && Array.isArray(s.currDate) && 2 == Object.values(s.currDate).length && Jl.compareDate(s.currDate[0], n) && Jl.compareDate(n, s.currDate[1]) ? "".concat(s.dayPrefix, "-choose") : null : "".concat(s.dayPrefix, "-disabled");
    },
        m = function m() {
      (s.isRange && 2 == s.chooseData.length || !s.isRange) && (t("choose", s.chooseData), e.poppable && t("update"));
    },
        y = function y(t, l, a, n) {
      if (p(t, l, n) != "".concat(s.dayPrefix, "-disabled")) {
        var _o = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(l.curData);

        _o = n ? _o.splice(3) : _o.splice(0, 3), _o[2] = "number" == typeof t.day ? Jl.getNumTwoBit(t.day) : t.day, _o[3] = "".concat(_o[0], "-").concat(_o[1], "-").concat(_o[2]), _o[4] = Jl.getWhatDay(+_o[0], +_o[1], +_o[2]), s.isRange ? (2 == Object.values(s.currDate).length ? s.currDate = [_o[3]] : Jl.compareDate(s.currDate[0], _o[3]) ? Array.isArray(s.currDate) && s.currDate.push(_o[3]) : Array.isArray(s.currDate) && s.currDate.unshift(_o[3]), 2 != s.chooseData.length && s.chooseData.length ? Jl.compareDate(s.chooseData[3], _o[3]) ? s.chooseData = [Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(s.chooseData), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_o)] : s.chooseData = [Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_o), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(s.chooseData)] : s.chooseData = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_o)) : (s.currDate = _o[3], s.chooseData = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_o)), e.isAutoBackFill && !a && m();
      }
    },
        v = function v(e) {
      var t = "prev" == e ? s.monthsData[0] : s.monthsData[s.monthsData.length - 1];
      var l = parseInt(t.curData[0]),
          a = parseInt(t.curData[1].toString().replace(/^0/, ""));

      switch (e) {
        case "prev":
          1 == a && (l -= 1), a = 1 == a ? 12 : --a;
          break;

        case "next":
          12 == a && (l += 1), a = 12 == a ? 1 : ++a;
      }

      return [l, Jl.getNumTwoBit(a), t.curData[2]];
    },
        f = function f(e, t) {
      return "prev" == t && e >= 7 && (e -= 7), Array.from(Array(e), function (e, l) {
        return {
          day: l + 1,
          type: t
        };
      });
    },
        g = function g(e, t) {
      var l = Jl.getMonthPreDay(+e[0], +e[1]),
          a = Jl.getMonthDays(e[0], e[1]),
          n = {
        curData: e,
        title: "".concat(e[0], "\u5E74").concat(e[1], "\u6708"),
        monthData: [].concat(Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(f(l, "prev")), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(f(a, "curr")))
      };
      "next" == t ? s.endData && Jl.compareDate("".concat(s.endData[0], "-").concat(s.endData[1], "-").concat(Jl.getMonthDays(s.endData[0], s.endData[1])), "".concat(e[0], "-").concat(e[1], "-").concat(e[2])) || s.monthsData.push(n) : s.startData && Jl.compareDate("".concat(e[0], "-").concat(e[1], "-").concat(e[2]), "".concat(s.startData[0], "-").concat(s.startData[1], "-01")) ? s.unLoadPrev = !0 : s.monthsData.unshift(n);
    },
        h = function h() {
      s.startData = e.startDate ? c(e.startDate) : "", s.endData = e.endDate ? c(e.endDate) : "", e.defaultValue ? s.currDate = s.isRange ? Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(e.defaultValue) : e.defaultValue : s.currDate = s.isRange ? [Jl.date2Str(new Date()), Jl.getDay(1)] : Jl.date2Str(new Date()), s.isRange && Array.isArray(s.currDate) ? (e.startDate && Jl.compareDate(s.currDate[0], e.startDate) && s.currDate.splice(0, 1, e.startDate), e.endDate && Jl.compareDate(e.endDate, s.currDate[1]) && s.currDate.splice(1, 1, e.endDate), s.defaultData = [].concat(Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(c(s.currDate[0])), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(c(s.currDate[1])))) : (e.startDate && Jl.compareDate(s.currDate, e.startDate) ? s.currDate = e.startDate : e.endDate && !Jl.compareDate(s.currDate, e.endDate) && (s.currDate = e.endDate), s.defaultData = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(c(s.currDate))), g(s.defaultData, "next"), s.yearMonthTitle = s.monthsData[0].title;
      var t = 1;

      do {
        g(v("next"), "next");
      } while (t++ < 4);

      s.isRange ? (y({
        day: s.defaultData[2],
        type: "curr"
      }, s.monthsData[0], !0), y({
        day: s.defaultData[5],
        type: "curr"
      }, s.monthsData[0], !0, !0)) : y({
        day: s.defaultData[2],
        type: "curr"
      }, s.monthsData[0], !0);
    },
        b = function b(e, t) {
      return s.isRange && "curr" == e.type && "calendar-month-day-active" == p(e, t);
    },
        k = function k() {
      if (!e.poppable) return !1;
      Gl(function () {
        if ((null == o ? void 0 : o.value) && (null == n ? void 0 : n.value)) {
          var _e2 = null == o ? void 0 : o.value.getBoundingClientRect().bottom,
              _t7 = n.value.getElementsByClassName(".calendar-month");

          for (var _l4 = 0; _l4 < _t7.length; _l4++) {
            _t7[_l4].getBoundingClientRect().top <= _e2 && _t7[_l4].getBoundingClientRect().bottom >= _e2 ? s.yearMonthTitle = s.monthsData[_l4].title : 0 === s.scrollDistance && (s.yearMonthTitle = s.monthsData[0].title);
          }
        }
      });
    },
        w = function w() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;
      (null == n ? void 0 : n.value) && ("end" === t ? (n.value.style.webkitTransition = "transform ".concat(l, "ms cubic-bezier(0.19, 1, 0.22, 1)"), clearTimeout(s.timer), s.timer = setTimeout(function () {
        k();
      }, l)) : (n.value.style.webkitTransition = "", k()), n.value.style.webkitTransform = "translateY(".concat(e, "px)"), s.scrollDistance = e);
    },
        S = function S(e, t, l) {
      var o, i;
      var c = e + s.transformY;
      var r = (null == (o = a.value) ? void 0 : o.offsetHeight) || 0,
          u = (null == (i = n.value) ? void 0 : i.offsetHeight) || 0;
      "end" === t ? (c > 0 && (c = 0), c < 0 && c < -u + r && (c = -u + r), u <= r && 1 == s.monthsData.length && (c = 0), w(c, t, l)) : (c > 0 && c > 100 && (c = 100), c < -u + r - 100 && s.monthsData.length > 1 && (c = -u + r - 100), c < 0 && c < -100 && 1 == s.monthsData.length && (c = -100), w(c));
    };

    return h(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.defaultValue;
    }, function (e) {
      e && (s.chooseData.splice(0), s.monthsData.splice(0), s.scrollDistance = 0, s.translateY = 0, w(s.scrollDistance), h());
    }), i(i({
      weeks: l,
      touchStart: function touchStart(e) {
        var t = e.changedTouches[0];
        s.touchParams.startY = t.pageY, s.touchParams.startTime = e.timeStamp || Date.now(), s.transformY = s.scrollDistance;
      },
      touchMove: function touchMove(e) {
        var t = e.changedTouches[0];
        s.touchParams.lastY = t.pageY, s.touchParams.lastTime = e.timeStamp || Date.now();
        var l = s.touchParams.lastY - s.touchParams.startY;
        if (Math.abs(l) < 5) return !1;
        S(l);
      },
      touchEnd: function touchEnd(e) {
        var t, l;
        var o = e.changedTouches[0];
        s.touchParams.lastY = o.pageY, s.touchParams.lastTime = e.timeStamp || Date.now();
        var i = s.touchParams.lastY - s.touchParams.startY;
        if (Math.abs(i) < 5) return !1;
        var c = i + s.transformY,
            r = (null == (t = a.value) ? void 0 : t.offsetHeight) || 0,
            u = (null == (l = n.value) ? void 0 : l.offsetHeight) || 0;
        c > 0 ? g(v("prev"), "prev") : c < 2 * r - u && (g(v("next"), "next"), Math.abs(i) >= 300 && g(v("next"), "next"));
        var d = s.touchParams.lastTime - s.touchParams.startTime;
        d <= 300 ? (i *= 2, d += 1e3, S(i, "end", d)) : S(i, "end");
      },
      getClass: p,
      isStartTip: function isStartTip(e, t) {
        return !!b(e, t) && r(d(e, t));
      },
      isEndTip: function isEndTip(e, t) {
        return b(e, t);
      },
      chooseDay: y,
      isCurrDay: function isCurrDay(e, t) {
        var l = "".concat(e.curData[0], "-").concat(e.curData[1], "-").concat(t);
        return Jl.isEqual(l, Jl.date2Str(new Date()));
      },
      confirm: m,
      monthsPanel: n,
      months: a,
      weeksPanel: o
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(s)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e));
  }
});
var ea = {
  class: "calendar-title"
},
    ta = {
  class: "calendar-curr-month"
},
    la = {
  class: "calendar-weeks",
  ref: "weeksPanel"
},
    aa = {
  class: "calendar-months-panel",
  ref: "monthsPanel"
},
    na = {
  class: "calendar-loading-tip"
},
    oa = {
  class: "calendar-month-title"
},
    sa = {
  class: "calendar-month-con"
},
    ia = {
  class: "calendar-day"
},
    ca = {
  key: 0,
  class: "calendar-curr-tips"
},
    ra = {
  key: 1,
  class: "calendar-day-tip"
},
    ua = {
  key: 2,
  class: "calendar-day-tip"
},
    da = {
  key: 0,
  class: "nut-calendar-footer"
};

Zl.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: ["nut-calendar nut-calendar-taro", {
      "nut-calendar-tile": !e.poppable,
      "nut-calendar-nofooter": e.isAutoBackFill
    }]
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: ["nut-calendar-header", {
      "nut-calendar-header-tile": !e.poppable
    }]
  }, [e.poppable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", ea, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", ta, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.yearMonthTitle), 1)], 64)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", la, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.weeks, function (e, t) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
      class: "calendar-week-item",
      key: t
    }, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e), 1);
  }), 128))], 512)], 2), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: "nut-calendar-content",
    ref: "months",
    onTouchstart: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.touchStart && e.touchStart.apply(e, arguments);
    }, ["stop"])),
    onTouchmove: t[2] || (t[2] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.touchMove && e.touchMove.apply(e, arguments);
    }, ["stop", "prevent"])),
    onTouchend: t[3] || (t[3] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.touchEnd && e.touchEnd.apply(e, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", aa, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", na, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.unLoadPrev ? "没有更早月份" : "加载上一个月"), 1), (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.monthsData, function (t, l) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
      class: "calendar-month",
      key: l
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", oa, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", sa, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
      class: ["calendar-month-item", "range" === e.type ? "month-item-range" : ""]
    }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(t.monthData, function (l, a) {
      return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
        key: a,
        class: ["calendar-month-day", e.getClass(l, t)],
        onClick: function onClick(a) {
          return e.chooseDay(l, t);
        }
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", ia, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("curr" == l.type ? l.day : ""), 1), e.isCurrDay(t, l.day) ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", ca, "今天")) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), e.isStartTip(l, t) ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", ra, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("开始"))) : e.isEndTip(l, t) ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", ua, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("结束"))) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 10, ["onClick"]);
    }), 128))], 2)])]);
  }), 128))], 512)], 544), e.poppable && !e.isAutoBackFill ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", da, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: "calendar-confirm-btn",
    onClick: t[4] || (t[4] = function () {
      return e.confirm && e.confirm.apply(e, arguments);
    })
  }, "确定")])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 2);
};

var _J40 = J("calendar"),
    pa = _J40.create;

var ma = pa({
  children: [Zl, Ve],
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: "日历选择"
    },
    defaultValue: {
      type: String
    },
    startDate: {
      type: String,
      default: Jl.getDay(0)
    },
    endDate: {
      type: String,
      default: Jl.getDay(365)
    }
  },
  emits: ["choose", "close", "update:visible"],
  setup: function setup(e, _ref55) {
    var t = _ref55.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.visible);

    var a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        n = function n() {
      l.value = !1, t("close"), t("update:visible", !1);
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (e) {
      l.value = e;
    }), {
      show: l,
      closePopup: function closePopup() {
        n();
      },
      update: function update() {
        l.value = !1, t("update:visible", !1);
      },
      close: n,
      choose: function choose(e) {
        n(), t("choose", e);
      },
      calendarRef: a
    };
  }
});

ma.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-calendar-item"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-popup");
  return e.poppable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, {
    key: 0,
    visible: e.show,
    "onUpdate:visible": t[1] || (t[1] = function (t) {
      return e.show = t;
    }),
    position: "bottom",
    round: "",
    closeable: "",
    onClickOverlay: e.closePopup,
    onClickCloseIcon: e.closePopup
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
        props: "",
        ref: "calendarRef",
        type: e.type,
        "is-auto-back-fill": e.isAutoBackFill,
        poppable: e.poppable,
        title: e.title,
        "default-value": e.defaultValue,
        "start-date": e.startDate,
        "end-date": e.endDate,
        onUpdate: e.update,
        onClose: e.close,
        onChoose: e.choose
      }, null, 8, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "onUpdate", "onClose", "onChoose"])];
    }),
    _: 1
  }, 8, ["visible", "onClickOverlay", "onClickCloseIcon"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 1,
    type: e.type,
    "is-auto-back-fill": e.isAutoBackFill,
    poppable: e.poppable,
    title: e.title,
    "default-value": e.defaultValue,
    "start-date": e.startDate,
    "end-date": e.endDate,
    onClose: e.close,
    onChoose: e.choose
  }, null, 8, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "onClose", "onChoose"]));
};

var ya = {
  listData: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  visibleItemCount: {
    type: [Number, String],
    default: 7
  },
  defaultIndex: {
    type: [Number, String],
    default: 0
  },
  itemHeight: {
    type: [Number, String],
    default: 35
  }
},
    _J41 = J("picker"),
    va = _J41.create;

var fa = va({
  props: i({
    mode: {
      type: String,
      default: "selector"
    }
  }, ya),
  emits: ["confirm"],
  setup: function setup(e, _ref56) {
    var t = _ref56.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])([]),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])([]);
    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onUpdated */ "y"])(function () {
      console.log("updated", e.listData);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(e.listData, function (t) {
      try {
        t.length && (l.value = [], a.value = [], "selector" === e.mode ? a.value = e.listData : "multiSelector" === e.mode && t.forEach(function (e) {
          l.value.push(e.defaultIndex), a.value.push(e.values);
        }));
      } catch (n) {
        console.log("listData参数格式错误", n);
      }
    }, {
      immediate: !0,
      deep: !0
    });
    return {
      confirm: confirm,
      onChange: function onChange(l) {
        var n;
        var o;
        "selector" === e.mode ? o = e.listData[l.detail.value] : "multiSelector" === e.mode && (o = null == (n = a.value) ? void 0 : n.map(function (e, t) {
          return e[l.detail.value[t]];
        }).filter(function (e) {
          return e;
        })), t("confirm", l.detail.value, o);
      },
      value: l,
      range: a,
      onColumnChange: function onColumnChange(e) {
        console.log("修改的列为", e.detail.column, "，值为", e.detail.value);
      }
    };
  }
});

fa.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("picker");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    mode: e.mode,
    range: e.range,
    onChange: e.onChange,
    onColumnchange: e.onColumnChange,
    value: e.value
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")];
    }),
    _: 3
  }, 8, ["mode", "range", "onChange", "onColumnchange", "value"]);
};

var _J42 = J("datepicker"),
    ga = _J42.create;

var ha = ga({
  children: [],
  props: {
    value: {
      type: String,
      default: new Date()
    },
    start: {
      type: String,
      default: "1970-01-01"
    },
    end: {
      type: String,
      default: "2999-01-01"
    },
    fields: {
      type: String,
      default: "day"
    }
  },
  emits: ["onChange"],
  setup: function setup(e, _ref57) {
    var t = _ref57.emit;
    return i({
      confirm: confirm,
      onChange: function onChange(e) {
        t("onChange", e.detail.value);
      }
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e));
  }
});

ha.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("picker");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    mode: "date",
    onChange: e.onChange,
    value: e.value,
    start: e.start,
    end: e.end,
    fields: e.fields
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default")];
    }),
    _: 3
  }, 8, ["onChange", "value", "start", "end", "fields"]);
};

var _J43 = J("shortpassword"),
    ba = _J43.create;

var ka = ba({
  props: {
    title: {
      type: String,
      default: "请输入密码"
    },
    desc: {
      type: String,
      default: "您使用了虚拟资产，请进行验证"
    },
    tips: {
      type: String,
      default: "忘记密码"
    },
    visible: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    errorMsg: {
      type: String,
      default: ""
    },
    noButton: {
      type: Boolean,
      default: !0
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    length: {
      type: [String, Number],
      default: 6
    }
  },
  emits: ["update:modelValue", "update:visible", "complete", "change", "ok", "tips", "close", "cancel"],
  setup: function setup(e, _ref58) {
    var t = _ref58.emit;
    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.modelValue),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return s(Number(e.length));
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.visible);

    function s(e) {
      return Math.min(Math.max(4, e), 6);
    }

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (e) {
      o.value = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* onMounted */ "w"])(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["eventCenter"].once(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__["getCurrentInstance"])().router.onReady, function () {});
    }), {
      comLen: n,
      sureClick: function sureClick() {
        t("ok", l.value);
      },
      realInput: l,
      realpwd: a,
      range: s,
      changeValue: function changeValue(e) {
        var a = e.target.value;
        a.length > n.value && (a = a.slice(0, n.value), l.value = a), l.value.length === n.value && t("complete", a), t("change", a), t("update:modelValue", a);
      },
      close: function close() {
        t("update:visible", !1), t("cancel");
      },
      onTips: function onTips() {
        t("tips");
      },
      focus: function focus() {
        document.getElementsByClassName("nut-input-real-taro")[0].focus(), a.value = document.getElementsByClassName("popup-center")[0], a.value.style.top = "45%";
      },
      show: o,
      closeIcon: function closeIcon() {
        t("update:visible", !1), t("close");
      },
      blur: function blur() {
        document.getElementsByClassName("popup-center")[0].style.top = "50%";
      }
    };
  }
});
var wa = {
  class: "nut-shortpsd-title"
},
    Sa = {
  class: "nut-shortpsdWx-subtitle"
},
    Ca = {
  class: "nut-input-w"
},
    xa = {
  key: 0,
  class: "nut-shortpsd-icon"
},
    Da = {
  class: "nut-shortpsd-message"
},
    Ta = {
  class: "nut-shortpsd-error"
},
    Na = {
  key: 0,
  class: "nut-shortpsd-footer"
};

ka.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
    style: {
      padding: "32px 24px 28px 24px",
      borderRadius: "12px",
      textAlign: "center"
    },
    class: "nut-short-popup",
    visible: e.show,
    "onUpdate:visible": t[8] || (t[8] = function (t) {
      return e.show = t;
    }),
    closeable: !0,
    onClickCloseIcon: e.closeIcon,
    "close-on-click-overlay": e.closeOnClickOverlay,
    onClickOverlay: e.close
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", wa, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.title), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Sa, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.desc), 1), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Ca, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withDirectives */ "L"])(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("input", {
        class: "nut-input-real-taro",
        type: "number",
        maxlength: e.length,
        "onUpdate:modelValue": t[1] || (t[1] = function (t) {
          return e.realInput = t;
        }),
        onInput: t[2] || (t[2] = function () {
          return e.changeValue && e.changeValue.apply(e, arguments);
        }),
        onBlur: t[3] || (t[3] = function () {
          return e.blur && e.blur.apply(e, arguments);
        })
      }, null, 40, ["maxlength"]), [[vue__WEBPACK_IMPORTED_MODULE_11__[/* vModelText */ "c"], e.realInput]]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: "nut-shortpsd-fake",
        onClick: t[4] || (t[4] = function () {
          return e.focus && e.focus.apply(e, arguments);
        })
      }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(new Array(e.comLen), function (t, l) {
        return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
          class: "nut-shortpsd-li",
          key: l
        }, [e.realInput.length > l ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", xa)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)]);
      }), 128))])]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Da, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Ta, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.errorMsg), 1), e.tips ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
        key: 0,
        class: "nut-shortpsd-forget",
        onClick: t[5] || (t[5] = function () {
          return e.onTips && e.onTips.apply(e, arguments);
        })
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
        class: "icon",
        size: "11px",
        name: "tips"
      }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.tips), 1)])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)]), e.noButton ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Na, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: "nut-shortpsd-cancle",
        onClick: t[6] || (t[6] = function () {
          return e.close && e.close.apply(e, arguments);
        })
      }, "取消"), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
        class: "nut-shortpsd-sure",
        onClick: t[7] || (t[7] = function () {
          return e.sureClick && e.sureClick.apply(e, arguments);
        })
      }, "确认")]))];
    }),
    _: 1
  }, 8, ["visible", "onClickCloseIcon", "close-on-click-overlay", "onClickOverlay"])]);
};

var _a = function _a(e, t) {
  var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* unref */ "v"])(e);
  return new Promise(function (e) {
    var a = t.createSelectorQuery();
    a.select("#".concat(l.id)).boundingClientRect(), a.exec(function (t) {
      e(t[0]);
    });
  });
},
    _J44 = J("range"),
    Ia = _J44.componentName,
    $a = _J44.create;

var Ba = $a({
  props: {
    range: {
      type: Boolean,
      default: !1
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    hiddenRange: {
      type: Boolean,
      default: !1
    },
    hiddenTag: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  },
  emits: ["change", "drag-end", "drag-start", "update:modelValue"],
  setup: function setup(e, _ref59) {
    var t = _ref59.emit,
        l = _ref59.slots;
    var a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0);
    var n, o;

    var s = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(),
        p = function () {
      var e = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
          t = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
          l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
          a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
          n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
          o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
          s = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(""),
          i = function i() {
        l.value = 0, a.value = 0, n.value = 0, o.value = 0, s.value = "";
      };

      return {
        move: function move(i) {
          var c = i.touches[0];
          var r, u;
          l.value = c.clientX - e.value, a.value = c.clientY - t.value, n.value = Math.abs(l.value), o.value = Math.abs(a.value), s.value || (s.value = (r = n.value) > (u = o.value) && r > 10 ? "horizontal" : u > r && u > 10 ? "vertical" : "");
        },
        start: function start(l) {
          i(), e.value = l.touches[0].clientX, t.value = l.touches[0].clientY;
        },
        reset: i,
        startX: e,
        startY: t,
        deltaX: l,
        deltaY: a,
        offsetX: n,
        offsetY: o,
        direction: s,
        isVertical: function isVertical() {
          return "vertical" === s.value;
        },
        isHorizontal: function isHorizontal() {
          return "horizontal" === s.value;
        }
      };
    }(),
        m = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return Number(e.max) - Number(e.min);
    }),
        y = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref60;

      var t = Ia;
      return _ref60 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref60, t, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref60, "".concat(t, "-disabled"), e.disabled), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref60, "".concat(t, "-show-number"), !e.hiddenRange), _ref60;
    }),
        v = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return {
        background: e.inactiveColor
      };
    }),
        f = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return {
        borderColor: e.buttonColor
      };
    }),
        g = function g(t) {
      return !!e.range && Array.isArray(t);
    },
        h = function h() {
      var t = e.modelValue,
          l = e.min;
      return g(t) ? 100 * (t[1] - t[0]) / m.value + "%" : 100 * (t - Number(l)) / m.value + "%";
    },
        b = function b() {
      var t = e.modelValue,
          l = e.min;
      return g(t) ? 100 * (t[0] - Number(l)) / m.value + "%" : "0%";
    },
        k = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return {
        width: h(),
        left: b(),
        background: e.activeColor,
        transition: r.value ? "none" : void 0
      };
    }),
        w = function w(t) {
      var l = e.min,
          a = e.max,
          n = e.step;
      return t = Math.max(+l, Math.min(t, +a)), Math.round(t / +n) * +n;
    },
        S = function S(e, t) {
      return JSON.stringify(e) === JSON.stringify(t);
    },
        C = function C(l, a) {
      l = g(l) ? function (e) {
        return e[0] > e[1] ? e.slice(0).reverse() : e;
      }(l).map(w) : w(l), S(l, e.modelValue) || t("update:modelValue", l), a && !S(l, n) && t("change", l);
    };

    return c(i({
      root: s,
      classes: y,
      wrapperStyle: v,
      buttonStyle: f,
      onClick: function () {
        var _onClick = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(t) {
          var l, a, n, o, i, c, _a3, _e3, _t8;

          return _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!e.disabled) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  l = e.min, a = e.modelValue;
                  _context.next = 5;
                  return _a(s, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);

                case 5:
                  n = _context.sent;
                  o = t.touches[0].clientX - n.left, i = n.width, c = Number(l) + o / i * m.value;

                  if (g(a)) {
                    _a3 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(a, 2), _e3 = _a3[0], _t8 = _a3[1];
                    C(c <= (_e3 + _t8) / 2 ? [c, _t8] : [_e3, c], !0);
                  } else C(c, !0);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function onClick(_x) {
          return _onClick.apply(this, arguments);
        }

        return onClick;
      }(),
      onTouchStart: function onTouchStart(t) {
        e.disabled || (p.start(t), o = e.modelValue, n = g(o) ? o.map(w) : w(o), r.value = "start");
      },
      onTouchMove: function () {
        var _onTouchMove = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(l) {
          var i, c;
          return _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!e.disabled) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  "start" === r.value && t("drag-start"), p.move(l), r.value = "draging";
                  _context2.next = 5;
                  return _a(s, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);

                case 5:
                  i = _context2.sent;
                  c = p.deltaX.value / i.width * m.value;
                  g(n) ? o[a.value] = n[a.value] + c : o = n + c, C(o);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function onTouchMove(_x2) {
          return _onTouchMove.apply(this, arguments);
        }

        return onTouchMove;
      }(),
      onTouchEnd: function onTouchEnd() {
        e.disabled || ("draging" === r.value && (C(o, !0), t("drag-end")), r.value = "");
      }
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e)), {
      barStyle: k,
      curValue: function curValue(t) {
        return "number" == typeof t ? e.modelValue[t] : e.modelValue;
      },
      buttonIndex: a
    });
  }
});
var Aa = {
  class: "nut-range-container"
},
    za = {
  key: 0,
  class: "min"
},
    Oa = {
  key: 0,
  class: "number"
},
    Va = {
  key: 0,
  class: "number"
},
    Pa = {
  key: 1,
  class: "max"
};

Ba.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Aa, [e.hiddenRange ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", za, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(+e.min), 1)), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    ref: "root",
    id: "root",
    style: e.wrapperStyle,
    class: e.classes,
    onClick: t[10] || (t[10] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.onClick && e.onClick.apply(e, arguments);
    }, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
    class: "nut-range-bar",
    style: e.barStyle
  }, [e.range ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 0
  }, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])([0, 1], function (l) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", {
      key: l,
      role: "slider",
      class: {
        "nut-range-button-wrapper-left": 0 == l,
        "nut-range-button-wrapper-right": 1 == l
      },
      tabindex: e.disabled ? -1 : 0,
      "aria-valuemin": +e.min,
      "aria-valuenow": e.curValue(l),
      "aria-valuemax": +e.max,
      "aria-orientation": "horizontal",
      onTouchstart: Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function (t) {
        "number" == typeof l && (e.buttonIndex = l), e.onTouchStart(t);
      }, ["stop", "prevent"]),
      onTouchmove: t[1] || (t[1] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
        return e.onTouchMove && e.onTouchMove.apply(e, arguments);
      }, ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
        return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
      }, ["stop", "prevent"])),
      onTouchcancel: t[3] || (t[3] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
        return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
      }, ["stop", "prevent"])),
      onClick: t[4] || (t[4] = function (e) {
        return e.stopPropagation();
      })
    }, [e.$slots.button ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "button", {
      key: 0
    }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
      key: 1,
      class: "nut-range-button",
      style: e.buttonStyle
    }, [e.hiddenTag ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Oa, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.curValue(l)), 1))], 4))], 42, ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"]);
  }), 64)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 1,
    role: "slider",
    class: "nut-range-button-wrapper",
    tabindex: e.disabled ? -1 : 0,
    "aria-valuemin": +e.min,
    "aria-valuenow": e.curValue(),
    "aria-valuemax": +e.max,
    "aria-orientation": "horizontal",
    onTouchstart: t[5] || (t[5] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function (t) {
      e.onTouchStart(t);
    }, ["stop", "prevent"])),
    onTouchmove: t[6] || (t[6] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.onTouchMove && e.onTouchMove.apply(e, arguments);
    }, ["stop", "prevent"])),
    onTouchend: t[7] || (t[7] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
    }, ["stop", "prevent"])),
    onTouchcancel: t[8] || (t[8] = Object(vue__WEBPACK_IMPORTED_MODULE_11__[/* withModifiers */ "e"])(function () {
      return e.onTouchEnd && e.onTouchEnd.apply(e, arguments);
    }, ["stop", "prevent"])),
    onClick: t[9] || (t[9] = function (e) {
      return e.stopPropagation();
    })
  }, [e.$slots.button ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "button", {
    key: 0
  }) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    key: 1,
    class: "nut-range-button",
    style: e.buttonStyle
  }, [e.hiddenTag ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Va, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.curValue(e.index)), 1))], 4))], 40, ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"]))], 4)], 6), e.hiddenRange ? Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Pa, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(+e.max), 1))]);
};

var _J45 = J("textarea"),
    La = _J45.componentName,
    Ea = _J45.create;

var Ma = Ea({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    textAlign: {
      type: String,
      default: "left"
    },
    limitShow: {
      type: Boolean,
      default: !1
    },
    maxLength: {
      type: [String, Number],
      default: ""
    },
    rows: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    autosize: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup: function setup(e, _ref61) {
    var t = _ref61.emit;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      var _ref62;

      return _ref62 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref62, La, !0), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref62, "".concat(La, "--disabled"), e.disabled), _ref62;
    }),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return {
        textAlign: e.textAlign,
        resize: e.autosize ? "vertical" : "none"
      };
    }),
        n = function n(l, a) {
      e.maxLength && l.length > Number(e.maxLength) && (l = l.substring(0, Number(e.maxLength))), t("change", l, a), t("update:modelValue", l, a);
    };

    return {
      classes: l,
      styles: a,
      change: function change(e) {
        var t = e.target;
        n(t.value, e);
      },
      focus: function focus(l) {
        e.disabled || e.readonly || t("focus", l);
      },
      blur: function blur(l) {
        if (e.disabled) return;
        if (e.readonly) return;
        var a = l.target.value;
        n(a, l), t("blur", l);
      }
    };
  }
});
var Ra = {
  key: 0,
  class: "nut-textarea__textarea"
},
    Ha = {
  key: 2,
  class: "nut-textarea__limit"
};

Ma.render = function (e, t, l, a, n, o) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [e.readonly ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Ra, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.modelValue), 1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("textarea", {
    key: 1,
    class: "nut-textarea__textarea",
    style: e.styles,
    rows: e.rows,
    disabled: e.disabled,
    readonly: e.readonly,
    value: e.modelValue,
    onInput: t[1] || (t[1] = function () {
      return e.change && e.change.apply(e, arguments);
    }),
    onBlur: t[2] || (t[2] = function () {
      return e.blur && e.blur.apply(e, arguments);
    }),
    onFocus: t[3] || (t[3] = function () {
      return e.focus && e.focus.apply(e, arguments);
    }),
    maxlength: e.maxLength,
    placeholder: e.placeholder
  }, null, 44, ["rows", "disabled", "readonly", "value", "maxlength", "placeholder"])), e.limitShow ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Ha, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.modelValue.length) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.maxLength), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 2);
};

var Fa = function Fa() {
  Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Fa);

  this.url = "", this.method = "post", this.xhrState = 200, this.timeout = 3e4, this.headers = {}, this.withCredentials = !1;
};

var ja = /*#__PURE__*/function () {
  function ja(e) {
    Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ja);

    this.options = e;
  }

  Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(ja, [{
    key: "upload",
    value: function upload() {
      var e;
      var t = this.options,
          l = new XMLHttpRequest();

      if (l.timeout = t.timeout, l.upload) {
        l.upload.addEventListener("progress", function (e) {
          var l;
          null == (l = t.onProgress) || l.call(t, e, t);
        }, !1), l.onreadystatechange = function () {
          var e, a;
          4 === l.readyState && (l.status === t.xhrState ? null == (e = t.onSuccess) || e.call(t, l.responseText, t) : null == (a = t.onFailure) || a.call(t, l.responseText, t));
        }, l.withCredentials = t.withCredentials, l.open(t.method, t.url, !0);

        for (var _i = 0, _Object$entries = Object.entries(t.headers); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_Object$entries[_i], 2),
              _e4 = _Object$entries$_i[0],
              _a4 = _Object$entries$_i[1];

          l.setRequestHeader(_e4, _a4);
        }

        null == (e = t.onStart) || e.call(t, t), l.send(t.formData);
      } else console.warn("浏览器不支持 XMLHttpRequest");
    }
  }, {
    key: "uploadTaro",
    value: function uploadTaro(e, t) {
      var l;
      var a = this.options,
          n = t.uploadFile({
        url: a.url,
        filePath: e,
        header: i({
          "Content-Type": "multipart/form-data"
        }, a.headers),
        formData: a.formData,
        name: "files",
        success: function success(e) {
          var t, l;
          e.errMsg ? null == (t = a.onFailure) || t.call(a, e, a) : a.xhrState === e.statusCode && (null == (l = a.onSuccess) || l.call(a, e, a));
        },
        fail: function fail(e) {
          var t;
          null == (t = a.onFailure) || t.call(a, e, a);
        }
      });
      null == (l = a.onStart) || l.call(a, a), n.progress(function (e) {
        var t;
        null == (t = a.onProgress) || t.call(a, e, a);
      });
    }
  }]);

  return ja;
}();

var _J46 = J("uploader"),
    Ya = _J46.componentName,
    qa = _J46.create;

var Xa = function Xa() {
  Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Xa);

  this.status = "ready", this.uid = new Date().getTime().toString(), this.formData = {};
};

var Ua = qa({
  props: {
    name: {
      type: String,
      default: "file"
    },
    url: {
      type: String,
      default: ""
    },
    sizeType: {
      type: Array,
      default: function _default() {
        return ["original", "compressed"];
      }
    },
    sourceType: {
      type: Array,
      default: function _default() {
        return ["album", "camera"];
      }
    },
    timeout: {
      type: [Number, String],
      default: 3e4
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isPreview: {
      type: Boolean,
      default: !0
    },
    isDeletable: {
      type: Boolean,
      default: !0
    },
    method: {
      type: String,
      default: "post"
    },
    capture: {
      type: Boolean,
      default: !1
    },
    maximize: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    maximum: {
      type: [Number, String],
      default: 9
    },
    clearInput: {
      type: Boolean,
      default: !1
    },
    accept: {
      type: String,
      default: "*"
    },
    headers: {
      type: Object,
      default: {}
    },
    data: {
      type: Object,
      default: {}
    },
    uploadIcon: {
      type: String,
      default: "photograph"
    },
    xhrState: {
      type: [Number, String],
      default: 200
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    beforeDelete: {
      type: Function,
      default: function _default(e, t) {
        return !0;
      }
    },
    onChange: {
      type: Function
    }
  },
  emits: ["start", "progress", "oversize", "success", "failure", "change", "delete", "update:fileList"],
  setup: function setup(e, _ref63) {
    var t = _ref63.emit;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])(e.fileList),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Ya, !0);
    }),
        n = function n(a) {
      a.forEach(function (a) {
        var n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])(new Xa());

        n.path = a.path, n.status = "uploading", n.type = a.type, e.isPreview && (n.url = a.path), l.push(n), function (a) {
          var n = new Fa();
          n.url = e.url;

          for (var _i2 = 0, _Object$entries2 = Object.entries(e.data); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_Object$entries2[_i2], 2),
                _t9 = _Object$entries2$_i[0],
                _l5 = _Object$entries2$_i[1];

            a.formData[_t9] = _l5;
          }

          n.formData = a.formData, n.method = e.method, n.headers = e.headers, n.onStart = function (e) {
            a.status = "ready", t("start", e);
          }, n.onProgress = function (e, l) {
            a.status = "uploading", t("progress", {
              e: e,
              option: l
            });
          }, n.onSuccess = function (e, n) {
            a.status = "success", t("success", {
              data: e,
              option: n
            }), t("update:fileList", l);
          }, n.onFailure = function (e, l) {
            a.status = "error", t("failure", {
              data: e,
              option: l
            });
          }, new ja(n).uploadTaro(a.path, _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a);
        }(n);
      });
    },
        o = function o(a) {
      var o = a.tempFilePaths,
          s = a.tempFiles,
          i = function (l) {
        var a = 1 * e.maximum,
            n = 1 * e.maximize,
            o = new Array();
        return l = l.filter(function (e) {
          return !(e.size > n && (o.push(e), 1));
        }), o.length && t("oversize", o), l.length > a && l.splice(a - 1, l.length - a), l;
      }(s);

      n(i), t("change", {
        fileList: l
      });
    };

    return {
      onDelete: function onDelete(a, n) {
        e.beforeDelete(a, l) ? (l.splice(n, 1), t("delete", {
          file: a,
          fileList: l
        })) : console.log("用户阻止了删除！");
      },
      fileList: l,
      classes: a,
      chooseImage: function chooseImage() {
        e.disabled || _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.chooseImage({
          count: 1 * e.maximize - e.fileList.length,
          sizeType: e.sizeType,
          sourceType: e.sourceType,
          success: o
        });
      }
    };
  }
});
var Wa = {
  key: 0,
  class: "nut-uploader__slot"
},
    Qa = {
  class: "nut-uploader__preview-img"
},
    Ja = {
  key: 2,
  class: "tips"
},
    Ga = {
  key: 0,
  class: "nut-uploader__upload"
};

Ua.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-button"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
    class: e.classes
  }, [e.$slots.default ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Wa, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderSlot */ "C"])(e.$slots, "default"), e.maximum - e.fileList.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
    key: 0,
    class: "nut-uploader__input",
    onClick: e.chooseImage
  }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], {
    key: 1
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.fileList, function (t, l) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", {
      class: "nut-uploader__preview",
      key: t.uid
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", Qa, [e.isDeletable ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, {
      key: 0,
      color: "rgba(0,0,0,0.6)",
      onClick: function onClick(a) {
        return e.onDelete(t, l);
      },
      class: "close",
      name: "circle-close"
    }, null, 8, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), t.url ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("image", {
      key: 1,
      class: "nut-uploader__preview-img__c",
      src: t.url
    }, null, 8, ["src"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), "success" != t.status ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Ja, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.status), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)])]);
  }), 128)), e.maximum - e.fileList.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("view", Ga, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
    color: "#808080",
    name: e.uploadIcon
  }, null, 8, ["name"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
    class: "nut-uploader__input",
    onClick: e.chooseImage
  }, null, 8, ["onClick"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)], 64))], 2);
};

var _J47 = J("address"),
    Ka = _J47.create,
    Za = _J47.componentName;

var en = Ka({
  inheritAttrs: !1,
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "custom"
    },
    customAddressTitle: {
      type: String,
      default: "请选择所在地区"
    },
    province: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    city: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    country: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    town: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isShowCustomAddress: {
      type: Boolean,
      default: !0
    },
    existAddress: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    existAddressTitle: {
      type: String,
      default: "配送至"
    },
    customAndExistTitle: {
      type: String,
      default: "选择其他地址"
    },
    defaultIcon: {
      type: String,
      default: "location2"
    },
    selectedIcon: {
      type: String,
      default: "Check"
    },
    closeBtnIcon: {
      type: String,
      default: "circle-close"
    },
    backBtnIcon: {
      type: String,
      default: "left"
    }
  },
  components: {
    "nut-icon": ye,
    "nut-popup": Ve
  },
  emits: ["update:visible", "type", "change", "selected", "close", "close-mask", "switch-module"],
  setup: function setup(e, _ref65) {
    var t = _ref65.emit;

    var l = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* computed */ "e"])(function () {
      return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Za, !0);
    }),
        a = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
        n = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      province: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
      city: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
      country: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null),
      town: Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(null)
    }),
        o = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.visible),
        s = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(e.type),
        c = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(0),
        r = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(["province", "city", "country", "town"]),
        p = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      province: e.province,
      city: e.city,
      country: e.country,
      town: e.town
    }),
        m = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({
      province: {},
      city: {},
      country: {},
      town: {}
    });

    var y = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* reactive */ "j"])({});

    var v = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])("self"),
        f = Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* ref */ "l"])(20),
        g = function g() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "self";
      e.closeBtnIcon && (v.value = "cross" == t ? "cross" : "self", o.value = !1);
    },
        h = function h() {
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default.a.createSelectorQuery().selectAll(".".concat(r.value[c.value])).boundingClientRect(function (e) {
          e.forEach(function (e) {
            e.width > 0 && (f.value = e.left);
          });
        }).exec();
      }, 100);
    },
        b = function b() {
      for (var _e5 = 0; _e5 < r.value.length; _e5++) {
        m[r.value[_e5]] = {};
      }

      c.value = 0, h();
    },
        k = function k() {
      var e = Object.assign({
        addressIdStr: "",
        addressStr: ""
      }, m),
          l = {
        data: {},
        type: s.value
      };

      if ("custom" == s.value) {
        var _t10 = e.province,
            _a5 = e.city,
            _n3 = e.country,
            _o2 = e.town;
        e.addressIdStr = [_t10.id || 0, _a5.id || 0, _n3.id || 0, _o2.id || 0].join("_"), e.addressStr = [_t10.name, _a5.name, _n3.name, _o2.name].join(""), l.data = e;
      } else l.data = y;

      b(), "self" == v.value ? t("close", l) : t("close-mask", {
        closeWay: v
      }), t("update:visible", !1);
    };

    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.visible;
    }, function (e) {
      o.value = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return o.value;
    }, function (e) {
      0 == e && k();
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.province;
    }, function (e) {
      p.province = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.city;
    }, function (e) {
      p.city = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.country;
    }, function (e) {
      p.country = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.town;
    }, function (e) {
      p.town = e;
    }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* watch */ "I"])(function () {
      return e.existAddress;
    }, function (e) {
      e.forEach(function (e, t) {
        e.selectedAddress && (y = e);
      });
    }), i(i({
      classes: l,
      showPopup: o,
      privateType: s,
      tabIndex: c,
      tabName: r,
      regionList: p,
      selectedRegion: m,
      selectedExistAddress: y,
      switchModule: function switchModule() {
        "exist" == s.value ? s.value = "custom" : s.value = "exist", b(), t("switch-module", {
          type: s.value
        });
      },
      closeWay: v,
      close: k,
      getTabName: function getTabName(e, t) {
        return e.name || c.value < t ? e.name : "请选择";
      },
      nextAreaList: function nextAreaList(e) {
        var l = {
          next: "",
          value: "",
          custom: r.value[c.value]
        };
        m[r.value[c.value]] = e;

        for (var _t11 = c.value; _t11 < c.value - 1; _t11++) {
          m[r.value[_t11 + 1]] = {};
        }

        c.value < 3 ? (c.value = c.value + 1, h(), l.next = r.value[c.value], l.value = e, t("change", l)) : g();
      },
      regionLine: a,
      lineDistance: f,
      changeRegionTab: function changeRegionTab(e, t, l) {
        c.value = l, h();
      },
      selectedExist: function selectedExist(l) {
        var a = e.existAddress;
        var n = {};
        a.forEach(function (e, t) {
          e && e.selectedAddress && (n = e), e.selectedAddress = !1;
        }), l.selectedAddress = !0, y = l, t("selected", n, l, a), g();
      },
      clickOverlay: function clickOverlay() {
        v.value = "mask";
      },
      handClose: g
    }, Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(e)), Object(vue__WEBPACK_IMPORTED_MODULE_9__[/* toRefs */ "s"])(n));
  }
});
var tn = {
  class: "region-group"
},
    ln = {
  class: "exist-address-group"
},
    an = {
  class: "exist-ul"
},
    nn = {
  class: "btn"
};

en.render = function (e, t, l, a, n, o) {
  var s = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-icon"),
      i = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("view-block"),
      c = Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* resolveComponent */ "D"])("nut-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(c, {
    position: "bottom",
    onClose: e.close,
    onClickOverlay: e.clickOverlay,
    onOpen: t[3] || (t[3] = function (t) {
      return e.closeWay = "self";
    }),
    visible: e.showPopup,
    "onUpdate:visible": t[4] || (t[4] = function (t) {
      return e.showPopup = t;
    }),
    class: e.classes
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
        class: "nut-address"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
          return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
            class: "nut-address__header"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
                class: "arrow-back",
                onClick: e.switchModule
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
                  return ["custom" == e.privateType && "exist" == e.type && e.backBtnIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
                    key: 0,
                    name: e.backBtnIcon,
                    color: "#cccccc"
                  }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)];
                }),
                _: 1
              }, 8, ["onClick"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
                class: "nut-address__header__title"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])("custom" == e.privateType ? e.customAddressTitle : e.existAddressTitle), 1)];
                }),
                _: 1
              }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
                class: "arrow-close",
                onClick: t[1] || (t[1] = function (t) {
                  return e.handClose("cross");
                })
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
                  return [e.closeBtnIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
                    key: 0,
                    name: e.closeBtnIcon,
                    color: "#cccccc",
                    size: "18px"
                  }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)];
                }),
                _: 1
              })];
            }),
            _: 1
          }), "custom" == e.privateType ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, {
            key: 0,
            class: "custom-address"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
                class: "region-tab"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
                  return [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.selectedRegion, function (t, l, a) {
                    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, {
                      class: ["tab-item", [a == e.tabIndex ? "active" : "", l]],
                      key: a,
                      ref: l,
                      onClick: function onClick(n) {
                        return e.changeRegionTab(t, l, a);
                      }
                    }, {
                      default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
                        return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.getTabName(t, a)), 1)];
                      }),
                      _: 2
                    }, 1032, ["class", "onClick"]);
                  }), 128)), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
                    class: "region-tab-line",
                    ref: "regionLine",
                    style: {
                      left: e.lineDistance + "px"
                    }
                  }, null, 8, ["style"])];
                }),
                _: 1
              }), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(i, {
                class: "region-con"
              }, {
                default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
                  return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("ul", tn, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.regionList[e.tabName[e.tabIndex]], function (t, l) {
                    return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("li", {
                      key: l,
                      class: ["region-item", [e.selectedRegion[e.tabName[e.tabIndex]].id == t.id ? "active" : ""]],
                      onClick: function onClick(l) {
                        return e.nextAreaList(t);
                      }
                    }, [e.selectedRegion[e.tabName[e.tabIndex]].id == t.id ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(s, {
                      key: 0,
                      class: "region-item-icon",
                      type: "self",
                      name: e.selectedIcon,
                      color: "#FA2C19",
                      size: "13px"
                    }, null, 8, ["name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createTextVNode */ "j"])(Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.name), 1)], 10, ["onClick"]);
                  }), 128))])];
                }),
                _: 1
              })];
            }),
            _: 1
          })) : "exist" == e.privateType ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(i, {
            key: 1,
            class: "exist-address"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* withCtx */ "K"])(function () {
              return [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("div", ln, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("ul", an, [(Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(!0), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])(vue__WEBPACK_IMPORTED_MODULE_8__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* renderList */ "B"])(e.existAddress, function (t, l) {
                return Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("li", {
                  class: ["exist-item", [t.selectedAddress ? "active" : ""]],
                  key: l,
                  onClick: function onClick(l) {
                    return e.selectedExist(t);
                  }
                }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])(s, {
                  class: "exist-item-icon",
                  type: "self",
                  name: t.selectedAddress ? e.selectedIcon : e.defaultIcon,
                  color: t.selectedAddress ? "#FA2C19" : "",
                  size: "13px"
                }, null, 8, ["name", "color"]), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("view", null, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(t.provinceName + t.cityName + t.countyName + t.townName + t.addressDetail), 1)], 10, ["onClick"]);
              }), 128))])]), e.isShowCustomAddress ? (Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* openBlock */ "z"])(), Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createBlock */ "f"])("div", {
                key: 0,
                class: "choose-other",
                onClick: t[2] || (t[2] = function () {
                  return e.switchModule && e.switchModule.apply(e, arguments);
                })
              }, [Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createVNode */ "k"])("div", nn, Object(vue__WEBPACK_IMPORTED_MODULE_10__[/* toDisplayString */ "K"])(e.customAndExistTitle), 1)])) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)];
            }),
            _: 1
          })) : Object(vue__WEBPACK_IMPORTED_MODULE_8__[/* createCommentVNode */ "g"])("", !0)];
        }),
        _: 1
      })];
    }),
    _: 1
  }, 8, ["onClose", "onClickOverlay", "visible", "class"]);
};

var on = {
  install: function install(e) {
    [Z, ce, ye, ge, Ce, Ve, $e, je, We, Ke, st, dt, ft, Nt, Vt, Et, Qt, al, sl, fl, bl, Dl, Vl, Hl, Yl, Ul, ma, fa, ha, ka, Ba, Ma, Ua, en].forEach(function (t) {
      t.install ? e.use(t) : t.name && e.component(t.name, t);
    });
  },
  version: "3.0.3"
};
/* unused harmony default export */ var _unused_webpack_default_export = (on);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/style.css":
/*!*******************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/style.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/const.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/const.js ***!
  \*********************************************************/
/*! exports provided: HOOK_SETUP */
/*! exports used: HOOK_SETUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOOK_SETUP; });
var HOOK_SETUP = 'devtools-plugin:setup';

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/env.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/env.js ***!
  \*******************************************************/
/*! exports provided: getDevtoolsGlobalHook, getTarget */
/*! exports used: getDevtoolsGlobalHook, getTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(navigator, window, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevtoolsGlobalHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTarget; });
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  // @ts-ignore
  return typeof navigator !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: setupDevtoolsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupDevtoolsPlugin", function() { return setupDevtoolsPlugin; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/@vue/devtools-api/lib/esm/env.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");



function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  var hook = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getDevtoolsGlobalHook */ "a"])();

  if (hook) {
    hook.emit(_const__WEBPACK_IMPORTED_MODULE_1__[/* HOOK_SETUP */ "a"], pluginDescriptor, setupFn);
  } else {
    var target = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getTarget */ "b"])();
    var list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: pluginDescriptor,
      setupFn: setupFn
    });
  }
}

/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/*! exports provided: customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, compatUtils, computed, createBlock, createCommentVNode, createHydrationRenderer, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmit, defineEmits, defineExpose, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, h, handleError, initCustomFormatter, inject, isRuntimeOnly, isVNode, mergeDefaults, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useAttrs, useContext, useSSRContext, useSlots, useTransitionState, version, warn, watch, watchEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withScopeId, Transition, TransitionGroup, createApp, createSSRApp, hydrate, render, useCssModule, useCssVars, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, withKeys, withModifiers */
/*! exports used: Transition, createApp, vModelText, vShow, withModifiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, Element, window, navigator, requestAnimationFrame, SVGElement) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transition; });
/* unused harmony export TransitionGroup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApp; });
/* unused harmony export createSSRApp */
/* unused harmony export hydrate */
/* unused harmony export render */
/* unused harmony export useCssModule */
/* unused harmony export useCssVars */
/* unused harmony export vModelCheckbox */
/* unused harmony export vModelDynamic */
/* unused harmony export vModelRadio */
/* unused harmony export vModelSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vModelText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return vShow; });
/* unused harmony export withKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return withModifiers; });
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");






var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);

    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }

    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    var cloned = el.cloneNode(true); // #3072
    // - in `patchDOMProp`, we store the actual value in the `el._value` property.
    // - normally, elements using `:value` bindings will not be hoisted, but if
    //   the bound value is a constant, e.g. `:value="true"` - they do get
    //   hoisted.
    // - in production, hoisted nodes are cloned when subsequent inserts, but
    //   cloneNode() does not copy the custom property we attached.
    // - This may need to account for other custom DOM properties we attach to
    //   elements in addition to `_value` in the future.

    if ("_value" in el) {
      cloned._value = el._value;
    }

    return cloned;
  },
  // __UNSAFE__
  // Reason: insertAdjacentHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, cached) {
    if (cached) {
      var _first;

      var _last;

      var i = 0;
      var l = cached.length;

      for (; i < l; i++) {
        var node = cached[i].cloneNode(true);
        if (i === 0) _first = node;
        if (i === l - 1) _last = node;
        parent.insertBefore(node, anchor);
      }

      return [_first, _last];
    } // <parent> before | first ... last | anchor </parent>


    var before = anchor ? anchor.previousSibling : parent.lastChild;

    if (anchor) {
      var insertionPoint;
      var usingTempInsertionPoint = false;

      if (anchor instanceof Element) {
        insertionPoint = anchor;
      } else {
        // insertAdjacentHTML only works for elements but the anchor is not an
        // element...
        usingTempInsertionPoint = true;
        insertionPoint = isSVG ? doc.createElementNS(svgNS, 'g') : doc.createElement('div');
        parent.insertBefore(insertionPoint, anchor);
      }

      insertionPoint.insertAdjacentHTML('beforebegin', content);

      if (usingTempInsertionPoint) {
        parent.removeChild(insertionPoint);
      }
    } else {
      parent.insertAdjacentHTML('beforeend', content);
    }

    var first = before ? before.nextSibling : parent.firstChild;
    var last = anchor ? anchor.previousSibling : parent.lastChild;
    var ret = [];

    while (first) {
      ret.push(first);
      if (first === last) break;
      first = first.nextSibling;
    }

    return ret;
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  if (value == null) {
    value = '';
  }

  if (isSVG) {
    el.setAttribute('class', value);
  } else {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    var transitionClasses = el._vtc;

    if (transitionClasses) {
      value = (value ? [value].concat(Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(transitionClasses)) : Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(transitionClasses)).join(' ');
    }

    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;

  if (!next) {
    el.removeAttribute('style');
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isString */ "C"])(next)) {
    if (prev !== next) {
      var current = style.display;
      style.cssText = next; // indicates that the `display` of the element is controlled by `v-show`,
      // so we always keep the current `display` value regardless of the `style` value,
      // thus handing over control to `v-show`.

      if ('_vod' in el) {
        style.display = current;
      }
    }
  } else {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isString */ "C"])(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* hyphenate */ "l"])(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* camelize */ "e"])(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* capitalize */ "f"])(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isSpecialBooleanAttr */ "B"])(key);

    if (value == null || isBoolean && value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS') {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  if (value === '' || value == null) {
    var type = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(el[key]);

    if (value === '' && type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      el[key] = true;
      return;
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      el[key] = '';
      el.removeAttribute(key);
      return;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      el[key] = 0;
      el.removeAttribute(key);
      return;
    }
  } // some properties perform value validation and throw


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }
} // Async edge case fix requires storing an event listener's attach timestamp.


var _getNow = Date.now;
var skipTimestampCheck = false;

if (typeof window !== 'undefined') {
  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  if (_getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = function _getNow() {
      return performance.now();
    };
  } // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
  // and does not fire microtasks in between event propagation, so safe to exclude.


  var ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
} // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* hyphenate */ "l"])(name.slice(2)), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* callWithAsyncErrorHandling */ "d"])(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var forcePatchProp = function forcePatchProp(_, key) {
  return key === 'value';
};

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  switch (key) {
    // special
    case 'class':
      patchClass(el, nextValue, isSVG);
      break;

    case 'style':
      patchStyle(el, prevValue, nextValue);
      break;

    default:
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isOn */ "v"])(key)) {
        // ignore v-model listeners
        if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isModelListener */ "t"])(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      } else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
          el._trueValue = nextValue;
        } else if (key === 'false-value') {
          el._falseValue = nextValue;
        }

        patchAttr(el, key, nextValue, isSVG);
      }

      break;
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML
    if (key === 'innerHTML') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ "o"])(value)) {
      return true;
    }

    return false;
  } // spellcheck and draggable are numerated attrs, however their
  // corresponding DOM properties are actually booleans - this leads to
  // setting it with a string "false" value leading it to be coerced to
  // `true`, so we need to always treat them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable') {
    return false;
  } // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.


  if (key === 'form') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // #2766 <textarea type> must be set as attribute


  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isString */ "C"])(value)) {
    return false;
  }

  return key in el;
}

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])();

    if (!instance) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("useCssModule must be called inside setup()");
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* EMPTY_OBJ */ "b"];
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("Current instance does not have CSS modules injected.");
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* EMPTY_OBJ */ "b"];
    }

    var mod = modules[name];

    if (!mod) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* EMPTY_OBJ */ "b"];
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])();
  /* istanbul ignore next */

  if (!instance) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* onMounted */ "w"])(function () {
    return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* watchEffect */ "J"])(setVars, {
      flush: 'post'
    });
  });
  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* onUpdated */ "y"])(setVars);
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      var suspense = vnode.suspense;
      vnode = suspense.activeBranch;

      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(function () {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    var style = vnode.el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* Fragment */ "b"]) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref) {
  var slots = _ref.slots;
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* h */ "o"])(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* BaseTransition */ "a"], resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* extend */ "h"])({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* BaseTransition */ "a"].props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */

var callHook = function callHook(hook) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(hook)) {
    hook.forEach(function (h) {
      return h.apply(void 0, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(args));
    });
  } else if (hook) {
    hook.apply(void 0, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(args));
  }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */


var hasExplicitCallback = function hasExplicitCallback(hook) {
  return hook ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(hook) ? hook.some(function (h) {
    return h.length > 1;
  }) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      callHook(hook, [el, resolve]);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* extend */ "h"])(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      callHook(_onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      callHook(_onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(_onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(_onLeave, [el, resolve]);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(_onEnterCancelled, [el]);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(_onAppearCancelled, [el]);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      callHook(_onLeaveCancelled, [el]);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isObject */ "u"])(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* toNumber */ "M"])(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc.delete(cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* extend */ "h"])({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])();
    var state = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* useTransitionState */ "G"])();
    var prevChildren;
    var children;
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* onUpdated */ "y"])(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "r"])(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* Fragment */ "b"];
      prevChildren = children;
      children = slots.default ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* getTransitionRawChildren */ "n"])(slots.default()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* setTransitionHooks */ "F"])(child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* resolveTransitionHooks */ "E"])(child, cssTransitionProps, state, instance));
        } else if (true) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i = 0; _i < prevChildren.length; _i++) {
          var _child = prevChildren[_i];
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* setTransitionHooks */ "F"])(_child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* resolveTransitionHooks */ "E"])(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* createVNode */ "k"])(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'];
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(fn) ? function (value) {
    return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* invokeArrayFns */ "m"])(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    trigger(target, 'input');
  }
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref3, vnode) {
    var _ref3$modifiers = _ref3.modifiers,
        lazy = _ref3$modifiers.lazy,
        trim = _ref3$modifiers.trim,
        number = _ref3$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || el.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* toNumber */ "M"])(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref4) {
    var value = _ref4.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref5, vnode) {
    var value = _ref5.value,
        _ref5$modifiers = _ref5.modifiers,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el) {
      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* toNumber */ "M"])(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(modelValue)) {
        var index = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* looseIndexOf */ "F"])(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isSet */ "A"])(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref6, vnode) {
  var value = _ref6.value,
      oldValue = _ref6.oldValue;
  el._modelValue = value;

  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(value)) {
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* looseIndexOf */ "F"])(value, vnode.props.value) > -1;
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isSet */ "A"])(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* looseEqual */ "E"])(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref7, vnode) {
    var value = _ref7.value;
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* looseEqual */ "E"])(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref8, vnode) {
    var value = _ref8.value,
        oldValue = _ref8.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* looseEqual */ "E"])(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value,
        number = _ref9.modifiers.number;
    var isSetModel = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isSet */ "A"])(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* toNumber */ "M"])(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref10) {
    var value = _ref10.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref11) {
    var value = _ref11.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(value) && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isSet */ "A"])(value)) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "n"])(value)) {
        option.selected = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* looseIndexOf */ "F"])(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* looseEqual */ "E"])(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse;

  switch (el.tagName) {
    case 'SELECT':
      modelToUse = vModelSelect;
      break;

    case 'TEXTAREA':
      modelToUse = vModelText;
      break;

    default:
      switch (vnode.props && vnode.props.type) {
        case 'checkbox':
          modelToUse = vModelCheckbox;
          break;

        case 'radio':
          modelToUse = vModelRadio;
          break;

        default:
          modelToUse = vModelText;
      }

  }

  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  delete: 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) {
      return;
    }

    var eventKey = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* hyphenate */ "l"])(event.key);

    if (modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref12, _ref13) {
    var value = _ref12.value;
    var transition = _ref13.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref14, _ref15) {
    var value = _ref14.value;
    var transition = _ref15.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref16, _ref17) {
    var value = _ref16.value,
        oldValue = _ref16.oldValue;
    var transition = _ref17.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref18) {
    var value = _ref18.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
}

var rendererOptions = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* extend */ "h"])({
  patchProp: patchProp,
  forcePatchProp: forcePatchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* createRenderer */ "i"])(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* createHydrationRenderer */ "h"])(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ "o"])(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isHTMLTag */ "q"])(tag) || Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isSVGTag */ "z"])(tag);
    },
    writable: false
  });
} // dev only


function injectCompilerOptionsCheck(app) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* isRuntimeOnly */ "q"])()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])(msg);
        return compilerOptions;
      },
      set: function set() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])(msg);
      }
    });
  }
}

function normalizeContainer(container) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__[/* isString */ "C"])(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && container instanceof window.ShadowRoot && container.mode === 'closed') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__[/* warn */ "H"])("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.ts":
/*!****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.ts ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nutui/nutui-taro */ "./node_modules/@nutui/nutui-taro/dist/nutui.es.js");
/* harmony import */ var _nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nutui/nutui-taro/dist/style.css */ "./node_modules/@nutui/nutui-taro/dist/style.css");
/* harmony import */ var _nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);




var App = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createApp */ "b"])({
  onShow: function onShow(options) {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖

});
App.use(_nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"]).use(_nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_1__[/* Toast */ "b"]);
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm-bundler.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm-bundler.js ***!
  \****************************************************************/
/*! exports provided: NavigationFailureType, RouterLink, RouterView, START_LOCATION, createMemoryHistory, createRouter, createRouterMatcher, createWebHashHistory, createWebHistory, isNavigationFailure, matchedRouteKey, onBeforeRouteLeave, onBeforeRouteUpdate, parseQuery, routeLocationKey, routerKey, routerViewLocationKey, stringifyQuery, useLink, useRoute, useRouter, viewDepthKey */
/*! exports used: useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, document) {/* unused harmony export NavigationFailureType */
/* unused harmony export RouterLink */
/* unused harmony export RouterView */
/* unused harmony export START_LOCATION */
/* unused harmony export createMemoryHistory */
/* unused harmony export createRouter */
/* unused harmony export createRouterMatcher */
/* unused harmony export createWebHashHistory */
/* unused harmony export createWebHistory */
/* unused harmony export isNavigationFailure */
/* unused harmony export matchedRouteKey */
/* unused harmony export onBeforeRouteLeave */
/* unused harmony export onBeforeRouteUpdate */
/* unused harmony export parseQuery */
/* unused harmony export routeLocationKey */
/* unused harmony export routerKey */
/* unused harmony export routerViewLocationKey */
/* unused harmony export stringifyQuery */
/* unused harmony export useLink */
/* unused harmony export useRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRouter; });
/* unused harmony export viewDepthKey */
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_devtools_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/lib/esm/index.js");





var _ErrorTypeMessages;

/*!
  * vue-router v4.0.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */


var hasSymbol = typeof Symbol === 'function' && Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Symbol.toStringTag) === 'symbol';

var PolySymbol = function PolySymbol(name) {
  return (// vr = vue router
    hasSymbol ? Symbol( true ? '[vue-router]: ' + name : undefined) : ( true ? '[vue-router]: ' : undefined) + name
  );
}; // rvlm = Router View Location Matched

/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */


var matchedRouteKey = /*#__PURE__*/PolySymbol( true ? 'router view location matched' : undefined);
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */

var viewDepthKey = /*#__PURE__*/PolySymbol( true ? 'router view depth' : undefined);
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */

var routerKey = /*#__PURE__*/PolySymbol( true ? 'router' : undefined);
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */

var routeLocationKey = /*#__PURE__*/PolySymbol( true ? 'route location' : undefined);
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */

var routerViewLocationKey = /*#__PURE__*/PolySymbol( true ? 'router view location' : undefined);
var isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

var assign = Object.assign;

function applyToParams(fn, params) {
  var newParams = {};

  for (var key in params) {
    var value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }

  return newParams;
}

var noop = function noop() {};

function warn(msg) {
  // avoid using ...args as it breaks in older Edge builds
  var args = Array.from(arguments).slice(1);
  console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

var TRAILING_SLASH_RE = /\/$/;

var removeTrailingSlash = function removeTrailingSlash(path) {
  return path.replace(TRAILING_SLASH_RE, '');
};
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */


function parseURL(parseQuery, location) {
  var currentLocation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
  var path,
      query = {},
      searchString = '',
      hash = ''; // Could use URL and URLSearchParams but IE 11 doesn't support it

  var searchPos = location.indexOf('?');
  var hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);

  if (searchPos > -1) {
    path = location.slice(0, searchPos);
    searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
    query = parseQuery(searchString);
  }

  if (hashPos > -1) {
    path = path || location.slice(0, hashPos); // keep the # character

    hash = location.slice(hashPos, location.length);
  } // no search and no query


  path = resolveRelativePath(path != null ? path : location, currentLocation); // empty path means a relative query or hash `?foo=f`, `#thing`

  return {
    fullPath: path + (searchString && '?') + searchString + hash,
    path: path,
    query: query,
    hash: hash
  };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */


function stringifyURL(stringifyQuery, location) {
  var query = location.query ? stringifyQuery(location.query) : '';
  return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */


function stripBase(pathname, base) {
  // no base or base is not found at the beginning
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
  return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */


function isSameRouteLocation(stringifyQuery, a, b) {
  var aLastIndex = a.matched.length - 1;
  var bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */


function isSameRouteRecord(a, b) {
  // since the original record has an undefined value for aliasOf
  // but all aliases point to the original record, this will always compare
  // the original record
  return (a.aliasOf || a) === (b.aliasOf || b);
}

function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (var key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
  }

  return true;
}

function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */


function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every(function (value, i) {
    return value === b[i];
  }) : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */


function resolveRelativePath(to, from) {
  if (to.startsWith('/')) return to;

  if ( true && !from.startsWith('/')) {
    warn("Cannot resolve a relative location without an absolute path. Trying to resolve \"".concat(to, "\" from \"").concat(from, "\". It should look like \"/").concat(from, "\"."));
    return to;
  }

  if (!to) return from;
  var fromSegments = from.split('/');
  var toSegments = to.split('/');
  var position = fromSegments.length - 1;
  var toPosition;
  var segment;

  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition]; // can't go below zero

    if (position === 1 || segment === '.') continue;
    if (segment === '..') position--; // found something that is not relative path
    else break;
  }

  return fromSegments.slice(0, position).join('/') + '/' + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join('/');
}

var NavigationType;

(function (NavigationType) {
  NavigationType["pop"] = "pop";
  NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));

var NavigationDirection;

(function (NavigationDirection) {
  NavigationDirection["back"] = "back";
  NavigationDirection["forward"] = "forward";
  NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */


var START = ''; // Generic utils

/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */

function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/'; // strip full URL origin

      base = base.replace(/^\w+:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  } // ensure leading slash when it was removed by the regex above avoid leading
  // slash with hash because the file could be read from the disk like file://
  // and the leading slash would cause problems


  if (base[0] !== '/' && base[0] !== '#') base = '/' + base; // remove the trailing slash so all other method can just do `base + fullPath`
  // to build an href

  return removeTrailingSlash(base);
} // remove any character before the hash


var BEFORE_HASH_RE = /^[^#]+#/;

function createHref(base, location) {
  return base.replace(BEFORE_HASH_RE, '#') + location;
}

function getElementPosition(el, offset) {
  var docRect = document.documentElement.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}

var computeScrollPosition = function computeScrollPosition() {
  return {
    left: window.pageXOffset,
    top: window.pageYOffset
  };
};

function scrollToPosition(position) {
  var scrollToOptions;

  if ('el' in position) {
    var positionEl = position.el;
    var isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
    /**
     * `id`s can accept pretty much any characters, including CSS combinators
     * like `>` or `~`. It's still possible to retrieve elements using
     * `document.getElementById('~')` but it needs to be escaped when using
     * `document.querySelector('#\\~')` for it to be valid. The only
     * requirements for `id`s are them to be unique on the page and to not be
     * empty (`id=""`). Because of that, when passing an id selector, it should
     * be properly escaped for it to work with `querySelector`. We could check
     * for the id selector to be simple (no CSS combinators `+ >~`) but that
     * would make things inconsistent since they are valid characters for an
     * `id` but would need to be escaped when using `querySelector`, breaking
     * their usage and ending up in no selector returned. Selectors need to be
     * escaped:
     *
     * - `#1-thing` becomes `#\31 -thing`
     * - `#with~symbols` becomes `#with\\~symbols`
     *
     * - More information about  the topic can be found at
     *   https://mathiasbynens.be/notes/html5-id-class.
     * - Practical example: https://mathiasbynens.be/demo/html5-id
     */

    if ( true && typeof position.el === 'string') {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          var foundEl = document.querySelector(position.el);

          if (isIdSelector && foundEl) {
            warn("The selector \"".concat(position.el, "\" should be passed as \"el: document.querySelector('").concat(position.el, "')\" because it starts with \"#\".")); // return to avoid other warnings

            return;
          }
        } catch (err) {
          warn("The selector \"".concat(position.el, "\" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).")); // return to avoid other warnings

          return;
        }
      }
    }

    var el = typeof positionEl === 'string' ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;

    if (!el) {
       true && warn("Couldn't find element using selector \"".concat(position.el, "\" returned by scrollBehavior."));
      return;
    }

    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }

  if ('scrollBehavior' in document.documentElement.style) window.scrollTo(scrollToOptions);else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}

function getScrollKey(path, delta) {
  var position = history.state ? history.state.position - delta : -1;
  return position + path;
}

var scrollPositions = new Map();

function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}

function getSavedScrollPosition(key) {
  var scroll = scrollPositions.get(key); // consume it so it's not used again

  scrollPositions.delete(key);
  return scroll;
} // TODO: RFC about how to save scroll position

/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }


var createBaseLocation = function createBaseLocation() {
  return location.protocol + '//' + location.host;
};
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */


function createCurrentLocation(base, location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash; // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end

  var hashPos = base.indexOf('#');

  if (hashPos > -1) {
    var slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    var pathFromHash = hash.slice(slicePos); // prepend the starting slash to hash so the url starts with /#

    if (pathFromHash[0] !== '/') pathFromHash = '/' + pathFromHash;
    return stripBase(pathFromHash, '');
  }

  var path = stripBase(pathname, base);
  return path + search + hash;
}

function useHistoryListeners(base, historyState, currentLocation, replace) {
  var listeners = [];
  var teardowns = []; // TODO: should it be a stack? a Dict. Check if the popstate listener
  // can trigger twice

  var pauseState = null;

  var popStateHandler = function popStateHandler(_ref) {
    var state = _ref.state;
    var to = createCurrentLocation(base, location);
    var from = currentLocation.value;
    var fromState = historyState.value;
    var delta = 0;

    if (state) {
      currentLocation.value = to;
      historyState.value = state; // ignore the popstate and reset the pauseState

      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }

      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    } // console.log({ deltaFromCurrent })
    // Here we could also revert the navigation by calling history.go(-delta)
    // this listener will have to be adapted to not trigger again and to wait for the url
    // to be updated before triggering the listeners. Some kind of validation function would also
    // need to be passed to the listeners so the navigation can be accepted
    // call all listeners


    listeners.forEach(function (listener) {
      listener(currentLocation.value, from, {
        delta: delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };

  function pauseListeners() {
    pauseState = currentLocation.value;
  }

  function listen(callback) {
    // setup the listener and prepare teardown callbacks
    listeners.push(callback);

    var teardown = function teardown() {
      var index = listeners.indexOf(callback);
      if (index > -1) listeners.splice(index, 1);
    };

    teardowns.push(teardown);
    return teardown;
  }

  function beforeUnloadListener() {
    var _window = window,
        history = _window.history;
    if (!history.state) return;
    history.replaceState(assign({}, history.state, {
      scroll: computeScrollPosition()
    }), '');
  }

  function destroy() {
    var _iterator = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(teardowns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var teardown = _step.value;
        teardown();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    teardowns = [];
    window.removeEventListener('popstate', popStateHandler);
    window.removeEventListener('beforeunload', beforeUnloadListener);
  } // setup the listeners and prepare teardown callbacks


  window.addEventListener('popstate', popStateHandler);
  window.addEventListener('beforeunload', beforeUnloadListener);
  return {
    pauseListeners: pauseListeners,
    listen: listen,
    destroy: destroy
  };
}
/**
 * Creates a state object
 */


function buildState(back, current, forward) {
  var replaced = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var computeScroll = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return {
    back: back,
    current: current,
    forward: forward,
    replaced: replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}

function useHistoryStateNavigation(base) {
  var _window2 = window,
      history = _window2.history,
      location = _window2.location; // private variables

  var currentLocation = {
    value: createCurrentLocation(base, location)
  };
  var historyState = {
    value: history.state
  }; // build current history entry as this is a fresh navigation

  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }

  function changeLocation(to, state, replace) {
    /**
     * if a base tag is provided and we are on a normal domain, we have to
     * respect the provided `base` attribute because pushState() will use it and
     * potentially erase anything before the `#` like at
     * https://github.com/vuejs/vue-router-next/issues/685 where a base of
     * `/folder/#` but a base of `/` would erase the `/folder/` section. If
     * there is no host, the `<base>` tag makes no sense and if there isn't a
     * base tag we can just use everything after the `#`.
     */
    var hashIndex = base.indexOf('#');
    var url = hashIndex > -1 ? (location.host && document.querySelector('base') ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;

    try {
      // BROWSER QUIRK
      // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
      history[replace ? 'replaceState' : 'pushState'](state, '', url);
      historyState.value = state;
    } catch (err) {
      if (true) {
        warn('Error with push/replace State', err);
      } else {} // Force the navigation, this also resets the call count


      location[replace ? 'replace' : 'assign'](url);
    }
  }

  function replace(to, data) {
    var state = assign({}, history.state, buildState(historyState.value.back, // keep back and forward entries but override current position
    to, historyState.value.forward, true), data, {
      position: historyState.value.position
    });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }

  function push(to, data) {
    // Add to current entry the information of where we are going
    // as well as saving the current position
    var currentState = assign({}, // use current history state to gracefully handle a wrong call to
    // history.replaceState
    // https://github.com/vuejs/vue-router-next/issues/366
    historyState.value, history.state, {
      forward: to,
      scroll: computeScrollPosition()
    });

    if ( true && !history.state) {
      warn("history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n" + "history.replaceState(history.state, '', url)\n\n" + "You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.");
    }

    changeLocation(currentState.current, currentState, true);
    var state = assign({}, buildState(currentLocation.value, to, null), {
      position: currentState.position + 1
    }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }

  return {
    location: currentLocation,
    state: historyState,
    push: push,
    replace: replace
  };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */


function createWebHistory(base) {
  base = normalizeBase(base);
  var historyNavigation = useHistoryStateNavigation(base);
  var historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);

  function go(delta) {
    var triggerListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!triggerListeners) historyListeners.pauseListeners();
    history.go(delta);
  }

  var routerHistory = assign({
    // it's overridden right after
    location: '',
    base: base,
    go: go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: function get() {
      return historyNavigation.location.value;
    }
  });
  Object.defineProperty(routerHistory, 'state', {
    enumerable: true,
    get: function get() {
      return historyNavigation.state.value;
    }
  });
  return routerHistory;
}
/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */


function createMemoryHistory() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var listeners = [];
  var queue = [START];
  var position = 0;

  function setLocation(location) {
    position++;

    if (position === queue.length) {
      // we are at the end, we can simply append a new entry
      queue.push(location);
    } else {
      // we are in the middle, we remove everything from here in the queue
      queue.splice(position);
      queue.push(location);
    }
  }

  function triggerListeners(to, from, _ref2) {
    var direction = _ref2.direction,
        delta = _ref2.delta;
    var info = {
      direction: direction,
      delta: delta,
      type: NavigationType.pop
    };

    var _iterator2 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(listeners),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var callback = _step2.value;
        callback(to, from, info);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base: base,
    createHref: createHref.bind(null, base),
    replace: function replace(to) {
      // remove current entry and decrement position
      queue.splice(position--, 1);
      setLocation(to);
    },
    push: function push(to, data) {
      setLocation(to);
    },
    listen: function listen(callback) {
      listeners.push(callback);
      return function () {
        var index = listeners.indexOf(callback);
        if (index > -1) listeners.splice(index, 1);
      };
    },
    destroy: function destroy() {
      listeners = [];
      queue = [START];
      position = 0;
    },
    go: function go(delta) {
      var shouldTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var from = this.location;
      var direction = // we are considering delta === 0 going forward, but in abstract mode
      // using 0 for the delta doesn't make sense like it does in html5 where
      // it reloads the page
      delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
      position = Math.max(0, Math.min(position + delta, queue.length - 1));

      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction: direction,
          delta: delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: function get() {
      return queue[position];
    }
  });
  return routerHistory;
}
/**
 * Creates a hash history. Useful for web applications with no host (e.g.
 * `file://`) or when configuring a server to handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname +
 * location.search` If there is a `<base>` tag in the `head`, its value will be
 * ignored in favor of this parameter **but note it affects all the
 * history.pushState() calls**, meaning that if you use a `<base>` tag, it's
 * `href` value **has to match this parameter** (ignoring anything after the
 * `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */


function createWebHashHistory(base) {
  // Make sure this implementation is fine in terms of encoding, specially for IE11
  // for `file://`, directly use the pathname and ignore the base
  // location.pathname contains an initial `/` even at the root: `https://example.com`
  base = location.host ? base || location.pathname + location.search : ''; // allow the user to provide a `#` in the middle: `/base/#/app`

  if (!base.includes('#')) base += '#';

  if ( true && !base.endsWith('#/') && !base.endsWith('#')) {
    warn("A hash base must end with a \"#\":\n\"".concat(base, "\" should be \"").concat(base.replace(/#.*$/, '#'), "\"."));
  }

  return createWebHistory(base);
}

function isRouteLocation(route) {
  return typeof route === 'string' || route && Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(route) === 'object';
}

function isRouteName(name) {
  return typeof name === 'string' || Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(name) === 'symbol';
}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */


var START_LOCATION_NORMALIZED = {
  path: '/',
  name: undefined,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: undefined
};
var NavigationFailureSymbol = /*#__PURE__*/PolySymbol( true ? 'navigation failure' : undefined);
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */

var NavigationFailureType;

(function (NavigationFailureType) {
  /**
   * An aborted navigation is a navigation that failed because a navigation
   * guard returned `false` or called `next(false)`
   */
  NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
  /**
   * A cancelled navigation is a navigation that failed because a more recent
   * navigation finished started (not necessarily finished).
   */

  NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
  /**
   * A duplicated navigation is a navigation that failed because it was
   * initiated while already being at the exact same location.
   */

  NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {})); // DEV only debug messages


var ErrorTypeMessages = (_ErrorTypeMessages = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 1
/* MATCHER_NOT_FOUND */
, function _(_ref3) {
  var location = _ref3.location,
      currentLocation = _ref3.currentLocation;
  return "No match for\n ".concat(JSON.stringify(location)).concat(currentLocation ? '\nwhile being at\n' + JSON.stringify(currentLocation) : '');
}), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 2
/* NAVIGATION_GUARD_REDIRECT */
, function _(_ref4) {
  var from = _ref4.from,
      to = _ref4.to;
  return "Redirected from \"".concat(from.fullPath, "\" to \"").concat(stringifyRoute(to), "\" via a navigation guard.");
}), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 4
/* NAVIGATION_ABORTED */
, function _(_ref5) {
  var from = _ref5.from,
      to = _ref5.to;
  return "Navigation aborted from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" via a navigation guard.");
}), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 8
/* NAVIGATION_CANCELLED */
, function _(_ref6) {
  var from = _ref6.from,
      to = _ref6.to;
  return "Navigation cancelled from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" with a new navigation.");
}), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 16
/* NAVIGATION_DUPLICATED */
, function _(_ref7) {
  var from = _ref7.from,
      to = _ref7.to;
  return "Avoided redundant navigation to current location: \"".concat(from.fullPath, "\".");
}), _ErrorTypeMessages);

function createRouterError(type, params) {
  // keep full error messages in cjs versions
  if (true) {
    return assign(new Error(ErrorTypeMessages[type](params)), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      type: type
    }, NavigationFailureSymbol, true), params);
  } else {}
}

function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute(to) {
  if (typeof to === 'string') return to;
  if ('path' in to) return to.path;
  var location = {};

  var _iterator3 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(propertiesToLog),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var key = _step3.value;
      if (key in to) location[key] = to[key];
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return JSON.stringify(location, null, 2);
} // default pattern for a param: non greedy everything but /


var BASE_PARAM_PATTERN = '[^/]+?';
var BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
}; // Special Regex characters that must be escaped in static tokens

var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */

function tokensToParser(segments, extraOptions) {
  var options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions); // the amount of scores is the same as the length of segments except for the root segment "/"

  var score = []; // the regexp as a string

  var pattern = options.start ? '^' : ''; // extracted keys

  var keys = [];

  var _iterator4 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segments),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var segment = _step4.value;
      // the root segment needs special treatment
      var segmentScores = segment.length ? [] : [90
      /* Root */
      ]; // allow trailing slash

      if (options.strict && !segment.length) pattern += '/';

      for (var tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        var token = segment[tokenIndex]; // resets the score if we are inside a sub segment /:a-other-:b

        var subSegmentScore = 40
        /* Segment */
        + (options.sensitive ? 0.25
        /* BonusCaseSensitive */
        : 0);

        if (token.type === 0
        /* Static */
        ) {
            // prepend the slash if we are starting a new segment
            if (!tokenIndex) pattern += '/';
            pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
            subSegmentScore += 40
            /* Static */
            ;
          } else if (token.type === 1
        /* Param */
        ) {
            var value = token.value,
                repeatable = token.repeatable,
                optional = token.optional,
                regexp = token.regexp;
            keys.push({
              name: value,
              repeatable: repeatable,
              optional: optional
            });

            var _re = regexp ? regexp : BASE_PARAM_PATTERN; // the user provided a custom regexp /:id(\\d+)


            if (_re !== BASE_PARAM_PATTERN) {
              subSegmentScore += 10
              /* BonusCustomRegExp */
              ; // make sure the regexp is valid before using it

              try {
                new RegExp("(".concat(_re, ")"));
              } catch (err) {
                throw new Error("Invalid custom RegExp for param \"".concat(value, "\" (").concat(_re, "): ") + err.message);
              }
            } // when we repeat we must take care of the repeating leading slash


            var subPattern = repeatable ? "((?:".concat(_re, ")(?:/(?:").concat(_re, "))*)") : "(".concat(_re, ")"); // prepend the slash if we are starting a new segment

            if (!tokenIndex) subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
            // or /:p?-:p2
            optional && segment.length < 2 ? "(?:/".concat(subPattern, ")") : '/' + subPattern;
            if (optional) subPattern += '?';
            pattern += subPattern;
            subSegmentScore += 20
            /* Dynamic */
            ;
            if (optional) subSegmentScore += -8
            /* BonusOptional */
            ;
            if (repeatable) subSegmentScore += -20
            /* BonusRepeatable */
            ;
            if (_re === '.*') subSegmentScore += -50
            /* BonusWildcard */
            ;
          }

        segmentScores.push(subSegmentScore);
      } // an empty array like /home/ -> [[{home}], []]
      // if (!segment.length) pattern += '/'


      score.push(segmentScores);
    } // only apply the strict bonus to the last score

  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (options.strict && options.end) {
    var i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001
    /* BonusStrict */
    ;
  } // TODO: dev only warn double trailing slash


  if (!options.strict) pattern += '/?';
  if (options.end) pattern += '$'; // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
  else if (options.strict) pattern += '(?:/|$)';
  var re = new RegExp(pattern, options.sensitive ? '' : 'i');

  function parse(path) {
    var match = path.match(re);
    var params = {};
    if (!match) return null;

    for (var _i = 1; _i < match.length; _i++) {
      var value = match[_i] || '';
      var key = keys[_i - 1];
      params[key.name] = value && key.repeatable ? value.split('/') : value;
    }

    return params;
  }

  function stringify(params) {
    var path = ''; // for optional parameters to allow to be empty

    var avoidDuplicatedSlash = false;

    var _iterator5 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segments),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var segment = _step5.value;
        if (!avoidDuplicatedSlash || !path.endsWith('/')) path += '/';
        avoidDuplicatedSlash = false;

        var _iterator6 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segment),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var token = _step6.value;

            if (token.type === 0
            /* Static */
            ) {
                path += token.value;
              } else if (token.type === 1
            /* Param */
            ) {
                var value = token.value,
                    repeatable = token.repeatable,
                    optional = token.optional;
                var param = value in params ? params[value] : '';
                if (Array.isArray(param) && !repeatable) throw new Error("Provided param \"".concat(value, "\" is an array but it is not repeatable (* or + modifiers)"));
                var text = Array.isArray(param) ? param.join('/') : param;

                if (!text) {
                  if (optional) {
                    // if we have more than one optional param like /:a?-static we
                    // don't need to care about the optional param
                    if (segment.length < 2) {
                      // remove the last slash as we could be at the end
                      if (path.endsWith('/')) path = path.slice(0, -1); // do not append a slash on the next iteration
                      else avoidDuplicatedSlash = true;
                    }
                  } else throw new Error("Missing required param \"".concat(value, "\""));
                }

                path += text;
              }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return path;
  }

  return {
    re: re,
    score: score,
    keys: keys,
    parse: parse,
    stringify: stringify
  };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */


function compareScoreArray(a, b) {
  var i = 0;

  while (i < a.length && i < b.length) {
    var diff = b[i] - a[i]; // only keep going if diff === 0

    if (diff) return diff;
    i++;
  } // if the last subsegment was Static, the shorter segments should be sorted first
  // otherwise sort the longest segment first


  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40
    /* Static */
    + 40
    /* Segment */
    ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40
    /* Static */
    + 40
    /* Segment */
    ? 1 : -1;
  }

  return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */


function comparePathParserScore(a, b) {
  var i = 0;
  var aScore = a.score;
  var bScore = b.score;

  while (i < aScore.length && i < bScore.length) {
    var comp = compareScoreArray(aScore[i], bScore[i]); // do not return if both are equal

    if (comp) return comp;
    i++;
  } // if a and b share the same score entries but b has more, sort b first


  return bScore.length - aScore.length; // this is the ternary version
  // return aScore.length < bScore.length
  //   ? 1
  //   : aScore.length > bScore.length
  //   ? -1
  //   : 0
}

var ROOT_TOKEN = {
  type: 0
  /* Static */
  ,
  value: ''
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/; // After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()

function tokenizePath(path) {
  if (!path) return [[]];
  if (path === '/') return [[ROOT_TOKEN]];

  if (!path.startsWith('/')) {
    throw new Error( true ? "Route paths should start with a \"/\": \"".concat(path, "\" should be \"/").concat(path, "\".") : undefined);
  } // if (tokenCache.has(path)) return tokenCache.get(path)!


  function crash(message) {
    throw new Error("ERR (".concat(state, ")/\"").concat(buffer, "\": ").concat(message));
  }

  var state = 0
  /* Static */
  ;
  var previousState = state;
  var tokens = []; // the segment will always be valid because we get into the initial state
  // with the leading /

  var segment;

  function finalizeSegment() {
    if (segment) tokens.push(segment);
    segment = [];
  } // index on the path


  var i = 0; // char at index

  var char; // buffer of the value read

  var buffer = ''; // custom regexp for a param

  var customRe = '';

  function consumeBuffer() {
    if (!buffer) return;

    if (state === 0
    /* Static */
    ) {
        segment.push({
          type: 0
          /* Static */
          ,
          value: buffer
        });
      } else if (state === 1
    /* Param */
    || state === 2
    /* ParamRegExp */
    || state === 3
    /* ParamRegExpEnd */
    ) {
        if (segment.length > 1 && (char === '*' || char === '+')) crash("A repeatable param (".concat(buffer, ") must be alone in its segment. eg: '/:ids+."));
        segment.push({
          type: 1
          /* Param */
          ,
          value: buffer,
          regexp: customRe,
          repeatable: char === '*' || char === '+',
          optional: char === '*' || char === '?'
        });
      } else {
      crash('Invalid state to consume buffer');
    }

    buffer = '';
  }

  function addCharToBuffer() {
    buffer += char;
  }

  while (i < path.length) {
    char = path[i++];

    if (char === '\\' && state !== 2
    /* ParamRegExp */
    ) {
        previousState = state;
        state = 4
        /* EscapeNext */
        ;
        continue;
      }

    switch (state) {
      case 0
      /* Static */
      :
        if (char === '/') {
          if (buffer) {
            consumeBuffer();
          }

          finalizeSegment();
        } else if (char === ':') {
          consumeBuffer();
          state = 1
          /* Param */
          ;
        } else {
          addCharToBuffer();
        }

        break;

      case 4
      /* EscapeNext */
      :
        addCharToBuffer();
        state = previousState;
        break;

      case 1
      /* Param */
      :
        if (char === '(') {
          state = 2
          /* ParamRegExp */
          ;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0
          /* Static */
          ; // go back one character if we were not modifying

          if (char !== '*' && char !== '?' && char !== '+') i--;
        }

        break;

      case 2
      /* ParamRegExp */
      :
        // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
        // it already works by escaping the closing )
        // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
        // is this really something people need since you can also write
        // /prefix_:p()_suffix
        if (char === ')') {
          // handle the escaped )
          if (customRe[customRe.length - 1] == '\\') customRe = customRe.slice(0, -1) + char;else state = 3
          /* ParamRegExpEnd */
          ;
        } else {
          customRe += char;
        }

        break;

      case 3
      /* ParamRegExpEnd */
      :
        // same as finalizing a param
        consumeBuffer();
        state = 0
        /* Static */
        ; // go back one character if we were not modifying

        if (char !== '*' && char !== '?' && char !== '+') i--;
        customRe = '';
        break;

      default:
        crash('Unknown state');
        break;
    }
  }

  if (state === 2
  /* ParamRegExp */
  ) crash("Unfinished custom RegExp for param \"".concat(buffer, "\""));
  consumeBuffer();
  finalizeSegment(); // tokenCache.set(path, tokens)

  return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
  var parser = tokensToParser(tokenizePath(record.path), options); // warn against params with the same name

  if (true) {
    var existingKeys = new Set();

    var _iterator7 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(parser.keys),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var key = _step7.value;
        if (existingKeys.has(key.name)) warn("Found duplicated params with name \"".concat(key.name, "\" for path \"").concat(record.path, "\". Only the last one will be available on \"$route.params\"."));
        existingKeys.add(key.name);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  var matcher = assign(parser, {
    record: record,
    parent: parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });

  if (parent) {
    // both are aliases or both are not aliases
    // we don't want to mix them because the order is used when
    // passing originalRecord in Matcher.addRoute
    if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
  }

  return matcher;
}
/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */


function createRouterMatcher(routes, globalOptions) {
  // normalized ordered array of matchers
  var matchers = [];
  var matcherMap = new Map();
  globalOptions = mergeOptions({
    strict: false,
    end: true,
    sensitive: false
  }, globalOptions);

  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }

  function addRoute(record, parent, originalRecord) {
    // used later on to remove by name
    var isRootAdd = !originalRecord;
    var mainNormalizedRecord = normalizeRouteRecord(record); // we might be the child of an alias

    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    var options = mergeOptions(globalOptions, record); // generate an array of records to correctly handle aliases

    var normalizedRecords = [mainNormalizedRecord];

    if ('alias' in record) {
      var aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;

      var _iterator8 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(aliases),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var alias = _step8.value;
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord // the aliases are always of the same kind as the original since they
            // are defined on the same record

          }));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    var matcher;
    var originalMatcher;

    for (var _i2 = 0, _normalizedRecords = normalizedRecords; _i2 < _normalizedRecords.length; _i2++) {
      var normalizedRecord = _normalizedRecords[_i2];
      var path = normalizedRecord.path; // Build up the path for nested routes if the child isn't an absolute
      // route. Only add the / delimiter if the child path isn't empty and if the
      // parent path doesn't have a trailing slash

      if (parent && path[0] !== '/') {
        var parentPath = parent.record.path;
        var connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }

      if ( true && normalizedRecord.path === '*') {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\n' + 'See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      } // create the object before hand so it can be passed to children


      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if ( true && parent && path[0] === '/') checkMissingParamsInAbsolutePath(matcher, parent); // if we are an alias we must tell the original record that we exist
      // so we can be removed

      if (originalRecord) {
        originalRecord.alias.push(matcher);

        if (true) {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        // otherwise, the first record is the original and others are aliases
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher) originalMatcher.alias.push(matcher); // remove the route if named and only for the top record (avoid in nested calls)
        // this works because the original record is the first one

        if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
      }

      if ('children' in mainNormalizedRecord) {
        var children = mainNormalizedRecord.children;

        for (var i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      } // if there was no original record, then the first one was not an alias and all
      // other alias (if any) need to reference this record when adding children


      originalRecord = originalRecord || matcher; // TODO: add normalized records for more flexibility
      // if (parent && isAliasRecord(originalRecord)) {
      //   parent.children.push(originalRecord)
      // }

      insertMatcher(matcher);
    }

    return originalMatcher ? function () {
      // since other matchers are aliases, they should be removed by the original matcher
      removeRoute(originalMatcher);
    } : noop;
  }

  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      var matcher = matcherMap.get(matcherRef);

      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      var index = matchers.indexOf(matcherRef);

      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }

  function getRoutes() {
    return matchers;
  }

  function insertMatcher(matcher) {
    var i = 0; // console.log('i is', { i })

    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0) {
      i++;
    } // console.log('END i is', { i })
    // while (i < matchers.length && matcher.score <= matchers[i].score) i++


    matchers.splice(i, 0, matcher); // only add the original record to the name map

    if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
  }

  function resolve(location, currentLocation) {
    var matcher;
    var params = {};
    var path;
    var name;

    if ('name' in location && location.name) {
      matcher = matcherMap.get(location.name);
      if (!matcher) throw createRouterError(1
      /* MATCHER_NOT_FOUND */
      , {
        location: location
      });
      name = matcher.record.name;
      params = assign( // paramsFromLocation is a new object
      paramsFromLocation(currentLocation.params, // only keep params that exist in the resolved location
      // TODO: only keep optional params coming from a parent record
      matcher.keys.filter(function (k) {
        return !k.optional;
      }).map(function (k) {
        return k.name;
      })), location.params); // throws if cannot be stringified

      path = matcher.stringify(params);
    } else if ('path' in location) {
      // no need to resolve the path with the matcher as it was provided
      // this also allows the user to control the encoding
      path = location.path;

      if ( true && !path.startsWith('/')) {
        warn("The Matcher cannot resolve relative paths but received \"".concat(path, "\". Unless you directly called `matcher.resolve(\"").concat(path, "\")`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next."));
      }

      matcher = matchers.find(function (m) {
        return m.re.test(path);
      }); // matcher should have a value after the loop

      if (matcher) {
        // TODO: dev warning of unused params if provided
        // we know the matcher works because we tested the regexp
        params = matcher.parse(path);
        name = matcher.record.name;
      } // location is a relative path

    } else {
      // match by name or path of current route
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find(function (m) {
        return m.re.test(currentLocation.path);
      });
      if (!matcher) throw createRouterError(1
      /* MATCHER_NOT_FOUND */
      , {
        location: location,
        currentLocation: currentLocation
      });
      name = matcher.record.name; // since we are navigating to the same location, we don't need to pick the
      // params like when `name` is provided

      params = assign({}, currentLocation.params, location.params);
      path = matcher.stringify(params);
    }

    var matched = [];
    var parentMatcher = matcher;

    while (parentMatcher) {
      // reversed order so parents are at the beginning
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }

    return {
      name: name,
      path: path,
      params: params,
      matched: matched,
      meta: mergeMetaFields(matched)
    };
  } // add initial routes


  routes.forEach(function (route) {
    return addRoute(route);
  });
  return {
    addRoute: addRoute,
    resolve: resolve,
    removeRoute: removeRoute,
    getRoutes: getRoutes,
    getRecordMatcher: getRecordMatcher
  };
}

function paramsFromLocation(params, keys) {
  var newParams = {};

  var _iterator9 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(keys),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var key = _step9.value;
      if (key in params) newParams[key] = params[key];
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */


function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: undefined,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in record ? record.components || {} : {
      default: record.component
    }
  };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */


function normalizeRecordProps(record) {
  var propsObject = {}; // props does not exist on redirect records but we can set false directly

  var props = record.props || false;

  if ('component' in record) {
    propsObject.default = props;
  } else {
    // NOTE: we could also allow a function to be applied to every component.
    // Would need user feedback for use cases
    for (var name in record.components) {
      propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
  }

  return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */


function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf) return true;
    record = record.parent;
  }

  return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */


function mergeMetaFields(matched) {
  return matched.reduce(function (meta, record) {
    return assign(meta, record.meta);
  }, {});
}

function mergeOptions(defaults, partialOptions) {
  var options = {};

  for (var key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }

  return options;
}

function isSameParam(a, b) {
  return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */


function checkSameParams(a, b) {
  var _iterator10 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a.keys),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var key = _step10.value;
      if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(key.name, "\""));
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var _iterator11 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b.keys),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _key = _step11.value;
      if (!_key.optional && !a.keys.find(isSameParam.bind(null, _key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(_key.name, "\""));
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
}

function checkMissingParamsInAbsolutePath(record, parent) {
  var _iterator12 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(parent.keys),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var key = _step12.value;
      if (!record.keys.find(isSameParam.bind(null, key))) return warn("Absolute path \"".concat(record.record.path, "\" should have the exact same param named \"").concat(key.name, "\" as its parent \"").concat(parent.record.path, "\"."));
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
}
/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)


var HASH_RE = /#/g; // %23

var AMPERSAND_RE = /&/g; // %26

var SLASH_RE = /\//g; // %2F

var EQUAL_RE = /=/g; // %3D

var IM_RE = /\?/g; // %3F

var PLUS_RE = /\+/g; // %2B

/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */

var ENC_BRACKET_OPEN_RE = /%5B/g; // [

var ENC_BRACKET_CLOSE_RE = /%5D/g; // ]

var ENC_CARET_RE = /%5E/g; // ^

var ENC_BACKTICK_RE = /%60/g; // `

var ENC_CURLY_OPEN_RE = /%7B/g; // {

var ENC_PIPE_RE = /%7C/g; // |

var ENC_CURLY_CLOSE_RE = /%7D/g; // }

var ENC_SPACE_RE = /%20/g; // }

/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */

function commonEncode(text) {
  return encodeURI('' + text).replace(ENC_PIPE_RE, '|').replace(ENC_BRACKET_OPEN_RE, '[').replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeQueryValue(text) {
  return commonEncode(text) // Encode the space as +, encode the + to differentiate it from the space
  .replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */


function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */


function decode(text) {
  try {
    return decodeURIComponent('' + text);
  } catch (err) {
     true && warn("Error decoding \"".concat(text, "\". Using original value"));
  }

  return '' + text;
}
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */


function parseQuery(search) {
  var query = {}; // avoid creating an object with an empty key and empty value
  // because of split('&')

  if (search === '' || search === '?') return query;
  var hasLeadingIM = search[0] === '?';
  var searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');

  for (var i = 0; i < searchParams.length; ++i) {
    // pre decode the + into space
    var searchParam = searchParams[i].replace(PLUS_RE, ' '); // allow the = character

    var eqPos = searchParam.indexOf('=');
    var key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    var value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));

    if (key in query) {
      // an extra variable for ts types
      var currentValue = query[key];

      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }

      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }

  return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */


function stringifyQuery(query) {
  var search = '';

  var _loop = function _loop(_key2) {
    var value = query[_key2];
    _key2 = encodeQueryKey(_key2);

    if (value == null) {
      // only null adds the value
      if (value !== undefined) {
        search += (search.length ? '&' : '') + _key2;
      }

      key = _key2;
      return "continue";
    } // keep null values


    var values = Array.isArray(value) ? value.map(function (v) {
      return v && encodeQueryValue(v);
    }) : [value && encodeQueryValue(value)];
    values.forEach(function (value) {
      // skip undefined values in arrays as if they were not present
      // smaller code than using filter
      if (value !== undefined) {
        // only append & with non-empty search
        search += (search.length ? '&' : '') + _key2;
        if (value != null) search += '=' + value;
      }
    });
    key = _key2;
  };

  for (var key in query) {
    var _ret = _loop(key);

    if (_ret === "continue") continue;
  }

  return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */


function normalizeQuery(query) {
  var normalizedQuery = {};

  for (var _key3 in query) {
    var value = query[_key3];

    if (value !== undefined) {
      normalizedQuery[_key3] = Array.isArray(value) ? value.map(function (v) {
        return v == null ? null : '' + v;
      }) : value == null ? value : '' + value;
    }
  }

  return normalizedQuery;
}
/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */


function useCallbacks() {
  var handlers = [];

  function add(handler) {
    handlers.push(handler);
    return function () {
      var i = handlers.indexOf(handler);
      if (i > -1) handlers.splice(i, 1);
    };
  }

  function reset() {
    handlers = [];
  }

  return {
    add: add,
    list: function list() {
      return handlers;
    },
    reset: reset
  };
}

function registerGuard(record, name, guard) {
  var removeFromList = function removeFromList() {
    record[name].delete(guard);
  };

  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onUnmounted */ "x"])(removeFromList);
  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onDeactivated */ "v"])(removeFromList);
  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onActivated */ "s"])(function () {
    record[name].add(guard);
  });
  record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */


function onBeforeRouteLeave(leaveGuard) {
  if ( true && !Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])()) {
    warn('getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function');
    return;
  }

  var activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(matchedRouteKey, {}).value;

  if (!activeRecord) {
     true && warn('No active route record was found. Are you missing a <router-view> component?');
    return;
  }

  registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */


function onBeforeRouteUpdate(updateGuard) {
  if ( true && !Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])()) {
    warn('getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function');
    return;
  }

  var activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(matchedRouteKey, {}).value;

  if (!activeRecord) {
     true && warn('No active route record was found. Are you missing a <router-view> component?');
    return;
  }

  registerGuard(activeRecord, 'updateGuards', updateGuard);
}

function guardToPromiseFn(guard, to, from, record, name) {
  // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
  var enterCallbackArray = record && ( // name is defined if record is because of the function overload
  record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return function () {
    return new Promise(function (resolve, reject) {
      var next = function next(valid) {
        if (valid === false) reject(createRouterError(4
        /* NAVIGATION_ABORTED */
        , {
          from: from,
          to: to
        }));else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2
          /* NAVIGATION_GUARD_REDIRECT */
          , {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
          record.enterCallbacks[name] === enterCallbackArray && typeof valid === 'function') enterCallbackArray.push(valid);
          resolve();
        }
      }; // wrapping with Promise.resolve allows it to work with both async and sync guards


      var guardReturn = guard.call(record && record.instances[name], to, from,  true ? canOnlyBeCalledOnce(next, to, from) : undefined);
      var guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3) guardCall = guardCall.then(next);

      if ( true && guard.length > 2) {
        var message = "The \"next\" callback was never called inside of ".concat(guard.name ? '"' + guard.name + '"' : '', ":\n").concat(guard.toString(), "\n. If you are returning a value instead of calling \"next\", make sure to remove the \"next\" parameter from your function.");

        if (Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(guardReturn) === 'object' && 'then' in guardReturn) {
          guardCall = guardCall.then(function (resolvedValue) {
            // @ts-expect-error: _called is added at canOnlyBeCalledOnce
            if (!next._called) {
              warn(message);
              return Promise.reject(new Error('Invalid navigation guard'));
            }

            return resolvedValue;
          }); // TODO: test me!
        } else if (guardReturn !== undefined) {
          // @ts-expect-error: _called is added at canOnlyBeCalledOnce
          if (!next._called) {
            warn(message);
            reject(new Error('Invalid navigation guard'));
            return;
          }
        }
      }

      guardCall.catch(function (err) {
        return reject(err);
      });
    });
  };
}

function canOnlyBeCalledOnce(next, to, from) {
  var called = 0;
  return function () {
    if (called++ === 1) warn("The \"next\" callback was called more than once in one navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\". It should be called exactly one time in each navigation guard. This will fail in production.")); // @ts-expect-error: we put it in the original one because it's easier to check

    next._called = true;
    if (called === 1) next.apply(null, arguments);
  };
}

function extractComponentsGuards(matched, guardType, to, from) {
  var guards = [];

  var _iterator13 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(matched),
      _step13;

  try {
    var _loop2 = function _loop2() {
      var record = _step13.value;

      var _loop3 = function _loop3(name) {
        var rawComponent = record.components[name];

        if (true) {
          if (!rawComponent || Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(rawComponent) !== 'object' && typeof rawComponent !== 'function') {
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is not") + " a valid component. Received \"".concat(String(rawComponent), "\".")); // throw to ensure we stop here but warn to ensure the message isn't
            // missed by the user

            throw new Error('Invalid route component');
          } else if ('then' in rawComponent) {
            // warn if user wrote import('/component.vue') instead of () =>
            // import('./component.vue')
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a ") + "Promise instead of a function that returns a Promise. Did you " + "write \"import('./MyPage.vue')\" instead of " + "\"() => import('./MyPage.vue')\" ? This will break in " + "production if not fixed.");
            var promise = rawComponent;

            rawComponent = function rawComponent() {
              return promise;
            };
          } else if (rawComponent.__asyncLoader && // warn only once per component
          !rawComponent.__warnedDefineAsync) {
            rawComponent.__warnedDefineAsync = true;
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is defined ") + "using \"defineAsyncComponent()\". " + "Write \"() => import('./MyPage.vue')\" instead of " + "\"defineAsyncComponent(() => import('./MyPage.vue'))\".");
          }
        } // skip update and leave guards if the route component is not mounted


        if (guardType !== 'beforeRouteEnter' && !record.instances[name]) return "continue";

        if (isRouteComponent(rawComponent)) {
          // __vccOpts is added by vue-class-component and contain the regular options
          var options = rawComponent.__vccOpts || rawComponent;
          var guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          // start requesting the chunk already
          var componentPromise = rawComponent();

          if ( true && !('catch' in componentPromise)) {
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a function that does not return a Promise. If you were passing a functional component, make sure to add a \"displayName\" to the component. This will break in production if not fixed."));
            componentPromise = Promise.resolve(componentPromise);
          }

          guards.push(function () {
            return componentPromise.then(function (resolved) {
              if (!resolved) return Promise.reject(new Error("Couldn't resolve component \"".concat(name, "\" at \"").concat(record.path, "\"")));
              var resolvedComponent = isESModule(resolved) ? resolved.default : resolved; // replace the function with the resolved component

              record.components[name] = resolvedComponent; // __vccOpts is added by vue-class-component and contain the regular options

              var options = resolvedComponent.__vccOpts || resolvedComponent;
              var guard = options[guardType];
              return guard && guardToPromiseFn(guard, to, from, record, name)();
            });
          });
        }
      };

      for (var name in record.components) {
        var _ret2 = _loop3(name);

        if (_ret2 === "continue") continue;
      }
    };

    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }

  return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @param component
 */


function isRouteComponent(component) {
  return Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(component) === 'object' || 'displayName' in component || 'props' in component || '__vccOpts' in component;
} // TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC


function useLink(props) {
  var router = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routerKey);
  var currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routeLocationKey);
  var route = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
    return router.resolve(Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "v"])(props.to));
  });
  var activeRecordIndex = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
    var matched = route.value.matched;
    var length = matched.length;
    var routeMatched = matched[length - 1];
    var currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length) return -1;
    var index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1) return index; // possible parent record

    var parentRecordPath = getOriginalPath(matched[length - 2]);
    return (// we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  var isActive = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
    return activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params);
  });
  var isExactActive = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
    return activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params);
  });

  function navigate() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (guardEvent(e)) {
      return router[Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "v"])(props.replace) ? 'replace' : 'push'](Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "v"])(props.to) // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }

    return Promise.resolve();
  } // devtools only


  if (( true) && isBrowser) {
    var instance = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])();

    if (instance) {
      var linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      }; // @ts-expect-error: this is internal

      instance.__vrl_devtools = instance.__vrl_devtools || []; // @ts-expect-error: this is internal

      instance.__vrl_devtools.push(linkContextDevtools);

      Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watchEffect */ "J"])(function () {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, {
        flush: 'post'
      });
    }
  }

  return {
    route: route,
    href: Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
      return route.value.href;
    }),
    isActive: isActive,
    isExactActive: isExactActive,
    navigate: navigate
  };
}

var RouterLinkImpl = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* defineComponent */ "l"])({
  name: 'RouterLink',
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    }
  },
  useLink: useLink,
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var link = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* reactive */ "j"])(useLink(props));

    var _inject = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routerKey),
        options = _inject.options;

    var elClass = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
      var _ref9;

      return _ref9 = {}, Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref9, getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active'), link.isActive), Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref9, getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active'), link.isExactActive), _ref9;
    });
    return function () {
      var children = slots.default && slots.default(link);
      return props.custom ? children : Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* h */ "o"])('a', {
        'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
}); // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

/**
 * Component to render a link that triggers a navigation on click.
 */

var RouterLink = RouterLinkImpl;

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return; // don't redirect when preventDefault called

  if (e.defaultPrevented) return; // don't redirect on right click

  if (e.button !== undefined && e.button !== 0) return; // don't redirect if `target="_blank"`
  // @ts-expect-error getAttribute does exist

  if (e.currentTarget && e.currentTarget.getAttribute) {
    // @ts-expect-error getAttribute exists
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) return;
  } // this may be a Weex event which doesn't have this method


  if (e.preventDefault) e.preventDefault();
  return true;
}

function includesParams(outer, inner) {
  var _loop4 = function _loop4(_key4) {
    var innerValue = inner[_key4];
    var outerValue = outer[_key4];

    if (typeof innerValue === 'string') {
      if (innerValue !== outerValue) return {
        v: false
      };
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some(function (value, i) {
        return value !== outerValue[i];
      })) return {
        v: false
      };
    }
  };

  for (var _key4 in inner) {
    var _ret3 = _loop4(_key4);

    if (Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ret3) === "object") return _ret3.v;
  }

  return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */


function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */


var getLinkClass = function getLinkClass(propClass, globalClass, defaultClass) {
  return propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
};

var RouterViewImpl = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* defineComponent */ "l"])({
  name: 'RouterView',
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'default'
    },
    route: Object
  },
  setup: function setup(props, _ref10) {
    var attrs = _ref10.attrs,
        slots = _ref10.slots;
     true && warnDeprecatedUsage();
    var injectedRoute = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routerViewLocationKey);
    var routeToDisplay = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
      return props.route || injectedRoute.value;
    });
    var depth = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(viewDepthKey, 0);
    var matchedRouteRef = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
      return routeToDisplay.value.matched[depth];
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "A"])(viewDepthKey, depth + 1);
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "A"])(matchedRouteKey, matchedRouteRef);
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "A"])(routerViewLocationKey, routeToDisplay);
    var viewRef = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* ref */ "l"])(); // watch at the same time the component instance, the route record we are
    // rendering, and the name

    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watch */ "I"])(function () {
      return [viewRef.value, matchedRouteRef.value, props.name];
    }, function (_ref11, _ref12) {
      var _ref13 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref11, 3),
          instance = _ref13[0],
          to = _ref13[1],
          name = _ref13[2];

      var _ref14 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref12, 3),
          oldInstance = _ref14[0],
          from = _ref14[1],
          oldName = _ref14[2];

      // copy reused instances
      if (to) {
        // this will update the instance for new instances as well as reused
        // instances when navigating to a new route
        to.instances[name] = instance; // the component instance is reused for a different route or name so
        // we copy any saved update or leave guards. With async setup, the
        // mounting component will mount before the matchedRoute changes,
        // making instance === oldInstance, so we check if guards have been
        // added before. This works because we remove guards when
        // unmounting/deactivating components

        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }

          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      } // trigger beforeRouteEnter next callbacks


      if (instance && to && ( // if there is no instance but to and from are the same this might be
      // the first visit
      !from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach(function (callback) {
          return callback(instance);
        });
      }
    }, {
      flush: 'post'
    });
    return function () {
      var route = routeToDisplay.value;
      var matchedRoute = matchedRouteRef.value;
      var ViewComponent = matchedRoute && matchedRoute.components[props.name]; // we need the value at the time we render because when we unmount, we
      // navigated to a different location so the value is different

      var currentName = props.name;

      if (!ViewComponent) {
        return normalizeSlot(slots.default, {
          Component: ViewComponent,
          route: route
        });
      } // props from route configuration


      var routePropsOption = matchedRoute.props[props.name];
      var routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null;

      var onVnodeUnmounted = function onVnodeUnmounted(vnode) {
        // remove the instance reference to prevent leak
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };

      var component = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* h */ "o"])(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted: onVnodeUnmounted,
        ref: viewRef
      }));
      return (// pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, {
          Component: component,
          route: route
        }) || component
      );
    };
  }
});

function normalizeSlot(slot, data) {
  if (!slot) return null;
  var slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
} // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

/**
 * Component to display the current route the user is at.
 */


var RouterView = RouterViewImpl; // warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3

function warnDeprecatedUsage() {
  var instance = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])();
  var parentName = instance.parent && instance.parent.type.name;

  if (parentName && (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
    var comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
    warn("<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n" + "Use slot props instead:\n\n" + "<router-view v-slot=\"{ Component }\">\n" + "  <".concat(comp, ">\n") + "    <component :is=\"Component\" />\n" + "  </".concat(comp, ">\n") + "</router-view>");
  }
}

function formatRouteLocation(routeLocation, tooltip) {
  var copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map(function (matched) {
      return omit(matched, ['instances', 'children', 'aliasOf']);
    })
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip: tooltip,
      value: copy
    }
  };
}

function formatDisplay(display) {
  return {
    _custom: {
      display: display
    }
  };
} // to support multiple router instances


var routerId = 0;

function addDevtools(app, router, matcher) {
  // Take over router.beforeEach and afterEach
  // make sure we are not registering the devtool twice
  if (router.__hasDevtools) return;
  router.__hasDevtools = true; // increment to support multiple router instances

  var id = routerId++;
  Object(_vue_devtools_api__WEBPACK_IMPORTED_MODULE_6__["setupDevtoolsPlugin"])({
    id: 'org.vuejs.router' + (id ? '.' + id : ''),
    label: 'Vue Router',
    packageName: 'vue-router',
    homepage: 'https://next.router.vuejs.org/',
    logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
    componentStateTypes: ['Routing'],
    app: app
  }, function (api) {
    // display state added by the router
    api.on.inspectComponent(function (payload, ctx) {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: 'Routing',
          key: '$route',
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, 'Current Route')
        });
      }
    }); // mark router-link as active

    api.on.visitComponentTree(function (_ref15) {
      var node = _ref15.treeNode,
          componentInstance = _ref15.componentInstance;

      // if multiple useLink are used
      if (Array.isArray(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;

        componentInstance.__vrl_devtools.forEach(function (devtoolsData) {
          var backgroundColor = ORANGE_400;
          var tooltip = '';

          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = 'This is exactly active';
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = 'This link is active';
          }

          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip: tooltip,
            backgroundColor: backgroundColor
          });
        });
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watch */ "I"])(router.currentRoute, function () {
      // refresh active state
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    var navigationsLayerId = 'router:navigations:' + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: "Router".concat(id ? ' ' + id : '', " Navigations"),
      color: 0x40a8c4
    }); // const errorsLayerId = 'router:errors'
    // api.addTimelineLayer({
    //   id: errorsLayerId,
    //   label: 'Router Errors',
    //   color: 0xea5455,
    // })

    router.onError(function (error, to) {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'Error during Navigation',
          subtitle: to.fullPath,
          logType: 'error',
          time: Date.now(),
          data: {
            error: error
          },
          groupId: to.meta.__navigationId
        }
      });
    }); // attached to `meta` and used to group events

    var navigationId = 0;
    router.beforeEach(function (to, from) {
      var data = {
        guard: formatDisplay('beforeEach'),
        from: formatRouteLocation(from, 'Current Location during this navigation'),
        to: formatRouteLocation(to, 'Target location')
      }; // Used to group navigations together, hide from devtools

      Object.defineProperty(to.meta, '__navigationId', {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: Date.now(),
          title: 'Start of navigation',
          subtitle: to.fullPath,
          data: data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach(function (to, from, failure) {
      var data = {
        guard: formatDisplay('afterEach')
      };

      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : '',
            tooltip: 'Navigation Failure',
            value: failure
          }
        };
        data.status = formatDisplay('❌');
      } else {
        data.status = formatDisplay('✅');
      } // we set here to have the right order


      data.from = formatRouteLocation(from, 'Current Location during this navigation');
      data.to = formatRouteLocation(to, 'Target location');
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'End of navigation',
          subtitle: to.fullPath,
          time: Date.now(),
          data: data,
          logType: failure ? 'warning' : 'default',
          groupId: to.meta.__navigationId
        }
      });
    });
    /**
     * Inspector of Existing routes
     */

    var routerInspectorId = 'router-inspector:' + id;
    api.addInspector({
      id: routerInspectorId,
      label: 'Routes' + (id ? ' ' + id : ''),
      icon: 'book',
      treeFilterPlaceholder: 'Search routes'
    });

    function refreshRoutesView() {
      // the routes view isn't active
      if (!activeRoutesPayload) return;
      var payload = activeRoutesPayload; // children routes will appear as nested

      var routes = matcher.getRoutes().filter(function (route) {
        return !route.parent;
      }); // reset match state to false

      routes.forEach(resetMatchStateOnRouteRecord); // apply a match state if there is a payload

      if (payload.filter) {
        routes = routes.filter(function (route) {
          return (// save matches state based on the payload
            isRouteMatching(route, payload.filter.toLowerCase())
          );
        });
      } // mark active routes


      routes.forEach(function (route) {
        return markRouteRecordActive(route, router.currentRoute.value);
      });
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }

    var activeRoutesPayload;
    api.on.getInspectorTree(function (payload) {
      activeRoutesPayload = payload;

      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    /**
     * Display information about the currently selected route record
     */

    api.on.getInspectorState(function (payload) {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        var routes = matcher.getRoutes();
        var route = routes.find(function (route) {
          return route.record.__vd_id === payload.nodeId;
        });

        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}

function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? '*' : '?';
  } else {
    return key.repeatable ? '+' : '';
  }
}

function formatRouteRecordMatcherForStateInspector(route) {
  var record = route.record;
  var fields = [{
    editable: false,
    key: 'path',
    value: record.path
  }];

  if (record.name != null) {
    fields.push({
      editable: false,
      key: 'name',
      value: record.name
    });
  }

  fields.push({
    editable: false,
    key: 'regexp',
    value: route.re
  });

  if (route.keys.length) {
    fields.push({
      editable: false,
      key: 'keys',
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map(function (key) {
            return "".concat(key.name).concat(modifierForKey(key));
          }).join(' '),
          tooltip: 'Param keys',
          value: route.keys
        }
      }
    });
  }

  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: 'redirect',
      value: record.redirect
    });
  }

  if (route.alias.length) {
    fields.push({
      editable: false,
      key: 'aliases',
      value: route.alias.map(function (alias) {
        return alias.record.path;
      })
    });
  }

  fields.push({
    key: 'score',
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map(function (score) {
          return score.join(', ');
        }).join(' | '),
        tooltip: 'Score used to sort routes',
        value: route.score
      }
    }
  });
  return fields;
}
/**
 * Extracted from tailwind palette
 */


var PINK_500 = 0xec4899;
var BLUE_600 = 0x2563eb;
var LIME_500 = 0x84cc16;
var CYAN_400 = 0x22d3ee;
var ORANGE_400 = 0xfb923c; // const GRAY_100 = 0xf4f4f5

var DARK = 0x666666;

function formatRouteRecordForInspector(route) {
  var tags = [];
  var record = route.record;

  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }

  if (record.aliasOf) {
    tags.push({
      label: 'alias',
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }

  if (route.__vd_match) {
    tags.push({
      label: 'matches',
      textColor: 0,
      backgroundColor: PINK_500
    });
  }

  if (route.__vd_exactActive) {
    tags.push({
      label: 'exact',
      textColor: 0,
      backgroundColor: LIME_500
    });
  }

  if (route.__vd_active) {
    tags.push({
      label: 'active',
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }

  if (record.redirect) {
    tags.push({
      label: 'redirect: ' + (typeof record.redirect === 'string' ? record.redirect : 'Object'),
      textColor: 0xffffff,
      backgroundColor: DARK
    });
  } // add an id to be able to select it. Using the `path` is not possible because
  // empty path children would collide with their parents


  var id = record.__vd_id;

  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }

  return {
    id: id,
    label: record.path,
    tags: tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
} //  incremental id for route records and inspector state


var routeRecordId = 0;
var EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;

function markRouteRecordActive(route, currentRoute) {
  // no route will be active if matched is empty
  // reset the matching state
  var isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;

  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some(function (match) {
      return isSameRouteRecord(match, route.record);
    });
  }

  route.children.forEach(function (childRoute) {
    return markRouteRecordActive(childRoute, currentRoute);
  });
}

function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}

function isRouteMatching(route, filter) {
  var found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;

  if (!found || found.length < 3) {
    return false;
  } // use a regexp without $ at the end to match nested routes better


  var nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);

  if (nonEndingRE.test(filter)) {
    // mark children as matches
    route.children.forEach(function (child) {
      return isRouteMatching(child, filter);
    }); // exception case: `/`

    if (route.record.path !== '/' || filter === '/') {
      route.__vd_match = route.re.test(filter);
      return true;
    } // hide the / route


    return false;
  }

  var path = route.record.path.toLowerCase();
  var decodedPath = decode(path); // also allow partial matching on the path

  if (!filter.startsWith('/') && (decodedPath.includes(filter) || path.includes(filter))) return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
  if (route.record.name && String(route.record.name).includes(filter)) return true;
  return route.children.some(function (child) {
    return isRouteMatching(child, filter);
  });
}

function omit(obj, keys) {
  var ret = {};

  for (var _key5 in obj) {
    if (!keys.includes(_key5)) {
      // @ts-expect-error
      ret[_key5] = obj[_key5];
    }
  }

  return ret;
}
/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */


function createRouter(options) {
  var matcher = createRouterMatcher(options.routes, options);
  var parseQuery$1 = options.parseQuery || parseQuery;
  var stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  var routerHistory = options.history;
  if ( true && !routerHistory) throw new Error('Provide the "history" option when calling "createRouter()":' + ' https://next.router.vuejs.org/api/#history.');
  var beforeGuards = useCallbacks();
  var beforeResolveGuards = useCallbacks();
  var afterGuards = useCallbacks();
  var currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* shallowRef */ "p"])(START_LOCATION_NORMALIZED);
  var pendingLocation = START_LOCATION_NORMALIZED; // leave the scrollRestoration if no scrollBehavior is provided

  if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  var normalizeParams = applyToParams.bind(null, function (paramValue) {
    return '' + paramValue;
  });
  var encodeParams = applyToParams.bind(null, encodeParam);
  var decodeParams = applyToParams.bind(null, decode);

  function addRoute(parentOrRoute, route) {
    var parent;
    var record;

    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }

    return matcher.addRoute(record, parent);
  }

  function removeRoute(name) {
    var recordMatcher = matcher.getRecordMatcher(name);

    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (true) {
      warn("Cannot remove non-existent route \"".concat(String(name), "\""));
    }
  }

  function getRoutes() {
    return matcher.getRoutes().map(function (routeMatcher) {
      return routeMatcher.record;
    });
  }

  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }

  function resolve(rawLocation, currentLocation) {
    // const objectLocation = routerLocationAsObject(rawLocation)
    // we create a copy to modify it later
    currentLocation = assign({}, currentLocation || currentRoute.value);

    if (typeof rawLocation === 'string') {
      var locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);

      var _matchedRoute = matcher.resolve({
        path: locationNormalized.path
      }, currentLocation);

      var _href = routerHistory.createHref(locationNormalized.fullPath);

      if (true) {
        if (_href.startsWith('//')) warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(_href, "\". A resolved location cannot start with multiple slashes."));else if (!_matchedRoute.matched.length) {
          warn("No match found for location with path \"".concat(rawLocation, "\""));
        }
      } // locationNormalized is always a new object


      return assign(locationNormalized, _matchedRoute, {
        params: decodeParams(_matchedRoute.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: undefined,
        href: _href
      });
    }

    var matcherLocation; // path could be relative in object as well

    if ('path' in rawLocation) {
      if ( true && 'params' in rawLocation && !('name' in rawLocation) && Object.keys(rawLocation.params).length) {
        warn("Path \"".concat(rawLocation.path, "\" was passed with params but they will be ignored. Use a named route alongside params instead."));
      }

      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      // pass encoded values to the matcher so it can produce encoded path and fullPath
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      }); // current location params are decoded, we need to encode them in case the
      // matcher merges the params

      currentLocation.params = encodeParams(currentLocation.params);
    }

    var matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    var hash = rawLocation.hash || '';

    if ( true && hash && !hash.startsWith('#')) {
      warn("A `hash` should always start with the character \"#\". Replace \"".concat(hash, "\" with \"#").concat(hash, "\"."));
    } // decoding them) the matcher might have merged current location params so
    // we need to run the decoding again


    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    var fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    var href = routerHistory.createHref(fullPath);

    if (true) {
      if (href.startsWith('//')) {
        warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(href, "\". A resolved location cannot start with multiple slashes."));
      } else if (!matchedRoute.matched.length) {
        warn("No match found for location with path \"".concat('path' in rawLocation ? rawLocation.path : rawLocation, "\""));
      }
    }

    return assign({
      fullPath: fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: hash,
      query: // if the user is using a custom query lib like qs, we might have
      // nested objects, so we keep the query as is, meaning it can contain
      // numbers at `$route.query`, but at the point, the user will have to
      // use their own type anyway.
      // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
      stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query
    }, matchedRoute, {
      redirectedFrom: undefined,
      href: href
    });
  }

  function locationAsObject(to) {
    return typeof to === 'string' ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }

  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8
      /* NAVIGATION_CANCELLED */
      , {
        from: from,
        to: to
      });
    }
  }

  function push(to) {
    return pushWithRedirect(to);
  }

  function replace(to) {
    return push(assign(locationAsObject(to), {
      replace: true
    }));
  }

  function handleRedirectRecord(to) {
    var lastMatched = to.matched[to.matched.length - 1];

    if (lastMatched && lastMatched.redirect) {
      var redirect = lastMatched.redirect;
      var newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;

      if (typeof newTargetLocation === 'string') {
        newTargetLocation = newTargetLocation.includes('?') || newTargetLocation.includes('#') ? newTargetLocation = locationAsObject(newTargetLocation) : // force empty params
        {
          path: newTargetLocation
        }; // @ts-expect-error: force empty params when a string is passed to let
        // the router parse them again

        newTargetLocation.params = {};
      }

      if ( true && !('path' in newTargetLocation) && !('name' in newTargetLocation)) {
        warn("Invalid redirect found:\n".concat(JSON.stringify(newTargetLocation, null, 2), "\n when navigating to \"").concat(to.fullPath, "\". A redirect must contain a name or path. This will break in production."));
        throw new Error('Invalid redirect');
      }

      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }

  function pushWithRedirect(to, redirectedFrom) {
    var targetLocation = pendingLocation = resolve(to);
    var from = currentRoute.value;
    var data = to.state;
    var force = to.force; // to could be a string where `replace` is a function

    var replace = to.replace === true;
    var shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
      state: data,
      force: force,
      replace: replace
    }), // keep original redirectedFrom if it exists
    redirectedFrom || targetLocation); // if it was a redirect we already called `pushWithRedirect` above

    var toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    var failure;

    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16
      /* NAVIGATION_DUPLICATED */
      , {
        to: toLocation,
        from: from
      }); // trigger scroll to allow scrolling to the same anchor

      handleScroll(from, from, // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      true, // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      false);
    }

    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch(function (error) {
      return isNavigationFailure(error) ? error : // reject any unknown error
      triggerError(error, toLocation, from);
    }).then(function (failure) {
      if (failure) {
        if (isNavigationFailure(failure, 2
        /* NAVIGATION_GUARD_REDIRECT */
        )) {
          if ( true && // we are redirecting to the same location we were already at
          isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) && // and we have done it a couple of times
          redirectedFrom && // @ts-expect-error: added only in dev
          (redirectedFrom._count = redirectedFrom._count ? // @ts-expect-error
          redirectedFrom._count + 1 : 1) > 10) {
            warn("Detected an infinite redirection in a navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(toLocation.fullPath, "\". Aborting to avoid a Stack Overflow. This will break in production if not fixed."));
            return Promise.reject(new Error('Infinite redirect in navigation guard'));
          }

          return pushWithRedirect( // keep options
          assign(locationAsObject(failure.to), {
            state: data,
            force: force,
            replace: replace
          }), // preserve the original redirectedFrom if any
          redirectedFrom || toLocation);
        }
      } else {
        // if we fail we don't finalize the navigation
        failure = finalizeNavigation(toLocation, from, true, replace, data);
      }

      triggerAfterEach(toLocation, from, failure);
      return failure;
    });
  }
  /**
   * Helper to reject and skip all navigation guards if a new navigation happened
   * @param to
   * @param from
   */


  function checkCanceledNavigationAndReject(to, from) {
    var error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  } // TODO: refactor the whole before guards by internally using router.beforeEach


  function navigate(to, from) {
    var guards;

    var _extractChangingRecor = extractChangingRecords(to, from),
        _extractChangingRecor2 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_extractChangingRecor, 3),
        leavingRecords = _extractChangingRecor2[0],
        updatingRecords = _extractChangingRecor2[1],
        enteringRecords = _extractChangingRecor2[2]; // all components here have been resolved once because we are leaving


    guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from); // leavingRecords is already reversed

    var _iterator14 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(leavingRecords),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var record = _step14.value;
        record.leaveGuards.forEach(function (guard) {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }

    var canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck); // run the queue of per route beforeRouteLeave guards

    return runGuardQueue(guards).then(function () {
      // check global guards beforeEach
      guards = [];

      var _iterator15 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(beforeGuards.list()),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var guard = _step15.value;
          guards.push(guardToPromiseFn(guard, to, from));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(function () {
      // check in components beforeRouteUpdate
      guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);

      var _iterator16 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(updatingRecords),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var record = _step16.value;
          record.updateGuards.forEach(function (guard) {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // check the route beforeEnter
      guards = [];

      var _iterator17 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(to.matched),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var record = _step17.value;

          // do not trigger beforeEnter on reused views
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              var _iterator18 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(record.beforeEnter),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var beforeEnter = _step18.value;
                  guards.push(guardToPromiseFn(beforeEnter, to, from));
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
      // clear existing enterCallbacks, these are added by extractComponentsGuards
      to.matched.forEach(function (record) {
        return record.enterCallbacks = {};
      }); // check in-component beforeRouteEnter

      guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // check global guards beforeResolve
      guards = [];

      var _iterator19 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(beforeResolveGuards.list()),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var guard = _step19.value;
          guards.push(guardToPromiseFn(guard, to, from));
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }

      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }) // catch any navigation canceled
    .catch(function (err) {
      return isNavigationFailure(err, 8
      /* NAVIGATION_CANCELLED */
      ) ? err : Promise.reject(err);
    });
  }

  function triggerAfterEach(to, from, failure) {
    // navigation is confirmed, call afterGuards
    // TODO: wrap with error handlers
    var _iterator20 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(afterGuards.list()),
        _step20;

    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var guard = _step20.value;
        guard(to, from, failure);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
  }
  /**
   * - Cleans up any navigation guards
   * - Changes the url if necessary
   * - Calls the scrollBehavior
   */


  function finalizeNavigation(toLocation, from, isPush, replace, data) {
    // a more recent navigation took place
    var error = checkCanceledNavigation(toLocation, from);
    if (error) return error; // only consider as push if it's not the first navigation

    var isFirstNavigation = from === START_LOCATION_NORMALIZED;
    var state = !isBrowser ? {} : history.state; // change URL only if the user did a push/replace and if it's not the initial navigation because
    // it's just reflecting the url

    if (isPush) {
      // on the initial navigation, we want to reuse the scroll position from
      // history state if it exists
      if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
        scroll: isFirstNavigation && state && state.scroll
      }, data));else routerHistory.push(toLocation.fullPath, data);
    } // accept current navigation


    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }

  var removeHistoryListener; // attach listener to history to trigger navigations

  function setupListeners() {
    removeHistoryListener = routerHistory.listen(function (to, _from, info) {
      // cannot be a redirect route because it was in history
      var toLocation = resolve(to); // due to dynamic routing, and to hash history with manual navigation
      // (manually changing the url or calling history.hash = '#/somewhere'),
      // there could be a redirect record in history

      var shouldRedirect = handleRedirectRecord(toLocation);

      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, {
          replace: true
        }), toLocation).catch(noop);
        return;
      }

      pendingLocation = toLocation;
      var from = currentRoute.value; // TODO: should be moved to web history?

      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }

      navigate(toLocation, from).catch(function (error) {
        if (isNavigationFailure(error, 4
        /* NAVIGATION_ABORTED */
        | 8
        /* NAVIGATION_CANCELLED */
        )) {
          return error;
        }

        if (isNavigationFailure(error, 2
        /* NAVIGATION_GUARD_REDIRECT */
        )) {
          // Here we could call if (info.delta) routerHistory.go(-info.delta,
          // false) but this is bug prone as we have no way to wait the
          // navigation to be finished before calling pushWithRedirect. Using
          // a setTimeout of 16ms seems to work but there is not guarantee for
          // it to work on every browser. So Instead we do not restore the
          // history entry and trigger a new navigation as requested by the
          // navigation guard.
          // the error is already handled by router.push we just want to avoid
          // logging the error
          pushWithRedirect(error.to, toLocation // avoid an uncaught rejection, let push call triggerError
          ).then(function (failure) {
            // manual change in hash history #916 ending up in the URL not
            // changing but it was changed by the manual url change, so we
            // need to manually change it ourselves
            if (isNavigationFailure(failure, 4
            /* NAVIGATION_ABORTED */
            | 16
            /* NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop); // avoid the then branch

          return Promise.reject();
        } // do not restore history on unknown direction


        if (info.delta) routerHistory.go(-info.delta, false); // unrecognized error, transfer to the global handler

        return triggerError(error, toLocation, from);
      }).then(function (failure) {
        failure = failure || finalizeNavigation( // after navigation, all matched components are resolved
        toLocation, from, false); // revert the navigation

        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4
          /* NAVIGATION_ABORTED */
          | 16
          /* NAVIGATION_DUPLICATED */
          )) {
            // manual change in hash history #916
            // it's like a push but lacks the information of the direction
            routerHistory.go(-1, false);
          }
        }

        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  } // Initialization and Errors


  var readyHandlers = useCallbacks();
  var errorHandlers = useCallbacks();
  var ready;
  /**
   * Trigger errorHandlers added via onError and throws the error as well
   *
   * @param error - error to throw
   * @param to - location we were navigating to when the error happened
   * @param from - location we were navigating from when the error happened
   * @returns the error as a rejected promise
   */

  function triggerError(error, to, from) {
    markAsReady(error);
    var list = errorHandlers.list();

    if (list.length) {
      list.forEach(function (handler) {
        return handler(error, to, from);
      });
    } else {
      if (true) {
        warn('uncaught error during route navigation:');
      }

      console.error(error);
    }

    return Promise.reject(error);
  }

  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
    return new Promise(function (resolve, reject) {
      readyHandlers.add([resolve, reject]);
    });
  }
  /**
   * Mark the router as ready, resolving the promised returned by isReady(). Can
   * only be called once, otherwise does nothing.
   * @param err - optional error
   */


  function markAsReady(err) {
    if (ready) return;
    ready = true;
    setupListeners();
    readyHandlers.list().forEach(function (_ref16) {
      var _ref17 = Object(_Users_suzigang_Documents_project_taro_project_templates_vue3_NutUI_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref16, 2),
          resolve = _ref17[0],
          reject = _ref17[1];

      return err ? reject(err) : resolve();
    });
    readyHandlers.reset();
  } // Scroll behavior


  function handleScroll(to, from, isPush, isFirstNavigation) {
    var scrollBehavior = options.scrollBehavior;
    if (!isBrowser || !scrollBehavior) return Promise.resolve();
    var scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* nextTick */ "r"])().then(function () {
      return scrollBehavior(to, from, scrollPosition);
    }).then(function (position) {
      return position && scrollToPosition(position);
    }).catch(function (err) {
      return triggerError(err, to, from);
    });
  }

  var go = function go(delta) {
    return routerHistory.go(delta);
  };

  var started;
  var installedApps = new Set();
  var router = {
    currentRoute: currentRoute,
    addRoute: addRoute,
    removeRoute: removeRoute,
    hasRoute: hasRoute,
    getRoutes: getRoutes,
    resolve: resolve,
    options: options,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      return go(-1);
    },
    forward: function forward() {
      return go(1);
    },
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady: isReady,
    install: function install(app) {
      var router = this;
      app.component('RouterLink', RouterLink);
      app.component('RouterView', RouterView);
      app.config.globalProperties.$router = router;
      Object.defineProperty(app.config.globalProperties, '$route', {
        enumerable: true,
        get: function get() {
          return Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "v"])(currentRoute);
        }
      }); // this initial navigation is only necessary on client, on server it doesn't
      // make sense because it will create an extra unnecessary navigation and could
      // lead to problems

      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        // see above
        started = true;
        push(routerHistory.location).catch(function (err) {
          if (true) warn('Unexpected error when starting the router:', err);
        });
      }

      var reactiveRoute = {};

      var _loop5 = function _loop5(_key6) {
        // @ts-expect-error: the key matches
        reactiveRoute[_key6] = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "e"])(function () {
          return currentRoute.value[_key6];
        });
      };

      for (var _key6 in START_LOCATION_NORMALIZED) {
        _loop5(_key6);
      }

      app.provide(routerKey, router);
      app.provide(routeLocationKey, Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* reactive */ "j"])(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      var unmountApp = app.unmount;
      installedApps.add(app);

      app.unmount = function () {
        installedApps.delete(app);

        if (installedApps.size < 1) {
          removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }

        unmountApp();
      };

      if (( true) && isBrowser) {
        addDevtools(app, router, matcher);
      }
    }
  };
  return router;
}

function runGuardQueue(guards) {
  return guards.reduce(function (promise, guard) {
    return promise.then(function () {
      return guard();
    });
  }, Promise.resolve());
}

function extractChangingRecords(to, from) {
  var leavingRecords = [];
  var updatingRecords = [];
  var enteringRecords = [];
  var len = Math.max(from.matched.length, to.matched.length);

  var _loop6 = function _loop6(i) {
    var recordFrom = from.matched[i];

    if (recordFrom) {
      if (to.matched.find(function (record) {
        return isSameRouteRecord(record, recordFrom);
      })) updatingRecords.push(recordFrom);else leavingRecords.push(recordFrom);
    }

    var recordTo = to.matched[i];

    if (recordTo) {
      // the type doesn't matter because we are comparing per reference
      if (!from.matched.find(function (record) {
        return isSameRouteRecord(record, recordTo);
      })) {
        enteringRecords.push(recordTo);
      }
    }
  };

  for (var i = 0; i < len; i++) {
    _loop6(i);
  }

  return [leavingRecords, updatingRecords, enteringRecords];
}
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */


function useRouter() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */


function useRoute() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routeLocationKey);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "./node_modules/@tarojs/plugin-html/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.ts */ "./node_modules/babel-loader/lib/index.js!./src/app.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");









var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__["createVue3App"])(_node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], vue__WEBPACK_IMPORTED_MODULE_5__[/* h */ "o"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["initPxTransform"])({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ })

},[["./src/app.ts","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map