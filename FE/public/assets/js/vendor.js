/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(i, c, p) {
    var a = []
      , l = []
      , e = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            l.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            l.push({
                name: null,
                fn: e
            })
        }
    }
      , u = function() {};
    u.prototype = e,
    (u = new u).addTest("customelements", "customElements"in i),
    u.addTest("history", function() {
        var e = navigator.userAgent;
        return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (i.history && "pushState"in i.history)
    }),
    u.addTest("postmessage", "postMessage"in i);
    var t = !1;
    try {
        t = "WebSocket"in i && 2 === i.WebSocket.CLOSING
    } catch (e) {}
    u.addTest("websockets", t),
    u.addTest("picture", "HTMLPictureElement"in i),
    u.addTest("webworkers", "Worker"in i);
    var n = e._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    function A(e, t) {
        return typeof e === t
    }
    e._prefixes = n;
    var m = c.documentElement
      , h = "svg" === m.nodeName.toLowerCase();
    function s(e) {
        var t = m.className
          , n = u._config.classPrefix || "";
        if (h && (t = t.baseVal),
        u._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        u._config.enableClasses && (t += " " + n + e.join(" " + n),
        h ? m.className.baseVal = t : m.className = t)
    }
    var f, r, o = "Moz O ms Webkit", d = e._config.usePrefixes ? o.toLowerCase().split(" ") : [];
    function g(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                f(e, n) && g(n, e[n]);
        else {
            var r = (e = e.toLowerCase()).split(".")
              , o = u[r[0]];
            if (2 == r.length && (o = o[r[1]]),
            void 0 !== o)
                return u;
            t = "function" == typeof t ? t() : t,
            1 == r.length ? u[r[0]] = t : (!u[r[0]] || u[r[0]]instanceof Boolean || (u[r[0]] = new Boolean(u[r[0]])),
            u[r[0]][r[1]] = t),
            s([(t && 0 != t ? "" : "no-") + r.join("-")]),
            u._trigger(e, t)
        }
        return u
    }
    function v() {
        return "function" != typeof c.createElement ? c.createElement(arguments[0]) : h ? c.createElementNS.call(c, "http://www.w3.org/2000/svg", arguments[0]) : c.createElement.apply(c, arguments)
    }
    e._domPrefixes = d,
    f = A(r = {}.hasOwnProperty, "undefined") || A(r.call, "undefined") ? function(e, t) {
        return t in e && A(e.constructor.prototype[t], "undefined")
    }
    : function(e, t) {
        return r.call(e, t)
    }
    ,
    e._l = {},
    e.on = function(e, t) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        u.hasOwnProperty(e) && setTimeout(function() {
            u._trigger(e, u[e])
        }, 0)
    }
    ,
    e._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e;
                for (e = 0; e < n.length; e++)
                    (0,
                    n[e])(t)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    u._q.push(function() {
        e.addTest = g
    });
    var y, C = (y = !("onblur"in c.documentElement),
    function(e, t) {
        var n;
        return !!e && (t && "string" != typeof t || (t = v(t || "div")),
        !(n = (e = "on" + e)in t) && y && (t.setAttribute || (t = v("div")),
        t.setAttribute(e, ""),
        n = "function" == typeof t[e],
        t[e] !== p && (t[e] = p),
        t.removeAttribute(e)),
        n)
    }
    );
    e.hasEvent = C,
    u.addTest("pointerevents", function() {
        var e = !1
          , t = d.length;
        for (e = u.hasEvent("pointerdown"); t-- && !e; )
            C(d[t] + "pointerdown") && (e = !0);
        return e
    });
    function b(e, t, n, r) {
        var o, i, s, a, l, u = "modernizr", f = v("div"), d = ((l = c.body) || ((l = v(h ? "svg" : "body")).fake = !0),
        l);
        if (parseInt(n, 10))
            for (; n--; )
                (s = v("div")).id = r ? r[n] : u + (n + 1),
                f.appendChild(s);
        return (o = v("style")).type = "text/css",
        o.id = "s" + u,
        (d.fake ? d : f).appendChild(o),
        d.appendChild(f),
        o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(c.createTextNode(e)),
        f.id = u,
        d.fake && (d.style.background = "",
        d.style.overflow = "hidden",
        a = m.style.overflow,
        m.style.overflow = "hidden",
        m.appendChild(d)),
        i = t(f, e),
        d.fake ? (d.parentNode.removeChild(d),
        m.style.overflow = a,
        m.offsetHeight) : f.parentNode.removeChild(f),
        !!i
    }
    e.prefixedCSSValue = function(e, t) {
        var n = !1
          , r = v("div").style;
        if (e in r) {
            var o = d.length;
            for (r[e] = t,
            n = r[e]; o-- && !n; )
                r[e] = "-" + d[o] + "-" + t,
                n = r[e]
        }
        return "" === n && (n = !1),
        n
    }
    ,
    u.addTest("webgl", function() {
        var e = v("canvas")
          , t = "probablySupportsContext"in e ? "probablySupportsContext" : "supportsContext";
        return t in e ? e[t]("webgl") || e[t]("experimental-webgl") : "WebGLRenderingContext"in i
    }),
    u.addAsyncTest(function() {
        var e, t, n = v("img"), r = "sizes"in n;
        !r && "srcset"in n ? ("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
        e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        t = function() {
            g("sizes", 2 == n.width)
        }
        ,
        n.onload = t,
        n.onerror = t,
        n.setAttribute("sizes", "9px"),
        n.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",
        n.src = e) : g("sizes", r)
    }),
    u.addTest("srcset", "srcset"in v("img"));
    var w, S = (w = i.matchMedia || i.msMatchMedia) ? function(e) {
        var t = w(e);
        return t && t.matches || !1
    }
    : function(e) {
        var t = !1;
        return b("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
            t = "absolute" == (i.getComputedStyle ? i.getComputedStyle(e, null) : e.currentStyle).position
        }),
        t
    }
    ;
    e.mq = S;
    e.testStyles = b;
    var x = e._config.usePrefixes ? o.split(" ") : [];
    function _(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    e._cssomPrefixes = x;
    var T = {
        elem: v("modernizr")
    };
    u._q.push(function() {
        delete T.elem
    });
    var P = {
        style: T.elem.style
    };
    function E(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function B(e, t) {
        var n = e.length;
        if ("CSS"in i && "supports"in i.CSS) {
            for (; n--; )
                if (i.CSS.supports(E(e[n]), t))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in i) {
            for (var r = []; n--; )
                r.push("(" + E(e[n]) + ":" + t + ")");
            return b("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == function(e, t, n) {
                    var r;
                    if ("getComputedStyle"in i) {
                        r = getComputedStyle.call(i, e, t);
                        var o = i.console;
                        null !== r ? n && (r = r.getPropertyValue(n)) : o && o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    } else
                        r = !t && e.currentStyle && e.currentStyle[n];
                    return r
                }(e, null, "position")
            })
        }
        return p
    }
    function k(e, t, n, r) {
        if (r = !A(r, "undefined") && r,
        !A(n, "undefined")) {
            var o = B(e, n);
            if (!A(o, "undefined"))
                return o
        }
        for (var i, s, a, l, u, f = ["modernizr", "tspan", "samp"]; !P.style && f.length; )
            i = !0,
            P.modElem = v(f.shift()),
            P.style = P.modElem.style;
        function d() {
            i && (delete P.style,
            delete P.modElem)
        }
        for (a = e.length,
        s = 0; s < a; s++)
            if (l = e[s],
            u = P.style[l],
            ~("" + l).indexOf("-") && (l = l.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")),
            P.style[l] !== p) {
                if (r || A(n, "undefined"))
                    return d(),
                    "pfx" != t || l;
                try {
                    P.style[l] = n
                } catch (e) {}
                if (P.style[l] != u)
                    return d(),
                    "pfx" != t || l
            }
        return d(),
        !1
    }
    u._q.unshift(function() {
        delete P.style
    });
    e.testProp = function(e, t, n) {
        return k([e], p, t, n)
    }
    ;
    function O(e, t, n, r, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1)
          , s = (e + " " + x.join(i + " ") + i).split(" ");
        return A(t, "string") || A(t, "undefined") ? k(s, t, r, o) : function(e, t, n) {
            var r;
            for (var o in e)
                if (e[o]in t)
                    return !1 === n ? e[o] : A(r = t[e[o]], "function") ? _(r, n || t) : r;
            return !1
        }(s = (e + " " + d.join(i + " ") + i).split(" "), t, n)
    }
    function z(e, t, n) {
        return O(e, p, p, t, n)
    }
    e.testAllProps = O,
    e.testAllProps = z,
    u.addTest("cssanimations", z("animationName", "a", !0)),
    function() {
        u.addTest("csscolumns", function() {
            var e = !1
              , t = z("columnCount");
            try {
                (e = !!t) && (e = new Boolean(e))
            } catch (e) {}
            return e
        });
        for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++)
            e = n[r].toLowerCase(),
            t = z("column" + n[r]),
            "breakbefore" !== e && "breakafter" !== e && "breakinside" != e || (t = t || z(n[r])),
            u.addTest("csscolumns." + e, t)
    }(),
    u.addTest("flexbox", z("flexBasis", "1px", !0)),
    function() {
        var e, t, n, r, o, i;
        for (var s in l)
            if (l.hasOwnProperty(s)) {
                if (e = [],
                (t = l[s]).name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (r = A(t.fn, "function") ? t.fn() : t.fn,
                o = 0; o < e.length; o++)
                    1 === (i = e[o].split(".")).length ? u[i[0]] = r : (!u[i[0]] || u[i[0]]instanceof Boolean || (u[i[0]] = new Boolean(u[i[0]])),
                    u[i[0]][i[1]] = r),
                    a.push((r ? "" : "no-") + i.join("-"))
            }
    }(),
    s(a),
    delete e.addTest,
    delete e.addAsyncTest;
    for (var L = 0; L < u._q.length; L++)
        u._q[L]();
    i.Modernizr = u
}(window, document);

