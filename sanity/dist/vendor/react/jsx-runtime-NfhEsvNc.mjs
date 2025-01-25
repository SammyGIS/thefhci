import l from "react";
var o = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p = l, d = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, m = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
function s(t, e, u) {
  var r, n = {}, f = null, _ = null;
  u !== void 0 && (f = "" + u), e.key !== void 0 && (f = "" + e.key), e.ref !== void 0 && (_ = e.ref);
  for (r in e) a.call(e, r) && !y.hasOwnProperty(r) && (n[r] = e[r]);
  if (t && t.defaultProps) for (r in e = t.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
  return { $$typeof: d, type: t, key: f, ref: _, props: n, _owner: m.current };
}
var c = o.Fragment = i, v = o.jsx = s, x = o.jsxs = s;
export {
  c as Fragment,
  o as default,
  v as jsx,
  x as jsxs
};
