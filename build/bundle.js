!(function(t) {
  function e(o) {
    if (n[o]) return n[o].exports;
    var r = (n[o] = { exports: {}, id: o, loaded: !1 });
    return t[o].call(r.exports, r, r.exports, e), (r.loaded = !0), r.exports;
  }
  var n = {};
  return (e.m = t), (e.c = n), (e.p = "/build/"), e(0);
})([
  function(t, e, n) {
    n(3),
      $(document).ready(function() {
        function t() {
          var t, e;
          return (
            (t = u
              ? s.filter(function(t) {
                  return t !== u;
                })
              : s),
            (e = Math.floor(Math.random() * t.length)),
            (u = t[e])
          );
        }
        function e() {
          var e = $(".circle-bg"),
            n = e.clone(!0);
          (c = e.css("background-color")),
            n.css({ "background-color": t() }),
            e.addClass("circle-click"),
            $("i").animate({ color: c }, 600, function() {
              e.remove(),
                $("#wrapper").append(n),
                $("body").css({ "background-color": c });
            });
        }
        function n() {
          var t = $("#quote-text"),
            e = $("#quote-author");
          $.getJSON(
            "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
            function(n) {
              t.text(n.quoteText),
                n.quoteAuthor ? e.text("- " + n.quoteAuthor) : e.text(""),
                $("#tweet").attr(
                  "href",
                  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                    encodeURIComponent(
                      "'" + n.quoteText + "' '" + n.quoteAuthor
                    )
                );
            }
          ).fail(function() {
            t.html("CONNECTION FAILURE"), e.html("");
          });
        }
        function o() {
          var t = $("#quote-text"),
            o = $("#quote-author");
          return i || a
            ? null
            : ((a = !0),
              t.animate({ opacity: 0 }, 800),
              o.animate({ opacity: 0 }, 800, function() {
                e(),
                  n(),
                  t.css({ color: c }),
                  o.css({ color: c }),
                  t.animate({ opacity: 1 }, 800),
                  o.animate({ opacity: 1 }, 800, function() {
                    a = !1;
                  });
              }),
              void 0);
        }
        function r() {
          var e = t(),
            o = $("#quote-text"),
            r = $("#quote-author");
          n(),
            $("body").animate({ backgroundColor: e, color: e }),
            $("i").animate({ color: e }),
            $(".circle-bg").animate({ backgroundColor: t() }),
            (i = window.setTimeout(function() {
              $("i").animate({ opacity: 1 }, 800),
                o.animate({ opacity: 1 }, 800),
                r.animate({ opacity: 1 }, 800),
                (i = 0);
            }, 800));
        }
        var i,
          a,
          s = [
            "#FBC02D",
            "#5D4037",
            "#E64A19",
            "#F57C00",
            "#FFA000",
            "#455A64",
            "#FBC02D",
            "#AFB42B",
            "#689F38",
            "#388E3C",
            "#00796B",
            "#0097A7",
            "#0288D1",
            "#1976D2",
            "#303F9F",
            "#512DA8",
            "#7B1FA2",
            "#C2185B",
            "#D32F2F",
            "#616161"
          ],
          c = "",
          u = "";
        $("#next-quote").on("click", o), r();
      });
  },
  function(t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.id,
        '*{margin:0;padding:0}body{background-color:#303f9f;font-family:"Josefin Sans", sans-serif;color:#303f9f;overflow:hidden}a{color:#303f9f;text-decoration:none;opacity:0.3;cursor:pointer;transition:opacity 0.5s}a:hover{opacity:1}a:active i{transform:scale(1.3)}.circle-bg{position:absolute;border-radius:100%;width:320px;height:320px;transition:transform 1.7s;z-index:899;margin:auto;top:0;left:0;bottom:0;right:0}#circle-text{display:table-cell;vertical-align:middle;position:absolute;background-color:#fff;border-radius:100%;width:320px;height:320px;z-index:999;margin:auto;top:0;left:0;bottom:0;right:0}#quote{font-size:1.1em;font-weight:bold;text-align:center;position:relative;top:50%;transform:translateY(-50%)}#quote #quote-text{opacity:0;padding:0 20px 10px}#quote #quote-author{opacity:0;padding:0 35px}#buttons{position:absolute;left:35%;bottom:10%}#buttons a{padding:10px}#buttons a i{opacity:0;transition:transform 0.5s}#buttons a i.fa-twitter{font-size:2em}#buttons a i.fa-play{font-size:1.8em}.circle-click{transform:scale(20)}\n',
        ""
      ]);
  },
  function(t, e) {
    function n(t, e) {
      var n = t[1] || "",
        r = t[3];
      if (!r) return n;
      if (e && "function" == typeof btoa) {
        var i = o(r),
          a = r.sources.map(function(t) {
            return "/*# sourceURL=" + r.sourceRoot + t + " */";
          });
        return [n]
          .concat(a)
          .concat([i])
          .join("\n");
      }
      return [n].join("\n");
    }
    function o(t) {
      var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
        n = "sourceMappingURL=data:application/json;charset=utf-8;base64," + e;
      return "/*# " + n + " */";
    }
    t.exports = function(t) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var o = n(e, t);
            return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
          }).join("");
        }),
        (e.i = function(t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var o = {}, r = 0; r < this.length; r++) {
            var i = this[r][0];
            "number" == typeof i && (o[i] = !0);
          }
          for (r = 0; r < t.length; r++) {
            var a = t[r];
            ("number" == typeof a[0] && o[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              e.push(a));
          }
        }),
        e
      );
    };
  },
  function(t, e, n) {
    var o = n(1);
    "string" == typeof o && (o = [[t.id, o, ""]]);
    var r,
      i = { hmr: !0 };
    (i.transform = r), (i.insertInto = void 0);
    n(4)(o, i);
    o.locals && (t.exports = o.locals);
  },
  function(t, e, n) {
    function o(t, e) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n],
          r = h[o.id];
        if (r) {
          r.refs++;
          for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
          for (; i < o.parts.length; i++) r.parts.push(f(o.parts[i], e));
        } else {
          for (var a = [], i = 0; i < o.parts.length; i++)
            a.push(f(o.parts[i], e));
          h[o.id] = { id: o.id, refs: 1, parts: a };
        }
      }
    }
    function r(t, e) {
      for (var n = [], o = {}, r = 0; r < t.length; r++) {
        var i = t[r],
          a = e.base ? i[0] + e.base : i[0],
          s = i[1],
          c = i[2],
          u = i[3],
          f = { css: s, media: c, sourceMap: u };
        o[a] ? o[a].parts.push(f) : n.push((o[a] = { id: a, parts: [f] }));
      }
      return n;
    }
    function i(t, e) {
      var n = y(t.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var o = w[w.length - 1];
      if ("top" === t.insertAt)
        o
          ? o.nextSibling
            ? n.insertBefore(e, o.nextSibling)
            : n.appendChild(e)
          : n.insertBefore(e, n.firstChild),
          w.push(e);
      else if ("bottom" === t.insertAt) n.appendChild(e);
      else {
        if ("object" != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var r = y(t.insertInto + " " + t.insertAt.before);
        n.insertBefore(e, r);
      }
    }
    function a(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = w.indexOf(t);
      e >= 0 && w.splice(e, 1);
    }
    function s(t) {
      var e = document.createElement("style");
      return (
        void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        u(e, t.attrs),
        i(t, e),
        e
      );
    }
    function c(t) {
      var e = document.createElement("link");
      return (
        void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        (t.attrs.rel = "stylesheet"),
        u(e, t.attrs),
        i(t, e),
        e
      );
    }
    function u(t, e) {
      Object.keys(e).forEach(function(n) {
        t.setAttribute(n, e[n]);
      });
    }
    function f(t, e) {
      var n, o, r, i;
      if (e.transform && t.css) {
        if (((i = e.transform(t.css)), !i)) return function() {};
        t.css = i;
      }
      if (e.singleton) {
        var u = x++;
        (n = g || (g = s(e))),
          (o = l.bind(null, n, u, !1)),
          (r = l.bind(null, n, u, !0));
      } else
        t.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = c(e)),
            (o = d.bind(null, n, e)),
            (r = function() {
              a(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = s(e)),
            (o = p.bind(null, n)),
            (r = function() {
              a(n);
            }));
      return (
        o(t),
        function(e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            o((t = e));
          } else r();
        }
      );
    }
    function l(t, e, n, o) {
      var r = n ? "" : o.css;
      if (t.styleSheet) t.styleSheet.cssText = C(e, r);
      else {
        var i = document.createTextNode(r),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
    function p(t, e) {
      var n = e.css,
        o = e.media;
      if ((o && t.setAttribute("media", o), t.styleSheet))
        t.styleSheet.cssText = n;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
    function d(t, e, n) {
      var o = n.css,
        r = n.sourceMap,
        i = void 0 === e.convertToAbsoluteUrls && r;
      (e.convertToAbsoluteUrls || i) && (o = A(o)),
        r &&
          (o +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
            " */");
      var a = new Blob([o], { type: "text/css" }),
        s = t.href;
      (t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
    }
    var h = {},
      m = function(t) {
        var e;
        return function() {
          return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
        };
      },
      v = m(function() {
        return window && document && document.all && !window.atob;
      }),
      b = function(t) {
        return document.querySelector(t);
      },
      y = (function(t) {
        var e = {};
        return function(t) {
          if ("function" == typeof t) return t();
          if ("undefined" == typeof e[t]) {
            var n = b.call(this, t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      g = null,
      x = 0,
      w = [],
      A = n(5);
    t.exports = function(t, e) {
      (e = e || {}),
        (e.attrs = "object" == typeof e.attrs ? e.attrs : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = v()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
      var n = r(t, e);
      return (
        o(n, e),
        function(t) {
          for (var i = [], a = 0; a < n.length; a++) {
            var s = n[a],
              c = h[s.id];
            c.refs--, i.push(c);
          }
          if (t) {
            var u = r(t, e);
            o(u, e);
          }
          for (var a = 0; a < i.length; a++) {
            var c = i[a];
            if (0 === c.refs) {
              for (var f = 0; f < c.parts.length; f++) c.parts[f]();
              delete h[c.id];
            }
          }
        }
      );
    };
    var C = (function() {
      var t = [];
      return function(e, n) {
        return (t[e] = n), t.filter(Boolean).join("\n");
      };
    })();
  },
  function(t, e) {
    t.exports = function(t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
        o = n + e.pathname.replace(/\/[^\/]*$/, "/"),
        r = t.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(t, e) {
            var r = e
              .trim()
              .replace(/^"(.*)"$/, function(t, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function(t, e) {
                return e;
              });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))
              return t;
            var i;
            return (
              (i =
                0 === r.indexOf("//")
                  ? r
                  : 0 === r.indexOf("/")
                    ? n + r
                    : o + r.replace(/^\.\//, "")),
              "url(" + JSON.stringify(i) + ")"
            );
          }
        );
      return r;
    };
  }
]);