/*! jQuery v3.3.1
 * JS Foundation and other contributors
 * jquery.org/license
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , i = Object.getPrototypeOf
      , o = n.slice
      , a = n.concat
      , s = n.push
      , u = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , p = f.toString
      , d = p.call(Object)
      , h = {}
      , g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , y = function e(t) {
        return null != t && t === t.window
    }
      , v = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e,
        n)
            for (i in v)
                n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    }
      , T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || g(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {},
                    a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function C(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
            return e === t && (f = !0),
            0
        }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            p()
        }, ie = me(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes),
            A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t),
            t = t || d,
            g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T)
                        m = t,
                        v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b),
                        s = (h = a(e)).length;
                        while (s--)
                            h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","),
                        m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)),
                            r
                        } catch (e) {} finally {
                            c === b && t.removeAttribute("id")
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            return t
        }
        function se(e) {
            return e[b] = !0,
            e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function le(e, t) {
            var n = e.split("|")
              , i = n.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function de(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return se(function(t) {
                return t = +t,
                se(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a,
            h = d.documentElement,
            g = !o(d),
            w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
            n.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Q.test(d.getElementsByClassName),
            n.getById = ue(function(e) {
                return h.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            y = [],
            (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                v.push("!=", W)
            }),
            y = y.length && new RegExp(y.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Q.test(h.compareDocumentPosition),
            x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o)
                    return ce(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }
            ,
            d) : d
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e),
            t = t.replace(z, "='$1']"),
            n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e),
            x(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(D),
            f) {
                while (t = e[o++])
                    t === e[o] && (i = r.push(o));
                while (i--)
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += i(t);
            return n
        }
        ,
        (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild],
                            a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                    p === t))
                                        break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--)
                            e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = pe(t);
        function ye() {}
        ye.prototype = r.filters = r.pseudos,
        r.setFilters = new ye,
        a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            s = e,
            u = [],
            l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = _.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }),
                s = s.slice(n.length));
                for (a in r.filter)
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        }
        ;
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function me(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)
                oe(e, t[r], n);
            return n
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)),
            i && !i[b] && (i = Te(i, o)),
            se(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u),
                r) {
                    l = we(v, d),
                    r(l, [], s, u),
                    c = l.length;
                    while (c--)
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = v.length;
                            while (c--)
                                (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    v = we(v === a ? v.splice(h, v.length) : v),
                    i ? i(null, a, v, u) : L.apply(a, v)
            })
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                return e === t
            }, s, !0), f = me(function(e) {
                return O(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type])
                                break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        function Ee(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , o = function(o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0,
                        a || f.ownerDocument === d || (p(f),
                        s = !g);
                        while (y = e[h++])
                            if (y(f, a || d, s)) {
                                u.push(f);
                                break
                            }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--,
                    o && x.push(f))
                }
                if (v += m,
                n && m !== v) {
                    h = 0;
                    while (y = t[h++])
                        y(x, b, a, s);
                    if (o) {
                        if (v > 0)
                            while (m--)
                                x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b),
                    c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E,
                l = w),
                x
            };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)),
                n = t.length;
                while (n--)
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }
        ,
        u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o],
                    r.relative[c = l.type])
                        break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && ve(u)))
                            return L.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(D).join("") === b,
        n.detectDuplicates = !!f,
        p(),
        n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(e);
    w.find = E,
    w.expr = E.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = E.uniqueSort,
    w.text = E.getText,
    w.isXMLDoc = E.isXML,
    w.contains = E.contains,
    w.escapeSelector = E.escape;
    var k = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && w(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                A.test(i[1]) && w.isPlainObject(t))
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 && (O[e] || w.uniqueSort(i),
            H.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once,
            r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length)
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1)
            }
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    w.each(n, function(n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1)
                        o.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ;
    function I(e) {
        return e
    }
    function W(e) {
        throw e
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++,
                                    l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== W && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                        n[1][3].add(a(0, e, g(t) ? t : I)),
                        n[2][3].add(a(0, e, g(r) ? r : W))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, i) : i
                }
            }
              , o = {};
            return w.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = w.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(i[n] && i[n].then)))
                return a.then();
            while (n--)
                $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
            !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }),
    w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _),
        e.removeEventListener("load", _),
        w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _),
    e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n)
                z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        g(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(w(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , X = /^-ms-/
      , U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1,
    Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[G(t)] = n;
            else
                for (r in t)
                    i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t))in r ? [t] : t.match(M) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q
      , K = new Q
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o),
                1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--)
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)),
                        ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e)))
                        return n;
                    if (void 0 !== (n = ne(o, e)))
                        return n
                } else
                    this.each(function() {
                        K.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = J.get(e, t),
                n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = w._queueHooks(e, t)
              , a = function() {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
      , oe = ["Top", "Right", "Bottom", "Left"]
      , ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }
      , se = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                w.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            w.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = w.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        le[r] = i,
        i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = J.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
            J.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    w.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o),
            a = ye(f.appendChild(o), "script"),
            l && ve(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div"))
          , t = r.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement
      , we = /^key/
      , Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function ke() {
        return !1
    }
    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = ke;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && w.find.matchesSelector(be, i),
                n.guid || (n.guid = w.guid++),
                (u = y.events) || (u = y.events = {}),
                (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    d = g = (s = Ce.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = w.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = w.event.special[d] || {},
                    c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = w.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t,
            n = 1; n < arguments.length; n++)
                u[n] = arguments[n];
            if (t.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l),
                n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem,
                    r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                        t.data = a.data,
                        void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = ke),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ae = /<script|<style|<link/i
      , je = /checked\s*(?:[^=]|=\s*.checked.)/i
      , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e),
            a = J.set(t, o),
            l = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e),
            u = w.extend({}, s),
            K.set(t, u))
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y))
            return e.each(function(i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())),
                Re(o, t, n, r)
            });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
                l = i,
                f !== d && (l = w.clone(l, !0, !0),
                u && w.merge(s, ye(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                w.map(s, Oe),
                f = 0; f < u; f++)
                    l = s[f],
                    he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ye(r)),
            r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s),
                r = 0,
                i = (o = ye(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e),
                    a = a || ye(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        Pe(o[r], a[r]);
                else
                    Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(ye(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                w(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
      , $e = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Be = new RegExp(oe.join("|"),"i");
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                s = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                a = 36 === c.offsetWidth || "absolute",
                be.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(h, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ge = ["Webkit", "Moz", "ms"]
      , Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye)
            return e;
        var t = e[0].toUpperCase() + e.slice(1)
          , n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t)in Ye)
                return e
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e),
        t
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
            r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i),
            "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))),
        u
    }
    function et(e, t, n) {
        var r = $e(e)
          , i = Fe(e, t, r)
          , o = "border-box" === w.css(e, "boxSizing", !1, r)
          , a = o;
        if (We.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]),
        ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)),
                a = w.cssHooks[t] || w.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Fe(e, t, r)),
            "normal" === i && t in Ve && (i = Ve[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                        return et(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
                s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ke(e, n, s)
            }
        }
    }),
    w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }),
    w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e,t,n,r,i)
    }
    w.Tween = tt,
    tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : tt.propHooks._default.set(this),
            this
        }
    },
    tt.prototype.init.prototype = tt.prototype,
    tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = tt.prototype.init,
    w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval),
        w.fx.tick())
    }
    function st() {
        return e.setTimeout(function() {
            nt = void 0
        }),
        nt = Date.now()
    }
    function ut(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        s = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || s()
        }
        ),
        a.unqueued++,
        p.always(function() {
            p.always(function() {
                a.unqueued--,
                w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r],
            it.test(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r])
                        continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            null == (l = y && y.display) && (l = J.get(e, "display")),
            "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0),
            l = e.style.display || l,
            c = w.css(e, "display"),
            fe([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }),
            null == l && (c = h.display,
            l = "none" === c ? "" : c)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            p.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            u = !1;
            for (r in d)
                u || (y ? "hidden"in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                    display: l
                }),
                o && (y.hidden = !g),
                g && fe([e], !0),
                p.done(function() {
                    g || fe([e]),
                    J.remove(e, "fxshow");
                    for (r in d)
                        w.style(e, r, d[r])
                })),
                u = lt(g ? y[r] : 0, r, p),
                r in y || (y[r] = u.start,
                g && (u.end = u.start,
                u.start = 0))
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n),
            i = t[r],
            o = e[n],
            Array.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = w.cssHooks[r]) && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts))
                return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return w.map(c, lt, l),
        g(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                pt.tweeners[n] = pt.tweeners[n] || [],
                pt.tweeners[n].unshift(t)
        },
        prefilters: [ct],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            g(r.old) && r.old.call(this),
            r.queue && w.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e)
              , o = w.speed(t, n, r)
              , a = function() {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = w.timers
                  , a = J.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }),
    w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        nt = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        rt || (rt = !0,
        at())
    }
    ,
    w.fx.stop = function() {
        rt = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a],
            ht[a] = i,
            i = null != n(e, t, r) ? a : null,
            ht[a] = o),
            i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                i = w.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    function vt(e) {
        return (e.match(M) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, mt(this)))
                });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, mt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1)
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0,
                    o = w(this),
                    a = xt(e);
                    while (t = a[i++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = g(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1
            }
        },
        h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/
      , Tt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r,
            3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(),
            x.sort()),
            c = m.indexOf(":") < 0 && "on" + m,
            t = t[w.expando] ? t : new w.Event(m,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : w.makeArray(n, [t]),
            d = w.event.special[m] || {},
            o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m,
                    wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    h = s,
                    t.type = a > 1 ? l : d.bindType || m,
                    (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                    (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null),
                w.event.triggered = m,
                t.isPropagationStopped() && h.addEventListener(m, Tt),
                i[m](),
                t.isPropagationStopped() && h.removeEventListener(m, Tt),
                w.event.triggered = void 0,
                u && (i[c] = u)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t);
                i || r.addEventListener(e, n, !0),
                J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0),
                J.remove(r, t))
            }
        }
    });
    var Ct = e.location
      , Et = Date.now()
      , kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
        n
    }
    ;
    var St = /\[\]$/
      , Dt = /\r?\n/g
      , Nt = /^(?:submit|button|image|reset|file)$/i
      , At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (i in t)
                jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g
      , Lt = /#.*$/
      , Ht = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Mt = /^(?:GET|HEAD)$/
      , Rt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _t(e, t, n, r) {
        var i = {}
          , o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0,
            w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r),
        e
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s) {
                            s = {};
                            while (t = Ot.exec(a))
                                s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t),
                    k(0, t),
                    this
                }
            };
            if (v.promise(E),
            h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""],
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
            _t(It, h, n, E),
            c)
                return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Mt.test(h.type),
            o = h.url.replace(Lt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Ht, "$1"),
            d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d),
            h.url = o + d),
            h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers)
                E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (C = "abort",
            m.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            i = _t(Wt, h, n, E)) {
                if (E.readyState = 1,
                f && y.trigger("ajaxSend", [E, h]),
                c)
                    return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(b, k)
                } catch (e) {
                    if (c)
                        throw e;
                    k(-1, e)
                }
            } else
                k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                i = void 0,
                a = s || "",
                E.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (b = Xt(h, E, r)),
                b = Ut(h, b, E, l),
                l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                p = b.data,
                l = !(d = b.error))) : (d = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                E.statusCode(x),
                x = void 0,
                f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                m.fireWith(g, [E, C]),
                f && (y.trigger("ajaxComplete", [E, h]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r,
            r = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }),
    w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials"in Gt,
    h.ajax = Gt = !!Gt,
    w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = []
      , Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || w.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? w(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Yt.push(i)),
                a && g(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    w.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(i)) : t = r),
        o = A.exec(e),
        a = !n && [],
        o ? [t.createElement(o[1])] : (o = xe([e], t, a),
        a && a.length && w(a).remove(),
        w.merge([], o.childNodes))
    }
    ,
    w.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"),
            s = f.offset(),
            o = w.css(e, "top"),
            u = w.css(e, "left"),
            (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            g(t) && (t = t.call(e, n, w.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            if (r)
                return r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position"))
                    e = e.offsetParent;
                return e || be
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n)
                return n = Fe(e, t),
                We.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return r = o.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || w.guid++,
            i
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = N,
    w.isFunction = g,
    w.isWindow = y,
    w.camelCase = G,
    w.type = x,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Jt = e.jQuery
      , Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt),
        t && e.jQuery === w && (e.jQuery = Jt),
        w
    }
    ,
    t || (e.jQuery = e.$ = w),
    w
});

/*!
  * Bootstrap v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery)
}(this, function(t, p) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
              , e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))),
            e.forEach(function(t) {
                var e, n, i;
                e = o,
                i = r[n = t],
                n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return o
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var e = "transitionend";
    function n(t) {
        var e = this
          , n = !1;
        return p(this).one(m.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || m.triggerTransitionEnd(e)
        }, t),
        this
    }
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()),
            document.getElementById(t); )
                ;
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            return e && document.querySelector(e) ? e : null
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = p(t).css("transition-duration")
              , n = p(t).css("transition-delay")
              , i = parseFloat(e)
              , o = parseFloat(n);
            return i || o ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            p(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = e[i]
                      , s = r && m.isElement(r) ? "element" : (a = r,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? m.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    p.fn.emulateTransitionEnd = n,
    p.event.special[m.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(t) {
            if (p(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = "alert"
      , r = "bs.alert"
      , a = "." + r
      , c = p.fn[o]
      , h = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }
      , u = "alert"
      , f = "fade"
      , d = "show"
      , g = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        t.dispose = function() {
            p.removeData(this._element, r),
            this._element = null
        }
        ,
        t._getRootElement = function(t) {
            var e = m.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n || (n = p(t).closest("." + u)[0]),
            n
        }
        ,
        t._triggerCloseEvent = function(t) {
            var e = p.Event(h.CLOSE);
            return p(t).trigger(e),
            e
        }
        ,
        t._removeElement = function(e) {
            var n = this;
            if (p(e).removeClass(d),
            p(e).hasClass(f)) {
                var t = m.getTransitionDurationFromElement(e);
                p(e).one(m.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(t) {
            p(t).detach().trigger(h.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = p(this)
                  , e = t.data(r);
                e || (e = new i(this),
                t.data(r, e)),
                "close" === n && e[n](this)
            })
        }
        ,
        i._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }]),
        i
    }();
    p(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)),
    p.fn[o] = g._jQueryInterface,
    p.fn[o].Constructor = g,
    p.fn[o].noConflict = function() {
        return p.fn[o] = c,
        g._jQueryInterface
    }
    ;
    var _ = "button"
      , v = "bs.button"
      , y = "." + v
      , E = ".data-api"
      , b = p.fn[_]
      , w = "active"
      , T = "btn"
      , C = "focus"
      , S = '[data-toggle^="button"]'
      , D = '[data-toggle="buttons"]'
      , I = 'input:not([type="hidden"])'
      , A = ".active"
      , O = ".btn"
      , N = {
        CLICK_DATA_API: "click" + y + E,
        FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E
    }
      , k = function() {
        function n(t) {
            this._element = t
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0
              , e = !0
              , n = p(this._element).closest(D)[0];
            if (n) {
                var i = this._element.querySelector(I);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(w))
                            t = !1;
                        else {
                            var o = n.querySelector(A);
                            o && p(o).removeClass(w)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !this._element.classList.contains(w),
                        p(i).trigger("change")
                    }
                    i.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)),
            t && p(this._element).toggleClass(w)
        }
        ,
        t.dispose = function() {
            p.removeData(this._element, v),
            this._element = null
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = p(this).data(v);
                t || (t = new n(this),
                p(this).data(v, t)),
                "toggle" === e && t[e]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }]),
        n
    }();
    p(document).on(N.CLICK_DATA_API, S, function(t) {
        t.preventDefault();
        var e = t.target;
        p(e).hasClass(T) || (e = p(e).closest(O)),
        k._jQueryInterface.call(p(e), "toggle")
    }).on(N.FOCUS_BLUR_DATA_API, S, function(t) {
        var e = p(t.target).closest(O)[0];
        p(e).toggleClass(C, /^focus(in)?$/.test(t.type))
    }),
    p.fn[_] = k._jQueryInterface,
    p.fn[_].Constructor = k,
    p.fn[_].noConflict = function() {
        return p.fn[_] = b,
        k._jQueryInterface
    }
    ;
    var L = "carousel"
      , P = "bs.carousel"
      , x = "." + P
      , H = ".data-api"
      , j = p.fn[L]
      , R = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , F = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , M = "next"
      , W = "prev"
      , U = "left"
      , B = "right"
      , q = {
        SLIDE: "slide" + x,
        SLID: "slid" + x,
        KEYDOWN: "keydown" + x,
        MOUSEENTER: "mouseenter" + x,
        MOUSELEAVE: "mouseleave" + x,
        TOUCHSTART: "touchstart" + x,
        TOUCHMOVE: "touchmove" + x,
        TOUCHEND: "touchend" + x,
        POINTERDOWN: "pointerdown" + x,
        POINTERUP: "pointerup" + x,
        DRAG_START: "dragstart" + x,
        LOAD_DATA_API: "load" + x + H,
        CLICK_DATA_API: "click" + x + H
    }
      , K = "carousel"
      , Q = "active"
      , Y = "slide"
      , V = "carousel-item-right"
      , X = "carousel-item-left"
      , z = "carousel-item-next"
      , G = "carousel-item-prev"
      , J = "pointer-event"
      , Z = ".active"
      , $ = ".active.carousel-item"
      , tt = ".carousel-item"
      , et = ".carousel-item img"
      , nt = ".carousel-item-next, .carousel-item-prev"
      , it = ".carousel-indicators"
      , ot = "[data-slide], [data-slide-to]"
      , rt = '[data-ride="carousel"]'
      , st = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , at = function() {
        function r(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(it),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var t = r.prototype;
        return t.next = function() {
            this._isSliding || this._slide(M)
        }
        ,
        t.nextWhenVisible = function() {
            !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(W)
        }
        ,
        t.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector($);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    p(this._element).one(q.SLID, function() {
                        return e.to(t)
                    });
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = n < t ? M : W;
                    this._slide(i, this._items[t])
                }
        }
        ,
        t.dispose = function() {
            p(this._element).off(x),
            p.removeData(this._element, P),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, R, t),
            m.typeCheckConfig(L, t, F),
            t
        }
        ,
        t._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                0 < e && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && p(this._element).on(q.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(q.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            this._addTouchEventListeners()
        }
        ,
        t._addTouchEventListeners = function() {
            var n = this;
            if (this._touchSupported) {
                var e = function(t) {
                    n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , i = function(t) {
                    n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                    n._handleSwipe(),
                    "hover" === n._config.pause && (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    n.touchTimeout = setTimeout(function(t) {
                        return n.cycle(t)
                    }, 500 + n._config.interval))
                };
                p(this._element.querySelectorAll(et)).on(q.DRAG_START, function(t) {
                    return t.preventDefault()
                }),
                this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function(t) {
                    return e(t)
                }),
                p(this._element).on(q.POINTERUP, function(t) {
                    return i(t)
                }),
                this._element.classList.add(J)) : (p(this._element).on(q.TOUCHSTART, function(t) {
                    return e(t)
                }),
                p(this._element).on(q.TOUCHMOVE, function(t) {
                    var e;
                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                }),
                p(this._element).on(q.TOUCHEND, function(t) {
                    return i(t)
                }))
            }
        }
        ,
        t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [],
            this._items.indexOf(t)
        }
        ,
        t._getItemByDirection = function(t, e) {
            var n = t === M
              , i = t === W
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var s = (o + (t === W ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(this._element.querySelector($))
              , o = p.Event(q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return p(this._element).trigger(o),
            o
        }
        ,
        t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                p(e).removeClass(Q);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && p(n).addClass(Q)
            }
        }
        ,
        t._slide = function(t, e) {
            var n, i, o, r = this, s = this._element.querySelector($), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (o = t === M ? (n = X,
            i = z,
            U) : (n = V,
            i = G,
            B),
            l && p(l).hasClass(Q))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                h && this.pause(),
                this._setActiveIndicatorElement(l);
                var u = p.Event(q.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                });
                if (p(this._element).hasClass(Y)) {
                    p(l).addClass(i),
                    m.reflow(l),
                    p(s).addClass(n),
                    p(l).addClass(n);
                    var f = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    f) : this._config.defaultInterval || this._config.interval;
                    var d = m.getTransitionDurationFromElement(s);
                    p(s).one(m.TRANSITION_END, function() {
                        p(l).removeClass(n + " " + i).addClass(Q),
                        p(s).removeClass(Q + " " + i + " " + n),
                        r._isSliding = !1,
                        setTimeout(function() {
                            return p(r._element).trigger(u)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else
                    p(s).removeClass(Q),
                    p(l).addClass(Q),
                    this._isSliding = !1,
                    p(this._element).trigger(u);
                h && this.cycle()
            }
        }
        ,
        r._jQueryInterface = function(i) {
            return this.each(function() {
                var t = p(this).data(P)
                  , e = l({}, R, p(this).data());
                "object" == typeof i && (e = l({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new r(this,e),
                p(this).data(P, t)),
                "number" == typeof i)
                    t.to(i);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else
                    e.interval && (t.pause(),
                    t.cycle())
            })
        }
        ,
        r._dataApiClickHandler = function(t) {
            var e = m.getSelectorFromElement(this);
            if (e) {
                var n = p(e)[0];
                if (n && p(n).hasClass(K)) {
                    var i = l({}, p(n).data(), p(this).data())
                      , o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1),
                    r._jQueryInterface.call(p(n), i),
                    o && p(n).data(P).to(o),
                    t.preventDefault()
                }
            }
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }, {
            key: "Default",
            get: function() {
                return R
            }
        }]),
        r
    }();
    p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler),
    p(window).on(q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
            var i = p(t[e]);
            at._jQueryInterface.call(i, i.data())
        }
    }),
    p.fn[L] = at._jQueryInterface,
    p.fn[L].Constructor = at,
    p.fn[L].noConflict = function() {
        return p.fn[L] = j,
        at._jQueryInterface
    }
    ;
    var lt = "collapse"
      , ct = "bs.collapse"
      , ht = "." + ct
      , ut = p.fn[lt]
      , ft = {
        toggle: !0,
        parent: ""
    }
      , dt = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , pt = {
        SHOW: "show" + ht,
        SHOWN: "shown" + ht,
        HIDE: "hide" + ht,
        HIDDEN: "hidden" + ht,
        CLICK_DATA_API: "click" + ht + ".data-api"
    }
      , mt = "show"
      , gt = "collapse"
      , _t = "collapsing"
      , vt = "collapsed"
      , yt = "width"
      , Et = "height"
      , bt = ".show, .collapsing"
      , wt = '[data-toggle="collapse"]'
      , Tt = function() {
        function a(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(wt)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , s = m.getSelectorFromElement(r)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = a.prototype;
        return t.toggle = function() {
            p(this._element).hasClass(mt) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !p(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(bt)).filter(function(t) {
                return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(gt)
            })).length && (t = null),
            !(t && (e = p(t).not(this._selector).data(ct)) && e._isTransitioning))) {
                var i = p.Event(pt.SHOW);
                if (p(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(p(t).not(this._selector), "hide"),
                    e || p(t).data(ct, null));
                    var o = this._getDimension();
                    p(this._element).removeClass(gt).addClass(_t),
                    this._element.style[o] = 0,
                    this._triggerArray.length && p(this._triggerArray).removeClass(vt).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                      , s = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, function() {
                        p(n._element).removeClass(_t).addClass(gt).addClass(mt),
                        n._element.style[o] = "",
                        n.setTransitioning(!1),
                        p(n._element).trigger(pt.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[o] = this._element[r] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var t = this;
            if (!this._isTransitioning && p(this._element).hasClass(mt)) {
                var e = p.Event(pt.HIDE);
                if (p(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    m.reflow(this._element),
                    p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var o = 0; o < i; o++) {
                            var r = this._triggerArray[o]
                              , s = m.getSelectorFromElement(r);
                            if (null !== s)
                                p([].slice.call(document.querySelectorAll(s))).hasClass(mt) || p(r).addClass(vt).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, function() {
                        t.setTransitioning(!1),
                        p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        t.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        t.dispose = function() {
            p.removeData(this._element, ct),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(t) {
            return (t = l({}, ft, t)).toggle = Boolean(t.toggle),
            m.typeCheckConfig(lt, t, dt),
            t
        }
        ,
        t._getDimension = function() {
            return p(this._element).hasClass(yt) ? yt : Et
        }
        ,
        t._getParent = function() {
            var t, n = this;
            m.isElement(this._config.parent) ? (t = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(t.querySelectorAll(e));
            return p(i).each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(t, e) {
            var n = p(t).hasClass(mt);
            e.length && p(e).toggleClass(vt, !n).attr("aria-expanded", n)
        }
        ,
        a._getTargetFromElement = function(t) {
            var e = m.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var t = p(this)
                  , e = t.data(ct)
                  , n = l({}, ft, t.data(), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || (e = new a(this,n),
                t.data(ct, e)),
                "string" == typeof i) {
                    if ("undefined" == typeof e[i])
                        throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        }
        ,
        s(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ft
            }
        }]),
        a
    }();
    p(document).on(pt.CLICK_DATA_API, wt, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = p(this)
          , e = m.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(e));
        p(i).each(function() {
            var t = p(this)
              , e = t.data(ct) ? "toggle" : n.data();
            Tt._jQueryInterface.call(t, e)
        })
    }),
    p.fn[lt] = Tt._jQueryInterface,
    p.fn[lt].Constructor = Tt,
    p.fn[lt].noConflict = function() {
        return p.fn[lt] = ut,
        Tt._jQueryInterface
    }
    ;
    for (var Ct = "undefined" != typeof window && "undefined" != typeof document, St = ["Edge", "Trident", "Firefox"], Dt = 0, It = 0; It < St.length; It += 1)
        if (Ct && 0 <= navigator.userAgent.indexOf(St[It])) {
            Dt = 1;
            break
        }
    var At = Ct && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            window.Promise.resolve().then(function() {
                e = !1,
                t()
            }))
        }
    }
    : function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            setTimeout(function() {
                e = !1,
                t()
            }, Dt))
        }
    }
    ;
    function Ot(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }
    function Nt(t, e) {
        if (1 !== t.nodeType)
            return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }
    function kt(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
    function Lt(t) {
        if (!t)
            return document.body;
        switch (t.nodeName) {
        case "HTML":
        case "BODY":
            return t.ownerDocument.body;
        case "#document":
            return t.body
        }
        var e = Nt(t)
          , n = e.overflow
          , i = e.overflowX
          , o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t))
    }
    var Pt = Ct && !(!window.MSInputMethodContext || !document.documentMode)
      , xt = Ct && /MSIE 10/.test(navigator.userAgent);
    function Ht(t) {
        return 11 === t ? Pt : 10 === t ? xt : Pt || xt
    }
    function jt(t) {
        if (!t)
            return document.documentElement;
        for (var e = Ht(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; )
            n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Nt(n, "position") ? jt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }
    function Rt(t) {
        return null !== t.parentNode ? Rt(t.parentNode) : t
    }
    function Ft(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? t : e
          , o = n ? e : t
          , r = document.createRange();
        r.setStart(i, 0),
        r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && jt(s.firstElementChild) !== s ? jt(l) : l;
        var c = Rt(t);
        return c.host ? Ft(c.host, e) : Ft(t, Rt(e).host)
    }
    function Mt(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = t.nodeName;
        if ("BODY" !== n && "HTML" !== n)
            return t[e];
        var i = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || i)[e]
    }
    function Wt(t, e) {
        var n = "x" === e ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }
    function Ut(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Ht(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }
    function Bt(t) {
        var e = t.body
          , n = t.documentElement
          , i = Ht(10) && getComputedStyle(n);
        return {
            height: Ut("Height", e, n, i),
            width: Ut("Width", e, n, i)
        }
    }
    var qt = function() {
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, e, n) {
            return e && i(t.prototype, e),
            n && i(t, n),
            t
        }
    }()
      , Kt = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
      , Qt = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    function Yt(t) {
        return Qt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }
    function Vt(t) {
        var e = {};
        try {
            if (Ht(10)) {
                e = t.getBoundingClientRect();
                var n = Mt(t, "top")
                  , i = Mt(t, "left");
                e.top += n,
                e.left += i,
                e.bottom += n,
                e.right += i
            } else
                e = t.getBoundingClientRect()
        } catch (t) {}
        var o = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }
          , r = "HTML" === t.nodeName ? Bt(t.ownerDocument) : {}
          , s = r.width || t.clientWidth || o.right - o.left
          , a = r.height || t.clientHeight || o.bottom - o.top
          , l = t.offsetWidth - s
          , c = t.offsetHeight - a;
        if (l || c) {
            var h = Nt(t);
            l -= Wt(h, "x"),
            c -= Wt(h, "y"),
            o.width -= l,
            o.height -= c
        }
        return Yt(o)
    }
    function Xt(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = Ht(10)
          , o = "HTML" === e.nodeName
          , r = Vt(t)
          , s = Vt(e)
          , a = Lt(t)
          , l = Nt(e)
          , c = parseFloat(l.borderTopWidth, 10)
          , h = parseFloat(l.borderLeftWidth, 10);
        n && o && (s.top = Math.max(s.top, 0),
        s.left = Math.max(s.left, 0));
        var u = Yt({
            top: r.top - s.top - c,
            left: r.left - s.left - h,
            width: r.width,
            height: r.height
        });
        if (u.marginTop = 0,
        u.marginLeft = 0,
        !i && o) {
            var f = parseFloat(l.marginTop, 10)
              , d = parseFloat(l.marginLeft, 10);
            u.top -= c - f,
            u.bottom -= c - f,
            u.left -= h - d,
            u.right -= h - d,
            u.marginTop = f,
            u.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function(t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , i = Mt(e, "top")
              , o = Mt(e, "left")
              , r = n ? -1 : 1;
            return t.top += i * r,
            t.bottom += i * r,
            t.left += o * r,
            t.right += o * r,
            t
        }(u, e)),
        u
    }
    function zt(t) {
        if (!t || !t.parentElement || Ht())
            return document.documentElement;
        for (var e = t.parentElement; e && "none" === Nt(e, "transform"); )
            e = e.parentElement;
        return e || document.documentElement
    }
    function Gt(t, e, n, i) {
        var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , r = {
            top: 0,
            left: 0
        }
          , s = o ? zt(t) : Ft(t, e);
        if ("viewport" === i)
            r = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , n = t.ownerDocument.documentElement
                  , i = Xt(t, n)
                  , o = Math.max(n.clientWidth, window.innerWidth || 0)
                  , r = Math.max(n.clientHeight, window.innerHeight || 0)
                  , s = e ? 0 : Mt(n)
                  , a = e ? 0 : Mt(n, "left");
                return Yt({
                    top: s - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: o,
                    height: r
                })
            }(s, o);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = Lt(kt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = Xt(a, s, o);
            if ("HTML" !== a.nodeName || function t(e) {
                var n = e.nodeName;
                return "BODY" !== n && "HTML" !== n && ("fixed" === Nt(e, "position") || t(kt(e)))
            }(s))
                r = l;
            else {
                var c = Bt(t.ownerDocument)
                  , h = c.height
                  , u = c.width;
                r.top += l.top - l.marginTop,
                r.bottom = h + l.top,
                r.left += l.left - l.marginLeft,
                r.right = u + l.left
            }
        }
        var f = "number" == typeof (n = n || 0);
        return r.left += f ? n : n.left || 0,
        r.top += f ? n : n.top || 0,
        r.right -= f ? n : n.right || 0,
        r.bottom -= f ? n : n.bottom || 0,
        r
    }
    function Jt(t, e, i, n, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var s = Gt(i, n, r, o)
          , a = {
            top: {
                width: s.width,
                height: e.top - s.top
            },
            right: {
                width: s.right - e.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - e.bottom
            },
            left: {
                width: e.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map(function(t) {
            return Qt({
                key: t
            }, a[t], {
                area: (e = a[t],
                e.width * e.height)
            });
            var e
        }).sort(function(t, e) {
            return e.area - t.area
        })
          , c = l.filter(function(t) {
            var e = t.width
              , n = t.height;
            return e >= i.clientWidth && n >= i.clientHeight
        })
          , h = 0 < c.length ? c[0].key : l[0].key
          , u = t.split("-")[1];
        return h + (u ? "-" + u : "")
    }
    function Zt(t, e, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Xt(n, i ? zt(e) : Ft(e, n), i)
    }
    function $t(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t)
          , n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0)
          , i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }
    function te(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }
    function ee(t, e, n) {
        n = n.split("-")[0];
        var i = $t(t)
          , o = {
            width: i.width,
            height: i.height
        }
          , r = -1 !== ["right", "left"].indexOf(n)
          , s = r ? "top" : "left"
          , a = r ? "left" : "top"
          , l = r ? "height" : "width"
          , c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2,
        o[a] = n === a ? e[a] - i[c] : e[te(a)],
        o
    }
    function ne(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
    function ie(t, n, e) {
        return (void 0 === e ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex)
                return t.findIndex(function(t) {
                    return t[e] === n
                });
            var i = ne(t, function(t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(t, "name", e))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var e = t.function || t.fn;
            t.enabled && Ot(e) && (n.offsets.popper = Yt(n.offsets.popper),
            n.offsets.reference = Yt(n.offsets.reference),
            n = e(n, t))
        }),
        n
    }
    function oe(t, n) {
        return t.some(function(t) {
            var e = t.name;
            return t.enabled && e === n
        })
    }
    function re(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i]
              , r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r])
                return r
        }
        return null
    }
    function se(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }
    function ae(t, e, n, i) {
        n.updateBound = i,
        se(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = Lt(t);
        return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName
              , s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
                passive: !0
            }),
            r || t(Lt(s.parentNode), n, i, o),
            o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function le() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (t = this.reference,
        e = this.state,
        se(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e))
    }
    function ce(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function he(n, i) {
        Object.keys(i).forEach(function(t) {
            var e = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ce(i[t]) && (e = "px"),
            n.style[t] = i[t] + e
        })
    }
    var ue = Ct && /Firefox/i.test(navigator.userAgent);
    function fe(t, e, n) {
        var i = ne(t, function(t) {
            return t.name === e
        })
          , o = !!i && t.some(function(t) {
            return t.name === n && t.enabled && t.order < i.order
        });
        if (!o) {
            var r = "`" + e + "`"
              , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , pe = de.slice(3);
    function me(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = pe.indexOf(t)
          , i = pe.slice(n + 1).concat(pe.slice(0, n));
        return e ? i.reverse() : i
    }
    var ge = "flip"
      , _e = "clockwise"
      , ve = "counterclockwise";
    function ye(t, o, r, e) {
        var s = [0, 0]
          , a = -1 !== ["right", "left"].indexOf(e)
          , n = t.split(/(\+|\-)/).map(function(t) {
            return t.trim()
        })
          , i = n.indexOf(ne(n, function(t) {
            return -1 !== t.search(/,|\s/)
        }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(t, e) {
            var n = (1 === e ? !a : a) ? "height" : "width"
              , i = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                i = !0,
                t) : i ? (t[t.length - 1] += e,
                i = !1,
                t) : t.concat(e)
            }, []).map(function(t) {
                return function(t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , r = +o[1]
                      , s = o[2];
                    if (!r)
                        return t;
                    if (0 !== s.indexOf("%"))
                        return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    var a = void 0;
                    switch (s) {
                    case "%p":
                        a = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        a = i
                    }
                    return Yt(a)[e] / 100 * r
                }(t, n, o, r)
            })
        })).forEach(function(n, i) {
            n.forEach(function(t, e) {
                ce(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1))
            })
        }),
        s
    }
    var Ee = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement
                      , n = e.split("-")[0]
                      , i = e.split("-")[1];
                    if (i) {
                        var o = t.offsets
                          , r = o.reference
                          , s = o.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , h = {
                            start: Kt({}, l, r[l]),
                            end: Kt({}, l, r[l] + r[c] - s[c])
                        };
                        t.offsets.popper = Qt({}, s, h[i])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.offset
                      , i = t.placement
                      , o = t.offsets
                      , r = o.popper
                      , s = o.reference
                      , a = i.split("-")[0]
                      , l = void 0;
                    return l = ce(+n) ? [+n, 0] : ye(n, r, s, a),
                    "left" === a ? (r.top += l[0],
                    r.left -= l[1]) : "right" === a ? (r.top += l[0],
                    r.left += l[1]) : "top" === a ? (r.left += l[0],
                    r.top -= l[1]) : "bottom" === a && (r.left += l[0],
                    r.top += l[1]),
                    t.popper = r,
                    t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, i) {
                    var e = i.boundariesElement || jt(t.instance.popper);
                    t.instance.reference === e && (e = jt(e));
                    var n = re("transform")
                      , o = t.instance.popper.style
                      , r = o.top
                      , s = o.left
                      , a = o[n];
                    o.top = "",
                    o.left = "",
                    o[n] = "";
                    var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
                    o.top = r,
                    o.left = s,
                    o[n] = a,
                    i.boundaries = l;
                    var c = i.priority
                      , h = t.offsets.popper
                      , u = {
                        primary: function(t) {
                            var e = h[t];
                            return h[t] < l[t] && !i.escapeWithReference && (e = Math.max(h[t], l[t])),
                            Kt({}, t, e)
                        },
                        secondary: function(t) {
                            var e = "right" === t ? "left" : "top"
                              , n = h[e];
                            return h[t] > l[t] && !i.escapeWithReference && (n = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))),
                            Kt({}, e, n)
                        }
                    };
                    return c.forEach(function(t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        h = Qt({}, h, u[e](t))
                    }),
                    t.offsets.popper = h,
                    t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets
                      , n = e.popper
                      , i = e.reference
                      , o = t.placement.split("-")[0]
                      , r = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(o)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
                    n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
                    t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, e) {
                    var n;
                    if (!fe(t.instance.modifiers, "arrow", "keepTogether"))
                        return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                        if (!(i = t.instance.popper.querySelector(i)))
                            return t
                    } else if (!t.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        t;
                    var o = t.placement.split("-")[0]
                      , r = t.offsets
                      , s = r.popper
                      , a = r.reference
                      , l = -1 !== ["left", "right"].indexOf(o)
                      , c = l ? "height" : "width"
                      , h = l ? "Top" : "Left"
                      , u = h.toLowerCase()
                      , f = l ? "left" : "top"
                      , d = l ? "bottom" : "right"
                      , p = $t(i)[c];
                    a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)),
                    a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]),
                    t.offsets.popper = Yt(t.offsets.popper);
                    var m = a[u] + a[c] / 2 - p / 2
                      , g = Nt(t.instance.popper)
                      , _ = parseFloat(g["margin" + h], 10)
                      , v = parseFloat(g["border" + h + "Width"], 10)
                      , y = m - t.offsets.popper[u] - _ - v;
                    return y = Math.max(Math.min(s[c] - p, y), 0),
                    t.arrowElement = i,
                    t.offsets.arrow = (Kt(n = {}, u, Math.round(y)),
                    Kt(n, f, ""),
                    n),
                    t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(p, m) {
                    if (oe(p.instance.modifiers, "inner"))
                        return p;
                    if (p.flipped && p.placement === p.originalPlacement)
                        return p;
                    var g = Gt(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed)
                      , _ = p.placement.split("-")[0]
                      , v = te(_)
                      , y = p.placement.split("-")[1] || ""
                      , E = [];
                    switch (m.behavior) {
                    case ge:
                        E = [_, v];
                        break;
                    case _e:
                        E = me(_);
                        break;
                    case ve:
                        E = me(_, !0);
                        break;
                    default:
                        E = m.behavior
                    }
                    return E.forEach(function(t, e) {
                        if (_ !== t || E.length === e + 1)
                            return p;
                        _ = p.placement.split("-")[0],
                        v = te(_);
                        var n, i = p.offsets.popper, o = p.offsets.reference, r = Math.floor, s = "left" === _ && r(i.right) > r(o.left) || "right" === _ && r(i.left) < r(o.right) || "top" === _ && r(i.bottom) > r(o.top) || "bottom" === _ && r(i.top) < r(o.bottom), a = r(i.left) < r(g.left), l = r(i.right) > r(g.right), c = r(i.top) < r(g.top), h = r(i.bottom) > r(g.bottom), u = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && h, f = -1 !== ["top", "bottom"].indexOf(_), d = !!m.flipVariations && (f && "start" === y && a || f && "end" === y && l || !f && "start" === y && c || !f && "end" === y && h);
                        (s || u || d) && (p.flipped = !0,
                        (s || u) && (_ = E[e + 1]),
                        d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n),
                        p.placement = _ + (y ? "-" + y : ""),
                        p.offsets.popper = Qt({}, p.offsets.popper, ee(p.instance.popper, p.offsets.reference, p.placement)),
                        p = ie(p.instance.modifiers, p, "flip"))
                    }),
                    p
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement
                      , n = e.split("-")[0]
                      , i = t.offsets
                      , o = i.popper
                      , r = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0),
                    t.placement = te(e),
                    t.offsets.popper = Yt(o),
                    t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!fe(t.instance.modifiers, "hide", "preventOverflow"))
                        return t;
                    var e = t.offsets.reference
                      , n = ne(t.instance.modifiers, function(t) {
                        return "preventOverflow" === t.name
                    }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide)
                            return t;
                        t.hide = !0,
                        t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide)
                            return t;
                        t.hide = !1,
                        t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.x
                      , i = e.y
                      , o = t.offsets.popper
                      , r = ne(t.instance.modifiers, function(t) {
                        return "applyStyle" === t.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l, c, h, u, f, d, p, m, g, _, v = void 0 !== r ? r : e.gpuAcceleration, y = jt(t.instance.popper), E = Vt(y), b = {
                        position: o.position
                    }, w = (s = t,
                    a = window.devicePixelRatio < 2 || !ue,
                    l = s.offsets,
                    c = l.popper,
                    h = l.reference,
                    u = -1 !== ["left", "right"].indexOf(s.placement),
                    f = -1 !== s.placement.indexOf("-"),
                    d = h.width % 2 == c.width % 2,
                    p = h.width % 2 == 1 && c.width % 2 == 1,
                    m = function(t) {
                        return t
                    }
                    ,
                    g = a ? u || f || d ? Math.round : Math.floor : m,
                    _ = a ? Math.round : m,
                    {
                        left: g(p && !f && a ? c.left - 1 : c.left),
                        top: _(c.top),
                        bottom: _(c.bottom),
                        right: g(c.right)
                    }), T = "bottom" === n ? "top" : "bottom", C = "right" === i ? "left" : "right", S = re("transform"), D = void 0, I = void 0;
                    if (I = "bottom" === T ? "HTML" === y.nodeName ? -y.clientHeight + w.bottom : -E.height + w.bottom : w.top,
                    D = "right" === C ? "HTML" === y.nodeName ? -y.clientWidth + w.right : -E.width + w.right : w.left,
                    v && S)
                        b[S] = "translate3d(" + D + "px, " + I + "px, 0)",
                        b[T] = 0,
                        b[C] = 0,
                        b.willChange = "transform";
                    else {
                        var A = "bottom" === T ? -1 : 1
                          , O = "right" === C ? -1 : 1;
                        b[T] = I * A,
                        b[C] = D * O,
                        b.willChange = T + ", " + C
                    }
                    var N = {
                        "x-placement": t.placement
                    };
                    return t.attributes = Qt({}, N, t.attributes),
                    t.styles = Qt({}, b, t.styles),
                    t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles),
                    t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    var e, n;
                    return he(t.instance.popper, t.styles),
                    e = t.instance.popper,
                    n = t.attributes,
                    Object.keys(n).forEach(function(t) {
                        !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                    }),
                    t.arrowElement && Object.keys(t.arrowStyles).length && he(t.arrowElement, t.arrowStyles),
                    t
                },
                onLoad: function(t, e, n, i, o) {
                    var r = Zt(o, e, t, n.positionFixed)
                      , s = Jt(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s),
                    he(e, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , be = function() {
        function r(t, e) {
            var n = this
              , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update)
            }
            ,
            this.update = At(this.update.bind(this)),
            this.options = Qt({}, r.Defaults, i),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = t && t.jquery ? t[0] : t,
            this.popper = e && e.jquery ? e[0] : e,
            this.options.modifiers = {},
            Object.keys(Qt({}, r.Defaults.modifiers, i.modifiers)).forEach(function(t) {
                n.options.modifiers[t] = Qt({}, r.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                return Qt({
                    name: t
                }, n.options.modifiers[t])
            }).sort(function(t, e) {
                return t.order - e.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && Ot(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
            }),
            this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(),
            this.state.eventsEnabled = o
        }
        return qt(r, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var t = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        t.offsets.reference = Zt(this.state, this.popper, this.reference, this.options.positionFixed),
                        t.placement = Jt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        t.originalPlacement = t.placement,
                        t.positionFixed = this.options.positionFixed,
                        t.offsets.popper = ee(this.popper, t.offsets.reference, t.placement),
                        t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                        t = ie(this.modifiers, t),
                        this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
                        this.options.onCreate(t))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[re("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return le.call(this)
            }
        }]),
        r
    }();
    be.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    be.placements = de,
    be.Defaults = Ee;
    var we = "dropdown"
      , Te = "bs.dropdown"
      , Ce = "." + Te
      , Se = ".data-api"
      , De = p.fn[we]
      , Ie = new RegExp("38|40|27")
      , Ae = {
        HIDE: "hide" + Ce,
        HIDDEN: "hidden" + Ce,
        SHOW: "show" + Ce,
        SHOWN: "shown" + Ce,
        CLICK: "click" + Ce,
        CLICK_DATA_API: "click" + Ce + Se,
        KEYDOWN_DATA_API: "keydown" + Ce + Se,
        KEYUP_DATA_API: "keyup" + Ce + Se
    }
      , Oe = "disabled"
      , Ne = "show"
      , ke = "dropup"
      , Le = "dropright"
      , Pe = "dropleft"
      , xe = "dropdown-menu-right"
      , He = "position-static"
      , je = '[data-toggle="dropdown"]'
      , Re = ".dropdown form"
      , Fe = ".dropdown-menu"
      , Me = ".navbar-nav"
      , We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , Ue = "top-start"
      , Be = "top-end"
      , qe = "bottom-start"
      , Ke = "bottom-end"
      , Qe = "right-start"
      , Ye = "left-start"
      , Ve = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , Xe = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , ze = function() {
        function c(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = c.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
                var t = c._getParentFromElement(this._element)
                  , e = p(this._menu).hasClass(Ne);
                if (c._clearMenus(),
                !e) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , i = p.Event(Ae.SHOW, n);
                    if (p(t).trigger(i),
                    !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof be)
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = t : m.isElement(this._config.reference) && (o = this._config.reference,
                            "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && p(t).addClass(He),
                            this._popper = new be(o,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === p(t).closest(Me).length && p(document.body).children().on("mouseover", null, p.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        p(this._menu).toggleClass(Ne),
                        p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n))
                    }
                }
            }
        }
        ,
        t.show = function() {
            if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Ne))) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = p.Event(Ae.SHOW, t)
                  , n = c._getParentFromElement(this._element);
                p(n).trigger(e),
                e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne),
                p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t)))
            }
        }
        ,
        t.hide = function() {
            if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Ne)) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = p.Event(Ae.HIDE, t)
                  , n = c._getParentFromElement(this._element);
                p(n).trigger(e),
                e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne),
                p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t)))
            }
        }
        ,
        t.dispose = function() {
            p.removeData(this._element, Te),
            p(this._element).off(Ce),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            p(this._element).on(Ae.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, this.constructor.Default, p(this._element).data(), t),
            m.typeCheckConfig(we, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(Fe))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var t = p(this._element.parentNode)
              , e = qe;
            return t.hasClass(ke) ? (e = Ue,
            p(this._menu).hasClass(xe) && (e = Be)) : t.hasClass(Le) ? e = Qe : t.hasClass(Pe) ? e = Ye : p(this._menu).hasClass(xe) && (e = Ke),
            e
        }
        ,
        t._detectNavbar = function() {
            return 0 < p(this._element).closest(".navbar").length
        }
        ,
        t._getPopperConfig = function() {
            var e = this
              , t = {};
            "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}),
                t
            }
            : t.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: t,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }),
            n
        }
        ,
        c._jQueryInterface = function(e) {
            return this.each(function() {
                var t = p(this).data(Te);
                if (t || (t = new c(this,"object" == typeof e ? e : null),
                p(this).data(Te, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        c._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var e = [].slice.call(document.querySelectorAll(je)), n = 0, i = e.length; n < i; n++) {
                    var o = c._getParentFromElement(e[n])
                      , r = p(e[n]).data(Te)
                      , s = {
                        relatedTarget: e[n]
                    };
                    if (t && "click" === t.type && (s.clickEvent = t),
                    r) {
                        var a = r._menu;
                        if (p(o).hasClass(Ne) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && p.contains(o, t.target))) {
                            var l = p.Event(Ae.HIDE, s);
                            p(o).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                            e[n].setAttribute("aria-expanded", "false"),
                            p(a).removeClass(Ne),
                            p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(t) {
            var e, n = m.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || p(t.target).closest(Fe).length)) : Ie.test(t.which)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !p(this).hasClass(Oe))) {
                var e = c._getParentFromElement(this)
                  , n = p(e).hasClass(Ne);
                if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = [].slice.call(e.querySelectorAll(We));
                    if (0 !== i.length) {
                        var o = i.indexOf(t.target);
                        38 === t.which && 0 < o && o--,
                        40 === t.which && o < i.length - 1 && o++,
                        o < 0 && (o = 0),
                        i[o].focus()
                    }
                } else {
                    if (27 === t.which) {
                        var r = e.querySelector(je);
                        p(r).trigger("focus")
                    }
                    p(this).trigger("click")
                }
            }
        }
        ,
        s(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Ve
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Xe
            }
        }]),
        c
    }();
    p(document).on(Ae.KEYDOWN_DATA_API, je, ze._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, Fe, ze._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, ze._clearMenus).on(Ae.CLICK_DATA_API, je, function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        ze._jQueryInterface.call(p(this), "toggle")
    }).on(Ae.CLICK_DATA_API, Re, function(t) {
        t.stopPropagation()
    }),
    p.fn[we] = ze._jQueryInterface,
    p.fn[we].Constructor = ze,
    p.fn[we].noConflict = function() {
        return p.fn[we] = De,
        ze._jQueryInterface
    }
    ;
    var Ge = "modal"
      , Je = "bs.modal"
      , Ze = "." + Je
      , $e = p.fn[Ge]
      , tn = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , en = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , nn = {
        HIDE: "hide" + Ze,
        HIDDEN: "hidden" + Ze,
        SHOW: "show" + Ze,
        SHOWN: "shown" + Ze,
        FOCUSIN: "focusin" + Ze,
        RESIZE: "resize" + Ze,
        CLICK_DISMISS: "click.dismiss" + Ze,
        KEYDOWN_DISMISS: "keydown.dismiss" + Ze,
        MOUSEUP_DISMISS: "mouseup.dismiss" + Ze,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ze,
        CLICK_DATA_API: "click" + Ze + ".data-api"
    }
      , on = "modal-scrollbar-measure"
      , rn = "modal-backdrop"
      , sn = "modal-open"
      , an = "fade"
      , ln = "show"
      , cn = ".modal-dialog"
      , hn = '[data-toggle="modal"]'
      , un = '[data-dismiss="modal"]'
      , fn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , dn = ".sticky-top"
      , pn = function() {
        function o(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(cn),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var t = o.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        t.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                p(this._element).hasClass(an) && (this._isTransitioning = !0);
                var n = p.Event(nn.SHOW, {
                    relatedTarget: t
                });
                p(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(this._element).on(nn.CLICK_DISMISS, un, function(t) {
                    return e.hide(t)
                }),
                p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function() {
                    p(e._element).one(nn.MOUSEUP_DISMISS, function(t) {
                        p(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return e._showElement(t)
                }))
            }
        }
        ,
        t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = p.Event(nn.HIDE);
                if (p(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = p(this._element).hasClass(an);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    p(document).off(nn.FOCUSIN),
                    p(this._element).removeClass(ln),
                    p(this._element).off(nn.CLICK_DISMISS),
                    p(this._dialog).off(nn.MOUSEDOWN_DISMISS),
                    i) {
                        var o = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(o)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            [window, this._element, this._dialog].forEach(function(t) {
                return p(t).off(Ze)
            }),
            p(document).off(nn.FOCUSIN),
            p.removeData(this._element, Je),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, tn, t),
            m.typeCheckConfig(Ge, t, en),
            t
        }
        ,
        t._showElement = function(t) {
            var e = this
              , n = p(this._element).hasClass(an);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.scrollTop = 0,
            n && m.reflow(this._element),
            p(this._element).addClass(ln),
            this._config.focus && this._enforceFocus();
            var i = p.Event(nn.SHOWN, {
                relatedTarget: t
            })
              , o = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                p(e._element).trigger(i)
            };
            if (n) {
                var r = m.getTransitionDurationFromElement(this._dialog);
                p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
            } else
                o()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === p(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(),
                e.hide())
            }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? p(window).on(nn.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : p(window).off(nn.RESIZE)
        }
        ,
        t._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                p(document.body).removeClass(sn),
                t._resetAdjustments(),
                t._resetScrollbar(),
                p(t._element).trigger(nn.HIDDEN)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (p(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(t) {
            var e = this
              , n = p(this._element).hasClass(an) ? an : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = rn,
                n && this._backdrop.classList.add(n),
                p(this._backdrop).appendTo(document.body),
                p(this._element).on(nn.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                }),
                n && m.reflow(this._backdrop),
                p(this._backdrop).addClass(ln),
                !t)
                    return;
                if (!n)
                    return void t();
                var i = m.getTransitionDurationFromElement(this._backdrop);
                p(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                p(this._backdrop).removeClass(ln);
                var o = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (p(this._element).hasClass(an)) {
                    var r = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o()
            } else
                t && t()
        }
        ,
        t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(fn))
                  , e = [].slice.call(document.querySelectorAll(dn));
                p(t).each(function(t, e) {
                    var n = e.style.paddingRight
                      , i = p(e).css("padding-right");
                    p(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }),
                p(e).each(function(t, e) {
                    var n = e.style.marginRight
                      , i = p(e).css("margin-right");
                    p(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = p(document.body).css("padding-right");
                p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            p(document.body).addClass(sn)
        }
        ,
        t._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(fn));
            p(t).each(function(t, e) {
                var n = p(e).data("padding-right");
                p(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            });
            var e = [].slice.call(document.querySelectorAll("" + dn));
            p(e).each(function(t, e) {
                var n = p(e).data("margin-right");
                "undefined" != typeof n && p(e).css("margin-right", n).removeData("margin-right")
            });
            var n = p(document.body).data("padding-right");
            p(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = on,
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        o._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = p(this).data(Je)
                  , e = l({}, tn, p(this).data(), "object" == typeof n && n ? n : {});
                if (t || (t = new o(this,e),
                p(this).data(Je, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else
                    e.show && t.show(i)
            })
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }, {
            key: "Default",
            get: function() {
                return tn
            }
        }]),
        o
    }();
    p(document).on(nn.CLICK_DATA_API, hn, function(t) {
        var e, n = this, i = m.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = p(e).data(Je) ? "toggle" : l({}, p(e).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = p(e).one(nn.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(nn.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        pn._jQueryInterface.call(p(e), o, this)
    }),
    p.fn[Ge] = pn._jQueryInterface,
    p.fn[Ge].Constructor = pn,
    p.fn[Ge].noConflict = function() {
        return p.fn[Ge] = $e,
        pn._jQueryInterface
    }
    ;
    var mn = "tooltip"
      , gn = "bs.tooltip"
      , _n = "." + gn
      , vn = p.fn[mn]
      , yn = "bs-tooltip"
      , En = new RegExp("(^|\\s)" + yn + "\\S+","g")
      , bn = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
    }
      , wn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Tn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    }
      , Cn = "show"
      , Sn = "out"
      , Dn = {
        HIDE: "hide" + _n,
        HIDDEN: "hidden" + _n,
        SHOW: "show" + _n,
        SHOWN: "shown" + _n,
        INSERTED: "inserted" + _n,
        CLICK: "click" + _n,
        FOCUSIN: "focusin" + _n,
        FOCUSOUT: "focusout" + _n,
        MOUSEENTER: "mouseenter" + _n,
        MOUSELEAVE: "mouseleave" + _n
    }
      , In = "fade"
      , An = "show"
      , On = ".tooltip-inner"
      , Nn = ".arrow"
      , kn = "hover"
      , Ln = "focus"
      , Pn = "click"
      , xn = "manual"
      , Hn = function() {
        function i(t, e) {
            if ("undefined" == typeof be)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = p(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    p(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (p(this.getTipElement()).hasClass(An))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            p.removeData(this.element, this.constructor.DATA_KEY),
            p(this.element).off(this.constructor.EVENT_KEY),
            p(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && p(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === p(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = p.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                p(this.element).trigger(t);
                var n = m.findShadowRoot(this.element)
                  , i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i)
                    return;
                var o = this.getTipElement()
                  , r = m.getUID(this.constructor.NAME);
                o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && p(o).addClass(In);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                  , a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                p(o).data(this.constructor.DATA_KEY, this),
                p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l),
                p(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new be(this.element,o,{
                    placement: a,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Nn
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }),
                p(o).addClass(An),
                "ontouchstart"in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                var c = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    p(e.element).trigger(e.constructor.Event.SHOWN),
                    t === Sn && e._leave(null, e)
                };
                if (p(this.tip).hasClass(In)) {
                    var h = m.getTransitionDurationFromElement(this.tip);
                    p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h)
                } else
                    c()
            }
        }
        ,
        t.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , i = p.Event(this.constructor.Event.HIDE)
              , o = function() {
                e._hoverState !== Cn && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                p(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (p(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (p(n).removeClass(An),
                "ontouchstart"in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                this._activeTrigger[Pn] = !1,
                this._activeTrigger[Ln] = !1,
                this._activeTrigger[kn] = !1,
                p(this.tip).hasClass(In)) {
                    var r = m.getTransitionDurationFromElement(n);
                    p(n).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(t) {
            p(this.getTipElement()).addClass(yn + "-" + t)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(p(t.querySelectorAll(On)), this.getTitle()),
            p(t).removeClass(In + " " + An)
        }
        ,
        t.setElementContent = function(t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery) ? n ? p(e).parent().is(t) || t.empty().append(e) : t.text(p(e).text()) : t[n ? "html" : "text"](e)
        }
        ,
        t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        t._getContainer = function() {
            return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
        }
        ,
        t._getAttachment = function(t) {
            return wn[t.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                else if (t !== xn) {
                    var e = t === kn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = t === kn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    p(i.element).on(e, i.config.selector, function(t) {
                        return i._enter(t)
                    }).on(n, i.config.selector, function(t) {
                        return i._leave(t)
                    })
                }
            }),
            p(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide()
            }),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            p(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Ln : kn] = !0),
            p(e.getTipElement()).hasClass(An) || e._hoverState === Cn ? e._hoverState = Cn : (clearTimeout(e._timeout),
            e._hoverState = Cn,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === Cn && e.show()
            }, e.config.delay.show) : e.show())
        }
        ,
        t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            p(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Ln : kn] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = Sn,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === Sn && e.hide()
            }, e.config.delay.hide) : e.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(t) {
            return "number" == typeof (t = l({}, this.constructor.Default, p(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            m.typeCheckConfig(mn, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        t._cleanTipClass = function() {
            var t = p(this.getTipElement())
              , e = t.attr("class").match(En);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(t) {
            var e = t.instance;
            this.tip = e.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        t._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (p(t).removeClass(In),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = p(this).data(gn)
                  , e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                p(this).data(gn, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Tn
            }
        }, {
            key: "NAME",
            get: function() {
                return mn
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return gn
            }
        }, {
            key: "Event",
            get: function() {
                return Dn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return _n
            }
        }, {
            key: "DefaultType",
            get: function() {
                return bn
            }
        }]),
        i
    }();
    p.fn[mn] = Hn._jQueryInterface,
    p.fn[mn].Constructor = Hn,
    p.fn[mn].noConflict = function() {
        return p.fn[mn] = vn,
        Hn._jQueryInterface
    }
    ;
    var jn = "popover"
      , Rn = "bs.popover"
      , Fn = "." + Rn
      , Mn = p.fn[jn]
      , Wn = "bs-popover"
      , Un = new RegExp("(^|\\s)" + Wn + "\\S+","g")
      , Bn = l({}, Hn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , qn = l({}, Hn.DefaultType, {
        content: "(string|element|function)"
    })
      , Kn = "fade"
      , Qn = "show"
      , Yn = ".popover-header"
      , Vn = ".popover-body"
      , Xn = {
        HIDE: "hide" + Fn,
        HIDDEN: "hidden" + Fn,
        SHOW: "show" + Fn,
        SHOWN: "shown" + Fn,
        INSERTED: "inserted" + Fn,
        CLICK: "click" + Fn,
        FOCUSIN: "focusin" + Fn,
        FOCUSOUT: "focusout" + Fn,
        MOUSEENTER: "mouseenter" + Fn,
        MOUSELEAVE: "mouseleave" + Fn
    }
      , zn = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this
        }
        n = t,
        (e = i).prototype = Object.create(n.prototype),
        (e.prototype.constructor = e).__proto__ = n;
        var o = i.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        o.addAttachmentClass = function(t) {
            p(this.getTipElement()).addClass(Wn + "-" + t)
        }
        ,
        o.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0],
            this.tip
        }
        ,
        o.setContent = function() {
            var t = p(this.getTipElement());
            this.setElementContent(t.find(Yn), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(Vn), e),
            t.removeClass(Kn + " " + Qn)
        }
        ,
        o._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        o._cleanTipClass = function() {
            var t = p(this.getTipElement())
              , e = t.attr("class").match(Un);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = p(this).data(Rn)
                  , e = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                p(this).data(Rn, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Bn
            }
        }, {
            key: "NAME",
            get: function() {
                return jn
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Rn
            }
        }, {
            key: "Event",
            get: function() {
                return Xn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Fn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return qn
            }
        }]),
        i
    }(Hn);
    p.fn[jn] = zn._jQueryInterface,
    p.fn[jn].Constructor = zn,
    p.fn[jn].noConflict = function() {
        return p.fn[jn] = Mn,
        zn._jQueryInterface
    }
    ;
    var Gn = "scrollspy"
      , Jn = "bs.scrollspy"
      , Zn = "." + Jn
      , $n = p.fn[Gn]
      , ti = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , ei = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , ni = {
        ACTIVATE: "activate" + Zn,
        SCROLL: "scroll" + Zn,
        LOAD_DATA_API: "load" + Zn + ".data-api"
    }
      , ii = "dropdown-item"
      , oi = "active"
      , ri = '[data-spy="scroll"]'
      , si = ".nav, .list-group"
      , ai = ".nav-link"
      , li = ".nav-item"
      , ci = ".list-group-item"
      , hi = ".dropdown"
      , ui = ".dropdown-item"
      , fi = ".dropdown-toggle"
      , di = "offset"
      , pi = "position"
      , mi = function() {
        function n(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " " + ai + "," + this._config.target + " " + ci + "," + this._config.target + " " + ui,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            p(this._scrollElement).on(ni.SCROLL, function(t) {
                return n._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? di : pi
              , o = "auto" === this._config.method ? t : this._config.method
              , r = o === pi ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, n = m.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)),
                e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height)
                        return [p(e)[o]().top + r, n]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            p.removeData(this._element, Jn),
            p(this._scrollElement).off(Zn),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(t) {
            if ("string" != typeof (t = l({}, ti, "object" == typeof t && t ? t : {})).target) {
                var e = p(t.target).attr("id");
                e || (e = m.getUID(Gn),
                p(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return m.typeCheckConfig(Gn, t, ei),
            t
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , n = p([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(ii) ? (n.closest(hi).find(fi).addClass(oi),
            n.addClass(oi)) : (n.addClass(oi),
            n.parents(si).prev(ai + ", " + ci).addClass(oi),
            n.parents(si).prev(li).children(ai).addClass(oi)),
            p(this._scrollElement).trigger(ni.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                return t.classList.contains(oi)
            }).forEach(function(t) {
                return t.classList.remove(oi)
            })
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = p(this).data(Jn);
                if (t || (t = new n(this,"object" == typeof e && e),
                p(this).data(Jn, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ti
            }
        }]),
        n
    }();
    p(window).on(ni.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(ri)), e = t.length; e--; ) {
            var n = p(t[e]);
            mi._jQueryInterface.call(n, n.data())
        }
    }),
    p.fn[Gn] = mi._jQueryInterface,
    p.fn[Gn].Constructor = mi,
    p.fn[Gn].noConflict = function() {
        return p.fn[Gn] = $n,
        mi._jQueryInterface
    }
    ;
    var gi = "bs.tab"
      , _i = "." + gi
      , vi = p.fn.tab
      , yi = {
        HIDE: "hide" + _i,
        HIDDEN: "hidden" + _i,
        SHOW: "show" + _i,
        SHOWN: "shown" + _i,
        CLICK_DATA_API: "click" + _i + ".data-api"
    }
      , Ei = "dropdown-menu"
      , bi = "active"
      , wi = "disabled"
      , Ti = "fade"
      , Ci = "show"
      , Si = ".dropdown"
      , Di = ".nav, .list-group"
      , Ii = ".active"
      , Ai = "> li > .active"
      , Oi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , Ni = ".dropdown-toggle"
      , ki = "> .dropdown-menu .active"
      , Li = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(bi) || p(this._element).hasClass(wi))) {
                var t, i, e = p(this._element).closest(Di)[0], o = m.getSelectorFromElement(this._element);
                if (e) {
                    var r = "UL" === e.nodeName || "OL" === e.nodeName ? Ai : Ii;
                    i = (i = p.makeArray(p(e).find(r)))[i.length - 1]
                }
                var s = p.Event(yi.HIDE, {
                    relatedTarget: this._element
                })
                  , a = p.Event(yi.SHOW, {
                    relatedTarget: i
                });
                if (i && p(i).trigger(s),
                p(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)),
                    this._activate(this._element, e);
                    var l = function() {
                        var t = p.Event(yi.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , e = p.Event(yi.SHOWN, {
                            relatedTarget: i
                        });
                        p(i).trigger(t),
                        p(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()
                }
            }
        }
        ,
        t.dispose = function() {
            p.removeData(this._element, gi),
            this._element = null
        }
        ,
        t._activate = function(t, e, n) {
            var i = this
              , o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? p(e).children(Ii) : p(e).find(Ai))[0]
              , r = n && o && p(o).hasClass(Ti)
              , s = function() {
                return i._transitionComplete(t, o, n)
            };
            if (o && r) {
                var a = m.getTransitionDurationFromElement(o);
                p(o).removeClass(Ci).one(m.TRANSITION_END, s).emulateTransitionEnd(a)
            } else
                s()
        }
        ,
        t._transitionComplete = function(t, e, n) {
            if (e) {
                p(e).removeClass(bi);
                var i = p(e.parentNode).find(ki)[0];
                i && p(i).removeClass(bi),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (p(t).addClass(bi),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            m.reflow(t),
            p(t).addClass(Ci),
            t.parentNode && p(t.parentNode).hasClass(Ei)) {
                var o = p(t).closest(Si)[0];
                if (o) {
                    var r = [].slice.call(o.querySelectorAll(Ni));
                    p(r).addClass(bi)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = p(this)
                  , e = t.data(gi);
                if (e || (e = new i(this),
                t.data(gi, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }]),
        i
    }();
    p(document).on(yi.CLICK_DATA_API, Oi, function(t) {
        t.preventDefault(),
        Li._jQueryInterface.call(p(this), "show")
    }),
    p.fn.tab = Li._jQueryInterface,
    p.fn.tab.Constructor = Li,
    p.fn.tab.noConflict = function() {
        return p.fn.tab = vi,
        Li._jQueryInterface
    }
    ;
    var Pi = "toast"
      , xi = "bs.toast"
      , Hi = "." + xi
      , ji = p.fn[Pi]
      , Ri = {
        CLICK_DISMISS: "click.dismiss" + Hi,
        HIDE: "hide" + Hi,
        HIDDEN: "hidden" + Hi,
        SHOW: "show" + Hi,
        SHOWN: "shown" + Hi
    }
      , Fi = "fade"
      , Mi = "hide"
      , Wi = "show"
      , Ui = "showing"
      , Bi = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , qi = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , Ki = '[data-dismiss="toast"]'
      , Qi = function() {
        function i(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.show = function() {
            var t = this;
            p(this._element).trigger(Ri.SHOW),
            this._config.animation && this._element.classList.add(Fi);
            var e = function() {
                t._element.classList.remove(Ui),
                t._element.classList.add(Wi),
                p(t._element).trigger(Ri.SHOWN),
                t._config.autohide && t.hide()
            };
            if (this._element.classList.remove(Mi),
            this._element.classList.add(Ui),
            this._config.animation) {
                var n = m.getTransitionDurationFromElement(this._element);
                p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        t.hide = function(t) {
            var e = this;
            this._element.classList.contains(Wi) && (p(this._element).trigger(Ri.HIDE),
            t ? this._close() : this._timeout = setTimeout(function() {
                e._close()
            }, this._config.delay))
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(Wi) && this._element.classList.remove(Wi),
            p(this._element).off(Ri.CLICK_DISMISS),
            p.removeData(this._element, xi),
            this._element = null,
            this._config = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, qi, p(this._element).data(), "object" == typeof t && t ? t : {}),
            m.typeCheckConfig(Pi, t, this.constructor.DefaultType),
            t
        }
        ,
        t._setListeners = function() {
            var t = this;
            p(this._element).on(Ri.CLICK_DISMISS, Ki, function() {
                return t.hide(!0)
            })
        }
        ,
        t._close = function() {
            var t = this
              , e = function() {
                t._element.classList.add(Mi),
                p(t._element).trigger(Ri.HIDDEN)
            };
            if (this._element.classList.remove(Wi),
            this._config.animation) {
                var n = m.getTransitionDurationFromElement(this._element);
                p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = p(this)
                  , e = t.data(xi);
                if (e || (e = new i(this,"object" == typeof n && n),
                t.data(xi, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](this)
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.2.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Bi
            }
        }]),
        i
    }();
    p.fn[Pi] = Qi._jQueryInterface,
    p.fn[Pi].Constructor = Qi,
    p.fn[Pi].noConflict = function() {
        return p.fn[Pi] = ji,
        Qi._jQueryInterface
    }
    ,
    function() {
        if ("undefined" == typeof p)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = p.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(),
    t.Util = m,
    t.Alert = g,
    t.Button = k,
    t.Carousel = at,
    t.Collapse = Tt,
    t.Dropdown = ze,
    t.Modal = pn,
    t.Popover = zn,
    t.Scrollspy = mi,
    t.Tab = Li,
    t.Toast = Qi,
    t.Tooltip = Hn,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function(a, d, p) {
    "use strict";
    a.fn.scrollUp = function(l) {
        a.data(p.body, "scrollUp") || (a.data(p.body, "scrollUp", !0),
        a.fn.scrollUp.init(l))
    }
    ,
    a.fn.scrollUp.init = function(l) {
        var o, e, r, s, t, c, i = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, l), n = !1;
        switch (c = i.scrollTrigger ? a(i.scrollTrigger) : a("<a/>", {
            id: i.scrollName,
            href: "#top"
        }),
        i.scrollTitle && c.attr("title", i.scrollTitle),
        c.appendTo("body"),
        i.scrollImg || i.scrollTrigger || c.html(i.scrollText),
        c.css({
            display: "none",
            position: "fixed",
            zIndex: i.zIndex
        }),
        i.activeOverlay && a("<div/>", {
            id: i.scrollName + "-active"
        }).css({
            position: "absolute",
            top: i.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + i.activeOverlay,
            zIndex: i.zIndex
        }).appendTo("body"),
        i.animation) {
        case "fade":
            o = "fadeIn",
            e = "fadeOut",
            r = i.animationSpeed;
            break;
        case "slide":
            o = "slideDown",
            e = "slideUp",
            r = i.animationSpeed;
            break;
        default:
            o = "show",
            e = "hide",
            r = 0
        }
        s = "top" === i.scrollFrom ? i.scrollDistance : a(p).height() - a(d).height() - i.scrollDistance,
        a(d).scroll(function() {
            a(d).scrollTop() > s ? n || (c[o](r),
            n = !0) : n && (c[e](r),
            n = !1)
        }),
        i.scrollTarget ? "number" == typeof i.scrollTarget ? t = i.scrollTarget : "string" == typeof i.scrollTarget && (t = Math.floor(a(i.scrollTarget).offset().top)) : t = 0,
        c.click(function(l) {
            l.preventDefault(),
            a("html, body").animate({
                scrollTop: t
            }, i.scrollSpeed, i.easingType)
        })
    }
    ,
    a.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    },
    a.fn.scrollUp.destroy = function(l) {
        a.removeData(p.body, "scrollUp"),
        a("#" + a.fn.scrollUp.settings.scrollName).remove(),
        a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(),
        7 <= a.fn.jquery.split(".")[1] ? a(d).off("scroll", l) : a(d).unbind("scroll", l)
    }
    ,
    a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);

/*!
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
        this.options = a.extend({}, e.Defaults, c),
        this.$element = a(b),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)),
        a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)),
        a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    e.Type = {
        Event: "event",
        State: "state"
    },
    e.Plugins = {},
    e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || ""
              , c = !this.settings.autoWidth
              , d = this.settings.rtl
              , e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e),
            a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , c = null
              , d = this._items.length
              , e = !this.settings.autoWidth
              , f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--; )
                c = this._mergers[d],
                c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                a.items.merge = c > 1 || a.items.merge,
                f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = []
              , c = this._items
              , d = this.settings
              , e = Math.max(2 * d.items, 4)
              , f = 2 * Math.ceil(c.length / 2)
              , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
              , h = ""
              , i = "";
            for (g /= 2; g > 0; )
                b.push(this.normalize(b.length / 2, !0)),
                h += c[b[b.length - 1]][0].outerHTML,
                b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                i = c[b[b.length - 1]][0].outerHTML + i,
                g -= 1;
            this._clones = b,
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                d = f[c - 1] || 0,
                e = this._widths[this.relative(c)] + this.settings.margin,
                f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding
              , b = this._coordinates
              , c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length
              , c = !this.settings.autoWidth
              , d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--; )
                    a.css.width = this._widths[this.relative(b)],
                    d.eq(b).css(a.css);
            else
                c && (a.css.width = a.items.width,
                d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0,
            a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
            this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0,
            d = this._coordinates.length; c < d; c++)
                a = this._coordinates[c - 1] || 0,
                b = Math.abs(this._coordinates[c]) + f * e,
                (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(a("<div/>", {
            class: this.settings.stageOuterClass
        })),
        this.$element.append(this.$stage.parent()))
    }
    ,
    e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length)
            return this._items = b.get().map(function(b) {
                return a(b)
            }),
            this._mergers = this._items.map(function() {
                return 1
            }),
            void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }
    ,
    e.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"),
            b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
            c = this.$element.children(b).width(),
            a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    e.prototype.setup = function() {
        var b = this.viewport()
          , c = this.options.responsive
          , d = -1
          , e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }),
        e = a.extend({}, this.options, c[d]),
        "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
        delete e.responsive,
        e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }),
        this._breakpoint = d,
        this.settings = e,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ,
    e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), e = {}; b < c; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
            b++;
        this._invalidated = {},
        !this.is("valid") && this.enter("valid")
    }
    ,
    e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    e.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer),
        this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))))
    }
    ,
    e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }
    ,
    e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(),
        d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }),
        this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = a(b.target),
        this._drag.stage.start = d,
        this._drag.stage.current = d,
        this._drag.pointer = this.pointer(b),
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
        a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    e.prototype.onDragMove = function(a) {
        var b = null
          , c = null
          , d = null
          , e = this.difference(this._drag.pointer, this.pointer(a))
          , f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(),
        this.settings.loop ? (b = this.coordinates(this.minimum()),
        c = this.coordinates(this.maximum() + 1) - b,
        f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
        f.x = Math.max(Math.min(f.x, b + d), c + d)),
        this._drag.stage.current = f,
        this.animate(f.x))
    }
    ,
    e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b))
          , e = this._drag.stage.current
          , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = f,
        (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    e.prototype.closest = function(b, c) {
        var e = -1
          , f = 30
          , g = this.width()
          , h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
            -1 === e
        }, this)),
        this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
    }
    ,
    e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"),
        this.trigger("translate")),
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }
    ,
    e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }
    ,
    e.prototype.current = function(a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)),
            this._current = a,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0,
        this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function(a, b) {
            return b
        })
    }
    ,
    e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ,
    e.prototype.normalize = function(a, b) {
        var c = this._items.length
          , e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
        a
    }
    ,
    e.prototype.relative = function(a) {
        return a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ,
    e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop)
            f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if (b = this._items.length)
                for (c = this._items[--b].width(),
                d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); )
                    ;
            f = b + 1
        } else
            f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2),
        Math.max(f, 0)
    }
    ,
    e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ,
    e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ,
    e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ,
    e.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , e = c + this._items.length
          , f = function(a) {
            return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }
    ,
    e.prototype.speed = function(a) {
        return a !== d && (this._speed = a),
        this._speed
    }
    ,
    e.prototype.coordinates = function(b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
        f = b + 1),
        c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
        c = Math.ceil(c))
    }
    ,
    e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }
    ,
    e.prototype.to = function(a, b) {
        var c = this.current()
          , d = null
          , e = a - this.relative(c)
          , f = (e > 0) - (e < 0)
          , g = this._items.length
          , h = this.minimum()
          , i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
        a = c + e,
        (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e,
        a = d,
        this.reset(c))) : this.settings.rewind ? (i += 1,
        a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update()
    }
    ,
    e.prototype.next = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) + 1, a)
    }
    ,
    e.prototype.prev = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) - 1, a)
    }
    ,
    e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        d
    }
    ,
    e.prototype.replace = function(b) {
        this.$stage.empty(),
        this._items = [],
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b),
            this.$stage.append(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0),
        b = b instanceof jQuery ? b : a(b),
        this.trigger("add", {
            content: b,
            position: c
        }),
        b = this.prepare(b),
        0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
        0 !== this._items.length && this._items[c - 1].after(b),
        this._items.push(b),
        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
        this._items.splice(c, 0, b),
        this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: b,
            position: c
        })
    }
    ,
    e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ,
    e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"),
            c = a(c),
            a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src),
                c.css("opacity", 1),
                this.leave("pre-loading"),
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }
    ,
    e.prototype.destroy = function() {
        this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer),
        this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins)
            this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
        case "<":
            return d ? a > c : a < c;
        case ">":
            return d ? a < c : a > c;
        case ">=":
            return d ? a <= c : a >= c;
        case "<=":
            return d ? a >= c : a <= c
        }
    }
    ,
    e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ,
    e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , i = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
        }).join("-").toLowerCase())
          , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }),
        this.register({
            type: e.Type.Event,
            name: b
        }),
        this.$element.trigger(j),
        this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
    }
    ,
    e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this))
    }
    ,
    e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }
    ,
    e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}),
            !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }
                ,
                a.event.special[b.name].owl = !0
            }
        } else
            b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
            this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
    }
    ,
    e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ,
    e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ,
    e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event,
        a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
        a.pageX ? (c.x = a.pageX,
        c.y = a.pageY) : (c.x = a.clientX,
        c.y = a.clientY),
        c
    }
    ,
    e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }
    ,
    e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }
    ,
    a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this)
              , f = d.data("owl.carousel");
            f || (f = new e(this,"object" == typeof b && b),
            d.data("owl.carousel", f),
            a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }),
                f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                    f[c].apply(this, [].slice.call(arguments, 1)),
                    this.release([c]))
                }, f))
            })),
            "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }
    ,
    a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    e.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings
                      , e = c.center && Math.ceil(c.items / 2) || c.items
                      , f = c.center && -1 * e || 0
                      , g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f
                      , h = this._core.clones().length
                      , i = a.proxy(function(a, b) {
                        this.load(b)
                    }, this);
                    for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager,
                    c.loop && (g -= c.lazyLoadEager,
                    e++)); f++ < e; )
                        this.load(h / 2 + this._core.relative(g)),
                        h && a.each(this._core.clones(this._core.relative(g)), i),
                        g++
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    },
    e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c)
          , e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"),
            f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("srcset", g) : (e = new Image,
            e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this),
            e.src = g)
        }, this)),
        this._loaded.push(d.get(0)))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c,
        this._previousHeight = null,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update()
        }),
        a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId),
            d._intervalId = setTimeout(function() {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    e.prototype.update = function() {
        var b = this._core._current
          , c = b + this._core.settings.items
          , d = this._core.settings.lazyLoad
          , e = this._core.$stage.children().toArray().slice(b, c)
          , f = []
          , g = 0;
        a.each(e, function(b, c) {
            f.push(a(c).height())
        }),
        g = Math.max.apply(null, f),
        g <= 1 && d && this._previousHeight && (g = this._previousHeight),
        this._previousHeight = g,
        this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"),
                    this.fetch(c, a(b.content)))
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    e.prototype.fetch = function(a, b) {
        var c = function() {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
          , e = a.attr("data-width") || this._core.settings.videoWidth
          , f = a.attr("data-height") || this._core.settings.videoHeight
          , g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        d[3].indexOf("youtu") > -1)
            c = "youtube";
        else if (d[3].indexOf("vimeo") > -1)
            c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6],
        this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        },
        b.attr("data-video", g),
        this.thumbnail(a, this._videos[g])
    }
    ,
    e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(c) {
            e = '<div class="owl-video-play-icon"></div>',
            d = k.lazyLoad ? a("<div/>", {
                class: "owl-video-tn " + j,
                srcType: c
            }) : a("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + c + ")"
            }),
            b.after(d),
            b.after(e)
        };
        if (b.wrap(a("<div/>", {
            class: "owl-video-wrapper",
            style: g
        })),
        this._core.settings.lazyLoad && (i = "data-src",
        j = "owl-lazy"),
        h.length)
            return l(h.attr(i)),
            h.remove(),
            !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
        l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large,
                l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url,
                l(f)
            }
        })
    }
    ,
    e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    e.prototype.play = function(b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        e = this._core.items(this._core.relative(e.index())),
        this._core.reset(e.index()),
        c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),
        c.attr("height", h),
        c.attr("width", g),
        "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
        a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
        this._playing = e.addClass("owl-video-playing"))
    }
    ,
    e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
        this.core.options = a.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = d,
        this.next = d,
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)),
            f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }
    ,
    e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }
    ,
    e.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
        c = c || this._core.settings.autoplayTimeout,
        e = Math.min(this._time % (this._timeout || c), c),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : b.clearTimeout(this._call),
        this._time += this.read() % c - e,
        this._timeout = c,
        this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }
    ,
    e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        b.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        b.clearTimeout(this._call))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)),
        this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)),
        c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(),
            this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides)
            this._core[b] = a.proxy(this[b], this)
    }
    ,
    e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
        g.dots || "page" == g.slideBy)
            for (this._pages = [],
            a = d,
            b = 0,
            c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                        start: Math.min(f, a - d),
                        end: a - d + h - 1
                    }),
                    Math.min(f, a - d) === f)
                        break;
                    b = 0,
                    ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }
    ,
    e.prototype.draw = function() {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
        c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !c.dots || d),
        c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
        c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }
    ,
    e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }
    ,
    e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
        d = this._pages.length,
        b ? ++c : --c,
        c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
        d = this._core.items().length,
        b ? c += e.slideBy : c -= e.slideBy),
        c
    }
    ,
    e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ,
    e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ,
    e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c)
                        return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current()))
                      , e = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e)
                        return;
                    b.location.hash = e
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers),
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1)
              , e = this._core.$stage.children()
              , f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    },
    e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1
          , f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d)
                return e = !c || b,
                !1
        }),
        e
    }
    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , j = {
        csstransforms: function() {
            return !!e("transform")
        },
        csstransforms3d: function() {
            return !!e("perspective")
        },
        csstransitions: function() {
            return !!e("transition")
        },
        cssanimations: function() {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")),
    a.support.transition.end = i.transition.end[a.support.transition]),
    j.cssanimations() && (a.support.animation = new String(f("animation")),
    a.support.animation.end = i.animation.end[a.support.animation]),
    j.csstransforms() && (a.support.transform = new String(f("transform")),
    a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/*!
 * Slick v1.8.1
 * Author: Ken Wheeler
 * Website: http://kenwheeler.github.io
 */
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            i.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = i(t),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            s = i(t).data("slick") || {},
            n.options = i.extend({}, n.defaults, o, s),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = i.proxy(n.autoPlay, n),
            n.autoPlayClear = i.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
            n.changeSlide = i.proxy(n.changeSlide, n),
            n.clickHandler = i.proxy(n.clickHandler, n),
            n.selectHandler = i.proxy(n.selectHandler, n),
            n.setPosition = i.proxy(n.setPosition, n),
            n.swipeHandler = i.proxy(n.swipeHandler, n),
            n.dragHandler = i.proxy(n.dragHandler, n),
            n.keyHandler = i.proxy(n.keyHandler, n),
            n.instanceUid = e++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t)
            o = t,
            t = null;
        else if (t < 0 || t >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, t) {
        var o = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(o),
        t && setTimeout(function() {
            s.disableTransition(),
            t.call()
        }, s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)),
        t
    }
    ,
    e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0; e <= o.getDotCount(); e += 1)
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots),
            o.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            l = s),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }
    ,
    e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        n = r.slideCount % r.options.slidesToScroll != 0,
        o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 === o ? r.options.slidesToScroll : o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;
        case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(),
        t = 0,
        i > e[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i))
    }
    ,
    e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    e.prototype.disableTransition = function(i) {
        var e = this
          , t = {};
        t[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
        r = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        i = 2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return e = n,
                !1
        }),
        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , t = Math.ceil(e.slideCount / e.options.slidesToShow)
          , o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }),
            -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }),
            i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this)
                  , t = i(this).attr("data-lazy")
                  , o = i(this).attr("data-srcset")
                  , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o),
                        s && e.attr("sizes", s)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(o + n.options.slidesToShow),
        !0 === n.options.fade && (o > 0 && o--,
        s <= n.slideCount && s++)),
        t = n.$slider.find(".slick-slide").slice(o, s),
        "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                r < 0 && (r = n.slideCount - 1),
                t = (t = t.add(d.eq(r))).add(d.eq(l)),
                r--,
                l++;
        e(t),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(),
        i.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(),
        i.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(),
        o = t.attr("data-lazy"),
        s = t.attr("data-srcset"),
        n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s),
            n && t.attr("sizes", n)),
            t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === l.options.adaptiveHeight && l.setPosition(),
            l.$slider.trigger("lazyLoaded", [l, t, o]),
            l.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            l.$slider.trigger("lazyLoadError", [l, t, o]),
            l.progressiveLazyLoad())
        }
        ,
        r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }
    ,
    e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        t = s.currentSlide,
        s.destroy(!0),
        i.extend(s, s.initials, {
            currentSlide: t
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; )
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(t),
                    s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
        !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
        o.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1,
            !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }),
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0],
        l = arguments[1],
        n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
        s = arguments[1],
        l = arguments[2],
        "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            r.options[o] = s;
        else if ("multiple" === n)
            i.each(o, function(i, e) {
                r.options[i] = e
            });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive))
                    r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    e.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (t = null,
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - o; e -= 1)
                t = e - 1,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1)
                t = e,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(),
        e.interrupted = i
    }
    ,
    e.prototype.selectHandler = function(e) {
        var t = this
          , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
          , s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            d = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1,
            !1;
        if (o.interrupted = !1,
        o.shouldClick = !(o.touchObject.swipeLength > 10),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
        !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        l.touchObject.edgeHit = !1,
        !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return t.touchObject = {},
            !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }
    ,
    i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
            void 0 !== t)
                return t;
        return o
    }
});

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }),
            void 0 !== n ? n : t
        }
        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e),
                n._init()) : (n = new s(o,e),
                a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery,
        a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        o(a))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return o(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , o = i[t] = i[t] || {};
            return o[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n]
                  , r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }
    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)),
            s.isBoxSizeOuter = r,
            i.removeChild(e)
        }
    }
    function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l]
                  , c = s[f]
                  , m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , z = a.borderTopWidth + a.borderBottomWidth
              , I = d && r
              , x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (y + z),
            a.outerWidth = a.width + g,
            a.outerHeight = a.height + v,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i]
              , n = o + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var o = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o)
                    return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                    n.push(i[s])
            }
        }),
        n
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e]
          , n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            clearTimeout(t);
            var e = arguments
              , s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e),
                delete s[n]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t,i);
                l && l.data(t, o, u)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style
      , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , d = o.prototype = Object.create(t.prototype);
    d.constructor = o,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , o = t[e ? "left" : "right"]
          , n = t[i ? "top" : "bottom"]
          , s = parseFloat(o)
          , r = parseFloat(n)
          , a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width),
        n.indexOf("%") != -1 && (r = r / 100 * a.height),
        s = isNaN(s) ? 0 : s,
        r = isNaN(r) ? 0 : r,
        s -= e ? a.paddingLeft : a.paddingRight,
        r -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = s,
        this.position.y = r
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop")
          , n = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[n];
        e[s] = this.getXValue(a),
        e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom"
          , h = o ? "top" : "bottom"
          , d = o ? "bottom" : "top"
          , l = this.position.y + t[u];
        e[h] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , o = this.position.y
          , n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        n && !this.isTransitioning)
            return void this.layoutPosition();
        var s = t - i
          , r = e - o
          , a = {};
        a.transform = this.getTranslate(s, r),
        this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = o ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(u, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[o]),
            o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this),
                delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(u, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n,
        f[n] = this,
        this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , o = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console
      , h = t.jQuery
      , d = function() {}
      , l = 0
      , f = {};
    s.namespace = "outlayer",
    s.Item = n,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype),
    c.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    c._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n]
              , r = new i(s,this);
            o.push(r)
        }
        return o
    }
    ,
    c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    c.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    c._init = c.layout,
    c._resetLayout = function() {
        this.getSize()
    }
    ,
    c.getSize = function() {
        this.size = i(this.element)
    }
    ,
    c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
        this[t] = o ? i(o)[e] : n) : this[t] = 0
    }
    ,
    c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t,
                o.isInstant = e || t.isLayoutInstant,
                i.push(o)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    c._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
        t.moveTo(e, i))
    }
    ,
    c._postLayout = function() {
        this.resizeContainer()
    }
    ,
    c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    c._getContainerSize = d,
    c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }
        function o() {
            r++,
            r == s && i()
        }
        var n = this
          , s = e.length;
        if (!e || !s)
            return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }
    ,
    c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o),
        h)
            if (this.$element = this.$element || h(this.element),
            e) {
                var n = h.Event(e);
                n.type = t,
                this.$element.trigger(n, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    c.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    c.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    c._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o.makeArray(t)
    }
    ,
    c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    c._manageStamp = d,
    c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , o = this._boundingRect
          , n = i(t)
          , s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }
    ,
    c.handleEvent = o.handleEvent,
    c.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    c.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    c.onresize = function() {
        this.resize()
    }
    ,
    o.debounceMethod(s, "onresize", 100),
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    c.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            o.removeFrom(this.items, t)
        }, this)
    }
    ,
    c.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
        delete this.element.outlayerGUID,
        h && h.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }
    ,
    s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.compatOptions = o.extend({}, s.compatOptions),
        i.namespace = t,
        i.data = s.data,
        i.Item = r(n),
        o.htmlInit(i, t),
        h && h.bridget && h.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        o.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    }
    ;
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var o = i.prototype
      , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    o.getSegmentSize = function(t, e) {
        var i = t + e
          , o = "outer" + e;
        if (this._getMeasurement(i, o),
        !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }
    ,
    o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    o.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o),
        n.prototype.constructor = n,
        e && (n.options = e),
        n.prototype.namespace = t,
        i.modes[t] = n,
        n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    o.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter
          , n = this.containerWidth + this.gutter
          , s = n / o
          , r = o - n % o
          , a = r && r < 1 ? "round" : "floor";
        s = Math[a](s),
        this.cols = Math.max(s, 1)
    }
    ,
    o.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , o = e(i);
        this.containerWidth = o && o.innerWidth
    }
    ,
    o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && e < 1 ? "round" : "ceil"
          , o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
            this.colYs[h] = a;
        return r
    }
    ,
    o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    o._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
            e[o] = this._getColGroupY(o, t);
        return e
    }
    ,
    o._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    o._manageStamp = function(t) {
        var i = e(t)
          , o = this._getElementOffset(t)
          , n = this._getOption("originLeft")
          , s = n ? o.left : o.right
          , r = s + i.outerWidth
          , a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1,
        u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , o = i.prototype
      , n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype)
        n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        o
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n]
                  , r = i.sortData[s]
                  , a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s,
    d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }
    ,
    l.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    l._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    l.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    l._init = l.arrange,
    l._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    l._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            o = !0,
            t()
        })
    }
    ,
    l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }
    ,
    l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t);
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return o(e.element, t)
        }
    }
    ,
    l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }
    ,
    l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    }
    ;
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" ")
              , o = i[0]
              , n = o.match(/^\[(.+)\]$/)
              , s = n && n[1]
              , r = e(s, o)
              , a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            }
            : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }
    ,
    l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    l._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    l._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++)
                o = e[i],
                this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < n; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    }
    ;
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }
    ,
    l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i,
        o
    }
    ,
    l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    d
});

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(o) {
    "use strict";
    var n = []
      , e = []
      , i = {
        precision: 100,
        elapse: !1,
        defer: !1
    };
    e.push(/^[0-9]*$/.source),
    e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    e = new RegExp(e.join("|"));
    var g = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    };
    var a = function(t, e, s) {
        this.el = t,
        this.$el = o(t),
        this.interval = null,
        this.offset = {},
        this.options = o.extend({}, i),
        this.instanceNumber = n.length,
        n.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        s && ("function" == typeof s ? (this.$el.on("update.countdown", s),
        this.$el.on("stoped.countdown", s),
        this.$el.on("finish.countdown", s)) : this.options = o.extend({}, i, s)),
        this.setFinalDate(e),
        !1 === this.options.defer && this.start()
    };
    o.extend(a.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var t = this;
            this.update(),
            this.interval = setInterval(function() {
                t.update.call(t)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval),
            this.interval = null,
            this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this),
            n[this.instanceNumber] = null,
            delete this.$el.data().countdownInstance
        },
        setFinalDate: function(t) {
            this.finalDate = function(t) {
                if (t instanceof Date)
                    return t;
                if (String(t).match(e))
                    return String(t).match(/^[0-9]*$/) && (t = Number(t)),
                    String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")),
                    new Date(t);
                throw new Error("Couldn't cast `" + t + "` to a date object.")
            }(t)
        },
        update: function() {
            if (0 !== this.$el.closest("html").length) {
                var t, e = void 0 !== o._data(this.el, "events"), s = new Date;
                t = this.finalDate.getTime() - s.getTime(),
                t = Math.ceil(t / 1e3),
                t = !this.options.elapse && t < 0 ? 0 : Math.abs(t),
                this.totalSecsLeft !== t && e && (this.totalSecsLeft = t,
                this.elapsed = s >= this.finalDate,
                this.offset = {
                    seconds: this.totalSecsLeft % 60,
                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                    weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                    years: Math.abs(this.finalDate.getFullYear() - s.getFullYear()),
                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                    totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                    totalMinutes: Math.floor(this.totalSecsLeft / 60),
                    totalSeconds: this.totalSecsLeft
                },
                this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(),
                this.dispatchEvent("finish")))
            } else
                this.remove()
        },
        dispatchEvent: function(t) {
            var v, e = o.Event(t + ".countdown");
            e.finalDate = this.finalDate,
            e.elapsed = this.elapsed,
            e.offset = o.extend({}, this.offset),
            e.strftime = (v = this.offset,
            function(t) {
                var e, s, i, o, n, a, h = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (h)
                    for (var l = 0, r = h.length; l < r; ++l) {
                        var c = h[l].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                          , f = (e = c[0],
                        s = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"),
                        new RegExp(s))
                          , u = c[1] || ""
                          , p = c[3] || ""
                          , d = null;
                        c = c[2],
                        g.hasOwnProperty(c) && (d = g[c],
                        d = Number(v[d])),
                        null !== d && ("!" === u && (o = d,
                        a = n = void 0,
                        n = "s",
                        a = "",
                        (i = p) && (1 === (i = i.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = i[0] : (a = i[0],
                        n = i[1])),
                        d = 1 < Math.abs(o) ? n : a),
                        "" === u && d < 10 && (d = "0" + d.toString()),
                        t = t.replace(f, d.toString()))
                    }
                return t = t.replace(/%%/, "%")
            }
            ),
            this.$el.trigger(e)
        }
    }),
    o.fn.countdown = function() {
        var i = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var t = o(this).data("countdown-instance");
            if (void 0 !== t) {
                var e = n[t]
                  , s = i[0];
                a.prototype.hasOwnProperty(s) ? e[s].apply(e, i.slice(1)) : null === String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (e.setFinalDate.call(e, s),
                e.start()) : o.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, s))
            } else
                new a(this,i[0],i[1])
        })
    }
});

