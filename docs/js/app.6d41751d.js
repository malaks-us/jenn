(function (e) {
  function t(t) {
    for (var r, o, s = t[0], i = t[1], l = t[2], u = 0, p = []; u < s.length; u++)
      (o = s[u]), Object.prototype.hasOwnProperty.call(n, o) && n[o] && p.push(n[o][0]), (n[o] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    b && b(t);
    while (p.length) p.shift()();
    return c.push.apply(c, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < c.length; t++) {
      for (var a = c[t], r = !0, s = 1; s < a.length; s++) {
        var i = a[s];
        0 !== n[i] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var r = {},
    n = { app: 0 },
    c = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var a = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/');
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var b = i;
  c.push([0, 'chunk-vendors']), a();
})({
  0: function (e, t, a) {
    e.exports = a('cd49');
  },
  '0397': function (e, t, a) {},
  '83d8': function (e, t, a) {
    'use strict';
    a('0397');
  },
  cd49: function (e, t, a) {
    'use strict';
    a.r(t);
    a('e260'), a('e6cf'), a('cca6'), a('a79d'), a('1de3');
    var r = a('7a23'),
      n = { id: 'nav', class: 'nav d-flex justify-content-center mx-5' },
      c = Object(r['e'])(
        'img',
        { src: '/logo.png', height: '64', width: '64', alt: 'Home' },
        null,
        -1
      ),
      o = Object(r['f'])(
        '<br><br><br><hr><div class="footer col-sm-12"><div class="footer-custom" align="center"><br> Copyright 1999 - 2021 <br><a href="https://casjay.pro" target="_blank">Casjays Developments</a> and <a href="https://malaks-us.github.io/jason" target="_blank">Jason M. Hempstead-Malak</a><br> Hosting by <a href="https://casjay.pro/hosting" target="_blank">Casjays Developments: Hosting</a><br> and powered by <a href="https://casjaysdev.pro" target="_blank">CasjaysDev.pro</a><br><br><a href="https://www.patreon.com/casjay" target="_blank"><img src="https://img.shields.io/badge/patreon-donate-orange.svg" border="0" alt="Casjays Patreon Page"></a><a href="https://www.paypal.me/casjaysdev" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-green.svg?casjay@yahoo.com" alt="Casjays Paypal Page"></a><br><br><a href="https://help.casjay.pro" target="_blank">CasjaysDev Support</a> | <a href="https://bugs.casjay.pro" target="_blank">CasjaysDev Bugs</a> <br><a href="https://uptime.servicestat.us" target="_blank">System Status</a> | <a href="https://services.servicestat.us" target="_blank">Service Status</a> | <a href="https://uptime.servicestat.us" target="_blank">Complete Status</a> <br><a href="https://casjaysdev.pro/domains.html" target="_blank">Casjays Developments Domains</a><br><br> Casjays Developments privacy policy can be found at<br><a href="https://casjaysdev.pro/policy/" target="_blank">https://casjaysdev.pro/policy</a><br><div class="text-center" style="color:royalblue;"><br> Made with 💜💜💜💜💜💜 by <br><a href="http://github.com/casjay" target="_blank" rel="noopener"> Jason M. Hempstead (Casjay)</a><br> This site is powered by an <a href="https://github.com/casjay-templates" target="_blank"> open source </a>theme </div><br></div><br><br></div><br><br><br><br>',
        9
      );
    function s(e, t) {
      var a = Object(r['v'])('router-link'),
        s = Object(r['v'])('router-view');
      return (
        Object(r['p'])(),
        Object(r['d'])(
          r['a'],
          null,
          [
            Object(r['e'])('div', n, [
              Object(r['g'])(
                a,
                {
                  to: '/',
                  type: 'button',
                  style: { width: '100px', color: '#ffffff' },
                  class: 'm-2 text-left justify-content-between btn btn-outline-danger',
                },
                {
                  default: Object(r['A'])(function () {
                    return [c];
                  }),
                  _: 1,
                }
              ),
            ]),
            Object(r['g'])(s),
            o,
          ],
          64
        )
      );
    }
    a('83d8');
    var i = a('6b0d'),
      l = a.n(i);
    const b = {},
      u = l()(b, [['render', s]]);
    var p = u,
      d = a('6c02'),
      f = { class: 'home' };
    function j(e, t, a, n, c, o) {
      var s = Object(r['v'])('Welcome');
      return Object(r['p'])(), Object(r['d'])('div', f, [Object(r['g'])(s)]);
    }
    var h = a('d4ec'),
      g = a('262e'),
      m = a('2caf'),
      O = a('9ab4'),
      v = a('ce1f'),
      y = (a('b0c0'), { key: 0 }),
      w = { key: 1 },
      k = { class: 'row text-center' },
      S = { class: 'col-md-6 offset-md-3' },
      x = { class: 'text-center' },
      _ = Object(r['e'])('br', null, null, -1),
      P = { class: 'text-center' },
      C = Object(r['e'])('h1', null, 'Bio:', -1),
      D = Object(r['e'])('br', null, null, -1),
      M = Object(r['e'])('br', null, null, -1),
      L = { class: 'text-center' },
      H = Object(r['e'])('h2', null, 'Email:', -1),
      T = ['href'],
      B = Object(r['e'])('br', null, null, -1),
      J = Object(r['e'])('br', null, null, -1),
      N = Object(r['e'])('div', { class: 'mb-5' }, null, -1);
    function A(e, t, a, n, c, o) {
      var s = Object(r['v'])('spinner');
      return (
        Object(r['p'])(),
        Object(r['d'])(
          r['a'],
          null,
          [
            '' == e.setProfile || 1 == e.isLoading
              ? (Object(r['p'])(), Object(r['d'])('div', y, [Object(r['g'])(s)]))
              : (Object(r['p'])(),
                Object(r['d'])('div', w, [
                  Object(r['e'])('div', k, [
                    Object(r['e'])('div', S, [
                      Object(r['e'])('div', x, [
                        Object(r['e'])('h1', null, Object(r['x'])(e.setProfile.name), 1),
                        Object(r['e'])('p', null, Object(r['x'])(e.setProfile.tagLine), 1),
                        _,
                      ]),
                      Object(r['e'])('div', P, [
                        C,
                        (Object(r['p'])(!0),
                        Object(r['d'])(
                          r['a'],
                          null,
                          Object(r['u'])(e.setProfile.bio, function (e) {
                            return (
                              Object(r['p'])(),
                              Object(r['d'])('span', { key: e }, Object(r['x'])(e), 1)
                            );
                          }),
                          128
                        )),
                        D,
                        M,
                      ]),
                      Object(r['e'])('div', L, [
                        H,
                        (Object(r['p'])(!0),
                        Object(r['d'])(
                          r['a'],
                          null,
                          Object(r['u'])(e.setProfile.email, function (e) {
                            return (
                              Object(r['p'])(),
                              Object(r['d'])('span', { key: e }, [
                                Object(r['e'])(
                                  'a',
                                  { href: 'mailto:'.concat(e) },
                                  Object(r['x'])(e),
                                  9,
                                  T
                                ),
                                B,
                              ])
                            );
                          }),
                          128
                        )),
                        J,
                      ]),
                    ]),
                  ]),
                ])),
            N,
          ],
          64
        )
      );
    }
    var W = a('bc3a'),
      E = a.n(W),
      q = { key: 0 },
      z = { key: 1 },
      F = Object(r['e'])('h2', null, 'Loading data from the API', -1),
      I = [F],
      G = ['width', 'height', 'stroke'],
      K = Object(r['f'])(
        '<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',
        1
      ),
      Q = [K];
    function R(e, t, a, n, c, o) {
      return (
        Object(r['p'])(),
        Object(r['d'])(
          r['a'],
          null,
          [
            null !== e.msgSpinner || '' !== e.msgSpinner
              ? (Object(r['p'])(),
                Object(r['d'])('div', q, [
                  Object(r['e'])('h2', null, Object(r['x'])(e.msgSpinner), 1),
                ]))
              : (Object(r['p'])(), Object(r['d'])('div', z, I)),
            (Object(r['p'])(),
            Object(r['d'])(
              'svg',
              {
                viewBox: '0 0 38 38',
                xmlns: 'http://www.w3.org/2000/svg',
                width: e.width,
                height: e.height,
                stroke: e.color,
              },
              Q,
              8,
              G
            )),
          ],
          64
        )
      );
    }
    a('a9e3');
    var U = Object(r['h'])({
      name: 'spinner',
      props: {
        msg: { type: String },
        msgSpinner: { type: String },
        loading: { type: Boolean },
        color: { type: String, default: '#000' },
        height: { type: Number, default: 64 },
        width: { type: Number, default: 64 },
      },
    });
    const V = l()(U, [['render', R]]);
    var X = V,
      Y = (function (e) {
        Object(g['a'])(a, e);
        var t = Object(m['a'])(a);
        function a() {
          return Object(h['a'])(this, a), t.apply(this, arguments);
        }
        return a;
      })(v['b']);
    Y = Object(O['a'])(
      [
        Object(v['a'])({
          props: { msg: String, msgSpinner: { type: String } },
          components: { Spinner: X },
          computed: {},
          methods: {
            isLoading: function () {
              this.isLoading = !0;
            },
          },
          data: function () {
            return { isLoading: !0, setProfile: [] };
          },
          mounted: function () {
            var e = this;
            E.a.get('/api/profile.json').then(function (t) {
              (e.setProfile = t.data), e.setProfile || (e.isLoading = !0);
            }),
              (this.isLoading = !1);
          },
        }),
      ],
      Y
    );
    var Z = Y;
    const $ = l()(Z, [['render', A]]);
    var ee = $,
      te = (function (e) {
        Object(g['a'])(a, e);
        var t = Object(m['a'])(a);
        function a() {
          return Object(h['a'])(this, a), t.apply(this, arguments);
        }
        return a;
      })(v['b']);
    te = Object(O['a'])(
      [
        Object(v['a'])({
          props: { msg: { type: String }, msgSpinner: { type: String } },
          components: { Welcome: ee },
        }),
      ],
      te
    );
    var ae = te;
    const re = l()(ae, [['render', j]]);
    var ne = re,
      ce = { class: 'container' },
      oe = Object(r['f'])(
        '<div class="jumbotron"><h1><i class="fa fa-frown-o red"></i><a href="https://www.google.com/search?q=server+error+404" target="_blank">404 Not Found</a></h1><br><p class="lead"> We apologize but we can&#39;t seem to be able to find what you&#39;re looking for!<br></p><div class="container"><div class="body-content"><img alt="error" src="https://raw.githubusercontent.com/casjay-templates/default-web-assets/main/icons/errors/404.gif"><br></div></div><a href="/" class="btn btn-secondary btn-outline-danger btn-lg btn-block">return to homepage </a></div>',
        1
      ),
      se = [oe];
    function ie(e, t, a, n, c, o) {
      return Object(r['p'])(), Object(r['d'])('div', ce, se);
    }
    var le = (function (e) {
      Object(g['a'])(a, e);
      var t = Object(m['a'])(a);
      function a() {
        return Object(h['a'])(this, a), t.apply(this, arguments);
      }
      return a;
    })(v['b']);
    const be = l()(le, [['render', ie]]);
    var ue = be,
      pe = [
        { component: ne, path: '/', name: 'Home', meta: { title: 'Home' } },
        { component: ue, path: '/error/404' },
        { path: '/:catchAll(.*)', redirect: '/error/404' },
      ],
      de = Object(d['a'])({ history: Object(d['b'])(), routes: pe });
    de.afterEach(function (e) {
      var t = '';
      document.title = ''.concat(t, ' ').concat(e.meta.title);
    });
    var fe = de,
      je = a('5502'),
      he = Object(je['a'])({ state: {}, mutations: {}, actions: {}, modules: {} });
    Object(r['c'])(p).use(he).use(fe).mount('#app');
  },
});
//# sourceMappingURL=app.6d41751d.js.map
