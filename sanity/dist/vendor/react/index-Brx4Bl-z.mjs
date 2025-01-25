var r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y = Symbol.for("react.element"), T = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), U = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), C = Symbol.iterator;
function z(e) {
  return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
}
var b = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, $ = Object.assign, O = {};
function p(e, t, n) {
  this.props = e, this.context = t, this.refs = O, this.updater = n || b;
}
p.prototype.isReactComponent = {};
p.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
p.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function I() {
}
I.prototype = p.prototype;
function h(e, t, n) {
  this.props = e, this.context = t, this.refs = O, this.updater = n || b;
}
var S = h.prototype = new I();
S.constructor = h;
$(S, p.prototype);
S.isPureReactComponent = !0;
var k = Array.isArray, j = Object.prototype.hasOwnProperty, E = { current: null }, x = { key: !0, ref: !0, __self: !0, __source: !0 };
function g(e, t, n) {
  var o, u = {}, f = null, s = null;
  if (t != null) for (o in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (f = "" + t.key), t) j.call(t, o) && !x.hasOwnProperty(o) && (u[o] = t[o]);
  var i = arguments.length - 2;
  if (i === 1) u.children = n;
  else if (1 < i) {
    for (var c = Array(i), l = 0; l < i; l++) c[l] = arguments[l + 2];
    u.children = c;
  }
  if (e && e.defaultProps) for (o in i = e.defaultProps, i) u[o] === void 0 && (u[o] = i[o]);
  return { $$typeof: y, type: e, key: f, ref: s, props: u, _owner: E.current };
}
function B(e, t) {
  return { $$typeof: y, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function R(e) {
  return typeof e == "object" && e !== null && e.$$typeof === y;
}
function H(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var w = /\/+/g;
function m(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? H("" + e.key) : t.toString(36);
}
function v(e, t, n, o, u) {
  var f = typeof e;
  (f === "undefined" || f === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (f) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case y:
        case T:
          s = !0;
      }
  }
  if (s) return s = e, u = u(s), e = o === "" ? "." + m(s, 0) : o, k(u) ? (n = "", e != null && (n = e.replace(w, "$&/") + "/"), v(u, t, n, "", function(l) {
    return l;
  })) : u != null && (R(u) && (u = B(u, n + (!u.key || s && s.key === u.key ? "" : ("" + u.key).replace(w, "$&/") + "/") + e)), t.push(u)), 1;
  if (s = 0, o = o === "" ? "." : o + ":", k(e)) for (var i = 0; i < e.length; i++) {
    f = e[i];
    var c = o + m(f, i);
    s += v(f, t, n, c, u);
  }
  else if (c = z(e), typeof c == "function") for (e = c.call(e), i = 0; !(f = e.next()).done; ) f = f.value, c = o + m(f, i++), s += v(f, t, n, c, u);
  else if (f === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function d(e, t, n) {
  if (e == null) return e;
  var o = [], u = 0;
  return v(e, o, "", "", function(f) {
    return t.call(n, f, u++);
  }), o;
}
function W(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var a = { current: null }, _ = { transition: null }, Y = { ReactCurrentDispatcher: a, ReactCurrentBatchConfig: _, ReactCurrentOwner: E };
function P() {
  throw Error("act(...) is not supported in production builds of React.");
}
var G = r.Children = { map: d, forEach: function(e, t, n) {
  d(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return d(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return d(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!R(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} }, J = r.Component = p, K = r.Fragment = D, Q = r.Profiler = L, X = r.PureComponent = h, Z = r.StrictMode = V, ee = r.Suspense = N, te = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, re = r.act = P, ne = r.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var o = $({}, e.props), u = e.key, f = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (f = t.ref, s = E.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) j.call(t, c) && !x.hasOwnProperty(c) && (o[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var l = 0; l < c; l++) i[l] = arguments[l + 2];
    o.children = i;
  }
  return { $$typeof: y, type: e.type, key: u, ref: f, props: o, _owner: s };
}, ue = r.createContext = function(e) {
  return e = { $$typeof: U, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: F, _context: e }, e.Consumer = e;
}, oe = r.createElement = g, ce = r.createFactory = function(e) {
  var t = g.bind(null, e);
  return t.type = e, t;
}, fe = r.createRef = function() {
  return { current: null };
}, ie = r.forwardRef = function(e) {
  return { $$typeof: A, render: e };
}, se = r.isValidElement = R, ae = r.lazy = function(e) {
  return { $$typeof: q, _payload: { _status: -1, _result: e }, _init: W };
}, le = r.memo = function(e, t) {
  return { $$typeof: M, type: e, compare: t === void 0 ? null : t };
}, pe = r.startTransition = function(e) {
  var t = _.transition;
  _.transition = {};
  try {
    e();
  } finally {
    _.transition = t;
  }
}, ye = r.unstable_act = P, de = r.useCallback = function(e, t) {
  return a.current.useCallback(e, t);
}, ve = r.useContext = function(e) {
  return a.current.useContext(e);
}, _e = r.useDebugValue = function() {
}, me = r.useDeferredValue = function(e) {
  return a.current.useDeferredValue(e);
}, he = r.useEffect = function(e, t) {
  return a.current.useEffect(e, t);
}, Se = r.useId = function() {
  return a.current.useId();
}, Ee = r.useImperativeHandle = function(e, t, n) {
  return a.current.useImperativeHandle(e, t, n);
}, Re = r.useInsertionEffect = function(e, t) {
  return a.current.useInsertionEffect(e, t);
}, Ce = r.useLayoutEffect = function(e, t) {
  return a.current.useLayoutEffect(e, t);
}, ke = r.useMemo = function(e, t) {
  return a.current.useMemo(e, t);
}, we = r.useReducer = function(e, t, n) {
  return a.current.useReducer(e, t, n);
}, be = r.useRef = function(e) {
  return a.current.useRef(e);
}, $e = r.useState = function(e) {
  return a.current.useState(e);
}, Oe = r.useSyncExternalStore = function(e, t, n) {
  return a.current.useSyncExternalStore(e, t, n);
}, Ie = r.useTransition = function() {
  return a.current.useTransition();
}, je = r.version = "18.3.1";
export {
  G as Children,
  J as Component,
  K as Fragment,
  Q as Profiler,
  X as PureComponent,
  Z as StrictMode,
  ee as Suspense,
  te as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  re as act,
  ne as cloneElement,
  ue as createContext,
  oe as createElement,
  ce as createFactory,
  fe as createRef,
  r as default,
  ie as forwardRef,
  se as isValidElement,
  ae as lazy,
  le as memo,
  pe as startTransition,
  ye as unstable_act,
  de as useCallback,
  ve as useContext,
  _e as useDebugValue,
  me as useDeferredValue,
  he as useEffect,
  Se as useId,
  Ee as useImperativeHandle,
  Re as useInsertionEffect,
  Ce as useLayoutEffect,
  ke as useMemo,
  we as useReducer,
  be as useRef,
  $e as useState,
  Oe as useSyncExternalStore,
  Ie as useTransition,
  je as version
};
