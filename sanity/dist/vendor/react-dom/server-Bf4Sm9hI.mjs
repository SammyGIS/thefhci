import it from "react";
var z = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le = it;
function c(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var g = Object.prototype.hasOwnProperty, at = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Se = {}, ve = {};
function Oe(e) {
  return g.call(ve, e) ? !0 : g.call(Se, e) ? !1 : at.test(e) ? ve[e] = !0 : (Se[e] = !0, !1);
}
function y(e, t, r, n, u, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = u, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var d = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  d[e] = new y(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  d[t] = new y(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  d[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  d[e] = new y(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  d[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  d[e] = new y(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  d[e] = new y(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  d[e] = new y(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  d[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ie = /[\-:]([a-z])/g;
function ae(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ie,
    ae
  );
  d[t] = new y(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ie, ae);
  d[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ie, ae);
  d[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  d[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
d.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  d[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var A = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, ct = ["Webkit", "ms", "Moz", "O"];
Object.keys(A).forEach(function(e) {
  ct.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), A[t] = A[e];
  });
});
var ft = /["'&<>]/;
function m(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = ft.exec(e);
  if (t) {
    var r = "", n, u = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      u !== n && (r += e.substring(u, n)), u = n + 1, r += t;
    }
    e = u !== n ? r + e.substring(u, n) : r;
  }
  return e;
}
var pt = /([A-Z])/g, ht = /^ms-/, ne = Array.isArray;
function w(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function dt(e, t, r) {
  switch (t) {
    case "select":
      return w(1, r.value != null ? r.value : r.defaultValue);
    case "svg":
      return w(2, null);
    case "math":
      return w(3, null);
    case "foreignObject":
      return w(1, null);
    case "table":
      return w(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return w(5, null);
    case "colgroup":
      return w(7, null);
    case "tr":
      return w(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? w(1, null) : e;
}
var xe = /* @__PURE__ */ new Map();
function je(e, t, r) {
  if (typeof r != "object") throw Error(c(62));
  t = !0;
  for (var n in r) if (g.call(r, n)) {
    var u = r[n];
    if (u != null && typeof u != "boolean" && u !== "") {
      if (n.indexOf("--") === 0) {
        var o = m(n);
        u = m(("" + u).trim());
      } else {
        o = n;
        var l = xe.get(o);
        l !== void 0 || (l = m(o.replace(pt, "-$1").toLowerCase().replace(ht, "-ms-")), xe.set(o, l)), o = l, u = typeof u == "number" ? u === 0 || g.call(A, n) ? "" + u : u + "px" : m(("" + u).trim());
      }
      t ? (t = !1, e.push(' style="', o, ":", u)) : e.push(";", o, ":", u);
    }
  }
  t || e.push('"');
}
function S(e, t, r, n) {
  switch (r) {
    case "style":
      je(e, t, n);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") {
    if (t = d.hasOwnProperty(r) ? d[r] : null, t !== null) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (r = t.attributeName, t.type) {
        case 3:
          n && e.push(" ", r, '=""');
          break;
        case 4:
          n === !0 ? e.push(" ", r, '=""') : n !== !1 && e.push(" ", r, '="', m(n), '"');
          break;
        case 5:
          isNaN(n) || e.push(" ", r, '="', m(n), '"');
          break;
        case 6:
          !isNaN(n) && 1 <= n && e.push(" ", r, '="', m(n), '"');
          break;
        default:
          t.sanitizeURL && (n = "" + n), e.push(" ", r, '="', m(n), '"');
      }
    } else if (Oe(r)) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = r.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(" ", r, '="', m(n), '"');
    }
  }
}
function H(e, t, r) {
  if (t != null) {
    if (r != null) throw Error(c(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(c(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function mt(e) {
  var t = "";
  return Le.Children.forEach(e, function(r) {
    r != null && (t += r);
  }), t;
}
function ee(e, t, r, n) {
  e.push(k(r));
  var u = r = null, o;
  for (o in t) if (g.call(t, o)) {
    var l = t[o];
    if (l != null) switch (o) {
      case "children":
        r = l;
        break;
      case "dangerouslySetInnerHTML":
        u = l;
        break;
      default:
        S(e, n, o, l);
    }
  }
  return e.push(">"), H(e, u, r), typeof r == "string" ? (e.push(m(r)), null) : r;
}
var yt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ke = /* @__PURE__ */ new Map();
function k(e) {
  var t = ke.get(e);
  if (t === void 0) {
    if (!yt.test(e)) throw Error(c(65, e));
    t = "<" + e, ke.set(e, t);
  }
  return t;
}
function gt(e, t, r, n, u) {
  switch (t) {
    case "select":
      e.push(k("select"));
      var o = null, l = null;
      for (f in r) if (g.call(r, f)) {
        var s = r[f];
        if (s != null) switch (f) {
          case "children":
            o = s;
            break;
          case "dangerouslySetInnerHTML":
            l = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            S(e, n, f, s);
        }
      }
      return e.push(">"), H(e, l, o), o;
    case "option":
      l = u.selectedValue, e.push(k("option"));
      var i = s = null, a = null, f = null;
      for (o in r) if (g.call(r, o)) {
        var h = r[o];
        if (h != null) switch (o) {
          case "children":
            s = h;
            break;
          case "selected":
            a = h;
            break;
          case "dangerouslySetInnerHTML":
            f = h;
            break;
          case "value":
            i = h;
          default:
            S(e, n, o, h);
        }
      }
      if (l != null) if (r = i !== null ? "" + i : mt(s), ne(l)) {
        for (n = 0; n < l.length; n++)
          if ("" + l[n] === r) {
            e.push(' selected=""');
            break;
          }
      } else "" + l === r && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), H(e, f, s), s;
    case "textarea":
      e.push(k("textarea")), f = l = o = null;
      for (s in r) if (g.call(r, s) && (i = r[s], i != null)) switch (s) {
        case "children":
          f = i;
          break;
        case "value":
          o = i;
          break;
        case "defaultValue":
          l = i;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(c(91));
        default:
          S(
            e,
            n,
            s,
            i
          );
      }
      if (o === null && l !== null && (o = l), e.push(">"), f != null) {
        if (o != null) throw Error(c(92));
        if (ne(f) && 1 < f.length) throw Error(c(93));
        o = "" + f;
      }
      return typeof o == "string" && o[0] === `
` && e.push(`
`), o !== null && e.push(m("" + o)), null;
    case "input":
      e.push(k("input")), i = f = s = o = null;
      for (l in r) if (g.call(r, l) && (a = r[l], a != null)) switch (l) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(c(399, "input"));
        case "defaultChecked":
          i = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          f = a;
          break;
        case "value":
          o = a;
          break;
        default:
          S(e, n, l, a);
      }
      return f !== null ? S(e, n, "checked", f) : i !== null && S(e, n, "checked", i), o !== null ? S(e, n, "value", o) : s !== null && S(e, n, "value", s), e.push("/>"), null;
    case "menuitem":
      e.push(k("menuitem"));
      for (var E in r) if (g.call(r, E) && (o = r[E], o != null)) switch (E) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(c(400));
        default:
          S(e, n, E, o);
      }
      return e.push(">"), null;
    case "title":
      e.push(k("title")), o = null;
      for (h in r) if (g.call(r, h) && (l = r[h], l != null)) switch (h) {
        case "children":
          o = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(c(434));
        default:
          S(e, n, h, l);
      }
      return e.push(">"), o;
    case "listing":
    case "pre":
      e.push(k(t)), l = o = null;
      for (i in r) if (g.call(r, i) && (s = r[i], s != null)) switch (i) {
        case "children":
          o = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        default:
          S(e, n, i, s);
      }
      if (e.push(">"), l != null) {
        if (o != null) throw Error(c(60));
        if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
        r = l.__html, r != null && (typeof r == "string" && 0 < r.length && r[0] === `
` ? e.push(`
`, r) : e.push("" + r));
      }
      return typeof o == "string" && o[0] === `
` && e.push(`
`), o;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(k(t));
      for (var T in r) if (g.call(r, T) && (o = r[T], o != null)) switch (T) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(c(399, t));
        default:
          S(e, n, T, o);
      }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return ee(
        e,
        r,
        t,
        n
      );
    case "html":
      return u.insertionMode === 0 && e.push("<!DOCTYPE html>"), ee(e, r, t, n);
    default:
      if (t.indexOf("-") === -1 && typeof r.is != "string") return ee(e, r, t, n);
      e.push(k(t)), l = o = null;
      for (a in r) if (g.call(r, a) && (s = r[a], s != null)) switch (a) {
        case "children":
          o = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          je(e, n, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Oe(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', m(s), '"');
      }
      return e.push(">"), H(e, l, o), o;
  }
}
function we(e, t, r) {
  if (e.push('<!--$?--><template id="'), r === null) throw Error(c(395));
  return e.push(r), e.push('"></template>');
}
function St(e, t, r, n) {
  switch (r.insertionMode) {
    case 0:
    case 1:
      return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 2:
      return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 3:
      return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 4:
      return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 5:
      return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 6:
      return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 7:
      return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    default:
      throw Error(c(397));
  }
}
function vt(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(c(397));
  }
}
var xt = /[<\u2028\u2029]/g;
function te(e) {
  return JSON.stringify(e).replace(xt, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function kt(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Ce(e, t, r, n) {
  return r.generateStaticMarkup ? (e.push(m(t)), !1) : (t === "" ? e = n : (n && e.push("<!-- -->"), e.push(m(t)), e = !0), e);
}
var M = Object.assign, wt = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), be = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), qe = Symbol.for("react.context"), Ze = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), Ct = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), Tt = Symbol.for("react.legacy_hidden"), Ft = Symbol.for("react.default_value"), Ee = Symbol.iterator;
function oe(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case He:
      return "Fragment";
    case Ae:
      return "Portal";
    case We:
      return "Profiler";
    case be:
      return "StrictMode";
    case Ge:
      return "Suspense";
    case Xe:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case qe:
      return (e.displayName || "Context") + ".Consumer";
    case Ue:
      return (e._context.displayName || "Context") + ".Provider";
    case Ze:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Je:
      return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
    case ce:
      t = e._payload, e = e._init;
      try {
        return oe(e(t));
      } catch {
      }
  }
  return null;
}
var Ye = {};
function Te(e, t) {
  if (e = e.contextTypes, !e) return Ye;
  var r = {}, n;
  for (n in e) r[n] = t[n];
  return r;
}
var _ = null;
function Y(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var r = t.parent;
    if (e === null) {
      if (r !== null) throw Error(c(401));
    } else {
      if (r === null) throw Error(c(401));
      Y(e, r);
    }
    t.context._currentValue2 = t.value;
  }
}
function Ke(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Ke(e);
}
function Qe(e) {
  var t = e.parent;
  t !== null && Qe(t), e.context._currentValue2 = e.value;
}
function et(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(c(402));
  e.depth === t.depth ? Y(e, t) : et(e, t);
}
function tt(e, t) {
  var r = t.parent;
  if (r === null) throw Error(c(402));
  e.depth === r.depth ? Y(e, r) : tt(e, r), t.context._currentValue2 = t.value;
}
function q(e) {
  var t = _;
  t !== e && (t === null ? Qe(e) : e === null ? Ke(t) : t.depth === e.depth ? Y(t, e) : t.depth > e.depth ? et(t, e) : tt(t, e), _ = e);
}
var Fe = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Re(e, t, r, n) {
  var u = e.state !== void 0 ? e.state : null;
  e.updater = Fe, e.props = r, e.state = u;
  var o = { queue: [], replace: !1 };
  e._reactInternals = o;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue2 : n, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(r, u), u = l == null ? u : M({}, u, l), e.state = u), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Fe.enqueueReplaceState(e, e.state, null), o.queue !== null && 0 < o.queue.length) if (t = o.queue, l = o.replace, o.queue = null, o.replace = !1, l && t.length === 1) e.state = t[0];
  else {
    for (o = l ? t[0] : e.state, u = !0, l = l ? 1 : 0; l < t.length; l++) {
      var s = t[l];
      s = typeof s == "function" ? s.call(e, o, r, n) : s, s != null && (u ? (u = !1, o = M({}, o, s)) : M(o, s));
    }
    e.state = o;
  }
  else o.queue = null;
}
var Rt = { id: 1, overflow: "" };
function ue(e, t, r) {
  var n = e.id;
  e = e.overflow;
  var u = 32 - b(n) - 1;
  n &= ~(1 << u), r += 1;
  var o = 32 - b(t) + u;
  if (30 < o) {
    var l = u - u % 5;
    return o = (n & (1 << l) - 1).toString(32), n >>= l, u -= l, { id: 1 << 32 - b(t) + u | r << u | n, overflow: o + e };
  }
  return { id: 1 << o | r << u | n, overflow: e };
}
var b = Math.clz32 ? Math.clz32 : It, _t = Math.log, Pt = Math.LN2;
function It(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (_t(e) / Pt | 0) | 0;
}
function Mt(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Bt = typeof Object.is == "function" ? Object.is : Mt, C = null, fe = null, W = null, p = null, P = !1, Z = !1, B = 0, F = null, K = 0;
function R() {
  if (C === null) throw Error(c(321));
  return C;
}
function _e() {
  if (0 < K) throw Error(c(312));
  return { memoizedState: null, queue: null, next: null };
}
function pe() {
  return p === null ? W === null ? (P = !1, W = p = _e()) : (P = !0, p = W) : p.next === null ? (P = !1, p = p.next = _e()) : (P = !0, p = p.next), p;
}
function he() {
  fe = C = null, Z = !1, W = null, K = 0, p = F = null;
}
function rt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Pe(e, t, r) {
  if (C = R(), p = pe(), P) {
    var n = p.queue;
    if (t = n.dispatch, F !== null && (r = F.get(n), r !== void 0)) {
      F.delete(n), n = p.memoizedState;
      do
        n = e(n, r.action), r = r.next;
      while (r !== null);
      return p.memoizedState = n, [n, t];
    }
    return [p.memoizedState, t];
  }
  return e = e === rt ? typeof t == "function" ? t() : t : r !== void 0 ? r(t) : t, p.memoizedState = e, e = p.queue = { last: null, dispatch: null }, e = e.dispatch = Dt.bind(null, C, e), [p.memoizedState, e];
}
function Ie(e, t) {
  if (C = R(), p = pe(), t = t === void 0 ? null : t, p !== null) {
    var r = p.memoizedState;
    if (r !== null && t !== null) {
      var n = r[1];
      e: if (n === null) n = !1;
      else {
        for (var u = 0; u < n.length && u < t.length; u++) if (!Bt(t[u], n[u])) {
          n = !1;
          break e;
        }
        n = !0;
      }
      if (n) return r[0];
    }
  }
  return e = e(), p.memoizedState = [e, t], e;
}
function Dt(e, t, r) {
  if (25 <= K) throw Error(c(301));
  if (e === C) if (Z = !0, e = { action: r, next: null }, F === null && (F = /* @__PURE__ */ new Map()), r = F.get(t), r === void 0) F.set(t, e);
  else {
    for (t = r; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function zt() {
  throw Error(c(394));
}
function O() {
}
var Me = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return R(), e._currentValue2;
}, useMemo: Ie, useReducer: Pe, useRef: function(e) {
  C = R(), p = pe();
  var t = p.memoizedState;
  return t === null ? (e = { current: e }, p.memoizedState = e) : t;
}, useState: function(e) {
  return Pe(rt, e);
}, useInsertionEffect: O, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Ie(function() {
    return e;
  }, t);
}, useImperativeHandle: O, useEffect: O, useDebugValue: O, useDeferredValue: function(e) {
  return R(), e;
}, useTransition: function() {
  return R(), [
    !1,
    zt
  ];
}, useId: function() {
  var e = fe.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - b(e) - 1)).toString(32) + t;
  var r = U;
  if (r === null) throw Error(c(404));
  return t = B++, e = ":" + r.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return R(), t(e._source);
}, useSyncExternalStore: function(e, t, r) {
  if (r === void 0) throw Error(c(407));
  return r();
} }, U = null, re = Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Nt(e) {
  return console.error(e), null;
}
function I() {
}
function Vt(e, t, r, n, u, o, l, s, i) {
  var a = [], f = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: n === void 0 ? 12800 : n, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: f, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: u === void 0 ? Nt : u, onAllReady: I, onShellReady: l === void 0 ? I : l, onShellError: I, onFatalError: I }, r = G(t, 0, null, r, !1, !1), r.parentFlushed = !0, e = de(t, e, null, r, f, Ye, null, Rt), a.push(e), t;
}
function de(e, t, r, n, u, o, l, s) {
  e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
  var i = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(i), a.length === 1 && ut(e);
  }, blockedBoundary: r, blockedSegment: n, abortSet: u, legacyContext: o, context: l, treeContext: s };
  return u.add(i), i;
}
function G(e, t, r, n, u, o) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: n, boundary: r, lastPushedText: u, textEmbedded: o };
}
function D(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function X(e, t) {
  var r = e.onShellError;
  r(t), r = e.onFatalError, r(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function Be(e, t, r, n, u) {
  for (C = {}, fe = t, B = 0, e = r(n, u); Z; ) Z = !1, B = 0, K += 1, p = null, e = r(n, u);
  return he(), e;
}
function De(e, t, r, n) {
  var u = r.render(), o = n.childContextTypes;
  if (o != null) {
    var l = t.legacyContext;
    if (typeof r.getChildContext != "function") n = l;
    else {
      r = r.getChildContext();
      for (var s in r) if (!(s in o)) throw Error(c(108, oe(n) || "Unknown", s));
      n = M({}, l, r);
    }
    t.legacyContext = n, v(e, t, u), t.legacyContext = l;
  } else v(e, t, u);
}
function ze(e, t) {
  if (e && e.defaultProps) {
    t = M({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function le(e, t, r, n, u) {
  if (typeof r == "function") if (r.prototype && r.prototype.isReactComponent) {
    u = Te(r, t.legacyContext);
    var o = r.contextType;
    o = new r(n, typeof o == "object" && o !== null ? o._currentValue2 : u), Re(o, r, n, u), De(e, t, o, r);
  } else {
    o = Te(r, t.legacyContext), u = Be(e, t, r, n, o);
    var l = B !== 0;
    if (typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0) Re(u, r, n, o), De(e, t, u, r);
    else if (l) {
      n = t.treeContext, t.treeContext = ue(n, 1, 0);
      try {
        v(e, t, u);
      } finally {
        t.treeContext = n;
      }
    } else v(e, t, u);
  }
  else if (typeof r == "string") {
    switch (u = t.blockedSegment, o = gt(u.chunks, r, n, e.responseState, u.formatContext), u.lastPushedText = !1, l = u.formatContext, u.formatContext = dt(l, r, n), se(e, t, o), u.formatContext = l, r) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        u.chunks.push("</", r, ">");
    }
    u.lastPushedText = !1;
  } else {
    switch (r) {
      case Tt:
      case Et:
      case be:
      case We:
      case He:
        v(e, t, n.children);
        return;
      case Xe:
        v(e, t, n.children);
        return;
      case Ct:
        throw Error(c(343));
      case Ge:
        e: {
          r = t.blockedBoundary, u = t.blockedSegment, o = n.fallback, n = n.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, i = G(e, u.chunks.length, s, u.formatContext, !1, !1);
          u.children.push(i), u.lastPushedText = !1;
          var a = G(e, 0, null, u.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (se(
              e,
              t,
              n
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, J(s, a), s.pendingTasks === 0) break e;
          } catch (f) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = D(e, f);
          } finally {
            t.blockedBoundary = r, t.blockedSegment = u;
          }
          t = de(e, o, r, i, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof r == "object" && r !== null) switch (r.$$typeof) {
      case Ze:
        if (n = Be(e, t, r.render, n, u), B !== 0) {
          r = t.treeContext, t.treeContext = ue(r, 1, 0);
          try {
            v(e, t, n);
          } finally {
            t.treeContext = r;
          }
        } else v(e, t, n);
        return;
      case Je:
        r = r.type, n = ze(r, n), le(e, t, r, n, u);
        return;
      case Ue:
        if (u = n.children, r = r._context, n = n.value, o = r._currentValue2, r._currentValue2 = n, l = _, _ = n = { parent: l, depth: l === null ? 0 : l.depth + 1, context: r, parentValue: o, value: n }, t.context = n, v(e, t, u), e = _, e === null) throw Error(c(403));
        n = e.parentValue, e.context._currentValue2 = n === Ft ? e.context._defaultValue : n, e = _ = e.parent, t.context = e;
        return;
      case qe:
        n = n.children, n = n(r._currentValue2), v(e, t, n);
        return;
      case ce:
        u = r._init, r = u(r._payload), n = ze(r, n), le(
          e,
          t,
          r,
          n,
          void 0
        );
        return;
    }
    throw Error(c(130, r == null ? r : typeof r, ""));
  }
}
function v(e, t, r) {
  if (t.node = r, typeof r == "object" && r !== null) {
    switch (r.$$typeof) {
      case wt:
        le(e, t, r.type, r.props, r.ref);
        return;
      case Ae:
        throw Error(c(257));
      case ce:
        var n = r._init;
        r = n(r._payload), v(e, t, r);
        return;
    }
    if (ne(r)) {
      Ne(e, t, r);
      return;
    }
    if (r === null || typeof r != "object" ? n = null : (n = Ee && r[Ee] || r["@@iterator"], n = typeof n == "function" ? n : null), n && (n = n.call(r))) {
      if (r = n.next(), !r.done) {
        var u = [];
        do
          u.push(r.value), r = n.next();
        while (!r.done);
        Ne(e, t, u);
      }
      return;
    }
    throw e = Object.prototype.toString.call(r), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e));
  }
  typeof r == "string" ? (n = t.blockedSegment, n.lastPushedText = Ce(t.blockedSegment.chunks, r, e.responseState, n.lastPushedText)) : typeof r == "number" && (n = t.blockedSegment, n.lastPushedText = Ce(t.blockedSegment.chunks, "" + r, e.responseState, n.lastPushedText));
}
function Ne(e, t, r) {
  for (var n = r.length, u = 0; u < n; u++) {
    var o = t.treeContext;
    t.treeContext = ue(o, n, u);
    try {
      se(e, t, r[u]);
    } finally {
      t.treeContext = o;
    }
  }
}
function se(e, t, r) {
  var n = t.blockedSegment.formatContext, u = t.legacyContext, o = t.context;
  try {
    return v(e, t, r);
  } catch (i) {
    if (he(), typeof i == "object" && i !== null && typeof i.then == "function") {
      r = i;
      var l = t.blockedSegment, s = G(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = de(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, r.then(e, e), t.blockedSegment.formatContext = n, t.legacyContext = u, t.context = o, q(o);
    } else throw t.blockedSegment.formatContext = n, t.legacyContext = u, t.context = o, q(o), i;
  }
}
function $t(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, ot(this, t, e);
}
function nt(e, t, r) {
  var n = e.blockedBoundary;
  e.blockedSegment.status = 3, n === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, e = r === void 0 ? Error(c(432)) : r, n.errorDigest = t.onError(e), n.parentFlushed && t.clientRenderedBoundaries.push(n)), n.fallbackAbortableTasks.forEach(function(u) {
    return nt(u, t, r);
  }), n.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (n = t.onAllReady, n()));
}
function J(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var r = t.children[0];
    r.id = t.id, r.parentFlushed = !0, r.status === 1 && J(e, r);
  } else e.completedSegments.push(t);
}
function ot(e, t, r) {
  if (t === null) {
    if (r.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(c(389));
      e.completedRootSegment = r;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = I, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (r.parentFlushed && r.status === 1 && J(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach($t, e), t.fallbackAbortableTasks.clear()) : r.parentFlushed && r.status === 1 && (J(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function ut(e) {
  if (e.status !== 2) {
    var t = _, r = re.current;
    re.current = Me;
    var n = U;
    U = e.responseState;
    try {
      var u = e.pingedTasks, o;
      for (o = 0; o < u.length; o++) {
        var l = u[o], s = e, i = l.blockedSegment;
        if (i.status === 0) {
          q(l.context);
          try {
            v(s, l, l.node), s.responseState.generateStaticMarkup || i.lastPushedText && i.textEmbedded && i.chunks.push("<!-- -->"), l.abortSet.delete(l), i.status = 1, ot(s, l.blockedBoundary, i);
          } catch (x) {
            if (he(), typeof x == "object" && x !== null && typeof x.then == "function") {
              var a = l.ping;
              x.then(a, a);
            } else {
              l.abortSet.delete(l), i.status = 4;
              var f = l.blockedBoundary, h = x, E = D(s, h);
              if (f === null ? X(s, h) : (f.pendingTasks--, f.forceClientRender || (f.forceClientRender = !0, f.errorDigest = E, f.parentFlushed && s.clientRenderedBoundaries.push(f))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var T = s.onAllReady;
                T();
              }
            }
          } finally {
          }
        }
      }
      u.splice(0, o), e.destination !== null && me(e, e.destination);
    } catch (x) {
      D(e, x), X(e, x);
    } finally {
      U = n, re.current = r, r === Me && q(t);
    }
  }
}
function j(e, t, r) {
  switch (r.parentFlushed = !0, r.status) {
    case 0:
      var n = r.id = e.nextSegmentId++;
      return r.lastPushedText = !1, r.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = n.toString(16), t.push(e), t.push('"></template>');
    case 1:
      r.status = 2;
      var u = !0;
      n = r.chunks;
      var o = 0;
      r = r.children;
      for (var l = 0; l < r.length; l++) {
        for (u = r[l]; o < u.index; o++) t.push(n[o]);
        u = Q(e, t, u);
      }
      for (; o < n.length - 1; o++) t.push(n[o]);
      return o < n.length && (u = t.push(n[o])), u;
    default:
      throw Error(c(390));
  }
}
function Q(e, t, r) {
  var n = r.boundary;
  if (n === null) return j(e, t, r);
  if (n.parentFlushed = !0, n.forceClientRender) return e.responseState.generateStaticMarkup || (n = n.errorDigest, t.push("<!--$!-->"), t.push("<template"), n && (t.push(' data-dgst="'), n = m(n), t.push(n), t.push('"')), t.push("></template>")), j(e, t, r), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < n.pendingTasks) {
    n.rootSegmentID = e.nextSegmentId++, 0 < n.completedSegments.length && e.partialBoundaries.push(n);
    var u = e.responseState, o = u.nextSuspenseID++;
    return u = u.boundaryPrefix + o.toString(16), n = n.id = u, we(t, e.responseState, n), j(e, t, r), t.push("<!--/$-->");
  }
  if (n.byteSize > e.progressiveChunkSize) return n.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(n), we(t, e.responseState, n.id), j(e, t, r), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), r = n.completedSegments, r.length !== 1) throw Error(c(391));
  return Q(e, t, r[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function Ve(e, t, r) {
  return St(t, e.responseState, r.formatContext, r.id), Q(e, t, r), vt(t, r.formatContext);
}
function $e(e, t, r) {
  for (var n = r.completedSegments, u = 0; u < n.length; u++) lt(e, t, r, n[u]);
  if (n.length = 0, e = e.responseState, n = r.id, r = r.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), n === null) throw Error(c(395));
  return r = r.toString(16), t.push(n), t.push('","'), t.push(e.segmentPrefix), t.push(r), t.push('")<\/script>');
}
function lt(e, t, r, n) {
  if (n.status === 2) return !0;
  var u = n.id;
  if (u === -1) {
    if ((n.id = r.rootSegmentID) === -1) throw Error(c(392));
    return Ve(e, t, n);
  }
  return Ve(e, t, n), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), u = u.toString(16), t.push(u), t.push('","'), t.push(e.placeholderPrefix), t.push(u), t.push('")<\/script>');
}
function me(e, t) {
  try {
    var r = e.completedRootSegment;
    if (r !== null && e.pendingRootTasks === 0) {
      Q(e, t, r), e.completedRootSegment = null;
      var n = e.responseState.bootstrapChunks;
      for (r = 0; r < n.length - 1; r++) t.push(n[r]);
      r < n.length && t.push(n[r]);
    }
    var u = e.clientRenderedBoundaries, o;
    for (o = 0; o < u.length; o++) {
      var l = u[o];
      n = t;
      var s = e.responseState, i = l.id, a = l.errorDigest, f = l.errorMessage, h = l.errorComponentStack;
      if (n.push(s.startInlineScript), s.sentClientRenderFunction ? n.push('$RX("') : (s.sentClientRenderFunction = !0, n.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), i === null) throw Error(c(395));
      if (n.push(i), n.push('"'), a || f || h) {
        n.push(",");
        var E = te(a || "");
        n.push(E);
      }
      if (f || h) {
        n.push(",");
        var T = te(f || "");
        n.push(T);
      }
      if (h) {
        n.push(",");
        var x = te(h);
        n.push(x);
      }
      if (!n.push(")<\/script>")) {
        e.destination = null, o++, u.splice(0, o);
        return;
      }
    }
    u.splice(0, o);
    var N = e.completedBoundaries;
    for (o = 0; o < N.length; o++) if (!$e(e, t, N[o])) {
      e.destination = null, o++, N.splice(0, o);
      return;
    }
    N.splice(0, o);
    var V = e.partialBoundaries;
    for (o = 0; o < V.length; o++) {
      var ye = V[o];
      e: {
        u = e, l = t;
        var $ = ye.completedSegments;
        for (s = 0; s < $.length; s++) if (!lt(u, l, ye, $[s])) {
          s++, $.splice(0, s);
          var ge = !1;
          break e;
        }
        $.splice(0, s), ge = !0;
      }
      if (!ge) {
        e.destination = null, o++, V.splice(0, o);
        return;
      }
    }
    V.splice(0, o);
    var L = e.completedBoundaries;
    for (o = 0; o < L.length; o++) if (!$e(e, t, L[o])) {
      e.destination = null, o++, L.splice(0, o);
      return;
    }
    L.splice(0, o);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function Lt(e, t) {
  try {
    var r = e.abortableTasks;
    r.forEach(function(n) {
      return nt(n, e, t);
    }), r.clear(), e.destination !== null && me(e, e.destination);
  } catch (n) {
    D(e, n), X(e, n);
  }
}
function Ot() {
}
function st(e, t, r, n) {
  var u = !1, o = null, l = "", s = { push: function(a) {
    return a !== null && (l += a), !0;
  }, destroy: function(a) {
    u = !0, o = a;
  } }, i = !1;
  if (e = Vt(e, kt(r, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Ot, void 0, function() {
    i = !0;
  }), ut(e), Lt(e, n), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      me(e, s);
    } catch (a) {
      D(e, a), X(e, a);
    }
  }
  if (u) throw o;
  if (!i) throw Error(c(426));
  return l;
}
var At = z.renderToNodeStream = function() {
  throw Error(c(207));
}, Ht = z.renderToStaticMarkup = function(e, t) {
  return st(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
}, bt = z.renderToStaticNodeStream = function() {
  throw Error(c(208));
}, Wt = z.renderToString = function(e, t) {
  return st(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
}, Ut = z.version = "18.3.1";
export {
  z as default,
  At as renderToNodeStream,
  Ht as renderToStaticMarkup,
  bt as renderToStaticNodeStream,
  Wt as renderToString,
  Ut as version
};
