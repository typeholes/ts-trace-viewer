"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var vueRouter = require("vue-router");
var zod = require("zod");
require("@trpc/server");
var client = require("@trpc/client");
var axios$2 = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios$2);
var robotoFont = "";
var materialIcons = "";
var quasar = "";
var app = "";
/*!
 * Quasar Framework v2.16.2
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
var Sh = Object.defineProperty;
var md = (e, t) => {
  for (var o in t)
    Sh(e, o, { get: t[o], enumerable: true });
};
function ft(e, t, o, n) {
  return Object.defineProperty(e, t, { get: o, set: n, enumerable: true }), e;
}
function rl(e, t) {
  for (let o in t)
    ft(e, o, t[o]);
  return e;
}
var It = { value: true };
function _h(e, t) {
  let o = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: o[5] || o[3] || o[1] || "", version: o[4] || o[2] || "0", platform: t[0] || "" };
}
function wh(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
function Ch(e) {
  let t = e.toLowerCase(), o = wh(t), n = _h(t, o), r = {};
  n.browser && (r[n.browser] = true, r.version = n.version, r.versionNumber = parseInt(n.version, 10)), n.platform && (r[n.platform] = true);
  let i = r.android || r.ios || r.bb || r.blackberry || r.ipad || r.iphone || r.ipod || r.kindle || r.playbook || r.silk || r["windows phone"];
  return i === true || t.indexOf("mobile") !== -1 ? r.mobile = true : r.desktop = true, r["windows phone"] && (r.winphone = true, delete r["windows phone"]), r.edga || r.edgios || r.edg ? (r.edge = true, n.browser = "edge") : r.crios ? (r.chrome = true, n.browser = "chrome") : r.fxios && (r.firefox = true, n.browser = "firefox"), (r.ipod || r.ipad || r.iphone) && (r.ios = true), r.vivaldi && (n.browser = "vivaldi", r.vivaldi = true), (r.chrome || r.opr || r.safari || r.vivaldi || r.mobile === true && r.ios !== true && i !== true) && (r.webkit = true), r.opr && (n.browser = "opera", r.opera = true), r.safari && (r.blackberry || r.bb ? (n.browser = "blackberry", r.blackberry = true) : r.playbook ? (n.browser = "playbook", r.playbook = true) : r.android ? (n.browser = "android", r.android = true) : r.kindle ? (n.browser = "kindle", r.kindle = true) : r.silk && (n.browser = "silk", r.silk = true)), r.name = n.browser, r.platform = n.platform, r;
}
var kh = { has: { touch: false, webStorage: false }, within: { iframe: false } }, rt = kh, vd = { install(e) {
  let { $q: t } = e;
  t.platform = this.parseSSR(e.ssrContext);
} };
vd.parseSSR = (e) => {
  let t = e.req.headers["user-agent"] || e.req.headers["User-Agent"] || "";
  return { ...rt, userAgent: t, is: Ch(t) };
};
var pn = vd;
function M(e) {
  return vue.markRaw(vue.defineComponent(e));
}
function wt(e) {
  return vue.markRaw(e);
}
var Ut = (e, t) => (Object.assign(t, e), t);
var Ge = { hasPassive: false, passiveCapture: true, notPassiveCapture: true };
try {
  let e = Object.defineProperty({}, "passive", { get() {
    Object.assign(Ge, { hasPassive: true, passive: { passive: true }, notPassive: { passive: false }, passiveCapture: { passive: true, capture: true }, notPassiveCapture: { passive: false, capture: true } });
  } });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function je() {
}
function So(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function xs(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  let t = [], o = e.target;
  for (; o; ) {
    if (t.push(o), o.tagName === "HTML")
      return t.push(document), t.push(window), t;
    o = o.parentElement;
  }
}
function nt(e) {
  e.stopPropagation();
}
function pt(e) {
  e.cancelable !== false && e.preventDefault();
}
function qe(e) {
  e.cancelable !== false && e.preventDefault(), e.stopPropagation();
}
function Ir(e, t, o) {
  let n = `__q_${t}_evt`;
  e[n] = e[n] !== void 0 ? e[n].concat(o) : o, o.forEach((r) => {
    r[0].addEventListener(r[1], e[r[2]], Ge[r[3]]);
  });
}
function da(e, t) {
  let o = `__q_${t}_evt`;
  e[o] !== void 0 && (e[o].forEach((n) => {
    n[0].removeEventListener(n[1], e[n[2]], Ge[n[3]]);
  }), e[o] = void 0);
}
function Lo(e, t = 250, o) {
  let n = null;
  function r() {
    let i = arguments, a = () => {
      n = null, o !== true && e.apply(this, i);
    };
    n !== null ? clearTimeout(n) : o === true && e.apply(this, i), n = setTimeout(a, t);
  }
  return r.cancel = () => {
    n !== null && clearTimeout(n);
  }, r;
}
var _s = Ut({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: je, setDebounce: je, install({ $q: e, onSSRHydrated: t }) {
  e.screen = this;
} });
var ro = Ut({ isActive: false, mode: false }, { __media: void 0, set(e) {
}, toggle() {
}, install({ $q: e, ssrContext: t }) {
  let { dark: o } = e.config;
  this.isActive = o === true, e.dark = { isActive: false, mode: false, set: (n) => {
    t._meta.bodyClasses = t._meta.bodyClasses.replace(" body--light", "").replace(" body--dark", "") + ` body--${n === true ? "dark" : "light"}`, e.dark.isActive = n === true, e.dark.mode = n;
  }, toggle: () => {
    e.dark.set(e.dark.isActive === false);
  } }, e.dark.set(o);
} }), ws = ro;
function go(e) {
  return e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function Ht(e, t) {
  return go(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function xd(e) {
  if (e.ios === true)
    return "ios";
  if (e.android === true)
    return "android";
}
function yd({ is: e, has: t, within: o }, n) {
  let r = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    let i = xd(e);
    i !== void 0 && r.push("platform-" + i);
  }
  if (e.nativeMobile === true) {
    let i = e.nativeMobileWrapper;
    r.push(i), r.push("native-mobile"), e.ios === true && (n[i] === void 0 || n[i].iosStatusBarPadding !== false) && r.push("q-ios-padding");
  } else
    e.electron === true ? r.push("electron") : e.bex === true && r.push("bex");
  return o.iframe === true && r.push("within-iframe"), r;
}
var Sd = { install(e) {
  {
    let { $q: t, ssrContext: o } = e, n = yd(t.platform, t.config);
    t.config.screen !== void 0 && t.config.screen.bodyClass === true && n.push("screen--xs"), o._meta.bodyClasses += n.join(" ");
    let r = t.config.brand;
    if (r !== void 0) {
      let i = Object.keys(r).map((a) => `--q-${a}:${r[a]};`).join("");
      o._meta.endingHeadTags += `<style>:root{${i}}</style>`;
    }
    return;
  }
} };
var $n = { __history: [], add: je, remove: je, install({ $q: e }) {
} };
var fa = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days" }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, o) => e + "-" + t + " of " + o, columns: "Columns" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function wd() {
}
var Oh = Ut({ __qLang: {} }, { getLocale: wd, set(e = fa, t) {
  let o = { ...e, rtl: e.rtl === true, getLocale: wd };
  if (t === void 0) {
    console.error("SSR ERROR: second param required: Lang.set(lang, ssrContext)");
    return;
  }
  if (o.set = t.$q.lang.set, t.$q.config.lang === void 0 || t.$q.config.lang.noHtmlAttrs !== true) {
    let n = o.rtl === true ? "rtl" : "ltr", r = `lang=${o.isoName} dir=${n}`;
    t._meta.htmlAttrs = t.__qPrevLang !== void 0 ? t._meta.htmlAttrs.replace(t.__qPrevLang, r) : r, t.__qPrevLang = r;
  }
  t.$q.lang = o;
}, install({ $q: e, lang: t, ssrContext: o }) {
  {
    let n = t || fa;
    e.lang = {}, e.lang.set = (r) => {
      this.set(r, o);
    }, e.lang.set(n), (this.props === void 0 || this.props.isoName !== n.isoName) && (this.props = { ...n });
  }
} }), Bn = Oh;
var Cd = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } };
var Ih = Ut({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  let o = { ...e };
  if (t === void 0) {
    console.error("SSR ERROR: second param required: IconSet.set(iconSet, ssrContext)");
    return;
  }
  o.set = t.$q.iconSet.set, Object.assign(t.$q.iconSet, o);
}, install({ $q: e, iconSet: t, ssrContext: o }) {
  {
    let n = t || Cd;
    e.iconMapFn = o.$q.config.iconMapFn || this.iconMapFn || null, e.iconSet = {}, e.iconSet.set = (r) => {
      this.set(r, o);
    }, e.iconSet.set(n), (this.props === void 0 || this.props.name !== n.name) && (this.props = { ...n });
  }
} }), ma = Ih;
var al = "_q_", ll = "_q_t_", ul = "_q_s_", io = "_q_l_", sl = "_q_pc_", cl = "_q_f_", hn = "_q_fo_", dl = "_q_tabs_", fl = "_q_u_";
function We() {
}
function Zt(e, t) {
  if (e === t)
    return true;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return false;
    let o, n;
    if (e.constructor === Array) {
      if (o = e.length, o !== t.length)
        return false;
      for (n = o; n-- !== 0; )
        if (Zt(e[n], t[n]) !== true)
          return false;
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size)
        return false;
      let i = e.entries();
      for (n = i.next(); n.done !== true; ) {
        if (t.has(n.value[0]) !== true)
          return false;
        n = i.next();
      }
      for (i = e.entries(), n = i.next(); n.done !== true; ) {
        if (Zt(n.value[1], t.get(n.value[0])) !== true)
          return false;
        n = i.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size)
        return false;
      let i = e.entries();
      for (n = i.next(); n.done !== true; ) {
        if (t.has(n.value[0]) !== true)
          return false;
        n = i.next();
      }
      return true;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (o = e.length, o !== t.length)
        return false;
      for (n = o; n-- !== 0; )
        if (e[n] !== t[n])
          return false;
      return true;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    let r = Object.keys(e).filter((i) => e[i] !== void 0);
    if (o = r.length, o !== Object.keys(t).filter((i) => t[i] !== void 0).length)
      return false;
    for (n = o; n-- !== 0; ) {
      let i = r[n];
      if (Zt(e[i], t[i]) !== true)
        return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function st(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function Ln(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function _o(e) {
  return typeof e == "number" && isFinite(e);
}
var qd = [pn, Sd, ws, _s, $n, Bn, ma];
function Td(e, t) {
  t.forEach((o) => {
    o.install(e), o.__installed = true;
  });
}
function Qh(e, t, o) {
  e.config.globalProperties.$q = o.$q, e.provide(al, o.$q), Td(o, qd), t.components !== void 0 && Object.values(t.components).forEach((n) => {
    st(n) === true && n.name !== void 0 && e.component(n.name, n);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((n) => {
    st(n) === true && n.name !== void 0 && e.directive(n.name, n);
  }), t.plugins !== void 0 && Td(o, Object.values(t.plugins).filter((n) => typeof n.install == "function" && qd.includes(n) === false)), o.$q.onSSRHydrated = () => {
    o.onSSRHydrated.forEach((n) => {
      n();
    }), o.$q.onSSRHydrated = () => {
    };
  };
}
var Md = function(e, t = {}, o) {
  let n = { version: "2.16.2", config: t.config || {} };
  Object.assign(o, { $q: n, _meta: { htmlAttrs: "", headTags: "", endingHeadTags: "", bodyClasses: "", bodyAttrs: "data-server-rendered", bodyTags: "" } }), o._modules === void 0 && (o._modules = []), o.onRendered === void 0 && (o.onRendered = () => {
  }), e.config.globalProperties.ssrContext = o, Qh(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, ssrContext: o });
};
var ed = {};
md(ed, { QAjaxBar: () => vl, QAvatar: () => Ps, QBadge: () => Id, QBanner: () => Nd, QBar: () => Qd, QBreadcrumbs: () => Kd, QBreadcrumbsEl: () => Jd, QBtn: () => Be, QBtnDropdown: () => Bl, QBtnGroup: () => ti, QBtnToggle: () => Rf, QCard: () => bi, QCardActions: () => Ll, QCardSection: () => Vo, QCarousel: () => Lf, QCarouselControl: () => Vf, QCarouselSlide: () => Ff, QChatMessage: () => zf, QCheckbox: () => tn, QChip: () => Ei, QCircularProgress: () => $i, QColor: () => em, QDate: () => vm, QDialog: () => rn, QDrawer: () => km, QEditor: () => Nm, QExpansionItem: () => jm, QFab: () => Km, QFabAction: () => Xm, QField: () => pu, QFile: () => ov, QFooter: () => nv, QForm: () => rv, QFormChildMixin: () => iv, QHeader: () => lv, QIcon: () => _e, QImg: () => uv, QInfiniteScroll: () => fv, QInnerLoading: () => vv, QInput: () => Gi, QIntersection: () => Sv, QItem: () => an, QItemLabel: () => Cr, QItemSection: () => co, QKnob: () => Cv, QLayout: () => Tv, QLinearProgress: () => Nu, QList: () => Eu, QMarkupTable: () => $u, QMenu: () => Zo, QNoSsr: () => Pv, QOptionGroup: () => Fu, QPage: () => Lv, QPageContainer: () => Fv, QPageScroller: () => Ov, QPageSticky: () => Iv, QPagination: () => Hv, QParallax: () => Qv, QPopupEdit: () => jv, QPopupProxy: () => Kv, QPullToRefresh: () => Yv, QRadio: () => Bu, QRange: () => Xv, QRating: () => Gv, QResizeObserver: () => so, QResponsive: () => Zv, QRouteTab: () => pp, QScrollArea: () => ng, QScrollObserver: () => Zi, QSelect: () => Yu, QSeparator: () => ho, QSkeleton: () => sg, QSlideItem: () => fg, QSlideTransition: () => Yn, QSlider: () => _n, QSpace: () => mg, QSpinner: () => xt, QSpinnerAudio: () => vg, QSpinnerBall: () => gg, QSpinnerBars: () => pg, QSpinnerBox: () => hg, QSpinnerClock: () => bg, QSpinnerComment: () => yg, QSpinnerCube: () => xg, QSpinnerDots: () => Sg, QSpinnerFacebook: () => _g, QSpinnerGears: () => wg, QSpinnerGrid: () => Cg, QSpinnerHearts: () => kg, QSpinnerHourglass: () => qg, QSpinnerInfinity: () => Tg, QSpinnerIos: () => Mg, QSpinnerOrbit: () => Pg, QSpinnerOval: () => Rg, QSpinnerPie: () => Eg, QSpinnerPuff: () => Ag, QSpinnerRadio: () => $g, QSpinnerRings: () => Bg, QSpinnerTail: () => Lg, QSplitter: () => Dg, QStep: () => Og, QStepper: () => Ig, QStepperNavigation: () => Hg, QTab: () => Qn, QTabPanel: () => Fi, QTabPanels: () => Xl, QTable: () => fp, QTabs: () => Ta, QTd: () => gp, QTh: () => ts, QTime: () => bp, QTimeline: () => yp, QTimelineEntry: () => xp, QToggle: () => Lu, QToolbar: () => Sp, QToolbarTitle: () => _p, QTooltip: () => du, QTr: () => mp, QTree: () => Cp, QUploader: () => Pp, QUploaderAddTrigger: () => Rp, QVideo: () => Ap, QVirtualScroll: () => rs });
var Pd = ["B", "KB", "MB", "GB", "TB", "PB"];
function Nr(e, t = 1) {
  let o = 0;
  for (; parseInt(e, 10) >= 1024 && o < Pd.length - 1; )
    e /= 1024, ++o;
  return `${e.toFixed(t)}${Pd[o]}`;
}
function Xe(e, t, o) {
  return o <= t ? t : Math.min(o, Math.max(t, e));
}
function dr(e, t, o) {
  if (o <= t)
    return t;
  let n = o - t + 1, r = t + (e - t) % n;
  return r < t && (r = n + r), r === 0 ? 0 : r;
}
function Ze(e, t = 2, o = "0") {
  if (e == null)
    return e;
  let n = "" + e;
  return n.length >= t ? n : new Array(t - n.length + 1).join(o) + n;
}
var Rd = null, Ed = null, Xh = ["top", "right", "bottom", "left"], ml = [], va = 0;
function Gh({ p: e, pos: t, active: o, horiz: n, reverse: r, dir: i }) {
  let a = 1, l = 1;
  return n === true ? (r === true && (a = -1), t === "bottom" && (l = -1), { transform: `translate3d(${a * (e - 100)}%,${o ? 0 : l * -200}%,0)` }) : (r === true && (l = -1), t === "right" && (a = -1), { transform: `translate3d(${o ? 0 : i * a * -200}%,${l * (e - 100)}%,0)` });
}
function Zh(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), Xe(e + t, 0, 100);
}
function Jh(e) {
  va++, ml.push(e), !(va > 1) && (Rd.prototype.open = function(t, o) {
    let n = [], r = () => {
      ml.forEach((a) => {
        (a.hijackFilter.value === null || a.hijackFilter.value(o) === true) && (a.start(), n.push(a.stop));
      });
    }, i = () => {
      n.forEach((a) => {
        a();
      });
    };
    this.addEventListener("loadstart", r, { once: true }), this.addEventListener("loadend", i, { once: true }), Ed.apply(this, arguments);
  });
}
function e0(e) {
  ml = ml.filter((t) => t.start !== e), va = Math.max(0, va - 1), va === 0 && (Rd.prototype.open = Ed);
}
var vl = M({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => Xh.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  let { proxy: o } = vue.getCurrentInstance(), n = vue.ref(0), r = vue.ref(false), i = vue.ref(true), a = 0, l = null, s, d = vue.computed(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (i.value === true ? "" : " no-transition")), u = vue.computed(() => e.position === "top" || e.position === "bottom"), v = vue.computed(() => u.value === true ? "height" : "width"), f = vue.computed(() => {
    let p = r.value, g = Gh({ p: n.value, pos: e.position, active: p, horiz: u.value, reverse: o.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: o.$q.lang.rtl === true ? -1 : 1 });
    return g[v.value] = e.size, g.opacity = p ? 1 : 0, g;
  }), c = vue.computed(() => r.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": n.value } : { "aria-hidden": "true" });
  function m(p = 300) {
    let g = s;
    return s = Math.max(0, p) || 0, a++, a > 1 ? (g === 0 && p > 0 ? w() : l !== null && g > 0 && p <= 0 && (clearTimeout(l), l = null), a) : (l !== null && clearTimeout(l), t("start"), n.value = 0, l = setTimeout(() => {
      l = null, i.value = true, p > 0 && w();
    }, r._value === true ? 500 : 1), r._value !== true && (r.value = true, i.value = false), a);
  }
  function y(p) {
    return a > 0 && (n.value = Zh(n.value, p)), a;
  }
  function h() {
    if (a = Math.max(0, a - 1), a > 0)
      return a;
    l !== null && (clearTimeout(l), l = null), t("stop");
    let p = () => {
      i.value = true, n.value = 100, l = setTimeout(() => {
        l = null, r.value = false;
      }, 1e3);
    };
    return n.value === 0 ? l = setTimeout(p, 1) : p(), a;
  }
  function w() {
    n.value < 100 && (l = setTimeout(() => {
      l = null, y(), w();
    }, s));
  }
  let b;
  return vue.onMounted(() => {
    e.skipHijack !== true && (b = true, Jh({ start: m, stop: h, hijackFilter: vue.computed(() => e.hijackFilter || null) }));
  }), vue.onBeforeUnmount(() => {
    l !== null && clearTimeout(l), b === true && e0(m);
  }), Object.assign(o, { start: m, stop: h, increment: y }), () => vue.h("div", { class: d.value, style: f.value, ...c.value });
} });
var gl = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, Lt = { size: String };
function Ft(e, t = gl) {
  return vue.computed(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function J(e, t) {
  return e !== void 0 && e() || t;
}
function Wo(e, t) {
  if (e !== void 0) {
    let o = e();
    if (o != null)
      return o.slice();
  }
  return t;
}
function Ue(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function jr(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function yt(e, t, o, n, r, i) {
  t.key = n + r;
  let a = vue.h(e, t, o);
  return r === true ? vue.withDirectives(a, i()) : a;
}
var $d = "0 0 24 24", Bd = (e) => e, Ts = (e) => `ionicons ${e}`, Fd = { "mdi-": (e) => `mdi ${e}`, "icon-": Bd, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Ts, "ion-ios": Ts, "ion-logo": Ts, "iconfont ": Bd, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}` }, Dd = { o_: "-outlined", r_: "-round", s_: "-sharp" }, Vd = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, i0 = new RegExp("^(" + Object.keys(Fd).join("|") + ")"), a0 = new RegExp("^(" + Object.keys(Dd).join("|") + ")"), Ld = new RegExp("^(" + Object.keys(Vd).join("|") + ")"), l0 = /^[Mm]\s?[-+]?\.?\d/, u0 = /^img:/, s0 = /^svguse:/, c0 = /^ion-/, d0 = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, _e = M({ name: "QIcon", props: { ...Lt, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = Ft(e), r = vue.computed(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), i = vue.computed(() => {
    let a, l = e.name;
    if (l === "none" || !l)
      return { none: true };
    if (o.iconMapFn !== null) {
      let u = o.iconMapFn(l);
      if (u !== void 0)
        if (u.icon !== void 0) {
          if (l = u.icon, l === "none" || !l)
            return { none: true };
        } else
          return { cls: u.cls, content: u.content !== void 0 ? u.content : " " };
    }
    if (l0.test(l) === true) {
      let [u, v = $d] = l.split("|");
      return { svg: true, viewBox: v, nodes: u.split("&&").map((f) => {
        let [c, m, y] = f.split("@@");
        return vue.h("path", { style: m, d: c, transform: y });
      }) };
    }
    if (u0.test(l) === true)
      return { img: true, src: l.substring(4) };
    if (s0.test(l) === true) {
      let [u, v = $d] = l.split("|");
      return { svguse: true, src: u.substring(7), viewBox: v };
    }
    let s = " ", d = l.match(i0);
    if (d !== null)
      a = Fd[d[1]](l);
    else if (d0.test(l) === true)
      a = l;
    else if (c0.test(l) === true)
      a = `ionicons ion-${o.platform.is.ios === true ? "ios" : "md"}${l.substring(3)}`;
    else if (Ld.test(l) === true) {
      a = "notranslate material-symbols";
      let u = l.match(Ld);
      u !== null && (l = l.substring(6), a += Vd[u[1]]), s = l;
    } else {
      a = "notranslate material-icons";
      let u = l.match(a0);
      u !== null && (l = l.substring(2), a += Dd[u[1]]), s = l;
    }
    return { cls: a, content: s };
  });
  return () => {
    let a = { class: r.value, style: n.value, "aria-hidden": "true", role: "presentation" };
    return i.value.none === true ? vue.h(e.tag, a, J(t.default)) : i.value.img === true ? vue.h(e.tag, a, Ue(t.default, [vue.h("img", { src: i.value.src })])) : i.value.svg === true ? vue.h(e.tag, a, Ue(t.default, [vue.h("svg", { viewBox: i.value.viewBox || "0 0 24 24" }, i.value.nodes)])) : i.value.svguse === true ? vue.h(e.tag, a, Ue(t.default, [vue.h("svg", { viewBox: i.value.viewBox }, [vue.h("use", { "xlink:href": i.value.src })])])) : (i.value.cls !== void 0 && (a.class += " " + i.value.cls), vue.h(e.tag, a, Ue(t.default, [i.value.content])));
  };
} });
var Ps = M({ name: "QAvatar", props: { ...Lt, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  let o = Ft(e), n = vue.computed(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), r = vue.computed(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    let i = e.icon !== void 0 ? [vue.h(_e, { name: e.icon })] : void 0;
    return vue.h("div", { class: n.value, style: o.value }, [vue.h("div", { class: "q-avatar__content row flex-center overflow-hidden", style: r.value }, jr(t.default, i))]);
  };
} });
var m0 = ["top", "middle", "bottom"], Id = M({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => m0.includes(e) } }, setup(e, { slots: t }) {
  let o = vue.computed(() => e.align !== void 0 ? { verticalAlign: e.align } : null), n = vue.computed(() => {
    let r = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (r !== void 0 ? ` text-${r}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => vue.h("div", { class: n.value, style: o.value, role: "status", "aria-label": e.label }, Ue(t.default, e.label !== void 0 ? [e.label] : []));
} });
var pe = { dark: { type: Boolean, default: null } };
function he(e, t) {
  return vue.computed(() => e.dark === null ? t.dark.isActive : e.dark);
}
var Nd = M({ name: "QBanner", props: { ...pe, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = he(e, o), r = vue.computed(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (n.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), i = vue.computed(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    let a = [vue.h("div", { class: "q-banner__avatar col-auto row items-center self-start" }, J(t.avatar)), vue.h("div", { class: "q-banner__content col text-body2" }, J(t.default))], l = J(t.action);
    return l !== void 0 && a.push(vue.h("div", { class: i.value }, l)), vue.h("div", { class: r.value + (e.inlineActions === false && l !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, a);
  };
} });
var Qd = M({ name: "QBar", props: { ...pe, dense: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = he(e, o), r = vue.computed(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${n.value === true ? "dark" : "light"}`);
  return () => vue.h("div", { class: r.value, role: "toolbar" }, J(t.default));
} });
var jd = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, x0 = Object.keys(jd), Ur = { align: { type: String, validator: (e) => x0.includes(e) } };
function Kr(e) {
  return vue.computed(() => {
    let t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${jd[t]}`;
  });
}
function hl(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function Ud(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((o) => {
    Ud(e, o);
  }) : e.add(t);
}
function Wr(e) {
  let t = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    Ud(t, o);
  }), Array.from(t);
}
function Yr(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Kt(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var S0 = ["", true], Kd = M({ name: "QBreadcrumbs", props: { ...Ur, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  let o = Kr(e), n = vue.computed(() => `flex items-center ${o.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), r = vue.computed(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), i = vue.computed(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0)
      return;
    let a = Wr(J(t.default));
    if (a.length === 0)
      return;
    let l = 1, s = [], d = a.filter((v) => v.type !== void 0 && v.type.name === "QBreadcrumbsEl").length, u = t.separator !== void 0 ? t.separator : () => e.separator;
    return a.forEach((v) => {
      if (v.type !== void 0 && v.type.name === "QBreadcrumbsEl") {
        let f = l < d, c = v.props !== null && S0.includes(v.props.disable), m = (f === true ? "" : " q-breadcrumbs--last") + (c !== true && f === true ? i.value : "");
        l++, s.push(vue.h("div", { class: `flex items-center${m}` }, [v])), f === true && s.push(vue.h("div", { class: "q-breadcrumbs__separator" + r.value }, u()));
      } else
        s.push(v);
    }), vue.h("div", { class: "q-breadcrumbs" }, [vue.h("div", { class: n.value }, s)]);
  };
} });
function Wd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Yd(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function w0(e, t) {
  for (let o in t) {
    let n = t[o], r = e[o];
    if (typeof n == "string") {
      if (n !== r)
        return false;
    } else if (Array.isArray(r) === false || r.length !== n.length || n.some((i, a) => i !== r[a]))
      return false;
  }
  return true;
}
function Xd(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((o, n) => o === t[n]) : e.length === 1 && e[0] === t;
}
function C0(e, t) {
  return Array.isArray(e) === true ? Xd(e, t) : Array.isArray(t) === true ? Xd(t, e) : e === t;
}
function k0(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return false;
  for (let o in e)
    if (C0(e[o], t[o]) === false)
      return false;
  return true;
}
var Es = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, bn = { ...Es, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function Fn({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  let o = vue.getCurrentInstance(), { props: n, proxy: r, emit: i } = o, a = Yr(o), l = vue.computed(() => n.disable !== true && n.href !== void 0), s = t === true ? vue.computed(() => a === true && n.disable !== true && l.value !== true && n.to !== void 0 && n.to !== null && n.to !== "") : vue.computed(() => a === true && l.value !== true && n.to !== void 0 && n.to !== null && n.to !== ""), d = vue.computed(() => s.value === true ? b(n.to) : null), u = vue.computed(() => d.value !== null), v = vue.computed(() => l.value === true || u.value === true), f = vue.computed(() => n.type === "a" || v.value === true ? "a" : n.tag || e || "div"), c = vue.computed(() => l.value === true ? { href: n.href, target: n.target } : u.value === true ? { href: d.value.href, target: n.target } : {}), m = vue.computed(() => {
    if (u.value === false)
      return -1;
    let { matched: x } = d.value, { length: P } = x, A = x[P - 1];
    if (A === void 0)
      return -1;
    let L = r.$route.matched;
    if (L.length === 0)
      return -1;
    let $ = L.findIndex(Yd.bind(null, A));
    if ($ !== -1)
      return $;
    let R = Wd(x[P - 2]);
    return P > 1 && Wd(A) === R && L[L.length - 1].path !== R ? L.findIndex(Yd.bind(null, x[P - 2])) : $;
  }), y = vue.computed(() => u.value === true && m.value !== -1 && w0(r.$route.params, d.value.params)), h = vue.computed(() => y.value === true && m.value === r.$route.matched.length - 1 && k0(r.$route.params, d.value.params)), w = vue.computed(() => u.value === true ? h.value === true ? ` ${n.exactActiveClass} ${n.activeClass}` : n.exact === true ? "" : y.value === true ? ` ${n.activeClass}` : "" : "");
  function b(x) {
    try {
      return r.$router.resolve(x);
    } catch {
    }
    return null;
  }
  function p(x, { returnRouterError: P, to: A = n.to, replace: L = n.replace } = {}) {
    if (n.disable === true)
      return x.preventDefault(), Promise.resolve(false);
    if (x.metaKey || x.altKey || x.ctrlKey || x.shiftKey || x.button !== void 0 && x.button !== 0 || n.target === "_blank")
      return Promise.resolve(false);
    x.preventDefault();
    let $ = r.$router[L === true ? "replace" : "push"](A);
    return P === true ? $ : $.then(() => {
    }).catch(() => {
    });
  }
  function g(x) {
    if (u.value === true) {
      let P = (A) => p(x, A);
      i("click", x, P), x.defaultPrevented !== true && P();
    } else
      i("click", x);
  }
  return { hasRouterLink: u, hasHrefLink: l, hasLink: v, linkTag: f, resolvedLink: d, linkIsActive: y, linkIsExactActive: h, linkClass: w, linkAttrs: c, getLink: b, navigateToRouterLink: p, navigateOnClick: g };
}
var Jd = M({ name: "QBreadcrumbsEl", props: { ...bn, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  let { linkTag: o, linkAttrs: n, linkClass: r, navigateOnClick: i } = Fn(), a = vue.computed(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + r.value : "q-breadcrumbs__el--disable"), ...n.value, onClick: i })), l = vue.computed(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    let s = [];
    return e.icon !== void 0 && s.push(vue.h(_e, { class: l.value, name: e.icon })), e.label !== void 0 && s.push(e.label), vue.h(o.value, { ...a.value }, Ue(t.default, s));
  };
} });
var ze = { size: { type: [String, Number], default: "1em" }, color: String };
function De(e) {
  return { cSize: vue.computed(() => e.size in gl ? `${gl[e.size]}px` : e.size), classes: vue.computed(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var xt = M({ name: "QSpinner", props: { ...ze, thickness: { type: Number, default: 5 } }, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [vue.h("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function yl(e) {
  if (e === window)
    return { top: 0, left: 0 };
  let { top: t, left: o } = e.getBoundingClientRect();
  return { top: t, left: o };
}
function fr(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Xr(e, t) {
  let o = e.style;
  for (let n in t)
    o[n] = t[n];
}
function of(e) {
  if (e == null)
    return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  let t = vue.unref(e);
  if (t)
    return t.$el || t;
}
function xl(e, t) {
  if (e == null || e.contains(t) === true)
    return true;
  for (let o = e.nextElementSibling; o !== null; o = o.nextElementSibling)
    if (o.contains(t))
      return true;
  return false;
}
function As(e, t = 250) {
  let o = false, n;
  return function() {
    return o === false && (o = true, setTimeout(() => {
      o = false;
    }, t), n = e.apply(this, arguments)), n;
  };
}
var Mt = () => ({});
var Xo = wt({ name: "ripple", getSSRProps: Mt });
var ga = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, A0 = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, $0 = ["button", "submit", "reset"], B0 = /[^\s]\/[^\s]/, $s = ["flat", "outline", "push", "unelevated"];
function Sl(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function _l(e) {
  let t = Sl(e);
  return t !== void 0 ? { [t]: true } : {};
}
var wl = { ...Lt, ...Es, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...$s.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...Ur.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, nf = { ...wl, round: Boolean };
function rf(e) {
  let t = Ft(e, A0), o = Kr(e), { hasRouterLink: n, hasLink: r, linkTag: i, linkAttrs: a, navigateOnClick: l } = Fn({ fallbackTag: "button" }), s = vue.computed(() => {
    let h = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, h, { padding: e.padding.split(/\s+/).map((w) => w in ga ? ga[w] + "px" : w).join(" "), minWidth: "0", minHeight: "0" }) : h;
  }), d = vue.computed(() => e.rounded === true || e.fab === true || e.fabMini === true), u = vue.computed(() => e.disable !== true && e.loading !== true), v = vue.computed(() => u.value === true ? e.tabindex || 0 : -1), f = vue.computed(() => Sl(e, "standard")), c = vue.computed(() => {
    let h = { tabindex: v.value };
    return r.value === true ? Object.assign(h, a.value) : $0.includes(e.type) === true && (h.type = e.type), i.value === "a" ? (e.disable === true ? h["aria-disabled"] = "true" : h.href === void 0 && (h.role = "button"), n.value !== true && B0.test(e.type) === true && (h.type = e.type)) : e.disable === true && (h.disabled = "", h["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(h, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), h;
  }), m = vue.computed(() => {
    let h;
    e.color !== void 0 ? e.flat === true || e.outline === true ? h = `text-${e.textColor || e.color}` : h = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (h = `text-${e.textColor}`);
    let w = e.round === true ? "round" : `rectangle${d.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${f.value} q-btn--${w}` + (h !== void 0 ? " " + h : "") + (u.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), y = vue.computed(() => o.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: m, style: s, innerClasses: y, attributes: c, hasLink: r, linkTag: i, navigateOnClick: l, isActionable: u };
}
var { passiveCapture: Co } = Ge, Zr = null, Jr = null, ei = null, Be = M({ name: "QBtn", props: { ...nf, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { classes: r, style: i, innerClasses: a, attributes: l, hasLink: s, linkTag: d, navigateOnClick: u, isActionable: v } = rf(e), f = vue.ref(null), c = vue.ref(null), m = null, y, h = null, w = vue.computed(() => e.label !== void 0 && e.label !== null && e.label !== ""), b = vue.computed(() => e.disable === true || e.ripple === false ? false : { keyCodes: s.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), p = vue.computed(() => ({ center: e.round })), g = vue.computed(() => {
    let C = Math.max(0, Math.min(100, e.percentage));
    return C > 0 ? { transition: "transform 0.6s", transform: `translateX(${C - 100}%)` } : {};
  }), x = vue.computed(() => {
    if (e.loading === true)
      return { onMousedown: S, onTouchstart: S, onClick: S, onKeydown: S, onKeyup: S };
    if (v.value === true) {
      let C = { onClick: A, onKeydown: L, onMousedown: R };
      if (n.$q.platform.has.touch === true) {
        let U = e.onTouchstart !== void 0 ? "" : "Passive";
        C[`onTouchstart${U}`] = $;
      }
      return C;
    }
    return { onClick: qe };
  }), P = vue.computed(() => ({ ref: f, class: "q-btn q-btn-item non-selectable no-outline " + r.value, style: i.value, ...l.value, ...x.value }));
  function A(C) {
    if (f.value !== null) {
      if (C !== void 0) {
        if (C.defaultPrevented === true)
          return;
        let U = document.activeElement;
        if (e.type === "submit" && U !== document.body && f.value.contains(U) === false && U.contains(f.value) === false) {
          f.value.focus();
          let j = () => {
            document.removeEventListener("keydown", qe, true), document.removeEventListener("keyup", j, Co), f.value !== null && f.value.removeEventListener("blur", j, Co);
          };
          document.addEventListener("keydown", qe, true), document.addEventListener("keyup", j, Co), f.value.addEventListener("blur", j, Co);
        }
      }
      u(C);
    }
  }
  function L(C) {
    f.value !== null && (o("keydown", C), Ht(C, [13, 32]) === true && Jr !== f.value && (Jr !== null && k(), C.defaultPrevented !== true && (f.value.focus(), Jr = f.value, f.value.classList.add("q-btn--active"), document.addEventListener("keyup", B, true), f.value.addEventListener("blur", B, Co)), qe(C)));
  }
  function $(C) {
    f.value !== null && (o("touchstart", C), C.defaultPrevented !== true && (Zr !== f.value && (Zr !== null && k(), Zr = f.value, m = C.target, m.addEventListener("touchcancel", B, Co), m.addEventListener("touchend", B, Co)), y = true, h !== null && clearTimeout(h), h = setTimeout(() => {
      h = null, y = false;
    }, 200)));
  }
  function R(C) {
    f.value !== null && (C.qSkipRipple = y === true, o("mousedown", C), C.defaultPrevented !== true && ei !== f.value && (ei !== null && k(), ei = f.value, f.value.classList.add("q-btn--active"), document.addEventListener("mouseup", B, Co)));
  }
  function B(C) {
    if (f.value !== null && !(C !== void 0 && C.type === "blur" && document.activeElement === f.value)) {
      if (C !== void 0 && C.type === "keyup") {
        if (Jr === f.value && Ht(C, [13, 32]) === true) {
          let U = new MouseEvent("click", C);
          U.qKeyEvent = true, C.defaultPrevented === true && pt(U), C.cancelBubble === true && nt(U), f.value.dispatchEvent(U), qe(C), C.qKeyEvent = true;
        }
        o("keyup", C);
      }
      k();
    }
  }
  function k(C) {
    let U = c.value;
    C !== true && (Zr === f.value || ei === f.value) && U !== null && U !== document.activeElement && (U.setAttribute("tabindex", -1), U.focus()), Zr === f.value && (m !== null && (m.removeEventListener("touchcancel", B, Co), m.removeEventListener("touchend", B, Co)), Zr = m = null), ei === f.value && (document.removeEventListener("mouseup", B, Co), ei = null), Jr === f.value && (document.removeEventListener("keyup", B, true), f.value !== null && f.value.removeEventListener("blur", B, Co), Jr = null), f.value !== null && f.value.classList.remove("q-btn--active");
  }
  function S(C) {
    qe(C), C.qSkipRipple = true;
  }
  return vue.onBeforeUnmount(() => {
    k(true);
  }), Object.assign(n, { click: (C) => {
    v.value === true && A(C);
  } }), () => {
    let C = [];
    e.icon !== void 0 && C.push(vue.h(_e, { name: e.icon, left: e.stack !== true && w.value === true, role: "img", "aria-hidden": "true" })), w.value === true && C.push(vue.h("span", { class: "block" }, [e.label])), C = Ue(t.default, C), e.iconRight !== void 0 && e.round === false && C.push(vue.h(_e, { name: e.iconRight, right: e.stack !== true && w.value === true, role: "img", "aria-hidden": "true" }));
    let U = [vue.h("span", { class: "q-focus-helper", ref: c })];
    return e.loading === true && e.percentage !== void 0 && U.push(vue.h("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [vue.h("span", { class: "q-btn__progress-indicator fit block", style: g.value })])), U.push(vue.h("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + a.value }, C)), e.loading !== null && U.push(vue.h(vue.Transition, { name: "q-transition--fade" }, () => e.loading === true ? [vue.h("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [vue.h(xt)])] : null)), vue.withDirectives(vue.h(d.value, P.value, U), [[Xo, b.value, void 0, p.value]]);
  };
} });
var ti = M({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  let o = vue.computed(() => {
    let n = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((r) => e[r] === true).map((r) => `q-btn-group--${r}`).join(" ");
    return `q-btn-group row no-wrap${n.length !== 0 ? " " + n : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => vue.h("div", { class: o.value }, J(t.default));
} });
function pa() {
  if (window.getSelection !== void 0) {
    let e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), pn.is.mobile !== true && e.addRange(document.createRange()));
  } else
    document.selection !== void 0 && document.selection.empty();
}
var Ls = { target: { default: true }, noParentEvent: Boolean }, Cl = { ...Ls, contextMenu: Boolean };
function oi({ showing: e, avoidEmit: t, configureAnchorEl: o }) {
  let { props: n, proxy: r, emit: i } = vue.getCurrentInstance(), a = vue.ref(null), l = null;
  function s(c) {
    return a.value === null ? false : c === void 0 || c.touches === void 0 || c.touches.length <= 1;
  }
  let d = {};
  o === void 0 && (Object.assign(d, { hide(c) {
    r.hide(c);
  }, toggle(c) {
    r.toggle(c), c.qAnchorHandled = true;
  }, toggleKey(c) {
    Ht(c, 13) === true && d.toggle(c);
  }, contextClick(c) {
    r.hide(c), pt(c), vue.nextTick(() => {
      r.show(c), c.qAnchorHandled = true;
    });
  }, prevent: pt, mobileTouch(c) {
    if (d.mobileCleanup(c), s(c) !== true)
      return;
    r.hide(c), a.value.classList.add("non-selectable");
    let m = c.target;
    Ir(d, "anchor", [[m, "touchmove", "mobileCleanup", "passive"], [m, "touchend", "mobileCleanup", "passive"], [m, "touchcancel", "mobileCleanup", "passive"], [a.value, "contextmenu", "prevent", "notPassive"]]), l = setTimeout(() => {
      l = null, r.show(c), c.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(c) {
    a.value.classList.remove("non-selectable"), l !== null && (clearTimeout(l), l = null), e.value === true && c !== void 0 && pa();
  } }), o = function(c = n.contextMenu) {
    if (n.noParentEvent === true || a.value === null)
      return;
    let m;
    c === true ? r.$q.platform.is.mobile === true ? m = [[a.value, "touchstart", "mobileTouch", "passive"]] : m = [[a.value, "mousedown", "hide", "passive"], [a.value, "contextmenu", "contextClick", "notPassive"]] : m = [[a.value, "click", "toggle", "passive"], [a.value, "keyup", "toggleKey", "passive"]], Ir(d, "anchor", m);
  });
  function u() {
    da(d, "anchor");
  }
  function v(c) {
    for (a.value = c; a.value.classList.contains("q-anchor--skip"); )
      a.value = a.value.parentNode;
    o();
  }
  function f() {
    if (n.target === false || n.target === "" || r.$el.parentNode === null)
      a.value = null;
    else if (n.target === true)
      v(r.$el.parentNode);
    else {
      let c = n.target;
      if (typeof n.target == "string")
        try {
          c = document.querySelector(n.target);
        } catch {
          c = void 0;
        }
      c != null ? (a.value = c.$el || c, o()) : (a.value = null, console.error(`Anchor: target "${n.target}" not found`));
    }
  }
  return vue.watch(() => n.contextMenu, (c) => {
    a.value !== null && (u(), o(c));
  }), vue.watch(() => n.target, () => {
    a.value !== null && u(), f();
  }), vue.watch(() => n.noParentEvent, (c) => {
    a.value !== null && (c === true ? u() : o());
  }), vue.onMounted(() => {
    f(), t !== true && n.modelValue === true && a.value === null && i("update:modelValue", false);
  }), vue.onBeforeUnmount(() => {
    l !== null && clearTimeout(l), u();
  }), { anchorEl: a, canShow: s, anchorEvents: d };
}
function kl(e, t) {
  let o = vue.ref(null), n;
  function r(l, s) {
    let d = `${s !== void 0 ? "add" : "remove"}EventListener`, u = s !== void 0 ? s : n;
    l !== window && l[d]("scroll", u, Ge.passive), window[d]("scroll", u, Ge.passive), n = s;
  }
  function i() {
    o.value !== null && (r(o.value), o.value = null);
  }
  let a = vue.watch(() => e.noParentEvent, () => {
    o.value !== null && (i(), t());
  });
  return vue.onBeforeUnmount(a), { localScrollTarget: o, unconfigureScrollTarget: i, changeScrollEvent: r };
}
var ko = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, qo = ["beforeShow", "show", "beforeHide", "hide"];
function To({ showing: e, canShow: t, hideOnRouteChange: o, handleShow: n, handleHide: r, processOnMount: i }) {
  let a = vue.getCurrentInstance(), { props: l, emit: s, proxy: d } = a, u;
  function v(b) {
    e.value === true ? void 0 : f(b);
  }
  function f(b) {
    if (l.disable === true || b !== void 0 && b.qAnchorHandled === true || t !== void 0 && t(b) !== true)
      return;
    l["onUpdate:modelValue"] !== void 0;
    l.modelValue, c(b);
  }
  function c(b) {
    e.value !== true && (e.value = true, s("beforeShow", b), n !== void 0 ? n(b) : s("show", b));
  }
  function m(b) {
  }
  function y(b) {
    e.value !== false && (e.value = false, s("beforeHide", b), r !== void 0 ? r(b) : s("hide", b));
  }
  function h(b) {
    l.disable === true && b === true ? l["onUpdate:modelValue"] !== void 0 && s("update:modelValue", false) : b === true !== e.value && (b === true ? c : y)(u);
  }
  vue.watch(() => l.modelValue, h), o !== void 0 && Yr(a) === true && vue.watch(() => d.$route.fullPath, () => {
    o.value === true && e.value === true && void 0;
  }), i === true && vue.onMounted(() => {
    h(l.modelValue);
  });
  let w = { show: f, hide: m, toggle: v };
  return Object.assign(d, w), w;
}
var mr = [], ha = [];
function Mo(e) {
  ha.length === 0 ? e() : mr.push(e);
}
function cf(e) {
  mr = mr.filter((t) => t !== e);
}
var vr = [];
function ff(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true)
        return hl(e);
    } else if (e.__qPortal === true) {
      let o = hl(e);
      return o !== void 0 && o.$options.name === "QPopupProxy" ? (e.hide(t), o) : e;
    }
    e = hl(e);
  } while (e != null);
}
M({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function ri(e, t, o, n) {
  let r = vue.ref(false), i = vue.ref(false);
  return { portalIsActive: r, portalIsAccessible: i, showPortal: je, hidePortal: je, renderPortal: je };
}
var Po = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function zn(e, t = () => {
}, o = () => {
}) {
  return { transitionProps: vue.computed(() => {
    let n = `q-transition--${e.transitionShow || t()}`, r = `q-transition--${e.transitionHide || o()}`;
    return { appear: true, enterFromClass: `${n}-enter-from`, enterActiveClass: `${n}-enter-active`, enterToClass: `${n}-enter-to`, leaveFromClass: `${r}-leave-from`, leaveActiveClass: `${r}-leave-active`, leaveToClass: `${r}-leave-to` };
  }), transitionStyle: vue.computed(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function Do() {
  let e, t = vue.getCurrentInstance();
  function o() {
    e = void 0;
  }
  return vue.onDeactivated(o), vue.onBeforeUnmount(o), { removeTick: o, registerTick(n) {
    e = n, vue.nextTick(() => {
      e === n && (Kt(t) === false && e(), e = void 0);
    });
  } };
}
function Jt() {
  let e = null, t = vue.getCurrentInstance();
  function o() {
    e !== null && (clearTimeout(e), e = null);
  }
  return vue.onDeactivated(o), vue.onBeforeUnmount(o), { removeTimeout: o, registerTimeout(n, r) {
    o(), Kt(t) === false && (e = setTimeout(() => {
      e = null, n();
    }, r));
  } };
}
var ao = {}, cb = [];
function Nt(e, t) {
  let o = of(t);
  if (o === void 0) {
    if (e == null)
      return window;
    o = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return cb.includes(o) ? window : o;
}
function ii(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function Ro(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function ai(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Os(e, t, o = 0) {
  let n = arguments[3] === void 0 ? performance.now() : arguments[3], r = Ro(e);
  if (o <= 0) {
    r !== t && Vs(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    let a = i - n, l = r + (t - r) / Math.max(a, o) * a;
    Vs(e, l), l !== t && Os(e, t, o - a, i);
  });
}
function Is(e, t, o = 0) {
  let n = arguments[3] === void 0 ? performance.now() : arguments[3], r = ai(e);
  if (o <= 0) {
    r !== t && zs(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    let a = i - n, l = r + (t - r) / Math.max(a, o) * a;
    zs(e, l), l !== t && Is(e, t, o - a, i);
  });
}
function Vs(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function zs(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function Go(e, t, o) {
  if (o) {
    Os(e, t, o);
    return;
  }
  Vs(e, t);
}
function ba(e, t, o) {
  if (o) {
    Is(e, t, o);
    return;
  }
  zs(e, t);
}
var ql;
function li() {
  if (ql !== void 0)
    return ql;
  let e = document.createElement("p"), t = document.createElement("div");
  Xr(e, { width: "100%", height: "200px" }), Xr(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  let o = e.offsetWidth;
  t.style.overflow = "scroll";
  let n = e.offsetWidth;
  return o === n && (n = t.clientWidth), t.remove(), ql = o - n, ql;
}
function Hs(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var gr = [], ui;
function mb(e) {
  ui = e.keyCode === 27;
}
function vb() {
  ui === true && (ui = false);
}
function gb(e) {
  ui === true && (ui = false, Ht(e, 27) === true && gr[gr.length - 1](e));
}
function pf(e) {
  window[e]("keydown", mb), window[e]("blur", vb), window[e]("keyup", gb), ui = false;
}
function Tl(e) {
  rt.is.desktop === true && (gr.push(e), gr.length === 1 && pf("addEventListener"));
}
function si(e) {
  let t = gr.indexOf(e);
  t !== -1 && (gr.splice(t, 1), gr.length === 0 && pf("removeEventListener"));
}
var pr = [];
function hf(e) {
  pr[pr.length - 1](e);
}
function ci(e) {
  rt.is.desktop === true && (pr.push(e), pr.length === 1 && document.body.addEventListener("focusin", hf));
}
function hr(e) {
  let t = pr.indexOf(e);
  t !== -1 && (pr.splice(t, 1), pr.length === 0 && document.body.removeEventListener("focusin", hf));
}
var { notPassiveCapture: Ml } = Ge, br = [];
function Pl(e) {
  let t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true)
    return;
  let o = vr.length - 1;
  for (; o >= 0; ) {
    let n = vr[o].$;
    if (n.type.name === "QTooltip") {
      o--;
      continue;
    }
    if (n.type.name !== "QDialog")
      break;
    if (n.props.seamless !== true)
      return;
    o--;
  }
  for (let n = br.length - 1; n >= 0; n--) {
    let r = br[n];
    if ((r.anchorEl.value === null || r.anchorEl.value.contains(t) === false) && (t === document.body || r.innerRef.value !== null && r.innerRef.value.contains(t) === false))
      e.qClickOutside = true, r.onClickOutside(e);
    else
      return;
  }
}
function Rl(e) {
  br.push(e), br.length === 1 && (document.addEventListener("mousedown", Pl, Ml), document.addEventListener("touchstart", Pl, Ml));
}
function fi(e) {
  let t = br.findIndex((o) => o === e);
  t !== -1 && (br.splice(t, 1), br.length === 0 && (document.removeEventListener("mousedown", Pl, Ml), document.removeEventListener("touchstart", Pl, Ml)));
}
var bf, yf;
function mi(e) {
  let t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function El(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Qs = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Qs[`${e}#ltr`] = e, Qs[`${e}#rtl`] = e;
});
function vi(e, t) {
  let o = e.split(" ");
  return { vertical: o[0], horizontal: Qs[`${o[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function pb(e, t) {
  let { top: o, left: n, right: r, bottom: i, width: a, height: l } = e.getBoundingClientRect();
  return t !== void 0 && (o -= t[1], n -= t[0], i += t[1], r += t[0], a += t[0], l += t[1]), { top: o, bottom: i, height: l, left: n, right: r, width: a, middle: n + (r - n) / 2, center: o + (i - o) / 2 };
}
function hb(e, t, o) {
  let { top: n, left: r } = e.getBoundingClientRect();
  return n += t.top, r += t.left, o !== void 0 && (n += o[1], r += o[0]), { top: n, bottom: n + 1, height: 1, left: r, right: r + 1, width: 1, middle: r, center: n };
}
function bb(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function xf(e, t, o, n) {
  return { top: e[o.vertical] - t[n.vertical], left: e[o.horizontal] - t[n.horizontal] };
}
function ya(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5)
    return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      ya(e, t + 1);
    }, 10);
    return;
  }
  let { targetEl: o, offset: n, anchorEl: r, anchorOrigin: i, selfOrigin: a, absoluteOffset: l, fit: s, cover: d, maxHeight: u, maxWidth: v } = e;
  if (rt.is.ios === true && window.visualViewport !== void 0) {
    let P = document.body.style, { offsetLeft: A, offsetTop: L } = window.visualViewport;
    A !== bf && (P.setProperty("--q-pe-left", A + "px"), bf = A), L !== yf && (P.setProperty("--q-pe-top", L + "px"), yf = L);
  }
  let { scrollLeft: f, scrollTop: c } = o, m = l === void 0 ? pb(r, d === true ? [0, 0] : n) : hb(r, l, n);
  Object.assign(o.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: v || "100vw", maxHeight: u || "100vh", visibility: "visible" });
  let { offsetWidth: y, offsetHeight: h } = o, { elWidth: w, elHeight: b } = s === true || d === true ? { elWidth: Math.max(m.width, y), elHeight: d === true ? Math.max(m.height, h) : h } : { elWidth: y, elHeight: h }, p = { maxWidth: v, maxHeight: u };
  (s === true || d === true) && (p.minWidth = m.width + "px", d === true && (p.minHeight = m.height + "px")), Object.assign(o.style, p);
  let g = bb(w, b), x = xf(m, g, i, a);
  if (l === void 0 || n === void 0)
    Ns(x, m, g, i, a);
  else {
    let { top: P, left: A } = x;
    Ns(x, m, g, i, a);
    let L = false;
    if (x.top !== P) {
      L = true;
      let $ = 2 * n[1];
      m.center = m.top -= $, m.bottom -= $ + 2;
    }
    if (x.left !== A) {
      L = true;
      let $ = 2 * n[0];
      m.middle = m.left -= $, m.right -= $ + 2;
    }
    L === true && (x = xf(m, g, i, a), Ns(x, m, g, i, a));
  }
  p = { top: x.top + "px", left: x.left + "px" }, x.maxHeight !== void 0 && (p.maxHeight = x.maxHeight + "px", m.height > x.maxHeight && (p.minHeight = p.maxHeight)), x.maxWidth !== void 0 && (p.maxWidth = x.maxWidth + "px", m.width > x.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(o.style, p), o.scrollTop !== c && (o.scrollTop = c), o.scrollLeft !== f && (o.scrollLeft = f);
}
function Ns(e, t, o, n, r) {
  let i = o.bottom, a = o.right, l = li(), s = window.innerHeight - l, d = document.body.clientWidth;
  if (e.top < 0 || e.top + i > s)
    if (r.vertical === "center")
      e.top = t[n.vertical] > s / 2 ? Math.max(0, s - i) : 0, e.maxHeight = Math.min(i, s);
    else if (t[n.vertical] > s / 2) {
      let u = Math.min(s, n.vertical === "center" ? t.center : n.vertical === r.vertical ? t.bottom : t.top);
      e.maxHeight = Math.min(i, u), e.top = Math.max(0, u - i);
    } else
      e.top = Math.max(0, n.vertical === "center" ? t.center : n.vertical === r.vertical ? t.top : t.bottom), e.maxHeight = Math.min(i, s - e.top);
  if (e.left < 0 || e.left + a > d)
    if (e.maxWidth = Math.min(a, d), r.horizontal === "middle")
      e.left = t[n.horizontal] > d / 2 ? Math.max(0, d - a) : 0;
    else if (t[n.horizontal] > d / 2) {
      let u = Math.min(d, n.horizontal === "middle" ? t.middle : n.horizontal === r.horizontal ? t.right : t.left);
      e.maxWidth = Math.min(a, u), e.left = Math.max(0, u - e.maxWidth);
    } else
      e.left = Math.max(0, n.horizontal === "middle" ? t.middle : n.horizontal === r.horizontal ? t.left : t.right), e.maxWidth = Math.min(a, d - e.left);
}
var Zo = M({ name: "QMenu", inheritAttrs: false, props: { ...Cl, ...ko, ...pe, ...Po, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: mi }, self: { type: String, validator: mi }, offset: { type: Array, validator: El }, scrollTarget: ao, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...qo, "click", "escapeKey"], setup(e, { slots: t, emit: o, attrs: n }) {
  let r = null, i, a, l, s = vue.getCurrentInstance(), { proxy: d } = s, { $q: u } = d, v = vue.ref(null), f = vue.ref(false), c = vue.computed(() => e.persistent !== true && e.noRouteDismiss !== true), m = he(e, u), { registerTick: y, removeTick: h } = Do(), { registerTimeout: w } = Jt();
  zn(e);
  let { localScrollTarget: g, changeScrollEvent: x, unconfigureScrollTarget: P } = kl(e, N), { anchorEl: A, canShow: L } = oi({ showing: f }), { hide: $ } = To({ showing: f, canShow: L, handleShow: ie, handleHide: z, hideOnRouteChange: c, processOnMount: true }), { showPortal: R, hidePortal: B, renderPortal: k } = ri(), S = { anchorEl: A, innerRef: v, onClickOutside(O) {
    if (e.persistent !== true && f.value === true)
      return $(O), (O.type === "touchstart" || O.target.classList.contains("q-dialog__backdrop")) && qe(O), true;
  } }, C = vue.computed(() => vi(e.anchor || (e.cover === true ? "center middle" : "bottom start"), u.lang.rtl)), U = vue.computed(() => e.cover === true ? C.value : vi(e.self || "top start", u.lang.rtl));
  vue.computed(() => (e.square === true ? " q-menu--square" : "") + (m.value === true ? " q-menu--dark q-dark" : ""));
  vue.computed(() => e.autoClose === true ? { onClick: H } : {});
  let D = vue.computed(() => f.value === true && e.persistent !== true);
  vue.watch(D, (O) => {
    O === true ? (Tl(q), Rl(S)) : (si(q), fi(S));
  });
  function Q() {
    Mo(() => {
      let O = v.value;
      O && O.contains(document.activeElement) !== true && (O = O.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || O.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || O.querySelector("[autofocus], [data-autofocus]") || O, O.focus({ preventScroll: true }));
    });
  }
  function ie(O) {
    if (r = e.noRefocus === false ? document.activeElement : null, ci(oe), R(), N(), i = void 0, O !== void 0 && (e.touchPosition || e.contextMenu)) {
      let ue = So(O);
      if (ue.left !== void 0) {
        let { top: Se, left: K } = A.value.getBoundingClientRect();
        i = { left: ue.left - K, top: ue.top - Se };
      }
    }
    a === void 0 && (a = vue.watch(() => u.screen.width + "|" + u.screen.height + "|" + e.self + "|" + e.anchor + "|" + u.lang.rtl, V)), e.noFocus !== true && document.activeElement.blur(), y(() => {
      V(), e.noFocus !== true && Q();
    }), w(() => {
      u.platform.is.ios === true && (l = e.autoClose, v.value.click()), V(), R(true), o("show", O);
    }, e.transitionDuration);
  }
  function z(O) {
    h(), B(), _(true), r !== null && (O === void 0 || O.qClickOutside !== true) && (((O && O.type.indexOf("key") === 0 ? r.closest('[tabindex]:not([tabindex^="-"])') : void 0) || r).focus(), r = null), w(() => {
      B(true), o("hide", O);
    }, e.transitionDuration);
  }
  function _(O) {
    i = void 0, a !== void 0 && (a(), a = void 0), (O === true || f.value === true) && (hr(oe), P(), fi(S), si(q)), O !== true && (r = null);
  }
  function N() {
    (A.value !== null || e.scrollTarget !== void 0) && (g.value = Nt(A.value, e.scrollTarget), x(g.value, V));
  }
  function H(O) {
    l !== true ? (ff(d, O), o("click", O)) : l = false;
  }
  function oe(O) {
    D.value === true && e.noFocus !== true && xl(v.value, O.target) !== true && Q();
  }
  function q(O) {
    o("escapeKey"), $(O);
  }
  function V() {
    ya({ targetEl: v.value, offset: e.offset, anchorEl: A.value, anchorOrigin: C.value, selfOrigin: U.value, absoluteOffset: i, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  return vue.onBeforeUnmount(_), Object.assign(d, { focus: Q, updatePosition: V }), k;
} });
var js, Al = 0, Qt = new Array(256);
for (let e = 0; e < 256; e++)
  Qt[e] = (e + 256).toString(16).substring(1);
var _b = (() => {
  let e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        let o = new Uint8Array(t);
        return e.getRandomValues(o), o;
      };
  }
  return (t) => {
    let o = [];
    for (let n = t; n > 0; n--)
      o.push(Math.floor(Math.random() * 256));
    return o;
  };
})(), Cf = 4096;
function yn() {
  (js === void 0 || Al + 16 > Cf) && (Al = 0, js = _b(Cf));
  let e = Array.prototype.slice.call(js, Al, Al += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Qt[e[0]] + Qt[e[1]] + Qt[e[2]] + Qt[e[3]] + "-" + Qt[e[4]] + Qt[e[5]] + "-" + Qt[e[6]] + Qt[e[7]] + "-" + Qt[e[8]] + Qt[e[9]] + "-" + Qt[e[10]] + Qt[e[11]] + Qt[e[12]] + Qt[e[13]] + Qt[e[14]] + Qt[e[15]];
}
function qb(e) {
  return e ?? null;
}
function kf(e, t) {
  return e ?? (t === true ? `f_${yn()}` : null);
}
function xn({ getValue: e, required: t = true } = {}) {
  {
    let o = e !== void 0 ? vue.ref(qb(e())) : vue.ref(null);
    return t === true && o.value === null && vue.onMounted(() => {
      o.value = `f_${yn()}`;
    }), e !== void 0 && vue.watch(e, (n) => {
      o.value = kf(n, t);
    }), o;
  }
}
var Pb = Object.keys(wl);
function Rb(e) {
  return Pb.reduce((t, o) => {
    let n = e[o];
    return n !== void 0 && (t[o] = n), t;
  }, {});
}
var Bl = M({ name: "QBtnDropdown", props: { ...wl, ...Po, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), r = vue.ref(e.modelValue), i = vue.ref(null), a = xn(), l = vue.computed(() => {
    let g = { "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, "aria-label": e.toggleAriaLabel || n.$q.lang.label[r.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (g["aria-disabled"] = "true"), g;
  }), s = vue.computed(() => "q-btn-dropdown__arrow" + (r.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), d = vue.computed(() => _l(e)), u = vue.computed(() => Rb(e));
  vue.watch(() => e.modelValue, (g) => {
    i.value !== null && i.value[g ? "show" : "hide"]();
  }), vue.watch(() => e.split, p);
  function v(g) {
    r.value = true, o("beforeShow", g);
  }
  function f(g) {
    o("show", g), o("update:modelValue", true);
  }
  function c(g) {
    r.value = false, o("beforeHide", g);
  }
  function m(g) {
    o("hide", g), o("update:modelValue", false);
  }
  function y(g) {
    o("click", g);
  }
  function h(g) {
    nt(g), p(), o("click", g);
  }
  function w(g) {
    i.value !== null && i.value.toggle(g);
  }
  function b(g) {
    i.value !== null && i.value.show(g);
  }
  function p(g) {
    i.value !== null && i.value.hide(g);
  }
  return Object.assign(n, { show: b, hide: p, toggle: w }), vue.onMounted(() => {
    e.modelValue === true && b();
  }), () => {
    let g = [vue.h(_e, { class: s.value, name: e.dropdownIcon || n.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && g.push(vue.h(Zo, { ref: i, id: a.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: v, onShow: f, onBeforeHide: c, onHide: m }, t.default)), e.split === false ? vue.h(Be, { class: "q-btn-dropdown q-btn-dropdown--simple", ...u.value, ...l.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: y }, { default: () => J(t.label, []).concat(g), loading: t.loading }) : vue.h(ti, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...d.value, glossy: e.glossy, stretch: e.stretch }, () => [vue.h(Be, { class: "q-btn-dropdown--current", ...u.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: h }, { default: t.label, loading: t.loading }), vue.h(Be, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...l.value, ...d.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => g)]);
  };
} });
var bt = { name: String };
function Jo(e) {
  return vue.computed(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Wt(e = {}) {
  return (t, o, n) => {
    t[o](vue.h("input", { class: "hidden" + (n || ""), ...e.value }));
  };
}
function hi(e) {
  return vue.computed(() => e.name || e.for);
}
var Rf = M({ name: "QBtnToggle", props: { ...bt, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: o }) {
  let n = vue.computed(() => e.options.find((f) => f.value === e.modelValue) !== void 0), r = vue.computed(() => ({ type: "hidden", name: e.name, value: e.modelValue })), i = Wt(r), a = vue.computed(() => _l(e)), l = vue.computed(() => ({ rounded: e.rounded, dense: e.dense, ...a.value })), s = vue.computed(() => e.options.map((f, c) => {
    let { attrs: m, value: y, slot: h, ...w } = f;
    return { slot: h, props: { key: c, "aria-pressed": y === e.modelValue ? "true" : "false", ...m, ...w, ...l.value, disable: e.disable === true || w.disable === true, color: y === e.modelValue ? u(w, "toggleColor") : u(w, "color"), textColor: y === e.modelValue ? u(w, "toggleTextColor") : u(w, "textColor"), noCaps: u(w, "noCaps") === true, noWrap: u(w, "noWrap") === true, size: u(w, "size"), padding: u(w, "padding"), ripple: u(w, "ripple"), stack: u(w, "stack") === true, stretch: u(w, "stretch") === true, onClick(b) {
      d(y, f, b);
    } } };
  }));
  function d(f, c, m) {
    e.readonly !== true && (e.modelValue === f ? e.clearable === true && (o("update:modelValue", null, null), o("clear")) : o("update:modelValue", f, c), o("click", m));
  }
  function u(f, c) {
    return f[c] === void 0 ? e[c] : f[c];
  }
  function v() {
    let f = s.value.map((c) => vue.h(Be, c.props, c.slot !== void 0 ? t[c.slot] : void 0));
    return e.name !== void 0 && e.disable !== true && n.value === true && i(f, "push"), Ue(t.default, f);
  }
  return () => vue.h(ti, { class: "q-btn-toggle", ...a.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, v);
} });
var bi = M({ name: "QCard", props: { ...pe, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = he(e, o), r = vue.computed(() => "q-card" + (n.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => vue.h(e.tag, { class: r.value }, J(t.default));
} });
var Vo = M({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  let o = vue.computed(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => vue.h(e.tag, { class: o.value }, J(t.default));
} });
var Ll = M({ name: "QCardActions", props: { ...Ur, vertical: Boolean }, setup(e, { slots: t }) {
  let o = Kr(e), n = vue.computed(() => `q-card__actions ${o.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => vue.h("div", { class: n.value }, J(t.default));
} });
var Ef = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true };
Ef.all = true;
var Fl = wt({ name: "touch-swipe", getSSRProps: Mt });
function zo() {
  let e = /* @__PURE__ */ Object.create(null);
  return { getCache: (t, o) => typeof o == "function" ? o() : o, setCache(t, o) {
    e[t] = o;
  }, hasCache(t) {
    return Object.hasOwnProperty.call(e, t);
  }, clearCache(t) {
    t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
  } };
}
var yi = { name: { required: true }, disable: Boolean }, $f = { setup(e, { slots: t }) {
  return () => vue.h("div", { class: "q-panel scroll", role: "tabpanel" }, J(t.default));
} }, xi = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Si = ["update:modelValue", "beforeTransition", "transition"];
function _i() {
  let { props: e, emit: t, proxy: o } = vue.getCurrentInstance(), { getCache: n } = zo(), r, i, a = vue.ref(null), l = vue.ref(null);
  function s(S) {
    let C = e.vertical === true ? "up" : "left";
    A((o.$q.lang.rtl === true ? -1 : 1) * (S.direction === C ? 1 : -1));
  }
  let d = vue.computed(() => [[Fl, s, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), u = vue.computed(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), v = vue.computed(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), f = vue.computed(() => `--q-transition-duration: ${e.transitionDuration}ms`), c = vue.computed(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), m = vue.computed(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), y = vue.computed(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  vue.watch(() => e.modelValue, (S, C) => {
    let U = p(S) === true ? g(S) : -1;
    i !== true && P(U === -1 ? 0 : U < g(C) ? -1 : 1), a.value !== U && (a.value = U, t("beforeTransition", S, C), vue.nextTick(() => {
      t("transition", S, C);
    }));
  });
  function h() {
    A(1);
  }
  function w() {
    A(-1);
  }
  function b(S) {
    t("update:modelValue", S);
  }
  function p(S) {
    return S != null && S !== "";
  }
  function g(S) {
    return r.findIndex((C) => C.props.name === S && C.props.disable !== "" && C.props.disable !== true);
  }
  function x() {
    return r.filter((S) => S.props.disable !== "" && S.props.disable !== true);
  }
  function P(S) {
    let C = S !== 0 && e.animated === true && a.value !== -1 ? "q-transition--" + (S === -1 ? u.value : v.value) : null;
    l.value !== C && (l.value = C);
  }
  function A(S, C = a.value) {
    let U = C + S;
    for (; U !== -1 && U < r.length; ) {
      let j = r[U];
      if (j !== void 0 && j.props.disable !== "" && j.props.disable !== true) {
        P(S), i = true, t("update:modelValue", j.props.name), setTimeout(() => {
          i = false;
        });
        return;
      }
      U += S;
    }
    e.infinite === true && r.length !== 0 && C !== -1 && C !== r.length && A(S, S === -1 ? r.length : -1);
  }
  function L() {
    let S = g(e.modelValue);
    return a.value !== S && (a.value = S), true;
  }
  function $() {
    let S = p(e.modelValue) === true && L() && r[a.value];
    return e.keepAlive === true ? [vue.h(vue.KeepAlive, m.value, [vue.h(y.value === true ? n(c.value, () => ({ ...$f, name: c.value })) : $f, { key: c.value, style: f.value }, () => S)])] : [vue.h("div", { class: "q-panel scroll", style: f.value, key: c.value, role: "tabpanel" }, [S])];
  }
  function R() {
    if (r.length !== 0)
      return e.animated === true ? [vue.h(vue.Transition, { name: l.value }, $)] : $();
  }
  function B(S) {
    return r = Wr(J(S.default, [])).filter((C) => C.props !== null && C.props.slot === void 0 && p(C.props.name) === true), r.length;
  }
  function k() {
    return r;
  }
  return Object.assign(o, { next: h, previous: w, goTo: b }), { panelIndex: a, panelDirectives: d, updatePanelsList: B, updatePanelIndex: L, getPanelContent: R, getEnabledPanels: x, getPanels: k, isValidPanelName: p, keepAliveProps: m, needsUniqueKeepAliveWrapper: y, goToPanelByOffset: A, goToPanel: b, nextPanel: h, previousPanel: w };
}
var _a = 0, wi = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Ci = ["update:fullscreen", "fullscreen"];
function ki() {
  let e = vue.getCurrentInstance(), { props: t, emit: o, proxy: n } = e, r, i, a, l = vue.ref(false);
  Yr(e) === true && vue.watch(() => n.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && u();
  }), vue.watch(() => t.fullscreen, (v) => {
    l.value !== v && s();
  }), vue.watch(l, (v) => {
    o("update:fullscreen", v), o("fullscreen", v);
  });
  function s() {
    l.value === true ? u() : d();
  }
  function d() {
    l.value !== true && (l.value = true, a = n.$el.parentNode, a.replaceChild(i, n.$el), document.body.appendChild(n.$el), _a++, _a === 1 && document.body.classList.add("q-body--fullscreen-mixin"), r = { handler: u }, $n.add(r));
  }
  function u() {
    l.value === true && (r !== void 0 && ($n.remove(r), r = void 0), a.replaceChild(n.$el, i), l.value = false, _a = Math.max(0, _a - 1), _a === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), n.$el.scrollIntoView !== void 0 && setTimeout(() => {
      n.$el.scrollIntoView();
    })));
  }
  return vue.onBeforeMount(() => {
    i = document.createElement("span");
  }), vue.onMounted(() => {
    t.fullscreen === true && d();
  }), vue.onBeforeUnmount(u), Object.assign(n, { toggleFullscreen: s, setFullscreen: d, exitFullscreen: u }), { inFullscreen: l, toggleFullscreen: s };
}
var Zb = ["top", "right", "bottom", "left"], Jb = ["regular", "flat", "outline", "push", "unelevated"], Lf = M({ name: "QCarousel", props: { ...pe, ...xi, ...wi, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => Jb.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => Zb.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ci, ...Si], setup(e, { slots: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = he(e, o), r = null, i, { updatePanelsList: a, getPanelContent: l, panelDirectives: s, goToPanel: d, previousPanel: u, nextPanel: v, getEnabledPanels: f, panelIndex: c } = _i(), { inFullscreen: m } = ki(), y = vue.computed(() => m.value !== true && e.height !== void 0 ? { height: e.height } : {}), h = vue.computed(() => e.vertical === true ? "vertical" : "horizontal"), w = vue.computed(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), b = vue.computed(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (m.value === true ? " fullscreen" : "") + (n.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${h.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${w.value}` : "")), p = vue.computed(() => {
    let R = [e.prevIcon || o.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || o.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && o.lang.rtl === true ? R.reverse() : R;
  }), g = vue.computed(() => e.navigationIcon || o.iconSet.carousel.navigationIcon), x = vue.computed(() => e.navigationActiveIcon || g.value), P = vue.computed(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  vue.watch(() => e.modelValue, () => {
    e.autoplay && A();
  }), vue.watch(() => e.autoplay, (R) => {
    R ? A() : r !== null && (clearTimeout(r), r = null);
  });
  function A() {
    let R = _o(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    r !== null && clearTimeout(r), r = setTimeout(() => {
      r = null, R >= 0 ? v() : u();
    }, R);
  }
  vue.onMounted(() => {
    e.autoplay && A();
  }), vue.onBeforeUnmount(() => {
    r !== null && clearTimeout(r);
  });
  function L(R, B) {
    return vue.h("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${R} q-carousel__navigation--${w.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [vue.h("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, f().map(B))]);
  }
  function $() {
    let R = [];
    if (e.navigation === true) {
      let B = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (S) => vue.h(Be, { key: "nav" + S.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${S.active === true ? "" : "in"}active`, ...S.btnProps, onClick: S.onClick }), k = i - 1;
      R.push(L("buttons", (S, C) => {
        let U = S.props.name, j = c.value === C;
        return B({ index: C, maxIndex: k, name: U, active: j, btnProps: { icon: j === true ? x.value : g.value, size: "sm", ...P.value }, onClick: () => {
          d(U);
        } });
      }));
    } else if (e.thumbnails === true) {
      let B = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      R.push(L("thumbnails", (k) => {
        let S = k.props;
        return vue.h("img", { key: "tmb#" + S.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${S.name === e.modelValue ? "" : "in"}active` + B, src: S.imgSrc || S["img-src"], onClick: () => {
          d(S.name);
        } });
      }));
    }
    return e.arrows === true && c.value >= 0 && ((e.infinite === true || c.value > 0) && R.push(vue.h("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${h.value} absolute flex flex-center` }, [vue.h(Be, { icon: p.value[0], ...P.value, onClick: u })])), (e.infinite === true || c.value < i - 1) && R.push(vue.h("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${h.value} absolute flex flex-center` }, [vue.h(Be, { icon: p.value[1], ...P.value, onClick: v })]))), Ue(t.control, R);
  }
  return () => (i = a(t), vue.h("div", { class: b.value, style: y.value }, [yt("div", { class: "q-carousel__slides-container" }, l(), "sl-cont", e.swipeable, () => s.value)].concat($())));
} });
var Ff = M({ name: "QCarouselSlide", props: { ...yi, imgSrc: String }, setup(e, { slots: t }) {
  let o = vue.computed(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => vue.h("div", { class: "q-carousel__slide", style: o.value }, J(t.default));
} });
var Vf = M({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  let o = vue.computed(() => `q-carousel__control absolute absolute-${e.position}`), n = vue.computed(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => vue.h("div", { class: o.value, style: n.value }, J(t.default));
} });
var zf = M({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  let o = vue.computed(() => e.sent === true ? "sent" : "received"), n = vue.computed(() => `q-message-text-content q-message-text-content--${o.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), r = vue.computed(() => `q-message-text q-message-text--${o.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), i = vue.computed(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), a = vue.computed(() => e.size !== void 0 ? `col-${e.size}` : ""), l = vue.computed(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function s(u) {
    return t.stamp !== void 0 ? [u, vue.h("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [u, vue.h("div", { class: "q-message-stamp", [l.value.stamp]: e.stamp })] : [u];
  }
  function d(u, v) {
    let f = v === true ? u.length > 1 ? (c) => c : (c) => vue.h("div", [c]) : (c) => vue.h("div", { [l.value.msg]: c });
    return u.map((c, m) => vue.h("div", { key: m, class: r.value }, [vue.h("div", { class: n.value }, s(f(c)))]));
  }
  return () => {
    let u = [];
    t.avatar !== void 0 ? u.push(t.avatar()) : e.avatar !== void 0 && u.push(vue.h("img", { class: `q-message-avatar q-message-avatar--${o.value}`, src: e.avatar, "aria-hidden": "true" }));
    let v = [];
    t.name !== void 0 ? v.push(vue.h("div", { class: `q-message-name q-message-name--${o.value}` }, t.name())) : e.name !== void 0 && v.push(vue.h("div", { class: `q-message-name q-message-name--${o.value}`, [l.value.name]: e.name })), t.default !== void 0 ? v.push(d(Wr(t.default()), true)) : e.text !== void 0 && v.push(d(e.text)), u.push(vue.h("div", { class: a.value }, v));
    let f = [];
    return t.label !== void 0 ? f.push(vue.h("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && f.push(vue.h("div", { class: "q-message-label", [l.value.label]: e.label })), f.push(vue.h("div", { class: i.value }, u)), vue.h("div", { class: `q-message q-message-${o.value}` }, f);
  };
} });
function Dl(e, t) {
  let o = vue.ref(null), n = vue.computed(() => e.disable === true ? null : vue.h("span", { ref: o, class: "no-outline", tabindex: -1 }));
  function r(i) {
    let a = t.value;
    i !== void 0 && i.type.indexOf("key") === 0 ? a !== null && document.activeElement !== a && a.contains(document.activeElement) === true && a.focus() : o.value !== null && (i === void 0 || a !== null && a.contains(i.target) === true) && o.value.focus();
  }
  return { refocusTargetEl: n, refocusTarget: r };
}
var Vl = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 };
var zl = { ...pe, ...Lt, ...bt, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Ol = ["update:modelValue"];
function Il(e, t) {
  let { props: o, slots: n, emit: r, proxy: i } = vue.getCurrentInstance(), { $q: a } = i, l = he(o, a), s = vue.ref(null), { refocusTargetEl: d, refocusTarget: u } = Dl(o, s), v = Ft(o, Vl), f = vue.computed(() => o.val !== void 0 && Array.isArray(o.modelValue)), c = vue.computed(() => {
    let k = vue.toRaw(o.val);
    return f.value === true ? o.modelValue.findIndex((S) => vue.toRaw(S) === k) : -1;
  }), m = vue.computed(() => f.value === true ? c.value !== -1 : vue.toRaw(o.modelValue) === vue.toRaw(o.trueValue)), y = vue.computed(() => f.value === true ? c.value === -1 : vue.toRaw(o.modelValue) === vue.toRaw(o.falseValue)), h = vue.computed(() => m.value === false && y.value === false), w = vue.computed(() => o.disable === true ? -1 : o.tabindex || 0), b = vue.computed(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (o.disable === true ? " disabled" : "") + (l.value === true ? ` q-${e}--dark` : "") + (o.dense === true ? ` q-${e}--dense` : "") + (o.leftLabel === true ? " reverse" : "")), p = vue.computed(() => {
    let k = m.value === true ? "truthy" : y.value === true ? "falsy" : "indet", S = o.color !== void 0 && (o.keepColor === true || (e === "toggle" ? m.value === true : y.value !== true)) ? ` text-${o.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${S}`;
  }), g = vue.computed(() => {
    let k = { type: "checkbox" };
    return o.name !== void 0 && Object.assign(k, { ".checked": m.value, "^checked": m.value === true ? "checked" : void 0, name: o.name, value: f.value === true ? o.val : o.trueValue }), k;
  }), x = Wt(g), P = vue.computed(() => {
    let k = { tabindex: w.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": o.label, "aria-checked": h.value === true ? "mixed" : m.value === true ? "true" : "false" };
    return o.disable === true && (k["aria-disabled"] = "true"), k;
  });
  function A(k) {
    k !== void 0 && (qe(k), u(k)), o.disable !== true && r("update:modelValue", L(), k);
  }
  function L() {
    if (f.value === true) {
      if (m.value === true) {
        let k = o.modelValue.slice();
        return k.splice(c.value, 1), k;
      }
      return o.modelValue.concat([o.val]);
    }
    if (m.value === true) {
      if (o.toggleOrder !== "ft" || o.toggleIndeterminate === false)
        return o.falseValue;
    } else if (y.value === true) {
      if (o.toggleOrder === "ft" || o.toggleIndeterminate === false)
        return o.trueValue;
    } else
      return o.toggleOrder !== "ft" ? o.trueValue : o.falseValue;
    return o.indeterminateValue;
  }
  function $(k) {
    (k.keyCode === 13 || k.keyCode === 32) && qe(k);
  }
  function R(k) {
    (k.keyCode === 13 || k.keyCode === 32) && A(k);
  }
  let B = t(m, h);
  return Object.assign(i, { toggle: A }), () => {
    let k = B();
    o.disable !== true && x(k, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    let S = [vue.h("div", { class: p.value, style: v.value, "aria-hidden": "true" }, k)];
    d.value !== null && S.push(d.value);
    let C = o.label !== void 0 ? Ue(n.default, [o.label]) : J(n.default);
    return C !== void 0 && S.push(vue.h("div", { class: `q-${e}__label q-anchor--skip` }, C)), vue.h("div", { ref: s, class: b.value, ...P.value, onClick: A, onKeydown: $, onKeyup: R }, S);
  };
}
var sy = vue.h("div", { key: "svg", class: "q-checkbox__bg absolute" }, [vue.h("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [vue.h("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), vue.h("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), tn = M({ name: "QCheckbox", props: zl, emits: Ol, setup(e) {
  function t(o, n) {
    let r = vue.computed(() => (o.value === true ? e.checkedIcon : n.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => r.value !== null ? [vue.h("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [vue.h(_e, { class: "q-checkbox__icon", name: r.value })])] : [sy];
  }
  return Il("checkbox", t);
} });
var dy = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Ei = M({ name: "QChip", props: { ...pe, ...Lt, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = he(e, n), i = Ft(e, dy), a = vue.computed(() => e.selected === true || e.icon !== void 0), l = vue.computed(() => e.selected === true ? e.iconSelected || n.iconSet.chip.selected : e.icon), s = vue.computed(() => e.iconRemove || n.iconSet.chip.remove), d = vue.computed(() => e.disable === false && (e.clickable === true || e.selected !== null)), u = vue.computed(() => {
    let h = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (h ? ` text-${h} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (d.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (r.value === true ? " q-chip--dark q-dark" : "");
  }), v = vue.computed(() => {
    let h = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, w = { ...h, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || n.lang.label.remove };
    return { chip: h, remove: w };
  });
  function f(h) {
    h.keyCode === 13 && c(h);
  }
  function c(h) {
    e.disable || (o("update:selected", !e.selected), o("click", h));
  }
  function m(h) {
    (h.keyCode === void 0 || h.keyCode === 13) && (qe(h), e.disable === false && (o("update:modelValue", false), o("remove")));
  }
  function y() {
    let h = [];
    d.value === true && h.push(vue.h("div", { class: "q-focus-helper" })), a.value === true && h.push(vue.h(_e, { class: "q-chip__icon q-chip__icon--left", name: l.value }));
    let w = e.label !== void 0 ? [vue.h("div", { class: "ellipsis" }, [e.label])] : void 0;
    return h.push(vue.h("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, jr(t.default, w))), e.iconRight && h.push(vue.h(_e, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && h.push(vue.h(_e, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: s.value, ...v.value.remove, onClick: m, onKeyup: m })), h;
  }
  return () => {
    if (e.modelValue === false)
      return;
    let h = { class: u.value, style: i.value };
    return d.value === true && Object.assign(h, v.value.chip, { onClick: c, onKeyup: f }), yt("div", h, y(), "ripple", e.ripple !== false && e.disable !== true, () => [[Xo, e.ripple]]);
  };
} });
var wa = { ...Lt, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean };
var Ys = 50, Of = 2 * Ys, If = Of * Math.PI, my = Math.round(If * 1e3) / 1e3, $i = M({ name: "QCircularProgress", props: { ...wa, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = Ft(e), r = vue.computed(() => {
    let c = (o.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (o.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - c}deg)` : `rotate3d(0, 0, 1, ${c - 90}deg)` };
  }), i = vue.computed(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), a = vue.computed(() => Of / (1 - e.thickness / 2)), l = vue.computed(() => `${a.value / 2} ${a.value / 2} ${a.value} ${a.value}`), s = vue.computed(() => Xe(e.value, e.min, e.max)), d = vue.computed(() => e.max - e.min), u = vue.computed(() => e.thickness / 2 * a.value), v = vue.computed(() => {
    let c = (e.max - s.value) / d.value, m = e.rounded === true && s.value < e.max && c < 0.25 ? u.value / 2 * (1 - c / 0.25) : 0;
    return If * c + m;
  });
  function f({ thickness: c, offset: m, color: y, cls: h, rounded: w }) {
    return vue.h("circle", { class: "q-circular-progress__" + h + (y !== void 0 ? ` text-${y}` : ""), style: i.value, fill: "transparent", stroke: "currentColor", "stroke-width": c, "stroke-dasharray": my, "stroke-dashoffset": m, "stroke-linecap": w, cx: a.value, cy: a.value, r: Ys });
  }
  return () => {
    let c = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && c.push(vue.h("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Ys - u.value / 2, cx: a.value, cy: a.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && c.push(f({ cls: "track", thickness: u.value, offset: 0, color: e.trackColor })), c.push(f({ cls: "circle", thickness: u.value, offset: v.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    let m = [vue.h("svg", { class: "q-circular-progress__svg", style: r.value, viewBox: l.value, "aria-hidden": "true" }, c)];
    return e.showValue === true && m.push(vue.h("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [vue.h("div", s.value)])), vue.h("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: n.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : s.value }, jr(t.internal, m));
  };
} });
var St = wt({ name: "touch-pan", getSSRProps: Mt });
var Hf = "q-slider__marker-labels", py = (e) => ({ value: e }), hy = ({ marker: e }) => vue.h("div", { key: e.value, style: e.style, class: e.classes }, e.label), Ca = [34, 37, 40, 33, 39, 38], Nl = { ...pe, ...bt, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, Ql = ["pan", "update:modelValue", "change"];
function jl({ updateValue: e, updatePosition: t, getDragging: o, formAttrs: n }) {
  let { props: r, emit: i, slots: a, proxy: { $q: l } } = vue.getCurrentInstance(), s = he(r, l), d = Wt(n), u = vue.ref(false), v = vue.ref(false), f = vue.ref(false), c = vue.ref(false), m = vue.computed(() => r.vertical === true ? "--v" : "--h"), y = vue.computed(() => "-" + (r.switchLabelSide === true ? "switched" : "standard")), h = vue.computed(() => r.vertical === true ? r.reverse === true : r.reverse !== (l.lang.rtl === true)), w = vue.computed(() => isNaN(r.innerMin) === true || r.innerMin < r.min ? r.min : r.innerMin), b = vue.computed(() => isNaN(r.innerMax) === true || r.innerMax > r.max ? r.max : r.innerMax), p = vue.computed(() => r.disable !== true && r.readonly !== true && w.value < b.value), g = vue.computed(() => {
    if (r.step === 0)
      return (ee) => ee;
    let W = (String(r.step).trim().split(".")[1] || "").length;
    return (ee) => parseFloat(ee.toFixed(W));
  }), x = vue.computed(() => r.step === 0 ? 1 : r.step), P = vue.computed(() => p.value === true ? r.tabindex || 0 : -1), A = vue.computed(() => r.max - r.min), L = vue.computed(() => b.value - w.value), $ = vue.computed(() => Se(w.value)), R = vue.computed(() => Se(b.value)), B = vue.computed(() => r.vertical === true ? h.value === true ? "bottom" : "top" : h.value === true ? "right" : "left"), k = vue.computed(() => r.vertical === true ? "height" : "width"), S = vue.computed(() => r.vertical === true ? "width" : "height"), C = vue.computed(() => r.vertical === true ? "vertical" : "horizontal"), U = vue.computed(() => {
    let W = { role: "slider", "aria-valuemin": w.value, "aria-valuemax": b.value, "aria-orientation": C.value, "data-step": r.step };
    return r.disable === true ? W["aria-disabled"] = "true" : r.readonly === true && (W["aria-readonly"] = "true"), W;
  }), j = vue.computed(() => `q-slider q-slider${m.value} q-slider--${u.value === true ? "" : "in"}active inline no-wrap ` + (r.vertical === true ? "row" : "column") + (r.disable === true ? " disabled" : " q-slider--enabled" + (p.value === true ? " q-slider--editable" : "")) + (f.value === "both" ? " q-slider--focus" : "") + (r.label || r.labelAlways === true ? " q-slider--label" : "") + (r.labelAlways === true ? " q-slider--label-always" : "") + (s.value === true ? " q-slider--dark" : "") + (r.dense === true ? " q-slider--dense q-slider--dense" + m.value : ""));
  function E(W) {
    let ee = "q-slider__" + W;
    return `${ee} ${ee}${m.value} ${ee}${m.value}${y.value}`;
  }
  function D(W) {
    let ee = "q-slider__" + W;
    return `${ee} ${ee}${m.value}`;
  }
  let Q = vue.computed(() => {
    let W = r.selectionColor || r.color;
    return "q-slider__selection absolute" + (W !== void 0 ? ` text-${W}` : "");
  }), ie = vue.computed(() => D("markers") + " absolute overflow-hidden"), z = vue.computed(() => D("track-container")), _ = vue.computed(() => E("pin")), N = vue.computed(() => E("label")), H = vue.computed(() => E("text-container")), oe = vue.computed(() => E("marker-labels-container") + (r.markerLabelsClass !== void 0 ? ` ${r.markerLabelsClass}` : "")), q = vue.computed(() => "q-slider__track relative-position no-outline" + (r.trackColor !== void 0 ? ` bg-${r.trackColor}` : "")), V = vue.computed(() => {
    let W = { [S.value]: r.trackSize };
    return r.trackImg !== void 0 && (W.backgroundImage = `url(${r.trackImg}) !important`), W;
  }), te = vue.computed(() => "q-slider__inner absolute" + (r.innerTrackColor !== void 0 ? ` bg-${r.innerTrackColor}` : "")), O = vue.computed(() => {
    let W = R.value - $.value, ee = { [B.value]: `${100 * $.value}%`, [k.value]: W === 0 ? "2px" : `${100 * W}%` };
    return r.innerTrackImg !== void 0 && (ee.backgroundImage = `url(${r.innerTrackImg}) !important`), ee;
  });
  function ue(W) {
    let { min: ee, max: we, step: Ve } = r, ye = ee + W * (we - ee);
    if (Ve > 0) {
      let Ye = (ye - w.value) % Ve;
      ye += (Math.abs(Ye) >= Ve / 2 ? (Ye < 0 ? -1 : 1) * Ve : 0) - Ye;
    }
    return ye = g.value(ye), Xe(ye, w.value, b.value);
  }
  function Se(W) {
    return A.value === 0 ? 0 : (W - r.min) / A.value;
  }
  function K(W, ee) {
    let we = So(W), Ve = r.vertical === true ? Xe((we.top - ee.top) / ee.height, 0, 1) : Xe((we.left - ee.left) / ee.width, 0, 1);
    return Xe(h.value === true ? 1 - Ve : Ve, $.value, R.value);
  }
  let ae = vue.computed(() => _o(r.markers) === true ? r.markers : x.value), ce = vue.computed(() => {
    let W = [], ee = ae.value, we = r.max, Ve = r.min;
    do
      W.push(Ve), Ve += ee;
    while (Ve < we);
    return W.push(we), W;
  }), be = vue.computed(() => {
    let W = ` ${Hf}${m.value}-`;
    return Hf + `${W}${r.switchMarkerLabelsSide === true ? "switched" : "standard"}${W}${h.value === true ? "rtl" : "ltr"}`;
  }), Te = vue.computed(() => r.markerLabels === false ? null : Le(r.markerLabels).map((W, ee) => ({ index: ee, value: W.value, label: W.label || W.value, classes: be.value + (W.classes !== void 0 ? " " + W.classes : ""), style: { ...Fe(W.value), ...W.style || {} } }))), le = vue.computed(() => ({ markerList: Te.value, markerMap: ne.value, classes: be.value, getStyle: Fe })), Me = vue.computed(() => {
    let W = L.value === 0 ? "2px" : 100 * ae.value / L.value;
    return { ...O.value, backgroundSize: r.vertical === true ? `2px ${W}%` : `${W}% 2px` };
  });
  function Le(W) {
    if (W === false)
      return null;
    if (W === true)
      return ce.value.map(py);
    if (typeof W == "function")
      return ce.value.map((we) => {
        let Ve = W(we);
        return st(Ve) === true ? { ...Ve, value: we } : { value: we, label: Ve };
      });
    let ee = ({ value: we }) => we >= r.min && we <= r.max;
    return Array.isArray(W) === true ? W.map((we) => st(we) === true ? we : { value: we }).filter(ee) : Object.keys(W).map((we) => {
      let Ve = W[we], ye = Number(we);
      return st(Ve) === true ? { ...Ve, value: ye } : { value: ye, label: Ve };
    }).filter(ee);
  }
  function Fe(W) {
    return { [B.value]: `${100 * (W - r.min) / A.value}%` };
  }
  let ne = vue.computed(() => {
    if (r.markerLabels === false)
      return null;
    let W = {};
    return Te.value.forEach((ee) => {
      W[ee.value] = ee;
    }), W;
  });
  function se() {
    if (a["marker-label-group"] !== void 0)
      return a["marker-label-group"](le.value);
    let W = a["marker-label"] || hy;
    return Te.value.map((ee) => W({ marker: ee, ...le.value }));
  }
  let Y = vue.computed(() => [[St, me, void 0, { [C.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function me(W) {
    W.isFinal === true ? (c.value !== void 0 && (t(W.evt), W.touch === true && e(true), c.value = void 0, i("pan", "end")), u.value = false, f.value = false) : W.isFirst === true ? (c.value = o(W.evt), t(W.evt), e(), u.value = true, i("pan", "start")) : (t(W.evt), e());
  }
  function Pe() {
    f.value = false;
  }
  function Ae(W) {
    t(W, o(W)), e(), v.value = true, u.value = true, document.addEventListener("mouseup", Re, true);
  }
  function Re() {
    v.value = false, u.value = false, e(true), Pe(), document.removeEventListener("mouseup", Re, true);
  }
  function tt(W) {
    t(W, o(W)), e(true);
  }
  function at(W) {
    Ca.includes(W.keyCode) && e(true);
  }
  function lt(W) {
    if (r.vertical === true)
      return null;
    let ee = l.lang.rtl !== r.reverse ? 1 - W : W;
    return { transform: `translateX(calc(${2 * ee - 1} * ${r.thumbSize} / 2 + ${50 - 100 * ee}%))` };
  }
  function G(W) {
    let ee = vue.computed(() => v.value === false && (f.value === W.focusValue || f.value === "both") ? " q-slider--focus" : ""), we = vue.computed(() => `q-slider__thumb q-slider__thumb${m.value} q-slider__thumb${m.value}-${h.value === true ? "rtl" : "ltr"} absolute non-selectable` + ee.value + (W.thumbColor.value !== void 0 ? ` text-${W.thumbColor.value}` : "")), Ve = vue.computed(() => ({ width: r.thumbSize, height: r.thumbSize, [B.value]: `${100 * W.ratio.value}%`, zIndex: f.value === W.focusValue ? 2 : void 0 })), ye = vue.computed(() => W.labelColor.value !== void 0 ? ` text-${W.labelColor.value}` : ""), Ye = vue.computed(() => lt(W.ratio.value)), ct = vue.computed(() => "q-slider__text" + (W.labelTextColor.value !== void 0 ? ` text-${W.labelTextColor.value}` : ""));
    return () => {
      let vt = [vue.h("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [vue.h("path", { d: r.thumbPath })]), vue.h("div", { class: "q-slider__focus-ring fit" })];
      return (r.label === true || r.labelAlways === true) && (vt.push(vue.h("div", { class: _.value + " absolute fit no-pointer-events" + ye.value }, [vue.h("div", { class: N.value, style: { minWidth: r.thumbSize } }, [vue.h("div", { class: H.value, style: Ye.value }, [vue.h("span", { class: ct.value }, W.label.value)])])])), r.name !== void 0 && r.disable !== true && d(vt, "push")), vue.h("div", { class: we.value, style: Ve.value, ...W.getNodeData() }, vt);
    };
  }
  function re(W, ee, we, Ve) {
    let ye = [];
    r.innerTrackColor !== "transparent" && ye.push(vue.h("div", { key: "inner", class: te.value, style: O.value })), r.selectionColor !== "transparent" && ye.push(vue.h("div", { key: "selection", class: Q.value, style: W.value })), r.markers !== false && ye.push(vue.h("div", { key: "marker", class: ie.value, style: Me.value })), Ve(ye);
    let Ye = [yt("div", { key: "trackC", class: z.value, tabindex: ee.value, ...we.value }, [vue.h("div", { class: q.value, style: V.value }, ye)], "slide", p.value, () => Y.value)];
    if (r.markerLabels !== false) {
      let ct = r.switchMarkerLabelsSide === true ? "unshift" : "push";
      Ye[ct](vue.h("div", { key: "markerL", class: oe.value }, se()));
    }
    return Ye;
  }
  return vue.onBeforeUnmount(() => {
    document.removeEventListener("mouseup", Re, true);
  }), { state: { active: u, focus: f, preventFocus: v, dragging: c, editable: p, classes: j, tabindex: P, attributes: U, roundValueFn: g, keyStep: x, trackLen: A, innerMin: w, innerMinRatio: $, innerMax: b, innerMaxRatio: R, positionProp: B, sizeProp: k, isReversed: h }, methods: { onActivate: Ae, onMobileClick: tt, onBlur: Pe, onKeyup: at, getContent: re, getThumbRenderFn: G, convertRatioToModel: ue, convertModelToRatio: Se, getDraggingRatio: K } };
}
var Sy = () => ({}), _n = M({ name: "QSlider", props: { ...Nl, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: Ql, setup(e, { emit: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), { state: n, methods: r } = jl({ updateValue: m, updatePosition: h, getDragging: y, formAttrs: Jo(e) }), i = vue.ref(null), a = vue.ref(0), l = vue.ref(0);
  function s() {
    l.value = e.modelValue === null ? n.innerMin.value : Xe(e.modelValue, n.innerMin.value, n.innerMax.value);
  }
  vue.watch(() => `${e.modelValue}|${n.innerMin.value}|${n.innerMax.value}`, s), s();
  let d = vue.computed(() => r.convertModelToRatio(l.value)), u = vue.computed(() => n.active.value === true ? a.value : d.value), v = vue.computed(() => {
    let p = { [n.positionProp.value]: `${100 * n.innerMinRatio.value}%`, [n.sizeProp.value]: `${100 * (u.value - n.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (p.backgroundImage = `url(${e.selectionImg}) !important`), p;
  }), f = r.getThumbRenderFn({ focusValue: true, getNodeData: Sy, ratio: u, label: vue.computed(() => e.labelValue !== void 0 ? e.labelValue : l.value), thumbColor: vue.computed(() => e.thumbColor || e.color), labelColor: vue.computed(() => e.labelColor), labelTextColor: vue.computed(() => e.labelTextColor) }), c = vue.computed(() => n.editable.value !== true ? {} : o.platform.is.mobile === true ? { onClick: r.onMobileClick } : { onMousedown: r.onActivate, onFocus: w, onBlur: r.onBlur, onKeydown: b, onKeyup: r.onKeyup });
  function m(p) {
    l.value !== e.modelValue && t("update:modelValue", l.value), p === true && t("change", l.value);
  }
  function y() {
    return i.value.getBoundingClientRect();
  }
  function h(p, g = n.dragging.value) {
    let x = r.getDraggingRatio(p, g);
    l.value = r.convertRatioToModel(x), a.value = e.snap !== true || e.step === 0 ? x : r.convertModelToRatio(l.value);
  }
  function w() {
    n.focus.value = true;
  }
  function b(p) {
    if (!Ca.includes(p.keyCode))
      return;
    qe(p);
    let g = ([34, 33].includes(p.keyCode) ? 10 : 1) * n.keyStep.value, x = ([34, 37, 40].includes(p.keyCode) ? -1 : 1) * (n.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * g;
    l.value = Xe(n.roundValueFn.value(l.value + x), n.innerMin.value, n.innerMax.value), m();
  }
  return () => {
    let p = r.getContent(v, n.tabindex, c, (g) => {
      g.push(f());
    });
    return vue.h("div", { ref: i, class: n.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...n.attributes.value, "aria-valuenow": e.modelValue }, p);
  };
} });
function ka() {
  let e = vue.ref(!It.value);
  return e.value === false && vue.onMounted(() => {
    e.value = true;
  }), { isHydrated: e };
}
var so = M({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  return je;
} });
function Ey(e, t, o) {
  let n = o === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? n[0] : n[1]}${e ? ` text-${e}` : ""}`;
}
var Ay = ["left", "center", "right", "justify"], Ta = M({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => Ay.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, { registerTick: i } = Do(), { registerTick: a } = Do(), { registerTick: l } = Do(), { registerTimeout: s, removeTimeout: d } = Jt(), { registerTimeout: u, removeTimeout: v } = Jt(), f = vue.ref(null), c = vue.ref(null), m = vue.ref(e.modelValue), y = vue.ref(false), h = vue.ref(true), w = vue.ref(false), b = vue.ref(false), p = [], g = vue.ref(0), x = vue.ref(false), P = null, A = null, L, $ = vue.computed(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: Ey(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), R = vue.computed(() => {
    let ne = g.value, se = m.value;
    for (let Y = 0; Y < ne; Y++)
      if (p[Y].name.value === se)
        return true;
    return false;
  }), B = vue.computed(() => `q-tabs__content--align-${y.value === true ? "left" : b.value === true ? "justify" : e.align}`), k = vue.computed(() => `q-tabs row no-wrap items-center q-tabs--${y.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), S = vue.computed(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + B.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), C = vue.computed(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), U = vue.computed(() => e.vertical !== true && r.lang.rtl === true), j = vue.computed(() => U.value === true);
  vue.watch(U, _), vue.watch(() => e.modelValue, (ne) => {
    E({ name: ne, setCurrent: true, skipEmit: true });
  }), vue.watch(() => e.outsideArrows, D);
  function E({ name: ne, setCurrent: se, skipEmit: Y }) {
    m.value !== ne && (Y !== true && e["onUpdate:modelValue"] !== void 0 && o("update:modelValue", ne), (se === true || e["onUpdate:modelValue"] === void 0) && (ie(m.value, ne), m.value = ne));
  }
  function D() {
    i(() => {
      Q({ width: f.value.offsetWidth, height: f.value.offsetHeight });
    });
  }
  function Q(ne) {
    if (C.value === void 0 || c.value === null)
      return;
    let se = ne[C.value.container], Y = Math.min(c.value[C.value.scroll], Array.prototype.reduce.call(c.value.children, (Pe, Ae) => Pe + (Ae[C.value.content] || 0), 0)), me = se > 0 && Y > se;
    y.value = me, me === true && a(_), b.value = se < parseInt(e.breakpoint, 10);
  }
  function ie(ne, se) {
    let Y = ne != null && ne !== "" ? p.find((Pe) => Pe.name.value === ne) : null, me = se != null && se !== "" ? p.find((Pe) => Pe.name.value === se) : null;
    if (Y && me) {
      let Pe = Y.tabIndicatorRef.value, Ae = me.tabIndicatorRef.value;
      P !== null && (clearTimeout(P), P = null), Pe.style.transition = "none", Pe.style.transform = "none", Ae.style.transition = "none", Ae.style.transform = "none";
      let Re = Pe.getBoundingClientRect(), tt = Ae.getBoundingClientRect();
      Ae.style.transform = e.vertical === true ? `translate3d(0,${Re.top - tt.top}px,0) scale3d(1,${tt.height ? Re.height / tt.height : 1},1)` : `translate3d(${Re.left - tt.left}px,0,0) scale3d(${tt.width ? Re.width / tt.width : 1},1,1)`, l(() => {
        P = setTimeout(() => {
          P = null, Ae.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", Ae.style.transform = "none";
        }, 70);
      });
    }
    me && y.value === true && z(me.rootRef.value);
  }
  function z(ne) {
    let { left: se, width: Y, top: me, height: Pe } = c.value.getBoundingClientRect(), Ae = ne.getBoundingClientRect(), Re = e.vertical === true ? Ae.top - me : Ae.left - se;
    if (Re < 0) {
      c.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Re), _();
      return;
    }
    Re += e.vertical === true ? Ae.height - Pe : Ae.width - Y, Re > 0 && (c.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Re), _());
  }
  function _() {
    let ne = c.value;
    if (ne === null)
      return;
    let se = ne.getBoundingClientRect(), Y = e.vertical === true ? ne.scrollTop : Math.abs(ne.scrollLeft);
    U.value === true ? (h.value = Math.ceil(Y + se.width) < ne.scrollWidth - 1, w.value = Y > 0) : (h.value = Y > 0, w.value = e.vertical === true ? Math.ceil(Y + se.height) < ne.scrollHeight : Math.ceil(Y + se.width) < ne.scrollWidth);
  }
  function N(ne) {
    A !== null && clearInterval(A), A = setInterval(() => {
      O(ne) === true && q();
    }, 5);
  }
  function H() {
    N(j.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function oe() {
    N(j.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function q() {
    A !== null && (clearInterval(A), A = null);
  }
  function V(ne, se) {
    let Y = Array.prototype.filter.call(c.value.children, (tt) => tt === se || tt.matches && tt.matches(".q-tab.q-focusable") === true), me = Y.length;
    if (me === 0)
      return;
    if (ne === 36)
      return z(Y[0]), Y[0].focus(), true;
    if (ne === 35)
      return z(Y[me - 1]), Y[me - 1].focus(), true;
    let Pe = ne === (e.vertical === true ? 38 : 37), Ae = ne === (e.vertical === true ? 40 : 39), Re = Pe === true ? -1 : Ae === true ? 1 : void 0;
    if (Re !== void 0) {
      let tt = U.value === true ? -1 : 1, at = Y.indexOf(se) + Re * tt;
      return at >= 0 && at < me && (z(Y[at]), Y[at].focus({ preventScroll: true })), true;
    }
  }
  let te = vue.computed(() => j.value === true ? { get: (ne) => Math.abs(ne.scrollLeft), set: (ne, se) => {
    ne.scrollLeft = -se;
  } } : e.vertical === true ? { get: (ne) => ne.scrollTop, set: (ne, se) => {
    ne.scrollTop = se;
  } } : { get: (ne) => ne.scrollLeft, set: (ne, se) => {
    ne.scrollLeft = se;
  } });
  function O(ne) {
    let se = c.value, { get: Y, set: me } = te.value, Pe = false, Ae = Y(se), Re = ne < Ae ? -1 : 1;
    return Ae += Re * 5, Ae < 0 ? (Pe = true, Ae = 0) : (Re === -1 && Ae <= ne || Re === 1 && Ae >= ne) && (Pe = true, Ae = ne), me(se, Ae), _(), Pe;
  }
  function ue(ne, se) {
    for (let Y in ne)
      if (ne[Y] !== se[Y])
        return false;
    return true;
  }
  function Se() {
    let ne = null, se = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 }, Y = p.filter((Re) => Re.routeData !== void 0 && Re.routeData.hasRouterLink.value === true), { hash: me, query: Pe } = n.$route, Ae = Object.keys(Pe).length;
    for (let Re of Y) {
      let tt = Re.routeData.exact.value === true;
      if (Re.routeData[tt === true ? "linkIsExactActive" : "linkIsActive"].value !== true)
        continue;
      let { hash: at, query: lt, matched: G, href: re } = Re.routeData.resolvedLink.value, W = Object.keys(lt).length;
      if (tt === true) {
        if (at !== me || W !== Ae || ue(Pe, lt) === false)
          continue;
        ne = Re.name.value;
        break;
      }
      if (at !== "" && at !== me || W !== 0 && ue(lt, Pe) === false)
        continue;
      let ee = { matchedLen: G.length, queryDiff: Ae - W, hrefLen: re.length - at.length };
      if (ee.matchedLen > se.matchedLen) {
        ne = Re.name.value, se = ee;
        continue;
      } else if (ee.matchedLen !== se.matchedLen)
        continue;
      if (ee.queryDiff < se.queryDiff)
        ne = Re.name.value, se = ee;
      else if (ee.queryDiff !== se.queryDiff)
        continue;
      ee.hrefLen > se.hrefLen && (ne = Re.name.value, se = ee);
    }
    ne === null && p.some((Re) => Re.routeData === void 0 && Re.name.value === m.value) === true || E({ name: ne, setCurrent: true });
  }
  function K(ne) {
    if (d(), x.value !== true && f.value !== null && ne.target && typeof ne.target.closest == "function") {
      let se = ne.target.closest(".q-tab");
      se && f.value.contains(se) === true && (x.value = true, y.value === true && z(se));
    }
  }
  function ae() {
    s(() => {
      x.value = false;
    }, 30);
  }
  function ce() {
    Me.avoidRouteWatcher === false ? u(Se) : v();
  }
  function be() {
    if (L === void 0) {
      let ne = vue.watch(() => n.$route.fullPath, ce);
      L = () => {
        ne(), L = void 0;
      };
    }
  }
  function Te(ne) {
    p.push(ne), g.value++, D(), ne.routeData === void 0 || n.$route === void 0 ? u(() => {
      if (y.value === true) {
        let se = m.value, Y = se != null && se !== "" ? p.find((me) => me.name.value === se) : null;
        Y && z(Y.rootRef.value);
      }
    }) : (be(), ne.routeData.hasRouterLink.value === true && ce());
  }
  function le(ne) {
    p.splice(p.indexOf(ne), 1), g.value--, D(), L !== void 0 && ne.routeData !== void 0 && (p.every((se) => se.routeData === void 0) === true && L(), ce());
  }
  let Me = { currentModel: m, tabProps: $, hasFocus: x, hasActiveTab: R, registerTab: Te, unregisterTab: le, verifyRouteModel: ce, updateModel: E, onKbdNavigate: V, avoidRouteWatcher: false };
  vue.provide(dl, Me);
  function Le() {
    P !== null && clearTimeout(P), q(), L !== void 0 && L();
  }
  let Fe;
  return vue.onBeforeUnmount(Le), vue.onDeactivated(() => {
    Fe = L !== void 0, Le();
  }), vue.onActivated(() => {
    Fe === true && be(), D();
  }), () => vue.h("div", { ref: f, class: k.value, role: "tablist", onFocusin: K, onFocusout: ae }, [vue.h(so, { onResize: Q }), vue.h("div", { ref: c, class: S.value, onScroll: _ }, J(t.default)), vue.h(_e, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (h.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || r.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: H, onTouchstartPassive: H, onMouseupPassive: q, onMouseleavePassive: q, onTouchendPassive: q }), vue.h(_e, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || r.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: oe, onTouchstartPassive: oe, onMouseupPassive: q, onMouseleavePassive: q, onTouchendPassive: q })]);
} });
var Vy = 0, Kl = ["click", "keydown"], Wl = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Vy++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function Yl(e, t, o, n) {
  let r = vue.inject(dl, We);
  if (r === We)
    return console.error("QTab/QRouteTab component needs to be child of QTabs"), We;
  let { proxy: i } = vue.getCurrentInstance(), a = vue.ref(null), l = vue.ref(null), s = vue.ref(null), d = vue.computed(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), u = vue.computed(() => r.currentModel.value === e.name), v = vue.computed(() => "q-tab relative-position self-stretch flex flex-center text-center" + (u.value === true ? " q-tab--active" + (r.tabProps.value.activeClass ? " " + r.tabProps.value.activeClass : "") + (r.tabProps.value.activeColor ? ` text-${r.tabProps.value.activeColor}` : "") + (r.tabProps.value.activeBgColor ? ` bg-${r.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && r.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || r.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (n !== void 0 ? n.linkClass.value : "")), f = vue.computed(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (r.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), c = vue.computed(() => e.disable === true || r.hasFocus.value === true || u.value === false && r.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function m(p, g) {
    if (g !== true && a.value !== null && a.value.focus(), e.disable === true) {
      n !== void 0 && n.hasRouterLink.value === true && qe(p);
      return;
    }
    if (n === void 0) {
      r.updateModel({ name: e.name }), o("click", p);
      return;
    }
    if (n.hasRouterLink.value === true) {
      let x = (P = {}) => {
        let A, L = P.to === void 0 || Zt(P.to, e.to) === true ? r.avoidRouteWatcher = yn() : null;
        return n.navigateToRouterLink(p, { ...P, returnRouterError: true }).catch(($) => {
          A = $;
        }).then(($) => {
          if (L === r.avoidRouteWatcher && (r.avoidRouteWatcher = false, A === void 0 && ($ === void 0 || $.message !== void 0 && $.message.startsWith("Avoided redundant navigation") === true) && r.updateModel({ name: e.name })), P.returnRouterError === true)
            return A !== void 0 ? Promise.reject(A) : $;
        });
      };
      o("click", p, x), p.defaultPrevented !== true && x();
      return;
    }
    o("click", p);
  }
  function y(p) {
    Ht(p, [13, 32]) ? m(p, true) : go(p) !== true && p.keyCode >= 35 && p.keyCode <= 40 && p.altKey !== true && p.metaKey !== true && r.onKbdNavigate(p.keyCode, i.$el) === true && qe(p), o("keydown", p);
  }
  function h() {
    let p = r.tabProps.value.narrowIndicator, g = [], x = vue.h("div", { ref: s, class: ["q-tab__indicator", r.tabProps.value.indicatorClass] });
    e.icon !== void 0 && g.push(vue.h(_e, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && g.push(vue.h("div", { class: "q-tab__label" }, e.label)), e.alert !== false && g.push(e.alertIcon !== void 0 ? vue.h(_e, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : vue.h("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), p === true && g.push(x);
    let P = [vue.h("div", { class: "q-focus-helper", tabindex: -1, ref: a }), vue.h("div", { class: f.value }, Ue(t.default, g))];
    return p === false && P.push(x), P;
  }
  let w = { name: vue.computed(() => e.name), rootRef: l, tabIndicatorRef: s, routeData: n };
  vue.onBeforeUnmount(() => {
    r.unregisterTab(w);
  }), vue.onMounted(() => {
    r.registerTab(w);
  });
  function b(p, g) {
    let x = { ref: l, class: v.value, tabindex: c.value, role: "tab", "aria-selected": u.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: m, onKeydown: y, ...g };
    return vue.withDirectives(vue.h(p, x, h()), [[Xo, d.value]]);
  }
  return { renderTab: b, $tabs: r };
}
var Qn = M({ name: "QTab", props: Wl, emits: Kl, setup(e, { slots: t, emit: o }) {
  let { renderTab: n } = Yl(e, t, o);
  return () => n("div");
} });
var Xl = M({ name: "QTabPanels", props: { ...xi, ...pe }, emits: Si, setup(e, { slots: t }) {
  let o = vue.getCurrentInstance(), n = he(e, o.proxy.$q), { updatePanelsList: r, getPanelContent: i, panelDirectives: a } = _i(), l = vue.computed(() => "q-tab-panels q-panel-parent" + (n.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (r(t), yt("div", { class: l.value }, i(), "pan", e.swipeable, () => a.value));
} });
var Fi = M({ name: "QTabPanel", props: yi, setup(e, { slots: t }) {
  return () => vue.h("div", { class: "q-tab-panel", role: "tabpanel" }, J(t.default));
} });
var Wf = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, Yf = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, Xf = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Gl = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Zl = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, xr = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => Wf.test(e), hexaColor: (e) => Yf.test(e), hexOrHexaColor: (e) => Xf.test(e), rgbColor: (e) => Gl.test(e), rgbaColor: (e) => Zl.test(e), rgbOrRgbaColor: (e) => Gl.test(e) || Zl.test(e), hexOrRgbColor: (e) => Wf.test(e) || Gl.test(e), hexaOrRgbaColor: (e) => Yf.test(e) || Zl.test(e), anyColor: (e) => Xf.test(e) || Gl.test(e) || Zl.test(e) };
var Ny = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function Sr({ r: e, g: t, b: o, a: n }) {
  let r = n !== void 0;
  if (e = Math.round(e), t = Math.round(t), o = Math.round(o), e > 255 || t > 255 || o > 255 || r && n > 100)
    throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return n = r ? (Math.round(255 * n / 100) | 256).toString(16).slice(1) : "", "#" + (o | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + n;
}
function Zs({ r: e, g: t, b: o, a: n }) {
  return `rgb${n !== void 0 ? "a" : ""}(${e},${t},${o}${n !== void 0 ? "," + n / 100 : ""})`;
}
function Jl(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  let t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function eu({ h: e, s: t, v: o, a: n }) {
  let r, i, a;
  t = t / 100, o = o / 100, e = e / 360;
  let l = Math.floor(e * 6), s = e * 6 - l, d = o * (1 - t), u = o * (1 - s * t), v = o * (1 - (1 - s) * t);
  switch (l % 6) {
    case 0:
      r = o, i = v, a = d;
      break;
    case 1:
      r = u, i = o, a = d;
      break;
    case 2:
      r = d, i = o, a = v;
      break;
    case 3:
      r = d, i = u, a = o;
      break;
    case 4:
      r = v, i = d, a = o;
      break;
    case 5:
      r = o, i = d, a = u;
      break;
  }
  return { r: Math.round(r * 255), g: Math.round(i * 255), b: Math.round(a * 255), a: n };
}
function Ma({ r: e, g: t, b: o, a: n }) {
  let r = Math.max(e, t, o), i = Math.min(e, t, o), a = r - i, l = r === 0 ? 0 : a / r, s = r / 255, d;
  switch (r) {
    case i:
      d = 0;
      break;
    case e:
      d = t - o + a * (t < o ? 6 : 0), d /= 6 * a;
      break;
    case t:
      d = o - e + a * 2, d /= 6 * a;
      break;
    case o:
      d = e - t + a * 4, d /= 6 * a;
      break;
  }
  return { h: Math.round(d * 360), s: Math.round(l * 100), v: Math.round(s * 100), a: n };
}
function on(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  let t = e.replace(/ /g, ""), o = Ny.exec(t);
  if (o === null)
    return Jl(t);
  let n = { r: Math.min(255, parseInt(o[2], 10)), g: Math.min(255, parseInt(o[3], 10)), b: Math.min(255, parseInt(o[4], 10)) };
  if (o[1]) {
    let r = parseFloat(o[5]);
    n.a = Math.min(1, isNaN(r) === true ? 1 : r) * 100;
  }
  return n;
}
function Js(e) {
  if (typeof e != "string" && (!e || e.r === void 0))
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  let t = typeof e == "string" ? on(e) : e, o = t.r / 255, n = t.g / 255, r = t.b / 255, i = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4), a = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), l = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  return 0.2126 * i + 0.7152 * a + 0.0722 * l;
}
var Gy = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], Jf = "M5 5 h10 v10 h-10 v-10 z", Zy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==", em = M({ name: "QColor", props: { ...pe, ...bt, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  let { proxy: o } = vue.getCurrentInstance(), { $q: n } = o, r = he(e, n), { getCache: i } = zo(), a = vue.ref(null), l = vue.ref(null), s = vue.computed(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), d = vue.computed(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), u = vue.ref(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), v = vue.ref(e.defaultView), f = vue.ref(k(e.modelValue || e.defaultValue)), c = vue.computed(() => e.disable !== true && e.readonly !== true), m = vue.computed(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), y = vue.computed(() => s.value !== null ? s.value : m.value), h = vue.computed(() => ({ type: "hidden", name: e.name, value: f.value[y.value === true ? "hex" : "rgb"] })), w = Wt(h), b = vue.computed(() => d.value !== null ? d.value : f.value.a !== void 0), p = vue.computed(() => ({ backgroundColor: f.value.rgb || "#000" })), g = vue.computed(() => `q-color-picker__header-content q-color-picker__header-content--${(f.value.a !== void 0 && f.value.a < 65 ? true : Js(f.value) > 0.4) ? "light" : "dark"}`), x = vue.computed(() => ({ background: `hsl(${f.value.h},100%,50%)` })), P = vue.computed(() => ({ top: `${100 - f.value.v}%`, [n.lang.rtl === true ? "right" : "left"]: `${f.value.s}%` })), A = vue.computed(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : Gy), L = vue.computed(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-color-picker--dark q-dark" : "")), $ = vue.computed(() => e.disable === true ? { "aria-disabled": "true" } : {}), R = vue.computed(() => [[St, Q, void 0, { prevent: true, stop: true, mouse: true }]]);
  vue.watch(() => e.modelValue, (K) => {
    let ae = k(K || e.defaultValue);
    ae.hex !== f.value.hex && (f.value = ae);
  }), vue.watch(() => e.defaultValue, (K) => {
    if (!e.modelValue && K) {
      let ae = k(K);
      ae.hex !== f.value.hex && (f.value = ae);
    }
  });
  function B(K, ae) {
    f.value.hex = Sr(K), f.value.rgb = Zs(K), f.value.r = K.r, f.value.g = K.g, f.value.b = K.b, f.value.a = K.a;
    let ce = f.value[y.value === true ? "hex" : "rgb"];
    t("update:modelValue", ce), ae === true && t("change", ce);
  }
  function k(K) {
    let ae = d.value !== void 0 ? d.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof K != "string" || K.length === 0 || xr.anyColor(K.replace(/ /g, "")) !== true)
      return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: ae === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    let ce = on(K);
    return ae === true && ce.a === void 0 && (ce.a = 100), ce.hex = Sr(ce), ce.rgb = Zs(ce), Object.assign(ce, Ma(ce));
  }
  function S(K, ae, ce) {
    let be = a.value;
    if (be === null)
      return;
    let Te = be.clientWidth, le = be.clientHeight, Me = be.getBoundingClientRect(), Le = Math.min(Te, Math.max(0, K - Me.left));
    n.lang.rtl === true && (Le = Te - Le);
    let Fe = Math.min(le, Math.max(0, ae - Me.top)), ne = Math.round(100 * Le / Te), se = Math.round(100 * Math.max(0, Math.min(1, -(Fe / le) + 1))), Y = eu({ h: f.value.h, s: ne, v: se, a: b.value === true ? f.value.a : void 0 });
    f.value.s = ne, f.value.v = se, B(Y, ce);
  }
  function C(K, ae) {
    let ce = Math.round(K), be = eu({ h: ce, s: f.value.s, v: f.value.v, a: b.value === true ? f.value.a : void 0 });
    f.value.h = ce, B(be, ae);
  }
  function U(K) {
    C(K, true);
  }
  function j(K, ae, ce, be, Te) {
    if (be !== void 0 && nt(be), !/^[0-9]+$/.test(K)) {
      Te === true && o.$forceUpdate();
      return;
    }
    let le = Math.floor(Number(K));
    if (le < 0 || le > ce) {
      Te === true && o.$forceUpdate();
      return;
    }
    let Me = { r: ae === "r" ? le : f.value.r, g: ae === "g" ? le : f.value.g, b: ae === "b" ? le : f.value.b, a: b.value === true ? ae === "a" ? le : f.value.a : void 0 };
    if (ae !== "a") {
      let Le = Ma(Me);
      f.value.h = Le.h, f.value.s = Le.s, f.value.v = Le.v;
    }
    if (B(Me, Te), be !== void 0 && Te !== true && be.target.selectionEnd !== void 0) {
      let Le = be.target.selectionEnd;
      vue.nextTick(() => {
        be.target.setSelectionRange(Le, Le);
      });
    }
  }
  function E(K, ae) {
    let ce, be = K.target.value;
    if (nt(K), u.value === "hex") {
      if (be.length !== (b.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(be))
        return true;
      ce = Jl(be);
    } else {
      let le;
      if (be.endsWith(")"))
        if (b.value !== true && be.startsWith("rgb(")) {
          if (le = be.substring(4, be.length - 1).split(",").map((Me) => parseInt(Me, 10)), le.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(be))
            return true;
        } else if (b.value === true && be.startsWith("rgba(")) {
          if (le = be.substring(5, be.length - 1).split(","), le.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(be))
            return true;
          for (let Le = 0; Le < 3; Le++) {
            let Fe = parseInt(le[Le], 10);
            if (Fe < 0 || Fe > 255)
              return true;
            le[Le] = Fe;
          }
          let Me = parseFloat(le[3]);
          if (Me < 0 || Me > 1)
            return true;
          le[3] = Me;
        } else
          return true;
      else
        return true;
      if (le[0] < 0 || le[0] > 255 || le[1] < 0 || le[1] > 255 || le[2] < 0 || le[2] > 255 || b.value === true && (le[3] < 0 || le[3] > 1))
        return true;
      ce = { r: le[0], g: le[1], b: le[2], a: b.value === true ? le[3] * 100 : void 0 };
    }
    let Te = Ma(ce);
    if (f.value.h = Te.h, f.value.s = Te.s, f.value.v = Te.v, B(ce, ae), ae !== true) {
      let le = K.target.selectionEnd;
      vue.nextTick(() => {
        K.target.setSelectionRange(le, le);
      });
    }
  }
  function D(K) {
    let ae = k(K), ce = { r: ae.r, g: ae.g, b: ae.b, a: ae.a };
    ce.a === void 0 && (ce.a = f.value.a), f.value.h = ae.h, f.value.s = ae.s, f.value.v = ae.v, B(ce, true);
  }
  function Q(K) {
    K.isFinal ? S(K.position.left, K.position.top, true) : ie(K);
  }
  let ie = As((K) => {
    S(K.position.left, K.position.top);
  }, 20);
  function z(K) {
    S(K.pageX - window.pageXOffset, K.pageY - window.pageYOffset, true);
  }
  function _(K) {
    S(K.pageX - window.pageXOffset, K.pageY - window.pageYOffset);
  }
  function N(K) {
    l.value !== null && (l.value.$el.style.opacity = K ? 1 : 0);
  }
  function H(K) {
    u.value = K;
  }
  function oe() {
    let K = [];
    return e.noHeaderTabs !== true && K.push(vue.h(Ta, { class: "q-color-picker__header-tabs", modelValue: u.value, dense: true, align: "justify", "onUpdate:modelValue": H }, () => [vue.h(Qn, { label: "HEX" + (b.value === true ? "A" : ""), name: "hex", ripple: false }), vue.h(Qn, { label: "RGB" + (b.value === true ? "A" : ""), name: "rgb", ripple: false })])), K.push(vue.h("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [vue.h("input", { class: "fit", value: f.value[u.value], ...c.value !== true ? { readonly: true } : {}, ...i("topIn", { onInput: (ae) => {
      N(E(ae) === true);
    }, onChange: nt, onBlur: (ae) => {
      E(ae, true) === true && o.$forceUpdate(), N(false);
    } }) }), vue.h(_e, { ref: l, class: "q-color-picker__error-icon absolute no-pointer-events", name: n.iconSet.type.negative })])), vue.h("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [vue.h("div", { class: "q-color-picker__header-bg absolute-full" }), vue.h("div", { class: g.value, style: p.value }, K)]);
  }
  function q() {
    return vue.h(Xl, { modelValue: v.value, animated: true }, () => [vue.h(Fi, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, O), vue.h(Fi, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, ue), vue.h(Fi, { class: "q-color-picker__palette-tab", name: "palette" }, Se)]);
  }
  function V(K) {
    v.value = K;
  }
  function te() {
    return vue.h("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [vue.h(Ta, { class: "absolute-full", modelValue: v.value, dense: true, align: "justify", "onUpdate:modelValue": V }, () => [vue.h(Qn, { icon: n.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), vue.h(Qn, { icon: n.iconSet.colorPicker.tune, name: "tune", ripple: false }), vue.h(Qn, { icon: n.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function O() {
    let K = { ref: a, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (c.value !== true ? " readonly" : ""), style: x.value, ...c.value === true ? { onClick: z, onMousedown: _ } : {} }, ae = [vue.h("div", { style: { paddingBottom: "100%" } }), vue.h("div", { class: "q-color-picker__spectrum-white absolute-full" }), vue.h("div", { class: "q-color-picker__spectrum-black absolute-full" }), vue.h("div", { class: "absolute", style: P.value }, [f.value.hex !== void 0 ? vue.h("div", { class: "q-color-picker__spectrum-circle" }) : null])], ce = [vue.h(_n, { class: "q-color-picker__hue non-selectable", modelValue: f.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: c.value !== true, thumbPath: Jf, "onUpdate:modelValue": C, onChange: U })];
    return b.value === true && ce.push(vue.h(_n, { class: "q-color-picker__alpha non-selectable", modelValue: f.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Zy, readonly: c.value !== true, hideSelection: true, thumbPath: Jf, ...i("alphaSlide", { "onUpdate:modelValue": (be) => j(be, "a", 100), onChange: (be) => j(be, "a", 100, void 0, true) }) })), [yt("div", K, ae, "spec", c.value, () => R.value), vue.h("div", { class: "q-color-picker__sliders" }, ce)];
  }
  function ue() {
    return [vue.h("div", { class: "row items-center no-wrap" }, [vue.h("div", "R"), vue.h(_n, { modelValue: f.value.r, min: 0, max: 255, color: "red", dark: r.value, readonly: c.value !== true, ...i("rSlide", { "onUpdate:modelValue": (K) => j(K, "r", 255), onChange: (K) => j(K, "r", 255, void 0, true) }) }), vue.h("input", { value: f.value.r, maxlength: 3, readonly: c.value !== true, onChange: nt, ...i("rIn", { onInput: (K) => j(K.target.value, "r", 255, K), onBlur: (K) => j(K.target.value, "r", 255, K, true) }) })]), vue.h("div", { class: "row items-center no-wrap" }, [vue.h("div", "G"), vue.h(_n, { modelValue: f.value.g, min: 0, max: 255, color: "green", dark: r.value, readonly: c.value !== true, ...i("gSlide", { "onUpdate:modelValue": (K) => j(K, "g", 255), onChange: (K) => j(K, "g", 255, void 0, true) }) }), vue.h("input", { value: f.value.g, maxlength: 3, readonly: c.value !== true, onChange: nt, ...i("gIn", { onInput: (K) => j(K.target.value, "g", 255, K), onBlur: (K) => j(K.target.value, "g", 255, K, true) }) })]), vue.h("div", { class: "row items-center no-wrap" }, [vue.h("div", "B"), vue.h(_n, { modelValue: f.value.b, min: 0, max: 255, color: "blue", readonly: c.value !== true, dark: r.value, ...i("bSlide", { "onUpdate:modelValue": (K) => j(K, "b", 255), onChange: (K) => j(K, "b", 255, void 0, true) }) }), vue.h("input", { value: f.value.b, maxlength: 3, readonly: c.value !== true, onChange: nt, ...i("bIn", { onInput: (K) => j(K.target.value, "b", 255, K), onBlur: (K) => j(K.target.value, "b", 255, K, true) }) })]), b.value === true ? vue.h("div", { class: "row items-center no-wrap" }, [vue.h("div", "A"), vue.h(_n, { modelValue: f.value.a, color: "grey", readonly: c.value !== true, dark: r.value, ...i("aSlide", { "onUpdate:modelValue": (K) => j(K, "a", 100), onChange: (K) => j(K, "a", 100, void 0, true) }) }), vue.h("input", { value: f.value.a, maxlength: 3, readonly: c.value !== true, onChange: nt, ...i("aIn", { onInput: (K) => j(K.target.value, "a", 100, K), onBlur: (K) => j(K.target.value, "a", 100, K, true) }) })]) : null];
  }
  function Se() {
    let K = (ae) => vue.h("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: ae }, ...c.value === true ? i("palette#" + ae, { onClick: () => {
      D(ae);
    } }) : {} });
    return [vue.h("div", { class: "row items-center q-color-picker__palette-rows" + (c.value === true ? " q-color-picker__palette-rows--editable" : "") }, A.value.map(K))];
  }
  return () => {
    let K = [q()];
    return e.name !== void 0 && e.disable !== true && w(K, "push"), e.noHeader !== true && K.unshift(oe()), e.noFooter !== true && K.push(te()), vue.h("div", { class: L.value, ...$.value }, K);
  };
} });
var jn = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function tm(e, t, o) {
  return Object.prototype.toString.call(e) === "[object Date]" && (o = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), ox(tc(e, t, o));
}
function ec(e, t, o) {
  return nm(tx(e, t, o));
}
function Jy(e) {
  return ex(e) === 0;
}
function Di(e, t) {
  return t <= 6 ? 31 : t <= 11 || Jy(e) ? 30 : 29;
}
function ex(e) {
  let t = jn.length, o = jn[0], n, r, i, a, l;
  if (e < o || e >= jn[t - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (l = 1; l < t && (n = jn[l], r = n - o, !(e < n)); l += 1)
    o = n;
  return a = e - o, r - a < 6 && (a = a - r + ht(r + 4, 33) * 33), i = po(po(a + 1, 33) - 1, 4), i === -1 && (i = 4), i;
}
function om(e, t) {
  let o = jn.length, n = e + 621, r = -14, i = jn[0], a, l, s, d, u;
  if (e < i || e >= jn[o - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (u = 1; u < o && (a = jn[u], l = a - i, !(e < a)); u += 1)
    r = r + ht(l, 33) * 8 + ht(po(l, 33), 4), i = a;
  d = e - i, r = r + ht(d, 33) * 8 + ht(po(d, 33) + 3, 4), po(l, 33) === 4 && l - d === 4 && (r += 1);
  let v = ht(n, 4) - ht((ht(n, 100) + 1) * 3, 4) - 150, f = 20 + r - v;
  return t || (l - d < 6 && (d = d - l + ht(l + 4, 33) * 33), s = po(po(d + 1, 33) - 1, 4), s === -1 && (s = 4)), { leap: s, gy: n, march: f };
}
function tx(e, t, o) {
  let n = om(e, true);
  return tc(n.gy, 3, n.march) + (t - 1) * 31 - ht(t, 7) * (t - 7) + o - 1;
}
function ox(e) {
  let t = nm(e).gy, o = t - 621, n, r, i, a = om(o, false), l = tc(t, 3, a.march);
  if (i = e - l, i >= 0) {
    if (i <= 185)
      return r = 1 + ht(i, 31), n = po(i, 31) + 1, { jy: o, jm: r, jd: n };
    i -= 186;
  } else
    o -= 1, i += 179, a.leap === 1 && (i += 1);
  return r = 7 + ht(i, 30), n = po(i, 30) + 1, { jy: o, jm: r, jd: n };
}
function tc(e, t, o) {
  let n = ht((e + ht(t - 8, 6) + 100100) * 1461, 4) + ht(153 * po(t + 9, 12) + 2, 5) + o - 34840408;
  return n = n - ht(ht(e + 100100 + ht(t - 8, 6), 100) * 3, 4) + 752, n;
}
function nm(e) {
  let t = 4 * e + 139361631;
  t = t + ht(ht(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  let o = ht(po(t, 1461), 4) * 5 + 308, n = ht(po(o, 153), 5) + 1, r = po(ht(o, 153), 12) + 1;
  return { gy: ht(t, 1461) - 100100 + ht(8 - r, 6), gm: r, gd: n };
}
function ht(e, t) {
  return ~~(e / t);
}
function po(e, t) {
  return e - ~~(e / t) * t;
}
var nx = ["gregorian", "persian"], Vi = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => nx.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, tu = ["update:modelValue"];
function Oo(e) {
  return e.year + "/" + Ze(e.month) + "/" + Ze(e.day);
}
function ou(e, t) {
  let o = vue.computed(() => e.disable !== true && e.readonly !== true), n = vue.computed(() => o.value === true ? 0 : -1), r = vue.computed(() => {
    let l = [];
    return e.color !== void 0 && l.push(`bg-${e.color}`), e.textColor !== void 0 && l.push(`text-${e.textColor}`), l.join(" ");
  });
  function i() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function a(l) {
    let s = new Date(), d = l === true ? null : 0;
    if (e.calendar === "persian") {
      let u = tm(s);
      return { year: u.jy, month: u.jm, day: u.jd };
    }
    return { year: s.getFullYear(), month: s.getMonth() + 1, day: s.getDate(), hour: d, minute: d, second: d, millisecond: d };
  }
  return { editable: o, tabindex: n, headerClass: r, getLocale: i, getCurrentDate: a };
}
var lm = 864e5, rx = 36e5, ic = 6e4, um = "YYYY-MM-DDTHH:mm:ss.SSSZ", ix = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, ax = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, nc = {};
function lx(e, t) {
  let o = "(" + t.days.join("|") + ")", n = e + o;
  if (nc[n] !== void 0)
    return nc[n];
  let r = "(" + t.daysShort.join("|") + ")", i = "(" + t.months.join("|") + ")", a = "(" + t.monthsShort.join("|") + ")", l = {}, s = 0, d = e.replace(ax, (v) => {
    switch (s++, v) {
      case "YY":
        return l.YY = s, "(-?\\d{1,2})";
      case "YYYY":
        return l.YYYY = s, "(-?\\d{1,4})";
      case "M":
        return l.M = s, "(\\d{1,2})";
      case "MM":
        return l.M = s, "(\\d{2})";
      case "MMM":
        return l.MMM = s, a;
      case "MMMM":
        return l.MMMM = s, i;
      case "D":
        return l.D = s, "(\\d{1,2})";
      case "Do":
        return l.D = s++, "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        return l.D = s, "(\\d{2})";
      case "H":
        return l.H = s, "(\\d{1,2})";
      case "HH":
        return l.H = s, "(\\d{2})";
      case "h":
        return l.h = s, "(\\d{1,2})";
      case "hh":
        return l.h = s, "(\\d{2})";
      case "m":
        return l.m = s, "(\\d{1,2})";
      case "mm":
        return l.m = s, "(\\d{2})";
      case "s":
        return l.s = s, "(\\d{1,2})";
      case "ss":
        return l.s = s, "(\\d{2})";
      case "S":
        return l.S = s, "(\\d{1})";
      case "SS":
        return l.S = s, "(\\d{2})";
      case "SSS":
        return l.S = s, "(\\d{3})";
      case "A":
        return l.A = s, "(AM|PM)";
      case "a":
        return l.a = s, "(am|pm)";
      case "aa":
        return l.aa = s, "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return r;
      case "dddd":
        return o;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "w":
        return "(\\d{1,2})";
      case "ww":
        return "(\\d{2})";
      case "Z":
        return l.Z = s, "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return l.ZZ = s, "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        return l.X = s, "(-?\\d+)";
      case "x":
        return l.x = s, "(-?\\d{4,})";
      default:
        return s--, v[0] === "[" && (v = v.substring(1, v.length - 1)), v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), u = { map: l, regex: new RegExp("^" + d) };
  return nc[n] = u, u;
}
function sm(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : fa.date;
}
function rm(e, t = "") {
  let o = e > 0 ? "-" : "+", n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
  return o + Ze(r) + t + Ze(i);
}
function Un(e, t, o, n, r) {
  let i = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (r !== void 0 && Object.assign(i, r), e == null || e === "" || typeof e != "string")
    return i;
  t === void 0 && (t = um);
  let a = sm(o, Bn.props), l = a.months, s = a.monthsShort, { regex: d, map: u } = lx(t, a), v = e.match(d);
  if (v === null)
    return i;
  let f = "";
  if (u.X !== void 0 || u.x !== void 0) {
    let c = parseInt(v[u.X !== void 0 ? u.X : u.x], 10);
    if (isNaN(c) === true || c < 0)
      return i;
    let m = new Date(c * (u.X !== void 0 ? 1e3 : 1));
    i.year = m.getFullYear(), i.month = m.getMonth() + 1, i.day = m.getDate(), i.hour = m.getHours(), i.minute = m.getMinutes(), i.second = m.getSeconds(), i.millisecond = m.getMilliseconds();
  } else {
    if (u.YYYY !== void 0)
      i.year = parseInt(v[u.YYYY], 10);
    else if (u.YY !== void 0) {
      let c = parseInt(v[u.YY], 10);
      i.year = c < 0 ? c : 2e3 + c;
    }
    if (u.M !== void 0) {
      if (i.month = parseInt(v[u.M], 10), i.month < 1 || i.month > 12)
        return i;
    } else
      u.MMM !== void 0 ? i.month = s.indexOf(v[u.MMM]) + 1 : u.MMMM !== void 0 && (i.month = l.indexOf(v[u.MMMM]) + 1);
    if (u.D !== void 0) {
      if (i.day = parseInt(v[u.D], 10), i.year === null || i.month === null || i.day < 1)
        return i;
      let c = n !== "persian" ? new Date(i.year, i.month, 0).getDate() : Di(i.year, i.month);
      if (i.day > c)
        return i;
    }
    u.H !== void 0 ? i.hour = parseInt(v[u.H], 10) % 24 : u.h !== void 0 && (i.hour = parseInt(v[u.h], 10) % 12, (u.A && v[u.A] === "PM" || u.a && v[u.a] === "pm" || u.aa && v[u.aa] === "p.m.") && (i.hour += 12), i.hour = i.hour % 24), u.m !== void 0 && (i.minute = parseInt(v[u.m], 10) % 60), u.s !== void 0 && (i.second = parseInt(v[u.s], 10) % 60), u.S !== void 0 && (i.millisecond = parseInt(v[u.S], 10) * 10 ** (3 - v[u.S].length)), (u.Z !== void 0 || u.ZZ !== void 0) && (f = u.Z !== void 0 ? v[u.Z].replace(":", "") : v[u.ZZ], i.timezoneOffset = (f[0] === "+" ? -1 : 1) * (60 * f.slice(1, 3) + 1 * f.slice(3, 5)));
  }
  return i.dateHash = Ze(i.year, 6) + "/" + Ze(i.month) + "/" + Ze(i.day), i.timeHash = Ze(i.hour) + ":" + Ze(i.minute) + ":" + Ze(i.second) + f, i;
}
function ac(e) {
  let t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  let o = new Date(t.getFullYear(), 0, 4);
  o.setDate(o.getDate() - (o.getDay() + 6) % 7 + 3);
  let n = t.getTimezoneOffset() - o.getTimezoneOffset();
  t.setHours(t.getHours() - n);
  let r = (t - o) / (lm * 7);
  return 1 + Math.floor(r);
}
function nn(e, t, o) {
  let n = new Date(e), r = `set${o === true ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      n[`${r}Month`](0);
    case "month":
    case "months":
      n[`${r}Date`](1);
    case "day":
    case "days":
    case "date":
      n[`${r}Hours`](0);
    case "hour":
    case "hours":
      n[`${r}Minutes`](0);
    case "minute":
    case "minutes":
      n[`${r}Seconds`](0);
    case "second":
    case "seconds":
      n[`${r}Milliseconds`](0);
  }
  return n;
}
function nu(e, t, o) {
  return (e.getTime() - e.getTimezoneOffset() * ic - (t.getTime() - t.getTimezoneOffset() * ic)) / o;
}
function ru(e, t, o = "days") {
  let n = new Date(e), r = new Date(t);
  switch (o) {
    case "years":
    case "year":
      return n.getFullYear() - r.getFullYear();
    case "months":
    case "month":
      return (n.getFullYear() - r.getFullYear()) * 12 + n.getMonth() - r.getMonth();
    case "days":
    case "day":
    case "date":
      return nu(nn(n, "day"), nn(r, "day"), lm);
    case "hours":
    case "hour":
      return nu(nn(n, "hour"), nn(r, "hour"), rx);
    case "minutes":
    case "minute":
      return nu(nn(n, "minute"), nn(r, "minute"), ic);
    case "seconds":
    case "second":
      return nu(nn(n, "second"), nn(r, "second"), 1e3);
  }
}
function lc(e) {
  return ru(e, nn(e, "year"), "days") + 1;
}
function im(e) {
  if (e >= 11 && e <= 13)
    return `${e}th`;
  switch (e % 10) {
    case 1:
      return `${e}st`;
    case 2:
      return `${e}nd`;
    case 3:
      return `${e}rd`;
  }
  return `${e}th`;
}
var am = { YY(e, t, o) {
  let n = this.YYYY(e, t, o) % 100;
  return n >= 0 ? Ze(n) : "-" + Ze(Math.abs(n));
}, YYYY(e, t, o) {
  return o ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, MM(e) {
  return Ze(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return im(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return im(e.getDate());
}, DD(e) {
  return Ze(e.getDate());
}, DDD(e) {
  return lc(e);
}, DDDD(e) {
  return Ze(lc(e), 3);
}, d(e) {
  return e.getDay();
}, dd(e, t) {
  return this.dddd(e, t).slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return ac(e);
}, ww(e) {
  return Ze(ac(e));
}, H(e) {
  return e.getHours();
}, HH(e) {
  return Ze(e.getHours());
}, h(e) {
  let t = e.getHours();
  return t === 0 ? 12 : t > 12 ? t % 12 : t;
}, hh(e) {
  return Ze(this.h(e));
}, m(e) {
  return e.getMinutes();
}, mm(e) {
  return Ze(e.getMinutes());
}, s(e) {
  return e.getSeconds();
}, ss(e) {
  return Ze(e.getSeconds());
}, S(e) {
  return Math.floor(e.getMilliseconds() / 100);
}, SS(e) {
  return Ze(Math.floor(e.getMilliseconds() / 10));
}, SSS(e) {
  return Ze(e.getMilliseconds(), 3);
}, A(e) {
  return this.H(e) < 12 ? "AM" : "PM";
}, a(e) {
  return this.H(e) < 12 ? "am" : "pm";
}, aa(e) {
  return this.H(e) < 12 ? "a.m." : "p.m.";
}, Z(e, t, o, n) {
  let r = n ?? e.getTimezoneOffset();
  return rm(r, ":");
}, ZZ(e, t, o, n) {
  let r = n ?? e.getTimezoneOffset();
  return rm(r);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function Ra(e, t, o, n, r) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0)
    return;
  let i = new Date(e);
  if (isNaN(i))
    return;
  t === void 0 && (t = um);
  let a = sm(o, Bn.props);
  return t.replace(ix, (l, s) => l in am ? am[l](i, a, n, r) : s === void 0 ? l : s.split("\\]").join("]"));
}
var _r = 20, Tx = ["Calendar", "Years", "Months"], mm = (e) => Tx.includes(e), cc = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), zi = " \u2014 ";
function Kn(e) {
  return e.year + "/" + Ze(e.month);
}
var vm = M({ name: "QDate", props: { ...Vi, ...bt, ...pe, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Vi.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: cc }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: cc }, navigationMaxYearMonth: { type: String, validator: cc }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: mm } }, emits: [...tu, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = he(e, r), { getCache: a } = zo(), { tabindex: l, headerClass: s, getLocale: d, getCurrentDate: u } = ou(e, r), v, f = Jo(e), c = Wt(f), m = vue.ref(null), y = vue.ref(tt()), h = vue.ref(d()), w = vue.computed(() => tt()), b = vue.computed(() => d()), p = vue.computed(() => u()), g = vue.ref(lt(y.value, h.value)), x = vue.ref(e.defaultView), P = vue.computed(() => r.lang.rtl === true ? "right" : "left"), A = vue.ref(P.value), L = vue.ref(P.value), $ = g.value.year, R = vue.ref($ - $ % _r - ($ < 0 ? _r : 0)), B = vue.ref(null), k = vue.computed(() => {
    let T = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${T} q-date--${T}-${e.minimal === true ? "minimal" : "standard"}` + (i.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), S = vue.computed(() => e.color || "primary"), C = vue.computed(() => e.textColor || "white"), U = vue.computed(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), j = vue.computed(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), E = vue.computed(() => j.value.filter((T) => typeof T == "string").map((T) => at(T, y.value, h.value)).filter((T) => T.dateHash !== null && T.day !== null && T.month !== null && T.year !== null)), D = vue.computed(() => {
    let T = (I) => at(I, y.value, h.value);
    return j.value.filter((I) => st(I) === true && I.from !== void 0 && I.to !== void 0).map((I) => ({ from: T(I.from), to: T(I.to) })).filter((I) => I.from.dateHash !== null && I.to.dateHash !== null && I.from.dateHash < I.to.dateHash);
  }), Q = vue.computed(() => e.calendar !== "persian" ? (T) => new Date(T.year, T.month - 1, T.day) : (T) => {
    let I = ec(T.year, T.month, T.day);
    return new Date(I.gy, I.gm - 1, I.gd);
  }), ie = vue.computed(() => e.calendar === "persian" ? Oo : (T, I, X) => Ra(new Date(T.year, T.month - 1, T.day, T.hour, T.minute, T.second, T.millisecond), I === void 0 ? y.value : I, X === void 0 ? h.value : X, T.year, T.timezoneOffset)), z = vue.computed(() => E.value.length + D.value.reduce((T, I) => T + 1 + ru(Q.value(I.to), Q.value(I.from)), 0)), _ = vue.computed(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0)
      return e.title;
    if (B.value !== null) {
      let X = B.value.init, de = Q.value(X);
      return h.value.daysShort[de.getDay()] + ", " + h.value.monthsShort[X.month - 1] + " " + X.day + zi + "?";
    }
    if (z.value === 0)
      return zi;
    if (z.value > 1)
      return `${z.value} ${h.value.pluralDay}`;
    let T = E.value[0], I = Q.value(T);
    return isNaN(I.valueOf()) === true ? zi : h.value.headerTitle !== void 0 ? h.value.headerTitle(I, T) : h.value.daysShort[I.getDay()] + ", " + h.value.monthsShort[T.month - 1] + " " + T.day;
  }), N = vue.computed(() => E.value.concat(D.value.map((I) => I.from)).sort((I, X) => I.year - X.year || I.month - X.month)[0]), H = vue.computed(() => E.value.concat(D.value.map((I) => I.to)).sort((I, X) => X.year - I.year || X.month - I.month)[0]), oe = vue.computed(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0)
      return e.subtitle;
    if (z.value === 0)
      return zi;
    if (z.value > 1) {
      let T = N.value, I = H.value, X = h.value.monthsShort;
      return X[T.month - 1] + (T.year !== I.year ? " " + T.year + zi + X[I.month - 1] + " " : T.month !== I.month ? zi + X[I.month - 1] : "") + " " + I.year;
    }
    return E.value[0].year;
  }), q = vue.computed(() => {
    let T = [r.iconSet.datetime.arrowLeft, r.iconSet.datetime.arrowRight];
    return r.lang.rtl === true ? T.reverse() : T;
  }), V = vue.computed(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : h.value.firstDayOfWeek), te = vue.computed(() => {
    let T = h.value.daysShort, I = V.value;
    return I > 0 ? T.slice(I, 7).concat(T.slice(0, I)) : T;
  }), O = vue.computed(() => {
    let T = g.value;
    return e.calendar !== "persian" ? new Date(T.year, T.month, 0).getDate() : Di(T.year, T.month);
  }), ue = vue.computed(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), Se = vue.computed(() => {
    if (e.navigationMinYearMonth === void 0)
      return null;
    let T = e.navigationMinYearMonth.split("/");
    return { year: parseInt(T[0], 10), month: parseInt(T[1], 10) };
  }), K = vue.computed(() => {
    if (e.navigationMaxYearMonth === void 0)
      return null;
    let T = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(T[0], 10), month: parseInt(T[1], 10) };
  }), ae = vue.computed(() => {
    let T = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return Se.value !== null && Se.value.year >= g.value.year && (T.year.prev = false, Se.value.year === g.value.year && Se.value.month >= g.value.month && (T.month.prev = false)), K.value !== null && K.value.year <= g.value.year && (T.year.next = false, K.value.year === g.value.year && K.value.month <= g.value.month && (T.month.next = false)), T;
  }), ce = vue.computed(() => {
    let T = {};
    return E.value.forEach((I) => {
      let X = Kn(I);
      T[X] === void 0 && (T[X] = []), T[X].push(I.day);
    }), T;
  }), be = vue.computed(() => {
    let T = {};
    return D.value.forEach((I) => {
      let X = Kn(I.from), de = Kn(I.to);
      if (T[X] === void 0 && (T[X] = []), T[X].push({ from: I.from.day, to: X === de ? I.to.day : void 0, range: I }), X < de) {
        let fe, { year: Je, month: ke } = I.from, Ke = ke < 12 ? { year: Je, month: ke + 1 } : { year: Je + 1, month: 1 };
        for (; (fe = Kn(Ke)) <= de; )
          T[fe] === void 0 && (T[fe] = []), T[fe].push({ from: void 0, to: fe === de ? I.to.day : void 0, range: I }), Ke.month++, Ke.month > 12 && (Ke.year++, Ke.month = 1);
      }
    }), T;
  }), Te = vue.computed(() => {
    if (B.value === null)
      return;
    let { init: T, initHash: I, final: X, finalHash: de } = B.value, [fe, Je] = I <= de ? [T, X] : [X, T], ke = Kn(fe), Ke = Kn(Je);
    if (ke !== le.value && Ke !== le.value)
      return;
    let ot = {};
    return ke === le.value ? (ot.from = fe.day, ot.includeFrom = true) : ot.from = 1, Ke === le.value ? (ot.to = Je.day, ot.includeTo = true) : ot.to = O.value, ot;
  }), le = vue.computed(() => Kn(g.value)), Me = vue.computed(() => {
    let T = {};
    if (e.options === void 0) {
      for (let X = 1; X <= O.value; X++)
        T[X] = true;
      return T;
    }
    let I = typeof e.options == "function" ? e.options : (X) => e.options.includes(X);
    for (let X = 1; X <= O.value; X++) {
      let de = le.value + "/" + Ze(X);
      T[X] = I(de);
    }
    return T;
  }), Le = vue.computed(() => {
    let T = {};
    if (e.events === void 0)
      for (let I = 1; I <= O.value; I++)
        T[I] = false;
    else {
      let I = typeof e.events == "function" ? e.events : (X) => e.events.includes(X);
      for (let X = 1; X <= O.value; X++) {
        let de = le.value + "/" + Ze(X);
        T[X] = I(de) === true && ue.value(de);
      }
    }
    return T;
  }), Fe = vue.computed(() => {
    let T, I, { year: X, month: de } = g.value;
    if (e.calendar !== "persian")
      T = new Date(X, de - 1, 1), I = new Date(X, de - 1, 0).getDate();
    else {
      let fe = ec(X, de, 1);
      T = new Date(fe.gy, fe.gm - 1, fe.gd);
      let Je = de - 1, ke = X;
      Je === 0 && (Je = 12, ke--), I = Di(ke, Je);
    }
    return { days: T.getDay() - V.value - 1, endDay: I };
  }), ne = vue.computed(() => {
    let T = [], { days: I, endDay: X } = Fe.value, de = I < 0 ? I + 7 : I;
    if (de < 6)
      for (let ke = X - de; ke <= X; ke++)
        T.push({ i: ke, fill: true });
    let fe = T.length;
    for (let ke = 1; ke <= O.value; ke++) {
      let Ke = { i: ke, event: Le.value[ke], classes: [] };
      Me.value[ke] === true && (Ke.in = true, Ke.flat = true), T.push(Ke);
    }
    if (ce.value[le.value] !== void 0 && ce.value[le.value].forEach((ke) => {
      let Ke = fe + ke - 1;
      Object.assign(T[Ke], { selected: true, unelevated: true, flat: false, color: S.value, textColor: C.value });
    }), be.value[le.value] !== void 0 && be.value[le.value].forEach((ke) => {
      if (ke.from !== void 0) {
        let Ke = fe + ke.from - 1, ot = fe + (ke.to || O.value) - 1;
        for (let xo = Ke; xo <= ot; xo++)
          Object.assign(T[xo], { range: ke.range, unelevated: true, color: S.value, textColor: C.value });
        Object.assign(T[Ke], { rangeFrom: true, flat: false }), ke.to !== void 0 && Object.assign(T[ot], { rangeTo: true, flat: false });
      } else if (ke.to !== void 0) {
        let Ke = fe + ke.to - 1;
        for (let ot = fe; ot <= Ke; ot++)
          Object.assign(T[ot], { range: ke.range, unelevated: true, color: S.value, textColor: C.value });
        Object.assign(T[Ke], { flat: false, rangeTo: true });
      } else {
        let Ke = fe + O.value - 1;
        for (let ot = fe; ot <= Ke; ot++)
          Object.assign(T[ot], { range: ke.range, unelevated: true, color: S.value, textColor: C.value });
      }
    }), Te.value !== void 0) {
      let ke = fe + Te.value.from - 1, Ke = fe + Te.value.to - 1;
      for (let ot = ke; ot <= Ke; ot++)
        T[ot].color = S.value, T[ot].editRange = true;
      Te.value.includeFrom === true && (T[ke].editRangeFrom = true), Te.value.includeTo === true && (T[Ke].editRangeTo = true);
    }
    g.value.year === p.value.year && g.value.month === p.value.month && (T[fe + p.value.day - 1].today = true);
    let Je = T.length % 7;
    if (Je > 0) {
      let ke = 7 - Je;
      for (let Ke = 1; Ke <= ke; Ke++)
        T.push({ i: Ke, fill: true });
    }
    return T.forEach((ke) => {
      let Ke = "q-date__calendar-item ";
      ke.fill === true ? Ke += "q-date__calendar-item--fill" : (Ke += `q-date__calendar-item--${ke.in === true ? "in" : "out"}`, ke.range !== void 0 && (Ke += ` q-date__range${ke.rangeTo === true ? "-to" : ke.rangeFrom === true ? "-from" : ""}`), ke.editRange === true && (Ke += ` q-date__edit-range${ke.editRangeFrom === true ? "-from" : ""}${ke.editRangeTo === true ? "-to" : ""}`), (ke.range !== void 0 || ke.editRange === true) && (Ke += ` text-${ke.color}`)), ke.classes = Ke;
    }), T;
  }), se = vue.computed(() => e.disable === true ? { "aria-disabled": "true" } : {});
  vue.watch(() => e.modelValue, (T) => {
    if (v === T)
      v = 0;
    else {
      let I = lt(y.value, h.value);
      Ye(I.year, I.month, I);
    }
  }), vue.watch(x, () => {
    m.value !== null && n.$el.contains(document.activeElement) === true && m.value.focus();
  }), vue.watch(() => g.value.year + "|" + g.value.month, () => {
    o("navigation", { year: g.value.year, month: g.value.month });
  }), vue.watch(w, (T) => {
    Z(T, h.value, "mask"), y.value = T;
  }), vue.watch(b, (T) => {
    Z(y.value, T, "locale"), h.value = T;
  });
  function Y() {
    let { year: T, month: I, day: X } = p.value, de = { ...g.value, year: T, month: I, day: X }, fe = ce.value[Kn(de)];
    (fe === void 0 || fe.includes(de.day) === false) && gn(de), Ae(de.year, de.month);
  }
  function me(T) {
    mm(T) === true && (x.value = T);
  }
  function Pe(T, I) {
    ["month", "year"].includes(T) && (T === "month" ? re : W)(I === true ? -1 : 1);
  }
  function Ae(T, I) {
    x.value = "Calendar", Ye(T, I);
  }
  function Re(T, I) {
    if (e.range === false || !T) {
      B.value = null;
      return;
    }
    let X = Object.assign({ ...g.value }, T), de = I !== void 0 ? Object.assign({ ...g.value }, I) : X;
    B.value = { init: X, initHash: Oo(X), final: de, finalHash: Oo(de) }, Ae(X.year, X.month);
  }
  function tt() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function at(T, I, X) {
    return Un(T, I, X, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function lt(T, I) {
    let X = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (X.length === 0)
      return G();
    let de = X[X.length - 1], fe = at(de.from !== void 0 ? de.from : de, T, I);
    return fe.dateHash === null ? G() : fe;
  }
  function G() {
    let T, I;
    if (e.defaultYearMonth !== void 0) {
      let X = e.defaultYearMonth.split("/");
      T = parseInt(X[0], 10), I = parseInt(X[1], 10);
    } else {
      let X = p.value !== void 0 ? p.value : u();
      T = X.year, I = X.month;
    }
    return { year: T, month: I, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: T + "/" + Ze(I) + "/01" };
  }
  function re(T) {
    let I = g.value.year, X = Number(g.value.month) + T;
    X === 13 ? (X = 1, I++) : X === 0 && (X = 12, I--), Ye(I, X), U.value === true && vt("month");
  }
  function W(T) {
    let I = Number(g.value.year) + T;
    Ye(I, g.value.month), U.value === true && vt("year");
  }
  function ee(T) {
    Ye(T, g.value.month), x.value = e.defaultView === "Years" ? "Months" : "Calendar", U.value === true && vt("year");
  }
  function we(T) {
    Ye(g.value.year, T), x.value = "Calendar", U.value === true && vt("month");
  }
  function Ve(T, I) {
    let X = ce.value[I];
    (X !== void 0 && X.includes(T.day) === true ? Ko : gn)(T);
  }
  function ye(T) {
    return { year: T.year, month: T.month, day: T.day };
  }
  function Ye(T, I, X) {
    if (Se.value !== null && T <= Se.value.year && ((I < Se.value.month || T < Se.value.year) && (I = Se.value.month), T = Se.value.year), K.value !== null && T >= K.value.year && ((I > K.value.month || T > K.value.year) && (I = K.value.month), T = K.value.year), X !== void 0) {
      let { hour: fe, minute: Je, second: ke, millisecond: Ke, timezoneOffset: ot, timeHash: xo } = X;
      Object.assign(g.value, { hour: fe, minute: Je, second: ke, millisecond: Ke, timezoneOffset: ot, timeHash: xo });
    }
    let de = T + "/" + Ze(I) + "/01";
    de !== g.value.dateHash && (A.value = g.value.dateHash < de === P.value, T !== g.value.year && (L.value = A.value), vue.nextTick(() => {
      R.value = T - T % _r - (T < 0 ? _r : 0), Object.assign(g.value, { year: T, month: I, day: 1, dateHash: de });
    }));
  }
  function ct(T, I, X) {
    let de = T !== null && T.length === 1 && e.multiple === false ? T[0] : T;
    v = de;
    let { reason: fe, details: Je } = Gt(I, X);
    o("update:modelValue", de, fe, Je);
  }
  function vt(T) {
    let I = E.value[0] !== void 0 && E.value[0].dateHash !== null ? { ...E.value[0] } : { ...g.value };
    vue.nextTick(() => {
      I.year = g.value.year, I.month = g.value.month;
      let X = e.calendar !== "persian" ? new Date(I.year, I.month, 0).getDate() : Di(I.year, I.month);
      I.day = Math.min(Math.max(1, I.day), X);
      let de = yo(I);
      v = de;
      let { details: fe } = Gt("", I);
      o("update:modelValue", de, T, fe);
    });
  }
  function Gt(T, I) {
    return I.from !== void 0 ? { reason: `${T}-range`, details: { ...ye(I.target), from: ye(I.from), to: ye(I.to) } } : { reason: `${T}-day`, details: ye(I) };
  }
  function yo(T, I, X) {
    return T.from !== void 0 ? { from: ie.value(T.from, I, X), to: ie.value(T.to, I, X) } : ie.value(T, I, X);
  }
  function gn(T) {
    let I;
    if (e.multiple === true)
      if (T.from !== void 0) {
        let X = Oo(T.from), de = Oo(T.to), fe = E.value.filter((ke) => ke.dateHash < X || ke.dateHash > de), Je = D.value.filter(({ from: ke, to: Ke }) => Ke.dateHash < X || ke.dateHash > de);
        I = fe.concat(Je).concat(T).map((ke) => yo(ke));
      } else {
        let X = j.value.slice();
        X.push(yo(T)), I = X;
      }
    else
      I = yo(T);
    ct(I, "add", T);
  }
  function Ko(T) {
    if (e.noUnset === true)
      return;
    let I = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      let X = yo(T);
      T.from !== void 0 ? I = e.modelValue.filter((de) => de.from !== void 0 ? de.from !== X.from && de.to !== X.to : true) : I = e.modelValue.filter((de) => de !== X), I.length === 0 && (I = null);
    }
    ct(I, "remove", T);
  }
  function Z(T, I, X) {
    let de = E.value.concat(D.value).map((fe) => yo(fe, T, I)).filter((fe) => fe.from !== void 0 ? fe.from.dateHash !== null && fe.to.dateHash !== null : fe.dateHash !== null);
    o("update:modelValue", (e.multiple === true ? de : de[0]) || null, X);
  }
  function ve() {
    if (e.minimal !== true)
      return vue.h("div", { class: "q-date__header " + s.value }, [vue.h("div", { class: "relative-position" }, [vue.h(vue.Transition, { name: "q-transition--fade" }, () => vue.h("div", { key: "h-yr-" + oe.value, class: "q-date__header-subtitle q-date__header-link " + (x.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: l.value, ...a("vY", { onClick() {
        x.value = "Years";
      }, onKeyup(T) {
        T.keyCode === 13 && (x.value = "Years");
      } }) }, [oe.value]))]), vue.h("div", { class: "q-date__header-title relative-position flex no-wrap" }, [vue.h("div", { class: "relative-position col" }, [vue.h(vue.Transition, { name: "q-transition--fade" }, () => vue.h("div", { key: "h-sub" + _.value, class: "q-date__header-title-label q-date__header-link " + (x.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: l.value, ...a("vC", { onClick() {
        x.value = "Calendar";
      }, onKeyup(T) {
        T.keyCode === 13 && (x.value = "Calendar");
      } }) }, [_.value]))]), e.todayBtn === true ? vue.h(Be, { class: "q-date__header-today self-start", icon: r.iconSet.datetime.today, flat: true, size: "sm", round: true, tabindex: l.value, onClick: Y }) : null])]);
  }
  function Ce({ label: T, type: I, key: X, dir: de, goTo: fe, boundaries: Je, cls: ke }) {
    return [vue.h("div", { class: "row items-center q-date__arrow" }, [vue.h(Be, { round: true, dense: true, size: "sm", flat: true, icon: q.value[0], tabindex: l.value, disable: Je.prev === false, ...a("go-#" + I, { onClick() {
      fe(-1);
    } }) })]), vue.h("div", { class: "relative-position overflow-hidden flex flex-center" + ke }, [vue.h(vue.Transition, { name: "q-transition--jump-" + de }, () => vue.h("div", { key: X }, [vue.h(Be, { flat: true, dense: true, noCaps: true, label: T, tabindex: l.value, ...a("view#" + I, { onClick: () => {
      x.value = I;
    } }) })]))]), vue.h("div", { class: "row items-center q-date__arrow" }, [vue.h(Be, { round: true, dense: true, size: "sm", flat: true, icon: q.value[1], tabindex: l.value, disable: Je.next === false, ...a("go+#" + I, { onClick() {
      fe(1);
    } }) })])];
  }
  let $e = { Calendar: () => [vue.h("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [vue.h("div", { class: "q-date__navigation row items-center no-wrap" }, Ce({ label: h.value.months[g.value.month - 1], type: "Months", key: g.value.month, dir: A.value, goTo: re, boundaries: ae.value.month, cls: " col" }).concat(Ce({ label: g.value.year, type: "Years", key: g.value.year, dir: L.value, goTo: W, boundaries: ae.value.year, cls: "" }))), vue.h("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, te.value.map((T) => vue.h("div", { class: "q-date__calendar-item" }, [vue.h("div", T)]))), vue.h("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [vue.h(vue.Transition, { name: "q-transition--slide-" + A.value }, () => vue.h("div", { key: le.value, class: "q-date__calendar-days fit" }, ne.value.map((T) => vue.h("div", { class: T.classes }, [T.in === true ? vue.h(Be, { class: T.today === true ? "q-date__today" : "", dense: true, flat: T.flat, unelevated: T.unelevated, color: T.color, textColor: T.textColor, label: T.i, tabindex: l.value, ...a("day#" + T.i, { onClick: () => {
    He(T.i);
  }, onMouseover: () => {
    gt(T.i);
  } }) }, T.event !== false ? () => vue.h("div", { class: "q-date__event bg-" + T.event }) : null) : vue.h("div", "" + T.i)]))))])])], Months() {
    let T = g.value.year === p.value.year, I = (de) => Se.value !== null && g.value.year === Se.value.year && Se.value.month > de || K.value !== null && g.value.year === K.value.year && K.value.month < de, X = h.value.monthsShort.map((de, fe) => {
      let Je = g.value.month === fe + 1;
      return vue.h("div", { class: "q-date__months-item flex flex-center" }, [vue.h(Be, { class: T === true && p.value.month === fe + 1 ? "q-date__today" : null, flat: Je !== true, label: de, unelevated: Je, color: Je === true ? S.value : null, textColor: Je === true ? C.value : null, tabindex: l.value, disable: I(fe + 1), ...a("month#" + fe, { onClick: () => {
        we(fe + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && X.unshift(vue.h("div", { class: "row no-wrap full-width" }, [Ce({ label: g.value.year, type: "Years", key: g.value.year, dir: L.value, goTo: W, boundaries: ae.value.year, cls: " col" })])), vue.h("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, X);
  }, Years() {
    let T = R.value, I = T + _r, X = [], de = (fe) => Se.value !== null && Se.value.year > fe || K.value !== null && K.value.year < fe;
    for (let fe = T; fe <= I; fe++) {
      let Je = g.value.year === fe;
      X.push(vue.h("div", { class: "q-date__years-item flex flex-center" }, [vue.h(Be, { key: "yr" + fe, class: p.value.year === fe ? "q-date__today" : null, flat: !Je, label: fe, dense: true, unelevated: Je, color: Je === true ? S.value : null, textColor: Je === true ? C.value : null, tabindex: l.value, disable: de(fe), ...a("yr#" + fe, { onClick: () => {
        ee(fe);
      } }) })]));
    }
    return vue.h("div", { class: "q-date__view q-date__years flex flex-center" }, [vue.h("div", { class: "col-auto" }, [vue.h(Be, { round: true, dense: true, flat: true, icon: q.value[0], tabindex: l.value, disable: de(T), ...a("y-", { onClick: () => {
      R.value -= _r;
    } }) })]), vue.h("div", { class: "q-date__years-content col self-stretch row items-center" }, X), vue.h("div", { class: "col-auto" }, [vue.h(Be, { round: true, dense: true, flat: true, icon: q.value[1], tabindex: l.value, disable: de(I), ...a("y+", { onClick: () => {
      R.value += _r;
    } }) })])]);
  } };
  function He(T) {
    let I = { ...g.value, day: T };
    if (e.range === false) {
      Ve(I, le.value);
      return;
    }
    if (B.value === null) {
      let X = ne.value.find((fe) => fe.fill !== true && fe.i === T);
      if (e.noUnset !== true && X.range !== void 0) {
        Ko({ target: I, from: X.range.from, to: X.range.to });
        return;
      }
      if (X.selected === true) {
        Ko(I);
        return;
      }
      let de = Oo(I);
      B.value = { init: I, initHash: de, final: I, finalHash: de }, o("rangeStart", ye(I));
    } else {
      let X = B.value.initHash, de = Oo(I), fe = X <= de ? { from: B.value.init, to: I } : { from: I, to: B.value.init };
      B.value = null, gn(X === de ? I : { target: I, ...fe }), o("rangeEnd", { from: ye(fe.from), to: ye(fe.to) });
    }
  }
  function gt(T) {
    if (B.value !== null) {
      let I = { ...g.value, day: T };
      Object.assign(B.value, { final: I, finalHash: Oo(I) });
    }
  }
  return Object.assign(n, { setToday: Y, setView: me, offsetCalendar: Pe, setCalendarTo: Ae, setEditingRange: Re }), () => {
    let T = [vue.h("div", { class: "q-date__content col relative-position" }, [vue.h(vue.Transition, { name: "q-transition--fade" }, $e[x.value])])], I = J(t.default);
    return I !== void 0 && T.push(vue.h("div", { class: "q-date__actions" }, I)), e.name !== void 0 && e.disable !== true && c(T, "push"), vue.h("div", { class: k.value, ...se.value }, [ve(), vue.h("div", { ref: m, class: "q-date__main col column", tabindex: -1 }, T)]);
  };
} });
function iu(e, t, o) {
  let n;
  function r() {
    n !== void 0 && ($n.remove(n), n = void 0);
  }
  return vue.onBeforeUnmount(() => {
    e.value === true && r();
  }), { removeFromHistory: r, addToHistory() {
    n = { condition: () => o.value === true, handler: t }, $n.add(n);
  } };
}
var $a = 0, dc, fc, Ba, mc = false, gm, pm, hm, wr = null;
function Px(e) {
  Rx(e) && qe(e);
}
function Rx(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return true;
  let t = xs(e), o = e.shiftKey && !e.deltaX, n = !o && Math.abs(e.deltaX) <= Math.abs(e.deltaY), r = o || n ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    if (Hs(a, n))
      return n ? r < 0 && a.scrollTop === 0 ? true : r > 0 && a.scrollTop + a.clientHeight === a.scrollHeight : r < 0 && a.scrollLeft === 0 ? true : r > 0 && a.scrollLeft + a.clientWidth === a.scrollWidth;
  }
  return true;
}
function bm(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function au(e) {
  mc !== true && (mc = true, requestAnimationFrame(() => {
    mc = false;
    let { height: t } = e.target, { clientHeight: o, scrollTop: n } = document.scrollingElement;
    (Ba === void 0 || t !== window.innerHeight) && (Ba = o - t, document.scrollingElement.scrollTop = n), n > Ba && (document.scrollingElement.scrollTop -= Math.ceil((n - Ba) / 8));
  }));
}
function ym(e) {
  let t = document.body, o = window.visualViewport !== void 0;
  if (e === "add") {
    let { overflowY: n, overflowX: r } = window.getComputedStyle(t);
    dc = ai(window), fc = Ro(window), gm = t.style.left, pm = t.style.top, hm = window.location.href, t.style.left = `-${dc}px`, t.style.top = `-${fc}px`, r !== "hidden" && (r === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), n !== "hidden" && (n === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, rt.is.ios === true && (o === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", au, Ge.passiveCapture), window.visualViewport.addEventListener("scroll", au, Ge.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", bm, Ge.passiveCapture));
  }
  rt.is.desktop === true && rt.is.mac === true && window[`${e}EventListener`]("wheel", Px, Ge.notPassive), e === "remove" && (rt.is.ios === true && (o === true ? (window.visualViewport.removeEventListener("resize", au, Ge.passiveCapture), window.visualViewport.removeEventListener("scroll", au, Ge.passiveCapture)) : window.removeEventListener("scroll", bm, Ge.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = gm, t.style.top = pm, window.location.href === hm && window.scrollTo(dc, fc), Ba = void 0);
}
function La(e) {
  let t = "add";
  if (e === true) {
    if ($a++, wr !== null) {
      clearTimeout(wr), wr = null;
      return;
    }
    if ($a > 1)
      return;
  } else {
    if ($a === 0 || ($a--, $a > 0))
      return;
    if (t = "remove", rt.is.ios === true && rt.is.nativeMobile === true) {
      wr !== null && clearTimeout(wr), wr = setTimeout(() => {
        ym(t), wr = null;
      }, 100);
      return;
    }
  }
  ym(t);
}
function lu() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, La(t));
  } };
}
var uu = 0, $x = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, _m = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, rn = M({ name: "QDialog", inheritAttrs: false, props: { ...ko, ...Po, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...qo, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: o, attrs: n }) {
  let r = vue.getCurrentInstance(), i = vue.ref(null), a = vue.ref(false), l = vue.ref(false), s = null, d = null, u, v, f = vue.computed(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: c } = lu(), { registerTimeout: m } = Jt(), { registerTick: y, removeTick: h } = Do(), { transitionProps: w, transitionStyle: b } = zn(e, () => _m[e.position][0], () => _m[e.position][1]);
  vue.computed(() => b.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : ""));
  let { showPortal: g, hidePortal: x, portalIsAccessible: P, renderPortal: A } = ri(), { hide: L } = To({ showing: a, hideOnRouteChange: f, handleShow: U, handleHide: j, processOnMount: true }), { addToHistory: $, removeFromHistory: R } = iu(a, L, f);
  vue.computed(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${$x[e.position]}` + (l.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : ""));
  let k = vue.computed(() => a.value === true && e.seamless !== true);
  vue.computed(() => e.autoClose === true ? { onClick: _ } : {});
  vue.computed(() => [`q-dialog fullscreen no-pointer-events q-dialog--${k.value === true ? "modal" : "seamless"}`, n.class]);
  vue.watch(() => e.maximized, (q) => {
    a.value === true && z(q);
  }), vue.watch(k, (q) => {
    c(q), q === true ? (ci(H), Tl(Q)) : (hr(H), si(Q));
  });
  function U(q) {
    $(), d = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, z(e.maximized), g(), l.value = true, e.noFocus !== true ? (document.activeElement !== null && document.activeElement.blur(), y(E)) : h(), m(() => {
      if (r.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          let { top: V, bottom: te } = document.activeElement.getBoundingClientRect(), { innerHeight: O } = window, ue = window.visualViewport !== void 0 ? window.visualViewport.height : O;
          V > 0 && te > ue / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - ue, te >= O ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + te - ue / 2))), document.activeElement.scrollIntoView();
        }
        v = true, i.value.click(), v = false;
      }
      g(true), l.value = false, o("show", q);
    }, e.transitionDuration);
  }
  function j(q) {
    h(), R(), ie(true), l.value = true, x(), d !== null && (((q && q.type.indexOf("key") === 0 ? d.closest('[tabindex]:not([tabindex^="-"])') : void 0) || d).focus(), d = null), m(() => {
      x(true), l.value = false, o("hide", q);
    }, e.transitionDuration);
  }
  function E(q) {
    Mo(() => {
      let V = i.value;
      if (V !== null) {
        if (q !== void 0) {
          let te = V.querySelector(q);
          if (te !== null) {
            te.focus({ preventScroll: true });
            return;
          }
        }
        V.contains(document.activeElement) !== true && (V = V.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || V.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || V.querySelector("[autofocus], [data-autofocus]") || V, V.focus({ preventScroll: true }));
      }
    });
  }
  function D(q) {
    q && typeof q.focus == "function" ? q.focus({ preventScroll: true }) : E(), o("shake");
    let V = i.value;
    V !== null && (V.classList.remove("q-animate--scale"), V.classList.add("q-animate--scale"), s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, i.value !== null && (V.classList.remove("q-animate--scale"), E());
    }, 170));
  }
  function Q() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && D() : (o("escapeKey"), L()));
  }
  function ie(q) {
    s !== null && (clearTimeout(s), s = null), (q === true || a.value === true) && (z(false), e.seamless !== true && (c(false), hr(H), si(Q))), q !== true && (d = null);
  }
  function z(q) {
    q === true ? u !== true && (uu < 1 && document.body.classList.add("q-body--dialog"), uu++, u = true) : u === true && (uu < 2 && document.body.classList.remove("q-body--dialog"), uu--, u = false);
  }
  function _(q) {
    v !== true && (L(q), o("click", q));
  }
  function H(q) {
    e.allowFocusOutside !== true && P.value === true && xl(i.value, q.target) !== true && E('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(r.proxy, { focus: E, shake: D, __updateRefocusTarget(q) {
    d = q || null;
  } }), vue.onBeforeUnmount(ie);
  return A;
} });
var Cm = 150, km = M({ name: "QDrawer", inheritAttrs: false, props: { ...ko, ...pe, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...qo, "onLayout", "miniState"], setup(e, { slots: t, emit: o, attrs: n }) {
  let r = vue.getCurrentInstance(), { proxy: { $q: i } } = r, a = he(e, i), { preventBodyScroll: l } = lu(), { registerTimeout: s, removeTimeout: d } = Jt(), u = vue.inject(io, We);
  if (u === We)
    return console.error("QDrawer needs to be child of QLayout"), We;
  let v, f = null, c, m = vue.ref(e.behavior === "mobile" || e.behavior !== "desktop" && u.totalWidth.value <= e.breakpoint), y = vue.computed(() => e.mini === true && m.value !== true), h = vue.computed(() => y.value === true ? e.miniWidth : e.width), w = vue.ref(e.showIfAbove === true && m.value === false ? true : e.modelValue === true), b = vue.computed(() => e.persistent !== true && (m.value === true || ie.value === true));
  function p(Y, me) {
    if (A(), Y !== false && u.animate(), ae(0), m.value === true) {
      let Pe = u.instances[j.value];
      Pe !== void 0 && Pe.belowBreakpoint === true && Pe.hide(false), ce(1), u.isContainer.value !== true && l(true);
    } else
      ce(0), Y !== false && be(false);
    s(() => {
      Y !== false && be(true), me !== true && o("show", Y);
    }, Cm);
  }
  function g(Y, me) {
    L(), Y !== false && u.animate(), ce(0), ae(B.value * h.value), Le(), me !== true ? s(() => {
      o("hide", Y);
    }, Cm) : d();
  }
  let { show: x, hide: P } = To({ showing: w, hideOnRouteChange: b, handleShow: p, handleHide: g }), { addToHistory: A, removeFromHistory: L } = iu(w, P, b), $ = { belowBreakpoint: m, hide: P }, R = vue.computed(() => e.side === "right"), B = vue.computed(() => (i.lang.rtl === true ? -1 : 1) * (R.value === true ? 1 : -1)), k = vue.ref(0), S = vue.ref(false), C = vue.ref(false), U = vue.ref(h.value * B.value), j = vue.computed(() => R.value === true ? "left" : "right"), E = vue.computed(() => w.value === true && m.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : h.value : 0), D = vue.computed(() => e.overlay === true || e.miniToOverlay === true || u.view.value.indexOf(R.value ? "R" : "L") !== -1 || i.platform.is.ios === true && u.isContainer.value === true), Q = vue.computed(() => e.overlay === false && w.value === true && m.value === false), ie = vue.computed(() => e.overlay === true && w.value === true && m.value === false), z = vue.computed(() => "fullscreen q-drawer__backdrop" + (w.value === false && S.value === false ? " hidden" : "")), _ = vue.computed(() => ({ backgroundColor: `rgba(0,0,0,${k.value * 0.4})` })), N = vue.computed(() => R.value === true ? u.rows.value.top[2] === "r" : u.rows.value.top[0] === "l"), H = vue.computed(() => R.value === true ? u.rows.value.bottom[2] === "r" : u.rows.value.bottom[0] === "l"), oe = vue.computed(() => {
    let Y = {};
    return u.header.space === true && N.value === false && (D.value === true ? Y.top = `${u.header.offset}px` : u.header.space === true && (Y.top = `${u.header.size}px`)), u.footer.space === true && H.value === false && (D.value === true ? Y.bottom = `${u.footer.offset}px` : u.footer.space === true && (Y.bottom = `${u.footer.size}px`)), Y;
  }), q = vue.computed(() => {
    let Y = { width: `${h.value}px`, transform: `translateX(${U.value}px)` };
    return m.value === true ? Y : Object.assign(Y, oe.value);
  }), V = vue.computed(() => "q-drawer__content fit " + (u.isContainer.value !== true ? "scroll" : "overflow-auto")), te = vue.computed(() => `q-drawer q-drawer--${e.side}` + (C.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (a.value === true ? " q-drawer--dark q-dark" : "") + (S.value === true ? " no-transition" : w.value === true ? "" : " q-layout--prevent-focus") + (m.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${y.value === true ? "mini" : "standard"}` + (D.value === true || Q.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (N.value === true ? " q-drawer--top-padding" : ""))), O = vue.computed(() => {
    let Y = i.lang.rtl === true ? e.side : j.value;
    return [[St, le, void 0, { [Y]: true, mouse: true }]];
  }), ue = vue.computed(() => {
    let Y = i.lang.rtl === true ? j.value : e.side;
    return [[St, Me, void 0, { [Y]: true, mouse: true }]];
  }), Se = vue.computed(() => {
    let Y = i.lang.rtl === true ? j.value : e.side;
    return [[St, Me, void 0, { [Y]: true, mouse: true, mouseAllDir: true }]];
  });
  function K() {
    ne(m, e.behavior === "mobile" || e.behavior !== "desktop" && u.totalWidth.value <= e.breakpoint);
  }
  vue.watch(m, (Y) => {
    Y === true ? (v = w.value, w.value === true && P(false)) : e.overlay === false && e.behavior !== "mobile" && v !== false && (w.value === true ? (ae(0), ce(0), Le()) : x(false));
  }), vue.watch(() => e.side, (Y, me) => {
    u.instances[me] === $ && (u.instances[me] = void 0, u[me].space = false, u[me].offset = 0), u.instances[Y] = $, u[Y].size = h.value, u[Y].space = Q.value, u[Y].offset = E.value;
  }), vue.watch(u.totalWidth, () => {
    (u.isContainer.value === true || document.qScrollPrevented !== true) && K();
  }), vue.watch(() => e.behavior + e.breakpoint, K), vue.watch(u.isContainer, (Y) => {
    w.value === true && l(Y !== true), Y === true && K();
  }), vue.watch(u.scrollbarWidth, () => {
    ae(w.value === true ? 0 : void 0);
  }), vue.watch(E, (Y) => {
    Fe("offset", Y);
  }), vue.watch(Q, (Y) => {
    o("onLayout", Y), Fe("space", Y);
  }), vue.watch(R, () => {
    ae();
  }), vue.watch(h, (Y) => {
    ae(), se(e.miniToOverlay, Y);
  }), vue.watch(() => e.miniToOverlay, (Y) => {
    se(Y, h.value);
  }), vue.watch(() => i.lang.rtl, () => {
    ae();
  }), vue.watch(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (Te(), u.animate());
  }), vue.watch(y, (Y) => {
    o("miniState", Y);
  });
  function ae(Y) {
    Y === void 0 ? vue.nextTick(() => {
      Y = w.value === true ? 0 : h.value, ae(B.value * Y);
    }) : (u.isContainer.value === true && R.value === true && (m.value === true || Math.abs(Y) === h.value) && (Y += B.value * u.scrollbarWidth.value), U.value = Y);
  }
  function ce(Y) {
    k.value = Y;
  }
  function be(Y) {
    let me = Y === true ? "remove" : u.isContainer.value !== true ? "add" : "";
    me !== "" && document.body.classList[me]("q-body--drawer-toggle");
  }
  function Te() {
    f !== null && clearTimeout(f), r.proxy && r.proxy.$el && r.proxy.$el.classList.add("q-drawer--mini-animate"), C.value = true, f = setTimeout(() => {
      f = null, C.value = false, r && r.proxy && r.proxy.$el && r.proxy.$el.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function le(Y) {
    if (w.value !== false)
      return;
    let me = h.value, Pe = Xe(Y.distance.x, 0, me);
    if (Y.isFinal === true) {
      Pe >= Math.min(75, me) === true ? x() : (u.animate(), ce(0), ae(B.value * me)), S.value = false;
      return;
    }
    ae((i.lang.rtl === true ? R.value !== true : R.value) ? Math.max(me - Pe, 0) : Math.min(0, Pe - me)), ce(Xe(Pe / me, 0, 1)), Y.isFirst === true && (S.value = true);
  }
  function Me(Y) {
    if (w.value !== true)
      return;
    let me = h.value, Pe = Y.direction === e.side, Ae = (i.lang.rtl === true ? Pe !== true : Pe) ? Xe(Y.distance.x, 0, me) : 0;
    if (Y.isFinal === true) {
      Math.abs(Ae) < Math.min(75, me) === true ? (u.animate(), ce(1), ae(0)) : P(), S.value = false;
      return;
    }
    ae(B.value * Ae), ce(Xe(1 - Ae / me, 0, 1)), Y.isFirst === true && (S.value = true);
  }
  function Le() {
    l(false), be(true);
  }
  function Fe(Y, me) {
    u.update(e.side, Y, me);
  }
  function ne(Y, me) {
    Y.value !== me && (Y.value = me);
  }
  function se(Y, me) {
    Fe("size", Y === true ? e.miniWidth : me);
  }
  return u.instances[e.side] = $, se(e.miniToOverlay, h.value), Fe("space", Q.value), Fe("offset", E.value), e.showIfAbove === true && e.modelValue !== true && w.value === true && e["onUpdate:modelValue"] !== void 0 && o("update:modelValue", true), vue.onMounted(() => {
    o("onLayout", Q.value), o("miniState", y.value), v = e.showIfAbove === true;
    let Y = () => {
      (w.value === true ? p : g)(false, true);
    };
    if (u.totalWidth.value !== 0) {
      vue.nextTick(Y);
      return;
    }
    c = vue.watch(u.totalWidth, () => {
      c(), c = void 0, w.value === false && e.showIfAbove === true && m.value === false ? x(false) : Y();
    });
  }), vue.onBeforeUnmount(() => {
    c !== void 0 && c(), f !== null && (clearTimeout(f), f = null), w.value === true && Le(), u.instances[e.side] === $ && (u.instances[e.side] = void 0, Fe("size", 0), Fe("offset", 0), Fe("space", false));
  }), () => {
    let Y = [];
    m.value === true && (e.noSwipeOpen === false && Y.push(vue.withDirectives(vue.h("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), O.value)), Y.push(yt("div", { ref: "backdrop", class: z.value, style: _.value, "aria-hidden": "true", onClick: P }, void 0, "backdrop", e.noSwipeBackdrop !== true && w.value === true, () => Se.value)));
    let me = y.value === true && t.mini !== void 0, Pe = [vue.h("div", { ...n, key: "" + me, class: [V.value, n.class] }, me === true ? t.mini() : J(t.default))];
    return e.elevated === true && w.value === true && Pe.push(vue.h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), Y.push(yt("aside", { ref: "content", class: te.value, style: q.value }, Pe, "contentclose", e.noSwipeClose !== true && m.value === true, () => ue.value)), vue.h("div", { class: "q-drawer-container" }, Y);
  };
} });
function qm(e, t) {
  if (t && e === t)
    return null;
  let o = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(o) === true)
    return e;
  let n = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, r = n.display;
  return r === "block" || r === "table" ? e : qm(e.parentNode);
}
function gc(e, t, o) {
  return !e || e === document.body ? false : o === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function Tm(e, t, o) {
  if (o || (o = document.createRange(), o.selectNode(e), o.setStart(e, 0)), t.count === 0)
    o.setEnd(e, t.count);
  else if (t.count > 0)
    if (e.nodeType === Node.TEXT_NODE)
      e.textContent.length < t.count ? t.count -= e.textContent.length : (o.setEnd(e, t.count), t.count = 0);
    else
      for (let n = 0; t.count !== 0 && n < e.childNodes.length; n++)
        o = Tm(e.childNodes[n], t, o);
  return o;
}
var zx = /^https?:\/\//, Da = class {
  constructor(t, o) {
    this.el = t, this.eVm = o, this._range = null;
  }
  get selection() {
    if (this.el) {
      let t = document.getSelection();
      if (gc(t.anchorNode, this.el, true) && gc(t.focusNode, this.el, true))
        return t;
    }
    return null;
  }
  get hasSelection() {
    return this.selection !== null ? this.selection.toString().length !== 0 : false;
  }
  get range() {
    let t = this.selection;
    return t !== null && t.rangeCount ? t.getRangeAt(0) : this._range;
  }
  get parent() {
    let t = this.range;
    if (t !== null) {
      let o = t.startContainer;
      return o.nodeType === document.ELEMENT_NODE ? o : o.parentNode;
    }
    return null;
  }
  get blockParent() {
    let t = this.parent;
    return t !== null ? qm(t, this.el) : null;
  }
  save(t = this.range) {
    t !== null && (this._range = t);
  }
  restore(t = this._range) {
    let o = document.createRange(), n = document.getSelection();
    t !== null ? (o.setStart(t.startContainer, t.startOffset), o.setEnd(t.endContainer, t.endOffset), n.removeAllRanges(), n.addRange(o)) : (n.selectAllChildren(this.el), n.collapseToEnd());
  }
  savePosition() {
    let t = -1, o, n = document.getSelection(), r = this.el.parentNode;
    if (n.focusNode && gc(n.focusNode, r))
      for (o = n.focusNode, t = n.focusOffset; o && o !== r; )
        o !== this.el && o.previousSibling ? (o = o.previousSibling, t += o.textContent.length) : o = o.parentNode;
    this.savedPos = t;
  }
  restorePosition(t = 0) {
    if (this.savedPos > 0 && this.savedPos < t) {
      let o = window.getSelection(), n = Tm(this.el, { count: this.savedPos });
      n && (n.collapse(false), o.removeAllRanges(), o.addRange(n));
    }
  }
  hasParent(t, o) {
    let n = o ? this.parent : this.blockParent;
    return n !== null ? n.nodeName.toLowerCase() === t.toLowerCase() : false;
  }
  hasParents(t, o, n = this.parent) {
    return n === null ? false : t.includes(n.nodeName.toLowerCase()) === true ? true : o === true ? this.hasParents(t, o, n.parentNode) : false;
  }
  is(t, o) {
    if (this.selection === null)
      return false;
    switch (t) {
      case "formatBlock":
        return o === "DIV" && this.parent === this.el || this.hasParent(o, o === "PRE");
      case "link":
        return this.hasParent("A", true);
      case "fontSize":
        return document.queryCommandValue(t) === o;
      case "fontName":
        let n = document.queryCommandValue(t);
        return n === `"${o}"` || n === o;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return false;
      default:
        let r = document.queryCommandState(t);
        return o !== void 0 ? r === o : r;
    }
  }
  getParentAttribute(t) {
    return this.parent !== null ? this.parent.getAttribute(t) : null;
  }
  can(t) {
    if (t === "outdent")
      return this.hasParents(["blockquote", "li"], true);
    if (t === "indent")
      return this.hasParents(["li"], true);
    if (t === "link")
      return this.selection !== null || this.is("link");
  }
  apply(t, o, n = je) {
    if (t === "formatBlock")
      ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(o) && this.is(t, o) && (t = "outdent", o = null), o === "PRE" && this.is(t, "PRE") && (o = "P");
    else if (t === "print") {
      n();
      let r = window.open();
      r.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `), r.print(), r.close();
      return;
    } else if (t === "link") {
      let r = this.getParentAttribute("href");
      if (r === null) {
        let i = this.selectWord(this.selection), a = i ? i.toString() : "";
        if (!a.length && (!this.range || !this.range.cloneContents().querySelector("img")))
          return;
        this.eVm.editLinkUrl.value = zx.test(a) ? a : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(i.getRangeAt(0));
      } else
        this.eVm.editLinkUrl.value = r, this.range.selectNodeContents(this.parent), this.save();
      return;
    } else if (t === "fullscreen") {
      this.eVm.toggleFullscreen(), n();
      return;
    } else if (t === "viewsource") {
      this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === false, this.eVm.setContent(this.eVm.props.modelValue), n();
      return;
    }
    document.execCommand(t, false, o), n();
  }
  selectWord(t) {
    if (t === null || t.isCollapsed !== true || t.modify === void 0)
      return t;
    let o = document.createRange();
    o.setStart(t.anchorNode, t.anchorOffset), o.setEnd(t.focusNode, t.focusOffset);
    let n = o.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    o.detach();
    let r = t.focusNode, i = t.focusOffset;
    return t.collapse(t.anchorNode, t.anchorOffset), t.modify("move", n[0], "character"), t.modify("move", n[1], "word"), t.extend(r, i), t.modify("extend", n[1], "character"), t.modify("extend", n[0], "word"), t;
  }
};
var du = M({ name: "QTooltip", inheritAttrs: false, props: { ...Ls, ...ko, ...Po, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Po.transitionShow, default: "jump-down" }, transitionHide: { ...Po.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: mi }, self: { type: String, default: "top middle", validator: mi }, offset: { type: Array, default: () => [14, 14], validator: El }, scrollTarget: ao, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...qo], setup(e, { slots: t, emit: o, attrs: n }) {
  let r, i, a = vue.getCurrentInstance(), { proxy: { $q: l } } = a, s = vue.ref(null), d = vue.ref(false), u = vue.computed(() => vi(e.anchor, l.lang.rtl)), v = vue.computed(() => vi(e.self, l.lang.rtl)), f = vue.computed(() => e.persistent !== true), { registerTick: c, removeTick: m } = Do(), { registerTimeout: y } = Jt();
  zn(e);
  let { localScrollTarget: b, changeScrollEvent: p, unconfigureScrollTarget: g } = kl(e, ie), { anchorEl: x, canShow: P, anchorEvents: A } = oi({ showing: d, configureAnchorEl: Q }), { show: L, hide: $ } = To({ showing: d, canShow: P, handleShow: S, handleHide: C, hideOnRouteChange: f, processOnMount: true });
  Object.assign(A, { delayShow: E, delayHide: D });
  let { showPortal: R, hidePortal: B, renderPortal: k } = ri();
  if (l.platform.is.mobile === true) {
    let N = { anchorEl: x, innerRef: s, onClickOutside(oe) {
      return $(oe), oe.target.classList.contains("q-dialog__backdrop") && qe(oe), true;
    } }, H = vue.computed(() => e.modelValue === null && e.persistent !== true && d.value === true);
    vue.watch(H, (oe) => {
      (oe === true ? Rl : fi)(N);
    }), vue.onBeforeUnmount(() => {
      fi(N);
    });
  }
  function S(N) {
    R(), c(() => {
      i = new MutationObserver(() => j()), i.observe(s.value, { attributes: false, childList: true, characterData: true, subtree: true }), j(), ie();
    }), r === void 0 && (r = vue.watch(() => l.screen.width + "|" + l.screen.height + "|" + e.self + "|" + e.anchor + "|" + l.lang.rtl, j)), y(() => {
      R(true), o("show", N);
    }, e.transitionDuration);
  }
  function C(N) {
    m(), B(), U(), y(() => {
      B(true), o("hide", N);
    }, e.transitionDuration);
  }
  function U() {
    i !== void 0 && (i.disconnect(), i = void 0), r !== void 0 && (r(), r = void 0), g(), da(A, "tooltipTemp");
  }
  function j() {
    ya({ targetEl: s.value, offset: e.offset, anchorEl: x.value, anchorOrigin: u.value, selfOrigin: v.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function E(N) {
    if (l.platform.is.mobile === true) {
      pa(), document.body.classList.add("non-selectable");
      let H = x.value, oe = ["touchmove", "touchcancel", "touchend", "click"].map((q) => [H, q, "delayHide", "passiveCapture"]);
      Ir(A, "tooltipTemp", oe);
    }
    y(() => {
      L(N);
    }, e.delay);
  }
  function D(N) {
    l.platform.is.mobile === true && (da(A, "tooltipTemp"), pa(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), y(() => {
      $(N);
    }, e.hideDelay);
  }
  function Q() {
    if (e.noParentEvent === true || x.value === null)
      return;
    let N = l.platform.is.mobile === true ? [[x.value, "touchstart", "delayShow", "passive"]] : [[x.value, "mouseenter", "delayShow", "passive"], [x.value, "mouseleave", "delayHide", "passive"]];
    Ir(A, "anchor", N);
  }
  function ie() {
    if (x.value !== null || e.scrollTarget !== void 0) {
      b.value = Nt(x.value, e.scrollTarget);
      let N = e.noParentEvent === true ? j : $;
      p(b.value, N);
    }
  }
  return vue.onBeforeUnmount(U), Object.assign(a.proxy, { updatePosition: j }), k;
} });
var an = M({ name: "QItem", props: { ...pe, ...bn, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = he(e, n), { hasLink: i, linkAttrs: a, linkClass: l, linkTag: s, navigateOnClick: d } = Fn(), u = vue.ref(null), v = vue.ref(null), f = vue.computed(() => e.clickable === true || i.value === true || e.tag === "label"), c = vue.computed(() => e.disable !== true && f.value === true), m = vue.computed(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (r.value === true ? " q-item--dark" : "") + (i.value === true && e.active === null ? l.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (c.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), y = vue.computed(() => e.insetLevel === void 0 ? null : { ["padding" + (n.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function h(p) {
    c.value === true && (v.value !== null && (p.qKeyEvent !== true && document.activeElement === u.value ? v.value.focus() : document.activeElement === v.value && u.value.focus()), d(p));
  }
  function w(p) {
    if (c.value === true && Ht(p, [13, 32]) === true) {
      qe(p), p.qKeyEvent = true;
      let g = new MouseEvent("click", p);
      g.qKeyEvent = true, u.value.dispatchEvent(g);
    }
    o("keyup", p);
  }
  function b() {
    let p = Wo(t.default, []);
    return c.value === true && p.unshift(vue.h("div", { class: "q-focus-helper", tabindex: -1, ref: v })), p;
  }
  return () => {
    let p = { ref: u, class: m.value, style: y.value, role: "listitem", onClick: h, onKeyup: w };
    return c.value === true ? (p.tabindex = e.tabindex || "0", Object.assign(p, a.value)) : f.value === true && (p["aria-disabled"] = "true"), vue.h(s.value, p, b());
  };
} });
var co = M({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  let o = vue.computed(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => vue.h("div", { class: o.value }, J(t.default));
} });
function Bm(e, t, o) {
  t.handler ? t.handler(e, o, o.caret) : o.runCmd(t.cmd, t.param);
}
function pc(e) {
  return vue.h("div", { class: "q-editor__toolbar-group" }, e);
}
function Lm(e, t, o, n = false) {
  let r = n || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), i = [];
  if (t.tip && e.$q.platform.is.desktop) {
    let a = t.key ? vue.h("div", [vue.h("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    i.push(vue.h(du, { delay: 1e3 }, () => [vue.h("div", { innerHTML: t.tip }), a]));
  }
  return vue.h(Be, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: r ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: r && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(a) {
    o && o(), Bm(a, t, e);
  } }, () => i);
}
function jx(e, t) {
  let o = t.list === "only-icons", n = t.label, r = t.icon !== null ? t.icon : void 0, i, a;
  function l() {
    d.component.proxy.hide();
  }
  if (o)
    a = t.options.map((u) => {
      let v = u.type === void 0 ? e.caret.is(u.cmd, u.param) : false;
      return v && (n = u.tip, r = u.icon !== null ? u.icon : void 0), Lm(e, u, l, v);
    }), i = e.toolbarBackgroundClass.value, a = [pc(a)];
  else {
    let u = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, v = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, f = t.list === "no-icons";
    a = t.options.map((c) => {
      let m = c.disable ? c.disable(e) : false, y = c.type === void 0 ? e.caret.is(c.cmd, c.param) : false;
      y && (n = c.tip, r = c.icon !== null ? c.icon : void 0);
      let h = c.htmlTip;
      return vue.h(an, { active: y, activeClass: u, clickable: true, disable: m, dense: true, onClick(w) {
        l(), e.contentRef.value !== null && e.contentRef.value.focus(), e.caret.restore(), Bm(w, c, e);
      } }, () => [f === true ? null : vue.h(co, { class: y ? u : v, side: true }, () => vue.h(_e, { name: c.icon !== null ? c.icon : void 0 })), vue.h(co, h ? () => vue.h("div", { class: "text-no-wrap", innerHTML: c.htmlTip }) : c.tip ? () => vue.h("div", { class: "text-no-wrap" }, c.tip) : void 0)]);
    }), i = [e.toolbarBackgroundClass.value, v];
  }
  let s = t.highlight && n !== t.label, d = vue.h(Bl, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: s ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: s && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : n, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : r, contentClass: i, onShow: (u) => e.emit("dropdownShow", u), onHide: (u) => e.emit("dropdownHide", u), onBeforeShow: (u) => e.emit("dropdownBeforeShow", u), onBeforeHide: (u) => e.emit("dropdownBeforeHide", u) }, () => a);
  return d;
}
function Fm(e) {
  if (e.caret)
    return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((o) => o.cmd === "viewsource")).map((t) => pc(t.map((o) => e.isViewingSource.value && o.cmd !== "viewsource" ? false : o.type === "slot" ? J(e.slots[o.slot]) : o.type === "dropdown" ? jx(e, o) : Lm(e, o))));
}
function Dm(e, t, o, n = {}) {
  let r = Object.keys(n);
  if (r.length === 0)
    return {};
  let i = { default_font: { cmd: "fontName", param: e, icon: o, tip: t } };
  return r.forEach((a) => {
    let l = n[a];
    i[a] = { cmd: "fontName", param: l, icon: o, tip: l, htmlTip: `<font face="${l}">${l}</font>` };
  }), i;
}
function Vm(e) {
  if (e.caret) {
    let t = e.props.toolbarColor || e.props.toolbarTextColor, o = e.editLinkUrl.value, n = () => {
      e.caret.restore(), o !== e.editLinkUrl.value && document.execCommand("createLink", false, o === "" ? " " : o), e.editLinkUrl.value = null;
    };
    return [vue.h("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), vue.h("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: o, onInput: (r) => {
      nt(r), o = r.target.value;
    }, onKeydown: (r) => {
      if (go(r) !== true)
        switch (r.keyCode) {
          case 13:
            return pt(r), n();
          case 27:
            pt(r), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
            break;
        }
    } }), pc([vue.h(Be, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), vue.h(Be, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: n })])];
  }
}
var Om = /^on[A-Z]/;
function Va() {
  let { attrs: e, vnode: t } = vue.getCurrentInstance(), o = { listeners: vue.ref({}), attributes: vue.ref({}) };
  function n() {
    let r = {}, i = {};
    for (let a in e)
      a !== "class" && a !== "style" && Om.test(a) === false && (r[a] = e[a]);
    for (let a in t.props)
      Om.test(a) === true && (i[a] = t.props[a]);
    o.attributes.value = r, o.listeners.value = i;
  }
  return vue.onBeforeUpdate(n), n(), o;
}
var Wx = Object.prototype.toString, hc = Object.prototype.hasOwnProperty, Yx = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Im(e) {
  if (e !== Object(e) || Yx.has(Wx.call(e)) === true || e.constructor && hc.call(e, "constructor") === false && hc.call(e.constructor.prototype, "isPrototypeOf") === false)
    return false;
  let t;
  for (t in e)
    ;
  return t === void 0 || hc.call(e, t);
}
function Wn() {
  let e, t, o, n, r, i, a = arguments[0] || {}, l = 1, s = false, d = arguments.length;
  for (typeof a == "boolean" && (s = a, a = arguments[1] || {}, l = 2), Object(a) !== a && typeof a != "function" && (a = {}), d === l && (a = this, l--); l < d; l++)
    if ((e = arguments[l]) !== null)
      for (t in e)
        o = a[t], n = e[t], a !== n && (s === true && n && ((r = Array.isArray(n)) || Im(n) === true) ? (r === true ? i = Array.isArray(o) === true ? o : [] : i = Im(o) === true ? o : {}, a[t] = Wn(s, i, n)) : n !== void 0 && (a[t] = n));
  return a;
}
var Nm = M({ name: "QEditor", props: { ...pe, ...wi, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ci, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = he(e, r), { inFullscreen: a, toggleFullscreen: l } = ki(), s = Va(), d = vue.ref(null), u = vue.ref(null), v = vue.ref(null), f = vue.ref(false), c = vue.computed(() => !e.readonly && !e.disable), m, y, h = e.modelValue, w = vue.computed(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), b = vue.computed(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !c.value, size: "sm" })), p = vue.computed(() => {
    let q = r.lang.editor, V = r.iconSet.editor;
    return { bold: { cmd: "bold", icon: V.bold, tip: q.bold, key: 66 }, italic: { cmd: "italic", icon: V.italic, tip: q.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: V.strikethrough, tip: q.strikethrough, key: 83 }, underline: { cmd: "underline", icon: V.underline, tip: q.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: V.unorderedList, tip: q.unorderedList }, ordered: { cmd: "insertOrderedList", icon: V.orderedList, tip: q.orderedList }, subscript: { cmd: "subscript", icon: V.subscript, tip: q.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: V.superscript, tip: q.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (te) => te.caret && !te.caret.can("link"), icon: V.hyperlink, tip: q.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: V.toggleFullscreen, tip: q.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: V.viewSource, tip: q.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: V.quote, tip: q.quote, key: 81 }, left: { cmd: "justifyLeft", icon: V.left, tip: q.left }, center: { cmd: "justifyCenter", icon: V.center, tip: q.center }, right: { cmd: "justifyRight", icon: V.right, tip: q.right }, justify: { cmd: "justifyFull", icon: V.justify, tip: q.justify }, print: { type: "no-state", cmd: "print", icon: V.print, tip: q.print, key: 80 }, outdent: { type: "no-state", disable: (te) => te.caret && !te.caret.can("outdent"), cmd: "outdent", icon: V.outdent, tip: q.outdent }, indent: { type: "no-state", disable: (te) => te.caret && !te.caret.can("indent"), cmd: "indent", icon: V.indent, tip: q.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: V.removeFormat, tip: q.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: V.hr, tip: q.hr }, undo: { type: "no-state", cmd: "undo", icon: V.undo, tip: q.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: V.redo, tip: q.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: V.heading1 || V.heading, tip: q.heading1, htmlTip: `<h1 class="q-ma-none">${q.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: V.heading2 || V.heading, tip: q.heading2, htmlTip: `<h2 class="q-ma-none">${q.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: V.heading3 || V.heading, tip: q.heading3, htmlTip: `<h3 class="q-ma-none">${q.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: V.heading4 || V.heading, tip: q.heading4, htmlTip: `<h4 class="q-ma-none">${q.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: V.heading5 || V.heading, tip: q.heading5, htmlTip: `<h5 class="q-ma-none">${q.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: V.heading6 || V.heading, tip: q.heading6, htmlTip: `<h6 class="q-ma-none">${q.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: V.heading, tip: q.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: V.code, htmlTip: `<code>${q.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: V.size1 || V.size, tip: q.size1, htmlTip: `<font size="1">${q.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: V.size2 || V.size, tip: q.size2, htmlTip: `<font size="2">${q.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: V.size3 || V.size, tip: q.size3, htmlTip: `<font size="3">${q.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: V.size4 || V.size, tip: q.size4, htmlTip: `<font size="4">${q.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: V.size5 || V.size, tip: q.size5, htmlTip: `<font size="5">${q.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: V.size6 || V.size, tip: q.size6, htmlTip: `<font size="6">${q.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: V.size7 || V.size, tip: q.size7, htmlTip: `<font size="7">${q.size7}</font>` } };
  }), g = vue.computed(() => {
    let q = e.definitions || {}, V = e.definitions || e.fonts ? Wn(true, {}, p.value, q, Dm(m, r.lang.editor.defaultFont, r.iconSet.editor.font, e.fonts)) : p.value;
    return e.toolbar.map((te) => te.map((O) => {
      if (O.options)
        return { type: "dropdown", icon: O.icon, label: O.label, size: "sm", dense: true, fixedLabel: O.fixedLabel, fixedIcon: O.fixedIcon, highlight: O.highlight, list: O.list, options: O.options.map((Se) => V[Se]) };
      let ue = V[O];
      return ue ? ue.type === "no-state" || q[O] && (ue.cmd === void 0 || p.value[ue.cmd] && p.value[ue.cmd].type === "no-state") ? ue : Object.assign({ type: "toggle" }, ue) : { type: "slot", slot: O };
    }));
  }), x = { $q: r, props: e, slots: t, emit: o, inFullscreen: a, toggleFullscreen: l, runCmd: _, isViewingSource: f, editLinkUrl: v, toolbarBackgroundClass: w, buttonProps: b, contentRef: u, buttons: g, setContent: z };
  vue.watch(() => e.modelValue, (q) => {
    h !== q && (h = q, z(q, true));
  }), vue.watch(v, (q) => {
    o(`link${q ? "Show" : "Hide"}`);
  });
  let P = vue.computed(() => e.toolbar && e.toolbar.length !== 0), A = vue.computed(() => {
    let q = {}, V = (te) => {
      te.key && (q[te.key] = { cmd: te.cmd, param: te.param });
    };
    return g.value.forEach((te) => {
      te.forEach((O) => {
        O.options ? O.options.forEach(V) : V(O);
      });
    }), q;
  }), L = vue.computed(() => a.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), $ = vue.computed(() => `q-editor q-editor--${f.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (a.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (i.value === true ? " q-editor--dark q-dark" : "")), R = vue.computed(() => [e.contentClass, "q-editor__content", { col: a.value, "overflow-auto": a.value || e.maxHeight }]), B = vue.computed(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function k() {
    if (u.value !== null) {
      let q = `inner${f.value === true ? "Text" : "HTML"}`, V = u.value[q];
      V !== e.modelValue && (h = V, o("update:modelValue", V));
    }
  }
  function S(q) {
    if (o("keydown", q), q.ctrlKey !== true || go(q) === true) {
      N();
      return;
    }
    let V = q.keyCode, te = A.value[V];
    if (te !== void 0) {
      let { cmd: O, param: ue } = te;
      qe(q), _(O, ue, false);
    }
  }
  function C(q) {
    N(), o("click", q);
  }
  function U(q) {
    if (u.value !== null) {
      let { scrollTop: V, scrollHeight: te } = u.value;
      y = te - V;
    }
    x.caret.save(), o("blur", q);
  }
  function j(q) {
    vue.nextTick(() => {
      u.value !== null && y !== void 0 && (u.value.scrollTop = u.value.scrollHeight - y);
    }), o("focus", q);
  }
  function E(q) {
    let V = d.value;
    if (V !== null && V.contains(q.target) === true && (q.relatedTarget === null || V.contains(q.relatedTarget) !== true)) {
      let te = `inner${f.value === true ? "Text" : "HTML"}`;
      x.caret.restorePosition(u.value[te].length), N();
    }
  }
  function D(q) {
    let V = d.value;
    V !== null && V.contains(q.target) === true && (q.relatedTarget === null || V.contains(q.relatedTarget) !== true) && (x.caret.savePosition(), N());
  }
  function Q() {
    y = void 0;
  }
  function ie(q) {
    x.caret.save();
  }
  function z(q, V) {
    if (u.value !== null) {
      V === true && x.caret.savePosition();
      let te = `inner${f.value === true ? "Text" : "HTML"}`;
      u.value[te] = q, V === true && (x.caret.restorePosition(u.value[te].length), N());
    }
  }
  function _(q, V, te = true) {
    H(), x.caret.restore(), x.caret.apply(q, V, () => {
      H(), x.caret.save(), te && N();
    });
  }
  function N() {
    setTimeout(() => {
      v.value = null, n.$forceUpdate();
    }, 1);
  }
  function H() {
    Mo(() => {
      u.value !== null && u.value.focus({ preventScroll: true });
    });
  }
  function oe() {
    return u.value;
  }
  return vue.onMounted(() => {
    x.caret = n.caret = new Da(u.value, x), z(e.modelValue), N(), document.addEventListener("selectionchange", ie);
  }), vue.onBeforeUnmount(() => {
    document.removeEventListener("selectionchange", ie);
  }), Object.assign(n, { runCmd: _, refreshToolbar: N, focus: H, getContentEl: oe }), () => {
    let q;
    if (P.value) {
      let V = [vue.h("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + w.value }, Fm(x))];
      v.value !== null && V.push(vue.h("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + w.value }, Vm(x))), q = vue.h("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, V);
    }
    return vue.h("div", { ref: d, class: $.value, style: { height: a.value === true ? "100%" : null }, ...B.value, onFocusin: E, onFocusout: D }, [q, vue.h("div", { ref: u, style: L.value, class: R.value, contenteditable: c.value, placeholder: e.placeholder, innerHTML: e.modelValue, ...s.listeners.value, onInput: k, onKeydown: S, onClick: C, onBlur: U, onFocus: j, onMousedown: Q, onTouchstartPassive: Q })]);
  };
} });
var Cr = M({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  let o = vue.computed(() => parseInt(e.lines, 10)), n = vue.computed(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (o.value === 1 ? " ellipsis" : "")), r = vue.computed(() => e.lines !== void 0 && o.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": o.value } : null);
  return () => vue.h("div", { style: r.value, class: n.value }, J(t.default));
} });
var Yn = M({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: o }) {
  let n = false, r, i, a = null, l = null, s, d;
  function u() {
    r && r(), r = null, n = false, a !== null && (clearTimeout(a), a = null), l !== null && (clearTimeout(l), l = null), i !== void 0 && i.removeEventListener("transitionend", s), s = null;
  }
  function v(y, h, w) {
    h !== void 0 && (y.style.height = `${h}px`), y.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, n = true, r = w;
  }
  function f(y, h) {
    y.style.overflowY = null, y.style.height = null, y.style.transition = null, u(), h !== d && o(h);
  }
  function c(y, h) {
    let w = 0;
    i = y, n === true ? (u(), w = y.offsetHeight === y.scrollHeight ? 0 : void 0) : (d = "hide", y.style.overflowY = "hidden"), v(y, w, h), a = setTimeout(() => {
      a = null, y.style.height = `${y.scrollHeight}px`, s = (b) => {
        l = null, (Object(b) !== b || b.target === y) && f(y, "show");
      }, y.addEventListener("transitionend", s), l = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  function m(y, h) {
    let w;
    i = y, n === true ? u() : (d = "show", y.style.overflowY = "hidden", w = y.scrollHeight), v(y, w, h), a = setTimeout(() => {
      a = null, y.style.height = 0, s = (b) => {
        l = null, (Object(b) !== b || b.target === y) && f(y, "hide");
      }, y.addEventListener("transitionend", s), l = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  return vue.onBeforeUnmount(() => {
    n === true && u();
  }), () => vue.h(vue.Transition, { css: false, appear: e.appear, onEnter: c, onLeave: m }, t.default);
} });
var aS = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, yc = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, ho = M({ name: "QSeparator", props: { ...pe, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  let t = vue.getCurrentInstance(), o = he(e, t.proxy.$q), n = vue.computed(() => e.vertical === true ? "vertical" : "horizontal"), r = vue.computed(() => ` q-separator--${n.value}`), i = vue.computed(() => e.inset !== false ? `${r.value}-${aS[e.inset]}` : ""), a = vue.computed(() => `q-separator${r.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (o.value === true ? " q-separator--dark" : "")), l = vue.computed(() => {
    let s = {};
    if (e.size !== void 0 && (s[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      let d = e.spaced === true ? `${yc.md}px` : e.spaced in yc ? `${yc[e.spaced]}px` : e.spaced, u = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      s[`margin${u[0]}`] = s[`margin${u[1]}`] = d;
    }
    return s;
  });
  return () => vue.h("hr", { class: a.value, style: l.value, "aria-orientation": n.value });
} });
var kr = vue.shallowReactive({}), fS = Object.keys(bn), jm = M({ name: "QExpansionItem", props: { ...bn, ...ko, ...pe, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...qo, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = he(e, n), i = vue.ref(e.modelValue !== null ? e.modelValue : e.defaultOpened), a = vue.ref(null), l = xn(), { show: s, hide: d, toggle: u } = To({ showing: i }), v, f, c = vue.computed(() => `q-expansion-item q-item-type q-expansion-item--${i.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), m = vue.computed(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (n.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), y = vue.computed(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), h = vue.computed(() => {
    let E = {};
    return fS.forEach((D) => {
      E[D] = e[D];
    }), E;
  }), w = vue.computed(() => y.value === true || e.expandIconToggle !== true), b = vue.computed(() => e.expandedIcon !== void 0 && i.value === true ? e.expandedIcon : e.expandIcon || n.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), p = vue.computed(() => e.disable !== true && (y.value === true || e.expandIconToggle === true)), g = vue.computed(() => ({ expanded: i.value === true, detailsId: l.value, toggle: u, show: s, hide: d })), x = vue.computed(() => {
    let E = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : n.lang.label[i.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": i.value === true ? "true" : "false", "aria-controls": l.value, "aria-label": E };
  });
  vue.watch(() => e.group, (E) => {
    f !== void 0 && f(), E !== void 0 && B();
  });
  function P(E) {
    y.value !== true && u(E), o("click", E);
  }
  function A(E) {
    E.keyCode === 13 && L(E, true);
  }
  function L(E, D) {
    D !== true && a.value !== null && a.value.focus(), u(E), qe(E);
  }
  function $() {
    o("afterShow");
  }
  function R() {
    o("afterHide");
  }
  function B() {
    v === void 0 && (v = yn()), i.value === true && (kr[e.group] = v);
    let E = vue.watch(i, (Q) => {
      Q === true ? kr[e.group] = v : kr[e.group] === v && delete kr[e.group];
    }), D = vue.watch(() => kr[e.group], (Q, ie) => {
      ie === v && Q !== void 0 && Q !== v && d();
    });
    f = () => {
      E(), D(), kr[e.group] === v && delete kr[e.group], f = void 0;
    };
  }
  function k() {
    let E = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, D = [vue.h(_e, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && i.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: b.value })];
    return p.value === true && (Object.assign(E, { tabindex: 0, ...x.value, onClick: L, onKeyup: A }), D.unshift(vue.h("div", { ref: a, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), vue.h(co, E, () => D);
  }
  function S() {
    let E;
    return t.header !== void 0 ? E = [].concat(t.header(g.value)) : (E = [vue.h(co, () => [vue.h(Cr, { lines: e.labelLines }, () => e.label || ""), e.caption ? vue.h(Cr, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && E[e.switchToggleSide === true ? "push" : "unshift"](vue.h(co, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => vue.h(_e, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && E[e.switchToggleSide === true ? "unshift" : "push"](k()), E;
  }
  function C() {
    let E = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: r.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return w.value === true && (E.clickable = true, E.onClick = P, Object.assign(E, y.value === true ? h.value : x.value)), vue.h(an, E, S);
  }
  function U() {
    return vue.withDirectives(vue.h("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: m.value, id: l.value }, J(t.default)), [[vue.vShow, i.value]]);
  }
  function j() {
    let E = [C(), vue.h(Yn, { duration: e.duration, onShow: $, onHide: R }, U)];
    return e.expandSeparator === true && E.push(vue.h(ho, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: r.value }), vue.h(ho, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: r.value })), E;
  }
  return e.group !== void 0 && B(), vue.onBeforeUnmount(() => {
    f !== void 0 && f();
  }), () => vue.h("div", { class: c.value }, [vue.h("div", { class: "q-expansion-item__container relative-position" }, j())]);
} });
var mS = ["top", "right", "bottom", "left"], Ia = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => mS.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function vu(e, t) {
  return { formClass: vue.computed(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: vue.computed(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: vue.computed(() => {
    if (e.externalLabel === true) {
      let o = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (o === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var pS = ["up", "right", "down", "left"], hS = ["left", "center", "right"], Km = M({ name: "QFab", props: { ...Ia, ...ko, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Ia.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => pS.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => hS.includes(e) } }, emits: qo, setup(e, { slots: t }) {
  let o = vue.ref(null), n = vue.ref(e.modelValue === true), r = xn(), { proxy: { $q: i } } = vue.getCurrentInstance(), { formClass: a, labelProps: l } = vu(e, n), s = vue.computed(() => e.persistent !== true), { hide: d, toggle: u } = To({ showing: n, hideOnRouteChange: s }), v = vue.computed(() => ({ opened: n.value })), f = vue.computed(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${a.value}` + (n.value === true ? " q-fab--opened" : " q-fab--closed")), c = vue.computed(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${n.value === true ? "opened" : "closed"}`), m = vue.computed(() => {
    let b = { id: r.value, role: "menu" };
    return n.value !== true && (b["aria-hidden"] = "true"), b;
  }), y = vue.computed(() => `q-fab__icon-holder  q-fab__icon-holder--${n.value === true ? "opened" : "closed"}`);
  function h(b, p) {
    let g = t[b], x = `q-fab__${b} absolute-full`;
    return g === void 0 ? vue.h(_e, { class: x, name: e[p] || i.iconSet.fab[p] }) : vue.h("div", { class: x }, g(v.value));
  }
  function w() {
    let b = [];
    return e.hideIcon !== true && b.push(vue.h("div", { class: y.value }, [h("icon", "icon"), h("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && b[l.value.action](vue.h("div", l.value.data, t.label !== void 0 ? t.label(v.value) : [e.label])), Ue(t.tooltip, b);
  }
  return vue.provide(cl, { showing: n, onChildClick(b) {
    d(b), o.value !== null && o.value.$el.focus();
  } }), () => vue.h("div", { class: f.value }, [vue.h(Be, { ref: o, class: a.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": n.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": r.value, onClick: u }, w), vue.h("div", { class: c.value, ...m.value }, J(t.default))]);
} });
var Ym = { start: "self-end", center: "self-center", end: "self-start" }, xS = Object.keys(Ym), Xm = M({ name: "QFabAction", props: { ...Ia, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => xS.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  let n = vue.inject(cl, () => ({ showing: { value: true }, onChildClick: je })), { formClass: r, labelProps: i } = vu(e, n.showing), a = vue.computed(() => {
    let v = Ym[e.anchor];
    return r.value + (v !== void 0 ? ` ${v}` : "");
  }), l = vue.computed(() => e.disable === true || n.showing.value !== true);
  function s(v) {
    n.onChildClick(v), o("click", v);
  }
  function d() {
    let v = [];
    return t.icon !== void 0 ? v.push(t.icon()) : e.icon !== "" && v.push(vue.h(_e, { name: e.icon })), (e.label !== "" || t.label !== void 0) && v[i.value.action](vue.h("div", i.value.data, t.label !== void 0 ? t.label() : [e.label])), Ue(t.default, v);
  }
  let u = vue.getCurrentInstance();
  return Object.assign(u.proxy, { click: s }), () => vue.h(Be, { class: a.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: l.value, onClick: s }, d);
} });
function wc({ validate: e, resetValidation: t, requiresQForm: o }) {
  let n = vue.inject(hn, false);
  if (n !== false) {
    let { props: r, proxy: i } = vue.getCurrentInstance();
    Object.assign(i, { validate: e, resetValidation: t }), vue.watch(() => r.disable, (a) => {
      a === true ? (typeof t == "function" && t(), n.unbindComponent(i)) : n.bindComponent(i);
    }), vue.onMounted(() => {
      r.disable !== true && n.bindComponent(i);
    }), vue.onBeforeUnmount(() => {
      r.disable !== true && n.unbindComponent(i);
    });
  } else
    o === true && console.error("Parent QForm not found on useFormChild()!");
}
var MS = [true, false, "ondemand"], Gm = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => MS.includes(e) } };
function Zm(e, t) {
  let { props: o, proxy: n } = vue.getCurrentInstance(), r = vue.ref(false), i = vue.ref(null), a = vue.ref(false);
  wc({ validate: y, resetValidation: m });
  let l = 0, s, d = vue.computed(() => o.rules !== void 0 && o.rules !== null && o.rules.length !== 0), u = vue.computed(() => o.disable !== true && d.value === true && t.value === false), v = vue.computed(() => o.error === true || r.value === true), f = vue.computed(() => typeof o.errorMessage == "string" && o.errorMessage.length !== 0 ? o.errorMessage : i.value);
  vue.watch(() => o.modelValue, () => {
    a.value = true, u.value === true && o.lazyRules === false && h();
  });
  function c() {
    o.lazyRules !== "ondemand" && u.value === true && a.value === true && h();
  }
  vue.watch(() => o.reactiveRules, (w) => {
    w === true ? s === void 0 && (s = vue.watch(() => o.rules, c, { immediate: true, deep: true })) : s !== void 0 && (s(), s = void 0);
  }, { immediate: true }), vue.watch(() => o.lazyRules, c), vue.watch(e, (w) => {
    w === true ? a.value = true : u.value === true && o.lazyRules !== "ondemand" && h();
  });
  function m() {
    l++, t.value = false, a.value = false, r.value = false, i.value = null, h.cancel();
  }
  function y(w = o.modelValue) {
    if (o.disable === true || d.value === false)
      return true;
    let b = ++l, p = t.value !== true ? () => {
      a.value = true;
    } : () => {
    }, g = (P, A) => {
      P === true && p(), r.value = P, i.value = A || null, t.value = false;
    }, x = [];
    for (let P = 0; P < o.rules.length; P++) {
      let A = o.rules[P], L;
      if (typeof A == "function" ? L = A(w, xr) : typeof A == "string" && xr[A] !== void 0 && (L = xr[A](w)), L === false || typeof L == "string")
        return g(true, L), false;
      L !== true && L !== void 0 && x.push(L);
    }
    return x.length === 0 ? (g(false), true) : (t.value = true, Promise.all(x).then((P) => {
      if (P === void 0 || Array.isArray(P) === false || P.length === 0)
        return b === l && g(false), true;
      let A = P.find((L) => L === false || typeof L == "string");
      return b === l && g(A !== void 0, A), A === void 0;
    }, (P) => (b === l && (console.error(P), g(true)), false)));
  }
  let h = Lo(y, 0);
  return vue.onBeforeUnmount(() => {
    s !== void 0 && s(), h.cancel();
  }), Object.assign(n, { resetValidation: m, validate: y }), ft(n, "hasError", () => v.value), { isDirtyModel: a, hasRules: d, hasError: v, errorMessage: f, validate: y, resetValidation: m };
}
function ln(e) {
  return e != null && ("" + e).length !== 0;
}
var kc = { ...pe, ...Gm, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, Tr = { ...kc, maxlength: [Number, String] }, Xn = ["update:modelValue", "clear", "focus", "blur"];
function Gn({ requiredForAttr: e = true, tagProp: t, changeEvent: o = false } = {}) {
  let { props: n, proxy: r } = vue.getCurrentInstance(), i = he(n, r.$q), a = xn({ required: e, getValue: () => n.for });
  return { requiredForAttr: e, changeEvent: o, tag: t === true ? vue.computed(() => n.tag) : { value: "label" }, isDark: i, editable: vue.computed(() => n.disable !== true && n.readonly !== true), innerLoading: vue.ref(false), focused: vue.ref(false), hasPopupOpen: false, splitAttrs: Va(), targetUid: a, rootRef: vue.ref(null), targetRef: vue.ref(null), controlRef: vue.ref(null) };
}
function Zn(e) {
  let { props: t, emit: o, slots: n, attrs: r, proxy: i } = vue.getCurrentInstance(), { $q: a } = i, l = null;
  e.hasValue === void 0 && (e.hasValue = vue.computed(() => ln(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (D) => {
    o("update:modelValue", D);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: $, onFocusout: R }), Object.assign(e, { clearValue: B, onControlFocusin: $, onControlFocusout: R, focus: A }), e.computedCounter === void 0 && (e.computedCounter = vue.computed(() => {
    if (t.counter !== false) {
      let D = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, Q = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return D + (Q !== void 0 ? " / " + Q : "");
    }
  }));
  let { isDirtyModel: s, hasRules: d, hasError: u, errorMessage: v, resetValidation: f } = Zm(e.focused, e.innerLoading), c = e.floatingLabel !== void 0 ? vue.computed(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : vue.computed(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), m = vue.computed(() => t.bottomSlots === true || t.hint !== void 0 || d.value === true || t.counter === true || t.error !== null), y = vue.computed(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), h = vue.computed(() => `q-field row no-wrap items-start q-field--${y.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (c.value === true ? " q-field--float" : "") + (b.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (u.value === true ? " q-field--error" : "") + (u.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && m.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), w = vue.computed(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (u.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), b = vue.computed(() => t.labelSlot === true || t.label !== void 0), p = vue.computed(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && u.value !== true ? ` text-${t.labelColor}` : "")), g = vue.computed(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: c.value, modelValue: t.modelValue, emitValue: e.emitValue })), x = vue.computed(() => {
    let D = {};
    return e.targetUid.value && (D.for = e.targetUid.value), t.disable === true && (D["aria-disabled"] = "true"), D;
  });
  function P() {
    let D = document.activeElement, Q = e.targetRef !== void 0 && e.targetRef.value;
    Q && (D === null || D.id !== e.targetUid.value) && (Q.hasAttribute("tabindex") === true || (Q = Q.querySelector("[tabindex]")), Q && Q !== D && Q.focus({ preventScroll: true }));
  }
  function A() {
    Mo(P);
  }
  function L() {
    cf(P);
    let D = document.activeElement;
    D !== null && e.rootRef.value.contains(D) && D.blur();
  }
  function $(D) {
    l !== null && (clearTimeout(l), l = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, o("focus", D));
  }
  function R(D, Q) {
    l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, o("blur", D)), Q !== void 0 && Q());
    });
  }
  function B(D) {
    qe(D), a.platform.is.mobile !== true ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), o("update:modelValue", null), e.changeEvent === true && o("change", null), o("clear", t.modelValue), vue.nextTick(() => {
      let Q = s.value;
      f(), s.value = Q;
    });
  }
  function k(D) {
    [13, 32].includes(D.keyCode) && B(D);
  }
  function S() {
    let D = [];
    return n.prepend !== void 0 && D.push(vue.h("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: pt }, n.prepend())), D.push(vue.h("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, C())), u.value === true && t.noErrorIcon === false && D.push(j("error", [vue.h(_e, { name: a.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? D.push(j("inner-loading-append", n.loading !== void 0 ? n.loading() : [vue.h(xt, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && D.push(j("inner-clearable-append", [vue.h(_e, { class: "q-field__focusable-action", name: t.clearIcon || a.iconSet.field.clear, tabindex: 0, role: "button", "aria-label": a.lang.label.clear, onKeyup: k, onClick: B })])), n.append !== void 0 && D.push(vue.h("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: pt }, n.append())), e.getInnerAppend !== void 0 && D.push(j("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && D.push(e.getControlChild()), D;
  }
  function C() {
    let D = [];
    return t.prefix !== void 0 && t.prefix !== null && D.push(vue.h("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && D.push(e.getShadowControl()), e.getControl !== void 0 ? D.push(e.getControl()) : n.rawControl !== void 0 ? D.push(n.rawControl()) : n.control !== void 0 && D.push(vue.h("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, n.control(g.value))), b.value === true && D.push(vue.h("div", { class: p.value }, J(n.label, t.label))), t.suffix !== void 0 && t.suffix !== null && D.push(vue.h("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), D.concat(J(n.default));
  }
  function U() {
    let D, Q;
    u.value === true ? v.value !== null ? (D = [vue.h("div", { role: "alert" }, v.value)], Q = `q--slot-error-${v.value}`) : (D = J(n.error), Q = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (D = [vue.h("div", t.hint)], Q = `q--slot-hint-${t.hint}`) : (D = J(n.hint), Q = "q--slot-hint"));
    let ie = t.counter === true || n.counter !== void 0;
    if (t.hideBottomSpace === true && ie === false && D === void 0)
      return;
    let z = vue.h("div", { key: Q, class: "q-field__messages col" }, D);
    return vue.h("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: pt }, [t.hideBottomSpace === true ? z : vue.h(vue.Transition, { name: "q-transition--field-message" }, () => z), ie === true ? vue.h("div", { class: "q-field__counter" }, n.counter !== void 0 ? n.counter() : e.computedCounter.value) : null]);
  }
  function j(D, Q) {
    return Q === null ? null : vue.h("div", { key: D, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, Q);
  }
  let E = false;
  return vue.onDeactivated(() => {
    E = true;
  }), vue.onActivated(() => {
    E === true && t.autofocus === true && i.focus();
  }), t.autofocus === true && vue.onMounted(() => {
    i.focus();
  }), vue.onBeforeUnmount(() => {
    l !== null && clearTimeout(l);
  }), Object.assign(i, { focus: A, blur: L }), function() {
    let Q = e.getControl === void 0 && n.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...x.value } : x.value;
    return vue.h(e.tag.value, { ref: e.rootRef, class: [h.value, r.class], style: r.style, ...Q }, [n.before !== void 0 ? vue.h("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: pt }, n.before()) : null, vue.h("div", { class: "q-field__inner relative-position col self-stretch" }, [vue.h("div", { ref: e.controlRef, class: w.value, tabindex: -1, ...e.controlEvents }, S()), m.value === true ? U() : null]), n.after !== void 0 ? vue.h("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: pt }, n.after()) : null]);
  };
}
var pu = M({ name: "QField", inheritAttrs: false, props: { ...Tr, tag: { type: String, default: "label" } }, emits: Xn, setup() {
  return Zn(Gn({ tagProp: true }));
} });
function Ni(e, t, o, n) {
  let r = [];
  return e.forEach((i) => {
    n(i) === true ? r.push(i) : t.push({ failedPropValidation: o, file: i });
  }), r;
}
function hu(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), qe(e);
}
var bu = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, yu = ["rejected"];
function xu({ editable: e, dnd: t, getFileInput: o, addFilesToQueue: n }) {
  let { props: r, emit: i, proxy: a } = vue.getCurrentInstance(), l = vue.ref(null), s = vue.computed(() => r.accept !== void 0 ? r.accept.split(",").map((b) => (b = b.trim(), b === "*" ? "*/" : (b.endsWith("/*") && (b = b.slice(0, b.length - 1)), b.toUpperCase()))) : null), d = vue.computed(() => parseInt(r.maxFiles, 10)), u = vue.computed(() => parseInt(r.maxTotalSize, 10));
  function v(b) {
    if (e.value)
      if (b !== Object(b) && (b = { target: null }), b.target !== null && b.target.matches('input[type="file"]') === true)
        b.clientX === 0 && b.clientY === 0 && nt(b);
      else {
        let p = o();
        p && p !== b.target && p.click(b);
      }
  }
  function f(b) {
    e.value && b && n(null, b);
  }
  function c(b, p, g, x) {
    let P = Array.from(p || b.target.files), A = [], L = () => {
      A.length !== 0 && i("rejected", A);
    };
    if (r.accept !== void 0 && s.value.indexOf("*/") === -1 && (P = Ni(P, A, "accept", ($) => s.value.some((R) => $.type.toUpperCase().startsWith(R) || $.name.toUpperCase().endsWith(R))), P.length === 0))
      return L();
    if (r.maxFileSize !== void 0) {
      let $ = parseInt(r.maxFileSize, 10);
      if (P = Ni(P, A, "max-file-size", (R) => R.size <= $), P.length === 0)
        return L();
    }
    if (r.multiple !== true && P.length !== 0 && (P = [P[0]]), P.forEach(($) => {
      $.__key = $.webkitRelativePath + $.lastModified + $.name + $.size;
    }), x === true) {
      let $ = g.map((R) => R.__key);
      P = Ni(P, A, "duplicate", (R) => $.includes(R.__key) === false);
    }
    if (P.length === 0)
      return L();
    if (r.maxTotalSize !== void 0) {
      let $ = x === true ? g.reduce((R, B) => R + B.size, 0) : 0;
      if (P = Ni(P, A, "max-total-size", (R) => ($ += R.size, $ <= u.value)), P.length === 0)
        return L();
    }
    if (typeof r.filter == "function") {
      let $ = r.filter(P);
      P = Ni(P, A, "filter", (R) => $.includes(R));
    }
    if (r.maxFiles !== void 0) {
      let $ = x === true ? g.length : 0;
      if (P = Ni(P, A, "max-files", () => ($++, $ <= d.value)), P.length === 0)
        return L();
    }
    if (L(), P.length !== 0)
      return P;
  }
  function m(b) {
    hu(b), t.value !== true && (t.value = true);
  }
  function y(b) {
    qe(b), (b.relatedTarget !== null || rt.is.safari !== true ? b.relatedTarget !== l.value : document.elementsFromPoint(b.clientX, b.clientY).includes(l.value) === false) === true && (t.value = false);
  }
  function h(b) {
    hu(b);
    let p = b.dataTransfer.files;
    p.length !== 0 && n(null, p), t.value = false;
  }
  function w(b) {
    if (t.value === true)
      return vue.h("div", { ref: l, class: `q-${b}__dnd absolute-full`, onDragenter: hu, onDragover: hu, onDragleave: y, onDrop: h });
  }
  return Object.assign(a, { pickFiles: v, addFiles: f }), { pickFiles: v, addFiles: f, onDragover: m, onDragleave: y, processFiles: c, getDndNode: w, maxFilesNumber: d, maxTotalSizeNumber: u };
}
function Su(e, t) {
  function o() {
    let n = e.modelValue;
    try {
      let r = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(n) === n && ("length" in n ? Array.from(n) : [n]).forEach((i) => {
        r.items.add(i);
      }), { files: r.files };
    } catch {
      return { files: void 0 };
    }
  }
  return t === true ? vue.computed(() => {
    if (e.type === "file")
      return o();
  }) : vue.computed(o);
}
var ov = M({ name: "QFile", inheritAttrs: false, props: { ...kc, ...bt, ...bu, modelValue: {}, append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...Xn, ...yu], setup(e, { slots: t, emit: o, attrs: n }) {
  let { proxy: r } = vue.getCurrentInstance(), i = Gn(), a = vue.ref(null), l = vue.ref(false), s = hi(e), { pickFiles: d, onDragover: u, onDragleave: v, processFiles: f, getDndNode: c } = xu({ editable: i.editable, dnd: l, getFileInput: k, addFilesToQueue: S }), m = Su(e), y = vue.computed(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), h = vue.computed(() => ln(y.value)), w = vue.computed(() => y.value.map((E) => E.name).join(", ")), b = vue.computed(() => Nr(y.value.reduce((E, D) => E + D.size, 0))), p = vue.computed(() => ({ totalSize: b.value, filesNumber: y.value.length, maxFiles: e.maxFiles })), g = vue.computed(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: s.value, ...n, id: i.targetUid.value, disabled: i.editable.value !== true })), x = vue.computed(() => "q-file q-field--auto-height" + (l.value === true ? " q-file--dnd" : "")), P = vue.computed(() => e.multiple === true && e.append === true);
  function A(E) {
    let D = y.value.slice();
    D.splice(E, 1), $(D);
  }
  function L(E) {
    let D = y.value.indexOf(E);
    D !== -1 && A(D);
  }
  function $(E) {
    o("update:modelValue", e.multiple === true ? E : E[0]);
  }
  function R(E) {
    E.keyCode === 13 && pt(E);
  }
  function B(E) {
    (E.keyCode === 13 || E.keyCode === 32) && d(E);
  }
  function k() {
    return a.value;
  }
  function S(E, D) {
    let Q = f(E, D, y.value, P.value), ie = k();
    ie != null && (ie.value = ""), Q !== void 0 && ((e.multiple === true ? e.modelValue && Q.every((z) => y.value.includes(z)) : e.modelValue === Q[0]) || $(P.value === true ? y.value.concat(Q) : Q));
  }
  function C() {
    return [vue.h("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function U() {
    if (t.file !== void 0)
      return y.value.length === 0 ? C() : y.value.map((D, Q) => t.file({ index: Q, file: D, ref: this }));
    if (t.selected !== void 0)
      return y.value.length === 0 ? C() : t.selected({ files: y.value, ref: this });
    if (e.useChips === true)
      return y.value.length === 0 ? C() : y.value.map((D, Q) => vue.h(Ei, { key: "file-" + Q, removable: i.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
        A(Q);
      } }, () => vue.h("span", { class: "ellipsis", textContent: D.name })));
    let E = e.displayValue !== void 0 ? e.displayValue : w.value;
    return E.length !== 0 ? [vue.h("div", { class: e.inputClass, style: e.inputStyle, textContent: E })] : C();
  }
  function j() {
    let E = { ref: a, ...g.value, ...m.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: S };
    return e.multiple === true && (E.multiple = true), vue.h("input", E);
  }
  return Object.assign(i, { fieldClass: x, emitValue: $, hasValue: h, inputRef: a, innerValue: y, floatingLabel: vue.computed(() => h.value === true || ln(e.displayValue)), computedCounter: vue.computed(() => {
    if (e.counterLabel !== void 0)
      return e.counterLabel(p.value);
    let E = e.maxFiles;
    return `${y.value.length}${E !== void 0 ? " / " + E : ""} (${b.value})`;
  }), getControlChild: () => c("file"), getControl: () => {
    let E = { ref: i.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return i.editable.value === true && Object.assign(E, { onDragover: u, onDragleave: v, onKeydown: R, onKeyup: B }), vue.h("div", E, [j()].concat(U()));
  } }), Object.assign(r, { removeAtIndex: A, removeFile: L, getNativeElement: () => a.value }), ft(r, "nativeEl", () => a.value), Zn(i);
} });
var nv = M({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = vue.inject(io, We);
  if (r === We)
    return console.error("QFooter needs to be child of QLayout"), We;
  let i = vue.ref(parseInt(e.heightHint, 10)), a = vue.ref(true), l = vue.ref(0), s = vue.computed(() => e.reveal === true || r.view.value.indexOf("F") !== -1 || n.platform.is.ios && r.isContainer.value === true), d = vue.computed(() => r.isContainer.value === true ? r.containerHeight.value : l.value), u = vue.computed(() => {
    if (e.modelValue !== true)
      return 0;
    if (s.value === true)
      return a.value === true ? i.value : 0;
    let x = r.scroll.value.position + d.value + i.value - r.height.value;
    return x > 0 ? x : 0;
  }), v = vue.computed(() => e.modelValue !== true || s.value === true && a.value !== true), f = vue.computed(() => e.modelValue === true && v.value === true && e.reveal === true), c = vue.computed(() => "q-footer q-layout__section--marginal " + (s.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (v.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (s.value !== true ? " hidden" : "") : "")), m = vue.computed(() => {
    let x = r.rows.value.bottom, P = {};
    return x[0] === "l" && r.left.space === true && (P[n.lang.rtl === true ? "right" : "left"] = `${r.left.size}px`), x[2] === "r" && r.right.space === true && (P[n.lang.rtl === true ? "left" : "right"] = `${r.right.size}px`), P;
  });
  function y(x, P) {
    r.update("footer", x, P);
  }
  function h(x, P) {
    x.value !== P && (x.value = P);
  }
  function w({ height: x }) {
    h(i, x), y("size", x);
  }
  function b() {
    if (e.reveal !== true)
      return;
    let { direction: x, position: P, inflectionPoint: A } = r.scroll.value;
    h(a, x === "up" || P - A < 100 || r.height.value - d.value - P - i.value < 300);
  }
  function p(x) {
    f.value === true && h(a, true), o("focusin", x);
  }
  vue.watch(() => e.modelValue, (x) => {
    y("space", x), h(a, true), r.animate();
  }), vue.watch(u, (x) => {
    y("offset", x);
  }), vue.watch(() => e.reveal, (x) => {
    x === false && h(a, e.modelValue);
  }), vue.watch(a, (x) => {
    r.animate(), o("reveal", x);
  }), vue.watch([i, r.scroll, r.height], b), vue.watch(() => n.screen.height, (x) => {
    r.isContainer.value !== true && h(l, x);
  });
  let g = {};
  return r.instances.footer = g, e.modelValue === true && y("size", i.value), y("space", e.modelValue), y("offset", u.value), vue.onBeforeUnmount(() => {
    r.instances.footer === g && (r.instances.footer = void 0, y("size", 0), y("offset", 0), y("space", false));
  }), () => {
    let x = Ue(t.default, [vue.h(so, { debounce: 0, onResize: w })]);
    return e.elevated === true && x.push(vue.h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), vue.h("footer", { class: c.value, style: m.value, onFocusin: p }, x);
  };
} });
var rv = M({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: o }) {
  let n = vue.getCurrentInstance(), r = vue.ref(null), i = 0, a = [];
  function l(c) {
    let m = typeof c == "boolean" ? c : e.noErrorFocus !== true, y = ++i, h = (p, g) => {
      o(`validation${p === true ? "Success" : "Error"}`, g);
    }, w = (p) => {
      let g = p.validate();
      return typeof g.then == "function" ? g.then((x) => ({ valid: x, comp: p }), (x) => ({ valid: false, comp: p, err: x })) : Promise.resolve({ valid: g, comp: p });
    };
    return (e.greedy === true ? Promise.all(a.map(w)).then((p) => p.filter((g) => g.valid !== true)) : a.reduce((p, g) => p.then(() => w(g).then((x) => {
      if (x.valid === false)
        return Promise.reject(x);
    })), Promise.resolve()).catch((p) => [p])).then((p) => {
      if (p === void 0 || p.length === 0)
        return y === i && h(true), true;
      if (y === i) {
        let { comp: g, err: x } = p[0];
        if (x !== void 0 && console.error(x), h(false, g), m === true) {
          let P = p.find(({ comp: A }) => typeof A.focus == "function" && Kt(A.$) === false);
          P !== void 0 && P.comp.focus();
        }
      }
      return false;
    });
  }
  function s() {
    i++, a.forEach((c) => {
      typeof c.resetValidation == "function" && c.resetValidation();
    });
  }
  function d(c) {
    c !== void 0 && qe(c);
    let m = i + 1;
    l().then((y) => {
      m === i && y === true && (e.onSubmit !== void 0 ? o("submit", c) : c !== void 0 && c.target !== void 0 && typeof c.target.submit == "function" && c.target.submit());
    });
  }
  function u(c) {
    c !== void 0 && qe(c), o("reset"), vue.nextTick(() => {
      s(), e.autofocus === true && e.noResetFocus !== true && v();
    });
  }
  function v() {
    Mo(() => {
      if (r.value === null)
        return;
      let c = r.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || r.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || r.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(r.value.querySelectorAll("[tabindex]"), (m) => m.tabIndex !== -1);
      c?.focus({ preventScroll: true });
    });
  }
  vue.provide(hn, { bindComponent(c) {
    a.push(c);
  }, unbindComponent(c) {
    let m = a.indexOf(c);
    m !== -1 && a.splice(m, 1);
  } });
  let f = false;
  return vue.onDeactivated(() => {
    f = true;
  }), vue.onActivated(() => {
    f === true && e.autofocus === true && v();
  }), vue.onMounted(() => {
    e.autofocus === true && v();
  }), Object.assign(n.proxy, { validate: l, resetValidation: s, submit: d, reset: u, focus: v, getValidationComponents: () => a }), () => vue.h("form", { class: "q-form", ref: r, onSubmit: d, onReset: u }, J(t.default));
} });
var iv = { inject: { [hn]: { default: je } }, watch: { disable(e) {
  let t = this.$.provides[hn];
  t !== void 0 && (e === true ? (this.resetValidation(), t.unbindComponent(this)) : t.bindComponent(this));
} }, methods: { validate() {
}, resetValidation() {
} }, mounted() {
  let e = this.$.provides[hn];
  e !== void 0 && this.disable !== true && e.bindComponent(this);
}, beforeUnmount() {
  let e = this.$.provides[hn];
  e !== void 0 && this.disable !== true && e.unbindComponent(this);
} };
var lv = M({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = vue.inject(io, We);
  if (r === We)
    return console.error("QHeader needs to be child of QLayout"), We;
  let i = vue.ref(parseInt(e.heightHint, 10)), a = vue.ref(true), l = vue.computed(() => e.reveal === true || r.view.value.indexOf("H") !== -1 || n.platform.is.ios && r.isContainer.value === true), s = vue.computed(() => {
    if (e.modelValue !== true)
      return 0;
    if (l.value === true)
      return a.value === true ? i.value : 0;
    let b = i.value - r.scroll.value.position;
    return b > 0 ? b : 0;
  }), d = vue.computed(() => e.modelValue !== true || l.value === true && a.value !== true), u = vue.computed(() => e.modelValue === true && d.value === true && e.reveal === true), v = vue.computed(() => "q-header q-layout__section--marginal " + (l.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (d.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), f = vue.computed(() => {
    let b = r.rows.value.top, p = {};
    return b[0] === "l" && r.left.space === true && (p[n.lang.rtl === true ? "right" : "left"] = `${r.left.size}px`), b[2] === "r" && r.right.space === true && (p[n.lang.rtl === true ? "left" : "right"] = `${r.right.size}px`), p;
  });
  function c(b, p) {
    r.update("header", b, p);
  }
  function m(b, p) {
    b.value !== p && (b.value = p);
  }
  function y({ height: b }) {
    m(i, b), c("size", b);
  }
  function h(b) {
    u.value === true && m(a, true), o("focusin", b);
  }
  vue.watch(() => e.modelValue, (b) => {
    c("space", b), m(a, true), r.animate();
  }), vue.watch(s, (b) => {
    c("offset", b);
  }), vue.watch(() => e.reveal, (b) => {
    b === false && m(a, e.modelValue);
  }), vue.watch(a, (b) => {
    r.animate(), o("reveal", b);
  }), vue.watch(r.scroll, (b) => {
    e.reveal === true && m(a, b.direction === "up" || b.position <= e.revealOffset || b.position - b.inflectionPoint < 100);
  });
  let w = {};
  return r.instances.header = w, e.modelValue === true && c("size", i.value), c("space", e.modelValue), c("offset", s.value), vue.onBeforeUnmount(() => {
    r.instances.header === w && (r.instances.header = void 0, c("size", 0), c("offset", 0), c("space", false));
  }), () => {
    let b = Wo(t.default, []);
    return e.elevated === true && b.push(vue.h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), b.push(vue.h(so, { debounce: 0, onResize: y })), vue.h("header", { class: v.value, style: f.value, onFocusin: h }, b);
  };
} });
var Ki = { ratio: [String, Number] };
function Wi(e, t) {
  return vue.computed(() => {
    let o = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(o) !== true && o > 0 ? { paddingBottom: `${100 / o}%` } : null;
  });
}
var o_ = 1.7778, uv = M({ name: "QImg", props: { ...Ki, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: o_ }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: o }) {
  let n = vue.ref(e.initialRatio), r = Wi(e, n), i = vue.getCurrentInstance(), { registerTimeout: a, removeTimeout: l } = Jt(), { registerTimeout: s, removeTimeout: d } = Jt(), u = vue.computed(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), v = vue.computed(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), f = [vue.ref(null), vue.ref(u.value)], c = vue.ref(0), m = vue.ref(false), y = vue.ref(false), h = vue.computed(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), w = vue.computed(() => ({ width: e.width, height: e.height })), b = vue.computed(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), p = vue.computed(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  function x() {
    d(), m.value = false;
  }
  function P({ target: k }) {
    Kt(i) === false && (l(), n.value = k.naturalHeight === 0 ? 0.5 : k.naturalWidth / k.naturalHeight, A(k, 1));
  }
  function A(k, S) {
    S === 1e3 || Kt(i) === true || (k.complete === true ? L(k) : a(() => {
      A(k, S + 1);
    }, 50));
  }
  function L(k) {
    Kt(i) !== true && (c.value = c.value ^ 1, f[c.value].value = null, x(), k.getAttribute("__qerror") !== "true" && (y.value = false), o("load", k.currentSrc || k.src));
  }
  function $(k) {
    l(), x(), y.value = true, f[c.value].value = v.value, f[c.value ^ 1].value = u.value, o("error", k);
  }
  function R(k) {
    let S = f[k].value, C = { key: "img_" + k, class: b.value, style: p.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...S };
    return c.value === k ? Object.assign(C, { class: C.class + "current", onLoad: P, onError: $ }) : C.class += "loaded", vue.h("div", { class: "q-img__container absolute-full", key: "img" + k }, vue.h("img", C));
  }
  function B() {
    return m.value === false ? vue.h("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, J(t[y.value === true ? "error" : "default"])) : vue.h("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [vue.h(xt, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  return () => {
    let k = [];
    return r.value !== null && k.push(vue.h("div", { key: "filler", style: r.value })), f[0].value !== null && k.push(R(0)), f[1].value !== null && k.push(R(1)), k.push(vue.h(vue.Transition, { name: "q-transition--fade" }, B)), vue.h("div", { key: "main", class: h.value, style: w.value, role: "img", "aria-label": e.alt }, k);
  };
} });
var { passive: Pr } = Ge, fv = M({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: ao, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: o }) {
  let n = vue.ref(false), r = vue.ref(true), i = vue.ref(null), a = vue.ref(null), l = e.initialIndex, s, d, u = vue.computed(() => "q-infinite-scroll__loading" + (n.value === true ? "" : " invisible"));
  function v() {
    if (e.disable === true || n.value === true || r.value === false)
      return;
    let A = ii(s), L = Ro(s), $ = fr(s);
    e.reverse === false ? Math.round(L + $ + e.offset) >= Math.round(A) && f() : Math.round(L) <= e.offset && f();
  }
  function f() {
    if (e.disable === true || n.value === true || r.value === false)
      return;
    l++, n.value = true;
    let A = ii(s);
    o("load", l, (L) => {
      r.value === true && (n.value = false, vue.nextTick(() => {
        if (e.reverse === true) {
          let $ = ii(s), R = Ro(s), B = $ - A;
          Go(s, R + B);
        }
        L === true ? y() : i.value && i.value.closest("body") && d();
      }));
    });
  }
  function c() {
    l = 0;
  }
  function m() {
    r.value === false && (r.value = true, s.addEventListener("scroll", d, Pr)), v();
  }
  function y() {
    r.value === true && (r.value = false, n.value = false, s.removeEventListener("scroll", d, Pr), d !== void 0 && d.cancel !== void 0 && d.cancel());
  }
  function h() {
    if (s && r.value === true && s.removeEventListener("scroll", d, Pr), s = Nt(i.value, e.scrollTarget), r.value === true) {
      if (s.addEventListener("scroll", d, Pr), e.reverse === true) {
        let A = ii(s), L = fr(s);
        Go(s, A - L);
      }
      v();
    }
  }
  function w(A) {
    l = A;
  }
  function b(A) {
    A = parseInt(A, 10);
    let L = d;
    d = A <= 0 ? v : Lo(v, isNaN(A) === true ? 100 : A), s && r.value === true && (L !== void 0 && s.removeEventListener("scroll", L, Pr), s.addEventListener("scroll", d, Pr));
  }
  function p(A) {
    if (g.value === true) {
      if (a.value === null) {
        A !== true && vue.nextTick(() => {
          p(true);
        });
        return;
      }
      let L = `${n.value === true ? "un" : ""}pauseAnimations`;
      Array.from(a.value.getElementsByTagName("svg")).forEach(($) => {
        $[L]();
      });
    }
  }
  let g = vue.computed(() => e.disable !== true && r.value === true);
  vue.watch([n, g], () => {
    p();
  }), vue.watch(() => e.disable, (A) => {
    A === true ? y() : m();
  }), vue.watch(() => e.reverse, () => {
    n.value === false && r.value === true && v();
  }), vue.watch(() => e.scrollTarget, h), vue.watch(() => e.debounce, b);
  let x = false;
  vue.onActivated(() => {
    x !== false && s && Go(s, x);
  }), vue.onDeactivated(() => {
    x = s ? Ro(s) : false;
  }), vue.onBeforeUnmount(() => {
    r.value === true && s.removeEventListener("scroll", d, Pr);
  }), vue.onMounted(() => {
    b(e.debounce), h(), n.value === false && p();
  });
  let P = vue.getCurrentInstance();
  return Object.assign(P.proxy, { poll: () => {
    d !== void 0 && d();
  }, trigger: f, stop: y, reset: c, resume: m, setIndex: w, updateScrollTarget: h }), () => {
    let A = Wo(t.default, []);
    return g.value === true && A[e.reverse === false ? "push" : "unshift"](vue.h("div", { ref: a, class: u.value }, J(t.loading))), vue.h("div", { class: "q-infinite-scroll", ref: i }, A);
  };
} });
var vv = M({ name: "QInnerLoading", props: { ...pe, ...Po, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  let o = vue.getCurrentInstance(), n = he(e, o.proxy.$q), { transitionProps: r, transitionStyle: i } = zn(e), a = vue.computed(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (n.value === true ? " q-inner-loading--dark" : "")), l = vue.computed(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function s() {
    let u = [vue.h(xt, { size: e.size, color: e.color })];
    return e.label !== void 0 && u.push(vue.h("div", { class: l.value, style: e.labelStyle }, [e.label])), u;
  }
  function d() {
    return e.showing === true ? vue.h("div", { class: a.value, style: i.value }, t.default !== void 0 ? t.default() : s()) : null;
  }
  return () => vue.h(vue.Transition, r.value, d);
} });
var pv = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, ku = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, bv = Object.keys(ku);
bv.forEach((e) => {
  ku[e].regex = new RegExp(ku[e].pattern);
});
var d_ = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + bv.join("") + "])|(.)", "g"), hv = /[.*+?^${}()|[\]\\]/g, Pt = "", yv = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function xv(e, t, o, n) {
  let r, i, a, l, s, d, u = vue.ref(null), v = vue.ref(c());
  function f() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  vue.watch(() => e.type + e.autogrow, y), vue.watch(() => e.mask, ($) => {
    if ($ !== void 0)
      h(v.value, true);
    else {
      let R = A(v.value);
      y(), e.modelValue !== R && t("update:modelValue", R);
    }
  }), vue.watch(() => e.fillMask + e.reverseFillMask, () => {
    u.value === true && h(v.value, true);
  }), vue.watch(() => e.unmaskedValue, () => {
    u.value === true && h(v.value);
  });
  function c() {
    if (y(), u.value === true) {
      let $ = x(A(e.modelValue));
      return e.fillMask !== false ? L($) : $;
    }
    return e.modelValue;
  }
  function m($) {
    if ($ < r.length)
      return r.slice(-$);
    let R = "", B = r, k = B.indexOf(Pt);
    if (k !== -1) {
      for (let S = $ - B.length; S > 0; S--)
        R += Pt;
      B = B.slice(0, k) + R + B.slice(k);
    }
    return B;
  }
  function y() {
    if (u.value = e.mask !== void 0 && e.mask.length !== 0 && f(), u.value === false) {
      l = void 0, r = "", i = "";
      return;
    }
    let $ = pv[e.mask] === void 0 ? e.mask : pv[e.mask], R = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", B = R.replace(hv, "\\$&"), k = [], S = [], C = [], U = e.reverseFillMask === true, j = "", E = "";
    $.replace(d_, (z, _, N, H, oe) => {
      if (H !== void 0) {
        let q = ku[H];
        C.push(q), E = q.negate, U === true && (S.push("(?:" + E + "+)?(" + q.pattern + "+)?(?:" + E + "+)?(" + q.pattern + "+)?"), U = false), S.push("(?:" + E + "+)?(" + q.pattern + ")?");
      } else if (N !== void 0)
        j = "\\" + (N === "\\" ? "" : N), C.push(N), k.push("([^" + j + "]+)?" + j + "?");
      else {
        let q = _ !== void 0 ? _ : oe;
        j = q === "\\" ? "\\\\\\\\" : q.replace(hv, "\\\\$&"), C.push(q), k.push("([^" + j + "]+)?" + j + "?");
      }
    });
    let D = new RegExp("^" + k.join("") + "(" + (j === "" ? "." : "[^" + j + "]") + "+)?" + (j === "" ? "" : "[" + j + "]*") + "$"), Q = S.length - 1, ie = S.map((z, _) => _ === 0 && e.reverseFillMask === true ? new RegExp("^" + B + "*" + z) : _ === Q ? new RegExp("^" + z + "(" + (E === "" ? "." : E) + "+)?" + (e.reverseFillMask === true ? "$" : B + "*")) : new RegExp("^" + z));
    a = C, l = (z) => {
      let _ = D.exec(e.reverseFillMask === true ? z : z.slice(0, C.length + 1));
      _ !== null && (z = _.slice(1).join(""));
      let N = [], H = ie.length;
      for (let oe = 0, q = z; oe < H; oe++) {
        let V = ie[oe].exec(q);
        if (V === null)
          break;
        q = q.slice(V.shift().length), N.push(...V);
      }
      return N.length !== 0 ? N.join("") : z;
    }, r = C.map((z) => typeof z == "string" ? z : Pt).join(""), i = r.split(Pt).join(R);
  }
  function h($, R, B) {
    let k = n.value, S = k.selectionEnd, C = k.value.length - S, U = A($);
    R === true && y();
    let j = x(U), E = e.fillMask !== false ? L(j) : j, D = v.value !== E;
    k.value !== E && (k.value = E), D === true && (v.value = E), document.activeElement === k && vue.nextTick(() => {
      if (E === i) {
        let ie = e.reverseFillMask === true ? i.length : 0;
        k.setSelectionRange(ie, ie, "forward");
        return;
      }
      if (B === "insertFromPaste" && e.reverseFillMask !== true) {
        let ie = k.selectionEnd, z = S - 1;
        for (let _ = s; _ <= z && _ < ie; _++)
          r[_] !== Pt && z++;
        b.right(k, z);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(B) !== -1) {
        let ie = e.reverseFillMask === true ? S === 0 ? E.length > j.length ? 1 : 0 : Math.max(0, E.length - (E === i ? 0 : Math.min(j.length, C) + 1)) + 1 : S;
        k.setSelectionRange(ie, ie, "forward");
        return;
      }
      if (e.reverseFillMask === true)
        if (D === true) {
          let ie = Math.max(0, E.length - (E === i ? 0 : Math.min(j.length, C + 1)));
          ie === 1 && S === 1 ? k.setSelectionRange(ie, ie, "forward") : b.rightReverse(k, ie);
        } else {
          let ie = E.length - C;
          k.setSelectionRange(ie, ie, "backward");
        }
      else if (D === true) {
        let ie = Math.max(0, r.indexOf(Pt), Math.min(j.length, S) - 1);
        b.right(k, ie);
      } else {
        let ie = S - 1;
        b.right(k, ie);
      }
    });
    let Q = e.unmaskedValue === true ? A(E) : E;
    String(e.modelValue) !== Q && (e.modelValue !== null || Q !== "") && o(Q, true);
  }
  function w($, R, B) {
    let k = x(A($.value));
    R = Math.max(0, r.indexOf(Pt), Math.min(k.length, R)), s = R, $.setSelectionRange(R, B, "forward");
  }
  let b = { left($, R) {
    let B = r.slice(R - 1).indexOf(Pt) === -1, k = Math.max(0, R - 1);
    for (; k >= 0; k--)
      if (r[k] === Pt) {
        R = k, B === true && R++;
        break;
      }
    if (k < 0 && r[R] !== void 0 && r[R] !== Pt)
      return b.right($, 0);
    R >= 0 && $.setSelectionRange(R, R, "backward");
  }, right($, R) {
    let B = $.value.length, k = Math.min(B, R + 1);
    for (; k <= B; k++)
      if (r[k] === Pt) {
        R = k;
        break;
      } else
        r[k - 1] === Pt && (R = k);
    if (k > B && r[R - 1] !== void 0 && r[R - 1] !== Pt)
      return b.left($, B);
    $.setSelectionRange(R, R, "forward");
  }, leftReverse($, R) {
    let B = m($.value.length), k = Math.max(0, R - 1);
    for (; k >= 0; k--)
      if (B[k - 1] === Pt) {
        R = k;
        break;
      } else if (B[k] === Pt && (R = k, k === 0))
        break;
    if (k < 0 && B[R] !== void 0 && B[R] !== Pt)
      return b.rightReverse($, 0);
    R >= 0 && $.setSelectionRange(R, R, "backward");
  }, rightReverse($, R) {
    let B = $.value.length, k = m(B), S = k.slice(0, R + 1).indexOf(Pt) === -1, C = Math.min(B, R + 1);
    for (; C <= B; C++)
      if (k[C - 1] === Pt) {
        R = C, R > 0 && S === true && R--;
        break;
      }
    if (C > B && k[R - 1] !== void 0 && k[R - 1] !== Pt)
      return b.leftReverse($, B);
    $.setSelectionRange(R, R, "forward");
  } };
  function p($) {
    t("click", $), d = void 0;
  }
  function g($) {
    if (t("keydown", $), go($) === true || $.altKey === true)
      return;
    let R = n.value, B = R.selectionStart, k = R.selectionEnd;
    if ($.shiftKey || (d = void 0), $.keyCode === 37 || $.keyCode === 39) {
      $.shiftKey && d === void 0 && (d = R.selectionDirection === "forward" ? B : k);
      let S = b[($.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if ($.preventDefault(), S(R, d === B ? k : B), $.shiftKey) {
        let C = R.selectionStart;
        R.setSelectionRange(Math.min(d, C), Math.max(d, C), "forward");
      }
    } else
      $.keyCode === 8 && e.reverseFillMask !== true && B === k ? (b.left(R, B), R.setSelectionRange(R.selectionStart, k, "backward")) : $.keyCode === 46 && e.reverseFillMask === true && B === k && (b.rightReverse(R, k), R.setSelectionRange(B, R.selectionEnd, "forward"));
  }
  function x($) {
    if ($ == null || $ === "")
      return "";
    if (e.reverseFillMask === true)
      return P($);
    let R = a, B = 0, k = "";
    for (let S = 0; S < R.length; S++) {
      let C = $[B], U = R[S];
      if (typeof U == "string")
        k += U, C === U && B++;
      else if (C !== void 0 && U.regex.test(C))
        k += U.transform !== void 0 ? U.transform(C) : C, B++;
      else
        return k;
    }
    return k;
  }
  function P($) {
    let R = a, B = r.indexOf(Pt), k = $.length - 1, S = "";
    for (let C = R.length - 1; C >= 0 && k !== -1; C--) {
      let U = R[C], j = $[k];
      if (typeof U == "string")
        S = U + S, j === U && k--;
      else if (j !== void 0 && U.regex.test(j))
        do
          S = (U.transform !== void 0 ? U.transform(j) : j) + S, k--, j = $[k];
        while (B === C && j !== void 0 && U.regex.test(j));
      else
        return S;
    }
    return S;
  }
  function A($) {
    return typeof $ != "string" || l === void 0 ? typeof $ == "number" ? l("" + $) : $ : l($);
  }
  function L($) {
    return i.length - $.length <= 0 ? $ : e.reverseFillMask === true && $.length !== 0 ? i.slice(0, -$.length) + $ : $ + i.slice($.length);
  }
  return { innerValue: v, hasMask: u, moveCursorForPaste: w, updateMaskValue: h, onMaskedKeydown: g, onMaskedClick: p };
}
var f_ = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, m_ = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, v_ = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, g_ = /[a-z0-9_ -]$/i;
function qu(e) {
  return function(o) {
    if (o.type === "compositionend" || o.type === "change") {
      if (o.target.qComposing !== true)
        return;
      o.target.qComposing = false, e(o);
    } else
      o.type === "compositionupdate" && o.target.qComposing !== true && typeof o.data == "string" && (rt.is.firefox === true ? g_.test(o.data) === false : f_.test(o.data) === true || m_.test(o.data) === true || v_.test(o.data) === true) === true && (o.target.qComposing = true);
  };
}
var Gi = M({ name: "QInput", inheritAttrs: false, props: { ...Tr, ...yv, ...bt, modelValue: {}, shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...Xn, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = {}, a = NaN, l, s, d = null, u, v = vue.ref(null), f = hi(e), { innerValue: c, hasMask: m, moveCursorForPaste: y, updateMaskValue: h, onMaskedKeydown: w, onMaskedClick: b } = xv(e, t, j, v), p = Su(e, true), g = vue.computed(() => ln(c.value)), x = qu(C), P = Gn({ changeEvent: true }), A = vue.computed(() => e.type === "textarea" || e.autogrow === true), L = vue.computed(() => A.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), $ = vue.computed(() => {
    let _ = { ...P.splitAttrs.listeners.value, onInput: C, onPaste: S, onChange: D, onBlur: Q, onFocus: nt };
    return _.onCompositionstart = _.onCompositionupdate = _.onCompositionend = x, m.value === true && (_.onKeydown = w, _.onClick = b), e.autogrow === true && (_.onAnimationend = U), _;
  }), R = vue.computed(() => {
    let _ = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: f.value, ...P.splitAttrs.attributes.value, id: P.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return A.value === false && (_.type = e.type), e.autogrow === true && (_.rows = 1), _;
  });
  vue.watch(() => e.type, () => {
    v.value && (v.value.value = e.modelValue);
  }), vue.watch(() => e.modelValue, (_) => {
    if (m.value === true) {
      if (s === true && (s = false, String(_) === a))
        return;
      h(_);
    } else
      c.value !== _ && (c.value = _, e.type === "number" && i.hasOwnProperty("value") === true && (l === true ? l = false : delete i.value));
    e.autogrow === true && vue.nextTick(E);
  }), vue.watch(() => e.autogrow, (_) => {
    _ === true ? vue.nextTick(E) : v.value !== null && o.rows > 0 && (v.value.style.height = "auto");
  }), vue.watch(() => e.dense, () => {
    e.autogrow === true && vue.nextTick(E);
  });
  function B() {
    Mo(() => {
      let _ = document.activeElement;
      v.value !== null && v.value !== _ && (_ === null || _.id !== P.targetUid.value) && v.value.focus({ preventScroll: true });
    });
  }
  function k() {
    v.value !== null && v.value.select();
  }
  function S(_) {
    if (m.value === true && e.reverseFillMask !== true) {
      let N = _.target;
      y(N, N.selectionStart, N.selectionEnd);
    }
    t("paste", _);
  }
  function C(_) {
    if (!_ || !_.target)
      return;
    if (e.type === "file") {
      t("update:modelValue", _.target.files);
      return;
    }
    let N = _.target.value;
    if (_.target.qComposing === true) {
      i.value = N;
      return;
    }
    if (m.value === true)
      h(N, false, _.inputType);
    else if (j(N), L.value === true && _.target === document.activeElement) {
      let { selectionStart: H, selectionEnd: oe } = _.target;
      H !== void 0 && oe !== void 0 && vue.nextTick(() => {
        _.target === document.activeElement && N.indexOf(_.target.value) === 0 && _.target.setSelectionRange(H, oe);
      });
    }
    e.autogrow === true && E();
  }
  function U(_) {
    t("animationend", _), E();
  }
  function j(_, N) {
    u = () => {
      d = null, e.type !== "number" && i.hasOwnProperty("value") === true && delete i.value, e.modelValue !== _ && a !== _ && (a = _, N === true && (s = true), t("update:modelValue", _), vue.nextTick(() => {
        a === _ && (a = NaN);
      })), u = void 0;
    }, e.type === "number" && (l = true, i.value = _), e.debounce !== void 0 ? (d !== null && clearTimeout(d), i.value = _, d = setTimeout(u, e.debounce)) : u();
  }
  function E() {
    requestAnimationFrame(() => {
      let _ = v.value;
      if (_ !== null) {
        let N = _.parentNode.style, { scrollTop: H } = _, { overflowY: oe, maxHeight: q } = r.platform.is.firefox === true ? {} : window.getComputedStyle(_), V = oe !== void 0 && oe !== "scroll";
        V === true && (_.style.overflowY = "hidden"), N.marginBottom = _.scrollHeight - 1 + "px", _.style.height = "1px", _.style.height = _.scrollHeight + "px", V === true && (_.style.overflowY = parseInt(q, 10) < _.scrollHeight ? "auto" : "hidden"), N.marginBottom = "", _.scrollTop = H;
      }
    });
  }
  function D(_) {
    x(_), d !== null && (clearTimeout(d), d = null), u !== void 0 && u(), t("change", _.target.value);
  }
  function Q(_) {
    _ !== void 0 && nt(_), d !== null && (clearTimeout(d), d = null), u !== void 0 && u(), l = false, s = false, delete i.value, e.type !== "file" && setTimeout(() => {
      v.value !== null && (v.value.value = c.value !== void 0 ? c.value : "");
    });
  }
  function ie() {
    return i.hasOwnProperty("value") === true ? i.value : c.value !== void 0 ? c.value : "";
  }
  vue.onBeforeUnmount(() => {
    Q();
  }), vue.onMounted(() => {
    e.autogrow === true && E();
  }), Object.assign(P, { innerValue: c, fieldClass: vue.computed(() => `q-${A.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: vue.computed(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: v, emitValue: j, hasValue: g, floatingLabel: vue.computed(() => g.value === true && (e.type !== "number" || isNaN(c.value) === false) || ln(e.displayValue)), getControl: () => vue.h(A.value === true ? "textarea" : "input", { ref: v, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...R.value, ...$.value, ...e.type !== "file" ? { value: ie() } : p.value }), getShadowControl: () => vue.h("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (A.value === true ? "" : " text-no-wrap") }, [vue.h("span", { class: "invisible" }, ie()), vue.h("span", e.shadowText)]) });
  let z = Zn(P);
  return Object.assign(n, { focus: B, select: k, getNativeElement: () => v.value }), ft(n, "nativeEl", () => v.value), z;
} });
var Pu = wt({ name: "intersection", getSSRProps: Mt });
var Sv = M({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: o }) {
  let n = vue.ref(e.ssrPrerender), r = vue.computed(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: s, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : s), i = vue.computed(() => e.disable !== true && (e.once !== true || e.ssrPrerender !== true)), a = vue.computed(() => [[Pu, r.value, void 0, { once: e.once }]]), l = vue.computed(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function s(u) {
    n.value !== u.isIntersecting && (n.value = u.isIntersecting, e.onVisibility !== void 0 && o("visibility", n.value));
  }
  function d() {
    if (n.value === true)
      return [vue.h("div", { key: "content", style: l.value }, J(t.default))];
    if (t.hidden !== void 0)
      return [vue.h("div", { key: "hidden", style: l.value }, t.hidden())];
  }
  return () => {
    let u = e.transition ? [vue.h(vue.Transition, { name: "q-transition--" + e.transition }, d)] : d();
    return yt(e.tag, { class: "q-intersection" }, u, "main", i.value, () => a.value);
  };
} });
var Eu = M({ name: "QList", props: { ...pe, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  let o = vue.getCurrentInstance(), n = he(e, o.proxy.$q), r = vue.computed(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (n.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => vue.h(e.tag, { class: r.value }, J(t.default));
} });
var wv = [34, 37, 40, 33, 39, 38], M_ = Object.keys(wa), Cv = M({ name: "QKnob", props: { ...bt, ...wa, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = vue.ref(e.modelValue), a = vue.ref(false), l = vue.computed(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), s = vue.computed(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax), d;
  function u() {
    i.value = e.modelValue === null ? l.value : Xe(e.modelValue, l.value, s.value), B(true);
  }
  vue.watch(() => `${e.modelValue}|${l.value}|${s.value}`, u), u();
  let v = vue.computed(() => e.disable === false && e.readonly === false), f = vue.computed(() => "q-knob non-selectable" + (v.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), c = vue.computed(() => (String(e.step).trim().split(".")[1] || "").length), m = vue.computed(() => e.step === 0 ? 1 : e.step), y = vue.computed(() => e.instantFeedback === true || a.value === true), h = r.platform.is.mobile === true ? vue.computed(() => v.value === true ? { onClick: A } : {}) : vue.computed(() => v.value === true ? { onMousedown: P, onClick: A, onKeydown: L, onKeyup: R } : {}), w = vue.computed(() => v.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), b = vue.computed(() => {
    let C = {};
    return M_.forEach((U) => {
      C[U] = e[U];
    }), C;
  });
  function p(C) {
    C.isFinal ? ($(C.evt, true), a.value = false) : (C.isFirst && (x(), a.value = true), $(C.evt));
  }
  let g = vue.computed(() => [[St, p, void 0, { prevent: true, stop: true, mouse: true }]]);
  function x() {
    let { top: C, left: U, width: j, height: E } = n.$el.getBoundingClientRect();
    d = { top: C + E / 2, left: U + j / 2 };
  }
  function P(C) {
    x(), $(C);
  }
  function A(C) {
    x(), $(C, true);
  }
  function L(C) {
    if (!wv.includes(C.keyCode))
      return;
    qe(C);
    let U = ([34, 33].includes(C.keyCode) ? 10 : 1) * m.value, j = [34, 37, 40].includes(C.keyCode) ? -U : U;
    i.value = Xe(parseFloat((i.value + j).toFixed(c.value)), l.value, s.value), B();
  }
  function $(C, U) {
    let j = So(C), E = Math.abs(j.top - d.top), D = Math.sqrt(E ** 2 + Math.abs(j.left - d.left) ** 2), Q = Math.asin(E / D) * (180 / Math.PI);
    j.top < d.top ? Q = d.left < j.left ? 90 - Q : 270 + Q : Q = d.left < j.left ? Q + 90 : 270 - Q, r.lang.rtl === true ? Q = dr(-Q - e.angle, 0, 360) : e.angle && (Q = dr(Q - e.angle, 0, 360)), e.reverse === true && (Q = 360 - Q);
    let ie = e.min + Q / 360 * (e.max - e.min);
    if (m.value !== 0) {
      let z = ie % m.value;
      ie = ie - z + (Math.abs(z) >= m.value / 2 ? (z < 0 ? -1 : 1) * m.value : 0), ie = parseFloat(ie.toFixed(c.value));
    }
    ie = Xe(ie, l.value, s.value), o("dragValue", ie), i.value !== ie && (i.value = ie), B(U);
  }
  function R(C) {
    wv.includes(C.keyCode) && B(true);
  }
  function B(C) {
    e.modelValue !== i.value && o("update:modelValue", i.value), C === true && o("change", i.value);
  }
  let k = Jo(e);
  function S() {
    return vue.h("input", k.value);
  }
  return () => {
    let C = { class: f.value, role: "slider", "aria-valuemin": l.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, ...w.value, ...b.value, value: i.value, instantFeedback: y.value, ...h.value }, U = { default: t.default };
    return v.value === true && e.name !== void 0 && (U.internal = S), yt($i, C, U, "knob", v.value, () => g.value);
  };
} });
var { passive: qv } = Ge, A_ = ["both", "horizontal", "vertical"], Zi = M({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => A_.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: ao }, emits: ["scroll"], setup(e, { emit: t }) {
  let o = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } }, n = null, r, i;
  vue.watch(() => e.scrollTarget, () => {
    s(), l();
  });
  function a() {
    n !== null && n();
    let v = Math.max(0, Ro(r)), f = ai(r), c = { top: v - o.position.top, left: f - o.position.left };
    if (e.axis === "vertical" && c.top === 0 || e.axis === "horizontal" && c.left === 0)
      return;
    let m = Math.abs(c.top) >= Math.abs(c.left) ? c.top < 0 ? "up" : "down" : c.left < 0 ? "left" : "right";
    o.position = { top: v, left: f }, o.directionChanged = o.direction !== m, o.delta = c, o.directionChanged === true && (o.direction = m, o.inflectionPoint = o.position), t("scroll", { ...o });
  }
  function l() {
    r = Nt(i, e.scrollTarget), r.addEventListener("scroll", d, qv), d(true);
  }
  function s() {
    r !== void 0 && (r.removeEventListener("scroll", d, qv), r = void 0);
  }
  function d(v) {
    if (v === true || e.debounce === 0 || e.debounce === "0")
      a();
    else if (n === null) {
      let [f, c] = e.debounce ? [setTimeout(a, e.debounce), clearTimeout] : [requestAnimationFrame(a), cancelAnimationFrame];
      n = () => {
        c(f), n = null;
      };
    }
  }
  let { proxy: u } = vue.getCurrentInstance();
  return vue.watch(() => u.$q.lang.rtl, a), vue.onMounted(() => {
    i = u.$el.parentNode, l();
  }), vue.onBeforeUnmount(() => {
    n !== null && n(), s();
  }), Object.assign(u, { trigger: d, getPosition: () => o }), je;
} });
var Tv = M({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = vue.ref(null), i = vue.ref(n.screen.height), a = vue.ref(e.container === true ? 0 : n.screen.width), l = vue.ref({ position: 0, direction: "down", inflectionPoint: 0 }), s = vue.ref(0), d = vue.ref(0), u = vue.computed(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), v = vue.computed(() => e.container === false ? { minHeight: n.screen.height + "px" } : null), f = vue.computed(() => d.value !== 0 ? { [n.lang.rtl === true ? "left" : "right"]: `${d.value}px` } : null), c = vue.computed(() => d.value !== 0 ? { [n.lang.rtl === true ? "right" : "left"]: 0, [n.lang.rtl === true ? "left" : "right"]: `-${d.value}px`, width: `calc(100% + ${d.value}px)` } : null);
  function m(g) {
    if (e.container === true || document.qScrollPrevented !== true) {
      let x = { position: g.position.top, direction: g.direction, directionChanged: g.directionChanged, inflectionPoint: g.inflectionPoint.top, delta: g.delta.top };
      l.value = x, e.onScroll !== void 0 && o("scroll", x);
    }
  }
  function y(g) {
    let { height: x, width: P } = g, A = false;
    i.value !== x && (A = true, i.value = x, e.onScrollHeight !== void 0 && o("scrollHeight", x), w()), a.value !== P && (A = true, a.value = P), A === true && e.onResize !== void 0 && o("resize", g);
  }
  function h({ height: g }) {
    s.value !== g && (s.value = g, w());
  }
  function w() {
    if (e.container === true) {
      let g = i.value > s.value ? li() : 0;
      d.value !== g && (d.value = g);
    }
  }
  let b = null, p = { instances: {}, view: vue.computed(() => e.view), isContainer: vue.computed(() => e.container), rootRef: r, height: i, containerHeight: s, scrollbarWidth: d, totalWidth: vue.computed(() => a.value + d.value), rows: vue.computed(() => {
    let g = e.view.toLowerCase().split(" ");
    return { top: g[0].split(""), middle: g[1].split(""), bottom: g[2].split("") };
  }), header: vue.reactive({ size: 0, offset: 0, space: false }), right: vue.reactive({ size: 300, offset: 0, space: false }), footer: vue.reactive({ size: 0, offset: 0, space: false }), left: vue.reactive({ size: 300, offset: 0, space: false }), scroll: l, animate() {
    b !== null ? clearTimeout(b) : document.body.classList.add("q-body--layout-animate"), b = setTimeout(() => {
      b = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(g, x, P) {
    p[g][x] = P;
  } };
  return vue.provide(io, p), () => {
    let g = Ue(t.default, [vue.h(Zi, { onScroll: m }), vue.h(so, { onResize: y })]), x = vue.h("div", { class: u.value, style: v.value, ref: e.container === true ? void 0 : r, tabindex: -1 }, g);
    return e.container === true ? vue.h("div", { class: "q-layout-container overflow-hidden", ref: r }, [vue.h(so, { onResize: h }), vue.h("div", { class: "absolute-full", style: f.value }, [vue.h("div", { class: "scroll", style: c.value }, [x])])]) : x;
  };
} });
var D_ = ["horizontal", "vertical", "cell", "none"], $u = M({ name: "QMarkupTable", props: { ...pe, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => D_.includes(e) } }, setup(e, { slots: t }) {
  let o = vue.getCurrentInstance(), n = he(e, o.proxy.$q), r = vue.computed(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (n.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => vue.h("div", { class: r.value }, [vue.h("table", { class: "q-table" }, J(t.default))]);
} });
var Pv = M({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  let { isHydrated: o } = ka();
  return () => {
    if (o.value === true) {
      let i = J(t.default);
      return i === void 0 ? i : i.length > 1 ? vue.h(e.tag, {}, i) : i[0];
    }
    let n = { class: "q-no-ssr-placeholder" }, r = J(t.placeholder);
    if (r !== void 0)
      return r.length > 1 ? vue.h(e.tag, n, r) : r[0];
    if (e.placeholder !== void 0)
      return vue.h(e.tag, n, e.placeholder);
  };
} });
var O_ = vue.h("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [vue.h("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), vue.h("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), Bu = M({ name: "QRadio", props: { ...pe, ...Lt, ...bt, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), r = he(e, n.$q), i = Ft(e, Vl), a = vue.ref(null), { refocusTargetEl: l, refocusTarget: s } = Dl(e, a), d = vue.computed(() => vue.toRaw(e.modelValue) === vue.toRaw(e.val)), u = vue.computed(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), v = vue.computed(() => {
    let p = e.color !== void 0 && (e.keepColor === true || d.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${d.value === true ? "truthy" : "falsy"}${p}`;
  }), f = vue.computed(() => (d.value === true ? e.checkedIcon : e.uncheckedIcon) || null), c = vue.computed(() => e.disable === true ? -1 : e.tabindex || 0), m = vue.computed(() => {
    let p = { type: "radio" };
    return e.name !== void 0 && Object.assign(p, { ".checked": d.value === true, "^checked": d.value === true ? "checked" : void 0, name: e.name, value: e.val }), p;
  }), y = Wt(m);
  function h(p) {
    p !== void 0 && (qe(p), s(p)), e.disable !== true && d.value !== true && o("update:modelValue", e.val, p);
  }
  function w(p) {
    (p.keyCode === 13 || p.keyCode === 32) && qe(p);
  }
  function b(p) {
    (p.keyCode === 13 || p.keyCode === 32) && h(p);
  }
  return Object.assign(n, { set: h }), () => {
    let p = f.value !== null ? [vue.h("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [vue.h(_e, { class: "q-radio__icon", name: f.value })])] : [O_];
    e.disable !== true && y(p, "unshift", " q-radio__native q-ma-none q-pa-none");
    let g = [vue.h("div", { class: v.value, style: i.value, "aria-hidden": "true" }, p)];
    l.value !== null && g.push(l.value);
    let x = e.label !== void 0 ? Ue(t.default, [e.label]) : J(t.default);
    return x !== void 0 && g.push(vue.h("div", { class: "q-radio__label q-anchor--skip" }, x)), vue.h("div", { ref: a, class: u.value, tabindex: c.value, role: "radio", "aria-label": e.label, "aria-checked": d.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: h, onKeydown: w, onKeyup: b }, g);
  };
} });
var Lu = M({ name: "QToggle", props: { ...zl, icon: String, iconColor: String }, emits: Ol, setup(e) {
  function t(o, n) {
    let r = vue.computed(() => (o.value === true ? e.checkedIcon : n.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), i = vue.computed(() => o.value === true ? e.iconColor : null);
    return () => [vue.h("div", { class: "q-toggle__track" }), vue.h("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, r.value !== void 0 ? [vue.h(_e, { name: r.value, color: i.value })] : void 0)];
  }
  return Il("toggle", t);
} });
var Av = { radio: Bu, checkbox: tn, toggle: Lu }, H_ = Object.keys(Av), Fu = M({ name: "QOptionGroup", props: { ...pe, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every((t) => "value" in t && "label" in t) }, name: String, type: { type: String, default: "radio", validator: (e) => H_.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = Array.isArray(e.modelValue);
  e.type === "radio" ? r === true && console.error("q-option-group: model should not be array") : r === false && console.error("q-option-group: model should be array in your case");
  let i = he(e, n), a = vue.computed(() => Av[e.type]), l = vue.computed(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), s = vue.computed(() => {
    let u = { role: "group" };
    return e.type === "radio" && (u.role = "radiogroup", e.disable === true && (u["aria-disabled"] = "true")), u;
  });
  function d(u) {
    t("update:modelValue", u);
  }
  return () => vue.h("div", { class: l.value, ...s.value }, e.options.map((u, v) => {
    let f = o["label-" + v] !== void 0 ? () => o["label-" + v](u) : o.label !== void 0 ? () => o.label(u) : void 0;
    return vue.h("div", [vue.h(a.value, { modelValue: e.modelValue, val: u.value, name: u.name === void 0 ? e.name : u.name, disable: e.disable || u.disable, label: f === void 0 ? u.label : null, leftLabel: u.leftLabel === void 0 ? e.leftLabel : u.leftLabel, color: u.color === void 0 ? e.color : u.color, checkedIcon: u.checkedIcon, uncheckedIcon: u.uncheckedIcon, dark: u.dark || i.value, size: u.size === void 0 ? e.size : u.size, dense: e.dense, keepColor: u.keepColor === void 0 ? e.keepColor : u.keepColor, "onUpdate:modelValue": d }, f)]);
  }));
} });
var Lv = M({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = vue.inject(io, We);
  if (n === We)
    return console.error("QPage needs to be a deep child of QLayout"), We;
  if (vue.inject(sl, We) === We)
    return console.error("QPage needs to be child of QPageContainer"), We;
  let i = vue.computed(() => {
    let l = (n.header.space === true ? n.header.size : 0) + (n.footer.space === true ? n.footer.size : 0);
    if (typeof e.styleFn == "function") {
      let s = n.isContainer.value === true ? n.containerHeight.value : o.screen.height;
      return e.styleFn(l, s);
    }
    return { minHeight: n.isContainer.value === true ? n.containerHeight.value - l + "px" : o.screen.height === 0 ? l !== 0 ? `calc(100vh - ${l}px)` : "100vh" : o.screen.height - l + "px" };
  }), a = vue.computed(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => vue.h("main", { class: a.value, style: i.value }, J(t.default));
} });
var Fv = M({ name: "QPageContainer", setup(e, { slots: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = vue.inject(io, We);
  if (n === We)
    return console.error("QPageContainer needs to be child of QLayout"), We;
  vue.provide(sl, true);
  let r = vue.computed(() => {
    let i = {};
    return n.header.space === true && (i.paddingTop = `${n.header.size}px`), n.right.space === true && (i[`padding${o.lang.rtl === true ? "Left" : "Right"}`] = `${n.right.size}px`), n.footer.space === true && (i.paddingBottom = `${n.footer.size}px`), n.left.space === true && (i[`padding${o.lang.rtl === true ? "Right" : "Left"}`] = `${n.left.size}px`), i;
  });
  return () => vue.h("div", { class: "q-page-container", style: r.value }, J(t.default));
} });
var Ka = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Du() {
  let { props: e, proxy: { $q: t } } = vue.getCurrentInstance(), o = vue.inject(io, We);
  if (o === We)
    return console.error("QPageSticky needs to be child of QLayout"), We;
  let n = vue.computed(() => {
    let v = e.position;
    return { top: v.indexOf("top") !== -1, right: v.indexOf("right") !== -1, bottom: v.indexOf("bottom") !== -1, left: v.indexOf("left") !== -1, vertical: v === "top" || v === "bottom", horizontal: v === "left" || v === "right" };
  }), r = vue.computed(() => o.header.offset), i = vue.computed(() => o.right.offset), a = vue.computed(() => o.footer.offset), l = vue.computed(() => o.left.offset), s = vue.computed(() => {
    let v = 0, f = 0, c = n.value, m = t.lang.rtl === true ? -1 : 1;
    c.top === true && r.value !== 0 ? f = `${r.value}px` : c.bottom === true && a.value !== 0 && (f = `${-a.value}px`), c.left === true && l.value !== 0 ? v = `${m * l.value}px` : c.right === true && i.value !== 0 && (v = `${-m * i.value}px`);
    let y = { transform: `translate(${v}, ${f})` };
    return e.offset && (y.margin = `${e.offset[1]}px ${e.offset[0]}px`), c.vertical === true ? (l.value !== 0 && (y[t.lang.rtl === true ? "right" : "left"] = `${l.value}px`), i.value !== 0 && (y[t.lang.rtl === true ? "left" : "right"] = `${i.value}px`)) : c.horizontal === true && (r.value !== 0 && (y.top = `${r.value}px`), a.value !== 0 && (y.bottom = `${a.value}px`)), y;
  }), d = vue.computed(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function u(v) {
    let f = J(v.default);
    return vue.h("div", { class: d.value, style: s.value }, e.expand === true ? f : [vue.h("div", f)]);
  }
  return { $layout: o, getStickyContent: u };
}
var Ov = M({ name: "QPageScroller", props: { ...Ka, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Ka.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), { $layout: r, getStickyContent: i } = Du(), a = vue.ref(null), l, s = vue.computed(() => r.height.value - (r.isContainer.value === true ? r.containerHeight.value : n.screen.height));
  function d() {
    return e.reverse === true ? s.value - r.scroll.value.position > e.scrollOffset : r.scroll.value.position > e.scrollOffset;
  }
  let u = vue.ref(d());
  function v() {
    let h = d();
    u.value !== h && (u.value = h);
  }
  function f() {
    e.reverse === true ? l === void 0 && (l = vue.watch(s, v)) : c();
  }
  vue.watch(r.scroll, v), vue.watch(() => e.reverse, f);
  function c() {
    l !== void 0 && (l(), l = void 0);
  }
  function m(h) {
    let w = Nt(r.isContainer.value === true ? a.value : r.rootRef.value);
    Go(w, e.reverse === true ? r.height.value : 0, e.duration), o("click", h);
  }
  function y() {
    return u.value === true ? vue.h("div", { ref: a, class: "q-page-scroller", onClick: m }, i(t)) : null;
  }
  return f(), vue.onBeforeUnmount(c), () => vue.h(vue.Transition, { name: "q-transition--fade" }, y);
} });
var Iv = M({ name: "QPageSticky", props: Ka, setup(e, { slots: t }) {
  let { getStickyContent: o } = Du();
  return () => o(t);
} });
function Vu(e, t) {
  return [true, false].includes(e) ? e : t;
}
var Hv = M({ name: "QPagination", props: { ...pe, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || $s.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  let { proxy: o } = vue.getCurrentInstance(), { $q: n } = o, r = he(e, n), i = vue.computed(() => parseInt(e.min, 10)), a = vue.computed(() => parseInt(e.max, 10)), l = vue.computed(() => parseInt(e.maxPages, 10)), s = vue.computed(() => m.value + " / " + a.value), d = vue.computed(() => Vu(e.boundaryLinks, e.input)), u = vue.computed(() => Vu(e.boundaryNumbers, !e.input)), v = vue.computed(() => Vu(e.directionLinks, e.input)), f = vue.computed(() => Vu(e.ellipses, !e.input)), c = vue.ref(null), m = vue.computed({ get: () => e.modelValue, set: (S) => {
    if (S = parseInt(S, 10), e.disable || isNaN(S))
      return;
    let C = Xe(S, i.value, a.value);
    e.modelValue !== C && t("update:modelValue", C);
  } });
  vue.watch(() => `${i.value}|${a.value}`, () => {
    m.value = e.modelValue;
  });
  let y = vue.computed(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), h = vue.computed(() => e.gutter in ga ? `${ga[e.gutter]}px` : e.gutter || null), w = vue.computed(() => h.value !== null ? `--q-pagination-gutter-parent:-${h.value};--q-pagination-gutter-child:${h.value}` : null), b = vue.computed(() => {
    let S = [e.iconFirst || n.iconSet.pagination.first, e.iconPrev || n.iconSet.pagination.prev, e.iconNext || n.iconSet.pagination.next, e.iconLast || n.iconSet.pagination.last];
    return n.lang.rtl === true ? S.reverse() : S;
  }), p = vue.computed(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), g = vue.computed(() => Sl(e, "flat")), x = vue.computed(() => ({ [g.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), P = vue.computed(() => {
    let S = { [g.value]: false };
    return e.activeDesign !== "" && (S[e.activeDesign] = true), S;
  }), A = vue.computed(() => ({ ...P.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), L = vue.computed(() => {
    let S = Math.max(l.value, 1 + (f.value ? 2 : 0) + (u.value ? 2 : 0)), C = { pgFrom: i.value, pgTo: a.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(a.value).length)}em` } };
    return l.value && S < a.value - i.value + 1 && (S = 1 + Math.floor(S / 2) * 2, C.pgFrom = Math.max(i.value, Math.min(a.value - S + 1, e.modelValue - Math.floor(S / 2))), C.pgTo = Math.min(a.value, C.pgFrom + S - 1), u.value && (C.boundaryStart = true, C.pgFrom++), f.value && C.pgFrom > i.value + (u.value ? 1 : 0) && (C.ellipsesStart = true, C.pgFrom++), u.value && (C.boundaryEnd = true, C.pgTo--), f.value && C.pgTo < a.value - (u.value ? 1 : 0) && (C.ellipsesEnd = true, C.pgTo--)), C;
  });
  function $(S) {
    m.value = S;
  }
  function R(S) {
    m.value = m.value + S;
  }
  let B = vue.computed(() => {
    function S() {
      m.value = c.value, c.value = null;
    }
    return { "onUpdate:modelValue": (C) => {
      c.value = C;
    }, onKeyup: (C) => {
      Ht(C, 13) === true && S();
    }, onBlur: S };
  });
  function k(S, C, U) {
    let j = { "aria-label": C, "aria-current": "false", ...x.value, ...S };
    return U === true && Object.assign(j, { "aria-current": "true", ...A.value }), C !== void 0 && (e.toFn !== void 0 ? j.to = e.toFn(C) : j.onClick = () => {
      $(C);
    }), vue.h(Be, j);
  }
  return Object.assign(o, { set: $, setByOffset: R }), () => {
    let S = [], C = [], U;
    if (d.value === true && (S.push(k({ key: "bls", disable: e.disable || e.modelValue <= i.value, icon: b.value[0] }, i.value)), C.unshift(k({ key: "ble", disable: e.disable || e.modelValue >= a.value, icon: b.value[3] }, a.value))), v.value === true && (S.push(k({ key: "bdp", disable: e.disable || e.modelValue <= i.value, icon: b.value[1] }, e.modelValue - 1)), C.unshift(k({ key: "bdn", disable: e.disable || e.modelValue >= a.value, icon: b.value[2] }, e.modelValue + 1))), e.input !== true) {
      U = [];
      let { pgFrom: j, pgTo: E, marginalStyle: D } = L.value;
      if (L.value.boundaryStart === true) {
        let Q = i.value === e.modelValue;
        S.push(k({ key: "bns", style: D, disable: e.disable, label: i.value }, i.value, Q));
      }
      if (L.value.boundaryEnd === true) {
        let Q = a.value === e.modelValue;
        C.unshift(k({ key: "bne", style: D, disable: e.disable, label: a.value }, a.value, Q));
      }
      L.value.ellipsesStart === true && S.push(k({ key: "bes", style: D, disable: e.disable, label: "\u2026", ripple: false }, j - 1)), L.value.ellipsesEnd === true && C.unshift(k({ key: "bee", style: D, disable: e.disable, label: "\u2026", ripple: false }, E + 1));
      for (let Q = j; Q <= E; Q++)
        U.push(k({ key: `bpg${Q}`, style: D, disable: e.disable, label: Q }, Q, Q === e.modelValue));
    }
    return vue.h("div", { class: y.value, ...p.value }, [vue.h("div", { class: "q-pagination__content row no-wrap items-center", style: w.value }, [...S, e.input === true ? vue.h(Gi, { class: "inline", style: { width: `${s.value.length / 1.5}em` }, type: "number", dense: true, value: c.value, disable: e.disable, dark: r.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: s.value, min: i.value, max: a.value, ...B.value }) : vue.h("div", { class: "q-pagination__middle row justify-center" }, U), ...C])]);
  };
} });
function Ya(e) {
  let t = false, o, n;
  function r() {
    n = arguments, t !== true && (t = true, o = window.requestAnimationFrame(() => {
      e.apply(this, n), n = void 0, t = false;
    }));
  }
  return r.cancel = () => {
    window.cancelAnimationFrame(o), t = false;
  }, r;
}
var { passive: Iu } = Ge, Qv = M({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: ao, onScroll: Function }, setup(e, { slots: t, emit: o }) {
  let n = vue.ref(0), r = vue.ref(null), i = vue.ref(null), a = vue.ref(null), l, s, d, u, v, f;
  vue.watch(() => e.height, () => {
    l === true && m();
  }), vue.watch(() => e.scrollTarget, () => {
    l === true && (b(), w());
  });
  let c = (p) => {
    n.value = p, e.onScroll !== void 0 && o("scroll", p);
  };
  function m() {
    let p, g, x;
    f === window ? (p = 0, x = g = window.innerHeight) : (p = yl(f).top, g = fr(f), x = p + g);
    let P = yl(r.value).top, A = P + e.height;
    if (v !== void 0 || A > p && P < x) {
      let L = (x - P) / (e.height + g);
      y((d - e.height) * L * e.speed), c(L);
    }
  }
  let y = (p) => {
    s.style.transform = `translate3d(-50%,${Math.round(p)}px,0)`;
  };
  function h() {
    d = s.naturalHeight || s.videoHeight || fr(s), l === true && m();
  }
  function w() {
    l = true, f = Nt(r.value, e.scrollTarget), f.addEventListener("scroll", m, Iu), window.addEventListener("resize", u, Iu), m();
  }
  function b() {
    l === true && (l = false, f.removeEventListener("scroll", m, Iu), window.removeEventListener("resize", u, Iu), f = void 0, y.cancel(), c.cancel(), u.cancel());
  }
  return vue.onMounted(() => {
    y = Ya(y), c = Ya(c), u = Ya(h), s = t.media !== void 0 ? i.value.children[0] : a.value, s.onload = s.onloadstart = s.loadedmetadata = h, h(), s.style.display = "initial", window.IntersectionObserver !== void 0 ? (v = new IntersectionObserver((p) => {
      (p[0].isIntersecting === true ? w : b)();
    }), v.observe(r.value)) : w();
  }), vue.onBeforeUnmount(() => {
    b(), v !== void 0 && v.disconnect(), s.onload = s.onloadstart = s.loadedmetadata = null;
  }), () => vue.h("div", { ref: r, class: "q-parallax", style: { height: `${e.height}px` } }, [vue.h("div", { ref: i, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [vue.h("img", { ref: a, src: e.src })]), vue.h("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: n.value }) : J(t.default))]);
} });
function nr(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e)
    return e;
  if (t.has(e))
    return t.get(e);
  let o = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : typeof e.constructor != "function" ? /* @__PURE__ */ Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor();
  if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
    let n = e.valueOf();
    if (Object(n) !== n) {
      let r = new e.constructor(n);
      return t.set(e, r), r;
    }
  }
  return t.set(e, o), e instanceof Set ? e.forEach((n) => {
    o.add(nr(n, t));
  }) : e instanceof Map && e.forEach((n, r) => {
    o.set(r, nr(n, t));
  }), Object.assign(o, ...Object.keys(e).map((n) => ({ [n]: nr(e[n], t) })));
}
var jv = M({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = vue.ref(null), a = vue.ref(""), l = vue.ref(""), s = false, d = vue.computed(() => ft({ initialValue: a.value, validate: e.validate, set: u, cancel: v, updatePosition: f }, "value", () => l.value, (g) => {
    l.value = g;
  }));
  function u() {
    e.validate(l.value) !== false && (c() === true && (o("save", l.value, a.value), o("update:modelValue", l.value)), m());
  }
  function v() {
    c() === true && o("cancel", l.value, a.value), m();
  }
  function f() {
    vue.nextTick(() => {
      i.value.updatePosition();
    });
  }
  function c() {
    return Zt(l.value, a.value) === false;
  }
  function m() {
    s = true, i.value.hide();
  }
  function y() {
    s = false, a.value = nr(e.modelValue), l.value = nr(e.modelValue), o("beforeShow");
  }
  function h() {
    o("show");
  }
  function w() {
    s === false && c() === true && (e.autoSave === true && e.validate(l.value) === true ? (o("save", l.value, a.value), o("update:modelValue", l.value)) : o("cancel", l.value, a.value)), o("beforeHide");
  }
  function b() {
    o("hide");
  }
  function p() {
    let g = t.default !== void 0 ? [].concat(t.default(d.value)) : [];
    return e.title && g.unshift(vue.h("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && g.push(vue.h("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [vue.h(Be, { flat: true, color: e.color, label: e.labelCancel || r.lang.label.cancel, onClick: v }), vue.h(Be, { flat: true, color: e.color, label: e.labelSet || r.lang.label.set, onClick: u })])), g;
  }
  return Object.assign(n, { set: u, cancel: v, show(g) {
    i.value !== null && i.value.show(g);
  }, hide(g) {
    i.value !== null && i.value.hide(g);
  }, updatePosition: f }), () => {
    if (e.disable !== true)
      return vue.h(Zo, { ref: i, class: "q-popup-edit", cover: e.cover, onBeforeShow: y, onShow: h, onBeforeHide: w, onHide: b, onEscapeKey: v }, p);
  };
} });
var Kv = M({ name: "QPopupProxy", props: { ...Cl, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: o, attrs: n }) {
  let { proxy: r } = vue.getCurrentInstance(), { $q: i } = r, a = vue.ref(false), l = vue.ref(null), s = vue.computed(() => parseInt(e.breakpoint, 10)), { canShow: d } = oi({ showing: a });
  function u() {
    return i.screen.width < s.value || i.screen.height < s.value ? "dialog" : "menu";
  }
  let v = vue.ref(u()), f = vue.computed(() => v.value === "menu" ? { maxHeight: "99vh" } : {});
  vue.watch(() => u(), (y) => {
    a.value !== true && (v.value = y);
  });
  function c(y) {
    a.value = true, o("show", y);
  }
  function m(y) {
    a.value = false, v.value = u(), o("hide", y);
  }
  return Object.assign(r, { show(y) {
    d(y) === true && l.value.show(y);
  }, hide(y) {
    l.value.hide(y);
  }, toggle(y) {
    l.value.toggle(y);
  } }), ft(r, "currentComponent", () => ({ type: v.value, ref: l.value })), () => {
    let y = { ref: l, ...f.value, ...n, onShow: c, onHide: m }, h;
    return v.value === "dialog" ? h = rn : (h = Zo, Object.assign(y, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), vue.h(h, y, t.default);
  };
} });
var v1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Wv(e, t, o) {
  return { transform: t === true ? `translateX(${o.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var Nu = M({ name: "QLinearProgress", props: { ...pe, ...Lt, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  let { proxy: o } = vue.getCurrentInstance(), n = he(e, o.$q), r = Ft(e, v1), i = vue.computed(() => e.indeterminate === true || e.query === true), a = vue.computed(() => e.reverse !== e.query), l = vue.computed(() => ({ ...r.value !== null ? r.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), s = vue.computed(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), d = vue.computed(() => Wv(e.buffer !== void 0 ? e.buffer : 1, a.value, o.$q)), u = vue.computed(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), v = vue.computed(() => `q-linear-progress__track absolute-full q-linear-progress__track--${u.value} q-linear-progress__track--${n.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), f = vue.computed(() => Wv(i.value === true ? 1 : e.value, a.value, o.$q)), c = vue.computed(() => `q-linear-progress__model absolute-full q-linear-progress__model--${u.value} q-linear-progress__model--${i.value === true ? "in" : ""}determinate`), m = vue.computed(() => ({ width: `${e.value * 100}%` })), y = vue.computed(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${u.value}`);
  return () => {
    let h = [vue.h("div", { class: v.value, style: d.value }), vue.h("div", { class: c.value, style: f.value })];
    return e.stripe === true && i.value === false && h.push(vue.h("div", { class: y.value, style: m.value })), vue.h("div", { class: s.value, style: l.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, Ue(t.default, h));
  };
} });
var oa = 40, Vc = 20, Yv = M({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: ao }, emits: ["refresh"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = vue.ref("pull"), a = vue.ref(0), l = vue.ref(false), s = vue.ref(-oa), d = vue.ref(false), u = vue.ref({}), v = vue.computed(() => ({ opacity: a.value, transform: `translateY(${s.value}px) rotate(${a.value * 360}deg)` })), f = vue.computed(() => "q-pull-to-refresh__puller row flex-center" + (d.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function c(P) {
    if (P.isFinal === true) {
      l.value === true && (l.value = false, i.value === "pulled" ? (i.value = "refreshing", g({ pos: Vc }), h()) : i.value === "pull" && g({ pos: -oa, ratio: 0 }));
      return;
    }
    if (d.value === true || i.value === "refreshing")
      return false;
    if (P.isFirst === true) {
      if (Ro(b) !== 0 || P.direction !== "down")
        return l.value === true && (l.value = false, i.value = "pull", g({ pos: -oa, ratio: 0 })), false;
      l.value = true;
      let { top: $, left: R } = w.getBoundingClientRect();
      u.value = { top: $ + "px", left: R + "px", width: window.getComputedStyle(w).getPropertyValue("width") };
    }
    pt(P.evt);
    let A = Math.min(140, Math.max(0, P.distance.y));
    s.value = A - oa, a.value = Xe(A / (Vc + oa), 0, 1);
    let L = s.value > Vc ? "pulled" : "pull";
    i.value !== L && (i.value = L);
  }
  let m = vue.computed(() => {
    let P = { down: true };
    return e.noMouse !== true && (P.mouse = true), [[St, c, void 0, P]];
  }), y = vue.computed(() => `q-pull-to-refresh__content${l.value === true ? " no-pointer-events" : ""}`);
  function h() {
    o("refresh", () => {
      g({ pos: -oa, ratio: 0 }, () => {
        i.value = "pull";
      });
    });
  }
  let w, b, p = null;
  function g({ pos: P, ratio: A }, L) {
    d.value = true, s.value = P, A !== void 0 && (a.value = A), p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, d.value = false, L && L();
    }, 300);
  }
  function x() {
    b = Nt(w, e.scrollTarget);
  }
  return vue.watch(() => e.scrollTarget, x), vue.onMounted(() => {
    w = n.$el, x();
  }), vue.onBeforeUnmount(() => {
    p !== null && clearTimeout(p);
  }), Object.assign(n, { trigger: h, updateScrollTarget: x }), () => {
    let P = [vue.h("div", { class: y.value }, J(t.default)), vue.h("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: u.value }, [vue.h("div", { class: f.value, style: v.value }, [i.value !== "refreshing" ? vue.h(_e, { name: e.icon || r.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : vue.h(xt, { size: "24px", color: e.color })])])];
    return yt("div", { class: "q-pull-to-refresh" }, P, "main", e.disable === false, () => m.value);
  };
} });
var rr = { MIN: 0, RANGE: 1, MAX: 2 }, Xv = M({ name: "QRange", props: { ...Nl, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: Ql, setup(e, { emit: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), { state: n, methods: r } = jl({ updateValue: L, updatePosition: R, getDragging: $, formAttrs: vue.computed(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), i = vue.ref(null), a = vue.ref(0), l = vue.ref(0), s = vue.ref({ min: 0, max: 0 });
  function d() {
    s.value.min = e.modelValue.min === null ? n.innerMin.value : Xe(e.modelValue.min, n.innerMin.value, n.innerMax.value), s.value.max = e.modelValue.max === null ? n.innerMax.value : Xe(e.modelValue.max, n.innerMin.value, n.innerMax.value);
  }
  vue.watch(() => `${e.modelValue.min}|${e.modelValue.max}|${n.innerMin.value}|${n.innerMax.value}`, d), d();
  let u = vue.computed(() => r.convertModelToRatio(s.value.min)), v = vue.computed(() => r.convertModelToRatio(s.value.max)), f = vue.computed(() => n.active.value === true ? a.value : u.value), c = vue.computed(() => n.active.value === true ? l.value : v.value), m = vue.computed(() => {
    let k = { [n.positionProp.value]: `${100 * f.value}%`, [n.sizeProp.value]: `${100 * (c.value - f.value)}%` };
    return e.selectionImg !== void 0 && (k.backgroundImage = `url(${e.selectionImg}) !important`), k;
  }), y = vue.computed(() => {
    if (n.editable.value !== true)
      return {};
    if (o.platform.is.mobile === true)
      return { onClick: r.onMobileClick };
    let k = { onMousedown: r.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(k, { onFocus: () => {
      n.focus.value = "both";
    }, onBlur: r.onBlur, onKeydown: B, onKeyup: r.onKeyup }), k;
  });
  function h(k) {
    return o.platform.is.mobile !== true && n.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      n.focus.value = k;
    }, onBlur: r.onBlur, onKeydown: B, onKeyup: r.onKeyup } : {};
  }
  let w = vue.computed(() => e.dragOnlyRange !== true ? n.tabindex.value : null), b = vue.computed(() => o.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? n.tabindex.value : null), p = vue.ref(null), g = vue.computed(() => h("min")), x = r.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: p, key: "tmin", ...g.value, tabindex: w.value }), ratio: f, label: vue.computed(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : s.value.min), thumbColor: vue.computed(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: vue.computed(() => e.leftLabelColor || e.labelColor), labelTextColor: vue.computed(() => e.leftLabelTextColor || e.labelTextColor) }), P = vue.computed(() => h("max")), A = r.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...P.value, key: "tmax", tabindex: w.value }), ratio: c, label: vue.computed(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : s.value.max), thumbColor: vue.computed(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: vue.computed(() => e.rightLabelColor || e.labelColor), labelTextColor: vue.computed(() => e.rightLabelTextColor || e.labelTextColor) });
  function L(k) {
    (s.value.min !== e.modelValue.min || s.value.max !== e.modelValue.max) && t("update:modelValue", { ...s.value }), k === true && t("change", { ...s.value });
  }
  function $(k) {
    let { left: S, top: C, width: U, height: j } = i.value.getBoundingClientRect(), E = e.dragOnlyRange === true ? 0 : e.vertical === true ? p.value.offsetHeight / (2 * j) : p.value.offsetWidth / (2 * U), D = { left: S, top: C, width: U, height: j, valueMin: s.value.min, valueMax: s.value.max, ratioMin: u.value, ratioMax: v.value }, Q = r.getDraggingRatio(k, D);
    return e.dragOnlyRange !== true && Q < D.ratioMin + E ? D.type = rr.MIN : e.dragOnlyRange === true || Q < D.ratioMax - E ? e.dragRange === true || e.dragOnlyRange === true ? (D.type = rr.RANGE, Object.assign(D, { offsetRatio: Q, offsetModel: r.convertRatioToModel(Q), rangeValue: D.valueMax - D.valueMin, rangeRatio: D.ratioMax - D.ratioMin })) : D.type = D.ratioMax - Q < Q - D.ratioMin ? rr.MAX : rr.MIN : D.type = rr.MAX, D;
  }
  function R(k, S = n.dragging.value) {
    let C, U = r.getDraggingRatio(k, S), j = r.convertRatioToModel(U);
    switch (S.type) {
      case rr.MIN:
        U <= S.ratioMax ? (C = { minR: U, maxR: S.ratioMax, min: j, max: S.valueMax }, n.focus.value = "min") : (C = { minR: S.ratioMax, maxR: U, min: S.valueMax, max: j }, n.focus.value = "max");
        break;
      case rr.MAX:
        U >= S.ratioMin ? (C = { minR: S.ratioMin, maxR: U, min: S.valueMin, max: j }, n.focus.value = "max") : (C = { minR: U, maxR: S.ratioMin, min: j, max: S.valueMin }, n.focus.value = "min");
        break;
      case rr.RANGE:
        let E = U - S.offsetRatio, D = Xe(S.ratioMin + E, n.innerMinRatio.value, n.innerMaxRatio.value - S.rangeRatio), Q = j - S.offsetModel, ie = Xe(S.valueMin + Q, n.innerMin.value, n.innerMax.value - S.rangeValue);
        C = { minR: D, maxR: D + S.rangeRatio, min: n.roundValueFn.value(ie), max: n.roundValueFn.value(ie + S.rangeValue) }, n.focus.value = "both";
        break;
    }
    s.value = s.value.min === null || s.value.max === null ? { min: C.min || e.min, max: C.max || e.max } : { min: C.min, max: C.max }, e.snap !== true || e.step === 0 ? (a.value = C.minR, l.value = C.maxR) : (a.value = r.convertModelToRatio(s.value.min), l.value = r.convertModelToRatio(s.value.max));
  }
  function B(k) {
    if (!Ca.includes(k.keyCode))
      return;
    qe(k);
    let S = ([34, 33].includes(k.keyCode) ? 10 : 1) * n.keyStep.value, C = ([34, 37, 40].includes(k.keyCode) ? -1 : 1) * (n.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * S;
    if (n.focus.value === "both") {
      let U = s.value.max - s.value.min, j = Xe(n.roundValueFn.value(s.value.min + C), n.innerMin.value, n.innerMax.value - U);
      s.value = { min: j, max: n.roundValueFn.value(j + U) };
    } else {
      if (n.focus.value === false)
        return;
      {
        let U = n.focus.value;
        s.value = { ...s.value, [U]: Xe(n.roundValueFn.value(s.value[U] + C), U === "min" ? n.innerMin.value : s.value.min, U === "max" ? n.innerMax.value : s.value.max) };
      }
    }
    L();
  }
  return () => {
    let k = r.getContent(m, b, y, (S) => {
      S.push(x(), A());
    });
    return vue.h("div", { ref: i, class: "q-range " + n.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...n.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, k);
  };
} });
var Gv = M({ name: "QRating", props: { ...Lt, ...bt, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = Ft(e), i = Jo(e), a = Wt(i), l = vue.ref(0), s = {}, d = vue.computed(() => e.readonly !== true && e.disable !== true), u = vue.computed(() => `q-rating row inline items-center q-rating--${d.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), v = vue.computed(() => {
    let p = Array.isArray(e.icon) === true ? e.icon.length : 0, g = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, x = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, P = Array.isArray(e.color) === true ? e.color.length : 0, A = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, L = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: p, icon: p > 0 ? e.icon[p - 1] : e.icon, selIconLen: g, selIcon: g > 0 ? e.iconSelected[g - 1] : e.iconSelected, halfIconLen: x, halfIcon: x > 0 ? e.iconHalf[g - 1] : e.iconHalf, colorLen: P, color: P > 0 ? e.color[P - 1] : e.color, selColorLen: A, selColor: A > 0 ? e.colorSelected[A - 1] : e.colorSelected, halfColorLen: L, halfColor: L > 0 ? e.colorHalf[L - 1] : e.colorHalf };
  }), f = vue.computed(() => {
    if (typeof e.iconAriaLabel == "string") {
      let p = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (g) => `${p}${g}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      let p = e.iconAriaLabel.length;
      if (p > 0)
        return (g) => e.iconAriaLabel[Math.min(g, p) - 1];
    }
    return (p, g) => `${g} ${p}`;
  }), c = vue.computed(() => {
    let p = [], g = v.value, x = Math.ceil(e.modelValue), P = d.value === true ? 0 : null, A = e.iconHalf === void 0 || x === e.modelValue ? -1 : x;
    for (let L = 1; L <= e.max; L++) {
      let $ = l.value === 0 && e.modelValue >= L || l.value > 0 && l.value >= L, R = A === L && l.value < L, B = l.value > 0 && (R === true ? x : e.modelValue) >= L && l.value < L, k = R === true ? L <= g.halfColorLen ? e.colorHalf[L - 1] : g.halfColor : g.selColor !== void 0 && $ === true ? L <= g.selColorLen ? e.colorSelected[L - 1] : g.selColor : L <= g.colorLen ? e.color[L - 1] : g.color, S = (R === true ? L <= g.halfIconLen ? e.iconHalf[L - 1] : g.halfIcon : g.selIcon !== void 0 && ($ === true || B === true) ? L <= g.selIconLen ? e.iconSelected[L - 1] : g.selIcon : L <= g.iconLen ? e.icon[L - 1] : g.icon) || n.iconSet.rating.icon;
      p.push({ name: (R === true ? L <= g.halfIconLen ? e.iconHalf[L - 1] : g.halfIcon : g.selIcon !== void 0 && ($ === true || B === true) ? L <= g.selIconLen ? e.iconSelected[L - 1] : g.selIcon : L <= g.iconLen ? e.icon[L - 1] : g.icon) || n.iconSet.rating.icon, attrs: { tabindex: P, role: "radio", "aria-checked": e.modelValue === L ? "true" : "false", "aria-label": f.value(L, S) }, iconClass: "q-rating__icon" + ($ === true || R === true ? " q-rating__icon--active" : "") + (B === true ? " q-rating__icon--exselected" : "") + (l.value === L ? " q-rating__icon--hovered" : "") + (k !== void 0 ? ` text-${k}` : "") });
    }
    return p;
  }), m = vue.computed(() => {
    let p = { role: "radiogroup" };
    return e.disable === true && (p["aria-disabled"] = "true"), e.readonly === true && (p["aria-readonly"] = "true"), p;
  });
  function y(p) {
    if (d.value === true) {
      let g = Xe(parseInt(p, 10), 1, parseInt(e.max, 10)), x = e.noReset !== true && e.modelValue === g ? 0 : g;
      x !== e.modelValue && o("update:modelValue", x), l.value = 0;
    }
  }
  function h(p) {
    d.value === true && (l.value = p);
  }
  function w(p, g) {
    switch (p.keyCode) {
      case 13:
      case 32:
        return y(g), qe(p);
      case 37:
      case 40:
        return s[`rt${g - 1}`] && s[`rt${g - 1}`].focus(), qe(p);
      case 39:
      case 38:
        return s[`rt${g + 1}`] && s[`rt${g + 1}`].focus(), qe(p);
    }
  }
  function b() {
    l.value = 0;
  }
  return vue.onBeforeUpdate(() => {
    s = {};
  }), () => {
    let p = [];
    return c.value.forEach(({ iconClass: g, name: x, attrs: P }, A) => {
      let L = A + 1;
      p.push(vue.h("div", { key: L, ref: ($) => {
        s[`rt${L}`] = $;
      }, class: "q-rating__icon-container flex flex-center", ...P, onClick() {
        y(L);
      }, onMouseover() {
        h(L);
      }, onMouseout: b, onFocus() {
        h(L);
      }, onBlur: b, onKeyup($) {
        w($, L);
      } }, Ue(t[`tip-${L}`], [vue.h(_e, { class: g, name: x })])));
    }), e.name !== void 0 && e.disable !== true && a(p, "push"), vue.h("div", { class: u.value, style: r.value, ...m.value }, p);
  };
} });
var Zv = M({ name: "QResponsive", props: Ki, setup(e, { slots: t }) {
  let o = Wi(e);
  return () => vue.h("div", { class: "q-responsive" }, [vue.h("div", { class: "q-responsive__filler overflow-hidden" }, [vue.h("div", { style: o.value })]), vue.h("div", { class: "q-responsive__content absolute-full fit" }, J(t.default))]);
} });
var eg = ["vertical", "horizontal"], Oc = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, tg = { prevent: true, mouse: true, mouseAllDir: true }, og = (e) => e >= 250 ? 50 : Math.ceil(e / 5), ng = M({ name: "QScrollArea", props: { ...pe, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: o }) {
  let n = vue.ref(false), r = vue.ref(false), i = vue.ref(false), a = { vertical: vue.ref(0), horizontal: vue.ref(0) }, l = { vertical: { ref: vue.ref(null), position: vue.ref(0), size: vue.ref(0) }, horizontal: { ref: vue.ref(null), position: vue.ref(0), size: vue.ref(0) } }, { proxy: s } = vue.getCurrentInstance(), d = he(e, s.$q), u = null, v, f = vue.ref(null), c = vue.computed(() => "q-scrollarea" + (d.value === true ? " q-scrollarea--dark" : ""));
  l.vertical.percentage = vue.computed(() => {
    let E = l.vertical.size.value - a.vertical.value;
    if (E <= 0)
      return 0;
    let D = Xe(l.vertical.position.value / E, 0, 1);
    return Math.round(D * 1e4) / 1e4;
  }), l.vertical.thumbHidden = vue.computed(() => (e.visible === null ? i.value : e.visible) !== true && n.value === false && r.value === false || l.vertical.size.value <= a.vertical.value + 1), l.vertical.thumbStart = vue.computed(() => l.vertical.percentage.value * (a.vertical.value - l.vertical.thumbSize.value)), l.vertical.thumbSize = vue.computed(() => Math.round(Xe(a.vertical.value * a.vertical.value / l.vertical.size.value, og(a.vertical.value), a.vertical.value))), l.vertical.style = vue.computed(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${l.vertical.thumbStart.value}px`, height: `${l.vertical.thumbSize.value}px` })), l.vertical.thumbClass = vue.computed(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (l.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), l.vertical.barClass = vue.computed(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (l.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), l.horizontal.percentage = vue.computed(() => {
    let E = l.horizontal.size.value - a.horizontal.value;
    if (E <= 0)
      return 0;
    let D = Xe(Math.abs(l.horizontal.position.value) / E, 0, 1);
    return Math.round(D * 1e4) / 1e4;
  }), l.horizontal.thumbHidden = vue.computed(() => (e.visible === null ? i.value : e.visible) !== true && n.value === false && r.value === false || l.horizontal.size.value <= a.horizontal.value + 1), l.horizontal.thumbStart = vue.computed(() => l.horizontal.percentage.value * (a.horizontal.value - l.horizontal.thumbSize.value)), l.horizontal.thumbSize = vue.computed(() => Math.round(Xe(a.horizontal.value * a.horizontal.value / l.horizontal.size.value, og(a.horizontal.value), a.horizontal.value))), l.horizontal.style = vue.computed(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [s.$q.lang.rtl === true ? "right" : "left"]: `${l.horizontal.thumbStart.value}px`, width: `${l.horizontal.thumbSize.value}px` })), l.horizontal.thumbClass = vue.computed(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (l.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), l.horizontal.barClass = vue.computed(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (l.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  let m = vue.computed(() => l.vertical.thumbHidden.value === true && l.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle), y = [[St, (E) => {
    A(E, "vertical");
  }, void 0, { vertical: true, ...tg }]], h = [[St, (E) => {
    A(E, "horizontal");
  }, void 0, { horizontal: true, ...tg }]];
  function w() {
    let E = {};
    return eg.forEach((D) => {
      let Q = l[D];
      E[D + "Position"] = Q.position.value, E[D + "Percentage"] = Q.percentage.value, E[D + "Size"] = Q.size.value, E[D + "ContainerSize"] = a[D].value;
    }), E;
  }
  let b = Lo(() => {
    let E = w();
    E.ref = s, o("scroll", E);
  }, 0);
  function p(E, D, Q) {
    if (eg.includes(E) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (E === "vertical" ? Go : ba)(f.value, D, Q);
  }
  function g({ height: E, width: D }) {
    let Q = false;
    a.vertical.value !== E && (a.vertical.value = E, Q = true), a.horizontal.value !== D && (a.horizontal.value = D, Q = true), Q === true && B();
  }
  function x({ position: E }) {
    let D = false;
    l.vertical.position.value !== E.top && (l.vertical.position.value = E.top, D = true), l.horizontal.position.value !== E.left && (l.horizontal.position.value = E.left, D = true), D === true && B();
  }
  function P({ height: E, width: D }) {
    l.horizontal.size.value !== D && (l.horizontal.size.value = D, B()), l.vertical.size.value !== E && (l.vertical.size.value = E, B());
  }
  function A(E, D) {
    let Q = l[D];
    if (E.isFirst === true) {
      if (Q.thumbHidden.value === true)
        return;
      v = Q.position.value, r.value = true;
    } else if (r.value !== true)
      return;
    E.isFinal === true && (r.value = false);
    let ie = Oc[D], z = a[D].value, _ = (Q.size.value - z) / (z - Q.thumbSize.value), N = E.distance[ie.dist], H = v + (E.direction === ie.dir ? 1 : -1) * N * _;
    k(H, D);
  }
  function L(E, D) {
    let Q = l[D];
    if (Q.thumbHidden.value !== true) {
      let ie = E[Oc[D].offset];
      if (ie < Q.thumbStart.value || ie > Q.thumbStart.value + Q.thumbSize.value) {
        let z = ie - Q.thumbSize.value / 2;
        k(z / a[D].value * Q.size.value, D);
      }
      Q.ref.value !== null && Q.ref.value.dispatchEvent(new MouseEvent(E.type, E));
    }
  }
  function $(E) {
    L(E, "vertical");
  }
  function R(E) {
    L(E, "horizontal");
  }
  function B() {
    n.value = true, u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, n.value = false;
    }, e.delay), e.onScroll !== void 0 && b();
  }
  function k(E, D) {
    f.value[Oc[D].scroll] = E;
  }
  let S = null;
  function C() {
    S !== null && clearTimeout(S), S = setTimeout(() => {
      S = null, i.value = true;
    }, s.$q.platform.is.ios ? 50 : 0);
  }
  function U() {
    S !== null && (clearTimeout(S), S = null), i.value = false;
  }
  let j = null;
  return vue.watch(() => s.$q.lang.rtl, (E) => {
    f.value !== null && ba(f.value, Math.abs(l.horizontal.position.value) * (E === true ? -1 : 1));
  }), vue.onDeactivated(() => {
    j = { top: l.vertical.position.value, left: l.horizontal.position.value };
  }), vue.onActivated(() => {
    if (j === null)
      return;
    let E = f.value;
    E !== null && (ba(E, j.left), Go(E, j.top));
  }), vue.onBeforeUnmount(b.cancel), Object.assign(s, { getScrollTarget: () => f.value, getScroll: w, getScrollPosition: () => ({ top: l.vertical.position.value, left: l.horizontal.position.value }), getScrollPercentage: () => ({ top: l.vertical.percentage.value, left: l.horizontal.percentage.value }), setScrollPosition: p, setScrollPercentage(E, D, Q) {
    p(E, D * (l[E].size.value - a[E].value) * (E === "horizontal" && s.$q.lang.rtl === true ? -1 : 1), Q);
  } }), () => vue.h("div", { class: c.value, onMouseenter: C, onMouseleave: U }, [vue.h("div", { ref: f, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [vue.h("div", { class: "q-scrollarea__content absolute", style: m.value }, Ue(t.default, [vue.h(so, { debounce: 0, onResize: P })])), vue.h(Zi, { axis: "both", onScroll: x })]), vue.h(so, { debounce: 0, onResize: g }), vue.h("div", { class: l.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: $ }), vue.h("div", { class: l.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: R }), vue.withDirectives(vue.h("div", { ref: l.vertical.ref, class: l.vertical.thumbClass.value, style: l.vertical.style.value, "aria-hidden": "true" }), y), vue.withDirectives(vue.h("div", { ref: l.horizontal.ref, class: l.horizontal.thumbClass.value, style: l.horizontal.style.value, "aria-hidden": "true" }), h)]);
} });
var No = 1e3, L1 = ["start", "center", "end", "start-force", "center-force", "end-force"], F1 = Array.prototype.filter;
function ra(e, t) {
  return e + t;
}
function Ic(e, t, o, n, r, i, a, l) {
  let s = e === window ? document.scrollingElement || document.documentElement : e, d = r === true ? "offsetWidth" : "offsetHeight", u = { scrollStart: 0, scrollViewSize: -a - l, scrollMaxSize: 0, offsetStart: -a, offsetEnd: -l };
  if (r === true ? (e === window ? (u.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, u.scrollViewSize += document.documentElement.clientWidth) : (u.scrollStart = s.scrollLeft, u.scrollViewSize += s.clientWidth), u.scrollMaxSize = s.scrollWidth, i === true && (u.scrollStart = 0 - u.scrollStart)) : (e === window ? (u.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, u.scrollViewSize += document.documentElement.clientHeight) : (u.scrollStart = s.scrollTop, u.scrollViewSize += s.clientHeight), u.scrollMaxSize = s.scrollHeight), o !== null)
    for (let v = o.previousElementSibling; v !== null; v = v.previousElementSibling)
      v.classList.contains("q-virtual-scroll--skip") === false && (u.offsetStart += v[d]);
  if (n !== null)
    for (let v = n.nextElementSibling; v !== null; v = v.nextElementSibling)
      v.classList.contains("q-virtual-scroll--skip") === false && (u.offsetEnd += v[d]);
  if (t !== e) {
    let v = s.getBoundingClientRect(), f = t.getBoundingClientRect();
    r === true ? (u.offsetStart += f.left - v.left, u.offsetEnd -= f.width) : (u.offsetStart += f.top - v.top, u.offsetEnd -= f.height), e !== window && (u.offsetStart += u.scrollStart), u.offsetEnd += u.scrollMaxSize - u.offsetStart;
  }
  return u;
}
function ig(e, t, o, n) {
  t === "end" && (t = (e === window ? document.body : e)[o === true ? "scrollWidth" : "scrollHeight"]), e === window ? o === true ? (n === true && (t = 0 - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : o === true ? (n === true && (t = 0 - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Ja(e, t, o, n) {
  if (o >= n)
    return 0;
  let r = t.length, i = Math.floor(o / No), a = Math.floor((n - 1) / No) + 1, l = e.slice(i, a).reduce(ra, 0);
  return o % No !== 0 && (l -= t.slice(i * No, o).reduce(ra, 0)), n % No !== 0 && n !== r && (l -= t.slice(n, a * No).reduce(ra, 0)), l;
}
var ag = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Hc = Object.keys(ag), el = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...ag };
function Ku({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: o, virtualScrollItemSizeComputed: n }) {
  let r = vue.getCurrentInstance(), { props: i, emit: a, proxy: l } = r, { $q: s } = l, d, u, v, f = [], c, m = vue.ref(0), y = vue.ref(0), h = vue.ref({}), w = vue.ref(null), b = vue.ref(null), p = vue.ref(null), g = vue.ref({ from: 0, to: 0 }), x = vue.computed(() => i.tableColspan !== void 0 ? i.tableColspan : 100);
  n === void 0 && (n = vue.computed(() => i.virtualScrollItemSize));
  let P = vue.computed(() => n.value + ";" + i.virtualScrollHorizontal), A = vue.computed(() => P.value + ";" + i.virtualScrollSliceRatioBefore + ";" + i.virtualScrollSliceRatioAfter);
  vue.watch(A, () => {
    j();
  }), vue.watch(P, L);
  function L() {
    U(u, true);
  }
  function $(z) {
    U(z === void 0 ? u : z);
  }
  function R(z, _) {
    let N = t();
    if (N == null || N.nodeType === 8)
      return;
    let H = Ic(N, o(), w.value, b.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd);
    v !== H.scrollViewSize && j(H.scrollViewSize), k(N, H, Math.min(e.value - 1, Math.max(0, parseInt(z, 10) || 0)), 0, L1.indexOf(_) !== -1 ? _ : u !== -1 && z > u ? "end" : "start");
  }
  function B() {
    let z = t();
    if (z == null || z.nodeType === 8)
      return;
    let _ = Ic(z, o(), w.value, b.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd), N = e.value - 1, H = _.scrollMaxSize - _.offsetStart - _.offsetEnd - y.value;
    if (d === _.scrollStart)
      return;
    if (_.scrollMaxSize <= 0) {
      k(z, _, 0, 0);
      return;
    }
    v !== _.scrollViewSize && j(_.scrollViewSize), S(g.value.from);
    let oe = Math.floor(_.scrollMaxSize - Math.max(_.scrollViewSize, _.offsetEnd) - Math.min(c[N], _.scrollViewSize / 2));
    if (oe > 0 && Math.ceil(_.scrollStart) >= oe) {
      k(z, _, N, _.scrollMaxSize - _.offsetEnd - f.reduce(ra, 0));
      return;
    }
    let q = 0, V = _.scrollStart - _.offsetStart, te = V;
    if (V <= H && V + _.scrollViewSize >= m.value)
      V -= m.value, q = g.value.from, te = V;
    else
      for (let O = 0; V >= f[O] && q < N; O++)
        V -= f[O], q += No;
    for (; V > 0 && q < N; )
      V -= c[q], V > -_.scrollViewSize ? (q++, te = V) : te = c[q] + V;
    k(z, _, q, te);
  }
  function k(z, _, N, H, oe) {
    let q = typeof oe == "string" && oe.indexOf("-force") !== -1, V = q === true ? oe.replace("-force", "") : oe, te = V !== void 0 ? V : "start", O = Math.max(0, N - h.value[te]), ue = O + h.value.total;
    ue > e.value && (ue = e.value, O = Math.max(0, ue - h.value.total)), d = _.scrollStart;
    let Se = O !== g.value.from || ue !== g.value.to;
    if (Se === false && V === void 0) {
      D(N);
      return;
    }
    let { activeElement: K } = document, ae = p.value;
    Se === true && ae !== null && ae !== K && ae.contains(K) === true && (ae.addEventListener("focusout", C), setTimeout(() => {
      ae !== null && ae.removeEventListener("focusout", C);
    }));
    let ce = V !== void 0 ? c.slice(O, N).reduce(ra, 0) : 0;
    if (Se === true) {
      let be = ue >= g.value.from && O <= g.value.to ? g.value.to : ue;
      g.value = { from: O, to: be }, m.value = Ja(f, c, 0, O), y.value = Ja(f, c, ue, e.value), requestAnimationFrame(() => {
        g.value.to !== ue && d === _.scrollStart && (g.value = { from: g.value.from, to: ue }, y.value = Ja(f, c, ue, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (d !== _.scrollStart)
        return;
      Se === true && S(O);
      let be = c.slice(O, N).reduce(ra, 0), Te = be + _.offsetStart + m.value, le = Te + c[N], Me = Te + H;
      if (V !== void 0) {
        let Le = be - ce, Fe = _.scrollStart + Le;
        Me = q !== true && Fe < Te && le < Fe + _.scrollViewSize ? Fe : V === "end" ? le - _.scrollViewSize : Te - (V === "start" ? 0 : Math.round((_.scrollViewSize - c[N]) / 2));
      }
      d = Me, ig(z, Me, i.virtualScrollHorizontal, s.lang.rtl), D(N);
    });
  }
  function S(z) {
    let _ = p.value;
    if (_) {
      let N = F1.call(_.children, (O) => O.classList && O.classList.contains("q-virtual-scroll--skip") === false), H = N.length, oe = i.virtualScrollHorizontal === true ? (O) => O.getBoundingClientRect().width : (O) => O.offsetHeight, q = z, V, te;
      for (let O = 0; O < H; ) {
        for (V = oe(N[O]), O++; O < H && N[O].classList.contains("q-virtual-scroll--with-prev") === true; )
          V += oe(N[O]), O++;
        te = V - c[q], te !== 0 && (c[q] += te, f[Math.floor(q / No)] += te), q++;
      }
    }
  }
  function C() {
    p.value !== null && p.value !== void 0 && p.value.focus();
  }
  function U(z, _) {
    let N = 1 * n.value;
    (_ === true || Array.isArray(c) === false) && (c = []);
    let H = c.length;
    c.length = e.value;
    for (let q = e.value - 1; q >= H; q--)
      c[q] = N;
    let oe = Math.floor((e.value - 1) / No);
    f = [];
    for (let q = 0; q <= oe; q++) {
      let V = 0, te = Math.min((q + 1) * No, e.value);
      for (let O = q * No; O < te; O++)
        V += c[O];
      f.push(V);
    }
    u = -1, d = void 0, m.value = Ja(f, c, 0, g.value.from), y.value = Ja(f, c, g.value.to, e.value), z >= 0 ? (S(g.value.from), vue.nextTick(() => {
      R(z);
    })) : Q();
  }
  function j(z) {
    if (z === void 0 && typeof window < "u") {
      let V = t();
      V != null && V.nodeType !== 8 && (z = Ic(V, o(), w.value, b.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd).scrollViewSize);
    }
    v = z;
    let _ = parseFloat(i.virtualScrollSliceRatioBefore) || 0, N = parseFloat(i.virtualScrollSliceRatioAfter) || 0, H = 1 + _ + N, oe = z === void 0 || z <= 0 ? 1 : Math.ceil(z / n.value), q = Math.max(1, oe, Math.ceil((i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / H));
    h.value = { total: Math.ceil(q * H), start: Math.ceil(q * _), center: Math.ceil(q * (0.5 + _)), end: Math.ceil(q * (1 + _)), view: oe };
  }
  function E(z, _) {
    let N = i.virtualScrollHorizontal === true ? "width" : "height", H = { ["--q-virtual-scroll-item-" + N]: n.value + "px" };
    return [z === "tbody" ? vue.h(z, { class: "q-virtual-scroll__padding", key: "before", ref: w }, [vue.h("tr", [vue.h("td", { style: { [N]: `${m.value}px`, ...H }, colspan: x.value })])]) : vue.h(z, { class: "q-virtual-scroll__padding", key: "before", ref: w, style: { [N]: `${m.value}px`, ...H } }), vue.h(z, { class: "q-virtual-scroll__content", key: "content", ref: p, tabindex: -1 }, _.flat()), z === "tbody" ? vue.h(z, { class: "q-virtual-scroll__padding", key: "after", ref: b }, [vue.h("tr", [vue.h("td", { style: { [N]: `${y.value}px`, ...H }, colspan: x.value })])]) : vue.h(z, { class: "q-virtual-scroll__padding", key: "after", ref: b, style: { [N]: `${y.value}px`, ...H } })];
  }
  function D(z) {
    u !== z && (i.onVirtualScroll !== void 0 && a("virtualScroll", { index: z, from: g.value.from, to: g.value.to - 1, direction: z < u ? "decrease" : "increase", ref: l }), u = z);
  }
  j();
  let Q = Lo(B, s.platform.is.ios === true ? 120 : 35);
  vue.onBeforeMount(() => {
    j();
  });
  let ie = false;
  return vue.onDeactivated(() => {
    ie = true;
  }), vue.onActivated(() => {
    if (ie !== true)
      return;
    let z = t();
    d !== void 0 && z !== void 0 && z !== null && z.nodeType !== 8 ? ig(z, d, i.virtualScrollHorizontal, s.lang.rtl) : R(u);
  }), Object.assign(l, { scrollTo: R, reset: L, refresh: $ }), { virtualScrollSliceRange: g, virtualScrollSliceSizeComputed: h, setVirtualScrollSize: j, onVirtualScrollEvt: Q, localResetVirtualScroll: U, padVirtualScroll: E, scrollTo: R, reset: L, refresh: $ };
}
var lg = (e) => ["add", "add-unique", "toggle"].includes(e), H1 = ".*+?^${}()|[]\\", N1 = Object.keys(Tr), Yu = M({ name: "QSelect", inheritAttrs: false, props: { ...el, ...bt, ...Tr, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: lg }, mapOptions: Boolean, emitValue: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: el.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...Xn, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = vue.ref(false), a = vue.ref(false), l = vue.ref(-1), s = vue.ref(""), d = vue.ref(false), u = vue.ref(false), v = null, f = null, c, m, y, h = null, w, b, p, g, x = vue.ref(null), P = vue.ref(null), A = vue.ref(null), L = vue.ref(null), $ = vue.ref(null), R = hi(e), B = qu(ve), k = vue.computed(() => Array.isArray(e.options) ? e.options.length : 0), S = vue.computed(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: C, virtualScrollSliceSizeComputed: U, localResetVirtualScroll: j, padVirtualScroll: E, onVirtualScrollEvt: D, scrollTo: Q, setVirtualScrollSize: ie } = Ku({ virtualScrollLength: k, getVirtualScrollTarget: yo, getVirtualScrollEl: Gt, virtualScrollItemSizeComputed: S }), z = Gn(), _ = vue.computed(() => {
    let F = e.mapOptions === true && e.multiple !== true, xe = e.modelValue !== void 0 && (e.modelValue !== null || F === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      let ge = e.mapOptions === true && c !== void 0 ? c : [], Qe = xe.map((dt) => W(dt, ge));
      return e.modelValue === null && F === true ? Qe.filter((dt) => dt !== null) : Qe;
    }
    return xe;
  }), N = vue.computed(() => {
    let F = {};
    return N1.forEach((xe) => {
      let ge = e[xe];
      ge !== void 0 && (F[xe] = ge);
    }), F;
  }), H = vue.computed(() => e.optionsDark === null ? z.isDark.value : e.optionsDark), oe = vue.computed(() => ln(_.value)), q = vue.computed(() => {
    let F = "q-field__input q-placeholder col";
    return e.hideSelected === true || _.value.length === 0 ? [F, e.inputClass] : (F += " q-field__input--padding", e.inputClass === void 0 ? F : [F, e.inputClass]);
  }), V = vue.computed(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), te = vue.computed(() => k.value === 0), O = vue.computed(() => _.value.map((F) => se.value(F)).join(", ")), ue = vue.computed(() => e.displayValue !== void 0 ? e.displayValue : O.value), Se = vue.computed(() => e.optionsHtml === true ? () => true : (F) => F != null && F.html === true), K = vue.computed(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || _.value.some(Se.value))), ae = vue.computed(() => z.focused.value === true ? e.tabindex : -1), ce = vue.computed(() => {
    let F = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": i.value === true ? "true" : "false", "aria-controls": `${z.targetUid.value}_lb` };
    return l.value >= 0 && (F["aria-activedescendant"] = `${z.targetUid.value}_${l.value}`), F;
  }), be = vue.computed(() => ({ id: `${z.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), Te = vue.computed(() => _.value.map((F, xe) => ({ index: xe, opt: F, html: Se.value(F), selected: true, removeAtIndex: tt, toggleOption: lt, tabindex: ae.value }))), le = vue.computed(() => {
    if (k.value === 0)
      return [];
    let { from: F, to: xe } = C.value;
    return e.options.slice(F, xe).map((ge, Qe) => {
      let dt = Y.value(ge) === true, ut = we(ge) === true, Ot = F + Qe, kt = { clickable: true, active: ut, activeClass: Fe.value, manualFocus: true, focused: false, disable: dt, tabindex: -1, dense: e.optionsDense, dark: H.value, role: "option", "aria-selected": ut === true ? "true" : "false", id: `${z.targetUid.value}_${Ot}`, onClick: () => {
        lt(ge);
      } };
      return dt !== true && (l.value === Ot && (kt.focused = true), r.platform.is.desktop === true && (kt.onMousemove = () => {
        i.value === true && G(Ot);
      })), { index: Ot, opt: ge, html: Se.value(ge), label: se.value(ge), selected: kt.active, focused: kt.focused, toggleOption: lt, setOptionIndex: G, itemProps: kt };
    });
  }), Me = vue.computed(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : r.iconSet.arrow.dropdown), Le = vue.computed(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), Fe = vue.computed(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ne = vue.computed(() => ee(e.optionValue, "value")), se = vue.computed(() => ee(e.optionLabel, "label")), Y = vue.computed(() => ee(e.optionDisable, "disable")), me = vue.computed(() => _.value.map((F) => ne.value(F))), Pe = vue.computed(() => {
    let F = { onInput: ve, onChange: B, onKeydown: vt, onKeyup: Ye, onKeypress: ct, onFocus: Ve, onClick(xe) {
      m === true && nt(xe);
    } };
    return F.onCompositionstart = F.onCompositionupdate = F.onCompositionend = B, F;
  });
  vue.watch(_, (F) => {
    c = F, e.useInput === true && e.fillInput === true && e.multiple !== true && z.innerLoading.value !== true && (a.value !== true && i.value !== true || oe.value !== true) && (y !== true && Or(), (a.value === true || i.value === true) && He(""));
  }, { immediate: true }), vue.watch(() => e.fillInput, Or), vue.watch(i, bs), vue.watch(k, xh);
  function Ae(F) {
    return e.emitValue === true ? ne.value(F) : F;
  }
  function Re(F) {
    if (F !== -1 && F < _.value.length)
      if (e.multiple === true) {
        let xe = e.modelValue.slice();
        o("remove", { index: F, value: xe.splice(F, 1)[0] }), o("update:modelValue", xe);
      } else
        o("update:modelValue", null);
  }
  function tt(F) {
    Re(F), z.focus();
  }
  function at(F, xe) {
    let ge = Ae(F);
    if (e.multiple !== true) {
      e.fillInput === true && $e(se.value(F), true, true), o("update:modelValue", ge);
      return;
    }
    if (_.value.length === 0) {
      o("add", { index: 0, value: ge }), o("update:modelValue", e.multiple === true ? [ge] : ge);
      return;
    }
    if (xe === true && we(F) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
      return;
    let Qe = e.modelValue.slice();
    o("add", { index: Qe.length, value: ge }), Qe.push(ge), o("update:modelValue", Qe);
  }
  function lt(F, xe) {
    if (z.editable.value !== true || F === void 0 || Y.value(F) === true)
      return;
    let ge = ne.value(F);
    if (e.multiple !== true) {
      xe !== true && ($e(e.fillInput === true ? se.value(F) : "", true, true), cr()), P.value !== null && P.value.focus(), (_.value.length === 0 || Zt(ne.value(_.value[0]), ge) !== true) && o("update:modelValue", e.emitValue === true ? ge : F);
      return;
    }
    if ((m !== true || d.value === true) && z.focus(), Ve(), _.value.length === 0) {
      let ut = e.emitValue === true ? ge : F;
      o("add", { index: 0, value: ut }), o("update:modelValue", e.multiple === true ? [ut] : ut);
      return;
    }
    let Qe = e.modelValue.slice(), dt = me.value.findIndex((ut) => Zt(ut, ge));
    if (dt !== -1)
      o("remove", { index: dt, value: Qe.splice(dt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && Qe.length >= e.maxValues)
        return;
      let ut = e.emitValue === true ? ge : F;
      o("add", { index: Qe.length, value: ut }), Qe.push(ut);
    }
    o("update:modelValue", Qe);
  }
  function G(F) {
    if (r.platform.is.desktop !== true)
      return;
    let xe = F !== -1 && F < k.value ? F : -1;
    l.value !== xe && (l.value = xe);
  }
  function re(F = 1, xe) {
    if (i.value === true) {
      let ge = l.value;
      do
        ge = dr(ge + F, -1, k.value - 1);
      while (ge !== -1 && ge !== l.value && Y.value(e.options[ge]) === true);
      l.value !== ge && (G(ge), Q(ge), xe !== true && e.useInput === true && e.fillInput === true && Ce(ge >= 0 ? se.value(e.options[ge]) : w, true));
    }
  }
  function W(F, xe) {
    let ge = (Qe) => Zt(ne.value(Qe), F);
    return e.options.find(ge) || xe.find(ge) || F;
  }
  function ee(F, xe) {
    let ge = F !== void 0 ? F : xe;
    return typeof ge == "function" ? ge : (Qe) => Qe !== null && typeof Qe == "object" && ge in Qe ? Qe[ge] : Qe;
  }
  function we(F) {
    let xe = ne.value(F);
    return me.value.find((ge) => Zt(ge, xe)) !== void 0;
  }
  function Ve(F) {
    e.useInput === true && P.value !== null && (F === void 0 || P.value === F.target && F.target.value === O.value) && P.value.select();
  }
  function ye(F) {
    Ht(F, 27) === true && i.value === true && (nt(F), cr(), Or()), o("keyup", F);
  }
  function Ye(F) {
    let { value: xe } = F.target;
    if (F.keyCode !== void 0) {
      ye(F);
      return;
    }
    if (F.target.value = "", v !== null && (clearTimeout(v), v = null), f !== null && (clearTimeout(f), f = null), Or(), typeof xe == "string" && xe.length !== 0) {
      let ge = xe.toLocaleLowerCase(), Qe = (ut) => {
        let Ot = e.options.find((kt) => ut.value(kt).toLocaleLowerCase() === ge);
        return Ot === void 0 ? false : (_.value.indexOf(Ot) === -1 ? lt(Ot) : cr(), true);
      }, dt = (ut) => {
        Qe(ne) !== true && (Qe(se) === true || ut === true || He(xe, true, () => dt(true)));
      };
      dt();
    } else
      z.clearValue(F);
  }
  function ct(F) {
    o("keypress", F);
  }
  function vt(F) {
    if (o("keydown", F), go(F) === true)
      return;
    let xe = s.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), ge = F.shiftKey !== true && e.multiple !== true && (l.value !== -1 || xe === true);
    if (F.keyCode === 27) {
      pt(F);
      return;
    }
    if (F.keyCode === 9 && ge === false) {
      ot();
      return;
    }
    if (F.target === void 0 || F.target.id !== z.targetUid.value || z.editable.value !== true)
      return;
    if (F.keyCode === 40 && z.innerLoading.value !== true && i.value === false) {
      qe(F), xo();
      return;
    }
    if (F.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && s.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? Re(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && o("update:modelValue", null);
      return;
    }
    (F.keyCode === 35 || F.keyCode === 36) && (typeof s.value != "string" || s.value.length === 0) && (qe(F), l.value = -1, re(F.keyCode === 36 ? 1 : -1, e.multiple)), (F.keyCode === 33 || F.keyCode === 34) && U.value !== void 0 && (qe(F), l.value = Math.max(-1, Math.min(k.value, l.value + (F.keyCode === 33 ? -1 : 1) * U.value.view)), re(F.keyCode === 33 ? 1 : -1, e.multiple)), (F.keyCode === 38 || F.keyCode === 40) && (qe(F), re(F.keyCode === 38 ? -1 : 1, e.multiple));
    let Qe = k.value;
    if ((p === void 0 || g < Date.now()) && (p = ""), Qe > 0 && e.useInput !== true && F.key !== void 0 && F.key.length === 1 && F.altKey === false && F.ctrlKey === false && F.metaKey === false && (F.keyCode !== 32 || p.length !== 0)) {
      i.value !== true && xo(F);
      let dt = F.key.toLocaleLowerCase(), ut = p.length === 1 && p[0] === dt;
      g = Date.now() + 1500, ut === false && (qe(F), p += dt);
      let Ot = new RegExp("^" + p.split("").map((ys) => H1.indexOf(ys) !== -1 ? "\\" + ys : ys).join(".*"), "i"), kt = l.value;
      if (ut === true || kt < 0 || Ot.test(se.value(e.options[kt])) !== true)
        do
          kt = dr(kt + 1, -1, Qe - 1);
        while (kt !== l.value && (Y.value(e.options[kt]) === true || Ot.test(se.value(e.options[kt])) !== true));
      l.value !== kt && vue.nextTick(() => {
        G(kt), Q(kt), kt >= 0 && e.useInput === true && e.fillInput === true && Ce(se.value(e.options[kt]), true);
      });
      return;
    }
    if (!(F.keyCode !== 13 && (F.keyCode !== 32 || e.useInput === true || p !== "") && (F.keyCode !== 9 || ge === false))) {
      if (F.keyCode !== 9 && qe(F), l.value !== -1 && l.value < Qe) {
        lt(e.options[l.value]);
        return;
      }
      if (xe === true) {
        let dt = (ut, Ot) => {
          if (Ot) {
            if (lg(Ot) !== true)
              return;
          } else
            Ot = e.newValueMode;
          if ($e("", e.multiple !== true, true), ut == null)
            return;
          (Ot === "toggle" ? lt : at)(ut, Ot === "add-unique"), e.multiple !== true && (P.value !== null && P.value.focus(), cr());
        };
        if (e.onNewValue !== void 0 ? o("newValue", s.value, dt) : dt(s.value), e.multiple !== true)
          return;
      }
      i.value === true ? ot() : z.innerLoading.value !== true && xo();
    }
  }
  function Gt() {
    return m === true ? $.value : A.value !== null && A.value.contentEl !== null ? A.value.contentEl : void 0;
  }
  function yo() {
    return Gt();
  }
  function gn() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? Te.value.map((F) => t["selected-item"](F)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? Te.value.map((F, xe) => vue.h(Ei, { key: "option-" + xe, removable: z.editable.value === true && Y.value(F.opt) !== true, dense: true, textColor: e.color, tabindex: ae.value, onRemove() {
      F.removeAtIndex(xe);
    } }, () => vue.h("span", { class: "ellipsis", [F.html === true ? "innerHTML" : "textContent"]: se.value(F.opt) }))) : [vue.h("span", { [K.value === true ? "innerHTML" : "textContent"]: ue.value })];
  }
  function Ko() {
    if (te.value === true)
      return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: s.value }) : void 0;
    let F = t.option !== void 0 ? t.option : (ge) => vue.h(an, { key: ge.index, ...ge.itemProps }, () => vue.h(co, () => vue.h(Cr, () => vue.h("span", { [ge.html === true ? "innerHTML" : "textContent"]: ge.label })))), xe = E("div", le.value.map(F));
    return t["before-options"] !== void 0 && (xe = t["before-options"]().concat(xe)), Ue(t["after-options"], xe);
  }
  function Z(F, xe) {
    let ge = xe === true ? { ...ce.value, ...z.splitAttrs.attributes.value } : void 0, Qe = { ref: xe === true ? P : void 0, key: "i_t", class: q.value, style: e.inputStyle, value: s.value !== void 0 ? s.value : "", type: "search", ...ge, id: xe === true ? z.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": F === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...Pe.value };
    return F !== true && m === true && (Array.isArray(Qe.class) === true ? Qe.class = [...Qe.class, "no-pointer-events"] : Qe.class += " no-pointer-events"), vue.h("input", Qe);
  }
  function ve(F) {
    v !== null && (clearTimeout(v), v = null), f !== null && (clearTimeout(f), f = null), !(F && F.target && F.target.qComposing === true) && (Ce(F.target.value || ""), y = true, w = s.value, z.focused.value !== true && (m !== true || d.value === true) && z.focus(), e.onFilter !== void 0 && (v = setTimeout(() => {
      v = null, He(s.value);
    }, e.inputDebounce)));
  }
  function Ce(F, xe) {
    s.value !== F && (s.value = F, xe === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? o("inputValue", F) : f = setTimeout(() => {
      f = null, o("inputValue", F);
    }, e.inputDebounce));
  }
  function $e(F, xe, ge) {
    y = ge !== true, e.useInput === true && (Ce(F, true), (xe === true || ge !== true) && (w = F), xe !== true && He(F));
  }
  function He(F, xe, ge) {
    if (e.onFilter === void 0 || xe !== true && z.focused.value !== true)
      return;
    z.innerLoading.value === true ? o("filterAbort") : (z.innerLoading.value = true, u.value = true), F !== "" && e.multiple !== true && _.value.length !== 0 && y !== true && F === se.value(_.value[0]) && (F = "");
    let Qe = setTimeout(() => {
      i.value === true && (i.value = false);
    }, 10);
    h !== null && clearTimeout(h), h = Qe, o("filter", F, (dt, ut) => {
      (xe === true || z.focused.value === true) && h === Qe && (clearTimeout(h), typeof dt == "function" && dt(), u.value = false, vue.nextTick(() => {
        z.innerLoading.value = false, z.editable.value === true && (xe === true ? i.value === true && cr() : i.value === true ? bs(true) : i.value = true), typeof ut == "function" && vue.nextTick(() => {
          ut(n);
        }), typeof ge == "function" && vue.nextTick(() => {
          ge(n);
        });
      }));
    }, () => {
      z.focused.value === true && h === Qe && (clearTimeout(h), z.innerLoading.value = false, u.value = false), i.value === true && (i.value = false);
    });
  }
  function gt() {
    return vue.h(Zo, { ref: A, class: V.value, style: e.popupContentStyle, modelValue: i.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && te.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: H.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: Le.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...be.value, onScrollPassive: D, onBeforeShow: cd, onBeforeHide: T, onShow: I }, Ko);
  }
  function T(F) {
    dd(F), ot();
  }
  function I() {
    ie();
  }
  function X(F) {
    nt(F), P.value !== null && P.value.focus(), d.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function de(F) {
    nt(F), vue.nextTick(() => {
      d.value = false;
    });
  }
  function fe() {
    let F = [vue.h(pu, { class: `col-auto ${z.fieldClass.value}`, ...N.value, for: z.targetUid.value, dark: H.value, square: true, loading: u.value, itemAligned: false, filled: true, stackLabel: s.value.length !== 0, ...z.splitAttrs.listeners.value, onFocus: X, onBlur: de }, { ...t, rawControl: () => z.getControl(true), before: void 0, after: void 0 })];
    return i.value === true && F.push(vue.h("div", { ref: $, class: V.value + " scroll", style: e.popupContentStyle, ...be.value, onClick: pt, onScrollPassive: D }, Ko())), vue.h(rn, { ref: L, modelValue: a.value, position: e.useInput === true ? "top" : void 0, transitionShow: b, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: cd, onBeforeHide: Je, onHide: ke, onShow: Ke }, () => vue.h("div", { class: "q-select__dialog" + (H.value === true ? " q-select__dialog--dark q-dark" : "") + (d.value === true ? " q-select__dialog--focused" : "") }, F));
  }
  function Je(F) {
    dd(F), L.value !== null && L.value.__updateRefocusTarget(z.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), z.focused.value = false;
  }
  function ke(F) {
    cr(), z.focused.value === false && o("blur", F), Or();
  }
  function Ke() {
    let F = document.activeElement;
    (F === null || F.id !== z.targetUid.value) && P.value !== null && P.value !== F && P.value.focus(), ie();
  }
  function ot() {
    a.value !== true && (l.value = -1, i.value === true && (i.value = false), z.focused.value === false && (h !== null && (clearTimeout(h), h = null), z.innerLoading.value === true && (o("filterAbort"), z.innerLoading.value = false, u.value = false)));
  }
  function xo(F) {
    z.editable.value === true && (m === true ? (z.onControlFocusin(F), a.value = true, vue.nextTick(() => {
      z.focus();
    })) : z.focus(), e.onFilter !== void 0 ? He(s.value) : (te.value !== true || t["no-option"] !== void 0) && (i.value = true));
  }
  function cr() {
    a.value = false, ot();
  }
  function Or() {
    e.useInput === true && $e(e.multiple !== true && e.fillInput === true && _.value.length !== 0 && se.value(_.value[0]) || "", true, true);
  }
  function bs(F) {
    let xe = -1;
    if (F === true) {
      if (_.value.length !== 0) {
        let ge = ne.value(_.value[0]);
        xe = e.options.findIndex((Qe) => Zt(ne.value(Qe), ge));
      }
      j(xe);
    }
    G(xe);
  }
  function xh(F, xe) {
    i.value === true && z.innerLoading.value === false && (j(-1, true), vue.nextTick(() => {
      i.value === true && z.innerLoading.value === false && (F > xe ? j() : bs(true));
    }));
  }
  function sd() {
    a.value === false && A.value !== null && A.value.updatePosition();
  }
  function cd(F) {
    F !== void 0 && nt(F), o("popupShow", F), z.hasPopupOpen = true, z.onControlFocusin(F);
  }
  function dd(F) {
    F !== void 0 && nt(F), o("popupHide", F), z.hasPopupOpen = false, z.onControlFocusout(F);
  }
  function fd() {
    m = r.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || te.value === false : true), b = r.platform.is.ios === true && m === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return vue.onBeforeUpdate(fd), vue.onUpdated(sd), fd(), vue.onBeforeUnmount(() => {
    v !== null && clearTimeout(v), f !== null && clearTimeout(f);
  }), Object.assign(n, { showPopup: xo, hidePopup: cr, removeAtIndex: Re, add: at, toggleOption: lt, getOptionIndex: () => l.value, setOptionIndex: G, moveOptionSelection: re, filter: He, updateMenuPosition: sd, updateInputValue: $e, isOptionSelected: we, getEmittingOptionValue: Ae, isOptionDisabled: (...F) => Y.value.apply(null, F) === true, getOptionValue: (...F) => ne.value.apply(null, F), getOptionLabel: (...F) => se.value.apply(null, F) }), Object.assign(z, { innerValue: _, fieldClass: vue.computed(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: x, targetRef: P, hasValue: oe, showPopup: xo, floatingLabel: vue.computed(() => e.hideSelected !== true && oe.value === true || typeof s.value == "number" || s.value.length !== 0 || ln(e.displayValue)), getControlChild: () => {
    if (z.editable.value !== false && (a.value === true || te.value !== true || t["no-option"] !== void 0))
      return m === true ? fe() : gt();
    z.hasPopupOpen === true && (z.hasPopupOpen = false);
  }, controlEvents: { onFocusin(F) {
    z.onControlFocusin(F);
  }, onFocusout(F) {
    z.onControlFocusout(F, () => {
      Or(), ot();
    });
  }, onClick(F) {
    if (pt(F), m !== true && i.value === true) {
      ot(), P.value !== null && P.value.focus();
      return;
    }
    xo(F);
  } }, getControl: (F) => {
    let xe = gn(), ge = F === true || a.value !== true || m !== true;
    if (e.useInput === true)
      xe.push(Z(F, ge));
    else if (z.editable.value === true) {
      let dt = ge === true ? ce.value : void 0;
      xe.push(vue.h("input", { ref: ge === true ? P : void 0, key: "d_t", class: "q-select__focus-target", id: ge === true ? z.targetUid.value : void 0, value: ue.value, readonly: true, "data-autofocus": F === true || e.autofocus === true || void 0, ...dt, onKeydown: vt, onKeyup: ye, onKeypress: ct })), ge === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && xe.push(vue.h("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Ye }));
    }
    if (R.value !== void 0 && e.disable !== true && me.value.length !== 0) {
      let dt = me.value.map((ut) => vue.h("option", { value: ut, selected: true }));
      xe.push(vue.h("select", { class: "hidden", name: R.value, multiple: e.multiple }, dt));
    }
    let Qe = e.useInput === true || ge !== true ? void 0 : z.splitAttrs.attributes.value;
    return vue.h("div", { class: "q-field__native row items-center", ...Qe, ...z.splitAttrs.listeners.value }, xe);
  }, getInnerAppend: () => e.loading !== true && u.value !== true && e.hideDropdownIcon !== true ? [vue.h(_e, { class: "q-select__dropdown-icon" + (i.value === true ? " rotate-180" : ""), name: Me.value })] : null }), Zn(z);
} });
var U1 = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], K1 = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"], sg = M({ name: "QSkeleton", props: { ...pe, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => U1.includes(e), default: "rect" }, animation: { type: String, validator: (e) => K1.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  let o = vue.getCurrentInstance(), n = he(e, o.proxy.$q), r = vue.computed(() => {
    let a = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: a[0], height: a[1] };
  }), i = vue.computed(() => `q-skeleton q-skeleton--${n.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => vue.h(e.tag, { class: i.value, style: r.value }, J(t.default));
} });
var dg = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]], fg = M({ name: "QSlideItem", props: { ...pe, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = he(e, r), { getCache: a } = zo(), l = vue.ref(null), s = null, d = {}, u = {}, v = {}, f = vue.computed(() => r.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), c = vue.computed(() => "q-slide-item q-item-type overflow-hidden" + (i.value === true ? " q-slide-item--dark q-dark" : ""));
  function m() {
    l.value.style.transform = "translate(0,0)";
  }
  function y(w, b, p) {
    e.onSlide !== void 0 && o("slide", { side: w, ratio: b, isReset: p });
  }
  function h(w) {
    let b = l.value;
    if (w.isFirst)
      d = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, b.classList.add("no-transition"), dg.forEach((P) => {
        if (t[P[0]] !== void 0) {
          let A = v[P[0]];
          A.style.transform = "scale(1)", d.size[P[0]] = A.getBoundingClientRect()[P[3]];
        }
      }), d.axis = w.direction === "up" || w.direction === "down" ? "Y" : "X";
    else if (w.isFinal) {
      b.classList.remove("no-transition"), d.scale === 1 ? (b.style.transform = `translate${d.axis}(${d.dir * 100}%)`, s !== null && clearTimeout(s), s = setTimeout(() => {
        s = null, o(d.showing, { reset: m }), o("action", { side: d.showing, reset: m });
      }, 230)) : (b.style.transform = "translate(0,0)", y(d.showing, 0, true));
      return;
    } else
      w.direction = d.axis === "X" ? w.offset.x < 0 ? "left" : "right" : w.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && w.direction === f.value.right || t.right === void 0 && w.direction === f.value.left || t.top === void 0 && w.direction === "down" || t.bottom === void 0 && w.direction === "up") {
      b.style.transform = "translate(0,0)";
      return;
    }
    let p, g, x;
    d.axis === "X" ? (g = w.direction === "left" ? -1 : 1, p = g === 1 ? f.value.left : f.value.right, x = w.distance.x) : (g = w.direction === "up" ? -2 : 2, p = g === 2 ? "top" : "bottom", x = w.distance.y), !(d.dir !== null && Math.abs(g) !== Math.abs(d.dir)) && (d.dir !== g && (["left", "right", "top", "bottom"].forEach((P) => {
      u[P] && (u[P].style.visibility = p === P ? "visible" : "hidden");
    }), d.showing = p, d.dir = g), d.scale = Math.max(0, Math.min(1, (x - 40) / d.size[p])), b.style.transform = `translate${d.axis}(${x * g / Math.abs(g)}px)`, v[p].style.transform = `scale(${d.scale})`, y(p, d.scale, false));
  }
  return vue.onBeforeUpdate(() => {
    u = {}, v = {};
  }), vue.onBeforeUnmount(() => {
    s !== null && clearTimeout(s);
  }), Object.assign(n, { reset: m }), () => {
    let w = [], b = { left: t[f.value.right] !== void 0, right: t[f.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, p = Object.keys(b).filter((x) => b[x] === true);
    dg.forEach((x) => {
      let P = x[0];
      t[P] !== void 0 && w.push(vue.h("div", { key: P, ref: (A) => {
        u[P] = A;
      }, class: `q-slide-item__${P} absolute-full row no-wrap items-${x[1]} justify-${x[2]}` + (e[P + "Color"] !== void 0 ? ` bg-${e[P + "Color"]}` : "") }, [vue.h("div", { ref: (A) => {
        v[P] = A;
      } }, t[P]())]));
    });
    let g = vue.h("div", { key: `${p.length === 0 ? "only-" : ""} content`, ref: l, class: "q-slide-item__content" }, J(t.default));
    return p.length === 0 ? w.push(g) : w.push(vue.withDirectives(g, a("dir#" + p.join(""), () => {
      let x = { prevent: true, stop: true, mouse: true };
      return p.forEach((P) => {
        x[P] = true;
      }), [[St, h, void 0, x]];
    }))), vue.h("div", { class: c.value }, w);
  };
} });
var ew = vue.h("div", { class: "q-space" }), mg = M({ name: "QSpace", setup() {
  return () => ew;
} });
var tw = [vue.h("g", { transform: "matrix(1 0 0 -1 0 80)" }, [vue.h("rect", { width: "10", height: "20", rx: "3" }, [vue.h("animate", { attributeName: "height", begin: "0s", dur: "4.3s", values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("rect", { x: "15", width: "10", height: "80", rx: "3" }, [vue.h("animate", { attributeName: "height", begin: "0s", dur: "2s", values: "80;55;33;5;75;23;73;33;12;14;60;80", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("rect", { x: "30", width: "10", height: "50", rx: "3" }, [vue.h("animate", { attributeName: "height", begin: "0s", dur: "1.4s", values: "50;34;78;23;56;23;34;76;80;54;21;50", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("rect", { x: "45", width: "10", height: "30", rx: "3" }, [vue.h("animate", { attributeName: "height", begin: "0s", dur: "2s", values: "30;45;13;80;56;72;45;76;34;23;67;30", calcMode: "linear", repeatCount: "indefinite" })])])], vg = M({ name: "QSpinnerAudio", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg" }, tw);
} });
var ow = [vue.h("g", { transform: "translate(1 1)", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" }, [vue.h("circle", { cx: "5", cy: "50", r: "5" }, [vue.h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;5;50;50", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "cx", begin: "0s", dur: "2.2s", values: "5;27;49;5", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "27", cy: "5", r: "5" }, [vue.h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", from: "5", to: "5", values: "5;50;50;5", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "cx", begin: "0s", dur: "2.2s", from: "27", to: "27", values: "27;49;5;27", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "49", cy: "50", r: "5" }, [vue.h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;50;5;50", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "cx", from: "49", to: "49", begin: "0s", dur: "2.2s", values: "49;5;27;49", calcMode: "linear", repeatCount: "indefinite" })])])], gg = M({ name: "QSpinnerBall", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg" }, ow);
} });
var nw = [vue.h("rect", { y: "10", width: "15", height: "120", rx: "6" }, [vue.h("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("rect", { x: "30", y: "10", width: "15", height: "120", rx: "6" }, [vue.h("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("rect", { x: "60", width: "15", height: "140", rx: "6" }, [vue.h("animate", { attributeName: "height", begin: "0s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "y", begin: "0s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("rect", { x: "90", y: "10", width: "15", height: "120", rx: "6" }, [vue.h("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("rect", { x: "120", y: "10", width: "15", height: "120", rx: "6" }, [vue.h("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })])], pg = M({ name: "QSpinnerBars", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg" }, nw);
} });
var rw = [vue.h("rect", { x: "25", y: "25", width: "50", height: "50", fill: "none", "stroke-width": "4", stroke: "currentColor" }, [vue.h("animateTransform", { id: "spinnerBox", attributeName: "transform", type: "rotate", from: "0 50 50", to: "180 50 50", dur: "0.5s", begin: "rectBox.end" })]), vue.h("rect", { x: "27", y: "27", width: "46", height: "50", fill: "currentColor" }, [vue.h("animate", { id: "rectBox", attributeName: "height", begin: "0s;spinnerBox.end", dur: "1.3s", from: "50", to: "0", fill: "freeze" })])], hg = M({ name: "QSpinnerBox", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, rw);
} });
var iw = [vue.h("circle", { cx: "50", cy: "50", r: "48", fill: "none", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor" }), vue.h("line", { "stroke-linecap": "round", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor", x1: "50", y1: "50", x2: "85", y2: "50.5" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "2s", repeatCount: "indefinite" })]), vue.h("line", { "stroke-linecap": "round", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor", x1: "50", y1: "50", x2: "49.5", y2: "74" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "15s", repeatCount: "indefinite" })])], bg = M({ name: "QSpinnerClock", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, iw);
} });
var aw = [vue.h("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none" }), vue.h("path", { d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z", fill: "currentColor" }), vue.h("circle", { cx: "30", cy: "47", r: "5", fill: "#fff" }, [vue.h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;1;1", keyTimes: "0;0.2;1", dur: "1s", repeatCount: "indefinite" })]), vue.h("circle", { cx: "50", cy: "47", r: "5", fill: "#fff" }, [vue.h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;0;1;1", keyTimes: "0;0.2;0.4;1", dur: "1s", repeatCount: "indefinite" })]), vue.h("circle", { cx: "70", cy: "47", r: "5", fill: "#fff" }, [vue.h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;0;1;1", keyTimes: "0;0.4;0.6;1", dur: "1s", repeatCount: "indefinite" })])], yg = M({ name: "QSpinnerComment", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, aw);
} });
var lw = [vue.h("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none" }), vue.h("g", { transform: "translate(25 25)" }, [vue.h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.9" }, [vue.h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), vue.h("g", { transform: "translate(75 25)" }, [vue.h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.8" }, [vue.h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.1s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), vue.h("g", { transform: "translate(25 75)" }, [vue.h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.7" }, [vue.h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.3s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), vue.h("g", { transform: "translate(75 75)" }, [vue.h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.6" }, [vue.h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.2s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])])], xg = M({ name: "QSpinnerCube", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, lw);
} });
var uw = [vue.h("circle", { cx: "15", cy: "15", r: "15" }, [vue.h("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "60", cy: "15", r: "9", "fill-opacity": ".3" }, [vue.h("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "fill-opacity", from: ".5", to: ".5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "105", cy: "15", r: "15" }, [vue.h("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })])], Sg = M({ name: "QSpinnerDots", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg" }, uw);
} });
var sw = [vue.h("g", { transform: "translate(20 50)" }, [vue.h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.6" }, [vue.h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])]), vue.h("g", { transform: "translate(50 50)" }, [vue.h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.8" }, [vue.h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0.1s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])]), vue.h("g", { transform: "translate(80 50)" }, [vue.h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.9" }, [vue.h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0.2s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])])], _g = M({ name: "QSpinnerFacebook", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid" }, sw);
} });
var cw = [vue.h("g", { transform: "translate(-20,-20)" }, [vue.h("path", { d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z", fill: "currentColor" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "90 50 50", to: "0 50 50", dur: "1s", repeatCount: "indefinite" })])]), vue.h("g", { transform: "translate(20,20) rotate(15 50 50)" }, [vue.h("path", { d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z", fill: "currentColor" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "90 50 50", dur: "1s", repeatCount: "indefinite" })])])], wg = M({ name: "QSpinnerGears", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, cw);
} });
var dw = [vue.h("circle", { cx: "12.5", cy: "12.5", r: "12.5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "12.5", cy: "52.5", r: "12.5", "fill-opacity": ".5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "100ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "52.5", cy: "12.5", r: "12.5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "300ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "52.5", cy: "52.5", r: "12.5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "600ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "92.5", cy: "12.5", r: "12.5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "800ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "92.5", cy: "52.5", r: "12.5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "400ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "12.5", cy: "92.5", r: "12.5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "700ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "52.5", cy: "92.5", r: "12.5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "500ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "92.5", cy: "92.5", r: "12.5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "200ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })])], Cg = M({ name: "QSpinnerGrid", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg" }, dw);
} });
var fw = [vue.h("path", { d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z", "fill-opacity": ".5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("path", { d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z", "fill-opacity": ".5" }, [vue.h("animate", { attributeName: "fill-opacity", begin: "0.7s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })], kg = M({ name: "QSpinnerHearts", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg" }, fw);
} });
var mw = [vue.h("g", [vue.h("path", { fill: "none", stroke: "currentColor", "stroke-width": "5", "stroke-miterlimit": "10", d: "M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z" }), vue.h("clipPath", { id: "uil-hourglass-clip1" }, [vue.h("rect", { x: "15", y: "20", width: "70", height: "25" }, [vue.h("animate", { attributeName: "height", from: "25", to: "0", dur: "1s", repeatCount: "indefinite", values: "25;0;0", keyTimes: "0;0.5;1" }), vue.h("animate", { attributeName: "y", from: "20", to: "45", dur: "1s", repeatCount: "indefinite", values: "20;45;45", keyTimes: "0;0.5;1" })])]), vue.h("clipPath", { id: "uil-hourglass-clip2" }, [vue.h("rect", { x: "15", y: "55", width: "70", height: "25" }, [vue.h("animate", { attributeName: "height", from: "0", to: "25", dur: "1s", repeatCount: "indefinite", values: "0;25;25", keyTimes: "0;0.5;1" }), vue.h("animate", { attributeName: "y", from: "80", to: "55", dur: "1s", repeatCount: "indefinite", values: "80;55;55", keyTimes: "0;0.5;1" })])]), vue.h("path", { d: "M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z", "clip-path": "url(#uil-hourglass-clip1)", fill: "currentColor" }), vue.h("path", { d: "M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z", "clip-path": "url(#uil-hourglass-clip2)", fill: "currentColor" }), vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "180 50 50", repeatCount: "indefinite", dur: "1s", values: "0 50 50;0 50 50;180 50 50", keyTimes: "0;0.7;1" })])], qg = M({ name: "QSpinnerHourglass", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, mw);
} });
var vw = [vue.h("path", { d: "M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z", fill: "none", stroke: "currentColor", "stroke-width": "8", "stroke-dasharray": "10.691205342610678 10.691205342610678", "stroke-dashoffset": "0" }, [vue.h("animate", { attributeName: "stroke-dashoffset", from: "0", to: "21.382410685221355", begin: "0", dur: "2s", repeatCount: "indefinite", fill: "freeze" })])], Tg = M({ name: "QSpinnerInfinity", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, vw);
} });
var gw = [vue.h("g", { "stroke-width": "4", "stroke-linecap": "round" }, [vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(180)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(210)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(240)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(270)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(300)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(330)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(0)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(30)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(60)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(90)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(120)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85", repeatCount: "indefinite" })]), vue.h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(150)" }, [vue.h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1", repeatCount: "indefinite" })])])], Mg = M({ name: "QSpinnerIos", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64" }, gw);
} });
var pw = [vue.h("circle", { cx: "50", cy: "50", r: "44", fill: "none", "stroke-width": "4", "stroke-opacity": ".5", stroke: "currentColor" }), vue.h("circle", { cx: "8", cy: "54", r: "6", fill: "currentColor", "stroke-width": "3", stroke: "currentColor" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 48", to: "360 50 52", dur: "2s", repeatCount: "indefinite" })])], Pg = M({ name: "QSpinnerOrbit", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, pw);
} });
var hw = [vue.h("g", { transform: "translate(1 1)", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" }, [vue.h("circle", { "stroke-opacity": ".5", cx: "18", cy: "18", r: "18" }), vue.h("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })])])], Rg = M({ name: "QSpinnerOval", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, hw);
} });
var bw = [vue.h("path", { d: "M0 50A50 50 0 0 1 50 0L50 50L0 50", fill: "currentColor", opacity: "0.5" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "0.8s", repeatCount: "indefinite" })]), vue.h("path", { d: "M50 0A50 50 0 0 1 100 50L50 50L50 0", fill: "currentColor", opacity: "0.5" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "1.6s", repeatCount: "indefinite" })]), vue.h("path", { d: "M100 50A50 50 0 0 1 50 100L50 50L100 50", fill: "currentColor", opacity: "0.5" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "2.4s", repeatCount: "indefinite" })]), vue.h("path", { d: "M50 100A50 50 0 0 1 0 50L50 50L50 100", fill: "currentColor", opacity: "0.5" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "3.2s", repeatCount: "indefinite" })])], Eg = M({ name: "QSpinnerPie", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, bw);
} });
var yw = [vue.h("g", { fill: "none", "fill-rule": "evenodd", "stroke-width": "2" }, [vue.h("circle", { cx: "22", cy: "22", r: "1" }, [vue.h("animate", { attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "stroke-opacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })]), vue.h("circle", { cx: "22", cy: "22", r: "1" }, [vue.h("animate", { attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "stroke-opacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })])])], Ag = M({ name: "QSpinnerPuff", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg" }, yw);
} });
var xw = [vue.h("g", { transform: "scale(0.55)" }, [vue.h("circle", { cx: "30", cy: "150", r: "30", fill: "currentColor" }, [vue.h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })]), vue.h("path", { d: "M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z", fill: "currentColor" }, [vue.h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0.1", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })]), vue.h("path", { d: "M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z", fill: "currentColor" }, [vue.h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0.2", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })])])], $g = M({ name: "QSpinnerRadio", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, xw);
} });
var Sw = [vue.h("g", { fill: "none", "fill-rule": "evenodd", transform: "translate(1 1)", "stroke-width": "2" }, [vue.h("circle", { cx: "22", cy: "22", r: "6" }, [vue.h("animate", { attributeName: "r", begin: "1.5s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "stroke-opacity", begin: "1.5s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "stroke-width", begin: "1.5s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "22", cy: "22", r: "6" }, [vue.h("animate", { attributeName: "r", begin: "3s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "stroke-opacity", begin: "3s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }), vue.h("animate", { attributeName: "stroke-width", begin: "3s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })]), vue.h("circle", { cx: "22", cy: "22", r: "8" }, [vue.h("animate", { attributeName: "r", begin: "0s", dur: "1.5s", values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite" })])])], Bg = M({ name: "QSpinnerRings", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg" }, Sw);
} });
var _w = [vue.h("defs", [vue.h("linearGradient", { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" }, [vue.h("stop", { "stop-color": "currentColor", "stop-opacity": "0", offset: "0%" }), vue.h("stop", { "stop-color": "currentColor", "stop-opacity": ".631", offset: "63.146%" }), vue.h("stop", { "stop-color": "currentColor", offset: "100%" })])]), vue.h("g", { transform: "translate(1 1)", fill: "none", "fill-rule": "evenodd" }, [vue.h("path", { d: "M36 18c0-9.94-8.06-18-18-18", stroke: "url(#a)", "stroke-width": "2" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })]), vue.h("circle", { fill: "currentColor", cx: "36", cy: "18", r: "1" }, [vue.h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })])])], Lg = M({ name: "QSpinnerTail", props: ze, setup(e) {
  let { cSize: t, classes: o } = De(e);
  return () => vue.h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, _w);
} });
var Dg = M({ name: "QSplitter", props: { ...pe, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = he(e, n), i = vue.ref(null), a = { before: vue.ref(null), after: vue.ref(null) }, l = vue.computed(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (r.value === true ? " q-splitter--dark" : "")), s = vue.computed(() => e.horizontal === true ? "height" : "width"), d = vue.computed(() => e.reverse !== true ? "before" : "after"), u = vue.computed(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function v(x) {
    return (e.unit === "%" ? x : Math.round(x)) + e.unit;
  }
  let f = vue.computed(() => ({ [d.value]: { [s.value]: v(e.modelValue) } })), c, m, y, h, w;
  function b(x) {
    if (x.isFirst === true) {
      let A = i.value.getBoundingClientRect()[s.value];
      c = e.horizontal === true ? "up" : "left", m = e.unit === "%" ? 100 : A, y = Math.min(m, u.value[1], Math.max(u.value[0], e.modelValue)), h = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : n.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? A === 0 ? 0 : 100 / A : 1), i.value.classList.add("q-splitter--active");
      return;
    }
    if (x.isFinal === true) {
      w !== e.modelValue && o("update:modelValue", w), i.value.classList.remove("q-splitter--active");
      return;
    }
    let P = y + h * (x.direction === c ? -1 : 1) * x.distance[e.horizontal === true ? "y" : "x"];
    w = Math.min(m, u.value[1], Math.max(u.value[0], P)), a[d.value].value.style[s.value] = v(w), e.emitImmediately === true && e.modelValue !== w && o("update:modelValue", w);
  }
  let p = vue.computed(() => [[St, b, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function g(x, P) {
    x < P[0] ? o("update:modelValue", P[0]) : x > P[1] && o("update:modelValue", P[1]);
  }
  return vue.watch(() => e.modelValue, (x) => {
    g(x, u.value);
  }), vue.watch(() => e.limits, () => {
    vue.nextTick(() => {
      g(e.modelValue, u.value);
    });
  }), () => {
    let x = [vue.h("div", { ref: a.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: f.value.before }, J(t.before)), vue.h("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [yt("div", { class: "q-splitter__separator-area absolute-full" }, J(t.separator), "sep", e.disable !== true, () => p.value)]), vue.h("div", { ref: a.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: f.value.after }, J(t.after))];
    return vue.h("div", { class: l.value, ref: i }, Ue(t.default, x));
  };
} });
var Ju = M({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  let { proxy: { $q: o } } = vue.getCurrentInstance(), n = vue.ref(null), r = vue.computed(() => e.stepper.modelValue === e.step.name), i = vue.computed(() => {
    let h = e.step.disable;
    return h === true || h === "";
  }), a = vue.computed(() => {
    let h = e.step.error;
    return h === true || h === "";
  }), l = vue.computed(() => {
    let h = e.step.done;
    return i.value === false && (h === true || h === "");
  }), s = vue.computed(() => {
    let h = e.step.headerNav, w = h === true || h === "" || h === void 0;
    return i.value === false && e.stepper.headerNav && w;
  }), d = vue.computed(() => e.step.prefix && (r.value === false || e.stepper.activeIcon === "none") && (a.value === false || e.stepper.errorIcon === "none") && (l.value === false || e.stepper.doneIcon === "none")), u = vue.computed(() => {
    let h = e.step.icon || e.stepper.inactiveIcon;
    if (r.value === true) {
      let w = e.step.activeIcon || e.stepper.activeIcon;
      return w === "none" ? h : w || o.iconSet.stepper.active;
    }
    if (a.value === true) {
      let w = e.step.errorIcon || e.stepper.errorIcon;
      return w === "none" ? h : w || o.iconSet.stepper.error;
    }
    if (i.value === false && l.value === true) {
      let w = e.step.doneIcon || e.stepper.doneIcon;
      return w === "none" ? h : w || o.iconSet.stepper.done;
    }
    return h;
  }), v = vue.computed(() => {
    let h = a.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (r.value === true) {
      let w = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return w !== void 0 ? w : h;
    }
    return h !== void 0 ? h : i.value === false && l.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), f = vue.computed(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (v.value !== void 0 ? ` text-${v.value}` : "") + (a.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (d.value === true ? "prefix" : "icon") : "") + (r.value === true ? " q-stepper__tab--active" : "") + (l.value === true ? " q-stepper__tab--done" : "") + (s.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (i.value === true ? " q-stepper__tab--disabled" : "")), c = vue.computed(() => e.stepper.headerNav !== true ? false : s.value);
  function m() {
    n.value !== null && n.value.focus(), r.value === false && e.goToPanel(e.step.name);
  }
  function y(h) {
    h.keyCode === 13 && r.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    let h = { class: f.value };
    s.value === true && (h.onClick = m, h.onKeyup = y, Object.assign(h, i.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    let w = [vue.h("div", { class: "q-focus-helper", tabindex: -1, ref: n }), vue.h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [vue.h("span", { class: "row flex-center" }, [d.value === true ? e.step.prefix : vue.h(_e, { name: u.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      let b = [vue.h("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && b.push(vue.h("div", { class: "q-stepper__caption" }, e.step.caption)), w.push(vue.h("div", { class: "q-stepper__label q-stepper__line relative-position" }, b));
    }
    return vue.withDirectives(vue.h("div", h, w), [[Xo, c.value]]);
  };
} });
function zg(e) {
  return vue.h("div", { class: "q-stepper__step-content" }, [vue.h("div", { class: "q-stepper__step-inner" }, J(e.default))]);
}
var Vg = { setup(e, { slots: t }) {
  return () => zg(t);
} }, Og = M({ name: "QStep", props: { ...yi, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: n } } = vue.getCurrentInstance(), r = vue.inject(ul, We);
  if (r === We)
    return console.error("QStep needs to be a child of QStepper"), We;
  let { getCache: i } = zo(), a = vue.ref(null), l = vue.computed(() => r.value.modelValue === e.name), s = vue.computed(() => n.platform.is.ios !== true && n.platform.is.chrome === true || l.value !== true || r.value.vertical !== true ? {} : { onScroll(v) {
    let { target: f } = v;
    f.scrollTop > 0 && (f.scrollTop = 0), e.onScroll !== void 0 && o("scroll", v);
  } }), d = vue.computed(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function u() {
    let v = r.value.vertical;
    return v === true && r.value.keepAlive === true ? vue.h(vue.KeepAlive, r.value.keepAliveProps.value, l.value === true ? [vue.h(r.value.needsUniqueKeepAliveWrapper.value === true ? i(d.value, () => ({ ...Vg, name: d.value })) : Vg, { key: d.value }, t.default)] : void 0) : v !== true || l.value === true ? zg(t) : void 0;
  }
  return () => vue.h("div", { ref: a, class: "q-stepper__step", role: "tabpanel", ...s.value }, r.value.vertical === true ? [vue.h(Ju, { stepper: r.value, step: e, goToPanel: r.value.goToPanel }), r.value.animated === true ? vue.h(Yn, u) : u()] : [u()]);
} });
var Bw = /(-\w)/g;
function Lw(e) {
  let t = {};
  for (let o in e) {
    let n = o.replace(Bw, (r) => r[1].toUpperCase());
    t[n] = e[o];
  }
  return t;
}
var Ig = M({ name: "QStepper", props: { ...pe, ...xi, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Si, setup(e, { slots: t }) {
  let o = vue.getCurrentInstance(), n = he(e, o.proxy.$q), { updatePanelsList: r, isValidPanelName: i, updatePanelIndex: a, getPanelContent: l, getPanels: s, panelDirectives: d, goToPanel: u, keepAliveProps: v, needsUniqueKeepAliveWrapper: f } = _i();
  vue.provide(ul, vue.computed(() => ({ goToPanel: u, keepAliveProps: v, needsUniqueKeepAliveWrapper: f, ...e })));
  let c = vue.computed(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (n.value === true ? " q-stepper--dark q-dark" : "")), m = vue.computed(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function y() {
    let h = J(t.message, []);
    if (e.vertical === true) {
      i(e.modelValue) && a();
      let w = vue.h("div", { class: "q-stepper__content" }, J(t.default));
      return h === void 0 ? [w] : h.concat(w);
    }
    return [vue.h("div", { class: m.value }, s().map((w) => {
      let b = Lw(w.props);
      return vue.h(Ju, { key: b.name, stepper: e, step: b, goToPanel: u });
    })), h, yt("div", { class: "q-stepper__content q-panel-parent" }, l(), "cont", e.swipeable, () => d.value)];
  }
  return () => (r(t), vue.h("div", { class: c.value }, Ue(t.navigation, y())));
} });
var Hg = M({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => vue.h("div", { class: "q-stepper__nav" }, J(t.default));
} });
var ts = M({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  let n = vue.getCurrentInstance(), { proxy: { $q: r } } = n, i = (a) => {
    o("click", a);
  };
  return () => {
    if (e.props === void 0)
      return vue.h("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: i }, J(t.default));
    let a, l, s = n.vnode.key;
    if (s) {
      if (a = e.props.colsMap[s], a === void 0)
        return;
    } else
      a = e.props.col;
    if (a.sortable === true) {
      let u = a.align === "right" ? "unshift" : "push";
      l = Wo(t.default, []), l[u](vue.h(_e, { class: a.__iconClass, name: r.iconSet.table.arrowUp }));
    } else
      l = J(t.default);
    let d = { class: a.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: a.headerStyle, onClick: (u) => {
      a.sortable === true && e.props.sort(a), i(u);
    } };
    return vue.h("th", d, l);
  };
} });
function os(e, t) {
  return vue.h("div", e, [vue.h("table", { class: "q-table" }, t)]);
}
var jw = { list: Eu, table: $u }, Uw = ["list", "table", "__qtable"], rs = M({ name: "QVirtualScroll", props: { ...el, type: { type: String, default: "list", validator: (e) => Uw.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: ao }, setup(e, { slots: t, attrs: o }) {
  let n, r = vue.ref(null), i = vue.computed(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: a, localResetVirtualScroll: l, padVirtualScroll: s, onVirtualScrollEvt: d } = Ku({ virtualScrollLength: i, getVirtualScrollTarget: m, getVirtualScrollEl: c }), u = vue.computed(() => {
    if (i.value === 0)
      return [];
    let b = (p, g) => ({ index: a.value.from + g, item: p });
    return e.itemsFn === void 0 ? e.items.slice(a.value.from, a.value.to).map(b) : e.itemsFn(a.value.from, a.value.to - a.value.from).map(b);
  }), v = vue.computed(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), f = vue.computed(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  vue.watch(i, () => {
    l();
  }), vue.watch(() => e.scrollTarget, () => {
    h(), y();
  });
  function c() {
    return r.value.$el || r.value;
  }
  function m() {
    return n;
  }
  function y() {
    n = Nt(c(), e.scrollTarget), n.addEventListener("scroll", d, Ge.passive);
  }
  function h() {
    n !== void 0 && (n.removeEventListener("scroll", d, Ge.passive), n = void 0);
  }
  function w() {
    let b = s(e.type === "list" ? "div" : "tbody", u.value.map(t.default));
    return t.before !== void 0 && (b = t.before().concat(b)), Ue(t.after, b);
  }
  return vue.onBeforeMount(() => {
    l();
  }), vue.onMounted(() => {
    y();
  }), vue.onActivated(() => {
    y();
  }), vue.onDeactivated(() => {
    h();
  }), vue.onBeforeUnmount(() => {
    h();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? os({ ref: r, class: "q-table__middle " + v.value }, w()) : vue.h(jw[e.type], { ...o, ref: r, class: [o.class, v.value], ...f.value }, w);
  };
} });
function jg(e, t) {
  return new Date(e) - new Date(t);
}
var Kg = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function Wg(e, t, o, n) {
  let r = vue.computed(() => {
    let { sortBy: l } = t.value;
    return l && o.value.find((s) => s.name === l) || null;
  }), i = vue.computed(() => e.sortMethod !== void 0 ? e.sortMethod : (l, s, d) => {
    let u = o.value.find((c) => c.name === s);
    if (u === void 0 || u.field === void 0)
      return l;
    let v = d === true ? -1 : 1, f = typeof u.field == "function" ? (c) => u.field(c) : (c) => c[u.field];
    return l.sort((c, m) => {
      let y = f(c), h = f(m);
      return u.rawSort !== void 0 ? u.rawSort(y, h, c, m) * v : y == null ? -1 * v : h == null ? 1 * v : u.sort !== void 0 ? u.sort(y, h, c, m) * v : _o(y) === true && _o(h) === true ? (y - h) * v : Ln(y) === true && Ln(h) === true ? jg(y, h) * v : typeof y == "boolean" && typeof h == "boolean" ? (y - h) * v : ([y, h] = [y, h].map((w) => (w + "").toLocaleString().toLowerCase()), y < h ? -1 * v : y === h ? 0 : v);
    });
  });
  function a(l) {
    let s = e.columnSortOrder;
    if (st(l) === true)
      l.sortOrder && (s = l.sortOrder), l = l.name;
    else {
      let v = o.value.find((f) => f.name === l);
      v !== void 0 && v.sortOrder && (s = v.sortOrder);
    }
    let { sortBy: d, descending: u } = t.value;
    d !== l ? (d = l, u = s === "da") : e.binaryStateSort === true ? u = !u : u === true ? s === "ad" ? d = null : u = false : s === "ad" ? u = true : d = null, n({ sortBy: d, descending: u, page: 1 });
  }
  return { columnToSort: r, computedSortMethod: i, sort: a };
}
var Yg = { filter: [String, Object], filterMethod: Function };
function Xg(e, t) {
  let o = vue.computed(() => e.filterMethod !== void 0 ? e.filterMethod : (n, r, i, a) => {
    let l = r ? r.toLowerCase() : "";
    return n.filter((s) => i.some((d) => {
      let u = a(d, s) + "";
      return (u === "undefined" || u === "null" ? "" : u.toLowerCase()).indexOf(l) !== -1;
    }));
  });
  return vue.watch(() => e.filter, () => {
    vue.nextTick(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: o };
}
function Jw(e, t) {
  for (let o in t)
    if (t[o] !== e[o])
      return false;
  return true;
}
function Gg(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var Zg = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function Jg(e, t) {
  let { props: o, emit: n } = e, r = vue.ref(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: o.rowsPerPageOptions.length !== 0 ? o.rowsPerPageOptions[0] : 5 }, o.pagination)), i = vue.computed(() => {
    let u = o["onUpdate:pagination"] !== void 0 ? { ...r.value, ...o.pagination } : r.value;
    return Gg(u);
  }), a = vue.computed(() => i.value.rowsNumber !== void 0);
  function l(u) {
    s({ pagination: u, filter: o.filter });
  }
  function s(u = {}) {
    vue.nextTick(() => {
      n("request", { pagination: u.pagination || i.value, filter: u.filter || o.filter, getCellValue: t });
    });
  }
  function d(u, v) {
    let f = Gg({ ...i.value, ...u });
    if (Jw(i.value, f) === true) {
      a.value === true && v === true && l(f);
      return;
    }
    if (a.value === true) {
      l(f);
      return;
    }
    o.pagination !== void 0 && o["onUpdate:pagination"] !== void 0 ? n("update:pagination", f) : r.value = f;
  }
  return { innerPagination: r, computedPagination: i, isServerSide: a, requestServerInteraction: s, setPagination: d };
}
function ep(e, t, o, n, r, i) {
  let { props: a, emit: l, proxy: { $q: s } } = e, d = vue.computed(() => n.value === true ? o.value.rowsNumber || 0 : i.value), u = vue.computed(() => {
    let { page: g, rowsPerPage: x } = o.value;
    return (g - 1) * x;
  }), v = vue.computed(() => {
    let { page: g, rowsPerPage: x } = o.value;
    return g * x;
  }), f = vue.computed(() => o.value.page === 1), c = vue.computed(() => o.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(d.value / o.value.rowsPerPage))), m = vue.computed(() => v.value === 0 ? true : o.value.page >= c.value), y = vue.computed(() => (a.rowsPerPageOptions.includes(t.value.rowsPerPage) ? a.rowsPerPageOptions : [t.value.rowsPerPage].concat(a.rowsPerPageOptions)).map((x) => ({ label: x === 0 ? s.lang.table.allRows : "" + x, value: x })));
  vue.watch(c, (g, x) => {
    if (g === x)
      return;
    let P = o.value.page;
    g && !P ? r({ page: 1 }) : g < P && r({ page: g });
  });
  function h() {
    r({ page: 1 });
  }
  function w() {
    let { page: g } = o.value;
    g > 1 && r({ page: g - 1 });
  }
  function b() {
    let { page: g, rowsPerPage: x } = o.value;
    v.value > 0 && g * x < d.value && r({ page: g + 1 });
  }
  function p() {
    r({ page: c.value });
  }
  return a["onUpdate:pagination"] !== void 0 && l("update:pagination", { ...o.value }), { firstRowIndex: u, lastRowIndex: v, isFirstPage: f, isLastPage: m, pagesNumber: c, computedRowsPerPageOptions: y, computedRowsNumber: d, firstPage: h, prevPage: w, nextPage: b, lastPage: p };
}
var tp = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, op = ["update:selected", "selection"];
function np(e, t, o, n) {
  let r = vue.computed(() => {
    let m = {};
    return e.selected.map(n.value).forEach((y) => {
      m[y] = true;
    }), m;
  }), i = vue.computed(() => e.selection !== "none"), a = vue.computed(() => e.selection === "single"), l = vue.computed(() => e.selection === "multiple"), s = vue.computed(() => o.value.length !== 0 && o.value.every((m) => r.value[n.value(m)] === true)), d = vue.computed(() => s.value !== true && o.value.some((m) => r.value[n.value(m)] === true)), u = vue.computed(() => e.selected.length);
  function v(m) {
    return r.value[m] === true;
  }
  function f() {
    t("update:selected", []);
  }
  function c(m, y, h, w) {
    t("selection", { rows: y, added: h, keys: m, evt: w });
    let b = a.value === true ? h === true ? y : [] : h === true ? e.selected.concat(y) : e.selected.filter((p) => m.includes(n.value(p)) === false);
    t("update:selected", b);
  }
  return { hasSelectionMode: i, singleSelection: a, multipleSelection: l, allRowsSelected: s, someRowsSelected: d, rowsSelectedNumber: u, isRowSelected: v, clearSelection: f, updateSelection: c };
}
function rp(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var ip = { expanded: Array }, ap = ["update:expanded"];
function lp(e, t) {
  let o = vue.ref(rp(e.expanded));
  vue.watch(() => e.expanded, (a) => {
    o.value = rp(a);
  });
  function n(a) {
    return o.value.includes(a);
  }
  function r(a) {
    e.expanded !== void 0 ? t("update:expanded", a) : o.value = a;
  }
  function i(a, l) {
    let s = o.value.slice(), d = s.indexOf(a);
    l === true ? d === -1 && (s.push(a), r(s)) : d !== -1 && (s.splice(d, 1), r(s));
  }
  return { isRowExpanded: n, setExpanded: r, updateExpanded: i };
}
var up = { visibleColumns: Array };
function sp(e, t, o) {
  let n = vue.computed(() => {
    if (e.columns !== void 0)
      return e.columns;
    let l = e.rows[0];
    return l !== void 0 ? Object.keys(l).map((s) => ({ name: s, label: s.toUpperCase(), field: s, align: _o(l[s]) ? "right" : "left", sortable: true })) : [];
  }), r = vue.computed(() => {
    let { sortBy: l, descending: s } = t.value;
    return (e.visibleColumns !== void 0 ? n.value.filter((u) => u.required === true || e.visibleColumns.includes(u.name) === true) : n.value).map((u) => {
      let v = u.align || "right", f = `text-${v}`;
      return { ...u, align: v, __iconClass: `q-table__sort-icon q-table__sort-icon--${v}`, __thClass: f + (u.headerClasses !== void 0 ? " " + u.headerClasses : "") + (u.sortable === true ? " sortable" : "") + (u.name === l ? ` sorted ${s === true ? "sort-desc" : ""}` : ""), __tdStyle: u.style !== void 0 ? typeof u.style != "function" ? () => u.style : u.style : () => null, __tdClass: u.classes !== void 0 ? typeof u.classes != "function" ? () => f + " " + u.classes : (c) => f + " " + u.classes(c) : () => f };
    });
  }), i = vue.computed(() => {
    let l = {};
    return r.value.forEach((s) => {
      l[s.name] = s;
    }), l;
  }), a = vue.computed(() => e.tableColspan !== void 0 ? e.tableColspan : r.value.length + (o.value === true ? 1 : 0));
  return { colList: n, computedCols: r, computedColsMap: i, computedColspan: a };
}
var as = "q-table__bottom row items-center", dp = {};
Hc.forEach((e) => {
  dp[e] = {};
});
var fp = M({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...dp, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...pe, ...wi, ...up, ...Yg, ...Zg, ...ip, ...tp, ...Kg }, emits: ["request", "virtualScroll", ...Ci, ...ap, ...op], setup(e, { slots: t, emit: o }) {
  let n = vue.getCurrentInstance(), { proxy: { $q: r } } = n, i = he(e, r), { inFullscreen: a, toggleFullscreen: l } = ki(), s = vue.computed(() => typeof e.rowKey == "function" ? e.rowKey : (Z) => Z[e.rowKey]), d = vue.ref(null), u = vue.ref(null), v = vue.computed(() => e.grid !== true && e.virtualScroll === true), f = vue.computed(() => " q-table__card" + (i.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), c = vue.computed(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : f.value) + (i.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (a.value === true ? " fullscreen scroll" : "")), m = vue.computed(() => c.value + (e.loading === true ? " q-table--loading" : ""));
  vue.watch(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + c.value, () => {
    v.value === true && u.value !== null && u.value.reset();
  });
  let { innerPagination: y, computedPagination: h, isServerSide: w, requestServerInteraction: b, setPagination: p } = Jg(n, G), { computedFilterMethod: g } = Xg(e, p), { isRowExpanded: x, setExpanded: P, updateExpanded: A } = lp(e, o), L = vue.computed(() => {
    let Z = e.rows;
    if (w.value === true || Z.length === 0)
      return Z;
    let { sortBy: ve, descending: Ce } = h.value;
    return e.filter && (Z = g.value(Z, e.filter, z.value, G)), H.value !== null && (Z = oe.value(e.rows === Z ? Z.slice() : Z, ve, Ce)), Z;
  }), $ = vue.computed(() => L.value.length), R = vue.computed(() => {
    let Z = L.value;
    if (w.value === true)
      return Z;
    let { rowsPerPage: ve } = h.value;
    return ve !== 0 && (V.value === 0 && e.rows !== Z ? Z.length > te.value && (Z = Z.slice(0, te.value)) : Z = Z.slice(V.value, te.value)), Z;
  }), { hasSelectionMode: B, singleSelection: k, multipleSelection: S, allRowsSelected: C, someRowsSelected: U, rowsSelectedNumber: j, isRowSelected: E, clearSelection: D, updateSelection: Q } = np(e, o, R, s), { colList: ie, computedCols: z, computedColsMap: _, computedColspan: N } = sp(e, h, B), { columnToSort: H, computedSortMethod: oe, sort: q } = Wg(e, h, ie, p), { firstRowIndex: V, lastRowIndex: te, isFirstPage: O, isLastPage: ue, pagesNumber: Se, computedRowsPerPageOptions: K, computedRowsNumber: ae, firstPage: ce, prevPage: be, nextPage: Te, lastPage: le } = ep(n, y, h, w, p, $), Me = vue.computed(() => R.value.length === 0), Le = vue.computed(() => {
    let Z = {};
    return Hc.forEach((ve) => {
      Z[ve] = e[ve];
    }), Z.virtualScrollItemSize === void 0 && (Z.virtualScrollItemSize = e.dense === true ? 28 : 48), Z;
  });
  function Fe() {
    v.value === true && u.value.reset();
  }
  function ne() {
    if (e.grid === true)
      return Ko();
    let Z = e.hideHeader !== true ? we : null;
    if (v.value === true) {
      let Ce = t["top-row"], $e = t["bottom-row"], He = { default: (gt) => Pe(gt.item, t.body, gt.index) };
      if (Ce !== void 0) {
        let gt = vue.h("tbody", Ce({ cols: z.value }));
        He.before = Z === null ? () => gt : () => [Z()].concat(gt);
      } else
        Z !== null && (He.before = Z);
      return $e !== void 0 && (He.after = () => vue.h("tbody", $e({ cols: z.value }))), vue.h(rs, { ref: u, class: e.tableClass, style: e.tableStyle, ...Le.value, scrollTarget: e.virtualScrollTarget, items: R.value, type: "__qtable", tableColspan: N.value, onVirtualScroll: Y }, He);
    }
    let ve = [Ae()];
    return Z !== null && ve.unshift(Z()), os({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, ve);
  }
  function se(Z, ve) {
    if (u.value !== null) {
      u.value.scrollTo(Z, ve);
      return;
    }
    Z = parseInt(Z, 10);
    let Ce = d.value.querySelector(`tbody tr:nth-of-type(${Z + 1})`);
    if (Ce !== null) {
      let $e = d.value.querySelector(".q-table__middle.scroll"), He = Ce.offsetTop - e.virtualScrollStickySizeStart, gt = He < $e.scrollTop ? "decrease" : "increase";
      $e.scrollTop = He, o("virtualScroll", { index: Z, from: 0, to: y.value.rowsPerPage - 1, direction: gt });
    }
  }
  function Y(Z) {
    o("virtualScroll", Z);
  }
  function me() {
    return [vue.h(Nu, { class: "q-table__linear-progress", color: e.color, dark: i.value, indeterminate: true, trackColor: "transparent" })];
  }
  function Pe(Z, ve, Ce) {
    let $e = s.value(Z), He = E($e);
    if (ve !== void 0)
      return ve(Re({ key: $e, row: Z, pageIndex: Ce, __trClass: He ? "selected" : "" }));
    let gt = t["body-cell"], T = z.value.map((X) => {
      let de = t[`body-cell-${X.name}`], fe = de !== void 0 ? de : gt;
      return fe !== void 0 ? fe(tt({ key: $e, row: Z, pageIndex: Ce, col: X })) : vue.h("td", { class: X.__tdClass(Z), style: X.__tdStyle(Z) }, G(X, Z));
    });
    if (B.value === true) {
      let X = t["body-selection"], de = X !== void 0 ? X(at({ key: $e, row: Z, pageIndex: Ce })) : [vue.h(tn, { modelValue: He, color: e.color, dark: i.value, dense: e.dense, "onUpdate:modelValue": (fe, Je) => {
        Q([$e], [Z], fe, Je);
      } })];
      T.unshift(vue.h("td", { class: "q-table--col-auto-width" }, de));
    }
    let I = { key: $e, class: { selected: He } };
    return e.onRowClick !== void 0 && (I.class["cursor-pointer"] = true, I.onClick = (X) => {
      o("rowClick", X, Z, Ce);
    }), e.onRowDblclick !== void 0 && (I.class["cursor-pointer"] = true, I.onDblclick = (X) => {
      o("rowDblclick", X, Z, Ce);
    }), e.onRowContextmenu !== void 0 && (I.class["cursor-pointer"] = true, I.onContextmenu = (X) => {
      o("rowContextmenu", X, Z, Ce);
    }), vue.h("tr", I, T);
  }
  function Ae() {
    let Z = t.body, ve = t["top-row"], Ce = t["bottom-row"], $e = R.value.map((He, gt) => Pe(He, Z, gt));
    return ve !== void 0 && ($e = ve({ cols: z.value }).concat($e)), Ce !== void 0 && ($e = $e.concat(Ce({ cols: z.value }))), vue.h("tbody", $e);
  }
  function Re(Z) {
    return lt(Z), Z.cols = Z.cols.map((ve) => ft({ ...ve }, "value", () => G(ve, Z.row))), Z;
  }
  function tt(Z) {
    return lt(Z), ft(Z, "value", () => G(Z.col, Z.row)), Z;
  }
  function at(Z) {
    return lt(Z), Z;
  }
  function lt(Z) {
    Object.assign(Z, { cols: z.value, colsMap: _.value, sort: q, rowIndex: V.value + Z.pageIndex, color: e.color, dark: i.value, dense: e.dense }), B.value === true && ft(Z, "selected", () => E(Z.key), (ve, Ce) => {
      Q([Z.key], [Z.row], ve, Ce);
    }), ft(Z, "expand", () => x(Z.key), (ve) => {
      A(Z.key, ve);
    });
  }
  function G(Z, ve) {
    let Ce = typeof Z.field == "function" ? Z.field(ve) : ve[Z.field];
    return Z.format !== void 0 ? Z.format(Ce, ve) : Ce;
  }
  let re = vue.computed(() => ({ pagination: h.value, pagesNumber: Se.value, isFirstPage: O.value, isLastPage: ue.value, firstPage: ce, prevPage: be, nextPage: Te, lastPage: le, inFullscreen: a.value, toggleFullscreen: l }));
  function W() {
    let Z = t.top, ve = t["top-left"], Ce = t["top-right"], $e = t["top-selection"], He = B.value === true && $e !== void 0 && j.value > 0, gt = "q-table__top relative-position row items-center";
    if (Z !== void 0)
      return vue.h("div", { class: gt }, [Z(re.value)]);
    let T;
    if (He === true ? T = $e(re.value).slice() : (T = [], ve !== void 0 ? T.push(vue.h("div", { class: "q-table__control" }, [ve(re.value)])) : e.title && T.push(vue.h("div", { class: "q-table__control" }, [vue.h("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Ce !== void 0 && (T.push(vue.h("div", { class: "q-table__separator col" })), T.push(vue.h("div", { class: "q-table__control" }, [Ce(re.value)]))), T.length !== 0)
      return vue.h("div", { class: gt }, T);
  }
  let ee = vue.computed(() => U.value === true ? null : C.value);
  function we() {
    let Z = Ve();
    return e.loading === true && t.loading === void 0 && Z.push(vue.h("tr", { class: "q-table__progress" }, [vue.h("th", { class: "relative-position", colspan: N.value }, me())])), vue.h("thead", Z);
  }
  function Ve() {
    let Z = t.header, ve = t["header-cell"];
    if (Z !== void 0)
      return Z(ye({ header: true })).slice();
    let Ce = z.value.map(($e) => {
      let He = t[`header-cell-${$e.name}`], gt = He !== void 0 ? He : ve, T = ye({ col: $e });
      return gt !== void 0 ? gt(T) : vue.h(ts, { key: $e.name, props: T }, () => $e.label);
    });
    if (k.value === true && e.grid !== true)
      Ce.unshift(vue.h("th", { class: "q-table--col-auto-width" }, " "));
    else if (S.value === true) {
      let $e = t["header-selection"], He = $e !== void 0 ? $e(ye({})) : [vue.h(tn, { color: e.color, modelValue: ee.value, dark: i.value, dense: e.dense, "onUpdate:modelValue": Ye })];
      Ce.unshift(vue.h("th", { class: "q-table--col-auto-width" }, He));
    }
    return [vue.h("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Ce)];
  }
  function ye(Z) {
    return Object.assign(Z, { cols: z.value, sort: q, colsMap: _.value, color: e.color, dark: i.value, dense: e.dense }), S.value === true && ft(Z, "selected", () => ee.value, Ye), Z;
  }
  function Ye(Z) {
    U.value === true && (Z = false), Q(R.value.map(s.value), R.value, Z);
  }
  let ct = vue.computed(() => {
    let Z = [e.iconFirstPage || r.iconSet.table.firstPage, e.iconPrevPage || r.iconSet.table.prevPage, e.iconNextPage || r.iconSet.table.nextPage, e.iconLastPage || r.iconSet.table.lastPage];
    return r.lang.rtl === true ? Z.reverse() : Z;
  });
  function vt() {
    if (e.hideBottom === true)
      return;
    if (Me.value === true) {
      if (e.hideNoData === true)
        return;
      let Ce = e.loading === true ? e.loadingLabel || r.lang.table.loading : e.filter ? e.noResultsLabel || r.lang.table.noResults : e.noDataLabel || r.lang.table.noData, $e = t["no-data"], He = $e !== void 0 ? [$e({ message: Ce, icon: r.iconSet.table.warning, filter: e.filter })] : [vue.h(_e, { class: "q-table__bottom-nodata-icon", name: r.iconSet.table.warning }), Ce];
      return vue.h("div", { class: as + " q-table__bottom--nodata" }, He);
    }
    let Z = t.bottom;
    if (Z !== void 0)
      return vue.h("div", { class: as }, [Z(re.value)]);
    let ve = e.hideSelectedBanner !== true && B.value === true && j.value > 0 ? [vue.h("div", { class: "q-table__control" }, [vue.h("div", [(e.selectedRowsLabel || r.lang.table.selectedRecords)(j.value)])])] : [];
    if (e.hidePagination !== true)
      return vue.h("div", { class: as + " justify-end" }, yo(ve));
    if (ve.length !== 0)
      return vue.h("div", { class: as }, ve);
  }
  function Gt(Z) {
    p({ page: 1, rowsPerPage: Z.value });
  }
  function yo(Z) {
    let ve, { rowsPerPage: Ce } = h.value, $e = e.paginationLabel || r.lang.table.pagination, He = t.pagination, gt = e.rowsPerPageOptions.length > 1;
    if (Z.push(vue.h("div", { class: "q-table__separator col" })), gt === true && Z.push(vue.h("div", { class: "q-table__control" }, [vue.h("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || r.lang.table.recordsPerPage]), vue.h(Yu, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Ce, options: K.value, displayValue: Ce === 0 ? r.lang.table.allRows : Ce, dark: i.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": Gt })])), He !== void 0)
      ve = He(re.value);
    else if (ve = [vue.h("span", Ce !== 0 ? { class: "q-table__bottom-item" } : {}, [Ce ? $e(V.value + 1, Math.min(te.value, ae.value), ae.value) : $e(1, $.value, ae.value)])], Ce !== 0 && Se.value > 1) {
      let T = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (T.size = "sm"), Se.value > 2 && ve.push(vue.h(Be, { key: "pgFirst", ...T, icon: ct.value[0], disable: O.value, onClick: ce })), ve.push(vue.h(Be, { key: "pgPrev", ...T, icon: ct.value[1], disable: O.value, onClick: be }), vue.h(Be, { key: "pgNext", ...T, icon: ct.value[2], disable: ue.value, onClick: Te })), Se.value > 2 && ve.push(vue.h(Be, { key: "pgLast", ...T, icon: ct.value[3], disable: ue.value, onClick: le }));
    }
    return Z.push(vue.h("div", { class: "q-table__control" }, ve)), Z;
  }
  function gn() {
    let Z = e.gridHeader === true ? [vue.h("table", { class: "q-table" }, [we()])] : e.loading === true && t.loading === void 0 ? me() : void 0;
    return vue.h("div", { class: "q-table__middle" }, Z);
  }
  function Ko() {
    let Z = t.item !== void 0 ? t.item : (ve) => {
      let Ce = ve.cols.map((He) => vue.h("div", { class: "q-table__grid-item-row" }, [vue.h("div", { class: "q-table__grid-item-title" }, [He.label]), vue.h("div", { class: "q-table__grid-item-value" }, [He.value])]));
      if (B.value === true) {
        let He = t["body-selection"], gt = He !== void 0 ? He(ve) : [vue.h(tn, { modelValue: ve.selected, color: e.color, dark: i.value, dense: e.dense, "onUpdate:modelValue": (T, I) => {
          Q([ve.key], [ve.row], T, I);
        } })];
        Ce.unshift(vue.h("div", { class: "q-table__grid-item-row" }, gt), vue.h(ho, { dark: i.value }));
      }
      let $e = { class: ["q-table__grid-item-card" + f.value, e.cardClass], style: e.cardStyle };
      return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0) && ($e.class[0] += " cursor-pointer", e.onRowClick !== void 0 && ($e.onClick = (He) => {
        o("RowClick", He, ve.row, ve.pageIndex);
      }), e.onRowDblclick !== void 0 && ($e.onDblclick = (He) => {
        o("RowDblclick", He, ve.row, ve.pageIndex);
      })), vue.h("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (ve.selected === true ? " q-table__grid-item--selected" : "") }, [vue.h("div", $e, Ce)]);
    };
    return vue.h("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, R.value.map((ve, Ce) => Z(Re({ key: s.value(ve), row: ve, pageIndex: Ce }))));
  }
  return Object.assign(n.proxy, { requestServerInteraction: b, setPagination: p, firstPage: ce, prevPage: be, nextPage: Te, lastPage: le, isRowSelected: E, clearSelection: D, isRowExpanded: x, setExpanded: P, sort: q, resetVirtualScroll: Fe, scrollTo: se, getCellValue: G }), rl(n.proxy, { filteredSortedRows: () => L.value, computedRows: () => R.value, computedRowsNumber: () => ae.value }), () => {
    let Z = [W()], ve = { ref: d, class: m.value };
    return e.grid === true ? Z.push(gn()) : Object.assign(ve, { class: [ve.class, e.cardClass], style: e.cardStyle }), Z.push(ne(), vt()), e.loading === true && t.loading !== void 0 && Z.push(t.loading()), vue.h("div", ve, Z);
  };
} });
var mp = M({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  let o = vue.computed(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => vue.h("tr", { class: o.value }, J(t.default));
} });
var gp = M({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  let o = vue.getCurrentInstance(), n = vue.computed(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0)
      return vue.h("td", { class: n.value }, J(t.default));
    let r = o.vnode.key, i = (e.props.colsMap !== void 0 ? e.props.colsMap[r] : null) || e.props.col;
    if (i === void 0)
      return;
    let { row: a } = e.props;
    return vue.h("td", { class: n.value + i.__tdClass(a), style: i.__tdStyle(a) }, J(t.default));
  };
} });
var pp = M({ name: "QRouteTab", props: { ...bn, ...Wl }, emits: Kl, setup(e, { slots: t, emit: o }) {
  let n = Fn({ useDisableForRouterLinkProps: false }), { renderTab: r, $tabs: i } = Yl(e, t, o, { exact: vue.computed(() => e.exact), ...n });
  return vue.watch(() => `${e.name} | ${e.exact} | ${(n.resolvedLink.value || {}).href}`, () => {
    i.verifyRouteModel();
  }), () => r(n.linkTag.value, n.linkAttrs.value);
} });
function vC(e, t) {
  if (e.hour !== null) {
    if (e.minute === null)
      return "minute";
    if (t === true && e.second === null)
      return "second";
  }
  return "hour";
}
function gC() {
  let e = new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
var bp = M({ name: "QTime", props: { ...pe, ...bt, ...Vi, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Vi.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: tu, setup(e, { slots: t, emit: o }) {
  let n = vue.getCurrentInstance(), { $q: r } = n.proxy, i = he(e, r), { tabindex: a, headerClass: l, getLocale: s, getCurrentDate: d } = ou(e, r), u = Jo(e), v = Wt(u), f, c, m = vue.ref(null), y = vue.computed(() => oe()), h = vue.computed(() => s()), w = vue.computed(() => q()), b = Un(e.modelValue, y.value, h.value, e.calendar, w.value), p = vue.ref(vC(b)), g = vue.ref(b), x = vue.ref(b.hour === null || b.hour < 12), P = vue.computed(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (i.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), A = vue.computed(() => {
    let G = g.value;
    return { hour: G.hour === null ? "--" : L.value === true ? Ze(G.hour) : String(x.value === true ? G.hour === 0 ? 12 : G.hour : G.hour > 12 ? G.hour - 12 : G.hour), minute: G.minute === null ? "--" : Ze(G.minute), second: G.second === null ? "--" : Ze(G.second) };
  }), L = vue.computed(() => e.format24h !== null ? e.format24h : r.lang.date.format24h), $ = vue.computed(() => {
    let G = p.value === "hour", re = G === true ? 12 : 60, W = g.value[p.value], we = `rotate(${Math.round(W * (360 / re)) - 180}deg) translateX(-50%)`;
    return G === true && L.value === true && g.value.hour >= 12 && (we += " scale(.7)"), { transform: we };
  }), R = vue.computed(() => g.value.hour !== null), B = vue.computed(() => R.value === true && g.value.minute !== null), k = vue.computed(() => e.hourOptions !== void 0 ? (G) => e.hourOptions.includes(G) : e.options !== void 0 ? (G) => e.options(G, null, null) : null), S = vue.computed(() => e.minuteOptions !== void 0 ? (G) => e.minuteOptions.includes(G) : e.options !== void 0 ? (G) => e.options(g.value.hour, G, null) : null), C = vue.computed(() => e.secondOptions !== void 0 ? (G) => e.secondOptions.includes(G) : e.options !== void 0 ? (G) => e.options(g.value.hour, g.value.minute, G) : null), U = vue.computed(() => {
    if (k.value === null)
      return null;
    let G = _(0, 11, k.value), re = _(12, 11, k.value);
    return { am: G, pm: re, values: G.values.concat(re.values) };
  }), j = vue.computed(() => S.value !== null ? _(0, 59, S.value) : null), E = vue.computed(() => C.value !== null ? _(0, 59, C.value) : null), D = vue.computed(() => {
    switch (p.value) {
      case "hour":
        return U.value;
      case "minute":
        return j.value;
      case "second":
        return E.value;
    }
  }), Q = vue.computed(() => {
    let G, re, W = 0, ee = 1, we = D.value !== null ? D.value.values : void 0;
    p.value === "hour" ? L.value === true ? (G = 0, re = 23) : (G = 0, re = 11, x.value === false && (W = 12)) : (G = 0, re = 55, ee = 5);
    let Ve = [];
    for (let ye = G, Ye = G; ye <= re; ye += ee, Ye++) {
      let ct = ye + W, vt = we !== void 0 && we.includes(ct) === false, Gt = p.value === "hour" && ye === 0 ? L.value === true ? "00" : "12" : ye;
      Ve.push({ val: ct, index: Ye, disable: vt, label: Gt });
    }
    return Ve;
  }), ie = vue.computed(() => [[St, O, void 0, { stop: true, prevent: true, mouse: true }]]);
  vue.watch(() => e.modelValue, (G) => {
    let re = Un(G, y.value, h.value, e.calendar, w.value);
    (re.dateHash !== g.value.dateHash || re.timeHash !== g.value.timeHash) && (g.value = re, re.hour === null ? p.value = "hour" : x.value = re.hour < 12);
  }), vue.watch([y, h], () => {
    vue.nextTick(() => {
      tt();
    });
  });
  function z() {
    let G = { ...d(), ...gC() };
    tt(G), Object.assign(g.value, G), p.value = "hour";
  }
  function _(G, re, W) {
    let ee = Array.apply(null, { length: re + 1 }).map((we, Ve) => {
      let ye = Ve + G;
      return { index: ye, val: W(ye) === true };
    }).filter((we) => we.val === true).map((we) => we.index);
    return { min: ee[0], max: ee[ee.length - 1], values: ee, threshold: re + 1 };
  }
  function N(G, re, W) {
    let ee = Math.abs(G - re);
    return Math.min(ee, W - ee);
  }
  function H(G, { min: re, max: W, values: ee, threshold: we }) {
    if (G === re)
      return re;
    if (G < re || G > W)
      return N(G, re, we) <= N(G, W, we) ? re : W;
    let Ve = ee.findIndex((ct) => G <= ct), ye = ee[Ve - 1], Ye = ee[Ve];
    return G - ye <= Ye - G ? ye : Ye;
  }
  function oe() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function q() {
    if (typeof e.defaultDate != "string") {
      let G = d(true);
      return G.dateHash = Oo(G), G;
    }
    return Un(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function V() {
    return Kt(n) === true || D.value !== null && (D.value.values.length === 0 || p.value === "hour" && L.value !== true && U.value[x.value === true ? "am" : "pm"].values.length === 0);
  }
  function te() {
    let G = m.value, { top: re, left: W, width: ee } = G.getBoundingClientRect(), we = ee / 2;
    return { top: re + we, left: W + we, dist: we * 0.7 };
  }
  function O(G) {
    if (V() !== true) {
      if (G.isFirst === true) {
        f = te(), c = Se(G.evt, f);
        return;
      }
      c = Se(G.evt, f, c), G.isFinal === true && (f = false, c = null, ue());
    }
  }
  function ue() {
    p.value === "hour" ? p.value = "minute" : e.withSeconds && p.value === "minute" && (p.value = "second");
  }
  function Se(G, re, W) {
    let ee = So(G), we = Math.abs(ee.top - re.top), Ve = Math.sqrt(Math.pow(Math.abs(ee.top - re.top), 2) + Math.pow(Math.abs(ee.left - re.left), 2)), ye, Ye = Math.asin(we / Ve) * (180 / Math.PI);
    if (ee.top < re.top ? Ye = re.left < ee.left ? 90 - Ye : 270 + Ye : Ye = re.left < ee.left ? Ye + 90 : 270 - Ye, p.value === "hour") {
      if (ye = Ye / 30, U.value !== null) {
        let ct = L.value !== true ? x.value === true : U.value.am.values.length !== 0 && U.value.pm.values.length !== 0 ? Ve >= re.dist : U.value.am.values.length !== 0;
        ye = H(ye + (ct === true ? 0 : 12), U.value[ct === true ? "am" : "pm"]);
      } else
        ye = Math.round(ye), L.value === true ? Ve < re.dist ? ye < 12 && (ye += 12) : ye === 12 && (ye = 0) : x.value === true && ye === 12 ? ye = 0 : x.value === false && ye !== 12 && (ye += 12);
      L.value === true && (x.value = ye < 12);
    } else
      ye = Math.round(Ye / 6) % 60, p.value === "minute" && j.value !== null ? ye = H(ye, j.value) : p.value === "second" && E.value !== null && (ye = H(ye, E.value));
    return W !== ye && Y[p.value](ye), ye;
  }
  let K = { hour() {
    p.value = "hour";
  }, minute() {
    p.value = "minute";
  }, second() {
    p.value = "second";
  } };
  function ae(G) {
    G.keyCode === 13 && me();
  }
  function ce(G) {
    G.keyCode === 13 && Pe();
  }
  function be(G) {
    V() !== true && (r.platform.is.desktop !== true && Se(G, te()), ue());
  }
  function Te(G) {
    V() !== true && Se(G, te());
  }
  function le(G) {
    if (G.keyCode === 13)
      p.value = "hour";
    else if ([37, 39].includes(G.keyCode)) {
      let re = G.keyCode === 37 ? -1 : 1;
      if (U.value !== null) {
        let W = L.value === true ? U.value.values : U.value[x.value === true ? "am" : "pm"].values;
        if (W.length === 0)
          return;
        if (g.value.hour === null)
          Fe(W[0]);
        else {
          let ee = (W.length + W.indexOf(g.value.hour) + re) % W.length;
          Fe(W[ee]);
        }
      } else {
        let W = L.value === true ? 24 : 12, ee = L.value !== true && x.value === false ? 12 : 0, we = g.value.hour === null ? -re : g.value.hour;
        Fe(ee + (24 + we + re) % W);
      }
    }
  }
  function Me(G) {
    if (G.keyCode === 13)
      p.value = "minute";
    else if ([37, 39].includes(G.keyCode)) {
      let re = G.keyCode === 37 ? -1 : 1;
      if (j.value !== null) {
        let W = j.value.values;
        if (W.length === 0)
          return;
        if (g.value.minute === null)
          ne(W[0]);
        else {
          let ee = (W.length + W.indexOf(g.value.minute) + re) % W.length;
          ne(W[ee]);
        }
      } else {
        let W = g.value.minute === null ? -re : g.value.minute;
        ne((60 + W + re) % 60);
      }
    }
  }
  function Le(G) {
    if (G.keyCode === 13)
      p.value = "second";
    else if ([37, 39].includes(G.keyCode)) {
      let re = G.keyCode === 37 ? -1 : 1;
      if (E.value !== null) {
        let W = E.value.values;
        if (W.length === 0)
          return;
        if (g.value.seconds === null)
          se(W[0]);
        else {
          let ee = (W.length + W.indexOf(g.value.second) + re) % W.length;
          se(W[ee]);
        }
      } else {
        let W = g.value.second === null ? -re : g.value.second;
        se((60 + W + re) % 60);
      }
    }
  }
  function Fe(G) {
    g.value.hour !== G && (g.value.hour = G, Re());
  }
  function ne(G) {
    g.value.minute !== G && (g.value.minute = G, Re());
  }
  function se(G) {
    g.value.second !== G && (g.value.second = G, Re());
  }
  let Y = { hour: Fe, minute: ne, second: se };
  function me() {
    x.value === false && (x.value = true, g.value.hour !== null && (g.value.hour -= 12, Re()));
  }
  function Pe() {
    x.value === true && (x.value = false, g.value.hour !== null && (g.value.hour += 12, Re()));
  }
  function Ae(G) {
    let re = e.modelValue;
    p.value !== G && re !== void 0 && re !== null && re !== "" && typeof re != "string" && (p.value = G);
  }
  function Re() {
    if (k.value !== null && k.value(g.value.hour) !== true) {
      g.value = Un(), Ae("hour");
      return;
    }
    if (S.value !== null && S.value(g.value.minute) !== true) {
      g.value.minute = null, g.value.second = null, Ae("minute");
      return;
    }
    if (e.withSeconds === true && C.value !== null && C.value(g.value.second) !== true) {
      g.value.second = null, Ae("second");
      return;
    }
    g.value.hour === null || g.value.minute === null || e.withSeconds === true && g.value.second === null || tt();
  }
  function tt(G) {
    let re = Object.assign({ ...g.value }, G), W = e.calendar === "persian" ? Ze(re.hour) + ":" + Ze(re.minute) + (e.withSeconds === true ? ":" + Ze(re.second) : "") : Ra(new Date(re.year, re.month === null ? null : re.month - 1, re.day, re.hour, re.minute, re.second, re.millisecond), y.value, h.value, re.year, re.timezoneOffset);
    re.changed = W !== e.modelValue, o("update:modelValue", W, re);
  }
  function at() {
    let G = [vue.h("div", { class: "q-time__link " + (p.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: K.hour, onKeyup: le }, A.value.hour), vue.h("div", ":"), vue.h("div", R.value === true ? { class: "q-time__link " + (p.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onKeyup: Me, onClick: K.minute } : { class: "q-time__link" }, A.value.minute)];
    e.withSeconds === true && G.push(vue.h("div", ":"), vue.h("div", B.value === true ? { class: "q-time__link " + (p.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onKeyup: Le, onClick: K.second } : { class: "q-time__link" }, A.value.second));
    let re = [vue.h("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, G)];
    return L.value === false && re.push(vue.h("div", { class: "q-time__header-ampm column items-between no-wrap" }, [vue.h("div", { class: "q-time__link " + (x.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: me, onKeyup: ae }, "AM"), vue.h("div", { class: "q-time__link " + (x.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: Pe, onKeyup: ce }, "PM")])), vue.h("div", { class: "q-time__header flex flex-center no-wrap " + l.value }, re);
  }
  function lt() {
    let G = g.value[p.value];
    return vue.h("div", { class: "q-time__content col relative-position" }, [vue.h(vue.Transition, { name: "q-transition--scale" }, () => vue.h("div", { key: "clock" + p.value, class: "q-time__container-parent absolute-full" }, [vue.h("div", { ref: m, class: "q-time__container-child fit overflow-hidden" }, [vue.withDirectives(vue.h("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: be, onMousedown: Te }, [vue.h("div", { class: "q-time__clock-circle fit" }, [vue.h("div", { class: "q-time__clock-pointer" + (g.value[p.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: $.value }), Q.value.map((re) => vue.h("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${re.index}` + (re.val === G ? " q-time__clock-position--active " + l.value : re.disable === true ? " q-time__clock-position--disable" : "") }, [vue.h("span", re.label)]))])]), ie.value)])])), e.nowBtn === true ? vue.h(Be, { class: "q-time__now-button absolute", icon: r.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: a.value, onClick: z }) : null]);
  }
  return n.proxy.setNow = z, () => {
    let G = [lt()], re = J(t.default);
    return re !== void 0 && G.push(vue.h("div", { class: "q-time__actions" }, re)), e.name !== void 0 && e.disable !== true && v(G, "push"), vue.h("div", { class: P.value, tabindex: -1 }, [at(), vue.h("div", { class: "q-time__main col overflow-auto" }, G)]);
  };
} });
var yp = M({ name: "QTimeline", props: { ...pe, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  let o = vue.getCurrentInstance(), n = he(e, o.proxy.$q);
  vue.provide(ll, e);
  let r = vue.computed(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (n.value === true ? " q-timeline--dark" : ""));
  return () => vue.h("ul", { class: r.value }, J(t.default));
} });
var xp = M({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  let o = vue.inject(ll, We);
  if (o === We)
    return console.error("QTimelineEntry needs to be child of QTimeline"), We;
  let n = vue.computed(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), r = vue.computed(() => `q-timeline__dot text-${e.color || o.color}`), i = vue.computed(() => o.layout === "comfortable" && o.side === "left");
  return () => {
    let a = Wo(t.default, []);
    if (e.body !== void 0 && a.unshift(e.body), e.heading === true) {
      let d = [vue.h("div"), vue.h("div"), vue.h(e.tag, { class: "q-timeline__heading-title" }, a)];
      return vue.h("div", { class: "q-timeline__heading" }, i.value === true ? d.reverse() : d);
    }
    let l;
    e.icon !== void 0 ? l = [vue.h(_e, { class: "row items-center justify-center", name: e.icon })] : e.avatar !== void 0 && (l = [vue.h("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    let s = [vue.h("div", { class: "q-timeline__subtitle" }, [vue.h("span", {}, J(t.subtitle, [e.subtitle]))]), vue.h("div", { class: r.value }, l), vue.h("div", { class: "q-timeline__content" }, [vue.h("h6", { class: "q-timeline__title" }, J(t.title, [e.title]))].concat(a))];
    return vue.h("li", { class: n.value }, i.value === true ? s.reverse() : s);
  };
} });
var Sp = M({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  let o = vue.computed(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => vue.h("div", { class: o.value, role: "toolbar" }, J(t.default));
} });
var _p = M({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  let o = vue.computed(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => vue.h("div", { class: o.value }, J(t.default));
} });
var RC = ["none", "strict", "leaf", "leaf-filtered"], Cp = M({ name: "QTree", props: { ...pe, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => RC.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: o }) {
  let { proxy: n } = vue.getCurrentInstance(), { $q: r } = n, i = he(e, r), a = vue.ref({}), l = vue.ref(e.ticked || []), s = vue.ref(e.expanded || []), d = {};
  vue.onBeforeUpdate(() => {
    d = {};
  });
  let u = vue.computed(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (i.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), v = vue.computed(() => e.selected !== void 0), f = vue.computed(() => e.icon || r.iconSet.tree.icon), c = vue.computed(() => e.controlColor || e.color), m = vue.computed(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), y = vue.computed(() => {
    let _ = e.selectedColor || e.color;
    return _ ? ` text-${_}` : "";
  }), h = vue.computed(() => e.filterMethod !== void 0 ? e.filterMethod : (_, N) => {
    let H = N.toLowerCase();
    return _[e.labelKey] && _[e.labelKey].toLowerCase().indexOf(H) !== -1;
  }), w = vue.computed(() => {
    let _ = {}, N = (H, oe) => {
      let q = H.tickStrategy || (oe ? oe.tickStrategy : e.tickStrategy), V = H[e.nodeKey], te = H[e.childrenKey] && Array.isArray(H[e.childrenKey]) && H[e.childrenKey].length !== 0, O = H.disabled !== true && v.value === true && H.selectable !== false, ue = H.disabled !== true && H.expandable !== false, Se = q !== "none", K = q === "strict", ae = q === "leaf-filtered", ce = q === "leaf" || q === "leaf-filtered", be = H.disabled !== true && H.tickable !== false;
      ce === true && be === true && oe && oe.tickable !== true && (be = false);
      let Te = H.lazy;
      Te === true && a.value[V] !== void 0 && Array.isArray(H[e.childrenKey]) === true && (Te = a.value[V]);
      let le = { key: V, parent: oe, isParent: te, lazy: Te, disabled: H.disabled, link: H.disabled !== true && (O === true || ue === true && (te === true || Te === true)), children: [], matchesFilter: e.filter ? h.value(H, e.filter) : true, selected: V === e.selected && O === true, selectable: O, expanded: te === true ? s.value.includes(V) : false, expandable: ue, noTick: H.noTick === true || K !== true && Te && Te !== "loaded", tickable: be, tickStrategy: q, hasTicking: Se, strictTicking: K, leafFilteredTicking: ae, leafTicking: ce, ticked: K === true ? l.value.includes(V) : te === true ? false : l.value.includes(V) };
      if (_[V] = le, te === true && (le.children = H[e.childrenKey].map((Me) => N(Me, le)), e.filter && (le.matchesFilter !== true ? le.matchesFilter = le.children.some((Me) => Me.matchesFilter) : le.noTick !== true && le.disabled !== true && le.tickable === true && ae === true && le.children.every((Me) => Me.matchesFilter !== true || Me.noTick === true || Me.tickable !== true) === true && (le.tickable = false)), le.matchesFilter === true && (le.noTick !== true && K !== true && le.children.every((Me) => Me.noTick) === true && (le.noTick = true), ce))) {
        if (le.ticked = false, le.indeterminate = le.children.some((Me) => Me.indeterminate === true), le.tickable = le.tickable === true && le.children.some((Me) => Me.tickable), le.indeterminate !== true) {
          let Me = le.children.reduce((Le, Fe) => Fe.ticked === true ? Le + 1 : Le, 0);
          Me === le.children.length ? le.ticked = true : Me > 0 && (le.indeterminate = true);
        }
        le.indeterminate === true && (le.indeterminateNextState = le.children.every((Me) => Me.tickable !== true || Me.ticked !== true));
      }
      return le;
    };
    return e.nodes.forEach((H) => N(H, null)), _;
  });
  vue.watch(() => e.ticked, (_) => {
    l.value = _;
  }), vue.watch(() => e.expanded, (_) => {
    s.value = _;
  });
  function b(_) {
    let N = [].reduce, H = (oe, q) => {
      if (oe || !q)
        return oe;
      if (Array.isArray(q) === true)
        return N.call(Object(q), H, oe);
      if (q[e.nodeKey] === _)
        return q;
      if (q[e.childrenKey])
        return H(null, q[e.childrenKey]);
    };
    return H(null, e.nodes);
  }
  function p() {
    return l.value.map((_) => b(_));
  }
  function g() {
    return s.value.map((_) => b(_));
  }
  function x(_) {
    return _ && w.value[_] ? w.value[_].expanded : false;
  }
  function P() {
    e.expanded !== void 0 ? o("update:expanded", []) : s.value = [];
  }
  function A() {
    let _ = [], N = (H) => {
      H[e.childrenKey] && H[e.childrenKey].length !== 0 && H.expandable !== false && H.disabled !== true && (_.push(H[e.nodeKey]), H[e.childrenKey].forEach(N));
    };
    e.nodes.forEach(N), e.expanded !== void 0 ? o("update:expanded", _) : s.value = _;
  }
  function L(_, N, H = b(_), oe = w.value[_]) {
    if (oe.lazy && oe.lazy !== "loaded") {
      if (oe.lazy === "loading")
        return;
      a.value[_] = "loading", Array.isArray(H[e.childrenKey]) !== true && (H[e.childrenKey] = []), o("lazyLoad", { node: H, key: _, done: (q) => {
        a.value[_] = "loaded", H[e.childrenKey] = Array.isArray(q) === true ? q : [], vue.nextTick(() => {
          let V = w.value[_];
          V && V.isParent === true && $(_, true);
        });
      }, fail: () => {
        delete a.value[_], H[e.childrenKey].length === 0 && delete H[e.childrenKey];
      } });
    } else
      oe.isParent === true && oe.expandable === true && $(_, N);
  }
  function $(_, N) {
    let H = s.value, oe = e.expanded !== void 0;
    if (oe === true && (H = H.slice()), N) {
      if (e.accordion && w.value[_]) {
        let q = [];
        w.value[_].parent ? w.value[_].parent.children.forEach((V) => {
          V.key !== _ && V.expandable === true && q.push(V.key);
        }) : e.nodes.forEach((V) => {
          let te = V[e.nodeKey];
          te !== _ && q.push(te);
        }), q.length !== 0 && (H = H.filter((V) => q.includes(V) === false));
      }
      H = H.concat([_]).filter((q, V, te) => te.indexOf(q) === V);
    } else
      H = H.filter((q) => q !== _);
    oe === true ? o("update:expanded", H) : s.value = H;
  }
  function R(_) {
    return _ && w.value[_] ? w.value[_].ticked : false;
  }
  function B(_, N) {
    let H = l.value, oe = e.ticked !== void 0;
    oe === true && (H = H.slice()), N ? H = H.concat(_).filter((q, V, te) => te.indexOf(q) === V) : H = H.filter((q) => _.includes(q) === false), oe === true && o("update:ticked", H);
  }
  function k(_, N, H) {
    let oe = { tree: n, node: _, key: H, color: e.color, dark: i.value };
    return ft(oe, "expanded", () => N.expanded, (q) => {
      q !== N.expanded && L(H, q);
    }), ft(oe, "ticked", () => N.ticked, (q) => {
      q !== N.ticked && B([H], q);
    }), oe;
  }
  function S(_) {
    return (e.filter ? _.filter((N) => w.value[N[e.nodeKey]].matchesFilter) : _).map((N) => E(N));
  }
  function C(_) {
    if (_.icon !== void 0)
      return vue.h(_e, { class: "q-tree__icon q-mr-sm", name: _.icon, color: _.iconColor });
    let N = _.img || _.avatar;
    if (N)
      return vue.h("img", { class: `q-tree__${_.img ? "img" : "avatar"} q-mr-sm`, src: N });
  }
  function U() {
    o("afterShow");
  }
  function j() {
    o("afterHide");
  }
  function E(_) {
    let N = _[e.nodeKey], H = w.value[N], oe = _.header && t[`header-${_.header}`] || t["default-header"], q = H.isParent === true ? S(_[e.childrenKey]) : [], V = q.length !== 0 || H.lazy && H.lazy !== "loaded", te = _.body && t[`body-${_.body}`] || t["default-body"], O = oe !== void 0 || te !== void 0 ? k(_, H, N) : null;
    return te !== void 0 && (te = vue.h("div", { class: "q-tree__node-body relative-position" }, [vue.h("div", { class: m.value }, [te(O)])])), vue.h("div", { key: N, class: `q-tree__node relative-position q-tree__node--${V === true ? "parent" : "child"}` }, [vue.h("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (H.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (H.selected === true ? " q-tree__node--selected" : "") + (H.disabled === true ? " q-tree__node--disabled" : ""), tabindex: H.link === true ? 0 : -1, ariaExpanded: q.length > 0 ? H.expanded : null, role: "treeitem", onClick: (ue) => {
      Q(_, H, ue);
    }, onKeypress(ue) {
      go(ue) !== true && (ue.keyCode === 13 ? Q(_, H, ue, true) : ue.keyCode === 32 && ie(_, H, ue, true));
    } }, [vue.h("div", { class: "q-focus-helper", tabindex: -1, ref: (ue) => {
      d[H.key] = ue;
    } }), H.lazy === "loading" ? vue.h(xt, { class: "q-tree__spinner", color: c.value }) : V === true ? vue.h(_e, { class: "q-tree__arrow" + (H.expanded === true ? " q-tree__arrow--rotate" : ""), name: f.value, onClick(ue) {
      ie(_, H, ue);
    } }) : null, H.hasTicking === true && H.noTick !== true ? vue.h(tn, { class: "q-tree__tickbox", modelValue: H.indeterminate === true ? null : H.ticked, color: c.value, dark: i.value, dense: true, keepColor: true, disable: H.tickable !== true, onKeydown: qe, "onUpdate:modelValue": (ue) => {
      z(H, ue);
    } }) : null, vue.h("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (H.selected === true ? y.value : m.value) }, [oe ? oe(O) : [C(_), vue.h("div", _[e.labelKey])]])]), V === true ? e.noTransition === true ? H.expanded === true ? vue.h("div", { class: "q-tree__node-collapsible" + m.value, key: `${N}__q` }, [te, vue.h("div", { class: "q-tree__children" + (H.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, q)]) : null : vue.h(Yn, { duration: e.duration, onShow: U, onHide: j }, () => vue.withDirectives(vue.h("div", { class: "q-tree__node-collapsible" + m.value, key: `${N}__q` }, [te, vue.h("div", { class: "q-tree__children" + (H.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, q)]), [[vue.vShow, H.expanded]])) : te]);
  }
  function D(_) {
    let N = d[_];
    N && N.focus();
  }
  function Q(_, N, H, oe) {
    oe !== true && N.selectable !== false && D(N.key), v.value && N.selectable ? e.noSelectionUnset === false ? o("update:selected", N.key !== e.selected ? N.key : null) : N.key !== e.selected && o("update:selected", N.key === void 0 ? null : N.key) : ie(_, N, H, oe), typeof _.handler == "function" && _.handler(_);
  }
  function ie(_, N, H, oe) {
    H !== void 0 && qe(H), oe !== true && N.selectable !== false && D(N.key), L(N.key, !N.expanded, _, N);
  }
  function z(_, N) {
    if (_.indeterminate === true && (N = _.indeterminateNextState), _.strictTicking)
      B([_.key], N);
    else if (_.leafTicking) {
      let H = [], oe = (q) => {
        q.isParent ? (N !== true && q.noTick !== true && q.tickable === true && H.push(q.key), q.leafTicking === true && q.children.forEach(oe)) : q.noTick !== true && q.tickable === true && (q.leafFilteredTicking !== true || q.matchesFilter === true) && H.push(q.key);
      };
      oe(_), B(H, N);
    }
  }
  return e.defaultExpandAll === true && A(), Object.assign(n, { getNodeByKey: b, getTickedNodes: p, getExpandedNodes: g, isExpanded: x, collapseAll: P, expandAll: A, setExpanded: L, isTicked: R, setTicked: B }), () => {
    let _ = S(e.nodes);
    return vue.h("div", { class: u.value, role: "tree" }, _.length === 0 ? e.filter ? e.noResultsLabel || r.lang.tree.noResults : e.noNodesLabel || r.lang.tree.noNodes : _);
  };
} });
function kp(e) {
  return (e * 100).toFixed(2) + "%";
}
var qp = { ...pe, ...bu, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Xc = [...yu, "start", "finish", "added", "removed"];
function Tp(e, t) {
  let o = vue.getCurrentInstance(), { props: n, slots: r, emit: i, proxy: a } = o, { $q: l } = a, s = he(n, l);
  function d(O, ue, Se) {
    if (O.__status = ue, ue === "idle") {
      O.__uploaded = 0, O.__progress = 0, O.__sizeLabel = Nr(O.size), O.__progressLabel = "0.00%";
      return;
    }
    if (ue === "failed") {
      a.$forceUpdate();
      return;
    }
    O.__uploaded = ue === "uploaded" ? O.size : Se, O.__progress = ue === "uploaded" ? 1 : Math.min(0.9999, O.__uploaded / O.size), O.__progressLabel = kp(O.__progress), a.$forceUpdate();
  }
  let u = vue.computed(() => n.disable !== true && n.readonly !== true), v = vue.ref(false), f = vue.ref(null), c = vue.ref(null), m = { files: vue.ref([]), queuedFiles: vue.ref([]), uploadedFiles: vue.ref([]), uploadedSize: vue.ref(0), updateFileStatus: d, isAlive: () => Kt(o) === false }, { pickFiles: y, addFiles: h, onDragover: w, onDragleave: b, processFiles: p, getDndNode: g, maxFilesNumber: x, maxTotalSizeNumber: P } = xu({ editable: u, dnd: v, getFileInput: z, addFilesToQueue: _ });
  Object.assign(m, e({ props: n, slots: r, emit: i, helpers: m, exposeApi: (O) => {
    Object.assign(m, O);
  } })), m.isBusy === void 0 && (m.isBusy = vue.ref(false));
  let A = vue.ref(0), L = vue.computed(() => A.value === 0 ? 0 : m.uploadedSize.value / A.value), $ = vue.computed(() => kp(L.value)), R = vue.computed(() => Nr(A.value)), B = vue.computed(() => u.value === true && m.isUploading.value !== true && (n.multiple === true || m.queuedFiles.value.length === 0) && (n.maxFiles === void 0 || m.files.value.length < x.value) && (n.maxTotalSize === void 0 || A.value < P.value)), k = vue.computed(() => u.value === true && m.isBusy.value !== true && m.isUploading.value !== true && m.queuedFiles.value.length !== 0);
  vue.provide(fl, oe);
  let S = vue.computed(() => "q-uploader column no-wrap" + (s.value === true ? " q-uploader--dark q-dark" : "") + (n.bordered === true ? " q-uploader--bordered" : "") + (n.square === true ? " q-uploader--square no-border-radius" : "") + (n.flat === true ? " q-uploader--flat no-shadow" : "") + (n.disable === true ? " disabled q-uploader--disable" : "") + (v.value === true ? " q-uploader--dnd" : "")), C = vue.computed(() => "q-uploader__header" + (n.color !== void 0 ? ` bg-${n.color}` : "") + (n.textColor !== void 0 ? ` text-${n.textColor}` : ""));
  vue.watch(m.isUploading, (O, ue) => {
    ue === false && O === true ? i("start") : ue === true && O === false && i("finish");
  });
  function U() {
    n.disable === false && (m.abort(), m.uploadedSize.value = 0, A.value = 0, ie(), m.files.value = [], m.queuedFiles.value = [], m.uploadedFiles.value = []);
  }
  function j() {
    n.disable === false && D(["uploaded"], () => {
      m.uploadedFiles.value = [];
    });
  }
  function E() {
    D(["idle", "failed"], ({ size: O }) => {
      A.value -= O, m.queuedFiles.value = [];
    });
  }
  function D(O, ue) {
    if (n.disable === true)
      return;
    let Se = { files: [], size: 0 }, K = m.files.value.filter((ae) => O.indexOf(ae.__status) === -1 ? true : (Se.size += ae.size, Se.files.push(ae), ae.__img !== void 0 && window.URL.revokeObjectURL(ae.__img.src), false));
    Se.files.length !== 0 && (m.files.value = K, ue(Se), i("removed", Se.files));
  }
  function Q(O) {
    n.disable || (O.__status === "uploaded" ? m.uploadedFiles.value = m.uploadedFiles.value.filter((ue) => ue.__key !== O.__key) : O.__status === "uploading" ? O.__abort() : A.value -= O.size, m.files.value = m.files.value.filter((ue) => ue.__key !== O.__key ? true : (ue.__img !== void 0 && window.URL.revokeObjectURL(ue.__img.src), false)), m.queuedFiles.value = m.queuedFiles.value.filter((ue) => ue.__key !== O.__key), i("removed", [O]));
  }
  function ie() {
    m.files.value.forEach((O) => {
      O.__img !== void 0 && window.URL.revokeObjectURL(O.__img.src);
    });
  }
  function z() {
    return c.value || f.value.getElementsByClassName("q-uploader__input")[0];
  }
  function _(O, ue) {
    let Se = p(O, ue, m.files.value, true), K = z();
    K != null && (K.value = ""), Se !== void 0 && (Se.forEach((ae) => {
      if (m.updateFileStatus(ae, "idle"), A.value += ae.size, n.noThumbnails !== true && ae.type.toUpperCase().startsWith("IMAGE")) {
        let ce = new Image();
        ce.src = window.URL.createObjectURL(ae), ae.__img = ce;
      }
    }), m.files.value = m.files.value.concat(Se), m.queuedFiles.value = m.queuedFiles.value.concat(Se), i("added", Se), n.autoUpload === true && m.upload());
  }
  function N() {
    k.value === true && m.upload();
  }
  function H(O, ue, Se) {
    if (O === true) {
      let K = { type: "a", key: ue, icon: l.iconSet.uploader[ue], flat: true, dense: true }, ae;
      return ue === "add" ? (K.onClick = y, ae = oe) : K.onClick = Se, vue.h(Be, K, ae);
    }
  }
  function oe() {
    return vue.h("input", { ref: c, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: n.accept, multiple: n.multiple === true ? "multiple" : void 0, capture: n.capture, onMousedown: nt, onClick: y, onChange: _ });
  }
  function q() {
    return r.header !== void 0 ? r.header(te) : [vue.h("div", { class: "q-uploader__header-content column" }, [vue.h("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [H(m.queuedFiles.value.length !== 0, "removeQueue", E), H(m.uploadedFiles.value.length !== 0, "removeUploaded", j), m.isUploading.value === true ? vue.h(xt, { class: "q-uploader__spinner" }) : null, vue.h("div", { class: "col column justify-center" }, [n.label !== void 0 ? vue.h("div", { class: "q-uploader__title" }, [n.label]) : null, vue.h("div", { class: "q-uploader__subtitle" }, [R.value + " / " + $.value])]), H(B.value, "add"), H(n.hideUploadBtn === false && k.value === true, "upload", m.upload), H(m.isUploading.value, "clear", m.abort)])])];
  }
  function V() {
    return r.list !== void 0 ? r.list(te) : m.files.value.map((O) => vue.h("div", { key: O.__key, class: "q-uploader__file relative-position" + (n.noThumbnails !== true && O.__img !== void 0 ? " q-uploader__file--img" : "") + (O.__status === "failed" ? " q-uploader__file--failed" : O.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: n.noThumbnails !== true && O.__img !== void 0 ? { backgroundImage: 'url("' + O.__img.src + '")' } : null }, [vue.h("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [O.__status === "failed" ? vue.h(_e, { class: "q-uploader__file-status", name: l.iconSet.type.negative, color: "negative" }) : null, vue.h("div", { class: "q-uploader__file-header-content col" }, [vue.h("div", { class: "q-uploader__title" }, [O.name]), vue.h("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [O.__sizeLabel + " / " + O.__progressLabel])]), O.__status === "uploading" ? vue.h($i, { value: O.__progress, min: 0, max: 1, indeterminate: O.__progress === 0 }) : vue.h(Be, { round: true, dense: true, flat: true, icon: l.iconSet.uploader[O.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      Q(O);
    } })])]));
  }
  vue.onBeforeUnmount(() => {
    m.isUploading.value === true && m.abort(), m.files.value.length !== 0 && ie();
  });
  let te = {};
  for (let O in m)
    vue.isRef(m[O]) === true ? ft(te, O, () => m[O].value) : te[O] = m[O];
  return Object.assign(te, { upload: N, reset: U, removeUploadedFiles: j, removeQueuedFiles: E, removeFile: Q, pickFiles: y, addFiles: h }), rl(te, { canAddFiles: () => B.value, canUpload: () => k.value, uploadSizeLabel: () => R.value, uploadProgressLabel: () => $.value }), t({ ...m, upload: N, reset: U, removeUploadedFiles: j, removeQueuedFiles: E, removeFile: Q, pickFiles: y, addFiles: h, canAddFiles: B, canUpload: k, uploadSizeLabel: R, uploadProgressLabel: $ }), () => {
    let O = [vue.h("div", { class: C.value }, q()), vue.h("div", { class: "q-uploader__list scroll" }, V()), g("uploader")];
    m.isBusy.value === true && O.push(vue.h("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [vue.h(xt)]));
    let ue = { ref: f, class: S.value };
    return B.value === true && Object.assign(ue, { onDragover: w, onDragleave: b }), vue.h("div", ue, O);
  };
}
var FC = () => true;
function us(e) {
  let t = {};
  return e.forEach((o) => {
    t[o] = FC;
  }), t;
}
var DC = us(Xc), Gc = ({ name: e, props: t, emits: o, injectPlugin: n }) => M({ name: e, props: { ...qp, ...t }, emits: st(o) === true ? { ...DC, ...o } : [...Xc, ...o], setup(r, { expose: i }) {
  return Tp(n, i);
} });
function An(e) {
  return typeof e == "function" ? e : () => e;
}
var VC = "QUploader", zC = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, OC = ["factoryFailed", "uploaded", "failed", "uploading"];
function IC({ props: e, emit: t, helpers: o }) {
  let n = vue.ref([]), r = vue.ref([]), i = vue.ref(0), a = vue.computed(() => ({ url: An(e.url), method: An(e.method), headers: An(e.headers), formFields: An(e.formFields), fieldName: An(e.fieldName), withCredentials: An(e.withCredentials), sendRaw: An(e.sendRaw), batch: An(e.batch) })), l = vue.computed(() => i.value > 0), s = vue.computed(() => r.value.length !== 0), d;
  function u() {
    n.value.forEach((m) => {
      m.abort();
    }), r.value.length !== 0 && (d = true);
  }
  function v() {
    let m = o.queuedFiles.value.slice(0);
    o.queuedFiles.value = [], a.value.batch(m) ? f(m) : m.forEach((y) => {
      f([y]);
    });
  }
  function f(m) {
    if (i.value++, typeof e.factory != "function") {
      c(m, {});
      return;
    }
    let y = e.factory(m);
    if (!y)
      t("factoryFailed", new Error("QUploader: factory() does not return properly"), m), i.value--;
    else if (typeof y.catch == "function" && typeof y.then == "function") {
      r.value.push(y);
      let h = (w) => {
        o.isAlive() === true && (r.value = r.value.filter((b) => b !== y), r.value.length === 0 && (d = false), o.queuedFiles.value = o.queuedFiles.value.concat(m), m.forEach((b) => {
          o.updateFileStatus(b, "failed");
        }), t("factoryFailed", w, m), i.value--);
      };
      y.then((w) => {
        d === true ? h(new Error("Aborted")) : o.isAlive() === true && (r.value = r.value.filter((b) => b !== y), c(m, w));
      }).catch(h);
    } else
      c(m, y || {});
  }
  function c(m, y) {
    let h = new FormData(), w = new XMLHttpRequest(), b = (k, S) => y[k] !== void 0 ? An(y[k])(S) : a.value[k](S), p = b("url", m);
    if (!p) {
      console.error("q-uploader: invalid or no URL specified"), i.value--;
      return;
    }
    let g = b("formFields", m);
    g !== void 0 && g.forEach((k) => {
      h.append(k.name, k.value);
    });
    let x = 0, P = 0, A = 0, L = 0, $;
    w.upload.addEventListener("progress", (k) => {
      if ($ === true)
        return;
      let S = Math.min(L, k.loaded);
      o.uploadedSize.value += S - A, A = S;
      let C = A - P;
      for (let U = x; C > 0 && U < m.length; U++) {
        let j = m[U];
        if (C > j.size)
          C -= j.size, x++, P += j.size, o.updateFileStatus(j, "uploading", j.size);
        else {
          o.updateFileStatus(j, "uploading", C);
          return;
        }
      }
    }, false), w.onreadystatechange = () => {
      w.readyState < 4 || (w.status && w.status < 400 ? (o.uploadedFiles.value = o.uploadedFiles.value.concat(m), m.forEach((k) => {
        o.updateFileStatus(k, "uploaded");
      }), t("uploaded", { files: m, xhr: w })) : ($ = true, o.uploadedSize.value -= A, o.queuedFiles.value = o.queuedFiles.value.concat(m), m.forEach((k) => {
        o.updateFileStatus(k, "failed");
      }), t("failed", { files: m, xhr: w })), i.value--, n.value = n.value.filter((k) => k !== w));
    }, w.open(b("method", m), p), b("withCredentials", m) === true && (w.withCredentials = true);
    let R = b("headers", m);
    R !== void 0 && R.forEach((k) => {
      w.setRequestHeader(k.name, k.value);
    });
    let B = b("sendRaw", m);
    m.forEach((k) => {
      o.updateFileStatus(k, "uploading", 0), B !== true && h.append(b("fieldName", k), k, k.name), k.xhr = w, k.__abort = () => {
        w.abort();
      }, L += k.size;
    }), t("uploading", { files: m, xhr: w }), n.value.push(w), B === true ? w.send(new Blob(m)) : w.send(h);
  }
  return { isUploading: l, isBusy: s, abort: u, upload: v };
}
var Mp = { name: VC, props: zC, emits: OC, injectPlugin: IC };
var Pp = Gc(Mp);
var Rp = M({ name: "QUploaderAddTrigger", setup() {
  let e = vue.inject(fl, We);
  return e === We && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
var Ap = M({ name: "QVideo", props: { ...Ki, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  let t = Wi(e), o = vue.computed(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => vue.h("div", { class: o.value, style: t.value }, [vue.h("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
var od = {};
md(od, { ClosePopup: () => $p, Intersection: () => Pu, Morph: () => Ip, Mutation: () => Hp, Ripple: () => Xo, Scroll: () => Qp, ScrollFire: () => Np, TouchHold: () => jp, TouchPan: () => St, TouchRepeat: () => Up, TouchSwipe: () => Fl });
var $p = wt({ name: "close-popup", getSSRProps: Mt });
var Ip = wt({ name: "morph", getSSRProps: (e) => ({ class: (e.arg ? e.arg.split(":")[0] : false) === e.value ? "" : "q-morph--invisible" }) });
var Hp = wt({ name: "mutation", getSSRProps: Mt });
var Np = wt({ name: "scroll-fire", getSSRProps: Mt });
var Qp = wt({ name: "scroll", getSSRProps: Mt });
var jp = wt({ name: "touch-hold", getSSRProps: Mt });
var XC = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] };
new RegExp(`^([\\d+]+|${Object.keys(XC).join("|")})$`, "i");
var Up = wt({ name: "touch-repeat", getSSRProps: Mt });
function ZC(e) {
  Object.assign(Wp, { request: e, exit: e, toggle: e });
}
var Wp = Ut({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
ZC(() => Promise.resolve());
Ut({ appVisible: true }, { install({ $q: e }) {
  this.appVisible = e.appVisible = true;
} });
M({ name: "BottomSheetComponent", props: { ...pe, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  let { proxy: o } = vue.getCurrentInstance(), n = he(e, o.$q), r = vue.ref(null);
  function i() {
    r.value.show();
  }
  function a() {
    r.value.hide();
  }
  function l(c) {
    t("ok", c), a();
  }
  function s() {
    t("hide");
  }
  function d() {
    return e.actions.map((c) => {
      let m = c.avatar || c.img;
      return c.label === void 0 ? vue.h(ho, { class: "col-all", dark: n.value }) : vue.h("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", c.class], style: c.style, tabindex: 0, role: "listitem", onClick() {
        l(c);
      }, onKeyup(y) {
        y.keyCode === 13 && l(c);
      } }, [vue.h("div", { class: "q-focus-helper" }), c.icon ? vue.h(_e, { name: c.icon, color: c.color }) : m ? vue.h("img", { class: c.avatar ? "q-bottom-sheet__avatar" : "", src: m }) : vue.h("div", { class: "q-bottom-sheet__empty-icon" }), vue.h("div", c.label)]);
    });
  }
  function u() {
    return e.actions.map((c) => {
      let m = c.avatar || c.img;
      return c.label === void 0 ? vue.h(ho, { spaced: true, dark: n.value }) : vue.h(an, { class: ["q-bottom-sheet__item", c.classes], style: c.style, tabindex: 0, clickable: true, dark: n.value, onClick() {
        l(c);
      } }, () => [vue.h(co, { avatar: true }, () => c.icon ? vue.h(_e, { name: c.icon, color: c.color }) : m ? vue.h("img", { class: c.avatar ? "q-bottom-sheet__avatar" : "", src: m }) : null), vue.h(co, () => c.label)]);
    });
  }
  function v() {
    let c = [];
    return e.title && c.push(vue.h(Vo, { class: "q-dialog__title" }, () => e.title)), e.message && c.push(vue.h(Vo, { class: "q-dialog__message" }, () => e.message)), c.push(e.grid === true ? vue.h("div", { class: "row items-stretch justify-start", role: "list" }, d()) : vue.h("div", { role: "list" }, u())), c;
  }
  function f() {
    return [vue.h(bi, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (n.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, v)];
  }
  return Object.assign(o, { show: i, hide: a }), () => vue.h(rn, { ref: r, position: "bottom", onHide: s }, f);
} });
M({ name: "DialogPluginComponent", props: { ...pe, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  let { proxy: o } = vue.getCurrentInstance(), { $q: n } = o, r = he(e, n), i = vue.ref(null), a = vue.ref(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), l = vue.computed(() => "q-dialog-plugin" + (r.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), s = vue.computed(() => e.color || (r.value === true ? "amber" : "primary")), d = vue.computed(() => e.progress === false ? null : st(e.progress) === true ? { component: e.progress.spinner || xt, props: { color: e.progress.color || s.value } } : { component: xt, props: { color: s.value } }), u = vue.computed(() => e.prompt !== void 0 || e.options !== void 0), v = vue.computed(() => {
    if (u.value !== true)
      return {};
    let { model: C, isValid: U, items: j, ...E } = e.prompt !== void 0 ? e.prompt : e.options;
    return E;
  }), f = vue.computed(() => st(e.ok) === true || e.ok === true ? n.lang.label.ok : e.ok), c = vue.computed(() => st(e.cancel) === true || e.cancel === true ? n.lang.label.cancel : e.cancel), m = vue.computed(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(a.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(a.value) !== true : false), y = vue.computed(() => ({ color: s.value, label: f.value, ripple: false, disable: m.value, ...st(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && u.value !== true || void 0, onClick: p })), h = vue.computed(() => ({ color: s.value, label: c.value, ripple: false, ...st(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && u.value !== true || void 0, onClick: g }));
  vue.watch(() => e.prompt && e.prompt.model, P), vue.watch(() => e.options && e.options.model, P);
  function w() {
    i.value.show();
  }
  function b() {
    i.value.hide();
  }
  function p() {
    t("ok", vue.toRaw(a.value)), b();
  }
  function g() {
    b();
  }
  function x() {
    t("hide");
  }
  function P(C) {
    a.value = C;
  }
  function A(C) {
    m.value !== true && e.prompt.type !== "textarea" && Ht(C, 13) === true && p();
  }
  function L(C, U) {
    return e.html === true ? vue.h(Vo, { class: C, innerHTML: U }) : vue.h(Vo, { class: C }, () => U);
  }
  function $() {
    return [vue.h(Gi, { color: s.value, dense: true, autofocus: true, dark: r.value, ...v.value, modelValue: a.value, "onUpdate:modelValue": P, onKeyup: A })];
  }
  function R() {
    return [vue.h(Fu, { color: s.value, options: e.options.items, dark: r.value, ...v.value, modelValue: a.value, "onUpdate:modelValue": P })];
  }
  function B() {
    let C = [];
    return e.cancel && C.push(vue.h(Be, h.value)), e.ok && C.push(vue.h(Be, y.value)), vue.h(Ll, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => C);
  }
  function k() {
    let C = [];
    return e.title && C.push(L("q-dialog__title", e.title)), e.progress !== false && C.push(vue.h(Vo, { class: "q-dialog__progress" }, () => vue.h(d.value.component, d.value.props))), e.message && C.push(L("q-dialog__message", e.message)), e.prompt !== void 0 ? C.push(vue.h(Vo, { class: "scroll q-dialog-plugin__form" }, $)) : e.options !== void 0 && C.push(vue.h(ho, { dark: r.value }), vue.h(Vo, { class: "scroll q-dialog-plugin__form" }, R), vue.h(ho, { dark: r.value })), (e.ok || e.cancel) && C.push(B()), C;
  }
  function S() {
    return [vue.h(bi, { class: [l.value, e.cardClass], style: e.cardStyle, dark: r.value }, k)];
  }
  return Object.assign(o, { show: w, hide: b }), () => vue.h(rn, { ref: i, onHide: x }, S);
} });
Ut({ isActive: false }, { show(e) {
}, hide(e) {
}, setDefaults(e) {
}, install({ $q: e, parentApp: t }) {
  e.loading = this;
} });
vue.ref(null);
Ut({ isActive: false }, { start: je, stop: je, increment: je, setDefaults: je, install({ $q: e, parentApp: t }) {
  e.loadingBar = this;
  return;
} });
function gs() {
  let e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: je, setItem: je, remove: je, removeItem: je, clear: je, isEmpty: () => true };
}
var dh = gs(), fh = { install({ $q: e }) {
  e.localStorage = dh;
} };
Object.assign(fh, dh);
var mh = gs(), vh = { install({ $q: e }) {
  e.sessionStorage = mh;
} };
Object.assign(vh, mh);
var gh = ["ok", "hide"];
us(gh);
var bX = { version: "2.16.2", install(e, t, o) {
  Md(e, { components: ed, directives: od, ...t }, o);
}, lang: Bn, iconSet: ma };
const _sfc_main$6 = vue.defineComponent({
  ...{
    name: "App"
  },
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
function boot(callback) {
  return callback;
}
function route(callback) {
  return callback;
}
const routes = [
  {
    path: "/",
    component: () => Promise.resolve().then(function() {
      return MainLayout;
    }),
    children: [{ path: "", component: () => Promise.resolve().then(function() {
      return IndexPage;
    }) }]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => Promise.resolve().then(function() {
      return ErrorNotFound;
    })
  }
];
var createRouter = route(function() {
  const createHistory = vueRouter.createMemoryHistory;
  const Router = vueRouter.createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory("/")
  });
  return Router;
});
const RootComponent = vue.defineComponent({
  name: "AppWrapper",
  setup(props) {
    vue.onMounted(() => {
      const { proxy: { $q } } = vue.getCurrentInstance();
      $q.onSSRHydrated !== void 0 && $q.onSSRHydrated();
    });
    return () => vue.h(_sfc_main$6, props);
  }
});
async function createQuasarApp(createAppFn, quasarUserOptions2, ssrContext) {
  const app2 = createAppFn(RootComponent);
  app2.use(bX, quasarUserOptions2, ssrContext);
  const router = vue.markRaw(
    typeof createRouter === "function" ? await createRouter({ ssrContext }) : createRouter
  );
  return {
    app: app2,
    router
  };
}
var quasarUserOptions = { config: { "dark": "auto" } };
const publicPath = `/`;
const httpRE = /^https?:\/\//;
function getRedirectUrl(url, router) {
  if (typeof url === "string" && httpRE.test(url) === true) {
    return url;
  }
  try {
    return router.resolve(url).href;
  } catch (err) {
  }
  return url;
}
const { components, directives, ...qUserOptions } = quasarUserOptions;
const bootFiles = Promise.all([
  Promise.resolve().then(function() {
    return axios$1;
  })
]).then((bootFiles2) => bootFiles2.map((entry) => entry.default).filter((entry) => typeof entry === "function"));
var serverEntry = (ssrContext) => {
  return new Promise(async (resolve, reject) => {
    const bootFunctions = await bootFiles;
    const {
      app: app2,
      router
    } = await createQuasarApp(vue.createApp, qUserOptions, ssrContext);
    let hasRedirected = false;
    const redirect = (url2, httpStatusCode) => {
      hasRedirected = true;
      reject({ url: getRedirectUrl(url2, router), code: httpStatusCode });
    };
    for (let i = 0; hasRedirected === false && i < bootFunctions.length; i++) {
      try {
        await bootFunctions[i]({
          app: app2,
          router,
          ssrContext,
          redirect,
          urlPath: ssrContext.req.url,
          publicPath
        });
      } catch (err) {
        reject(err);
        return;
      }
    }
    if (hasRedirected === true) {
      return;
    }
    app2.use(router);
    const url = ssrContext.req.url;
    const { fullPath } = router.resolve(url);
    if (fullPath !== url) {
      return reject({ url: fullPath });
    }
    router.push(url).catch(() => {
    });
    router.isReady().then(() => {
      let matchedComponents = router.currentRoute.value.matched.filter((record) => record.components !== void 0).flatMap((record) => Object.values(record.components));
      if (matchedComponents.length === 0) {
        return reject({ code: 404 });
      }
      resolve(app2);
    }).catch(reject);
  });
};
zod.z.object({
  fileName: zod.z.string(),
  pos: zod.z.number(),
  end: zod.z.number(),
  duration: zod.z.number()
});
const mkTrpc = (port) => client.createTRPCProxyClient({
  links: [
    client.httpBatchLink({
      url: `http://localhost:${port}/trpc`
    })
  ]
});
const trpc = mkTrpc(globalThis?.location?.port ?? "3000");
const _appState = {
  projectPath: "Not loaded",
  error: "",
  traceFiles: {},
  data: []
};
const appState = vue.reactive(_appState);
trpc.projectPath.query().then((path) => appState.projectPath = path ?? ".").catch(() => {
});
function processTraceData() {
  trpc.clearWarnings.query().then(() => {
    trpc.durationWarning.query().then((limit) => {
      const data = [];
      for (const fileName in appState.traceFiles) {
        data.push(...appState.traceFiles[fileName].data);
      }
      data.sort((a, b) => a.ts - b.ts);
      for (let i = 0; i < data.length; i++) {
        data[i].idx = i;
        const line = data[i];
        if (line.dur && line.dur > limit && line.args?.path && line.args?.pos && line.args?.end) {
          trpc.addWarning.query({
            fileName: line.args.path,
            pos: line.args.pos,
            end: line.args.end,
            duration: line.dur
          });
        }
      }
      appState.data = data;
    });
  });
}
const TypeLine = zod.z.object({
  id: zod.z.number(),
  intrinsicName: zod.z.string().optional(),
  recursionId: zod.z.number().optional(),
  flags: zod.z.array(zod.z.string()).optional(),
  ts: zod.z.number(),
  dur: zod.z.number().optional(),
  display: zod.z.string().optional()
});
const TraceLine = zod.z.object({
  pid: zod.z.number(),
  tid: zod.z.number(),
  ph: zod.z.string(),
  cat: zod.z.string(),
  ts: zod.z.number(),
  name: zod.z.string(),
  dur: zod.z.number().optional(),
  args: zod.z.object({
    kind: zod.z.number().optional(),
    pos: zod.z.number().optional(),
    end: zod.z.number().optional(),
    path: zod.z.string().optional(),
    results: zod.z.object({
      typeId: zod.z.number().optional()
    }).optional()
  }).optional()
});
const TraceData = zod.z.array(TypeLine.or(TraceLine));
function getFileDataHandler(fileName) {
  let handler = false;
  if (fileName === "trace.json") {
    handler = handleTrace;
  } else if (fileName === "types.json") {
    handler = handleTypes;
  }
  const ret = handler;
  return ret && ((text) => ret(fileName, text));
}
function handleTrace(fileName, text) {
  const data = validate(text);
  if (!data)
    return;
  appState.traceFiles[fileName] = { name: fileName, data, type: "type" };
}
function handleTypes(fileName, text) {
  const data = validate(text);
  if (!data)
    return;
  let lastTs = data[0].ts;
  for (let i = 0; i < data.length; i++) {
    data[i].dur = data[i].ts - lastTs;
    lastTs = data[i].ts;
  }
  appState.traceFiles[fileName] = { name: fileName, data, type: "type" };
}
function validate(text) {
  const obj = JSON.parse(text);
  const parsed = TraceData.safeParse(obj);
  if (parsed.error) {
    appState.error = JSON.stringify(parsed.error, null, 2);
    return false;
  } else {
    return obj;
  }
}
const _sfc_main$5 = vue.defineComponent({
  __name: "FileOpen",
  __ssrInlineRender: true,
  setup(__props) {
    const pickerOpts = {
      types: [
        {
          description: "Trace Files",
          accept: {
            "trace/*": [".json"]
          }
        }
      ],
      excludeAcceptAllOption: true,
      multiple: false
    };
    async function getFileData() {
      const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
      const file = await fileHandle.getFile();
      if (!(file && "name" in file && file.name))
        return;
      const handler = getFileDataHandler(file.name);
      if (handler) {
        handler(await file.text());
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = vue.resolveComponent("q-btn");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_q_btn, {
        label: "Open trace file",
        onClick: getFileData
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FileOpen.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = vue.defineComponent({
  ...{
    name: "MainLayout"
  },
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const leftDrawerOpen = vue.ref(true);
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function ping() {
      trpc.ping.query();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_layout = vue.resolveComponent("q-layout");
      const _component_q_header = vue.resolveComponent("q-header");
      const _component_q_toolbar = vue.resolveComponent("q-toolbar");
      const _component_q_btn = vue.resolveComponent("q-btn");
      const _component_q_toolbar_title = vue.resolveComponent("q-toolbar-title");
      const _component_q_drawer = vue.resolveComponent("q-drawer");
      const _component_q_list = vue.resolveComponent("q-list");
      const _component_q_item_label = vue.resolveComponent("q-item-label");
      const _component_q_item = vue.resolveComponent("q-item");
      const _component_q_page_container = vue.resolveComponent("q-page-container");
      const _component_router_view = vue.resolveComponent("router-view");
      _push(serverRenderer.ssrRenderComponent(_component_q_layout, vue.mergeProps({ view: "lHh Lpr lFf" }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_q_header, { elevated: "" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_q_toolbar, null, {
                    default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.ssrRenderComponent(_component_q_btn, {
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "menu",
                          "aria-label": "Menu",
                          onClick: toggleLeftDrawer
                        }, null, _parent4, _scopeId3));
                        _push4(serverRenderer.ssrRenderComponent(_component_q_toolbar_title, null, {
                          default: vue.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` TS Trace Viewer `);
                            } else {
                              return [
                                vue.createTextVNode(" TS Trace Viewer ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}>Quasar v${serverRenderer.ssrInterpolate(_ctx.$q.version)}</div>`);
                      } else {
                        return [
                          vue.createVNode(_component_q_btn, {
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "menu",
                            "aria-label": "Menu",
                            onClick: toggleLeftDrawer
                          }),
                          vue.createVNode(_component_q_toolbar_title, null, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(" TS Trace Viewer ")
                            ]),
                            _: 1
                          }),
                          vue.createVNode("div", null, "Quasar v" + vue.toDisplayString(_ctx.$q.version), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_q_toolbar, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_btn, {
                          flat: "",
                          dense: "",
                          round: "",
                          icon: "menu",
                          "aria-label": "Menu",
                          onClick: toggleLeftDrawer
                        }),
                        vue.createVNode(_component_q_toolbar_title, null, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(" TS Trace Viewer ")
                          ]),
                          _: 1
                        }),
                        vue.createVNode("div", null, "Quasar v" + vue.toDisplayString(_ctx.$q.version), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_q_drawer, {
              modelValue: leftDrawerOpen.value,
              "onUpdate:modelValue": ($event) => leftDrawerOpen.value = $event,
              "show-if-above": "",
              bordered: ""
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_q_list, null, {
                    default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.ssrRenderComponent(_component_q_item_label, { header: "" }, {
                          default: vue.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Project: ${serverRenderer.ssrInterpolate(vue.unref(appState).projectPath)}`);
                            } else {
                              return [
                                vue.createTextVNode(" Project: " + vue.toDisplayString(vue.unref(appState).projectPath), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer.ssrRenderComponent(_component_q_item, null, {
                          default: vue.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vue.createVNode(_sfc_main$5)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer.ssrRenderComponent(_component_q_item, null, {
                          default: vue.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.ssrRenderComponent(_component_q_btn, {
                                label: "Process Trace Files",
                                onClick: vue.unref(processTraceData)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vue.createVNode(_component_q_btn, {
                                  label: "Process Trace Files",
                                  onClick: vue.unref(processTraceData)
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer.ssrRenderComponent(_component_q_item, null, {
                          default: vue.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.ssrRenderComponent(_component_q_btn, {
                                label: "Ping",
                                onClick: ping
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vue.createVNode(_component_q_btn, {
                                  label: "Ping",
                                  onClick: ping
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vue.createVNode(_component_q_item_label, { header: "" }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(" Project: " + vue.toDisplayString(vue.unref(appState).projectPath), 1)
                            ]),
                            _: 1
                          }),
                          vue.createVNode(_component_q_item, null, {
                            default: vue.withCtx(() => [
                              vue.createVNode(_sfc_main$5)
                            ]),
                            _: 1
                          }),
                          vue.createVNode(_component_q_item, null, {
                            default: vue.withCtx(() => [
                              vue.createVNode(_component_q_btn, {
                                label: "Process Trace Files",
                                onClick: vue.unref(processTraceData)
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          vue.createVNode(_component_q_item, null, {
                            default: vue.withCtx(() => [
                              vue.createVNode(_component_q_btn, {
                                label: "Ping",
                                onClick: ping
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_q_list, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_q_item_label, { header: "" }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(" Project: " + vue.toDisplayString(vue.unref(appState).projectPath), 1)
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item, null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_sfc_main$5)
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item, null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_q_btn, {
                              label: "Process Trace Files",
                              onClick: vue.unref(processTraceData)
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        vue.createVNode(_component_q_item, null, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_q_btn, {
                              label: "Ping",
                              onClick: ping
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_q_page_container, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_router_view)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_q_header, { elevated: "" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_toolbar, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_q_btn, {
                        flat: "",
                        dense: "",
                        round: "",
                        icon: "menu",
                        "aria-label": "Menu",
                        onClick: toggleLeftDrawer
                      }),
                      vue.createVNode(_component_q_toolbar_title, null, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" TS Trace Viewer ")
                        ]),
                        _: 1
                      }),
                      vue.createVNode("div", null, "Quasar v" + vue.toDisplayString(_ctx.$q.version), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue.createVNode(_component_q_drawer, {
                modelValue: leftDrawerOpen.value,
                "onUpdate:modelValue": ($event) => leftDrawerOpen.value = $event,
                "show-if-above": "",
                bordered: ""
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_q_list, null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_q_item_label, { header: "" }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" Project: " + vue.toDisplayString(vue.unref(appState).projectPath), 1)
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_q_item, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_sfc_main$5)
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_q_item, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_q_btn, {
                            label: "Process Trace Files",
                            onClick: vue.unref(processTraceData)
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_q_item, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_q_btn, {
                            label: "Ping",
                            onClick: ping
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              vue.createVNode(_component_q_page_container, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_router_view)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/MainLayout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var MainLayout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = vue.defineComponent({
  __name: "TypesDuring",
  __ssrInlineRender: true,
  props: {
    ts: {},
    duration: {}
  },
  setup(__props) {
    const props = __props;
    const types = vue.computed(
      () => (appState.data ?? []).filter(
        (x) => "id" in x && x.ts >= props.ts && x.ts < props.ts + props.duration
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_card = vue.resolveComponent("q-card");
      _push(serverRenderer.ssrRenderComponent(_component_q_card, vue.mergeProps({ class: "q-pl-md" }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}> Types created: ${serverRenderer.ssrInterpolate(types.value.length)} <!--[-->`);
            serverRenderer.ssrRenderList(types.value, (type) => {
              _push2(`<div class="q-pl-md"${_scopeId}><div class="row justify-between"${_scopeId}><div class="col-1"${_scopeId}>ts: ${serverRenderer.ssrInterpolate(Math.round(type.ts ?? 0))}</div><div class="col-1"${_scopeId}>dur: ${serverRenderer.ssrInterpolate(Math.round(type.dur ?? 0))}</div><div class="col-1"${_scopeId}>id: ${serverRenderer.ssrInterpolate(type.id)}</div><div class="col-1"${_scopeId}>${serverRenderer.ssrInterpolate(type.recursionId)}</div><div class="col-8"${_scopeId}>${serverRenderer.ssrInterpolate(type.flags)}</div></div>`);
              if (type.display) {
                _push2(`<div class="q-pl-md"${_scopeId}>${serverRenderer.ssrInterpolate(type.display)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vue.createVNode("div", null, [
                vue.createTextVNode(" Types created: " + vue.toDisplayString(types.value.length) + " ", 1),
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(types.value, (type) => {
                  return vue.openBlock(), vue.createBlock("div", {
                    class: "q-pl-md",
                    key: type.id
                  }, [
                    vue.createVNode("div", { class: "row justify-between" }, [
                      vue.createVNode("div", { class: "col-1" }, "ts: " + vue.toDisplayString(Math.round(type.ts ?? 0)), 1),
                      vue.createVNode("div", { class: "col-1" }, "dur: " + vue.toDisplayString(Math.round(type.dur ?? 0)), 1),
                      vue.createVNode("div", { class: "col-1" }, "id: " + vue.toDisplayString(type.id), 1),
                      vue.createVNode("div", { class: "col-1" }, vue.toDisplayString(type.recursionId), 1),
                      vue.createVNode("div", { class: "col-8" }, vue.toDisplayString(type.flags), 1)
                    ]),
                    type.display ? (vue.openBlock(), vue.createBlock("div", {
                      key: 0,
                      class: "q-pl-md"
                    }, vue.toDisplayString(type.display), 1)) : vue.createCommentVNode("", true)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TypesDuring.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = vue.defineComponent({
  __name: "TraceFile",
  __ssrInlineRender: true,
  setup(__props) {
    const names = vue.computed(() => {
      if (appState.data === void 0) {
        return [];
      }
      const names2 = /* @__PURE__ */ new Set();
      for (const line of appState.data) {
        if ("name" in line)
          names2.add(line.name);
      }
      return [...names2.values()].sort();
    });
    const selectedLines = vue.computed(
      () => appState.data?.filter(
        (x) => "name" in x && x.name === selectedName.value && (x.dur ?? 0) !== 0
      ).sort((a, b) => b.dur - a.dur)
    );
    const selectedName = vue.ref("checkExpression");
    function openFile(fileName) {
      if (!fileName)
        return;
      trpc.openFile.query(fileName);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_select = vue.resolveComponent("q-select");
      const _component_q_card = vue.resolveComponent("q-card");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_q_select, {
        label: "Name",
        options: names.value,
        modelValue: selectedName.value,
        "onUpdate:modelValue": ($event) => selectedName.value = $event
      }, null, _parent));
      _push(`<div class="column"><!--[-->`);
      serverRenderer.ssrRenderList(selectedLines.value, (line) => {
        _push(`<div>`);
        _push(serverRenderer.ssrRenderComponent(_component_q_card, {
          onClick: ($event) => openFile(line.args?.path),
          class: "column"
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>${serverRenderer.ssrInterpolate(line.name)} : ${serverRenderer.ssrInterpolate(Math.round(line.dur ?? 0 / 1e3) / 1e3)} ${serverRenderer.ssrInterpolate(line.args?.path?.replace(
                new RegExp(`^.*${vue.unref(appState).projectPath ?? "."}/`),
                "."
              ))} : ${serverRenderer.ssrInterpolate(line.args?.pos)}</div><div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_sfc_main$3, {
                ts: line.ts,
                duration: line.dur ?? 0
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                vue.createVNode("div", null, vue.toDisplayString(line.name) + " : " + vue.toDisplayString(Math.round(line.dur ?? 0 / 1e3) / 1e3) + " " + vue.toDisplayString(line.args?.path?.replace(
                  new RegExp(`^.*${vue.unref(appState).projectPath ?? "."}/`),
                  "."
                )) + " : " + vue.toDisplayString(line.args?.pos), 1),
                vue.createVNode("div", null, [
                  vue.createVNode(_sfc_main$3, {
                    ts: line.ts,
                    duration: line.dur ?? 0
                  }, null, 8, ["ts", "duration"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TraceFile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = vue.defineComponent({
  __name: "IndexPage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = vue.resolveComponent("q-page");
      const _component_q_card = vue.resolveComponent("q-card");
      _push(serverRenderer.ssrRenderComponent(_component_q_page, vue.mergeProps({ class: "row items-evenly justify-start" }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_q_card, {
              style: { "width": "100%" },
              class: "q-pa-sm dark"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<br${_scopeId2}>`);
                  _push3(serverRenderer.ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                  _push3(`<pre${_scopeId2}></pre>`);
                } else {
                  return [
                    vue.createVNode("br"),
                    vue.createVNode(_sfc_main$2),
                    vue.createVNode("pre")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_q_card, {
                style: { "width": "100%" },
                class: "q-pa-sm dark"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode("br"),
                  vue.createVNode(_sfc_main$2),
                  vue.createVNode("pre")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/IndexPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var IndexPage = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = vue.defineComponent({
  ...{
    name: "ErrorNotFound"
  },
  __name: "ErrorNotFound",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = vue.resolveComponent("q-btn");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center" }, _attrs))}><div><div style="${serverRenderer.ssrRenderStyle({ "font-size": "30vh" })}"> 404 </div><div class="text-h2" style="${serverRenderer.ssrRenderStyle({ "opacity": ".4" })}"> Oops. Nothing here... </div>`);
      _push(serverRenderer.ssrRenderComponent(_component_q_btn, {
        class: "q-mt-xl",
        color: "white",
        "text-color": "blue",
        unelevated: "",
        to: "/",
        label: "Go Home",
        "no-caps": ""
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/ErrorNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ErrorNotFound = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const api = axios__default["default"].create({ baseURL: "https://api.example.com" });
var axios = boot(({ app: app2 }) => {
  app2.config.globalProperties.$axios = axios__default["default"];
  app2.config.globalProperties.$api = api;
});
var axios$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": axios,
  api
}, Symbol.toStringTag, { value: "Module" }));
exports["default"] = serverEntry;
