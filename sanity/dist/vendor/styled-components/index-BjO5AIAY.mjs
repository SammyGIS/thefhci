import O, { useState as Jt, useMemo as Se, useEffect as Qt, useContext as vt, createElement as Xt } from "react";
function er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var x = function() {
  return x = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, x.apply(this, arguments);
};
function Z(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, s = t.length, a; n < s; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var tr = function(t, r, n, s) {
  var a = n ? n.call(s, t, r) : void 0;
  if (a !== void 0)
    return !!a;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var i = Object.keys(t), c = Object.keys(r);
  if (i.length !== c.length)
    return !1;
  for (var o = Object.prototype.hasOwnProperty.bind(r), h = 0; h < i.length; h++) {
    var u = i[h];
    if (!o(u))
      return !1;
    var p = t[u], l = r[u];
    if (a = n ? n.call(s, p, l, u) : void 0, a === !1 || a === void 0 && p !== l)
      return !1;
  }
  return !0;
};
const rr = /* @__PURE__ */ er(tr);
var v = "-ms-", oe = "-moz-", m = "-webkit-", wt = "comm", Ae = "rule", Ue = "decl", nr = "@import", bt = "@keyframes", sr = "@layer", Ct = Math.abs, Ve = String.fromCharCode, Ge = Object.assign;
function ar(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function It(e) {
  return e.trim();
}
function j(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function f(e, t, r) {
  return e.replace(t, r);
}
function ve(e, t, r) {
  return e.indexOf(t, r);
}
function A(e, t) {
  return e.charCodeAt(t) | 0;
}
function J(e, t, r) {
  return e.slice(t, r);
}
function T(e) {
  return e.length;
}
function Pt(e) {
  return e.length;
}
function ie(e, t) {
  return t.push(e), e;
}
function ir(e, t) {
  return e.map(t).join("");
}
function it(e, t) {
  return e.filter(function(r) {
    return !j(r, t);
  });
}
var Oe = 1, Q = 1, Et = 0, $ = 0, E = 0, re = "";
function Re(e, t, r, n, s, a, i, c) {
  return { value: e, root: t, parent: r, type: n, props: s, children: a, line: Oe, column: Q, length: i, return: "", siblings: c };
}
function M(e, t) {
  return Ge(Re("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function U(e) {
  for (; e.root; )
    e = M(e.root, { children: [e] });
  ie(e, e.siblings);
}
function or() {
  return E;
}
function cr() {
  return E = $ > 0 ? A(re, --$) : 0, Q--, E === 10 && (Q = 1, Oe--), E;
}
function N() {
  return E = $ < Et ? A(re, $++) : 0, Q++, E === 10 && (Q = 1, Oe++), E;
}
function B() {
  return A(re, $);
}
function we() {
  return $;
}
function ke(e, t) {
  return J(re, e, t);
}
function Le(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ur(e) {
  return Oe = Q = 1, Et = T(re = e), $ = 0, [];
}
function fr(e) {
  return re = "", e;
}
function je(e) {
  return It(ke($ - 1, We(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pr(e) {
  for (; (E = B()) && E < 33; )
    N();
  return Le(e) > 2 || Le(E) > 3 ? "" : " ";
}
function hr(e, t) {
  for (; --t && N() && !(E < 48 || E > 102 || E > 57 && E < 65 || E > 70 && E < 97); )
    ;
  return ke(e, we() + (t < 6 && B() == 32 && N() == 32));
}
function We(e) {
  for (; N(); )
    switch (E) {
      case e:
        return $;
      case 34:
      case 39:
        e !== 34 && e !== 39 && We(E);
        break;
      case 40:
        e === 41 && We(e);
        break;
      case 92:
        N();
        break;
    }
  return $;
}
function lr(e, t) {
  for (; N() && e + E !== 57; )
    if (e + E === 84 && B() === 47)
      break;
  return "/*" + ke(t, $ - 1) + "*" + Ve(e === 47 ? e : N());
}
function dr(e) {
  for (; !Le(B()); )
    N();
  return ke(e, $);
}
function gr(e) {
  return fr(be("", null, null, null, [""], e = ur(e), 0, [0], e));
}
function be(e, t, r, n, s, a, i, c, o) {
  for (var h = 0, u = 0, p = i, l = 0, g = 0, y = 0, w = 1, R = 1, P = 1, C = 0, b = "", I = s, _ = a, S = n, d = b; R; )
    switch (y = C, C = N()) {
      case 40:
        if (y != 108 && A(d, p - 1) == 58) {
          ve(d += f(je(C), "&", "&\f"), "&\f", Ct(h ? c[h - 1] : 0)) != -1 && (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        d += je(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        d += pr(y);
        break;
      case 92:
        d += hr(we() - 1, 7);
        continue;
      case 47:
        switch (B()) {
          case 42:
          case 47:
            ie(mr(lr(N(), we()), t, r, o), o);
            break;
          default:
            d += "/";
        }
        break;
      case 123 * w:
        c[h++] = T(d) * P;
      case 125 * w:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            R = 0;
          case 59 + u:
            P == -1 && (d = f(d, /\f/g, "")), g > 0 && T(d) - p && ie(g > 32 ? ct(d + ";", n, r, p - 1, o) : ct(f(d, " ", "") + ";", n, r, p - 2, o), o);
            break;
          case 59:
            d += ";";
          default:
            if (ie(S = ot(d, t, r, h, u, s, c, b, I = [], _ = [], p, a), a), C === 123)
              if (u === 0)
                be(d, t, S, S, I, a, p, c, _);
              else
                switch (l === 99 && A(d, 3) === 110 ? 100 : l) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    be(e, S, S, n && ie(ot(e, S, S, 0, 0, s, c, b, s, I = [], p, _), _), s, _, p, c, n ? I : _);
                    break;
                  default:
                    be(d, S, S, S, [""], _, 0, c, _);
                }
        }
        h = u = g = 0, w = P = 1, b = d = "", p = i;
        break;
      case 58:
        p = 1 + T(d), g = y;
      default:
        if (w < 1) {
          if (C == 123)
            --w;
          else if (C == 125 && w++ == 0 && cr() == 125)
            continue;
        }
        switch (d += Ve(C), C * w) {
          case 38:
            P = u > 0 ? 1 : (d += "\f", -1);
            break;
          case 44:
            c[h++] = (T(d) - 1) * P, P = 1;
            break;
          case 64:
            B() === 45 && (d += je(N())), l = B(), u = p = T(b = d += dr(we())), C++;
            break;
          case 45:
            y === 45 && T(d) == 2 && (w = 0);
        }
    }
  return a;
}
function ot(e, t, r, n, s, a, i, c, o, h, u, p) {
  for (var l = s - 1, g = s === 0 ? a : [""], y = Pt(g), w = 0, R = 0, P = 0; w < n; ++w)
    for (var C = 0, b = J(e, l + 1, l = Ct(R = i[w])), I = e; C < y; ++C)
      (I = It(R > 0 ? g[C] + " " + b : f(b, /&\f/g, g[C]))) && (o[P++] = I);
  return Re(e, t, r, s === 0 ? Ae : c, o, h, u, p);
}
function mr(e, t, r, n) {
  return Re(e, t, r, wt, Ve(or()), J(e, 2, -2), 0, n);
}
function ct(e, t, r, n, s) {
  return Re(e, t, r, Ue, J(e, 0, n), J(e, n + 1, -1), n, s);
}
function xt(e, t, r) {
  switch (ar(e, t)) {
    case 5103:
      return m + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return m + e + e;
    case 4789:
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return m + e + oe + e + v + e + e;
    case 5936:
      switch (A(e, t + 11)) {
        case 114:
          return m + e + v + f(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return m + e + v + f(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return m + e + v + f(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return m + e + v + e + e;
    case 6165:
      return m + e + v + "flex-" + e + e;
    case 5187:
      return m + e + f(e, /(\w+).+(:[^]+)/, m + "box-$1$2" + v + "flex-$1$2") + e;
    case 5443:
      return m + e + v + "flex-item-" + f(e, /flex-|-self/g, "") + (j(e, /flex-|baseline/) ? "" : v + "grid-row-" + f(e, /flex-|-self/g, "")) + e;
    case 4675:
      return m + e + v + "flex-line-pack" + f(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return m + e + v + f(e, "shrink", "negative") + e;
    case 5292:
      return m + e + v + f(e, "basis", "preferred-size") + e;
    case 6060:
      return m + "box-" + f(e, "-grow", "") + m + e + v + f(e, "grow", "positive") + e;
    case 4554:
      return m + f(e, /([^-])(transform)/g, "$1" + m + "$2") + e;
    case 6187:
      return f(f(f(e, /(zoom-|grab)/, m + "$1"), /(image-set)/, m + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return f(e, /(image-set\([^]*)/, m + "$1$`$1");
    case 4968:
      return f(f(e, /(.+:)(flex-)?(.*)/, m + "box-pack:$3" + v + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + m + e + e;
    case 4200:
      if (!j(e, /flex-|baseline/)) return v + "grid-column-align" + J(e, t) + e;
      break;
    case 2592:
    case 3360:
      return v + f(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, s) {
        return t = s, j(n.props, /grid-\w+-end/);
      }) ? ~ve(e + (r = r[t].value), "span", 0) ? e : v + f(e, "-start", "") + e + v + "grid-row-span:" + (~ve(r, "span", 0) ? j(r, /\d+/) : +j(r, /\d+/) - +j(e, /\d+/)) + ";" : v + f(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return j(n.props, /grid-\w+-start/);
      }) ? e : v + f(f(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return f(e, /(.+)-inline(.+)/, m + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (T(e) - 1 - t > 6)
        switch (A(e, t + 1)) {
          case 109:
            if (A(e, t + 4) !== 45)
              break;
          case 102:
            return f(e, /(.+:)(.+)-([^]+)/, "$1" + m + "$2-$3$1" + oe + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ve(e, "stretch", 0) ? xt(f(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return f(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, s, a, i, c, o, h) {
        return v + s + ":" + a + h + (i ? v + s + "-span:" + (c ? o : +o - +a) + h : "") + e;
      });
    case 4949:
      if (A(e, t + 6) === 121)
        return f(e, ":", ":" + m) + e;
      break;
    case 6444:
      switch (A(e, A(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return f(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + m + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + m + "$2$3$1" + v + "$2box$3") + e;
        case 100:
          return f(e, ":", ":" + v) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return f(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Pe(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function yr(e, t, r, n) {
  switch (e.type) {
    case sr:
      if (e.children.length) break;
    case nr:
    case Ue:
      return e.return = e.return || e.value;
    case wt:
      return "";
    case bt:
      return e.return = e.value + "{" + Pe(e.children, n) + "}";
    case Ae:
      if (!T(e.value = e.props.join(","))) return "";
  }
  return T(r = Pe(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Sr(e) {
  var t = Pt(e);
  return function(r, n, s, a) {
    for (var i = "", c = 0; c < t; c++)
      i += e[c](r, n, s, a) || "";
    return i;
  };
}
function vr(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function wr(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ue:
        e.return = xt(e.value, e.length, r);
        return;
      case bt:
        return Pe([M(e, { value: f(e.value, "@", "@" + m) })], n);
      case Ae:
        if (e.length)
          return ir(r = e.props, function(s) {
            switch (j(s, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                U(M(e, { props: [f(s, /:(read-\w+)/, ":" + oe + "$1")] })), U(M(e, { props: [s] })), Ge(e, { props: it(r, n) });
                break;
              case "::placeholder":
                U(M(e, { props: [f(s, /:(plac\w+)/, ":" + m + "input-$1")] })), U(M(e, { props: [f(s, /:(plac\w+)/, ":" + oe + "$1")] })), U(M(e, { props: [f(s, /:(plac\w+)/, v + "input-$1")] })), U(M(e, { props: [s] })), Ge(e, { props: it(r, n) });
                break;
            }
            return "";
          });
    }
}
var br = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, L = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", _t = "active", Ee = "data-styled-version", X = "6.1.14", Ze = `/*!sc*/
`, ce = typeof window < "u" && "HTMLElement" in window, Cr = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Ir = {}, $e = Object.freeze([]), ee = Object.freeze({});
function Je(e, t, r) {
  return r === void 0 && (r = ee), e.theme !== r.theme && e.theme || t || r.theme;
}
var At = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Pr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Er = /(^-|-$)/g;
function ut(e) {
  return e.replace(Pr, "-").replace(Er, "");
}
var xr = /(a)(d)/gi, me = 52, ft = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ye(e) {
  var t, r = "";
  for (t = Math.abs(e); t > me; t = t / me | 0) r = ft(t % me) + r;
  return (ft(t % me) + r).replace(xr, "$1-$2");
}
var ze, Ot = 5381, V = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Rt = function(e) {
  return V(Ot, e);
};
function Qe(e) {
  return Ye(Rt(e) >>> 0);
}
function kt(e) {
  return e.displayName || e.name || "Component";
}
function Fe(e) {
  return typeof e == "string" && !0;
}
var $t = typeof Symbol == "function" && Symbol.for, Nt = $t ? Symbol.for("react.memo") : 60115, _r = $t ? Symbol.for("react.forward_ref") : 60112, Ar = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Or = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Tt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Rr = ((ze = {})[_r] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ze[Nt] = Tt, ze);
function pt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Nt ? Tt : "$$typeof" in e ? Rr[e.$$typeof] : Ar;
  var t;
}
var kr = Object.defineProperty, $r = Object.getOwnPropertyNames, ht = Object.getOwnPropertySymbols, Nr = Object.getOwnPropertyDescriptor, Tr = Object.getPrototypeOf, lt = Object.prototype;
function Xe(e, t, r) {
  if (typeof t != "string") {
    if (lt) {
      var n = Tr(t);
      n && n !== lt && Xe(e, n, r);
    }
    var s = $r(t);
    ht && (s = s.concat(ht(t)));
    for (var a = pt(e), i = pt(t), c = 0; c < s.length; ++c) {
      var o = s[c];
      if (!(o in Or || r && r[o] || i && o in i || a && o in a)) {
        var h = Nr(t, o);
        try {
          kr(e, o, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function q(e) {
  return typeof e == "function";
}
function et(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Y(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ue(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
  return r;
}
function fe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Be(e, t, r) {
  if (r === void 0 && (r = !1), !r && !fe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = Be(e[n], t[n]);
  else if (fe(t)) for (var n in t) e[n] = Be(e[n], t[n]);
  return e;
}
function tt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function k(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""));
}
var Dr = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, s = n.length, a = s; t >= a; ) if ((a <<= 1) < 0) throw k(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
      for (var i = s; i < a; i++) this.groupSizes[i] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), o = (i = 0, r.length); i < o; i++) this.tag.insertRule(c, r[i]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), s = n + r;
      this.groupSizes[t] = 0;
      for (var a = n; a < s; a++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], s = this.indexOfGroup(t), a = s + n, i = s; i < a; i++) r += "".concat(this.tag.getRule(i)).concat(Ze);
    return r;
  }, e;
}(), Ce = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), Ie = 1, ye = function(e) {
  if (Ce.has(e)) return Ce.get(e);
  for (; xe.has(Ie); ) Ie++;
  var t = Ie++;
  return Ce.set(e, t), xe.set(t, e), t;
}, jr = function(e, t) {
  Ie = t + 1, Ce.set(e, t), xe.set(t, e);
}, zr = "style[".concat(L, "][").concat(Ee, '="').concat(X, '"]'), Fr = new RegExp("^".concat(L, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Mr = function(e, t, r) {
  for (var n, s = r.split(","), a = 0, i = s.length; a < i; a++) (n = s[a]) && e.registerName(t, n);
}, Gr = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Ze), s = [], a = 0, i = n.length; a < i; a++) {
    var c = n[a].trim();
    if (c) {
      var o = c.match(Fr);
      if (o) {
        var h = 0 | parseInt(o[1], 10), u = o[2];
        h !== 0 && (jr(u, h), Mr(e, u, o[3]), e.getTag().insertRules(h, s)), s.length = 0;
      } else s.push(c);
    }
  }
}, dt = function(e) {
  for (var t = document.querySelectorAll(zr), r = 0, n = t.length; r < n; r++) {
    var s = t[r];
    s && s.getAttribute(L) !== _t && (Gr(e, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function qe() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Dt = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), s = function(c) {
    var o = Array.from(c.querySelectorAll("style[".concat(L, "]")));
    return o[o.length - 1];
  }(r), a = s !== void 0 ? s.nextSibling : null;
  n.setAttribute(L, _t), n.setAttribute(Ee, X);
  var i = qe();
  return i && n.setAttribute("nonce", i), r.insertBefore(n, a), n;
}, Lr = function() {
  function e(t) {
    this.element = Dt(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, s = 0, a = n.length; s < a; s++) {
        var i = n[s];
        if (i.ownerNode === r) return i;
      }
      throw k(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), Wr = function() {
  function e(t) {
    this.element = Dt(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Yr = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), gt = ce, Br = { isServer: !ce, useCSSOMInjection: !Cr }, te = function() {
  function e(t, r, n) {
    t === void 0 && (t = ee), r === void 0 && (r = {});
    var s = this;
    this.options = x(x({}, Br), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && ce && gt && (gt = !1, dt(this)), tt(this, function() {
      return function(a) {
        for (var i = a.getTag(), c = i.length, o = "", h = function(p) {
          var l = function(P) {
            return xe.get(P);
          }(p);
          if (l === void 0) return "continue";
          var g = a.names.get(l), y = i.getGroup(p);
          if (g === void 0 || !g.size || y.length === 0) return "continue";
          var w = "".concat(L, ".g").concat(p, '[id="').concat(l, '"]'), R = "";
          g !== void 0 && g.forEach(function(P) {
            P.length > 0 && (R += "".concat(P, ","));
          }), o += "".concat(y).concat(w, '{content:"').concat(R, '"}').concat(Ze);
        }, u = 0; u < c; u++) h(u);
        return o;
      }(s);
    });
  }
  return e.registerId = function(t) {
    return ye(t);
  }, e.prototype.rehydrate = function() {
    !this.server && ce && dt(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(x(x({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, s = r.target;
      return r.isServer ? new Yr(s) : n ? new Lr(s) : new Wr(s);
    }(this.options), new Dr(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (ye(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(ye(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(ye(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), qr = /&/g, Hr = /^\s*\/\/.*$/gm;
function jt(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = jt(r.children, t)), r;
  });
}
function zt(e) {
  var t, r, n, s = e === void 0 ? ee : e, a = s.options, i = a === void 0 ? ee : a, c = s.plugins, o = c === void 0 ? $e : c, h = function(l, g, y) {
    return y.startsWith(r) && y.endsWith(r) && y.replaceAll(r, "").length > 0 ? ".".concat(t) : l;
  }, u = o.slice();
  u.push(function(l) {
    l.type === Ae && l.value.includes("&") && (l.props[0] = l.props[0].replace(qr, r).replace(n, h));
  }), i.prefix && u.push(wr), u.push(yr);
  var p = function(l, g, y, w) {
    g === void 0 && (g = ""), y === void 0 && (y = ""), w === void 0 && (w = "&"), t = w, r = g, n = new RegExp("\\".concat(r, "\\b"), "g");
    var R = l.replace(Hr, ""), P = gr(y || g ? "".concat(y, " ").concat(g, " { ").concat(R, " }") : R);
    i.namespace && (P = jt(P, i.namespace));
    var C = [];
    return Pe(P, Sr(u.concat(vr(function(b) {
      return C.push(b);
    })))), C;
  };
  return p.hash = o.length ? o.reduce(function(l, g) {
    return g.name || k(15), V(l, g.name);
  }, Ot).toString() : "", p;
}
var Ft = new te(), He = zt(), rt = O.createContext({ shouldForwardProp: void 0, styleSheet: Ft, stylis: He }), nn = rt.Consumer, Kr = O.createContext(void 0);
function _e() {
  return vt(rt);
}
function Ur(e) {
  var t = Jt(e.stylisPlugins), r = t[0], n = t[1], s = _e().styleSheet, a = Se(function() {
    var o = s;
    return e.sheet ? o = e.sheet : e.target && (o = o.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (o = o.reconstructWithOptions({ useCSSOMInjection: !1 })), o;
  }, [e.disableCSSOMInjection, e.sheet, e.target, s]), i = Se(function() {
    return zt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  Qt(function() {
    rr(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = Se(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: a, stylis: i };
  }, [e.shouldForwardProp, a, i]);
  return O.createElement(rt.Provider, { value: c }, O.createElement(Kr.Provider, { value: i }, e.children));
}
var Mt = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(s, a) {
      a === void 0 && (a = He);
      var i = n.name + a.hash;
      s.hasNameForId(n.id, i) || s.insertRules(n.id, i, a(n.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, tt(this, function() {
      throw k(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = He), this.name + t.hash;
  }, e;
}(), Vr = function(e) {
  return e >= "A" && e <= "Z";
};
function mt(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Vr(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Gt = function(e) {
  return e == null || e === !1 || e === "";
}, Lt = function(e) {
  var t, r, n = [];
  for (var s in e) {
    var a = e[s];
    e.hasOwnProperty(s) && !Gt(a) && (Array.isArray(a) && a.isCss || q(a) ? n.push("".concat(mt(s), ":"), a, ";") : fe(a) ? n.push.apply(n, Z(Z(["".concat(s, " {")], Lt(a), !1), ["}"], !1)) : n.push("".concat(mt(s), ": ").concat((t = s, (r = a) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in br || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function G(e, t, r, n) {
  if (Gt(e)) return [];
  if (et(e)) return [".".concat(e.styledComponentId)];
  if (q(e)) {
    if (!q(a = e) || a.prototype && a.prototype.isReactComponent || !t) return [e];
    var s = e(t);
    return G(s, t, r, n);
  }
  var a;
  return e instanceof Mt ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : fe(e) ? Lt(e) : Array.isArray(e) ? Array.prototype.concat.apply($e, e.map(function(i) {
    return G(i, t, r, n);
  })) : [e.toString()];
}
function Wt(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (q(r) && !et(r)) return !1;
  }
  return !0;
}
var Zr = Rt(X), Jr = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Wt(t), this.componentId = r, this.baseHash = V(Zr, r), this.baseStyle = n, te.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) s = Y(s, this.staticRulesId);
    else {
      var a = ue(G(this.rules, t, r, n)), i = Ye(V(this.baseHash, a) >>> 0);
      if (!r.hasNameForId(this.componentId, i)) {
        var c = n(a, ".".concat(i), void 0, this.componentId);
        r.insertRules(this.componentId, i, c);
      }
      s = Y(s, i), this.staticRulesId = i;
    }
    else {
      for (var o = V(this.baseHash, n.hash), h = "", u = 0; u < this.rules.length; u++) {
        var p = this.rules[u];
        if (typeof p == "string") h += p;
        else if (p) {
          var l = ue(G(p, t, r, n));
          o = V(o, l + u), h += l;
        }
      }
      if (h) {
        var g = Ye(o >>> 0);
        r.hasNameForId(this.componentId, g) || r.insertRules(this.componentId, g, n(h, ".".concat(g), void 0, this.componentId)), s = Y(s, g);
      }
    }
    return s;
  }, e;
}(), H = O.createContext(void 0), sn = H.Consumer;
function an() {
  var e = vt(H);
  if (!e) throw k(18);
  return e;
}
function on(e) {
  var t = O.useContext(H), r = Se(function() {
    return function(n, s) {
      if (!n) throw k(14);
      if (q(n)) {
        var a = n(s);
        return a;
      }
      if (Array.isArray(n) || typeof n != "object") throw k(8);
      return s ? x(x({}, s), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? O.createElement(H.Provider, { value: r }, e.children) : null;
}
var Me = {};
function Qr(e, t, r) {
  var n = et(e), s = e, a = !Fe(e), i = t.attrs, c = i === void 0 ? $e : i, o = t.componentId, h = o === void 0 ? function(I, _) {
    var S = typeof I != "string" ? "sc" : ut(I);
    Me[S] = (Me[S] || 0) + 1;
    var d = "".concat(S, "-").concat(Qe(X + S + Me[S]));
    return _ ? "".concat(_, "-").concat(d) : d;
  }(t.displayName, t.parentComponentId) : o, u = t.displayName, p = u === void 0 ? function(I) {
    return Fe(I) ? "styled.".concat(I) : "Styled(".concat(kt(I), ")");
  }(e) : u, l = t.displayName && t.componentId ? "".concat(ut(t.displayName), "-").concat(t.componentId) : t.componentId || h, g = n && s.attrs ? s.attrs.concat(c).filter(Boolean) : c, y = t.shouldForwardProp;
  if (n && s.shouldForwardProp) {
    var w = s.shouldForwardProp;
    if (t.shouldForwardProp) {
      var R = t.shouldForwardProp;
      y = function(I, _) {
        return w(I, _) && R(I, _);
      };
    } else y = w;
  }
  var P = new Jr(r, l, n ? s.componentStyle : void 0);
  function C(I, _) {
    return function(S, d, K) {
      var pe = S.attrs, Bt = S.componentStyle, qt = S.defaultProps, Ht = S.foldedComponentIds, Kt = S.styledComponentId, Ut = S.target, Vt = O.useContext(H), Zt = _e(), Ne = S.shouldForwardProp || Zt.shouldForwardProp, st = Je(d, Vt, qt) || ee, D = function(le, se, de) {
        for (var ae, W = x(x({}, se), { className: void 0, theme: de }), De = 0; De < le.length; De += 1) {
          var ge = q(ae = le[De]) ? ae(W) : ae;
          for (var F in ge) W[F] = F === "className" ? Y(W[F], ge[F]) : F === "style" ? x(x({}, W[F]), ge[F]) : ge[F];
        }
        return se.className && (W.className = Y(W.className, se.className)), W;
      }(pe, d, st), he = D.as || Ut, ne = {};
      for (var z in D) D[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && D.theme === st || (z === "forwardedAs" ? ne.as = D.forwardedAs : Ne && !Ne(z, he) || (ne[z] = D[z]));
      var at = function(le, se) {
        var de = _e(), ae = le.generateAndInjectStyles(se, de.styleSheet, de.stylis);
        return ae;
      }(Bt, D), Te = Y(Ht, Kt);
      return at && (Te += " " + at), D.className && (Te += " " + D.className), ne[Fe(he) && !At.has(he) ? "class" : "className"] = Te, K && (ne.ref = K), Xt(he, ne);
    }(b, I, _);
  }
  C.displayName = p;
  var b = O.forwardRef(C);
  return b.attrs = g, b.componentStyle = P, b.displayName = p, b.shouldForwardProp = y, b.foldedComponentIds = n ? Y(s.foldedComponentIds, s.styledComponentId) : "", b.styledComponentId = l, b.target = n ? s.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(I) {
    this._foldedDefaultProps = n ? function(_) {
      for (var S = [], d = 1; d < arguments.length; d++) S[d - 1] = arguments[d];
      for (var K = 0, pe = S; K < pe.length; K++) Be(_, pe[K], !0);
      return _;
    }({}, s.defaultProps, I) : I;
  } }), tt(b, function() {
    return ".".concat(b.styledComponentId);
  }), a && Xe(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function yt(e, t) {
  for (var r = [e[0]], n = 0, s = t.length; n < s; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var St = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function nt(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (q(e) || fe(e)) return St(G(yt($e, Z([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? G(n) : St(G(yt(n, t)));
}
function Ke(e, t, r) {
  if (r === void 0 && (r = ee), !t) throw k(1, t);
  var n = function(s) {
    for (var a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
    return e(t, r, nt.apply(void 0, Z([s], a, !1)));
  };
  return n.attrs = function(s) {
    return Ke(e, t, x(x({}, r), { attrs: Array.prototype.concat(r.attrs, s).filter(Boolean) }));
  }, n.withConfig = function(s) {
    return Ke(e, t, x(x({}, r), s));
  }, n;
}
var Yt = function(e) {
  return Ke(Qr, e);
}, Xr = Yt;
At.forEach(function(e) {
  Xr[e] = Yt(e);
});
var en = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Wt(t), te.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, s) {
    var a = s(ue(G(this.rules, r, n, s)), ""), i = this.componentId + t;
    n.insertRules(i, i, a);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, s) {
    t > 2 && te.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, s);
  }, e;
}();
function cn(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = nt.apply(void 0, Z([e], t, !1)), s = "sc-global-".concat(Qe(JSON.stringify(n))), a = new en(n, s), i = function(c) {
    var o = _e(), h = O.useContext(H), u = O.useRef(o.styleSheet.allocateGSInstance(s)).current;
    return o.styleSheet.server && function(p, l, g, y, w) {
      if (a.isStatic) a.renderStyles(p, Ir, g, w);
      else {
        var R = x(x({}, l), { theme: Je(l, y, i.defaultProps) });
        a.renderStyles(p, R, g, w);
      }
    }(u, c, o.styleSheet, h, o.stylis), null;
  };
  return O.memo(i);
}
function un(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = ue(nt.apply(void 0, Z([e], t, !1))), s = Qe(n);
  return new Mt(s, n);
}
function fn(e) {
  var t = O.forwardRef(function(r, n) {
    var s = Je(r, O.useContext(H), e.defaultProps);
    return O.createElement(e, x({}, r, { theme: s, ref: n }));
  });
  return t.displayName = "WithTheme(".concat(kt(e), ")"), Xe(t, e);
}
var tn = /^\s*<\/[a-z]/i, pn = function() {
  function e() {
    var t = this;
    this._emitSheetCSS = function() {
      var r = t.instance.toString();
      if (!r) return "";
      var n = qe(), s = ue([n && 'nonce="'.concat(n, '"'), "".concat(L, '="true"'), "".concat(Ee, '="').concat(X, '"')].filter(Boolean), " ");
      return "<style ".concat(s, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (t.sealed) throw k(2);
      return t._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (t.sealed) throw k(2);
      var n = t.instance.toString();
      if (!n) return [];
      var s = ((r = {})[L] = "", r[Ee] = X, r.dangerouslySetInnerHTML = { __html: n }, r), a = qe();
      return a && (s.nonce = a), [O.createElement("style", x({}, s, { key: "sc-0-0" }))];
    }, this.seal = function() {
      t.sealed = !0;
    }, this.instance = new te({ isServer: !0 }), this.sealed = !1;
  }
  return e.prototype.collectStyles = function(t) {
    if (this.sealed) throw k(2);
    return O.createElement(Ur, { sheet: this.instance }, t);
  }, e.prototype.interleaveWithNodeStream = function(t) {
    if (ce) throw k(3);
    if (this.sealed) throw k(2);
    this.seal();
    var r = require("stream").Transform, n = t, s = this.instance, a = this._emitSheetCSS, i = new r({ transform: function(c, o, h) {
      var u = c.toString(), p = a();
      if (s.clearTag(), tn.test(u)) {
        var l = u.indexOf(">") + 1, g = u.slice(0, l), y = u.slice(l);
        this.push(g + p + y);
      } else this.push(p + u);
      h();
    } });
    return n.on("error", function(c) {
      i.emit("error", c);
    }), n.pipe(i);
  }, e;
}(), hn = { StyleSheet: te, mainSheet: Ft };
export {
  pn as ServerStyleSheet,
  nn as StyleSheetConsumer,
  rt as StyleSheetContext,
  Ur as StyleSheetManager,
  sn as ThemeConsumer,
  H as ThemeContext,
  on as ThemeProvider,
  hn as __PRIVATE__,
  cn as createGlobalStyle,
  nt as css,
  Xr as default,
  et as isStyledComponent,
  un as keyframes,
  Xr as styled,
  an as useTheme,
  X as version,
  fn as withTheme
};
