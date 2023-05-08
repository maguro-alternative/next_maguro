!function e(t, n, r) {
    function i(o, a) {
        if (!n[o]) {
            if (!t[o]) {
                var l = "function" == typeof require && require
                if (!a && l)
                    return l(o, !0)
                if (s)
                    return s(o, !0)
                var h = new Error("Cannot find module '" + o + "'")
                throw h.code = "MODULE_NOT_FOUND",
                h
            }
            var u = n[o] = {
                exports: {}
            }
            t[o][0].call(u.exports, function(e) {
                var n = t[o][1][e]
                return i(n ? n : e)
            }, u, u.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < r.length; o++)
        i(r[o])
    return i
}({
    1: [function(e, t, n) {
        var r = {
            isDomPresent: !0,
            navigator: navigator,
            window: window,
            document: document,
        }
        window.Processing = e("./src/")(r)}
        , {
            "./src/": 28
        }],
    2: [function(e, t, n) {
            t.exports = {
                name: "processing-js",
                version: "1.6.6",
                author: "Processing.js",
                repository: {
                    type: "git",
                    url: "git@github.com/processing-js/processing-js.git"
                },
                main: "processing.min.js",
                bugs: "https://github.com/processing-js/processing-js/issues",
                devDependencies: {
                    argv: "~0.0.2",
                    browserify: "^11.0.1",
                    express: "~3.3.3",
                    grunt: "~0.4.1",
                    "grunt-cli": "~0.1.8",
                    "grunt-contrib-jshint": "~0.4.3",
                    "http-server": "^0.9.0",
                    minifier: "^0.7.1",
                    "node-minify": "~0.7.3",
                    nunjucks: "~0.1.9",
                    open: "0.0.3"
                },
                scripts: {
                    test: "node test",
                    "test:manual": "http-server -o test/manual",
                    start: "browserify build.js -o processing.js && minify --output processing.min.js processing.js"
                },
                license: "MIT",
                dependencies: {
                    minifier: "^0.7.1"
                }
            }
        }
        , {}],
    3: [function(e, t, n) {
            t.exports = function(e) {
            }}
        , {}],
    4: [function(e, t, n) {
                t.exports = {
                    X: 0,
                    Y: 1,
                    Z: 2,
                    R: 3,
                    G: 4,
                    B: 5,
                    A: 6,
                    U: 7,
                    V: 8,
                    NX: 9,
                    NY: 10,
                    NZ: 11,
                    EDGE: 12,
                    SR: 13,
                    SG: 14,
                    SB: 15,
                    SA: 16,
                    SW: 17,
                    TX: 18,
                    TY: 19,
                    TZ: 20,
                    VX: 21,
                    VY: 22,
                    VZ: 23,
                    VW: 24,
                    AR: 25,
                    AG: 26,
                    AB: 27,
                    DR: 3,
                    DG: 4,
                    DB: 5,
                    DA: 6,
                    SPR: 28,
                    SPG: 29,
                    SPB: 30,
                    SHINE: 31,
                    ER: 32,
                    EG: 33,
                    EB: 34,
                    BEEN_LIT: 35,
                    VERTEX_FIELD_COUNT: 36,
                    P2D: 1,
                    JAVA2D: 1,
                    WEBGL: 2,
                    P3D: 2,
                    OPENGL: 2,
                    PDF: 0,
                    DXF: 0,
                    OTHER: 0,
                    WINDOWS: 1,
                    MAXOSX: 2,
                    LINUX: 3,
                    EPSILON: 1e-4,
                    MAX_FLOAT: 3.4028235e38,
                    MIN_FLOAT: -3.4028235e38,
                    MAX_INT: 2147483647,
                    MIN_INT: -2147483648,
                    PI: Math.PI,
                    TWO_PI: 2 * Math.PI,
                    TAU: 2 * Math.PI,
                    HALF_PI: Math.PI / 2,
                    THIRD_PI: Math.PI / 3,
                    QUARTER_PI: Math.PI / 4,
                    DEG_TO_RAD: Math.PI / 180,
                    RAD_TO_DEG: 180 / Math.PI,
                    WHITESPACE: " \t\n\r\f ",
                    RGB: 1,
                    ARGB: 2,
                    HSB: 3,
                    ALPHA: 4,
                    CMYK: 5,
                    TIFF: 0,
                    TARGA: 1,
                    JPEG: 2,
                    GIF: 3,
                    BLUR: 11,
                    GRAY: 12,
                    INVERT: 13,
                    OPAQUE: 14,
                    POSTERIZE: 15,
                    THRESHOLD: 16,
                    ERODE: 17,
                    DILATE: 18,
                    REPLACE: 0,
                    BLEND: 1,
                    ADD: 2,
                    SUBTRACT: 4,
                    LIGHTEST: 8,
                    DARKEST: 16,
                    DIFFERENCE: 32,
                    EXCLUSION: 64,
                    MULTIPLY: 128,
                    SCREEN: 256,
                    OVERLAY: 512,
                    HARD_LIGHT: 1024,
                    SOFT_LIGHT: 2048,
                    DODGE: 4096,
                    BURN: 8192,
                    ALPHA_MASK: 4278190080,
                    RED_MASK: 16711680,
                    GREEN_MASK: 65280,
                    BLUE_MASK: 255,
                    CUSTOM: 0,
                    ORTHOGRAPHIC: 2,
                    PERSPECTIVE: 3,
                    POINT: 2,
                    POINTS: 2,
                    LINE: 4,
                    LINES: 4,
                    TRIANGLE: 8,
                    TRIANGLES: 9,
                    TRIANGLE_STRIP: 10,
                    TRIANGLE_FAN: 11,
                    QUAD: 16,
                    QUADS: 16,
                    QUAD_STRIP: 17,
                    POLYGON: 20,
                    PATH: 21,
                    RECT: 30,
                    ELLIPSE: 31,
                    ARC: 32,
                    SPHERE: 40,
                    BOX: 41,
                    CHORD: 2,
                    PIE: 3,
                    GROUP: 0,
                    PRIMITIVE: 1,
                    GEOMETRY: 3,
                    VERTEX: 0,
                    BEZIER_VERTEX: 1,
                    CURVE_VERTEX: 2,
                    BREAK: 3,
                    CLOSESHAPE: 4,
                    OPEN: 1,
                    CLOSE: 2,
                    CORNER: 0,
                    CORNERS: 1,
                    RADIUS: 2,
                    CENTER_RADIUS: 2,
                    CENTER: 3,
                    DIAMETER: 3,
                    CENTER_DIAMETER: 3,
                    BASELINE: 0,
                    TOP: 101,
                    BOTTOM: 102,
                    NORMAL: 1,
                    NORMALIZED: 1,
                    IMAGE: 2,
                    MODEL: 4,
                    SHAPE: 5,
                    SQUARE: "butt",
                    ROUND: "round",
                    PROJECT: "square",
                    MITER: "miter",
                    BEVEL: "bevel",
                    AMBIENT: 0,
                    DIRECTIONAL: 1,
                    SPOT: 3,
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 10,
                    RETURN: 13,
                    ESC: 27,
                    DELETE: 127,
                    CODED: 65535,
                    SHIFT: 16,
                    CONTROL: 17,
                    ALT: 18,
                    CAPSLK: 20,
                    PGUP: 33,
                    PGDN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123,
                    NUMLK: 144,
                    META: 157,
                    INSERT: 155,
                    ARROW: "default",
                    CROSS: "crosshair",
                    HAND: "pointer",
                    MOVE: "move",
                    TEXT: "text",
                    WAIT: "wait",
                    NOCURSOR: "url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",
                    DISABLE_OPENGL_2X_SMOOTH: 1,
                    ENABLE_OPENGL_2X_SMOOTH: -1,
                    ENABLE_OPENGL_4X_SMOOTH: 2,
                    ENABLE_NATIVE_FONTS: 3,
                    DISABLE_DEPTH_TEST: 4,
                    ENABLE_DEPTH_TEST: -4,
                    ENABLE_DEPTH_SORT: 5,
                    DISABLE_DEPTH_SORT: -5,
                    DISABLE_OPENGL_ERROR_REPORT: 6,
                    ENABLE_OPENGL_ERROR_REPORT: -6,
                    ENABLE_ACCURATE_TEXTURES: 7,
                    DISABLE_ACCURATE_TEXTURES: -7,
                    HINT_COUNT: 10,
                    SINCOS_LENGTH: 720,
                    PRECISIONB: 15,
                    PRECISIONF: 32768,
                    PREC_MAXVAL: 32767,
                    PREC_ALPHA_SHIFT: 9,
                    PREC_RED_SHIFT: 1,
                    NORMAL_MODE_AUTO: 0,
                    NORMAL_MODE_SHAPE: 1,
                    NORMAL_MODE_VERTEX: 2,
                    MAX_LIGHTS: 8
                }
            }
        , {}],
    5: [function(e, n, r) {
                n.exports = function(e) {
                    var n = {
                        BufferMax: 200
                    }
                      , r = e.createElement("style")
                      , i = !1
                    return r.textContent = [".pjsconsole.hidden {", "  display: none!important;", "}"].join("\n"),
                    n.wrapper = e.createElement("div"),
                    r.textContent += ["", ".pjsconsole {", "  opacity: .75;", "  display: block;", "  position: fixed;", "  bottom: 0px;", "  left: 0px;", "  right: 0px;", "  height: 50px;", "  background-color: #aaa;", "}"].join("\n"),
                    n.wrapper.classList.add("pjsconsole"),
                    n.dragger = e.createElement("div"),
                    r.textContent += ["", ".pjsconsole .dragger {", "  display: block;", "  border: 3px black raised;", "  cursor: n-resize;", "  position: absolute;", "  top: 0px;", "  left: 0px;", "  right: 0px;", "  height: 5px;", "  background-color: #333;", "}"].join("\n"),
                    n.dragger.classList.add("dragger"),
                    n.closer = e.createElement("div"),
                    r.textContent += ["", ".pjsconsole .closer {", "  opacity: .5;", "  display: block;", "  border: 3px black raised;", "  position: absolute;", "  top: 10px;", "  right: 30px;", "  height: 20px;", "  width: 20px;", "  background-color: #ddd;", "  color: #000;", "  line-height: 20px;", "  text-align: center;", "  cursor: pointer", "}"].join("\n"),
                    n.closer.classList.add("closer"),
                    n.closer.innerHTML = "&#10006;",
                    n.javaconsole = e.createElement("div"),
                    r.textContent += ["", ".pjsconsole .console {", "  overflow-x: auto;", "  display: block;", "  position: absolute;", "  left: 10px;", "  right: 0px;", "  bottom: 5px;", "  top: 10px;", "  overflow-y: scroll;", "  height: 40px;", "}"].join("\n"),
                    n.javaconsole.setAttribute("class", "console"),
                    n.wrapper.appendChild(n.dragger),
                    n.wrapper.appendChild(n.javaconsole),
                    n.wrapper.appendChild(n.closer),
                    n.dragger.onmousedown = function(t) {
                    }
                    ,
                    n.BufferArray = [],
                    n.print = n.log = function() {
                    }
                    ,
                    n.println = function() {
                    },
                    n.showconsole = function() {
                    },
                    n.hideconsole = function() {
                    },
                    n.closer.onclick = function() {
                    },
                n.hideconsole(),
                n
                }
            }
        , {}],
    6: [function(e, t, n) {
        t.exports = function(e) {
            function t() {}
            t.prototype = e.PConstants
            var s = new t
            return Object.keys(e).forEach(function(t) {
                s[t] = e[t]
            }),
            s.defineProperty = function(e, t, n) {
                "defineProperty"in Object ? Object.defineProperty(e, t, n) : (n.hasOwnProperty("get") && e.__defineGetter__(t, n.get),
                n.hasOwnProperty("set") && e.__defineSetter__(t, n.set))
            },
            s.extendClassChain = function(e) {},
            s.extendStaticMembers = function(e, t) {},
            s.extendInterfaceMembers = function(e, t) {},
            s.addMethod = function(e, t, n, r) {},
            s.createJavaArray = function(e, t) {},
            s.defineProperty(s, "screenWidth", {
                get: function() {
                    return window.innerWidth
                }
            }),
            s.defineProperty(s, "screenHeight", {
                get: function() {
                    return window.innerHeight
                }
            }),
            s
        }
    }
    , {}],
    7: [function(e, t, n) {
        t.exports = function(e, t) {
            var n, r = t.window, i = t.document, s = r.XMLHttpRequest, o = t.noop, a = t.isDOMPresent, h = t.version
            e.version = h ? h : "@DEV-VERSION@",
            e.lib = {},
            e.registerLibrary = function(t, n) {},
            e.Sketch = function(e) {
                this.attachFunction = e,
                this.options = {
                    pauseOnBlur: !1,
                    globalKeyEvents: !1
                },
                this.onLoad = o,
                this.onSetup = o,
                this.onPause = o,
                this.onLoop = o,
                this.onFrameStart = o,
                this.onFrameEnd = o,
                this.onExit = o,
                this.params = {},
                this.imageCache = {
                    pending: 0,
                    images: {},
                    operaCache: {},
                    add: function(e, t) {}
                },
                this.sourceCode = void 0,
                this.attach = function(e) {},
                this.toString = function() {}
            }
            var u = e.loadSketchFromSources = function(t, n, o) {}
            , c = function() {
              i.removeEventListener("DOMContentLoaded", c, !1)
              for (var t; e.instances.length > 0; )
                  for (t = e.instances.length - 1; t >= 0; t--)
                      e.instances[t] && e.instances[t].exit()
              var r, s = i.getElementsByTagName("canvas")
              for (t = 0,
              l = s.length; t < l; t++) {
                  var o = s[t].getAttribute("data-processing-sources")
                  if (null === o && (o = s[t].getAttribute("data-src"),
                  null === o && (o = s[t].getAttribute("datasrc"))),
                  o) {
                      r = o.split(/\s+/g)
                      for (var a = 0; a < r.length; )
                          r[a] ? a++ : r.splice(a, 1)
                      u(s[t], r)
                  }
              }
              var h, f, p, m, g = i.getElementsByTagName("script"), d = []
              for (h = g.length - 1; h >= 0; h--)
                  d.push(g[h])
              for (h = 0,
              f = d.length; h < f; h++) {
                  var v = d[h]
                  if (v.getAttribute) {
                      var y = v.getAttribute("type")
                      if (y && ("text/processing" === y.toLowerCase() || "application/processing" === y.toLowerCase())) {
                          var x = v.getAttribute("data-processing-target")
                          if (s = n,
                          x)
                              s = i.getElementById(x)
                          else {
                              for (var A = v.nextSibling; A && 1 !== A.nodeType; )
                                  A = A.nextSibling
                              A && "canvas" === A.nodeName.toLowerCase() && (s = A)
                          }
                          if (s) {
                              if (v.getAttribute("src")) {
                                  r = v.getAttribute("src").split(/\s+/),
                                  u(s, r)
                                  continue
                              }
                              p = v.textContent || v.text,
                              m = new e(s,p)
                          }
                        }
                    }
                }
            }
            return i.addEventListener("DOMContentLoaded", c, !1),
            e.reload = c,
            e.disableInit = function() {},
            e
        }
    }
    , {}],
    8: [function(e, t, n) {
        t.exports = function(e, t) {}
    }
    , {}],
    9: [function(e, t, n) {
        t.exports = function(e, t) {}
    }
    , {}],
    10: [function(e, t, n) {
        t.exports = function(e) {}
        var r = (e.virtHashCode,
            e.virtEquals)
            return n
        }
    , {}],
    11: [function(e, t, n) {
        t.exports = function(e, t) {
            var n = function(r) {}
            return n.prototype.toString = function() {},
            n.prototype.valueOf = function() {},
            n
        }({})
    }
    , {}],
    12: [function(e, t, n) {
        t.exports = function(e) {}
        var n = e.virtHashCode
          , r = e.virtEquals
        return t
    }
    , {}],
    13: [function(e, t, n) {
        t.exports = function(e, t) {
            function n(e) {
                var t = 250
                , n = e.size / t
                , r = i.createElement("canvas")
            r.width = 2 * t,
            r.height = 2 * t,
            r.style.opacity = 0
            var o = e.getCSSDefinition(t + "px", "normal")
              , a = r.getContext("2d")
            a.font = o
            var l = "dbflkhyjqpg"
            r.width = a.measureText(l).width,
            a.font = o
            var h = i.createElement("div")
            h.style.position = "absolute",
            h.style.opacity = 0,
            h.style.fontFamily = '"' + e.name + '"',
            h.style.fontSize = t + "px",
            h.innerHTML = l + "<br/>" + l,
            i.body.appendChild(h)
            var u = r.width
              , c = r.height
              , f = c / 2
            a.fillStyle = "white",
            a.fillRect(0, 0, u, c),
            a.fillStyle = "black",
            a.fillText(l, 0, f)
            for (var p = a.getImageData(0, 0, u, c).data, m = 0, g = 4 * u, d = p.length; ++m < d && 255 === p[m]; )
                s()
            var v = Math.round(m / g)
            for (m = d - 1; --m > 0 && 255 === p[m]; )
                s()
            var y = Math.round(m / g)
            if (e.ascent = n * (f - v),
            e.descent = n * (y - f),
            i.defaultView.getComputedStyle) {
                var x = i.defaultView.getComputedStyle(h, null).getPropertyValue("height")
                x = n * x.replace("px", ""),
                x >= 2 * e.size && (e.leading = Math.round(x / 2))
            }
            if (i.body.removeChild(h),
            e.caching)
                return a
        }
        function r(e, r) {
            e === t && (e = ""),
            this.name = e,
            r === t && (r = 0),
            this.size = r,
            this.glyph = !1,
            this.ascent = 0,
            this.descent = 0,
            this.leading = 1.2 * r
            var i = e.indexOf(" Italic Bold")
            i !== -1 && (e = e.substring(0, i)),
            this.style = "normal"
            var s = e.indexOf(" Italic")
            s !== -1 && (e = e.substring(0, s),
            this.style = "italic"),
            this.weight = "normal"
            var o = e.indexOf(" Bold")
            if (o !== -1 && (e = e.substring(0, o),
            this.weight = "bold"),
            this.family = "sans-serif",
            e !== t)
                switch (e) {
                case "sans-serif":
                case "serif":
                case "monospace":
                case "fantasy":
                case "cursive":
                    this.family = e
                    break
                default:
                    this.family = '"' + e + '", sans-serif'
                }
            this.context2d = n(this),
            this.css = this.getCSSDefinition(),
            this.context2d && (this.context2d.font = this.css)
        }
        var i = (e.Browser.window,
        e.Browser.document)
          , s = e.noop
        return r.prototype.caching = !0,
        r.prototype.getCSSDefinition = function(e, n) {
            e === t && (e = this.size + "px"),
            n === t && (n = this.leading + "px")
            var r = [this.style, "normal", this.weight, e + "/" + n, this.family]
            return r.join(" ")
        }
        ,
        r.prototype.measureTextWidth = function(e) {}
        ,
        r.prototype.measureTextWidthFallback = function(e) {}
        ,
        r.PFontCache = {
            length: 0
        },
        r.get = function(e, t) {
            t = (10 * t + .5 | 0) / 10
            var n = r.PFontCache
              , i = e + "/" + t
            if (!n[i]) {
                if (n[i] = new r(e,t),
                n.length++,
                50 === n.length) {
                    r.prototype.measureTextWidth = r.prototype.measureTextWidthFallback,
                    r.prototype.caching = !1
                    var s
                    for (s in n)
                        "length" !== s && (n[s].context2d = null)
                    return new r(e,t)
                }
                if (400 === n.length)
                    return r.PFontCache = {},
                    r.get = r.getFallback,
                    new r(e,t)
            }
            return n[i]
        }
        ,
        r.getFallback = function(e, t) {}
        ,
        r.list = function() {}
        ,
        r.preloading = {
            template: {},
            initialized: !1,
            initialize: function() {},
            getElementWidth: function(e) {},
            timeAttempted: 0,
            pending: function(e) {},
            fontList: [],
            addedList: {},
            add: function(e) {},
            r
        }
    }
    }
    , {}],
    14: [function(e, t, n) {
        t.exports = function(e, t) {
            var n = e.p
              , r = function() {}
              return r.prototype = {
                  set: function() {},
                  get: function() {},
                  reset: function() {},
                  array: function() {},
                  translate: function(e, t) { },
                  invTranslate: function(e, t) {},
                  transpose: function() {},
                  mult: function(e, t) {},
                  multX: function(e, t) {},
                  multY: function(e, t) {},
                  skewX: function(e) {},
                  skewY: function(e) {},
                  shearX: function(e) {},
                  shearY: function(e) {},
                  determinant: function() {},
                  invert: function() {},
                  scale: function(e, n) {},
                  invScale: function(e, t) {},
                  apply: function() {},
                  preApply: function() {},
                  rotate: function(e) {},
                  rotateZ: function(e) {},
                  invRotateZ: function(e) {},
                  print: function() {},
                  r
              }
          }
        }
    , {}],
    15: [function(e, t, n) {
        t.exports = function(e, t) {
            var n = e.p,
            r = function() {}
            return r.prototype = {
                set: function() {},
                get: function() {},
            reset: function() {},
            array: function() {},
            translate: function(e, n, r) {},
            transpose: function() {},
            mult: function(e, t) {},
            preApply: function() {},
            apply: function() {},
            rotate: function(e, t, n, r) {},
            invApply: function() {},
            rotateX: function(e) {},
            rotateY: function(e) {},
            rotateZ: function(e) {},
            scale: function(e, n, r) {},
            skewX: function(e) {},
            skewY: function(e) {},
            shearX: function(e) {},
            shearY: function(e) {},
            multX: function(e, t, n, r) {},
            multY: function(e, t, n, r) {},
            multZ: function(e, t, n, r) {},
            multW: function(e, t, n, r) {},
            invert: function() {},
            toString: function() {},
            print: function() {},
            invTranslate: function(e, t, n) {},
            invRotateX: function(e) {},
            invRotateY: function(e) {},
            invRotateZ: function(e) {},
            invScale: function(e, t, n) {}
            }
        },
        r
    }
    , {}],
    16: [function(e, t, n) {
        t.exports = function(e) {
            var t = e.PConstants
              , n = e.PMatrix2D
              , r = e.PMatrix3D
              , i = function(e) {
                this.family = e || t.GROUP,
                this.visible = !0,
                this.style = !0,
                this.children = [],
                this.nameTable = [],
                this.params = [],
                this.name = "",
                this.image = null,
                this.matrix = null,
                this.kind = null,
                this.close = null,
                this.width = null,
                this.height = null,
                this.parent = null
            }
            return i.prototype = {
                isVisible: function() {},
                setVisible: function(e) {},
                disableStyle: function() {},
                enableStyle: function() {},
                getFamily: function() {},
                getWidth: function() {},
                getHeight: function() {},
                setName: function(e) {},
                getName: function() {},
                draw: function(e) {},
                drawImpl: function(e) {},
                drawPath: function(e) {},
                drawGeometry: function(e) {},
                drawGroup: function(e) {},
                drawPrimitive: function(e) {},
                pre: function(e) {},
                post: function(e) {},
                styles: function(e) {},
                getChild: function(e) {},
                getChildCount: function() {},
                addChild: function(e) {},
                addName: function(e, t) {},
                translate: function() { },
                checkMatrix: function(e) {},
                rotateX: function(e) {},
                rotateY: function(e) {},
                rotateZ: function(e) {},
                rotate: function() {},
                scale: function() {},
                resetMatrix: function() {},
                applyMatrix: function(e) {},
                i
            }
        }
    }
    , {}],
    17: [function(e, t, n) {
        t.exports = function(e) {
            var t = e.CommonFunctions
              , n = e.PConstants
              , r = e.PShape
              , i = e.XMLElement
              , s = e.colors
              , o = function() {}
              return o.prototype = new r,
              o.prototype.parseMatrix = function() {}
              return function(n) {}
            }(),
            o.prototype.parseChildren = function(e) {}
            ,
            o.prototype.getName = function() {
                return this.name
            }
            ,
            o.prototype.parseChild = function(e) {}
            ,
            o.prototype.parsePath = function() {}
            ,
            o.prototype.parsePathQuadto = function(e, t, r, i, s, o) {}
            ,
            o.prototype.parsePathCurveto = function(e, t, r, i, s, o) {}
            ,
            o.prototype.parsePathLineto = function(e, t) {}
            ,
            o.prototype.parsePathMoveto = function(e, t) {}
            ,
            o.prototype.parsePathVertex = function(e, t) {}
            ,
            o.prototype.parsePathCode = function(e) {}
            ,
            o.prototype.parsePoly = function(e) {}
            ,
            o.prototype.parseRect = function() {}
            ,
            o.prototype.parseEllipse = function(e) {}
            ,
            o.prototype.parseLine = function() {}
            ,
            o.prototype.parseColors = function(e) {}
            ,
            o.prototype.setFillOpacity = function(e) {}
            ,
            o.prototype.setFill = function(e) {}
            ,
            o.prototype.setOpacity = function(e) {}
            ,
            o.prototype.setStroke = function(e) {}
            ,
            o.prototype.setStrokeWeight = function(e) {}
            ,
            o.prototype.setStrokeJoin = function(e) {}
            ,
            o.prototype.setStrokeCap = function(e) {}
            ,
            o.prototype.setStrokeOpacity = function(e) {} 
            ,
            o.prototype.parseRGB = function(e) {}
            ,
            o.prototype.parseUnitSize = function(e) {}
            ,
            o
        }
    , {}],
    18: [function(e, t, n) {
        t.exports = function(e, t) {}
        function r(e) {}
        var i = e.PConstants
        n.fromAngle = function(e, r) {}
        ,
        n.random2D = function(e) {}
        ,
        n.random3D = function(e) {},
        n.dist = function(e, t) {}
        ,
        n.dot = function(e, t) {}
        ,
        n.cross = function(e, t) {}
        ,
        n.sub = function(e, t) {}
        ,
        n.angleBetween = function(e, t) {}
        ,
        n.lerp = function(e, t, r) {}
        ,
        n.prototype = {
            set: function(e, t, n) {},
            get: function() {},
            mag: function() {},
            magSq: function() {},
            setMag: function(e, n) {},
            add: function(e, t, n) {},
            sub: function(e, t, n) {},
            mult: function(e) {},
            div: function(e) {},
            rotate: function(e) {},
            dist: function(e) {},
            dot: function(e, t, n) {},
            cross: function(e) {},
            lerp: function(e, t, n, r) {},
            normalize: function() {},
            limit: function(e) {},
            heading: function() {},
            heading2D: function() {},
            toString: function() {},
            array: function() {}
        }
        for (var s in n.prototype)
            n.prototype.hasOwnProperty(s) && !n.hasOwnProperty(s) && (n[s] = r(s))
        return n
    }
    , {}],
    19: [function(e, t, n) {
        t.exports = function() {
            var e = function(e, t, n, r, i) {}
            return e.prototype = {
                getName: function() {},
                getFullName: function() {},
                getNamespace: function() {},
                getValue: function() {},
                getType: function() {},
                setValue: function(e) {}
            },
            e
        }
    }
    , {}],
    20: [function(e, t, n) {
        t.exports = function(e, t) {
            var n = e.Browser
              , r = n.ajax
              , i = n.window
              , s = (i.XMLHttpRequest,
            i.DOMParser)
              , o = e.XMLAttribute
              , a = function(e, n, r, i) {
            }
            return a.prototype = {
                parse: function(e, t) {},
                parseChildrenRecursive: function(e, t) {},
                createElement: function(e, n, r, i) {},
                createPCDataElement: function(e, t) {},
                createCDataElement: function(e) {},
                hasAttribute: function() {},
                equals: function(e) {},
                getContent: function() {},
                getAttribute: function() {},
                getStringAttribute: function() {},
                getString: function(e) {},
                getFloatAttribute: function() {},
                getFloat: function(e) {},
                getIntAttribute: function() {},
                getInt: function(e) {},
                hasChildren: function() {},
                addChild: function(e) {},
                insertChild: function(e, t) {},
                getChild: function(e) {},
                getChildren: function() {},
                getChildCount: function() {},
                getChildRecursive: function(e, t) {},
                getChildrenRecursive: function(e, t) {},
                isLeaf: function() {},
                listChildren: function() {},
                removeAttribute: function(e, t) {},
                removeChild: function(e) {},
                removeChildAtIndex: function(e) {},
                findAttribute: function(e, t) {},
                setAttribute: function() {},
                setString: function(e, t) {},
                setInt: function(e, t) {},
                setFloat: function(e, t) {},
                setContent: function(e) {},
                setName: function() {},
                getName: function() {},
                getLocalName: function() {},
                getAttributeCount: function() {},
                toString: function() {}
            },
            a.parse = function(e) {}
            ,
            a
        }
    }, {}],
    21: [function(e, t, n) {
        t.exports = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        }
    }
    , {}],
    22: [function(e, t, n) {
        t.exports = function(e, t, n) {
            return function(r, i) {
                r.__contains = function(e, t) {},
                r.__replaceAll = function(e, t, n) {}
                ,
                r.__replaceFirst = function(e, t, n) {}
                ,
                r.__replace = function(e, t, n) {}
                ,
                r.__equals = function(e, n) {}
                ,
                r.__equalsIgnoreCase = function(e, t) {}
                ,
                r.__toCharArray = function(e) {}
                ,
                r.__split = function(e, t, r) {}
                ,
                r.__codePointAt = function(e, t) {}
                ,
                r.__matches = function(e, t) {}
                ,
                r.__startsWith = function(e, t, n) {}
                ,
                r.__endsWith = function(e, t) {}
                ,
                r.__hashCode = function(t) {}
                ,
                r.__printStackTrace = function(e) {}
            }
        }
    }
    , {}],
    23: [function(e, t, n) {
        t.exports = function(e, t) {
            function n(e, t) {
                var n = e || 362436069
                  , r = t || 521288629
                  , i = function() {
                    return n = 36969 * (65535 & n) + (n >>> 16) & 4294967295,
                    r = 18e3 * (65535 & r) + (r >>> 16) & 4294967295,
                    4294967295 & ((65535 & n) << 16 | 65535 & r)
                }
                this.doubleGenerator = function() {}
                ,
                this.intGenerator = i
            }
            function r(e) {
                function r(e, t, n, r) {}
                function i(e, t, n) {
                    var r = 0 === (1 & e) ? t : n
                    return 0 === (2 & e) ? -r : r
                }
                function s(e, t) {}
                function o(e, t, n) {
                    return t + e * (n - t)
                }
                var a, l, h = e !== t ? new n(e,(e << 16) + (e >> 16)) : n.createRandomized(), u = new Uint8Array(512)
                for (a = 0; a < 256; ++a)
                    u[a] = a
                for (a = 0; a < 256; ++a) {
                    var c = u[l = 255 & h.intGenerator()]
                    u[l] = u[a],
                    u[a] = c
                }
                for (a = 0; a < 256; ++a)
                    u[a + 256] = u[a]
                this.noise3d = function(e, t, n) {}
                ,
                this.noise2d = function(e, t) {
                    var n = 255 & Math.floor(e)
                      , r = 255 & Math.floor(t)
                    e -= Math.floor(e),
                    t -= Math.floor(t)
                    var s = (3 - 2 * e) * e * e
                      , a = (3 - 2 * t) * t * t
                      , l = u[n] + r
                      , h = u[n + 1] + r
                    return o(a, o(s, i(u[l], e, t), i(u[h], e - 1, t)), o(s, i(u[l + 1], e, t - 1), i(u[h + 1], e - 1, t - 1)))
                }
                ,
                this.noise1d = function(e) {}
            }
            var i = function() {}
            e.abs = Math.abs,
            e.ceil = Math.ceil,
            e.exp = Math.exp,
            e.floor = Math.floor,
            e.log = Math.log,
            e.pow = Math.pow,
            e.round = Math.round,
            e.sqrt = Math.sqrt,
            e.acos = Math.acos,
            e.asin = Math.asin,
            e.atan = Math.atan,
            e.atan2 = Math.atan2,
            e.cos = Math.cos,
            e.sin = Math.sin,
            e.tan = Math.tan,
            e.constrain = function(e, t, n) {}
            ,
            e.dist = function(){} ,
            e.lerp = function(e, t, n) {}
            ,
            e.mag = function(e, t, n) {}
            ,
            e.map = function(e, t, n, r, i) {}
            ,
            e.max = function() {}
            ,
            e.min = function() {}
            ,
            e.norm = function(e, t, n) {}
            ,
            e.sq = function(e) {}
            ,
            e.degrees = function(e) {}
            ,
            e.random = function(e, t) {}
            ,
            n.createRandomized = function() {
                var e = new Date
                return new n(e / 6e4 & 4294967295,4294967295 & e)
            }
            ,
            e.randomSeed = function(e) {}
            ,
            e.randomGaussian = function() {}
            var s = {
                generator: t,
                octaves: 4,
                fallout: .5,
                seed: t
            }
            e.noise = function(e, n, i) {
                s.generator === t && (s.generator = new r(s.seed))
                for (var o = s.generator, a = 1, l = 1, h = 0, u = 0; u < s.octaves; ++u) {
                    switch (a *= s.fallout,
                    arguments.length) {
                    case 1:
                        h += a * (1 + o.noise1d(l * e)) / 2
                        break
                    case 2:
                        h += a * (1 + o.noise2d(l * e, l * n)) / 2
                        break
                    case 3:
                        h += a * (1 + o.noise3d(l * e, l * n, l * i)) / 2
                    }
                    l *= 2
                }
                return h
            }
            ,
            e.noiseDetail = function(e, n) {}
            ,
            e.noiseSeed = function(e) {}
        }
    }
    , {}],
    24: [function(e, t, n) {
        t.exports = function(e) {
            var t = {
                trim: function(e) {},
                radians: function(e) {},
                nfCoreScalar: function(t, n, r, i, s, o) {},
                nfCore: function(e, n, r, i, s, o) {},
                nf: function(e, n, r) {},
                nfs: function(e, n, r) {},
                nfp: function(e, n, r) {},
                nfc: function(e, n) {},
                withCommonFunctions: function(e) {
                    ["trim", "radians", "nf", "nfs", "nfp", "nfc"].forEach(function(n) {
                        e[n] = t[n]
                    })
                }
            }
            return t
        }()
    }
    , {}],
    25: [function(e, t, n) {
        t.exports = function(e, t, n, r, i, s, o) {}
        var u = ["mouseout", "mousemove", "mousedown", "mouseup", "DOMMouseScroll", "mousewheel", "touchstart"]
        n(t, "touchstart", function(i) {}),
        function() {
            var r = !0
              , i = function(e) {}
            e.disableContextMenu = function() {}
            ,
            e.enableContextMenu = function() {}(),
            n(t, "mousemove", function(n) {}),
            n(t, "mouseout", function(t) {}),
            n(t, "mouseover", function(n) {}),
            t.onmousedown = function() {}
            ,
            n(t, "mousedown", function(t) {}),
            n(t, "mouseup", function(t) {})
            var c = function(n) {}
            n(i, "DOMMouseScroll", c),
            n(i, "mousewheel", c)
        }
    }
    , {}],
    26: [function(e, t, n) {
        t.exports = function(t, n) {}
        var o, a = n.defaultScope, l = a.PConstants, h = n.aFunctions, u = n.Browser, c = u.document
        t.compile = function(e) {}
        var f = e("../Helpers/PjsConsole")
        return t.logger = new f(c),
        t
    } , {
        "../Helpers/PjsConsole": 5
    }],
    27: [function(e, t, n) {
        t.exports = function(e, t) {
            function n(e, t) {
                return e in l ? l[e] : "function" == typeof l[t] ? l[t] : function(e) {}
            }
            var r = e.defaultScope
              , i = e.extend
              , s = e.Browser
              , o = s.ajax
              , a = s.navigator
              , l = s.window
              , h = (l.XMLHttpRequest,
            s.document)
              , u = e.noop
              , c = r.PConstants
            PFont = r.PFont,
            PShapeSVG = r.PShapeSVG,
            PVector = r.PVector,
            Char = Character = r.Char,
            ObjectIterator = r.ObjectIterator,
            XMLElement = r.XMLElement,
            XML = r.XML
            var f, p = l.HTMLCanvasElement, m = l.HTMLImageElement
            try {
                f = l.localStorage
            } catch (e) {
                f = {}
            }
            "document"in this && !("fake"in this.document)
            h.head || (h.head = h.getElementsByTagName("head")[0])
            var g = n("Float32Array", "WebGLFloatArray")
              , d = n("Int32Array", "WebGLIntArray")
              , v = n("Uint16Array", "WebGLUnsignedShortArray")
              , y = n("Uint8Array", "WebGLUnsignedByteArray")
            if (h.documentMode >= 9 && !h.doctype)
                throw "The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>"
            var x = []
              , A = {}
              , b = function(e) {}
              , w = function(e) {}
              , E = this.Processing = function(e, n, s) {
                function x(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n),
                    ye.push({
                        elem: e,
                        type: t,
                        fn: n
                    })
                }
                function se(e) {
                    we = "3D" === e ? new sr : "2D" === e ? new ir : new or
                    for (var t in or.prototype)
                        or.prototype.hasOwnProperty(t) && t.indexOf("$") < 0 && (xe[t] = we[t])
                    we.$init()
                }
                function oe(e) {
                    return function() {}
                }
                if (!(this instanceof E))
                    throw "called Processing constructor as if it were a function: missing 'new'."
                var de = {}
                  , ve = e === t && n === t
                if (de = ve ? h.createElement("canvas") : "string" == typeof e ? h.getElementById(e) : e,
                !("getContext"in de))
                    throw "called Processing constructor without passing canvas element reference or id."
                var ye = []
                  , xe = this
                xe.Char = xe.Character = Char,
                ye = [],
                i.withCommonFunctions(xe),
                i.withMath(xe),
                i.withProxyFunctions(xe, P),
                i.withTouch(xe, de, x, S, h, c),
                s && Object.keys(s).forEach(function(e) {
                    xe[e] = s[e]
                }),
                xe.externals = {
                    canvas: de,
                    context: t,
                    sketch: t,
                    window: l
                },
                xe.name = "Processing.js Instance",
                xe.use3DContext = !1,
                xe.focused = !1,
                xe.breakShape = !1,
                xe.glyphTable = {},
                xe.pmouseX = 0,
                xe.pmouseY = 0,
                xe.mouseX = 0,
                xe.mouseY = 0,
                xe.mouseButton = 0,
                xe.mouseScroll = 0,
                xe.mouseClicked = t,
                xe.mouseDragged = t,
                xe.mouseMoved = t,
                xe.mousePressed = t,
                xe.mouseReleased = t,
                xe.mouseScrolled = t,
                xe.mouseOver = t,
                xe.mouseOut = t,
                xe.touchStart = t,
                xe.touchEnd = t,
                xe.touchMove = t,
                xe.touchCancel = t,
                xe.key = t,
                xe.keyCode = t,
                xe.keyPressed = u,
                xe.keyReleased = u,
                xe.keyTyped = u,
                xe.draw = t,
                xe.setup = t,
                xe.__mousePressed = !1,
                xe.__keyPressed = !1,
                xe.__frameRate = 60,
                xe.frameCount = 0,
                xe.width = 100,
                xe.height = 100
                var Ae, be, we, Ee, Se, Pe, Ce, Me, Te, _e, Re, Le, Ie, De, Oe, Ne, Fe, ke, Be, $e, Ge, Ve, ze, Ue, He, Xe, Ye, je, Ke, We, Ze, qe, Qe, Je, et, tt, nt, rt, it, st, ot, at = !0, lt = [1, 1, 1, 1], ht = 4294967295, ut = !0, ct = !0, ft = [0, 0, 0, 1], pt = 4278190080, mt = !0, gt = 1, dt = !1, vt = !1, yt = !0, xt = 0, At = c.CORNER, bt = c.CENTER, wt = 0, Et = 0, St = 0, Pt = c.NORMAL_MODE_AUTO, Ct = 60, Mt = 1e3 / Ct, Tt = c.ARROW, _t = de.style.cursor, Rt = c.POLYGON, Lt = [], It = 0, Dt = 20, Ot = !1, Nt = -3355444, Ft = 20, kt = 255, Bt = 255, $t = 255, Gt = 255, Vt = 0, zt = 0, Ut = c.RGB, Ht = null, Xt = null, Yt = Date.now(), jt = Yt, Kt = 0, Wt = {
                    attributes: {},
                    locations: {}
                }, Zt = {
                    width: 0,
                    height: 0
                }, qt = c.IMAGE, Qt = !1, Jt = c.LEFT, en = c.BASELINE, tn = c.MODEL, nn = "Arial", rn = 12, sn = 9, on = 2, an = 14, ln = PFont.get(nn, rn), hn = null, un = !1, cn = 1e3, fn = [], pn = null, mn = [c.SHIFT, c.CONTROL, c.ALT, c.CAPSLK, c.PGUP, c.PGDN, c.END, c.HOME, c.LEFT, c.UP, c.RIGHT, c.DOWN, c.NUMLK, c.INSERT, c.F1, c.F2, c.F3, c.F4, c.F5, c.F6, c.F7, c.F8, c.F9, c.F10, c.F11, c.F12, c.META], gn = 0, dn = 0, vn = 0, yn = [], xn = [], An = [], bn = new g(c.SINCOS_LENGTH), wn = new g(c.SINCOS_LENGTH), En = !1, Sn = !1, Pn = 60 * (Math.PI / 180), Cn = xe.width / 2, Mn = xe.height / 2, Tn = Mn / Math.tan(Pn / 2), _n = Tn / 10, Rn = 10 * Tn, Ln = xe.width / xe.height, In = [], Dn = [], On = 0, Nn = !1, Fn = !1, kn = !0, Bn = c.CORNER, $n = [], Gn = new g([.5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5]), Vn = new g([.5, .5, .5, .5, -.5, .5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, .5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5]), zn = new g([0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]), Un = new g([0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0]), Hn = new g([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]), Xn = "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}", Yn = "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}", jn = "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}", Kn = "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}", Wn = /Windows/.test(a.userAgent), Zn = "varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );" + (Wn ? "  spotAttenuation = 1.0; " : "  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;") + "  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}", qn = "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}", Qn = function(e, t, n) {
                }, Jn = function(e, t, n, r, i) {
                }, er = Jn, tr = function(e, t, n, r, i) {
                }, nr = function(e, t, n, r, i) {}, rr = function() {}, ir = function() {}, sr = function() {}, or = function() {}
                ir.prototype = new rr,
                ir.prototype.constructor = ir,
                sr.prototype = new rr,
                sr.prototype.constructor = sr,
                or.prototype = new rr,
                or.prototype.constructor = or,
                rr.prototype.a3DOnlyFunction = u,
                xe.shape = function(e, t, n, r, i) {}
                ,
                xe.shapeMode = function(e) {}
                ,
                xe.loadShape = function(e) {}
                ,
                xe.loadXML = function(e) {}
                ,
                xe.parseXML = function(e) {}
                var ar = function(e) {}
                , lr = xe.PMatrix2D = function() {}
              lr.prototype = {
                  set: function() {},
                  get: function() {},
                  reset: function() {},
                  array: function() {},
                  translate: function(e, t) {},
                  invTranslate: function(e, t) {},
                  transpose: function() {},
                  mult: function(e, t) {},
                  multX: function(e, t) {},
                  multY: function(e, t) {},
                  skewX: function(e) {},
                  skewY: function(e) {},
                  shearX: function(e) {},
                  shearY: function(e) {},
                  determinant: function() {},
                  invert: function() {},
                  scale: function(e, t) {},
                  invScale: function(e, t) {},
                  apply: function() {},
                  preApply: function() {},
                  rotate: function(e) {},
                  rotateZ: function(e) {},
                  invRotateZ: function(e) {},
                  print: function() {}
              }
              var hr = xe.PMatrix3D = function() {}
              hr.prototype = {
                  set: function() {},
                  get: function() {},
                  reset: function() {},
                  array: function() {},
                  translate: function(e, n, r) {},
                  transpose: function() {},
                  mult: function(e, t) {},
                  preApply: function() {},
                  apply: function() {},
                  rotate: function(e, t, n, r) {},
                  invApply: function() {},
                  rotateX: function(e) { },
                  rotateY: function(e) {},
                  rotateZ: function(e) {},
                  scale: function(e, t, n) {},
                  skewX: function(e) {},
                  skewY: function(e) {},
                  shearX: function(e) {},
                  shearY: function(e) {},
                  multX: function(e, t, n, r) {},
                  multY: function(e, t, n, r) {},
                  multZ: function(e, t, n, r) {},
                  multW: function(e, t, n, r) {},
                  invert: function() {},
                  toString: function() {},
                  print: function() {},
                  invTranslate: function(e, t, n) {},
                  invRotateX: function(e) {},
                  invRotateY: function(e) {},
                  invRotateZ: function(e) {},
                  invScale: function(e, t, n) {}
              }
              var ur = xe.PMatrixStack = function() {}
              ur.prototype.load = function() {}
              ,
              ir.prototype.$newPMatrix = function() {}
              ,
              sr.prototype.$newPMatrix = function() {}
              ,
              ur.prototype.push = function() {}
              ,
              ur.prototype.pop = function() {}
              ,
              ur.prototype.peek = function() {}
              ,
              ur.prototype.mult = function(e) {}
              ,
              xe.split = function(e, t) {}
              ,
              xe.splitTokens = function(e, n) {}
              ,
              xe.append = function(e, t) {}
              ,
              xe.concat = function(e, t) {}
              ,
              xe.sort = function(e, t) {}
              ,
              xe.splice = function(e, t, n) {}
              ,
              xe.subset = function(e, n, r) {}
              ,
              xe.join = function(e, t) {}
              ,
              xe.shorten = function(e) {}
              ,
              xe.expand = function(e, t) {}
              ,
              xe.arrayCopy = function() {}
              ,
              xe.reverse = function(e) {}
              ,
              xe.mix = function(e, t, n) {}
              ,
              xe.peg = function(e) {}
              ,
              xe.modes = function() {}
              var t = c.ALPHA_MASK
                , n = c.RED_MASK
                , r = c.GREEN_MASK
                , i = c.BLUE_MASK
                , s = Math.min
                , o = Math.max
              return {
                  replace: function(e, t) {},
                  blend: function(e, o) {},
                  add: function(e, o) {},
                  subtract: function(e, a) {},
                  lightest: function(e, a) {},
                  darkest: function(e, o) {},
                  difference: function(s, o) {},
                  exclusion: function(s, o) {},
                  multiply: function(s, o) {},
                  screen: function(s, o) {},
                  hard_light: function(s, o) {},
                  soft_light: function(s, o) {},
                  overlay: function(s, o) {},
                  dodge: function(s, o) {},
                  burn: function(s, o) {}
                }(),
                xe.color = function(e, n, r, i) {}
                ,
                xe.color.toString = function(e) {}
                ,
                xe.color.toInt = function(e, t, n, r) {}
                ,
                xe.color.toArray = function(e) {}
                ,
                xe.color.toGLArray = function(e) {}
                ,
                xe.color.toRGB = function(e, t, n) {}
                ,
                xe.brightness = function(e) {}
                ,
                xe.saturation = function(e) {}
                ,
                xe.hue = function(e) {}
                ,
                xe.red = function(e) {}
                ,
                xe.green = function(e) {}
                ,
                xe.blue = function(e) {}
                ,
                xe.alpha = function(e) {}
                ,
                xe.lerpColor = function(e, t, n) {}
                ,
                xe.colorMode = function() {}
                ,
                xe.blendColor = function(e, t, n) {}
                ,
                xe.printMatrix = function() {}
                ,
                ir.prototype.translate = function(e, t) {}
                ,
                sr.prototype.translate = function(e, t, n) {}
                ,
                ir.prototype.scale = function(e, t) {}
                ,
                sr.prototype.scale = function(e, t, n) {}
                ,
                ir.prototype.transform = function(e) {}
                ,
                sr.prototype.transformm = function(e) {}
                ,
                ir.prototype.pushMatrix = function() {}
                ,
                sr.prototype.pushMatrix = function() {}
                ,
                ir.prototype.popMatrix = function() {}
                ,
                sr.prototype.popMatrix = function() {}
                ,
                ir.prototype.resetMatrix = function() {}
                ,
                sr.prototype.resetMatrix = function() {}
                ,
                rr.prototype.applyMatrix = function() {}
                ,
                ir.prototype.applyMatrix = function() {}
                ,
                xe.rotateX = function(e) {}
                ,
                ir.prototype.rotateZ = function() {}
                ,
                sr.prototype.rotateZ = function(e) {}
                ,
                xe.rotateY = function(e) {}
                ,
                ir.prototype.rotate = function(e) {}
                ,
                sr.prototype.rotate = function(e) {}
                ,
                ir.prototype.shearX = function(e) {}
                ,
                sr.prototype.shearX = function(e) {}
                ,
                ir.prototype.shearY = function(e) {}
                ,
                sr.prototype.shearY = function(e) {}
                ,
                xe.pushStyle = function() {}
                ,
                xe.popStyle = function() {}
                ,
                xe.year = function() {}
                ,
                xe.month = function() {}
                ,
                xe.day = function() {}
                ,
                xe.hour = function() {}
                ,
                xe.minute = function() {}
                ,
                xe.second = function() {}
                ,
                xe.millis = function() {}
                ,
                ir.prototype.redraw = function() {}
                ,
                sr.prototype.redraw = function() { }
                ,
                xe.noLoop = function() {}
                ,
                xe.loop = function() {}
                ,
                xe.frameRate = function(e) {}
                ,
                xe.exit = function() {}
                ,
                xe.cursor = function() {}
                ,
                xe.noCursor = function() {}
                ,
                xe.link = function(e, n) {}
                ,
                xe.beginDraw = u,
                xe.endDraw = u,
                ir.prototype.toImageData = function(e, n, r, i) {}
                ,
                sr.prototype.toImageData = function(e, n, r, i) {}
                ,
                xe.status = function(e) {}
                ,
                xe.binary = function(e, t) {}
                ,
                xe.unbinary = function(e) {}
                var cr = function(e, n) {}
                xe.hex = function(e, t) {}
                ,
                xe.unhex = function(e) {}
                ,
                xe.loadStrings = function(e) {}
                ,
                xe.saveStrings = function(e, t) {}
                ,
                xe.loadBytes = function(e) {}
                ,
                xe.matchAll = function(e, t) {}
                ,
                xe.match = function(e, t) {}
                xe.println = function() {}
                ,
                xe.print = function() {}
                ,
                xe.str = function(e) {}
                ,
                xe.parseBoolean = function(e) {}
                ,
                xe.parseByte = function(e) {}
                ,
                xe.parseChar = function(e) {}
                ,
                xe.parseFloat = function(e) {}
                ,
                xe.parseInt = function(e, t) {}
                ,
                xe.__int_cast = function(e) {}
                ,
                xe.__instanceof = function(e, t) {}
                ,
                rr.prototype.size = function(e, t, n) {}
                ,
                ir.prototype.size = function(e, n, r) {}
                ,
                sr.prototype.size = function() {
                    var e = !1
                    return function(t, n, r) {}
                }(),
                ir.prototype.ambientLight = rr.prototype.a3DOnlyFunction,
                sr.prototype.ambientLight = function(e, t, n, r, i, s) {}
                ,
                ir.prototype.directionalLight = rr.prototype.a3DOnlyFunction,
                sr.prototype.directionalLight = function(e, t, n, r, i, s) {}
                ,
                ir.prototype.lightFalloff = rr.prototype.a3DOnlyFunction,
                sr.prototype.lightFalloff = function(e, t, n) {}
                ,
                ir.prototype.lightSpecular = rr.prototype.a3DOnlyFunction,
                sr.prototype.lightSpecular = function(e, t, n) {}
                ,
                xe.lights = function() {}
                ,
                ir.prototype.pointLight = rr.prototype.a3DOnlyFunction,
                sr.prototype.pointLight = function(e, t, n, r, i, s) {}
                ,
                ir.prototype.noLights = rr.prototype.a3DOnlyFunction,
                sr.prototype.noLights = function() {}
                ,
                ir.prototype.spotLight = rr.prototype.a3DOnlyFunction,
                sr.prototype.spotLight = function(e, t, n, r, i, s, o, a, l, h, u) {}
                ,
                ir.prototype.beginCamera = function() {}
                ,
                sr.prototype.beginCamera = function() {}
                ,
                ir.prototype.endCamera = function() {},
                sr.prototype.endCamera = function() {}
                ,
                xe.camera = function(e, n, r, i, s, o, a, l, h) {}
                ,
                xe.perspective = function(e, t, n, r) {}
                ,
                ir.prototype.frustum = function() {}
                ,
                sr.prototype.frustum = function(e, t, n, r, i, s) {}
                ,
                xe.ortho = function(e, t, n, r, i, s) {}
                ,
                xe.printProjection = function() {}
                ,
                xe.printCamera = function() {}
                ,
                ir.prototype.box = rr.prototype.a3DOnlyFunction,
                sr.prototype.box = function(e, t, n) {}
                var fr = function() {}
                xe.sphereDetail = function(e, t) {}
                ,
                ir.prototype.sphere = rr.prototype.a3DOnlyFunction,
                sr.prototype.sphere = function() {}
                ,
                xe.modelX = function(e, t, n) {}
                ,
                xe.modelY = function(e, t, n) {}
                ,
                xe.modelZ = function(e, t, n) {}
                ,
                ir.prototype.ambient = rr.prototype.a3DOnlyFunction,
                sr.prototype.ambient = function(e, t, n) {}
                ,
                ir.prototype.emissive = rr.prototype.a3DOnlyFunction,
                sr.prototype.emissive = function(e, t, n) {}
                ,
                ir.prototype.shininess = rr.prototype.a3DOnlyFunction,
                sr.prototype.shininess = function(e) {}
                ,
                ir.prototype.specular = rr.prototype.a3DOnlyFunction,
                sr.prototype.specular = function(e, t, n) {}
                ,
                xe.screenX = function(e, t, n) {}
                ,
                xe.screenY = function(e, t, n) {}
                ,
                xe.screenZ = function(e, t, n) {}
                ,
                rr.prototype.fill = function() {
                }
                ,
                ir.prototype.fill = function() {}
                ,
                sr.prototype.fill = function() {}
                ,
                xe.noFill = function() {}
                ,
                rr.prototype.stroke = function() {}
                ,
                ir.prototype.stroke = function() {}
                ,
                sr.prototype.stroke = function() {}
                ,
                xe.noStroke = function() {}
                ,
                rr.prototype.strokeWeight = function(e) {}
                ,
                ir.prototype.strokeWeight = function(e) {}
                ,
                sr.prototype.strokeWeight = function(e) {}
                ,
                xe.strokeCap = function(e) {}
                ,
                xe.strokeJoin = function(e) {}
                ,
                ir.prototype.smooth = function() {}
                ,
                sr.prototype.smooth = function() {}
                ,
                ir.prototype.noSmooth = function() {}
                ,
                sr.prototype.noSmooth = function() {}
                ,
                ir.prototype.point = function(e, t) {}
                ,
                sr.prototype.point = function(e, t, n) {}
                ,
                xe.beginShape = function(e) {}
                ,
                ir.prototype.vertex = function(e, t, n) {}
                ,
                sr.prototype.vertex = function(e, n, r, i, s) {}
                ir.prototype.endShape = function(e) {}
                ,
                sr.prototype.endShape = function(e) { var dr = function(e, t) {}
                  , vr = function() {}
                ir.prototype.bezierVertex = function() {}
                ,
                sr.prototype.bezierVertex = function() {}
                ,
                xe.texture = function(e) {}
                ,
                xe.textureMode = function(e) {}
                var yr = function(e, t, n, r, i, s, o, a, l, h, u, c) {}
                ir.prototype.curveVertex = function(e, t) {}
                ,
                sr.prototype.curveVertex = function(e, t, n) {}
                ,
                ir.prototype.curve = function(e, t, n, r, i, s, o, a) {}
                ,
                sr.prototype.curve = function(e, n, r, i, s, o, a, l, h, u, c, f) {}
                ,
                xe.curveTightness = function(e) {}
                ,
                xe.curveDetail = function(e) {}
                ,
                xe.rectMode = function(e) {}
                ,
                xe.imageMode = function(e) {}
                ,
                xe.ellipseMode = function(e) {}
                ,
                xe.arc = function(e, t, n, r, i, s, o) {}
                ,
                ir.prototype.line = function(e, n, r, i) {}
                ,
                sr.prototype.line = function(e, n, r, i, s, o) {}
                ,
                ir.prototype.bezier = function() {}
                ,
                sr.prototype.bezier = function() {}
                ,
                xe.bezierDetail = function(e) {}
                ,
                xe.bezierPoint = function(e, t, n, r, i) {}
                ,
                xe.bezierTangent = function(e, t, n, r, i) {}
                ,
                xe.curvePoint = function(e, t, n, r, i) {}
                ,
                xe.curveTangent = function(e, t, n, r, i) {}
                ,
                xe.triangle = function(e, t, n, r, i, s) {}
                ,
                xe.quad = function(e, t, n, r, i, s, o, a) {}
                var xr = function(e, n, r, i, s, o, a, l) {}
                ir.prototype.rect = function(e, n, r, i, s, o, a, l) {}
                ,
                sr.prototype.rect = function(e, n, r, i, s, o, a, l) {}
                ,
                ir.prototype.ellipse = function(e, t, n, r) {}
                ,
                sr.prototype.ellipse = function(e, t, n, r) {}
                ,
                xe.normal = function(e, t, n) {}
                ,
                xe.save = function(e, n) {}
                var Ar = 0
                xe.saveFrame = function(e) {}
                var br = h.createElement("canvas").getContext("2d")
                  , wr = [t, t, t]
                  , Er = function(e, t, n) {}
                  Er.prototype = {
                      __isPImage: !0,
                      updatePixels: function() {},
                      fromHTMLImageData: function(e) {},
                      get: function(e, t, n, r) {},
                      set: function(e, t, n) {},
                      blend: function(e, t, n, r, i, s, o, a, l, h) {},
                      copy: function(e, t, n, r, i, s, o, a, l) {},
                      filter: function(e, t) {},
                      save: function(e) {},
                      resize: function(e, t) {},
                      mask: function(e) {},
                      loadPixels: u,
                      toImageData: function() {},
                      toDataURL: function() {},
                      fromImageData: function(e) {},
                    }
                      xe.PImage = Er,
                      xe.createImage = function(e, t, n) {}
                      ,
                      xe.loadImage = function(e, t, n) {}
                      ,
                      xe.requestImage = xe.loadImage,
                      xe.get = function(e, t, n, r, i) {}
                      ,
                      xe.createGraphics = function(e, t, n) {
                        xe.set = function(e, t, n, r) {}
                        ,
                        xe.imageData = {},
                        xe.pixels = {
                            getLength: function() {},
                            getPixel: function(e) {},
                            setPixel: function(e, t) {},
                            toArray: function() {},
                            set: function(e) {}
                        },
                        xe.loadPixels = function() {}
                        ,
                        xe.updatePixels = function() {}
                        ,
                        xe.hint = function(e) {}
                        var Sr = function(e, t, n, r) {}
                        ir.prototype.background = function(e, n, r, i) {}
                        ,
                        sr.prototype.background = function(e, t, n, r) {}
                        ,
                        ir.prototype.image = function(e, t, n, r, i) {}
                        ,
                        sr.prototype.image = function(e, t, n, r, i) {}
                        ,
                        xe.tint = function(e, t, n, r) {}
                        ,
                        xe.noTint = function() {}
                        ,
                        xe.copy = function(e, n, r, i, s, o, a, l, h) {}
                        ,
                        xe.blend = function(e, n, r, i, s, o, a, l, h, u, c) {}
                        var Pr = function(e) {}
                        , Cr = function(e, t) {}
                        , Mr = function(e, t) {}
                        xe.filter = function(e, n, r) {}
                        ,
                        xe.shared = {
                            fracU: 0,
                            ifU: 0,
                            fracV: 0,
                            ifV: 0,
                            u1: 0,
                            u2: 0,
                            v1: 0,
                            v2: 0,
                            sX: 0,
                            sY: 0,
                            iw: 0,
                            iw1: 0,
                            ih1: 0,
                            ul: 0,
                            ll: 0,
                            ur: 0,
                            lr: 0,
                            cUL: 0,
                            cLL: 0,
                            cUR: 0,
                            cLR: 0,
                            srcXOffset: 0,
                            srcYOffset: 0,
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 0,
                            srcBuffer: null,
                            blurRadius: 0,
                            blurKernelSize: 0,
                            blurKernel: null
                        },
                        xe.intersect = function(e, t, n, r, i, s, o, a) {}
                        var Tr = {}
                        if (Tr[c.BLEND] = xe.modes.blend,
                        Tr[c.ADD] = xe.modes.add,
                        Tr[c.SUBTRACT] = xe.modes.subtract,
                        Tr[c.LIGHTEST] = xe.modes.lightest,
                        Tr[c.DARKEST] = xe.modes.darkest,
                        Tr[c.REPLACE] = xe.modes.replace,
                        Tr[c.DIFFERENCE] = xe.modes.difference,
                        Tr[c.EXCLUSION] = xe.modes.exclusion,
                        Tr[c.MULTIPLY] = xe.modes.multiply,
                        Tr[c.SCREEN] = xe.modes.screen,
                        Tr[c.OVERLAY] = xe.modes.overlay,
                        Tr[c.HARD_LIGHT] = xe.modes.hard_light,
                        Tr[c.SOFT_LIGHT] = xe.modes.soft_light,
                        Tr[c.DODGE] = xe.modes.dodge,
                        Tr[c.BURN] = xe.modes.burn,
                        xe.blit_resize = function(e, t, n, r, i, s, o, a, l, h, u, f, p) {}
                        ,
                        xe.loadFont = function(e, n) {}
                        ,
                        xe.createFont = function(e, t) {}
                        ,
                        xe.textFont = function(e, n) {}
                        ,
                        xe.textSize = function(e) {}
                        ,
                        xe.textAscent = function() {}
                        ,
                        xe.textDescent = function() {}
                        ,
                        xe.textLeading = function(e) {}
                        ,
                        xe.textAlign = function(e, t) {}
                        ,
                        ir.prototype.textWidth = function(e) {}
                        ,
                        sr.prototype.textWidth = function(e) {}
                        ,
                        xe.glyphLook = function(e, t) {}
                        ,
                        ir.prototype.text$line = function(e, t, n, r, i) {}
                        ,
                        sr.prototype.text$line = function(e, n, r, i, s) {}
                        ,
                        xe.text = function() {}
                        ,
                        xe.textMode = function(e) {}
                        ,
                        xe.loadGlyphs = function(e) {}
                        ,
                        xe.param = function(e) {}
                        ,
                        or.prototype.translate = oe("translate"),
                        or.prototype.transform = oe("transform"),
                        or.prototype.scale = oe("scale"),
                        or.prototype.pushMatrix = oe("pushMatrix"),
                        or.prototype.popMatrix = oe("popMatrix"),
                        or.prototype.resetMatrix = oe("resetMatrix"),
                        or.prototype.applyMatrix = oe("applyMatrix"),
                        or.prototype.rotate = oe("rotate"),
                        or.prototype.rotateZ = oe("rotateZ"),
                        or.prototype.shearX = oe("shearX"),
                        or.prototype.shearY = oe("shearY"),
                        or.prototype.redraw = oe("redraw"),
                        or.prototype.toImageData = oe("toImageData"),
                        or.prototype.ambientLight = oe("ambientLight"),
                        or.prototype.directionalLight = oe("directionalLight"),
                        or.prototype.lightFalloff = oe("lightFalloff"),
                        or.prototype.lightSpecular = oe("lightSpecular"),
                        or.prototype.pointLight = oe("pointLight"),
                        or.prototype.noLights = oe("noLights"),
                        or.prototype.spotLight = oe("spotLight"),
                        or.prototype.beginCamera = oe("beginCamera"),
                        or.prototype.endCamera = oe("endCamera"),
                        or.prototype.frustum = oe("frustum"),
                        or.prototype.box = oe("box"),
                        or.prototype.sphere = oe("sphere"),
                        or.prototype.ambient = oe("ambient"),
                        or.prototype.emissive = oe("emissive"),
                        or.prototype.shininess = oe("shininess"),
                        or.prototype.specular = oe("specular"),
                        or.prototype.fill = oe("fill"),
                        or.prototype.stroke = oe("stroke"),
                        or.prototype.strokeWeight = oe("strokeWeight"),
                        or.prototype.smooth = oe("smooth"),
                        or.prototype.noSmooth = oe("noSmooth"),
                        or.prototype.point = oe("point"),
                        or.prototype.vertex = oe("vertex"),
                        or.prototype.endShape = oe("endShape"),
                        or.prototype.bezierVertex = oe("bezierVertex"),
                        or.prototype.curveVertex = oe("curveVertex"),
                        or.prototype.curve = oe("curve"),
                        or.prototype.line = oe("line"),
                        or.prototype.bezier = oe("bezier"),
                        or.prototype.rect = oe("rect"),
                        or.prototype.ellipse = oe("ellipse"),
                        or.prototype.background = oe("background"),
                        or.prototype.image = oe("image"),
                        or.prototype.textWidth = oe("textWidth"),
                        or.prototype.text$line = oe("text$line"),
                        or.prototype.$ensureContext = oe("$ensureContext"),
                        or.prototype.$newPMatrix = oe("$newPMatrix"),
                        or.prototype.size = function(e, t, n) {}
                        ,
                        or.prototype.$init = u,
                        ir.prototype.$init = function() {}
                        ,
                        sr.prototype.$init = function() {}
                        ,
                        rr.prototype.$ensureContext = function() {}
                        ,
                de.getAttribute("tabindex") || de.setAttribute("tabindex", 0),
                ve)
                    be = new E.Sketch,
                    se()
                else {
                    be = n instanceof E.Sketch ? n : "function" == typeof n ? new E.Sketch(n) : n ? E.compile(n) : new E.Sketch(function() {}
                    ),
                    xe.externals.sketch = be,
                    se(),
                    de.onfocus = function() {}
                    ,
                    de.onblur = function() {}
                    ,
                    be.options.pauseOnBlur && (x(l, "focus", function() {}),
                    x(l, "blur", function() {}))
                    var _r = be.options.globalKeyEvents ? l : de
                    x(_r, "keydown", pe),
                    x(_r, "keypress", me),
                    x(_r, "keyup", ge)
                    for (var Rr in E.lib)
                        E.lib.hasOwnProperty(Rr) && (E.lib[Rr].hasOwnProperty("attach") ? E.lib[Rr].attach(xe) : E.lib[Rr]instanceof Function && E.lib[Rr].call(this))
                    var Lr = 100
                      , Ir = function(e) {}
                      b(this),
                      Ir(xe)
                  }
              }
              return E.debug = function() {
                  return "console"in l ? function(e) {}
                  : u
              }(),
              E.prototype = r,
              E.instances = x,
              E.getInstanceById = function(e) {}
              ,
              function(e) {
                  function t(e) {
                      return function() {}
                  }
                  for (var n, r, i = "open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "), s = i.length; s--; )
                    n = i[s],
                    r = n.replace("()", ""),
                    e[r] = t(n)
            }(r),
            E
        }
    }}}
    , {}],
    28: [function(e, t, n) {
        var r = {
            virtEquals: e("./Helpers/virtEquals"),
            virtHashCode: e("./Helpers/virtHashCode"),
            ObjectIterator: e("./Helpers/ObjectIterator"),
            PConstants: e("./Helpers/PConstants"),
            ArrayList: e("./Objects/ArrayList"),
            HashMap: e("./Objects/HashMap"),
            PVector: e("./Objects/PVector"),
            PFont: e("./Objects/PFont"),
            Char: e("./Objects/Char"),
            XMLAttribute: e("./Objects/XMLAttribute"),
            XMLElement: e("./Objects/XMLElement"),
            PMatrix2D: e("./Objects/PMatrix2D"),
            PMatrix3D: e("./Objects/PMatrix3D"),
            PShape: e("./Objects/PShape"),
            colors: e("./Objects/webcolors"),
            PShapeSVG: e("./Objects/PShapeSVG"),
            CommonFunctions: e("./P5Functions/commonFunctions"),
            defaultScope: e("./Helpers/defaultScope"),
            Processing: e("./Processing"),
            setupParser: e("./Parser/Parser"),
            finalize: e("./Helpers/finalizeProcessing")
        }
        r.extend = {
            withMath: e("./P5Functions/Math.js"),
            withProxyFunctions: e("./P5Functions/JavaProxyFunctions")(r.virtHashCode, r.virtEquals),
            withTouch: e("./P5Functions/touchmouse"),
            withCommonFunctions: r.CommonFunctions.withCommonFunctions
        },
        t.exports = function(t, n) {
            var i = function() {}
              , s = r.virtEquals
              , o = r.virtHashCode
              , a = r.PConstants
              , l = r.CommonFunctions
              , h = r.ObjectIterator
              , u = r.Char
              , c = r.XMLAttribute()
              , f = r.ArrayList({
                virtHashCode: o,
                virtEquals: s
            })
              , p = r.HashMap({
                virtHashCode: o,
                virtEquals: s
            })
              , m = r.PVector({
                PConstants: a
            })
              , g = r.PFont({
                Browser: t,
                noop: i
            })
              , d = r.XMLElement({
                Browser: t,
                XMLAttribute: c
            })
              , v = r.PMatrix2D({
                p: l
            })
              , y = r.PMatrix3D({
                p: l
            })
              , x = r.PShape({
                PConstants: a,
                PMatrix2D: v,
                PMatrix3D: y
            })
              , A = r.PShapeSVG({
                CommonFunctions: l,
                PConstants: a,
                PShape: x,
                XMLElement: d,
                colors: r.colors
            })
              , b = r.defaultScope({
                ArrayList: f,
                HashMap: p,
                PVector: m,
                PFont: g,
                PShapeSVG: A,
                ObjectIterator: h,
                PConstants: a,
                Char: u,
                XMLElement: d,
                XML: d
            })
              , w = r.Processing({
                defaultScope: b,
                Browser: t,
                extend: r.extend,
                noop: i
            })
            return w = r.setupParser(w, {
                Browser: t,
                aFunctions: n,
                defaultScope: b
            }),
            w = r.finalize(w, {
                version: e("../package.json").version,
                isDomPresent: t.isDomPresent,
                window: t.window,
                document: t.document,
                noop: i
            })
        }
    }
    , {
        "../package.json": 2,
        "./Helpers/ObjectIterator": 3,
        "./Helpers/PConstants": 4,
        "./Helpers/defaultScope": 6,
        "./Helpers/finalizeProcessing": 7,
        "./Helpers/virtEquals": 8,
        "./Helpers/virtHashCode": 9,
        "./Objects/ArrayList": 10,
        "./Objects/Char": 11,
        "./Objects/HashMap": 12,
        "./Objects/PFont": 13,
        "./Objects/PMatrix2D": 14,
        "./Objects/PMatrix3D": 15,
        "./Objects/PShape": 16,
        "./Objects/PShapeSVG": 17,
        "./Objects/PVector": 18,
        "./Objects/XMLAttribute": 19,
        "./Objects/XMLElement": 20,
        "./Objects/webcolors": 21,
        "./P5Functions/JavaProxyFunctions": 22,
        "./P5Functions/Math.js": 23,
        "./P5Functions/commonFunctions": 24,
        "./P5Functions/touchmouse": 25,
        "./Parser/Parser": 26,
        "./Processing": 27
    }]
}, {}, [1])

