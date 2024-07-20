/*!
 *  CanvasInput v1.2.7
 *  http://goldfirestudios.com/blog/108/CanvasInput-HTML5-Canvas-Text-Input
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
!(function () {
  var e = [],
    t = (window.CanvasInput = function (t) {
      var n = this;
      (t = t ? t : {}),
        (n._canvas = t.canvas || null),
        (n._ctx = n._canvas ? n._canvas.getContext("2d") : null),
        (n._x = t.x || 0),
        (n._y = t.y || 0),
        (n._extraX = t.extraX || 0),
        (n._extraY = t.extraY || 0),
        (n._fontSize = t.fontSize || 14),
        (n._fontFamily = t.fontFamily || "Arial"),
        (n._fontColor = t.fontColor || "#000"),
        (n._placeHolderColor = t.placeHolderColor || "#bfbebd"),
        (n._fontWeight = t.fontWeight || "normal"),
        (n._fontStyle = t.fontStyle || "normal"),
        (n._fontShadowColor = t.fontShadowColor || ""),
        (n._fontShadowBlur = t.fontShadowBlur || 0),
        (n._fontShadowOffsetX = t.fontShadowOffsetX || 0),
        (n._fontShadowOffsetY = t.fontShadowOffsetY || 0),
        (n._readonly = t.readonly || !1),
        (n._maxlength = t.maxlength || null),
        (n._width = t.width || 150),
        (n._height = t.height || n._fontSize),
        (n._padding = t.padding >= 0 ? t.padding : 5),
        (n._borderWidth = t.borderWidth >= 0 ? t.borderWidth : 1),
        (n._borderColor = t.borderColor || "#959595"),
        (n._borderRadius = t.borderRadius >= 0 ? t.borderRadius : 3),
        (n._backgroundImage = t.backgroundImage || ""),
        (n._boxShadow = t.boxShadow || "1px 1px 0px rgba(255, 255, 255, 1)"),
        (n._innerShadow = t.innerShadow || "0px 0px 4px rgba(0, 0, 0, 0.4)"),
        (n._selectionColor = t.selectionColor || "rgba(179, 212, 253, 0.8)"),
        (n._placeHolder = t.placeHolder || ""),
        (n._value = (t.value || n._placeHolder) + ""),
        (n._onsubmit = t.onsubmit || function () {}),
        (n._onkeydown = t.onkeydown || function () {}),
        (n._onkeyup = t.onkeyup || function () {}),
        (n._onfocus = t.onfocus || function () {}),
        (n._onblur = t.onblur || function () {}),
        (n._cursor = !1),
        (n._cursorPos = 0),
        (n._hasFocus = !1),
        (n._selection = [0, 0]),
        (n._wasOver = !1),
        n.boxShadow(n._boxShadow, !0),
        n._calcWH(),
        (n._renderCanvas = document.createElement("canvas")),
        n._renderCanvas.setAttribute("width", n.outerW),
        n._renderCanvas.setAttribute("height", n.outerH),
        (n._renderCtx = n._renderCanvas.getContext("2d")),
        (n._shadowCanvas = document.createElement("canvas")),
        n._shadowCanvas.setAttribute("width", n._width + 2 * n._padding),
        n._shadowCanvas.setAttribute("height", n._height + 2 * n._padding),
        (n._shadowCtx = n._shadowCanvas.getContext("2d")),
        "undefined" != typeof t.backgroundGradient
          ? ((n._backgroundColor = n._renderCtx.createLinearGradient(
              0,
              0,
              0,
              n.outerH,
            )),
            n._backgroundColor.addColorStop(0, t.backgroundGradient[0]),
            n._backgroundColor.addColorStop(1, t.backgroundGradient[1]))
          : (n._backgroundColor = t.backgroundColor || "#fff"),
        n._canvas &&
          (n._canvas.addEventListener(
            "mousemove",
            function (e) {
              (e = e || window.event), n.mousemove(e, n);
            },
            !1,
          ),
          n._canvas.addEventListener(
            "mousedown",
            function (e) {
              (e = e || window.event), n.mousedown(e, n);
            },
            !1,
          ),
          n._canvas.addEventListener(
            "mouseup",
            function (e) {
              (e = e || window.event), n.mouseup(e, n);
            },
            !1,
          ));
      var o = function (e) {
        (e = e || window.event), n._hasFocus && !n._mouseDown && n.blur();
      };
      window.addEventListener("mouseup", o, !0),
        window.addEventListener("touchend", o, !0),
        (n._hiddenInput = document.createElement("input")),
        (n._hiddenInput.type = "text"),
        (n._hiddenInput.style.position = "absolute"),
        (n._hiddenInput.style.opacity = 0),
        (n._hiddenInput.style.pointerEvents = "none"),
        (n._hiddenInput.style.zIndex = 0),
        (n._hiddenInput.style.transform = "scale(0)"),
        n._updateHiddenInput(),
        n._maxlength && (n._hiddenInput.maxLength = n._maxlength),
        document.body.appendChild(n._hiddenInput),
        (n._hiddenInput.value = n._value),
        n._hiddenInput.addEventListener("keydown", function (e) {
          (e = e || window.event),
            n._hasFocus &&
              (window.focus(), n._hiddenInput.focus(), n.keydown(e, n));
        }),
        n._hiddenInput.addEventListener("keyup", function (e) {
          (e = e || window.event),
            (n._value = n._hiddenInput.value),
            (n._cursorPos = n._hiddenInput.selectionStart),
            (n._selection = [
              n._hiddenInput.selectionStart,
              n._hiddenInput.selectionEnd,
            ]),
            n.render(),
            n._hasFocus && n._onkeyup(e, n);
        }),
        e.push(n),
        (n._inputsIndex = e.length - 1),
        n.render();
    });
  t.prototype = {
    canvas: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._canvas = e), (t._ctx = t._canvas.getContext("2d")), t.render())
        : t._canvas;
    },
    x: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._x = e), t._updateHiddenInput(), t.render())
        : t._x;
    },
    y: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._y = e), t._updateHiddenInput(), t.render())
        : t._y;
    },
    extraX: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._extraX = e), t._updateHiddenInput(), t.render())
        : t._extraX;
    },
    extraY: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._extraY = e), t._updateHiddenInput(), t.render())
        : t._extraY;
    },
    fontSize: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontSize = e), t.render())
        : t._fontSize;
    },
    fontFamily: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontFamily = e), t.render())
        : t._fontFamily;
    },
    fontColor: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontColor = e), t.render())
        : t._fontColor;
    },
    placeHolderColor: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._placeHolderColor = e), t.render())
        : t._placeHolderColor;
    },
    fontWeight: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontWeight = e), t.render())
        : t._fontWeight;
    },
    fontStyle: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontStyle = e), t.render())
        : t._fontStyle;
    },
    fontShadowColor: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontShadowColor = e), t.render())
        : t._fontShadowColor;
    },
    fontShadowBlur: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontShadowBlur = e), t.render())
        : t._fontShadowBlur;
    },
    fontShadowOffsetX: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontShadowOffsetX = e), t.render())
        : t._fontShadowOffsetX;
    },
    fontShadowOffsetY: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._fontShadowOffsetY = e), t.render())
        : t._fontShadowOffsetY;
    },
    width: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._width = e),
          t._calcWH(),
          t._updateCanvasWH(),
          t._updateHiddenInput(),
          t.render())
        : t._width;
    },
    height: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._height = e),
          t._calcWH(),
          t._updateCanvasWH(),
          t._updateHiddenInput(),
          t.render())
        : t._height;
    },
    padding: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._padding = e), t._calcWH(), t._updateCanvasWH(), t.render())
        : t._padding;
    },
    borderWidth: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._borderWidth = e), t._calcWH(), t._updateCanvasWH(), t.render())
        : t._borderWidth;
    },
    borderColor: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._borderColor = e), t.render())
        : t._borderColor;
    },
    borderRadius: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._borderRadius = e), t.render())
        : t._borderRadius;
    },
    backgroundColor: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._backgroundColor = e), t.render())
        : t._backgroundColor;
    },
    backgroundGradient: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._backgroundColor = t._renderCtx.createLinearGradient(
            0,
            0,
            0,
            t.outerH,
          )),
          t._backgroundColor.addColorStop(0, e[0]),
          t._backgroundColor.addColorStop(1, e[1]),
          t.render())
        : t._backgroundColor;
    },
    boxShadow: function (e, t) {
      var n = this;
      if ("undefined" == typeof e) return n._boxShadow;
      var o = e.split("px ");
      return (
        (n._boxShadow = {
          x: "none" === n._boxShadow ? 0 : parseInt(o[0], 10),
          y: "none" === n._boxShadow ? 0 : parseInt(o[1], 10),
          blur: "none" === n._boxShadow ? 0 : parseInt(o[2], 10),
          color: "none" === n._boxShadow ? "" : o[3],
        }),
        n._boxShadow.x < 0
          ? ((n.shadowL = Math.abs(n._boxShadow.x) + n._boxShadow.blur),
            (n.shadowR = n._boxShadow.blur + n._boxShadow.x))
          : ((n.shadowL = Math.abs(n._boxShadow.blur - n._boxShadow.x)),
            (n.shadowR = n._boxShadow.blur + n._boxShadow.x)),
        n._boxShadow.y < 0
          ? ((n.shadowT = Math.abs(n._boxShadow.y) + n._boxShadow.blur),
            (n.shadowB = n._boxShadow.blur + n._boxShadow.y))
          : ((n.shadowT = Math.abs(n._boxShadow.blur - n._boxShadow.y)),
            (n.shadowB = n._boxShadow.blur + n._boxShadow.y)),
        (n.shadowW = n.shadowL + n.shadowR),
        (n.shadowH = n.shadowT + n.shadowB),
        n._calcWH(),
        t ? void 0 : (n._updateCanvasWH(), n.render())
      );
    },
    innerShadow: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._innerShadow = e), t.render())
        : t._innerShadow;
    },
    selectionColor: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._selectionColor = e), t.render())
        : t._selectionColor;
    },
    placeHolder: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._placeHolder = e), t.render())
        : t._placeHolder;
    },
    value: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._value = e + ""),
          (t._hiddenInput.value = e + ""),
          (t._cursorPos = t._clipText().length),
          t.render(),
          t)
        : t._value === t._placeHolder
          ? ""
          : t._value;
    },
    onsubmit: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._onsubmit = e), t)
        : void t._onsubmit();
    },
    onkeydown: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._onkeydown = e), t)
        : void t._onkeydown();
    },
    onkeyup: function (e) {
      var t = this;
      return "undefined" != typeof e
        ? ((t._onkeyup = e), t)
        : void t._onkeyup();
    },
    focus: function (t) {
      var n = this;
      if (!n._hasFocus) {
        n._onfocus(n);
        for (var o = 0; o < e.length; o++) e[o]._hasFocus && e[o].blur();
      }
      n._selectionUpdated
        ? delete n._selectionUpdated
        : (n._selection = [0, 0]),
        (n._hasFocus = !0),
        n._readonly
          ? (n._hiddenInput.readOnly = !0)
          : ((n._hiddenInput.readOnly = !1),
            (n._cursorPos = "number" == typeof t ? t : n._clipText().length),
            n._placeHolder === n._value &&
              ((n._value = ""), (n._hiddenInput.value = "")),
            (n._cursor = !0),
            n._cursorInterval && clearInterval(n._cursorInterval),
            (n._cursorInterval = setInterval(function () {
              (n._cursor = !n._cursor), n.render();
            }, 500)));
      var r = n._selection[0] > 0 || n._selection[1] > 0;
      return (
        n._hiddenInput.focus(),
        (n._hiddenInput.selectionStart = r ? n._selection[0] : n._cursorPos),
        (n._hiddenInput.selectionEnd = r ? n._selection[1] : n._cursorPos),
        n.render()
      );
    },
    blur: function (e) {
      var t = e || this;
      return (
        t._onblur(t),
        t._cursorInterval && clearInterval(t._cursorInterval),
        (t._hasFocus = !1),
        (t._cursor = !1),
        (t._selection = [0, 0]),
        t._hiddenInput.blur(),
        "" === t._value && (t._value = t._placeHolder),
        t.render()
      );
    },
    keydown: function (t, n) {
      var o = t.which;
      t.shiftKey;
      if (!n._readonly && n._hasFocus) {
        if ((n._onkeydown(t, n), 65 === o && (t.ctrlKey || t.metaKey)))
          return n.selectText(), t.preventDefault(), n.render();
        if (17 === o || t.metaKey || t.ctrlKey) return n;
        if (13 === o) t.preventDefault(), n._onsubmit(t, n);
        else if (9 === o && (t.preventDefault(), e.length > 1)) {
          var r = e[n._inputsIndex + 1] ? n._inputsIndex + 1 : 0;
          n.blur(),
            setTimeout(function () {
              e[r].focus();
            }, 10);
        }
        return (
          (n._value = n._hiddenInput.value),
          (n._cursorPos = n._hiddenInput.selectionStart),
          (n._selection = [0, 0]),
          n.render()
        );
      }
    },
    click: function (e, t) {
      var n = t._mousePos(e),
        o = n.x,
        r = n.y;
      return t._endSelection
        ? (delete t._endSelection, void delete t._selectionUpdated)
        : (t._canvas && t._overInput(o, r)) || !t._canvas
          ? t._mouseDown
            ? ((t._mouseDown = !1), t.click(e, t), t.focus(t._clickPos(o, r)))
            : void 0
          : t.blur();
    },
    mousemove: function (e, t) {
      var n = t._mousePos(e),
        o = n.x,
        r = n.y,
        d = t._overInput(o, r);
      if (
        (d && t._canvas
          ? ((t._canvas.style.cursor = "text"), (t._wasOver = !0))
          : t._wasOver &&
            t._canvas &&
            ((t._canvas.style.cursor = "default"), (t._wasOver = !1)),
        t._hasFocus && t._selectionStart >= 0)
      ) {
        var a = t._clickPos(o, r),
          i = Math.min(t._selectionStart, a),
          _ = Math.max(t._selectionStart, a);
        if (!d)
          return (
            (t._selectionUpdated = !0),
            (t._endSelection = !0),
            delete t._selectionStart,
            void t.render()
          );
        (t._selection[0] === i && t._selection[1] === _) ||
          ((t._selection = [i, _]), t.render());
      }
    },
    mousedown: function (e, t) {
      var n = t._mousePos(e),
        o = n.x,
        r = n.y,
        d = t._overInput(o, r);
      (t._mouseDown = d),
        t._hasFocus && d && (t._selectionStart = t._clickPos(o, r));
    },
    mouseup: function (e, t) {
      var n = t._mousePos(e),
        o = n.x,
        r = n.y,
        d = t._clickPos(o, r) !== t._selectionStart;
      t._hasFocus && t._selectionStart >= 0 && t._overInput(o, r) && d
        ? ((t._selectionUpdated = !0), delete t._selectionStart, t.render())
        : delete t._selectionStart,
        t.click(e, t);
    },
    selectText: function (e) {
      var t = this,
        e = e || [0, t._value.length];
      return (
        setTimeout(function () {
          (t._selection = [e[0], e[1]]),
            (t._hiddenInput.selectionStart = e[0]),
            (t._hiddenInput.selectionEnd = e[1]),
            t.render();
        }, 1),
        t
      );
    },
    renderCanvas: function () {
      return this._renderCanvas;
    },
    render: function () {
      var e = this,
        t = e._renderCtx,
        n = e.outerW,
        o = e.outerH,
        r = e._borderRadius,
        d = e._borderWidth,
        a = e.shadowW,
        i = e.shadowH;
      t &&
        (t.clearRect(0, 0, t.canvas.width, t.canvas.height),
        (t.shadowOffsetX = e._boxShadow.x),
        (t.shadowOffsetY = e._boxShadow.y),
        (t.shadowBlur = e._boxShadow.blur),
        (t.shadowColor = e._boxShadow.color),
        e._borderWidth > 0 &&
          ((t.fillStyle = e._borderColor),
          e._roundedRect(t, e.shadowL, e.shadowT, n - a, o - i, r),
          t.fill(),
          (t.shadowOffsetX = 0),
          (t.shadowOffsetY = 0),
          (t.shadowBlur = 0)),
        e._drawTextBox(function () {
          (t.shadowOffsetX = 0), (t.shadowOffsetY = 0), (t.shadowBlur = 0);
          var _ = e._clipText(),
            u = e._padding + e._borderWidth + e.shadowT;
          if (e._selection[1] > 0) {
            var s = e._textWidth(_.substring(0, e._selection[0])),
              l = e._textWidth(_.substring(e._selection[0], e._selection[1]));
            (t.fillStyle = e._selectionColor),
              t.fillRect(u + s, u, l, e._height);
          }
          if (e._cursor) {
            var h = e._textWidth(_.substring(0, e._cursorPos));
            (t.fillStyle = e._fontColor), t.fillRect(u + h, u, 1, e._height);
          }
          var c = e._padding + e._borderWidth + e.shadowL,
            f = Math.round(u + e._height / 2);
          (_ = "" === _ && e._placeHolder ? e._placeHolder : _),
            (t.fillStyle =
              "" !== e._value && e._value !== e._placeHolder
                ? e._fontColor
                : e._placeHolderColor),
            (t.font =
              e._fontStyle +
              " " +
              e._fontWeight +
              " " +
              e._fontSize +
              "px " +
              e._fontFamily),
            (t.shadowColor = e._fontShadowColor),
            (t.shadowBlur = e._fontShadowBlur),
            (t.shadowOffsetX = e._fontShadowOffsetX),
            (t.shadowOffsetY = e._fontShadowOffsetY),
            (t.textAlign = "left"),
            (t.textBaseline = "middle"),
            t.fillText(_, c, f);
          var p = e._innerShadow.split("px "),
            v = "none" === e._innerShadow ? 0 : parseInt(p[0], 10),
            w = "none" === e._innerShadow ? 0 : parseInt(p[1], 10),
            x = "none" === e._innerShadow ? 0 : parseInt(p[2], 10),
            b = "none" === e._innerShadow ? "" : p[3];
          if (x > 0) {
            var g = e._shadowCtx,
              y = g.canvas.width,
              S = g.canvas.height;
            g.clearRect(0, 0, y, S),
              (g.shadowBlur = x),
              (g.shadowColor = b),
              (g.shadowOffsetX = 0),
              (g.shadowOffsetY = w),
              g.fillRect(-1 * n, -100, 3 * n, 100),
              (g.shadowOffsetX = v),
              (g.shadowOffsetY = 0),
              g.fillRect(y, -1 * o, 100, 3 * o),
              (g.shadowOffsetX = 0),
              (g.shadowOffsetY = w),
              g.fillRect(-1 * n, S, 3 * n, 100),
              (g.shadowOffsetX = v),
              (g.shadowOffsetY = 0),
              g.fillRect(-100, -1 * o, 100, 3 * o),
              e._roundedRect(
                t,
                d + e.shadowL,
                d + e.shadowT,
                n - 2 * d - a,
                o - 2 * d - i,
                r,
              ),
              t.clip(),
              t.drawImage(
                e._shadowCanvas,
                0,
                0,
                y,
                S,
                d + e.shadowL,
                d + e.shadowT,
                y,
                S,
              );
          }
          return (
            e._ctx &&
              (e._ctx.clearRect(e._x, e._y, t.canvas.width, t.canvas.height),
              e._ctx.drawImage(e._renderCanvas, e._x, e._y)),
            e
          );
        }));
    },
    destroy: function () {
      var t = this,
        n = e.indexOf(t);
      -1 != n && e.splice(n, 1),
        t._hasFocus && t.blur(),
        document.body.removeChild(t._hiddenInput),
        (t._renderCanvas = null),
        (t._shadowCanvas = null),
        (t._renderCtx = null);
    },
    _drawTextBox: function (e) {
      var t = this,
        n = t._renderCtx,
        o = t.outerW,
        r = t.outerH,
        d = t._borderRadius,
        a = t._borderWidth,
        i = t.shadowW,
        _ = t.shadowH;
      if ("" === t._backgroundImage)
        (n.fillStyle = t._backgroundColor),
          t._roundedRect(
            n,
            a + t.shadowL,
            a + t.shadowT,
            o - 2 * a - i,
            r - 2 * a - _,
            d,
          ),
          n.fill(),
          e();
      else {
        var u = new Image();
        (u.src = t._backgroundImage),
          (u.onload = function () {
            n.drawImage(
              u,
              0,
              0,
              u.width,
              u.height,
              a + t.shadowL,
              a + t.shadowT,
              o,
              r,
            ),
              e();
          });
      }
    },
    _clearSelection: function () {
      var e = this;
      if (e._selection[1] > 0) {
        var t = e._selection[0],
          n = e._selection[1];
        return (
          (e._value = e._value.substr(0, t) + e._value.substr(n)),
          (e._cursorPos = t),
          (e._cursorPos = e._cursorPos < 0 ? 0 : e._cursorPos),
          (e._selection = [0, 0]),
          !0
        );
      }
      return !1;
    },
    _clipText: function (e) {
      var t = this;
      e = "undefined" == typeof e ? t._value : e;
      var n = t._textWidth(e),
        o = n / (t._width - t._padding),
        r = o > 1 ? e.substr(-1 * Math.floor(e.length / o)) : e;
      return r + "";
    },
    _textWidth: function (e) {
      var t = this,
        n = t._renderCtx;
      return (
        (n.font =
          t._fontStyle +
          " " +
          t._fontWeight +
          " " +
          t._fontSize +
          "px " +
          t._fontFamily),
        (n.textAlign = "left"),
        n.measureText(e).width
      );
    },
    _calcWH: function () {
      var e = this;
      (e.outerW = e._width + 2 * e._padding + 2 * e._borderWidth + e.shadowW),
        (e.outerH =
          e._height + 2 * e._padding + 2 * e._borderWidth + e.shadowH);
    },
    _updateCanvasWH: function () {
      var e = this,
        t = e._renderCanvas.width,
        n = e._renderCanvas.height;
      e._renderCanvas.setAttribute("width", e.outerW),
        e._renderCanvas.setAttribute("height", e.outerH),
        e._shadowCanvas.setAttribute("width", e._width + 2 * e._padding),
        e._shadowCanvas.setAttribute("height", e._height + 2 * e._padding),
        e._ctx && e._ctx.clearRect(e._x, e._y, t, n);
    },
    _updateHiddenInput: function () {
      var e = this;
      (e._hiddenInput.style.left =
        e._x + e._extraX + (e._canvas ? e._canvas.offsetLeft : 0) + "px"),
        (e._hiddenInput.style.top =
          e._y + e._extraY + (e._canvas ? e._canvas.offsetTop : 0) + "px"),
        (e._hiddenInput.style.width = e._width + 2 * e._padding + "px"),
        (e._hiddenInput.style.height = e._height + 2 * e._padding + "px");
    },
    _roundedRect: function (e, t, n, o, r, d) {
      2 * d > o && (d = o / 2),
        2 * d > r && (d = r / 2),
        e.beginPath(),
        e.moveTo(t + d, n),
        e.lineTo(t + o - d, n),
        e.quadraticCurveTo(t + o, n, t + o, n + d),
        e.lineTo(t + o, n + r - d),
        e.quadraticCurveTo(t + o, n + r, t + o - d, n + r),
        e.lineTo(t + d, n + r),
        e.quadraticCurveTo(t, n + r, t, n + r - d),
        e.lineTo(t, n + d),
        e.quadraticCurveTo(t, n, t + d, n),
        e.closePath();
    },
    _overInput: function (e, t) {
      var n = this,
        o = e >= n._x + n._extraX,
        r = e <= n._x + n._extraX + n._width + 2 * n._padding,
        d = t >= n._y + n._extraY,
        a = t <= n._y + n._extraY + n._height + 2 * n._padding;
      return o && r && d && a;
    },
    _clickPos: function (e) {
      var t = this,
        n = t._value;
      t._value === t._placeHolder && (n = "");
      var o = t._clipText(n),
        r = 0,
        d = o.length;
      if (e - (t._x + t._extraX) < t._textWidth(o))
        for (var a = 0; a < o.length; a++)
          if (((r += t._textWidth(o[a])), r >= e - (t._x + t._extraX))) {
            d = a;
            break;
          }
      return d;
    },
    _mousePos: function (e) {
      var t = e.target,
        n = e.pageX,
        o = e.pageY;
      e.touches && e.touches.length
        ? ((t = e.touches[0].target),
          (n = e.touches[0].pageX),
          (o = e.touches[0].pageY))
        : e.changedTouches &&
          e.changedTouches.length &&
          ((t = e.changedTouches[0].target),
          (n = e.changedTouches[0].pageX),
          (o = e.changedTouches[0].pageY));
      var r = document.defaultView.getComputedStyle(t, void 0),
        d = parseInt(r.paddingLeft, 10) || 0,
        a = parseInt(r.paddingLeft, 10) || 0,
        i = parseInt(r.borderLeftWidth, 10) || 0,
        _ = parseInt(r.borderLeftWidth, 10) || 0,
        u = document.body.parentNode.offsetTop || 0,
        s = document.body.parentNode.offsetLeft || 0,
        l = 0,
        h = 0;
      if ("undefined" != typeof t.offsetParent)
        do (l += t.offsetLeft), (h += t.offsetTop);
        while ((t = t.offsetParent));
      return (l += d + i + s), (h += a + _ + u), { x: n - l, y: o - h };
    },
  };
})();

export default CanvasInput;