/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
!function(a) {
    "use strict";
    a.fn.fitVids = function(t) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var e = document.head || document.getElementsByTagName("head")[0]
              , r = document.createElement("div");
            r.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
            e.appendChild(r.childNodes[1])
        }
        return t && a.extend(i, t),
        this.each(function() {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && t.push(i.customSelector);
            var r = ".fitvidsignore";
            i.ignore && (r = r + ", " + i.ignore);
            var e = a(this).find(t.join(","));
            (e = (e = e.not("object object")).not(r)).each(function() {
                var t = a(this);
                if (!(0 < t.parents(r).length || "embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9),
                    t.attr("width", 16));
                    var e = ("object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height()) / (isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10));
                    if (!t.attr("name")) {
                        var i = "fitvid" + a.fn.fitVids._count;
                        t.attr("name", i),
                        a.fn.fitVids._count++
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"),
                    t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
    ,
    a.fn.fitVids._count = 0
}(window.jQuery || window.Zepto);

/*!
 * jQuery elevateZoom 3.0.8
 *
 *	Demo's and documentation:
 *	www.elevateweb.co.uk/image-zoom
 *
 *	Copyright (c) 2012 Andrew Eades
 *	www.elevateweb.co.uk
 *
 *	Dual licensed under the GPL and MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
"function" != typeof Object.create && (Object.create = function(o) {
    function e() {}
    return e.prototype = o,
    new e
}
),
function(d, o, e, i) {
    var t = {
        init: function(o, e) {
            var i = this;
            i.elem = e,
            i.$elem = d(e),
            i.imageSrc = i.$elem.data("zoom-image") ? i.$elem.data("zoom-image") : i.$elem.attr("src"),
            i.options = d.extend({}, d.fn.elevateZoom.options, o),
            i.options.tint && (i.options.lensColour = "none",
            i.options.lensOpacity = "1"),
            "inner" == i.options.zoomType && (i.options.showLens = !1),
            i.$elem.parent().removeAttr("title").removeAttr("alt"),
            i.zoomImage = i.imageSrc,
            i.refresh(1),
            d("#" + i.options.gallery + " a").click(function(o) {
                return i.options.galleryActiveClass && (d("#" + i.options.gallery + " a").removeClass(i.options.galleryActiveClass),
                d(this).addClass(i.options.galleryActiveClass)),
                o.preventDefault(),
                d(this).data("zoom-image") ? i.zoomImagePre = d(this).data("zoom-image") : i.zoomImagePre = d(this).data("image"),
                i.swaptheimage(d(this).data("image"), i.zoomImagePre),
                !1
            })
        },
        refresh: function(o) {
            var e = this;
            setTimeout(function() {
                e.fetch(e.imageSrc)
            }, o || e.options.refresh)
        },
        fetch: function(o) {
            var e = this
              , i = new Image;
            i.onload = function() {
                e.largeWidth = i.width,
                e.largeHeight = i.height,
                e.startZoom(),
                e.currentImage = e.imageSrc,
                e.options.onZoomedImageLoaded(e.$elem)
            }
            ,
            i.src = o
        },
        startZoom: function() {
            var i = this;
            if (i.nzWidth = i.$elem.width(),
            i.nzHeight = i.$elem.height(),
            i.isWindowActive = !1,
            i.isLensActive = !1,
            i.isTintActive = !1,
            i.overWindow = !1,
            i.options.imageCrossfade && (i.zoomWrap = i.$elem.wrap('<div style="height:' + i.nzHeight + "px;width:" + i.nzWidth + 'px;" class="zoomWrapper" />'),
            i.$elem.css("position", "absolute")),
            i.zoomLock = 1,
            i.scrollingLock = !1,
            i.changeBgSize = !1,
            i.currentZoomLevel = i.options.zoomLevel,
            i.nzOffset = i.$elem.offset(),
            i.widthRatio = i.largeWidth / i.currentZoomLevel / i.nzWidth,
            i.heightRatio = i.largeHeight / i.currentZoomLevel / i.nzHeight,
            "window" == i.options.zoomType && (i.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(i.options.zoomWindowBgColour) + ";width: " + String(i.options.zoomWindowWidth) + "px;height: " + String(i.options.zoomWindowHeight) + "px;float: left;background-size: " + i.largeWidth / i.currentZoomLevel + "px " + i.largeHeight / i.currentZoomLevel + "px;display: none;z-index:100;border: " + String(i.options.borderSize) + "px solid " + i.options.borderColour + ";background-repeat: no-repeat;position: absolute;"),
            "inner" == i.options.zoomType) {
                var o = i.$elem.css("border-left-width");
                i.zoomWindowStyle = "overflow: hidden;margin-left: " + String(o) + ";margin-top: " + String(o) + ";background-position: 0px 0px;width: " + String(i.nzWidth) + "px;height: " + String(i.nzHeight) + "px;px;float: left;display: none;cursor:" + i.options.cursor + ";px solid " + i.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
            }
            "window" == i.options.zoomType && (i.nzHeight < i.options.zoomWindowWidth / i.widthRatio ? i.lensHeight = i.nzHeight : i.lensHeight = String(i.options.zoomWindowHeight / i.heightRatio),
            i.largeWidth < i.options.zoomWindowWidth ? i.lensHeight = i.nzWidth : i.lensWidth = i.options.zoomWindowWidth / i.widthRatio,
            i.lensStyle = "background-position: 0px 0px;width: " + String(i.options.zoomWindowWidth / i.widthRatio) + "px;height: " + String(i.options.zoomWindowHeight / i.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + i.options.lensOpacity + ";filter: alpha(opacity = " + 100 * i.options.lensOpacity + "); zoom:1;width:" + i.lensWidth + "px;height:" + i.lensHeight + "px;background-color:" + i.options.lensColour + ";cursor:" + i.options.cursor + ";border: " + i.options.lensBorderSize + "px solid " + i.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"),
            i.tintStyle = "display: block;position: absolute;background-color: " + i.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + i.nzWidth + "px;height: " + i.nzHeight + "px;",
            i.lensRound = "",
            "lens" == i.options.zoomType && (i.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(i.options.borderSize) + "px solid " + i.options.borderColour + ";width:" + String(i.options.lensSize) + "px;height:" + String(i.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"),
            "round" == i.options.lensShape && (i.lensRound = "border-top-left-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-top-right-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-bottom-left-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-bottom-right-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;"),
            i.zoomContainer = d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + i.nzOffset.left + "px;top:" + i.nzOffset.top + "px;height:" + i.nzHeight + "px;width:" + i.nzWidth + 'px;"></div>'),
            i.options.zoomEnabled && d("body").append(i.zoomContainer),
            i.options.containLensZoom && "lens" == i.options.zoomType && i.zoomContainer.css("overflow", "hidden"),
            "inner" != i.options.zoomType && (i.zoomLens = d("<div class='zoomLens' style='" + i.lensStyle + i.lensRound + "'>&nbsp;</div>").appendTo(i.zoomContainer).click(function() {
                i.$elem.trigger("click")
            }),
            i.options.tint && (i.tintContainer = d("<div/>").addClass("tintContainer"),
            i.zoomTint = d("<div class='zoomTint' style='" + i.tintStyle + "'></div>"),
            i.zoomLens.wrap(i.tintContainer),
            i.zoomTintcss = i.zoomLens.after(i.zoomTint),
            i.zoomTintImage = d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + i.nzWidth + "px; height: " + i.nzHeight + 'px;" src="' + i.imageSrc + '">').appendTo(i.zoomLens).click(function() {
                i.$elem.trigger("click")
            }))),
            isNaN(i.options.zoomWindowPosition) ? i.zoomWindow = d("<div style='z-index:999;left:" + i.windowOffsetLeft + "px;top:" + i.windowOffsetTop + "px;" + i.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function() {
                i.$elem.trigger("click")
            }) : i.zoomWindow = d("<div style='z-index:999;left:" + i.windowOffsetLeft + "px;top:" + i.windowOffsetTop + "px;" + i.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(i.zoomContainer).click(function() {
                i.$elem.trigger("click")
            }),
            i.zoomWindowContainer = d("<div/>").addClass("zoomWindowContainer").css("width", i.options.zoomWindowWidth),
            i.zoomWindow.wrap(i.zoomWindowContainer),
            "lens" == i.options.zoomType && i.zoomLens.css({
                backgroundImage: "url('" + i.imageSrc + "')"
            }),
            "window" == i.options.zoomType && i.zoomWindow.css({
                backgroundImage: "url('" + i.imageSrc + "')"
            }),
            "inner" == i.options.zoomType && i.zoomWindow.css({
                backgroundImage: "url('" + i.imageSrc + "')"
            }),
            i.$elem.bind("touchmove", function(o) {
                o.preventDefault();
                var e = o.originalEvent.touches[0] || o.originalEvent.changedTouches[0];
                i.setPosition(e)
            }),
            i.zoomContainer.bind("touchmove", function(o) {
                "inner" == i.options.zoomType && i.showHideWindow("show"),
                o.preventDefault();
                var e = o.originalEvent.touches[0] || o.originalEvent.changedTouches[0];
                i.setPosition(e)
            }),
            i.zoomContainer.bind("touchend", function(o) {
                i.showHideWindow("hide"),
                i.options.showLens && i.showHideLens("hide"),
                i.options.tint && "inner" != i.options.zoomType && i.showHideTint("hide")
            }),
            i.$elem.bind("touchend", function(o) {
                i.showHideWindow("hide"),
                i.options.showLens && i.showHideLens("hide"),
                i.options.tint && "inner" != i.options.zoomType && i.showHideTint("hide")
            }),
            i.options.showLens && (i.zoomLens.bind("touchmove", function(o) {
                o.preventDefault();
                var e = o.originalEvent.touches[0] || o.originalEvent.changedTouches[0];
                i.setPosition(e)
            }),
            i.zoomLens.bind("touchend", function(o) {
                i.showHideWindow("hide"),
                i.options.showLens && i.showHideLens("hide"),
                i.options.tint && "inner" != i.options.zoomType && i.showHideTint("hide")
            })),
            i.$elem.bind("mousemove", function(o) {
                0 == i.overWindow && i.setElements("show"),
                i.lastX === o.clientX && i.lastY === o.clientY || (i.setPosition(o),
                i.currentLoc = o),
                i.lastX = o.clientX,
                i.lastY = o.clientY
            }),
            i.zoomContainer.bind("mousemove", function(o) {
                0 == i.overWindow && i.setElements("show"),
                i.lastX === o.clientX && i.lastY === o.clientY || (i.setPosition(o),
                i.currentLoc = o),
                i.lastX = o.clientX,
                i.lastY = o.clientY
            }),
            "inner" != i.options.zoomType && i.zoomLens.bind("mousemove", function(o) {
                i.lastX === o.clientX && i.lastY === o.clientY || (i.setPosition(o),
                i.currentLoc = o),
                i.lastX = o.clientX,
                i.lastY = o.clientY
            }),
            i.options.tint && "inner" != i.options.zoomType && i.zoomTint.bind("mousemove", function(o) {
                i.lastX === o.clientX && i.lastY === o.clientY || (i.setPosition(o),
                i.currentLoc = o),
                i.lastX = o.clientX,
                i.lastY = o.clientY
            }),
            "inner" == i.options.zoomType && i.zoomWindow.bind("mousemove", function(o) {
                i.lastX === o.clientX && i.lastY === o.clientY || (i.setPosition(o),
                i.currentLoc = o),
                i.lastX = o.clientX,
                i.lastY = o.clientY
            }),
            i.zoomContainer.add(i.$elem).mouseenter(function() {
                0 == i.overWindow && i.setElements("show")
            }).mouseleave(function() {
                i.scrollLock || (i.setElements("hide"),
                i.options.onDestroy(i.$elem))
            }),
            "inner" != i.options.zoomType && i.zoomWindow.mouseenter(function() {
                i.overWindow = !0,
                i.setElements("hide")
            }).mouseleave(function() {
                i.overWindow = !1
            }),
            i.options.zoomLevel,
            i.options.minZoomLevel ? i.minZoomLevel = i.options.minZoomLevel : i.minZoomLevel = 2 * i.options.scrollZoomIncrement,
            i.options.scrollZoom && i.zoomContainer.add(i.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(o) {
                i.scrollLock = !0,
                clearTimeout(d.data(this, "timer")),
                d.data(this, "timer", setTimeout(function() {
                    i.scrollLock = !1
                }, 250));
                var e = o.originalEvent.wheelDelta || -1 * o.originalEvent.detail;
                return o.stopImmediatePropagation(),
                o.stopPropagation(),
                o.preventDefault(),
                0 < e / 120 ? i.currentZoomLevel >= i.minZoomLevel && i.changeZoomLevel(i.currentZoomLevel - i.options.scrollZoomIncrement) : i.options.maxZoomLevel ? i.currentZoomLevel <= i.options.maxZoomLevel && i.changeZoomLevel(parseFloat(i.currentZoomLevel) + i.options.scrollZoomIncrement) : i.changeZoomLevel(parseFloat(i.currentZoomLevel) + i.options.scrollZoomIncrement),
                !1
            })
        },
        setElements: function(o) {
            var e = this;
            if (!e.options.zoomEnabled)
                return !1;
            "show" == o && e.isWindowSet && ("inner" == e.options.zoomType && e.showHideWindow("show"),
            "window" == e.options.zoomType && e.showHideWindow("show"),
            e.options.showLens && e.showHideLens("show"),
            e.options.tint && "inner" != e.options.zoomType && e.showHideTint("show")),
            "hide" == o && ("window" == e.options.zoomType && e.showHideWindow("hide"),
            e.options.tint || e.showHideWindow("hide"),
            e.options.showLens && e.showHideLens("hide"),
            e.options.tint && e.showHideTint("hide"))
        },
        setPosition: function(o) {
            var e = this;
            if (!e.options.zoomEnabled)
                return !1;
            e.nzHeight = e.$elem.height(),
            e.nzWidth = e.$elem.width(),
            e.nzOffset = e.$elem.offset(),
            e.options.tint && "inner" != e.options.zoomType && (e.zoomTint.css({
                top: 0
            }),
            e.zoomTint.css({
                left: 0
            })),
            e.options.responsive && !e.options.scrollZoom && e.options.showLens && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? e.lensHeight = e.nzHeight : e.lensHeight = String(e.options.zoomWindowHeight / e.heightRatio),
            e.largeWidth < e.options.zoomWindowWidth ? e.lensWidth = e.nzWidth : e.lensWidth = e.options.zoomWindowWidth / e.widthRatio,
            e.widthRatio = e.largeWidth / e.nzWidth,
            e.heightRatio = e.largeHeight / e.nzHeight,
            "lens" != e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : e.lensHeight = String(e.options.zoomWindowHeight / e.heightRatio),
            e.nzWidth < e.options.zoomWindowHeight / e.heightRatio ? e.lensWidth = e.nzWidth : e.lensWidth = String(e.options.zoomWindowWidth / e.widthRatio),
            e.zoomLens.css("width", e.lensWidth),
            e.zoomLens.css("height", e.lensHeight),
            e.options.tint && (e.zoomTintImage.css("width", e.nzWidth),
            e.zoomTintImage.css("height", e.nzHeight))),
            "lens" == e.options.zoomType && e.zoomLens.css({
                width: String(e.options.lensSize) + "px",
                height: String(e.options.lensSize) + "px"
            })),
            e.zoomContainer.css({
                top: e.nzOffset.top
            }),
            e.zoomContainer.css({
                left: e.nzOffset.left
            }),
            e.mouseLeft = parseInt(o.pageX - e.nzOffset.left),
            e.mouseTop = parseInt(o.pageY - e.nzOffset.top),
            "window" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.zoomLens.height() / 2,
            e.Eboppos = e.mouseTop > e.nzHeight - e.zoomLens.height() / 2 - 2 * e.options.lensBorderSize,
            e.Eloppos = e.mouseLeft < 0 + e.zoomLens.width() / 2,
            e.Eroppos = e.mouseLeft > e.nzWidth - e.zoomLens.width() / 2 - 2 * e.options.lensBorderSize),
            "inner" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.nzHeight / 2 / e.heightRatio,
            e.Eboppos = e.mouseTop > e.nzHeight - e.nzHeight / 2 / e.heightRatio,
            e.Eloppos = e.mouseLeft < 0 + e.nzWidth / 2 / e.widthRatio,
            e.Eroppos = e.mouseLeft > e.nzWidth - e.nzWidth / 2 / e.widthRatio - 2 * e.options.lensBorderSize),
            e.mouseLeft < 0 || e.mouseTop < 0 || e.mouseLeft > e.nzWidth || e.mouseTop > e.nzHeight ? e.setElements("hide") : (e.options.showLens && (e.lensLeftPos = String(Math.floor(e.mouseLeft - e.zoomLens.width() / 2)),
            e.lensTopPos = String(Math.floor(e.mouseTop - e.zoomLens.height() / 2))),
            e.Etoppos && (e.lensTopPos = 0),
            e.Eloppos && (e.windowLeftPos = 0,
            e.lensLeftPos = 0,
            e.tintpos = 0),
            "window" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize, 0)),
            e.Eroppos && (e.lensLeftPos = e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)),
            "inner" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - 2 * e.options.lensBorderSize, 0)),
            e.Eroppos && (e.lensLeftPos = e.nzWidth - e.nzWidth - 2 * e.options.lensBorderSize)),
            "lens" == e.options.zoomType && (e.windowLeftPos = String(-1 * ((o.pageX - e.nzOffset.left) * e.widthRatio - e.zoomLens.width() / 2)),
            e.windowTopPos = String(-1 * ((o.pageY - e.nzOffset.top) * e.heightRatio - e.zoomLens.height() / 2)),
            e.zoomLens.css({
                backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px"
            }),
            e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({
                "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
            }),
            e.zoomWindow.css({
                "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
            })) : ("lens" == e.options.zoomType && e.zoomLens.css({
                "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
            }),
            e.zoomWindow.css({
                "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
            })),
            e.changeBgSize = !1),
            e.setWindowPostition(o)),
            e.options.tint && "inner" != e.options.zoomType && e.setTintPosition(o),
            "window" == e.options.zoomType && e.setWindowPostition(o),
            "inner" == e.options.zoomType && e.setWindowPostition(o),
            e.options.showLens && (e.fullwidth && "lens" != e.options.zoomType && (e.lensLeftPos = 0),
            e.zoomLens.css({
                left: e.lensLeftPos + "px",
                top: e.lensTopPos + "px"
            })))
        },
        showHideWindow: function(o) {
            var e = this;
            "show" == o && (e.isWindowActive || (e.options.zoomWindowFadeIn ? e.zoomWindow.stop(!0, !0, !1).fadeIn(e.options.zoomWindowFadeIn) : e.zoomWindow.show(),
            e.isWindowActive = !0)),
            "hide" == o && e.isWindowActive && (e.options.zoomWindowFadeOut ? e.zoomWindow.stop(!0, !0).fadeOut(e.options.zoomWindowFadeOut, function() {
                e.loop && (clearInterval(e.loop),
                e.loop = !1)
            }) : e.zoomWindow.hide(),
            e.isWindowActive = !1)
        },
        showHideLens: function(o) {
            var e = this;
            "show" == o && (e.isLensActive || (e.options.lensFadeIn ? e.zoomLens.stop(!0, !0, !1).fadeIn(e.options.lensFadeIn) : e.zoomLens.show(),
            e.isLensActive = !0)),
            "hide" == o && e.isLensActive && (e.options.lensFadeOut ? e.zoomLens.stop(!0, !0).fadeOut(e.options.lensFadeOut) : e.zoomLens.hide(),
            e.isLensActive = !1)
        },
        showHideTint: function(o) {
            var e = this;
            "show" == o && (e.isTintActive || (e.options.zoomTintFadeIn ? e.zoomTint.css({
                opacity: e.options.tintOpacity
            }).animate().stop(!0, !0).fadeIn("slow") : (e.zoomTint.css({
                opacity: e.options.tintOpacity
            }).animate(),
            e.zoomTint.show()),
            e.isTintActive = !0)),
            "hide" == o && e.isTintActive && (e.options.zoomTintFadeOut ? e.zoomTint.stop(!0, !0).fadeOut(e.options.zoomTintFadeOut) : e.zoomTint.hide(),
            e.isTintActive = !1)
        },
        setLensPostition: function(o) {},
        setWindowPostition: function(o) {
            var e = this;
            if (isNaN(e.options.zoomWindowPosition))
                e.externalContainer = d("#" + e.options.zoomWindowPosition),
                e.externalContainerWidth = e.externalContainer.width(),
                e.externalContainerHeight = e.externalContainer.height(),
                e.externalContainerOffset = e.externalContainer.offset(),
                e.windowOffsetTop = e.externalContainerOffset.top,
                e.windowOffsetLeft = e.externalContainerOffset.left;
            else
                switch (e.options.zoomWindowPosition) {
                case 1:
                    e.windowOffsetTop = e.options.zoomWindowOffety,
                    e.windowOffsetLeft = +e.nzWidth;
                    break;
                case 2:
                    e.options.zoomWindowHeight > e.nzHeight && (e.windowOffsetTop = -1 * (e.options.zoomWindowHeight / 2 - e.nzHeight / 2),
                    e.windowOffsetLeft = e.nzWidth);
                    break;
                case 3:
                    e.windowOffsetTop = e.nzHeight - e.zoomWindow.height() - 2 * e.options.borderSize,
                    e.windowOffsetLeft = e.nzWidth;
                    break;
                case 4:
                    e.windowOffsetTop = e.nzHeight,
                    e.windowOffsetLeft = e.nzWidth;
                    break;
                case 5:
                    e.windowOffsetTop = e.nzHeight,
                    e.windowOffsetLeft = e.nzWidth - e.zoomWindow.width() - 2 * e.options.borderSize;
                    break;
                case 6:
                    e.options.zoomWindowHeight > e.nzHeight && (e.windowOffsetTop = e.nzHeight,
                    e.windowOffsetLeft = -1 * (e.options.zoomWindowWidth / 2 - e.nzWidth / 2 + 2 * e.options.borderSize));
                    break;
                case 7:
                    e.windowOffsetTop = e.nzHeight,
                    e.windowOffsetLeft = 0;
                    break;
                case 8:
                    e.windowOffsetTop = e.nzHeight,
                    e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize);
                    break;
                case 9:
                    e.windowOffsetTop = e.nzHeight - e.zoomWindow.height() - 2 * e.options.borderSize,
                    e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize);
                    break;
                case 10:
                    e.options.zoomWindowHeight > e.nzHeight && (e.windowOffsetTop = -1 * (e.options.zoomWindowHeight / 2 - e.nzHeight / 2),
                    e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                    break;
                case 11:
                    e.windowOffsetTop = e.options.zoomWindowOffety,
                    e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize);
                    break;
                case 12:
                    e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize),
                    e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize);
                    break;
                case 13:
                    e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize),
                    e.windowOffsetLeft = 0;
                    break;
                case 14:
                    e.options.zoomWindowHeight > e.nzHeight && (e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize),
                    e.windowOffsetLeft = -1 * (e.options.zoomWindowWidth / 2 - e.nzWidth / 2 + 2 * e.options.borderSize));
                    break;
                case 15:
                    e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize),
                    e.windowOffsetLeft = e.nzWidth - e.zoomWindow.width() - 2 * e.options.borderSize;
                    break;
                case 16:
                    e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize),
                    e.windowOffsetLeft = e.nzWidth;
                    break;
                default:
                    e.windowOffsetTop = e.options.zoomWindowOffety,
                    e.windowOffsetLeft = e.nzWidth
                }
            e.isWindowSet = !0,
            e.windowOffsetTop = e.windowOffsetTop + e.options.zoomWindowOffety,
            e.windowOffsetLeft = e.windowOffsetLeft + e.options.zoomWindowOffetx,
            e.zoomWindow.css({
                top: e.windowOffsetTop
            }),
            e.zoomWindow.css({
                left: e.windowOffsetLeft
            }),
            "inner" == e.options.zoomType && (e.zoomWindow.css({
                top: 0
            }),
            e.zoomWindow.css({
                left: 0
            })),
            e.windowLeftPos = String(-1 * ((o.pageX - e.nzOffset.left) * e.widthRatio - e.zoomWindow.width() / 2)),
            e.windowTopPos = String(-1 * ((o.pageY - e.nzOffset.top) * e.heightRatio - e.zoomWindow.height() / 2)),
            e.Etoppos && (e.windowTopPos = 0),
            e.Eloppos && (e.windowLeftPos = 0),
            e.Eboppos && (e.windowTopPos = -1 * (e.largeHeight / e.currentZoomLevel - e.zoomWindow.height())),
            e.Eroppos && (e.windowLeftPos = -1 * (e.largeWidth / e.currentZoomLevel - e.zoomWindow.width())),
            e.fullheight && (e.windowTopPos = 0),
            e.fullwidth && (e.windowLeftPos = 0),
            "window" != e.options.zoomType && "inner" != e.options.zoomType || (1 == e.zoomLock && (e.widthRatio <= 1 && (e.windowLeftPos = 0),
            e.heightRatio <= 1 && (e.windowTopPos = 0)),
            "window" == e.options.zoomType && (e.largeHeight < e.options.zoomWindowHeight && (e.windowTopPos = 0),
            e.largeWidth < e.options.zoomWindowWidth && (e.windowLeftPos = 0)),
            e.options.easing ? (e.xp || (e.xp = 0),
            e.yp || (e.yp = 0),
            e.loop || (e.loop = setInterval(function() {
                e.xp += (e.windowLeftPos - e.xp) / e.options.easingAmount,
                e.yp += (e.windowTopPos - e.yp) / e.options.easingAmount,
                e.scrollingLock ? (clearInterval(e.loop),
                e.xp = e.windowLeftPos,
                e.yp = e.windowTopPos,
                e.xp = -1 * ((o.pageX - e.nzOffset.left) * e.widthRatio - e.zoomWindow.width() / 2),
                e.yp = -1 * ((o.pageY - e.nzOffset.top) * e.heightRatio - e.zoomWindow.height() / 2),
                e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({
                    "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
                }),
                e.zoomWindow.css({
                    "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
                })) : ("lens" != e.options.zoomType && e.zoomLens.css({
                    "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvalueheight + "px"
                }),
                e.zoomWindow.css({
                    "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
                })),
                e.changeBgSize = !1),
                e.zoomWindow.css({
                    backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px"
                }),
                e.scrollingLock = !1,
                e.loop = !1) : Math.round(Math.abs(e.xp - e.windowLeftPos) + Math.abs(e.yp - e.windowTopPos)) < 1 ? (clearInterval(e.loop),
                e.zoomWindow.css({
                    backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px"
                }),
                e.loop = !1) : (e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({
                    "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
                }),
                e.zoomWindow.css({
                    "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
                })) : ("lens" != e.options.zoomType && e.zoomLens.css({
                    "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
                }),
                e.zoomWindow.css({
                    "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
                })),
                e.changeBgSize = !1),
                e.zoomWindow.css({
                    backgroundPosition: e.xp + "px " + e.yp + "px"
                }))
            }, 16))) : (e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({
                "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
            }),
            e.zoomWindow.css({
                "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
            })) : ("lens" == e.options.zoomType && e.zoomLens.css({
                "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
            }),
            e.largeHeight / e.newvaluewidth < e.options.zoomWindowHeight ? e.zoomWindow.css({
                "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
            }) : e.zoomWindow.css({
                "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
            })),
            e.changeBgSize = !1),
            e.zoomWindow.css({
                backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px"
            })))
        },
        setTintPosition: function(o) {
            var e = this;
            e.nzOffset = e.$elem.offset(),
            e.tintpos = String(-1 * (o.pageX - e.nzOffset.left - e.zoomLens.width() / 2)),
            e.tintposy = String(-1 * (o.pageY - e.nzOffset.top - e.zoomLens.height() / 2)),
            e.Etoppos && (e.tintposy = 0),
            e.Eloppos && (e.tintpos = 0),
            e.Eboppos && (e.tintposy = -1 * (e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize)),
            e.Eroppos && (e.tintpos = -1 * (e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)),
            e.options.tint && (e.fullheight && (e.tintposy = 0),
            e.fullwidth && (e.tintpos = 0),
            e.zoomTintImage.css({
                left: e.tintpos + "px"
            }),
            e.zoomTintImage.css({
                top: e.tintposy + "px"
            }))
        },
        swaptheimage: function(o, e) {
            var i = this
              , t = new Image;
            i.options.loadingIcon && (i.spinner = d("<div style=\"background: url('" + i.options.loadingIcon + "') no-repeat center;height:" + i.nzHeight + "px;width:" + i.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),
            i.$elem.after(i.spinner)),
            i.options.onImageSwap(i.$elem),
            t.onload = function() {
                i.largeWidth = t.width,
                i.largeHeight = t.height,
                i.zoomImage = e,
                i.zoomWindow.css({
                    "background-size": i.largeWidth + "px " + i.largeHeight + "px"
                }),
                i.swapAction(o, e)
            }
            ,
            t.src = e
        },
        swapAction: function(o, e) {
            var i = this
              , t = new Image;
            if (t.onload = function() {
                i.nzHeight = t.height,
                i.nzWidth = t.width,
                i.options.onImageSwapComplete(i.$elem),
                i.doneCallback()
            }
            ,
            t.src = o,
            i.currentZoomLevel = i.options.zoomLevel,
            i.options.maxZoomLevel = !1,
            "lens" == i.options.zoomType && i.zoomLens.css({
                backgroundImage: "url('" + e + "')"
            }),
            "window" == i.options.zoomType && i.zoomWindow.css({
                backgroundImage: "url('" + e + "')"
            }),
            "inner" == i.options.zoomType && i.zoomWindow.css({
                backgroundImage: "url('" + e + "')"
            }),
            i.currentImage = e,
            i.options.imageCrossfade) {
                var n = i.$elem
                  , s = n.clone();
                if (i.$elem.attr("src", o),
                i.$elem.after(s),
                s.stop(!0).fadeOut(i.options.imageCrossfade, function() {
                    d(this).remove()
                }),
                i.$elem.width("auto").removeAttr("width"),
                i.$elem.height("auto").removeAttr("height"),
                n.fadeIn(i.options.imageCrossfade),
                i.options.tint && "inner" != i.options.zoomType) {
                    var h = i.zoomTintImage
                      , a = h.clone();
                    i.zoomTintImage.attr("src", e),
                    i.zoomTintImage.after(a),
                    a.stop(!0).fadeOut(i.options.imageCrossfade, function() {
                        d(this).remove()
                    }),
                    h.fadeIn(i.options.imageCrossfade),
                    i.zoomTint.css({
                        height: i.$elem.height()
                    }),
                    i.zoomTint.css({
                        width: i.$elem.width()
                    })
                }
                i.zoomContainer.css("height", i.$elem.height()),
                i.zoomContainer.css("width", i.$elem.width()),
                "inner" == i.options.zoomType && (i.options.constrainType || (i.zoomWrap.parent().css("height", i.$elem.height()),
                i.zoomWrap.parent().css("width", i.$elem.width()),
                i.zoomWindow.css("height", i.$elem.height()),
                i.zoomWindow.css("width", i.$elem.width()))),
                i.options.imageCrossfade && (i.zoomWrap.css("height", i.$elem.height()),
                i.zoomWrap.css("width", i.$elem.width()))
            } else
                i.$elem.attr("src", o),
                i.options.tint && (i.zoomTintImage.attr("src", e),
                i.zoomTintImage.attr("height", i.$elem.height()),
                i.zoomTintImage.css({
                    height: i.$elem.height()
                }),
                i.zoomTint.css({
                    height: i.$elem.height()
                })),
                i.zoomContainer.css("height", i.$elem.height()),
                i.zoomContainer.css("width", i.$elem.width()),
                i.options.imageCrossfade && (i.zoomWrap.css("height", i.$elem.height()),
                i.zoomWrap.css("width", i.$elem.width()));
            i.options.constrainType && ("height" == i.options.constrainType && (i.zoomContainer.css("height", i.options.constrainSize),
            i.zoomContainer.css("width", "auto"),
            i.options.imageCrossfade ? (i.zoomWrap.css("height", i.options.constrainSize),
            i.zoomWrap.css("width", "auto"),
            i.constwidth = i.zoomWrap.width()) : (i.$elem.css("height", i.options.constrainSize),
            i.$elem.css("width", "auto"),
            i.constwidth = i.$elem.width()),
            "inner" == i.options.zoomType && (i.zoomWrap.parent().css("height", i.options.constrainSize),
            i.zoomWrap.parent().css("width", i.constwidth),
            i.zoomWindow.css("height", i.options.constrainSize),
            i.zoomWindow.css("width", i.constwidth)),
            i.options.tint && (i.tintContainer.css("height", i.options.constrainSize),
            i.tintContainer.css("width", i.constwidth),
            i.zoomTint.css("height", i.options.constrainSize),
            i.zoomTint.css("width", i.constwidth),
            i.zoomTintImage.css("height", i.options.constrainSize),
            i.zoomTintImage.css("width", i.constwidth))),
            "width" == i.options.constrainType && (i.zoomContainer.css("height", "auto"),
            i.zoomContainer.css("width", i.options.constrainSize),
            i.options.imageCrossfade ? (i.zoomWrap.css("height", "auto"),
            i.zoomWrap.css("width", i.options.constrainSize),
            i.constheight = i.zoomWrap.height()) : (i.$elem.css("height", "auto"),
            i.$elem.css("width", i.options.constrainSize),
            i.constheight = i.$elem.height()),
            "inner" == i.options.zoomType && (i.zoomWrap.parent().css("height", i.constheight),
            i.zoomWrap.parent().css("width", i.options.constrainSize),
            i.zoomWindow.css("height", i.constheight),
            i.zoomWindow.css("width", i.options.constrainSize)),
            i.options.tint && (i.tintContainer.css("height", i.constheight),
            i.tintContainer.css("width", i.options.constrainSize),
            i.zoomTint.css("height", i.constheight),
            i.zoomTint.css("width", i.options.constrainSize),
            i.zoomTintImage.css("height", i.constheight),
            i.zoomTintImage.css("width", i.options.constrainSize))))
        },
        doneCallback: function() {
            var o = this;
            o.options.loadingIcon && o.spinner.hide(),
            o.nzOffset = o.$elem.offset(),
            o.nzWidth = o.$elem.width(),
            o.nzHeight = o.$elem.height(),
            o.currentZoomLevel = o.options.zoomLevel,
            o.widthRatio = o.largeWidth / o.nzWidth,
            o.heightRatio = o.largeHeight / o.nzHeight,
            "window" == o.options.zoomType && (o.nzHeight < o.options.zoomWindowWidth / o.widthRatio ? o.lensHeight = o.nzHeight : o.lensHeight = String(o.options.zoomWindowHeight / o.heightRatio),
            o.options.zoomWindowWidth < o.options.zoomWindowWidth ? o.lensWidth = o.nzWidth : o.lensWidth = o.options.zoomWindowWidth / o.widthRatio,
            o.zoomLens && (o.zoomLens.css("width", o.lensWidth),
            o.zoomLens.css("height", o.lensHeight)))
        },
        getCurrentImage: function() {
            return this.zoomImage
        },
        getGalleryList: function() {
            var e = this;
            return e.gallerylist = [],
            e.options.gallery ? d("#" + e.options.gallery + " a").each(function() {
                var o = "";
                d(this).data("zoom-image") ? o = d(this).data("zoom-image") : d(this).data("image") && (o = d(this).data("image")),
                o == e.zoomImage ? e.gallerylist.unshift({
                    href: "" + o,
                    title: d(this).find("img").attr("title")
                }) : e.gallerylist.push({
                    href: "" + o,
                    title: d(this).find("img").attr("title")
                })
            }) : e.gallerylist.push({
                href: "" + e.zoomImage,
                title: d(this).find("img").attr("title")
            }),
            e.gallerylist
        },
        changeZoomLevel: function(o) {
            var e = this;
            e.scrollingLock = !0,
            e.newvalue = parseFloat(o).toFixed(2),
            newvalue = parseFloat(o).toFixed(2),
            maxheightnewvalue = e.largeHeight / (e.options.zoomWindowHeight / e.nzHeight * e.nzHeight),
            maxwidthtnewvalue = e.largeWidth / (e.options.zoomWindowWidth / e.nzWidth * e.nzWidth),
            "inner" != e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / maxheightnewvalue / e.nzHeight,
            e.newvalueheight = maxheightnewvalue,
            e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight,
            e.newvalueheight = newvalue,
            e.fullheight = !1),
            maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / maxwidthtnewvalue / e.nzWidth,
            e.newvaluewidth = maxwidthtnewvalue,
            e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth,
            e.newvaluewidth = newvalue,
            e.fullwidth = !1),
            "lens" == e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.fullwidth = !0,
            e.newvaluewidth = maxheightnewvalue) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth,
            e.newvaluewidth = newvalue,
            e.fullwidth = !1))),
            "inner" == e.options.zoomType && (maxheightnewvalue = parseFloat(e.largeHeight / e.nzHeight).toFixed(2),
            maxwidthtnewvalue = parseFloat(e.largeWidth / e.nzWidth).toFixed(2),
            newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
            newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
            maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / newvalue / e.nzHeight,
            newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue,
            e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight,
            newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue,
            e.fullheight = !1),
            maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / newvalue / e.nzWidth,
            newvalue > maxwidthtnewvalue ? e.newvaluewidth = maxwidthtnewvalue : e.newvaluewidth = newvalue,
            e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth,
            e.newvaluewidth = newvalue,
            e.fullwidth = !1)),
            scrcontinue = !1,
            "inner" == e.options.zoomType && (e.nzWidth >= e.nzHeight && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1,
            e.fullheight = !0,
            e.fullwidth = !0)),
            e.nzHeight > e.nzWidth && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1,
            e.fullheight = !0,
            e.fullwidth = !0))),
            "inner" != e.options.zoomType && (scrcontinue = !0),
            scrcontinue && (e.zoomLock = 0,
            e.changeZoom = !0,
            e.options.zoomWindowHeight / e.heightRatio <= e.nzHeight && (e.currentZoomLevel = e.newvalueheight,
            "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0,
            e.zoomLens.css({
                height: String(e.options.zoomWindowHeight / e.heightRatio) + "px"
            })),
            "lens" != e.options.zoomType && "inner" != e.options.zoomType || (e.changeBgSize = !0)),
            e.options.zoomWindowWidth / e.widthRatio <= e.nzWidth && ("inner" != e.options.zoomType && e.newvaluewidth > e.newvalueheight && (e.currentZoomLevel = e.newvaluewidth),
            "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0,
            e.zoomLens.css({
                width: String(e.options.zoomWindowWidth / e.widthRatio) + "px"
            })),
            "lens" != e.options.zoomType && "inner" != e.options.zoomType || (e.changeBgSize = !0)),
            "inner" == e.options.zoomType && (e.changeBgSize = !0,
            e.nzWidth > e.nzHeight && (e.currentZoomLevel = e.newvaluewidth),
            e.nzHeight > e.nzWidth && (e.currentZoomLevel = e.newvaluewidth))),
            e.setPosition(e.currentLoc)
        },
        closeAll: function() {
            self.zoomWindow && self.zoomWindow.hide(),
            self.zoomLens && self.zoomLens.hide(),
            self.zoomTint && self.zoomTint.hide()
        },
        changeState: function(o) {
            "enable" == o && (this.options.zoomEnabled = !0),
            "disable" == o && (this.options.zoomEnabled = !1)
        }
    };
    d.fn.elevateZoom = function(e) {
        return this.each(function() {
            var o = Object.create(t);
            o.init(e, this),
            d.data(this, "elevateZoom", o)
        })
    }
    ,
    d.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: .1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: .4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: .4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: d.noop,
        onDestroy: function() {},
        onZoomedImageLoaded: function() {},
        onImageSwap: d.noop,
        onImageSwapComplete: d.noop
    }
}(jQuery, window, document);

/*! lightgallery - v1.6.11 - 2018-05-22
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        function b(b, d) {
            if (this.el = b,
            this.$el = a(b),
            this.s = a.extend({}, c, d),
            this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.modules = {},
            this.lGalleryOn = !1,
            this.lgBusy = !1,
            this.hideBartimeout = !1,
            this.isTouch = "ontouchstart"in document.documentElement,
            this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
            this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(),
            this.$slide = "",
            this.$outer = "",
            this.init(),
            this
        }
        var c = {
            mode: "lg-slide",
            cssEasing: "ease",
            easing: "linear",
            speed: 600,
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: !1,
            iframeMaxWidth: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1
        };
        b.prototype.init = function() {
            var b = this;
            b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
            var c = window.location.hash;
            c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10),
            a("body").addClass("lg-from-hash"),
            a("body").hasClass("lg-on") || (setTimeout(function() {
                b.build(b.index)
            }),
            a("body").addClass("lg-on"))),
            b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"),
            b.index = b.s.index || 0,
            a("body").hasClass("lg-on") || setTimeout(function() {
                b.build(b.index),
                a("body").addClass("lg-on")
            })) : b.$items.on("click.lgcustom", function(c) {
                try {
                    c.preventDefault(),
                    c.preventDefault()
                } catch (a) {
                    c.returnValue = !1
                }
                b.$el.trigger("onBeforeOpen.lg"),
                b.index = b.s.index || b.$items.index(this),
                a("body").hasClass("lg-on") || (b.build(b.index),
                a("body").addClass("lg-on"))
            })
        }
        ,
        b.prototype.build = function(b) {
            var c = this;
            c.structure(),
            a.each(a.fn.lightGallery.modules, function(b) {
                c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
            }),
            c.slide(b, !1, !1, !1),
            c.s.keyPress && c.keyPress(),
            c.$items.length > 1 ? (c.arrow(),
            setTimeout(function() {
                c.enableDrag(),
                c.enableSwipe()
            }, 50),
            c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function() {
                c.$el.trigger("onSlideClick.lg")
            }),
            c.counter(),
            c.closeGallery(),
            c.$el.trigger("onAfterOpen.lg"),
            c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
                c.$outer.removeClass("lg-hide-items"),
                clearTimeout(c.hideBartimeout),
                c.hideBartimeout = setTimeout(function() {
                    c.$outer.addClass("lg-hide-items")
                }, c.s.hideBarsDelay)
            }),
            c.$outer.trigger("mousemove.lg")
        }
        ,
        b.prototype.structure = function() {
            var b, c = "", d = "", e = 0, f = "", g = this;
            for (a("body").append('<div class="lg-backdrop"></div>'),
            a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"),
            e = 0; e < this.$items.length; e++)
                c += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"),
            ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'),
            b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>",
            a("body").append(b),
            this.$outer = a(".lg-outer"),
            this.$slide = this.$outer.find(".lg-item"),
            this.s.useLeft ? (this.$outer.addClass("lg-use-left"),
            this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"),
            g.setTop(),
            a(window).on("resize.lg orientationchange.lg", function() {
                setTimeout(function() {
                    g.setTop()
                }, 100)
            }),
            this.$slide.eq(this.index).addClass("lg-current"),
            this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"),
            this.s.speed = 0),
            this.$outer.addClass(this.s.mode),
            this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"),
            this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
            this.doCss()) {
                var h = this.$outer.find(".lg-inner");
                h.css("transition-timing-function", this.s.cssEasing),
                h.css("transition-duration", this.s.speed + "ms")
            }
            setTimeout(function() {
                a(".lg-backdrop").addClass("in")
            }),
            setTimeout(function() {
                g.$outer.addClass("lg-visible")
            }, this.s.backdropDuration),
            this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
            this.prevScrollTop = a(window).scrollTop()
        }
        ,
        b.prototype.setTop = function() {
            if ("100%" !== this.s.height) {
                var b = a(window).height()
                  , c = (b - parseInt(this.s.height, 10)) / 2
                  , d = this.$outer.find(".lg");
                b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
            }
        }
        ,
        b.prototype.doCss = function() {
            return !!function() {
                var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"]
                  , b = document.documentElement
                  , c = 0;
                for (c = 0; c < a.length; c++)
                    if (a[c]in b.style)
                        return !0
            }()
        }
        ,
        b.prototype.isVideo = function(a, b) {
            var c;
            if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"),
            !a)
                return c ? {
                    html5: !0
                } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),
                !1);
            var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i)
              , e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i)
              , f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i)
              , g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return d ? {
                youtube: d
            } : e ? {
                vimeo: e
            } : f ? {
                dailymotion: f
            } : g ? {
                vk: g
            } : void 0
        }
        ,
        b.prototype.counter = function() {
            this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }
        ,
        b.prototype.addHtml = function(b) {
            var c, d, e = null;
            if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b),
            d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"),
            this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))),
            !c)
                if (void 0 !== e && null !== e) {
                    var f = e.substring(0, 1);
                    "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
                } else
                    e = "";
            ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e),
            void 0 !== e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),
            this.$el.trigger("onAfterAppendSubHtml.lg", [b])
        }
        ,
        b.prototype.preload = function(a) {
            var b = 1
              , c = 1;
            for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
                this.loadContent(a + b, !1, 0);
            for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
                this.loadContent(a - c, !1, 0)
        }
        ,
        b.prototype.loadContent = function(b, c, d) {
            var e, f, g, h, i, j, k = this, l = !1, m = function(b) {
                for (var c = [], d = [], e = 0; e < b.length; e++) {
                    var g = b[e].split(" ");
                    "" === g[0] && g.splice(0, 1),
                    d.push(g[0]),
                    c.push(g[1])
                }
                for (var h = a(window).width(), i = 0; i < c.length; i++)
                    if (parseInt(c[i], 10) > h) {
                        f = d[i];
                        break
                    }
            };
            if (k.s.dynamic) {
                if (k.s.dynamicEl[b].poster && (l = !0,
                g = k.s.dynamicEl[b].poster),
                j = k.s.dynamicEl[b].html,
                f = k.s.dynamicEl[b].src,
                k.s.dynamicEl[b].responsive) {
                    m(k.s.dynamicEl[b].responsive.split(","))
                }
                h = k.s.dynamicEl[b].srcset,
                i = k.s.dynamicEl[b].sizes
            } else {
                if (k.$items.eq(b).attr("data-poster") && (l = !0,
                g = k.$items.eq(b).attr("data-poster")),
                j = k.$items.eq(b).attr("data-html"),
                f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"),
                k.$items.eq(b).attr("data-responsive")) {
                    m(k.$items.eq(b).attr("data-responsive").split(","))
                }
                h = k.$items.eq(b).attr("data-srcset"),
                i = k.$items.eq(b).attr("data-sizes")
            }
            var n = !1;
            k.s.dynamic ? k.s.dynamicEl[b].iframe && (n = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
            var o = k.isVideo(f, b);
            if (!k.$slide.eq(b).hasClass("lg-loaded")) {
                if (n)
                    k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
                else if (l) {
                    var p = "";
                    p = o && o.youtube ? "lg-has-youtube" : o && o.vimeo ? "lg-has-vimeo" : "lg-has-html5",
                    k.$slide.eq(b).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
                } else
                    o ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),
                    k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
                if (k.$el.trigger("onAferAppendSlide.lg", [b]),
                e = k.$slide.eq(b).find(".lg-object"),
                i && e.attr("sizes", i),
                h) {
                    e.attr("srcset", h);
                    try {
                        picturefill({
                            elements: [e[0]]
                        })
                    } catch (a) {
                        console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                    }
                }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b),
                k.$slide.eq(b).addClass("lg-loaded")
            }
            k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                var c = 0;
                d && !a("body").hasClass("lg-from-hash") && (c = d),
                setTimeout(function() {
                    k.$slide.eq(b).addClass("lg-complete"),
                    k.$el.trigger("onSlideItemLoad.lg", [b, d || 0])
                }, c)
            }),
            o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"),
            !0 === c && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                k.preload(b)
            }))
        }
        ,
        b.prototype.slide = function(b, c, d, e) {
            var f = this.$outer.find(".lg-current").index()
              , g = this;
            if (!g.lGalleryOn || f !== b) {
                var h = this.$slide.length
                  , i = g.lGalleryOn ? this.s.speed : 0;
                if (!g.lgBusy) {
                    if (this.s.download) {
                        var j;
                        j = g.s.dynamic ? !1 !== g.s.dynamicEl[b].downloadUrl && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")),
                        j ? (a("#lg-download").attr("href", j),
                        g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
                    }
                    if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]),
                    g.lgBusy = !0,
                    clearTimeout(g.hideBartimeout),
                    ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                        g.addHtml(b)
                    }, i),
                    this.arrowDisable(b),
                    e || (b < f ? e = "prev" : b > f && (e = "next")),
                    c) {
                        this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                        var k, l;
                        h > 2 ? (k = b - 1,
                        l = b + 1,
                        0 === b && f === h - 1 ? (l = 0,
                        k = h - 1) : b === h - 1 && 0 === f && (l = 0,
                        k = h - 1)) : (k = 0,
                        l = 1),
                        "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"),
                        g.$slide.eq(b).addClass("lg-current")
                    } else
                        g.$outer.addClass("lg-no-trans"),
                        this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                        "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"),
                        this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"),
                        this.$slide.eq(f).addClass("lg-prev-slide")),
                        setTimeout(function() {
                            g.$slide.removeClass("lg-current"),
                            g.$slide.eq(b).addClass("lg-current"),
                            g.$outer.removeClass("lg-no-trans")
                        }, 50);
                    g.lGalleryOn ? (setTimeout(function() {
                        g.loadContent(b, !0, 0)
                    }, this.s.speed + 50),
                    setTimeout(function() {
                        g.lgBusy = !1,
                        g.$el.trigger("onAfterSlide.lg", [f, b, c, d])
                    }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration),
                    g.lgBusy = !1,
                    g.$el.trigger("onAfterSlide.lg", [f, b, c, d])),
                    g.lGalleryOn = !0,
                    this.s.counter && a("#lg-counter-current").text(b + 1)
                }
                g.index = b
            }
        }
        ,
        b.prototype.goToNextSlide = function(a) {
            var b = this
              , c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1),
            b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++,
            b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
            b.slide(b.index, a, !1, "next")) : c ? (b.index = 0,
            b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
            b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"),
            setTimeout(function() {
                b.$outer.removeClass("lg-right-end")
            }, 400)))
        }
        ,
        b.prototype.goToPrevSlide = function(a) {
            var b = this
              , c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1),
            b.lgBusy || (b.index > 0 ? (b.index--,
            b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
            b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1,
            b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
            b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"),
            setTimeout(function() {
                b.$outer.removeClass("lg-left-end")
            }, 400)))
        }
        ,
        b.prototype.keyPress = function() {
            var b = this;
            this.$items.length > 1 && a(window).on("keyup.lg", function(a) {
                b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(),
                b.goToPrevSlide()),
                39 === a.keyCode && (a.preventDefault(),
                b.goToNextSlide()))
            }),
            a(window).on("keydown.lg", function(a) {
                !0 === b.s.escKey && 27 === a.keyCode && (a.preventDefault(),
                b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy())
            })
        }
        ,
        b.prototype.arrow = function() {
            var a = this;
            this.$outer.find(".lg-prev").on("click.lg", function() {
                a.goToPrevSlide()
            }),
            this.$outer.find(".lg-next").on("click.lg", function() {
                a.goToNextSlide()
            })
        }
        ,
        b.prototype.arrowDisable = function(a) {
            !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"),
            a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
        }
        ,
        b.prototype.setTranslate = function(a, b, c) {
            this.s.useLeft ? a.css("left", b) : a.css({
                transform: "translate3d(" + b + "px, " + c + "px, 0px)"
            })
        }
        ,
        b.prototype.touchMove = function(b, c) {
            var d = c - b;
            Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"),
            this.setTranslate(this.$slide.eq(this.index), d, 0),
            this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0),
            this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
        }
        ,
        b.prototype.touchEnd = function(a) {
            var b = this;
            "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
            this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"),
            setTimeout(function() {
                b.$outer.removeClass("lg-dragging"),
                a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
                b.$slide.removeAttr("style")
            }),
            setTimeout(function() {
                b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
            }, b.s.speed + 100)
        }
        ,
        b.prototype.enableSwipe = function() {
            var a = this
              , b = 0
              , c = 0
              , d = !1;
            a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
                a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(),
                a.manageSwipeClass(),
                b = c.originalEvent.targetTouches[0].pageX)
            }),
            a.$slide.on("touchmove.lg", function(e) {
                a.$outer.hasClass("lg-zoomed") || (e.preventDefault(),
                c = e.originalEvent.targetTouches[0].pageX,
                a.touchMove(b, c),
                d = !0)
            }),
            a.$slide.on("touchend.lg", function() {
                a.$outer.hasClass("lg-zoomed") || (d ? (d = !1,
                a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
            }))
        }
        ,
        b.prototype.enableDrag = function() {
            var b = this
              , c = 0
              , d = 0
              , e = !1
              , f = !1;
            b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function(d) {
                b.$outer.hasClass("lg-zoomed") || b.lgBusy || a(d.target).text().trim() || (d.preventDefault(),
                b.manageSwipeClass(),
                c = d.pageX,
                e = !0,
                b.$outer.scrollLeft += 1,
                b.$outer.scrollLeft -= 1,
                b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
                b.$el.trigger("onDragstart.lg"))
            }),
            a(window).on("mousemove.lg", function(a) {
                e && (f = !0,
                d = a.pageX,
                b.touchMove(c, d),
                b.$el.trigger("onDragmove.lg"))
            }),
            a(window).on("mouseup.lg", function(g) {
                f ? (f = !1,
                b.touchEnd(d - c),
                b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"),
                e && (e = !1,
                b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
            }))
        }
        ,
        b.prototype.manageSwipeClass = function() {
            var a = this.index + 1
              , b = this.index - 1;
            this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)),
            this.$slide.removeClass("lg-next-slide lg-prev-slide"),
            b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
            this.$slide.eq(a).addClass("lg-next-slide")
        }
        ,
        b.prototype.mousewheel = function() {
            var a = this;
            a.$outer.on("mousewheel.lg", function(b) {
                b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
                b.preventDefault())
            })
        }
        ,
        b.prototype.closeGallery = function() {
            var b = this
              , c = !1;
            this.$outer.find(".lg-close").on("click.lg", function() {
                b.destroy()
            }),
            b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
                c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
            }),
            b.$outer.on("mousemove.lg", function() {
                c = !1
            }),
            b.$outer.on("mouseup.lg", function(d) {
                (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
            }))
        }
        ,
        b.prototype.destroy = function(b) {
            var c = this;
            b || (c.$el.trigger("onBeforeClose.lg"),
            a(window).scrollTop(c.prevScrollTop)),
            b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            a.removeData(c.el, "lightGallery")),
            this.$el.off(".lg.tm"),
            a.each(a.fn.lightGallery.modules, function(a) {
                c.modules[a] && c.modules[a].destroy()
            }),
            this.lGalleryOn = !1,
            clearTimeout(c.hideBartimeout),
            this.hideBartimeout = !1,
            a(window).off(".lg"),
            a("body").removeClass("lg-on lg-from-hash"),
            c.$outer && c.$outer.removeClass("lg-visible"),
            a(".lg-backdrop").removeClass("in"),
            setTimeout(function() {
                c.$outer && c.$outer.remove(),
                a(".lg-backdrop").remove(),
                b || c.$el.trigger("onCloseAfter.lg")
            }, c.s.backdropDuration + 50)
        }
        ,
        a.fn.lightGallery = function(c) {
            return this.each(function() {
                if (a.data(this, "lightGallery"))
                    try {
                        a(this).data("lightGallery").init()
                    } catch (a) {
                        console.error("lightGallery has not initiated properly")
                    }
                else
                    a.data(this, "lightGallery", new b(this,c))
            })
        }
        ,
        a.fn.lightGallery.modules = {}
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
    !function() {
        "use strict";
        var b = {
            autoplay: !1,
            pause: 5e3,
            progressBar: !0,
            fourceAutoplay: !1,
            autoplayControls: !0,
            appendAutoplayControlsTo: ".lg-toolbar"
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s),
            this.interval = !1,
            this.fromAuto = !0,
            this.canceledOnTouch = !1,
            this.fourceAutoplayTemp = this.core.s.fourceAutoplay,
            this.core.doCss() || (this.core.s.progressBar = !1),
            this.init(),
            this)
        };
        c.prototype.init = function() {
            var a = this;
            a.core.s.autoplayControls && a.controls(),
            a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),
            a.progress(),
            a.core.s.autoplay && a.$el.one("onSlideItemLoad.lg.tm", function() {
                a.startlAuto()
            }),
            a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
                a.interval && (a.cancelAuto(),
                a.canceledOnTouch = !0)
            }),
            a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
                !a.interval && a.canceledOnTouch && (a.startlAuto(),
                a.canceledOnTouch = !1)
            })
        }
        ,
        c.prototype.progress = function() {
            var a, b, c = this;
            c.$el.on("onBeforeSlide.lg.tm", function() {
                c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find(".lg-progress-bar"),
                b = c.core.$outer.find(".lg-progress"),
                c.interval && (b.removeAttr("style"),
                a.removeClass("lg-start"),
                setTimeout(function() {
                    b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"),
                    a.addClass("lg-start")
                }, 20))),
                c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
                c.fromAuto = !1
            })
        }
        ,
        c.prototype.controls = function() {
            var b = this;
            a(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'),
            b.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
                a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(),
                b.core.s.fourceAutoplay = !1) : b.interval || (b.startlAuto(),
                b.core.s.fourceAutoplay = b.fourceAutoplayTemp)
            })
        }
        ,
        c.prototype.startlAuto = function() {
            var a = this;
            a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"),
            a.core.$outer.addClass("lg-show-autoplay"),
            a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            a.interval = setInterval(function() {
                a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0,
                a.fromAuto = !0,
                a.core.slide(a.core.index, !1, !1, "next")
            }, a.core.s.speed + a.core.s.pause)
        }
        ,
        c.prototype.cancelAuto = function() {
            clearInterval(this.interval),
            this.interval = !1,
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
        }
        ,
        c.prototype.destroy = function() {
            this.cancelAuto(),
            this.core.$outer.find(".lg-progress-bar").remove()
        }
        ,
        a.fn.lightGallery.modules.autoplay = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
    !function() {
        "use strict";
        var b = {
            fullScreen: !0
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            this.core.s = a.extend({}, b, this.core.s),
            this.init(),
            this
        };
        c.prototype.init = function() {
            var a = "";
            if (this.core.s.fullScreen) {
                if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled))
                    return;
                a = '<span class="lg-fullscreen lg-icon"></span>',
                this.core.$outer.find(".lg-toolbar").append(a),
                this.fullScreen()
            }
        }
        ,
        c.prototype.requestFullscreen = function() {
            var a = document.documentElement;
            a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
        }
        ,
        c.prototype.exitFullscreen = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }
        ,
        c.prototype.fullScreen = function() {
            var b = this;
            a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
                b.core.$outer.toggleClass("lg-fullscreen-on")
            }),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
                document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b.exitFullscreen() : b.requestFullscreen()
            })
        }
        ,
        c.prototype.destroy = function() {
            this.exitFullscreen(),
            a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
        }
        ,
        a.fn.lightGallery.modules.fullscreen = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
    !function() {
        "use strict";
        var b = {
            pager: !1
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            this.core.s = a.extend({}, b, this.core.s),
            this.core.s.pager && this.core.$items.length > 1 && this.init(),
            this
        };
        c.prototype.init = function() {
            var b, c, d, e = this, f = "";
            if (e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),
            e.core.s.dynamic)
                for (var g = 0; g < e.core.s.dynamicEl.length; g++)
                    f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
            else
                e.core.$items.each(function() {
                    e.core.s.exThumbImage ? f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>'
                });
            c = e.core.$outer.find(".lg-pager-outer"),
            c.html(f),
            b = e.core.$outer.find(".lg-pager-cont"),
            b.on("click.lg touchend.lg", function() {
                var b = a(this);
                e.core.index = b.index(),
                e.core.slide(e.core.index, !1, !0, !1)
            }),
            c.on("mouseover.lg", function() {
                clearTimeout(d),
                c.addClass("lg-pager-hover")
            }),
            c.on("mouseout.lg", function() {
                d = setTimeout(function() {
                    c.removeClass("lg-pager-hover")
                })
            }),
            e.core.$el.on("onBeforeSlide.lg.tm", function(a, c, d) {
                b.removeClass("lg-pager-active"),
                b.eq(d).addClass("lg-pager-active")
            })
        }
        ,
        c.prototype.destroy = function() {}
        ,
        a.fn.lightGallery.modules.pager = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
    !function() {
        "use strict";
        var b = {
            thumbnail: !0,
            animateThumb: !0,
            currentPagerPosition: "middle",
            thumbWidth: 100,
            thumbHeight: "80px",
            thumbContHeight: 100,
            thumbMargin: 5,
            exThumbImage: !1,
            showThumbByDefault: !0,
            toogleThumb: !0,
            pullCaptionUp: !0,
            enableThumbDrag: !0,
            enableThumbSwipe: !0,
            swipeThreshold: 50,
            loadYoutubeThumbnail: !0,
            youtubeThumbSize: 1,
            loadVimeoThumbnail: !0,
            vimeoThumbSize: "thumbnail_small",
            loadDailymotionThumbnail: !0
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.core.s = a.extend({}, b, this.core.s),
            this.$el = a(c),
            this.$thumbOuter = null,
            this.thumbOuterWidth = 0,
            this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin),
            this.thumbIndex = this.core.index,
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            this.left = 0,
            this.init(),
            this
        };
        c.prototype.init = function() {
            var a = this;
            this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() {
                a.core.$outer.addClass("lg-thumb-open")
            }, 700),
            this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"),
            this.build(),
            this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
            this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
            this.thumbClickable = !1) : this.thumbClickable = !0,
            this.toogle(),
            this.thumbkeyPress())
        }
        ,
        c.prototype.build = function() {
            function b(a, b, c) {
                var g, h = d.core.isVideo(a, c) || {}, i = "";
                h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = "//i.vimeocdn.com/video/error_" + f + ".jpg",
                i = h.vimeo[1]) : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : g = b,
                e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>',
                i = ""
            }
            var c, d = this, e = "", f = "", g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
            switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
                f = "640";
                break;
            case "thumbnail_medium":
                f = "200x150";
                break;
            case "thumbnail_small":
                f = "100x75"
            }
            if (d.core.$outer.addClass("lg-has-thumb"),
            d.core.$outer.find(".lg").append(g),
            d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"),
            d.thumbOuterWidth = d.$thumbOuter.width(),
            d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({
                width: d.thumbTotalWidth + "px",
                position: "relative"
            }),
            this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"),
            d.core.s.dynamic)
                for (var h = 0; h < d.core.s.dynamicEl.length; h++)
                    b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
            else
                d.core.$items.each(function(c) {
                    d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c)
                });
            d.core.$outer.find(".lg-thumb").html(e),
            c = d.core.$outer.find(".lg-thumb-item"),
            c.each(function() {
                var b = a(this)
                  , c = b.attr("data-vimeo-id");
                c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", {
                    format: "json"
                }, function(a) {
                    b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize])
                })
            }),
            c.eq(d.core.index).addClass("active"),
            d.core.$el.on("onBeforeSlide.lg.tm", function() {
                c.removeClass("active"),
                c.eq(d.core.index).addClass("active")
            }),
            c.on("click.lg touchend.lg", function() {
                var b = a(this);
                setTimeout(function() {
                    (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(),
                    d.core.slide(d.core.index, !1, !0, !1))
                }, 50)
            }),
            d.core.$el.on("onBeforeSlide.lg.tm", function() {
                d.animateThumb(d.core.index)
            }),
            a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
                setTimeout(function() {
                    d.animateThumb(d.core.index),
                    d.thumbOuterWidth = d.$thumbOuter.width()
                }, 200)
            })
        }
        ,
        c.prototype.setTranslate = function(a) {
            this.core.$outer.find(".lg-thumb").css({
                transform: "translate3d(-" + a + "px, 0px, 0px)"
            })
        }
        ,
        c.prototype.animateThumb = function(a) {
            var b = this.core.$outer.find(".lg-thumb");
            if (this.core.s.animateThumb) {
                var c;
                switch (this.core.s.currentPagerPosition) {
                case "left":
                    c = 0;
                    break;
                case "middle":
                    c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case "right":
                    c = this.thumbOuterWidth - this.core.s.thumbWidth
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c,
                this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
                this.left < 0 && (this.left = 0),
                this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"),
                this.core.doCss() || b.animate({
                    left: -this.left + "px"
                }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"),
                this.setTranslate(this.left)
            }
        }
        ,
        c.prototype.enableThumbDrag = function() {
            var b = this
              , c = 0
              , d = 0
              , e = !1
              , f = !1
              , g = 0;
            b.$thumbOuter.addClass("lg-grab"),
            b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(a) {
                b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(),
                c = a.pageX,
                e = !0,
                b.core.$outer.scrollLeft += 1,
                b.core.$outer.scrollLeft -= 1,
                b.thumbClickable = !1,
                b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
            }),
            a(window).on("mousemove.lg.thumb", function(a) {
                e && (g = b.left,
                f = !0,
                d = a.pageX,
                b.$thumbOuter.addClass("lg-dragging"),
                g -= d - c,
                g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth),
                g < 0 && (g = 0),
                b.setTranslate(g))
            }),
            a(window).on("mouseup.lg.thumb", function() {
                f ? (f = !1,
                b.$thumbOuter.removeClass("lg-dragging"),
                b.left = g,
                Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : b.thumbClickable = !0,
                e && (e = !1,
                b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
            })
        }
        ,
        c.prototype.enableThumbSwipe = function() {
            var a = this
              , b = 0
              , c = 0
              , d = !1
              , e = 0;
            a.core.$outer.find(".lg-thumb").on("touchstart.lg", function(c) {
                a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(),
                b = c.originalEvent.targetTouches[0].pageX,
                a.thumbClickable = !1)
            }),
            a.core.$outer.find(".lg-thumb").on("touchmove.lg", function(f) {
                a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(),
                c = f.originalEvent.targetTouches[0].pageX,
                d = !0,
                a.$thumbOuter.addClass("lg-dragging"),
                e = a.left,
                e -= c - b,
                e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth),
                e < 0 && (e = 0),
                a.setTranslate(e))
            }),
            a.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
                a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1,
                a.$thumbOuter.removeClass("lg-dragging"),
                Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0),
                a.left = e) : a.thumbClickable = !0
            })
        }
        ,
        c.prototype.toogle = function() {
            var a = this;
            a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"),
            a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),
            a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
                a.core.$outer.toggleClass("lg-thumb-open")
            }))
        }
        ,
        c.prototype.thumbkeyPress = function() {
            var b = this;
            a(window).on("keydown.lg.thumb", function(a) {
                38 === a.keyCode ? (a.preventDefault(),
                b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(),
                b.core.$outer.removeClass("lg-thumb-open"))
            })
        }
        ,
        c.prototype.destroy = function() {
            this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"))
        }
        ,
        a.fn.lightGallery.modules.Thumbnail = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        function b(a, b, c, d) {
            var e = this;
            if (e.core.$slide.eq(b).find(".lg-video").append(e.loadVideo(c, "lg-object", !0, b, d)),
            d)
                if (e.core.s.videojs)
                    try {
                        videojs(e.core.$slide.eq(b).find(".lg-html5").get(0), e.core.s.videojsOptions, function() {
                            !e.videoLoaded && e.core.s.autoplayFirstVideo && this.play()
                        })
                    } catch (a) {
                        console.error("Make sure you have included videojs")
                    }
                else
                    !e.videoLoaded && e.core.s.autoplayFirstVideo && e.core.$slide.eq(b).find(".lg-html5").get(0).play()
        }
        function c(a, b) {
            var c = this.core.$slide.eq(b).find(".lg-video-cont");
            c.hasClass("lg-has-iframe") || (c.css("max-width", this.core.s.videoMaxWidth),
            this.videoLoaded = !0)
        }
        function d(b, c, d) {
            var e = this
              , f = e.core.$slide.eq(c)
              , g = f.find(".lg-youtube").get(0)
              , h = f.find(".lg-vimeo").get(0)
              , i = f.find(".lg-dailymotion").get(0)
              , j = f.find(".lg-vk").get(0)
              , k = f.find(".lg-html5").get(0);
            if (g)
                g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            else if (h)
                try {
                    $f(h).api("pause")
                } catch (a) {
                    console.error("Make sure you have included froogaloop2 js")
                }
            else if (i)
                i.contentWindow.postMessage("pause", "*");
            else if (k)
                if (e.core.s.videojs)
                    try {
                        videojs(k).pause()
                    } catch (a) {
                        console.error("Make sure you have included videojs")
                    }
                else
                    k.pause();
            j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
            var l;
            l = e.core.s.dynamic ? e.core.s.dynamicEl[d].src : e.core.$items.eq(d).attr("href") || e.core.$items.eq(d).attr("data-src");
            var m = e.core.isVideo(l, d) || {};
            (m.youtube || m.vimeo || m.dailymotion || m.vk) && e.core.$outer.addClass("lg-hide-download")
        }
        var e = {
            videoMaxWidth: "855px",
            autoplayFirstVideo: !0,
            youtubePlayerParams: !1,
            vimeoPlayerParams: !1,
            dailymotionPlayerParams: !1,
            vkPlayerParams: !1,
            videojs: !1,
            videojsOptions: {}
        }
          , f = function(b) {
            return this.core = a(b).data("lightGallery"),
            this.$el = a(b),
            this.core.s = a.extend({}, e, this.core.s),
            this.videoLoaded = !1,
            this.init(),
            this
        };
        f.prototype.init = function() {
            var e = this;
            e.core.$el.on("hasVideo.lg.tm", b.bind(this)),
            e.core.$el.on("onAferAppendSlide.lg.tm", c.bind(this)),
            e.core.doCss() && e.core.$items.length > 1 && (e.core.s.enableSwipe || e.core.s.enableDrag) ? e.core.$el.on("onSlideClick.lg.tm", function() {
                var a = e.core.$slide.eq(e.core.index);
                e.loadVideoOnclick(a)
            }) : e.core.$slide.on("click.lg", function() {
                e.loadVideoOnclick(a(this))
            }),
            e.core.$el.on("onBeforeSlide.lg.tm", d.bind(this)),
            e.core.$el.on("onAfterSlide.lg.tm", function(a, b) {
                e.core.$slide.eq(b).removeClass("lg-video-playing")
            }),
            e.core.s.autoplayFirstVideo && e.core.$el.on("onAferAppendSlide.lg.tm", function(a, b) {
                if (!e.core.lGalleryOn) {
                    var c = e.core.$slide.eq(b);
                    setTimeout(function() {
                        e.loadVideoOnclick(c)
                    }, 100)
                }
            })
        }
        ,
        f.prototype.loadVideo = function(b, c, d, e, f) {
            var g = ""
              , h = 1
              , i = ""
              , j = this.core.isVideo(b, e) || {};
            if (d && (h = this.videoLoaded ? 0 : this.core.s.autoplayFirstVideo ? 1 : 0),
            j.youtube)
                i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1",
                this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)),
                g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';
            else if (j.vimeo)
                i = "?autoplay=" + h + "&api=1",
                this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)),
                g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
            else if (j.dailymotion)
                i = "?wmode=opaque&autoplay=" + h + "&api=postMessage",
                this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)),
                g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';
            else if (j.html5) {
                var k = f.substring(0, 1);
                "." !== k && "#" !== k || (f = a(f).html()),
                g = f
            } else
                j.vk && (i = "&autoplay=" + h,
                this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)),
                g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="//vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
            return g
        }
        ,
        f.prototype.loadVideoOnclick = function(a) {
            var b = this;
            if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible"))
                if (a.hasClass("lg-has-video")) {
                    var c = a.find(".lg-youtube").get(0)
                      , d = a.find(".lg-vimeo").get(0)
                      , e = a.find(".lg-dailymotion").get(0)
                      , f = a.find(".lg-html5").get(0);
                    if (c)
                        c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                    else if (d)
                        try {
                            $f(d).api("play")
                        } catch (a) {
                            console.error("Make sure you have included froogaloop2 js")
                        }
                    else if (e)
                        e.contentWindow.postMessage("play", "*");
                    else if (f)
                        if (b.core.s.videojs)
                            try {
                                videojs(f).play()
                            } catch (a) {
                                console.error("Make sure you have included videojs")
                            }
                        else
                            f.play();
                    a.addClass("lg-video-playing")
                } else {
                    a.addClass("lg-video-playing lg-has-video");
                    var g, h, i = function(c, d) {
                        if (a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)),
                        d)
                            if (b.core.s.videojs)
                                try {
                                    videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function() {
                                        this.play()
                                    })
                                } catch (a) {
                                    console.error("Make sure you have included videojs")
                                }
                            else
                                b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()
                    };
                    b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src,
                    h = b.core.s.dynamicEl[b.core.index].html,
                    i(g, h)) : (g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src"),
                    h = b.core.$items.eq(b.core.index).attr("data-html"),
                    i(g, h));
                    var j = a.find(".lg-object");
                    a.find(".lg-video").append(j),
                    a.find(".lg-video-object").hasClass("lg-html5") || (a.removeClass("lg-complete"),
                    a.find(".lg-video-object").on("load.lg error.lg", function() {
                        a.addClass("lg-complete")
                    }))
                }
        }
        ,
        f.prototype.destroy = function() {
            this.videoLoaded = !1
        }
        ,
        a.fn.lightGallery.modules.video = f
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
    !function() {
        "use strict";
        var b = function() {
            var a = !1
              , b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return b && parseInt(b[2], 10) < 54 && (a = !0),
            a
        }
          , c = {
            scale: 1,
            zoom: !0,
            actualSize: !0,
            enableZoomAfter: 300,
            useLeftForZoom: b()
        }
          , d = function(b) {
            return this.core = a(b).data("lightGallery"),
            this.core.s = a.extend({}, c, this.core.s),
            this.core.s.zoom && this.core.doCss() && (this.init(),
            this.zoomabletimeout = !1,
            this.pageX = a(window).width() / 2,
            this.pageY = a(window).height() / 2 + a(window).scrollTop()),
            this
        };
        d.prototype.init = function() {
            var b = this
              , c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
            b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
            b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"),
            this.core.$outer.find(".lg-toolbar").append(c),
            b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c, d, e) {
                var f = b.core.s.enableZoomAfter + e;
                a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"),
                b.zoomabletimeout = setTimeout(function() {
                    b.core.$slide.eq(d).addClass("lg-zoomable")
                }, f + 30)
            });
            var d = 1
              , e = function(c) {
                var d, e, f = b.core.$outer.find(".lg-current .lg-image"), g = (a(window).width() - f.prop("offsetWidth")) / 2, h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
                d = b.pageX - g,
                e = b.pageY - h;
                var i = (c - 1) * d
                  , j = (c - 1) * e;
                f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c),
                b.core.s.useLeftForZoom ? f.parent().css({
                    left: -i + "px",
                    top: -j + "px"
                }).attr("data-x", i).attr("data-y", j) : f.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
            }
              , f = function() {
                d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(),
                d < 1 && (d = 1),
                e(d)
            }
              , g = function(c, e, g, h) {
                var i, j = e.prop("offsetWidth");
                i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
                var k;
                b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j,
                d = k || 2),
                h ? (b.pageX = a(window).width() / 2,
                b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX,
                b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY),
                f(),
                setTimeout(function() {
                    b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }, 10)
            }
              , h = !1;
            b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, c) {
                var d = b.core.$slide.eq(c).find(".lg-image");
                d.on("dblclick", function(a) {
                    g(a, d, c)
                }),
                d.on("touchstart", function(a) {
                    h ? (clearTimeout(h),
                    h = null,
                    g(a, d, c)) : h = setTimeout(function() {
                        h = null
                    }, 300),
                    a.preventDefault()
                })
            }),
            a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
                b.pageX = a(window).width() / 2,
                b.pageY = a(window).height() / 2 + a(window).scrollTop(),
                e(d)
            }),
            a("#lg-zoom-out").on("click.lg", function() {
                b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale,
                f())
            }),
            a("#lg-zoom-in").on("click.lg", function() {
                b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale,
                f())
            }),
            a("#lg-actual-size").on("click.lg", function(a) {
                g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0)
            }),
            b.core.$el.on("onBeforeSlide.lg.tm", function() {
                d = 1,
                b.resetZoom()
            }),
            b.zoomDrag(),
            b.zoomSwipe()
        }
        ,
        d.prototype.resetZoom = function() {
            this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            this.pageX = a(window).width() / 2,
            this.pageY = a(window).height() / 2 + a(window).scrollTop()
        }
        ,
        d.prototype.zoomSwipe = function() {
            var a = this
              , b = {}
              , c = {}
              , d = !1
              , e = !1
              , f = !1;
            a.core.$slide.on("touchstart.lg", function(c) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                    f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(),
                    e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(),
                    (e || f) && (c.preventDefault(),
                    b = {
                        x: c.originalEvent.targetTouches[0].pageX,
                        y: c.originalEvent.targetTouches[0].pageY
                    })
                }
            }),
            a.core.$slide.on("touchmove.lg", function(g) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                    g.preventDefault(),
                    d = !0,
                    c = {
                        x: g.originalEvent.targetTouches[0].pageX,
                        y: g.originalEvent.targetTouches[0].pageY
                    },
                    a.core.$outer.addClass("lg-zoom-dragging"),
                    i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")),
                    h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")),
                    (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({
                        left: h + "px",
                        top: i + "px"
                    }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
                }
            }),
            a.core.$slide.on("touchend.lg", function() {
                a.core.$outer.hasClass("lg-zoomed") && d && (d = !1,
                a.core.$outer.removeClass("lg-zoom-dragging"),
                a.touchendZoom(b, c, e, f))
            })
        }
        ,
        d.prototype.zoomDrag = function() {
            var b = this
              , c = {}
              , d = {}
              , e = !1
              , f = !1
              , g = !1
              , h = !1;
            b.core.$slide.on("mousedown.lg.zoom", function(d) {
                var f = b.core.$slide.eq(b.core.index).find(".lg-object");
                h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(),
                g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(),
                b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(),
                c = {
                    x: d.pageX,
                    y: d.pageY
                },
                e = !0,
                b.core.$outer.scrollLeft += 1,
                b.core.$outer.scrollLeft -= 1,
                b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
            }),
            a(window).on("mousemove.lg.zoom", function(a) {
                if (e) {
                    var i, j, k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                    f = !0,
                    d = {
                        x: a.pageX,
                        y: a.pageY
                    },
                    b.core.$outer.addClass("lg-zoom-dragging"),
                    j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")),
                    i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")),
                    b.core.s.useLeftForZoom ? k.css({
                        left: i + "px",
                        top: j + "px"
                    }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)")
                }
            }),
            a(window).on("mouseup.lg.zoom", function(a) {
                e && (e = !1,
                b.core.$outer.removeClass("lg-zoom-dragging"),
                !f || c.x === d.x && c.y === d.y || (d = {
                    x: a.pageX,
                    y: a.pageY
                },
                b.touchendZoom(c, d, g, h)),
                f = !1),
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
            })
        }
        ,
        d.prototype.touchendZoom = function(a, b, c, d) {
            var e = this
              , f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap")
              , g = e.core.$slide.eq(e.core.index).find(".lg-object")
              , h = -Math.abs(f.attr("data-x")) + (b.x - a.x)
              , i = -Math.abs(f.attr("data-y")) + (b.y - a.y)
              , j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2
              , k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j)
              , l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2
              , m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
            (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)),
            c && (h <= -m ? h = -m : h >= -l && (h = -l)),
            d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")),
            c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")),
            e.core.s.useLeftForZoom ? f.css({
                left: h + "px",
                top: i + "px"
            }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
        }
        ,
        d.prototype.destroy = function() {
            var b = this;
            b.core.$el.off(".lg.zoom"),
            a(window).off(".lg.zoom"),
            b.core.$slide.off(".lg.zoom"),
            b.core.$el.off(".lg.tm.zoom"),
            b.resetZoom(),
            clearTimeout(b.zoomabletimeout),
            b.zoomabletimeout = !1
        }
        ,
        a.fn.lightGallery.modules.zoom = d
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
    !function() {
        "use strict";
        var b = {
            hash: !0
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.core.s = a.extend({}, b, this.core.s),
            this.core.s.hash && (this.oldHash = window.location.hash,
            this.init()),
            this
        };
        c.prototype.init = function() {
            var b, c = this;
            c.core.$el.on("onAfterSlide.lg.tm", function(a, b, d) {
                history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + c.core.s.galleryId + "&slide=" + d) : window.location.hash = "lg=" + c.core.s.galleryId + "&slide=" + d
            }),
            a(window).on("hashchange.lg.hash", function() {
                b = window.location.hash;
                var a = parseInt(b.split("&slide=")[1], 10);
                b.indexOf("lg=" + c.core.s.galleryId) > -1 ? c.core.slide(a, !1, !1) : c.core.lGalleryOn && c.core.destroy()
            })
        }
        ,
        c.prototype.destroy = function() {
            this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "",
            this.core.$el.off(".lg.hash"))
        }
        ,
        a.fn.lightGallery.modules.hash = c
    }()
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function(a) {
    !function() {
        "use strict";
        var b = {
            share: !0,
            facebook: !0,
            facebookDropdownText: "Facebook",
            twitter: !0,
            twitterDropdownText: "Twitter",
            googlePlus: !0,
            googlePlusDropdownText: "GooglePlus",
            pinterest: !0,
            pinterestDropdownText: "Pinterest"
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.core.s = a.extend({}, b, this.core.s),
            this.core.s.share && this.init(),
            this
        };
        c.prototype.init = function() {
            var b = this
              , c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
            c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "",
            c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "",
            c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "",
            c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "",
            c += "</ul></span>",
            this.core.$outer.find(".lg-toolbar").append(c),
            this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'),
            a("#lg-share").on("click.lg", function() {
                b.core.$outer.toggleClass("lg-dropdown-active")
            }),
            a("#lg-dropdown-overlay").on("click.lg", function() {
                b.core.$outer.removeClass("lg-dropdown-active")
            }),
            b.core.$el.on("onAfterSlide.lg.tm", function(c, d, e) {
                setTimeout(function() {
                    a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b.getSahreProps(e, "facebookShareUrl") || window.location.href)),
                    a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b.getSahreProps(e, "tweetText") + "&url=" + encodeURIComponent(b.getSahreProps(e, "twitterShareUrl") || window.location.href)),
                    a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b.getSahreProps(e, "googleplusShareUrl") || window.location.href)),
                    a("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(b.getSahreProps(e, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(b.getSahreProps(e, "src")) + "&description=" + b.getSahreProps(e, "pinterestText"))
                }, 100)
            })
        }
        ,
        c.prototype.getSahreProps = function(a, b) {
            var c = "";
            if (this.core.s.dynamic)
                c = this.core.s.dynamicEl[a][b];
            else {
                var d = this.core.$items.eq(a).attr("href")
                  , e = this.core.$items.eq(a).data(b);
                c = "src" === b ? d || e : e
            }
            return c
        }
        ,
        c.prototype.destroy = function() {}
        ,
        a.fn.lightGallery.modules.share = c
    }()
});
