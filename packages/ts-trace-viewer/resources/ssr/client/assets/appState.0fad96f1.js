var _a, _b, _c, _d, _e, _f, _g, _h;
import { c as createComponent, a as computed, h, r as ref, Q as isKeyCode, z as stopAndPrevent, g as getCurrentInstance, d as onBeforeUnmount, R as History, w as watch, o as onMounted, e as nextTick, p as client, l as listenOpts, S as getEventPath, U as onDeactivated, V as Platform, D as reactive } from "./index.b3b08812.js";
import { h as hSlot, i as useRouterLinkProps, f as useRouterLink, a as hUniqueSlot, v as vmHasRouter, j as getElement, k as css, l as vmIsDestroyed } from "./use-router-link.cfd28949.js";
var QItemLabel = createComponent({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(props, { slots }) {
    const parsedLines = computed(() => parseInt(props.lines, 10));
    const classes = computed(
      () => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : "")
    );
    const style = computed(() => {
      return props.lines !== void 0 && parsedLines.value > 1 ? {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": parsedLines.value
      } : null;
    });
    return () => h("div", {
      style: style.value,
      class: classes.value
    }, hSlot(slots.default));
  }
});
const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props, $q) {
  return computed(() => props.dark === null ? $q.dark.isActive : props.dark);
}
var QItem = createComponent({
  name: "QItem",
  props: {
    ...useDarkProps,
    ...useRouterLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(
      () => props.clickable === true || hasLink.value === true || props.tag === "label"
    );
    const isClickable = computed(
      () => props.disable !== true && isActionable.value === true
    );
    const classes = computed(
      () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        navigateOnClick(e);
      }
    }
    function onKeyup(e) {
      if (isClickable.value === true && isKeyCode(e, [13, 32]) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
      );
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        role: "listitem",
        onClick,
        onKeyup
      };
      if (isClickable.value === true) {
        data.tabindex = props.tabindex || "0";
        Object.assign(data, linkAttrs.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(
        linkTag.value,
        data,
        getContent()
      );
    };
  }
});
function useHistory(showing, hide, hideOnRouteChange) {
  let historyEntry;
  function removeFromHistory() {
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
  }
  onBeforeUnmount(() => {
    showing.value === true && removeFromHistory();
  });
  return {
    removeFromHistory,
    addToHistory() {
      historyEntry = {
        condition: () => hideOnRouteChange.value === true,
        handler: hide
      };
      History.add(historyEntry);
    }
  };
}
const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
};
const useModelToggleEmits = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function useModelToggle({
  showing,
  canShow,
  hideOnRouteChange,
  handleShow,
  handleHide,
  processOnMount
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let payload;
  function toggle(evt) {
    if (showing.value === true) {
      hide(evt);
    } else {
      show(evt);
    }
  }
  function show(evt) {
    if (props.disable === true || evt !== void 0 && evt.qAnchorHandled === true || canShow !== void 0 && canShow(evt) !== true) {
      return;
    }
    const listener = props["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", true);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props.modelValue === null || listener === false || false) {
      processShow(evt);
    }
  }
  function processShow(evt) {
    if (showing.value === true) {
      return;
    }
    showing.value = true;
    emit("beforeShow", evt);
    if (handleShow !== void 0) {
      handleShow(evt);
    } else {
      emit("show", evt);
    }
  }
  function hide(evt) {
    if (props.disable === true) {
      return;
    }
    const listener = props["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", false);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props.modelValue === null || listener === false || false) {
      processHide(evt);
    }
  }
  function processHide(evt) {
    if (showing.value === false) {
      return;
    }
    showing.value = false;
    emit("beforeHide", evt);
    if (handleHide !== void 0) {
      handleHide(evt);
    } else {
      emit("hide", evt);
    }
  }
  function processModelChange(val) {
    if (props.disable === true && val === true) {
      if (props["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", false);
      }
    } else if (val === true !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
  }
  watch(() => props.modelValue, processModelChange);
  if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
    watch(() => proxy.$route.fullPath, () => {
      if (hideOnRouteChange.value === true && showing.value === true) {
        hide();
      }
    });
  }
  processOnMount === true && onMounted(() => {
    processModelChange(props.modelValue);
  });
  const publicMethods = { show, hide, toggle };
  Object.assign(proxy, publicMethods);
  return publicMethods;
}
const scrollTargetProp = [Element, String];
const scrollTargets = [null, document, document.body, document.scrollingElement, document.documentElement];
function getScrollTarget(el, targetEl) {
  let target = getElement(targetEl);
  if (target === void 0) {
    if (el === void 0 || el === null) {
      return window;
    }
    target = el.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return scrollTargets.includes(target) ? window : target;
}
function getVerticalScrollPosition(scrollTarget) {
  return scrollTarget === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
  return scrollTarget === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : scrollTarget.scrollLeft;
}
let size;
function getScrollbarWidth() {
  if (size !== void 0) {
    return size;
  }
  const inner = document.createElement("p"), outer = document.createElement("div");
  css(inner, {
    width: "100%",
    height: "200px"
  });
  css(outer, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w2 = inner.offsetWidth;
  if (w1 === w2) {
    w2 = outer.clientWidth;
  }
  outer.remove();
  size = w1 - w2;
  return size;
}
function hasScrollbar(el, onY = true) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  return onY ? el.scrollHeight > el.clientHeight && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-y"])) : el.scrollWidth > el.clientWidth && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-x"]));
}
let registered = 0, scrollPositionX, scrollPositionY, maxScrollTop, vpPendingUpdate = false, bodyLeft, bodyTop, href, closeTimer = null;
function onWheel(e) {
  if (shouldPreventScroll(e)) {
    stopAndPrevent(e);
  }
}
function shouldPreventScroll(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) {
    return true;
  }
  const path = getEventPath(e), shift = e.shiftKey && !e.deltaX, scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY), delta = shift || scrollY ? e.deltaY : e.deltaX;
  for (let index = 0; index < path.length; index++) {
    const el = path[index];
    if (hasScrollbar(el, scrollY)) {
      return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
    }
  }
  return true;
}
function onAppleScroll(e) {
  if (e.target === document) {
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
  }
}
function onAppleResize(evt) {
  if (vpPendingUpdate === true) {
    return;
  }
  vpPendingUpdate = true;
  requestAnimationFrame(() => {
    vpPendingUpdate = false;
    const { height } = evt.target, { clientHeight, scrollTop } = document.scrollingElement;
    if (maxScrollTop === void 0 || height !== window.innerHeight) {
      maxScrollTop = clientHeight - height;
      document.scrollingElement.scrollTop = scrollTop;
    }
    if (scrollTop > maxScrollTop) {
      document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
    }
  });
}
function apply(action) {
  const body = document.body, hasViewport = window.visualViewport !== void 0;
  if (action === "add") {
    const { overflowY, overflowX } = window.getComputedStyle(body);
    scrollPositionX = getHorizontalScrollPosition(window);
    scrollPositionY = getVerticalScrollPosition(window);
    bodyLeft = body.style.left;
    bodyTop = body.style.top;
    href = window.location.href;
    body.style.left = `-${scrollPositionX}px`;
    body.style.top = `-${scrollPositionY}px`;
    if (overflowX !== "hidden" && (overflowX === "scroll" || body.scrollWidth > window.innerWidth)) {
      body.classList.add("q-body--force-scrollbar-x");
    }
    if (overflowY !== "hidden" && (overflowY === "scroll" || body.scrollHeight > window.innerHeight)) {
      body.classList.add("q-body--force-scrollbar-y");
    }
    body.classList.add("q-body--prevent-scroll");
    document.qScrollPrevented = true;
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
        window.scrollTo(0, 0);
      } else {
        window.addEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
  }
  if (client.is.desktop === true && client.is.mac === true) {
    window[`${action}EventListener`]("wheel", onWheel, listenOpts.notPassive);
  }
  if (action === "remove") {
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.visualViewport.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
      } else {
        window.removeEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
    body.classList.remove("q-body--prevent-scroll");
    body.classList.remove("q-body--force-scrollbar-x");
    body.classList.remove("q-body--force-scrollbar-y");
    document.qScrollPrevented = false;
    body.style.left = bodyLeft;
    body.style.top = bodyTop;
    if (window.location.href === href) {
      window.scrollTo(scrollPositionX, scrollPositionY);
    }
    maxScrollTop = void 0;
  }
}
function preventScroll(state) {
  let action = "add";
  if (state === true) {
    registered++;
    if (closeTimer !== null) {
      clearTimeout(closeTimer);
      closeTimer = null;
      return;
    }
    if (registered > 1) {
      return;
    }
  } else {
    if (registered === 0) {
      return;
    }
    registered--;
    if (registered > 0) {
      return;
    }
    action = "remove";
    if (client.is.ios === true && client.is.nativeMobile === true) {
      closeTimer !== null && clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        apply(action);
        closeTimer = null;
      }, 100);
      return;
    }
  }
  apply(action);
}
function usePreventScroll() {
  let currentState;
  return {
    preventBodyScroll(state) {
      if (state !== currentState && (currentState !== void 0 || state === true)) {
        currentState = state;
        preventScroll(state);
      }
    }
  };
}
function useTimeout() {
  let timer = null;
  const vm = getCurrentInstance();
  function removeTimeout() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }
  onDeactivated(removeTimeout);
  onBeforeUnmount(removeTimeout);
  return {
    removeTimeout,
    registerTimeout(fn, delay) {
      removeTimeout();
      if (vmIsDestroyed(vm) === false) {
        timer = setTimeout(() => {
          timer = null;
          fn();
        }, delay);
      }
    }
  };
}
function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection();
    if (selection.empty !== void 0) {
      selection.empty();
    } else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      Platform.is.mobile !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    document.selection.empty();
  }
}
function between(v, min, max) {
  return max <= min ? min : Math.min(max, Math.max(min, v));
}
function normalizeToInterval(v, min, max) {
  if (max <= min) {
    return min;
  }
  const size2 = max - min + 1;
  let index = min + (v - min) % size2;
  if (index < min) {
    index = size2 + index;
  }
  return index === 0 ? 0 : index;
}
function isObject$1(value) {
  return !!value && !Array.isArray(value) && typeof value === "object";
}
class UnknownCauseError extends Error {
}
function getCauseFromUnknown(cause) {
  if (cause instanceof Error) {
    return cause;
  }
  const type = typeof cause;
  if (type === "undefined" || type === "function" || cause === null) {
    return void 0;
  }
  if (type !== "object") {
    return new Error(String(cause));
  }
  if (isObject$1(cause)) {
    const err = new UnknownCauseError();
    for (const key in cause) {
      err[key] = cause[key];
    }
    return err;
  }
  return void 0;
}
function invert(obj) {
  const newObj = /* @__PURE__ */ Object.create(null);
  for (const key in obj) {
    const v = obj[key];
    newObj[v] = key;
  }
  return newObj;
}
const TRPC_ERROR_CODES_BY_KEY = {
  PARSE_ERROR: -32700,
  BAD_REQUEST: -32600,
  INTERNAL_SERVER_ERROR: -32603,
  NOT_IMPLEMENTED: -32603,
  UNAUTHORIZED: -32001,
  FORBIDDEN: -32003,
  NOT_FOUND: -32004,
  METHOD_NOT_SUPPORTED: -32005,
  TIMEOUT: -32008,
  CONFLICT: -32009,
  PRECONDITION_FAILED: -32012,
  PAYLOAD_TOO_LARGE: -32013,
  UNPROCESSABLE_CONTENT: -32022,
  TOO_MANY_REQUESTS: -32029,
  CLIENT_CLOSED_REQUEST: -32099
};
invert(TRPC_ERROR_CODES_BY_KEY);
invert(TRPC_ERROR_CODES_BY_KEY);
const noop = () => {
};
function createInnerProxy(callback, path) {
  const proxy = new Proxy(noop, {
    get(_obj, key) {
      if (typeof key !== "string" || key === "then") {
        return void 0;
      }
      return createInnerProxy(callback, [
        ...path,
        key
      ]);
    },
    apply(_1, _2, args) {
      const isApply = path[path.length - 1] === "apply";
      return callback({
        args: isApply ? args.length >= 2 ? args[1] : [] : args,
        path: isApply ? path.slice(0, -1) : path
      });
    }
  });
  return proxy;
}
const createRecursiveProxy = (callback) => createInnerProxy(callback, []);
const createFlatProxy = (callback) => {
  return new Proxy(noop, {
    get(_obj, name) {
      if (typeof name !== "string" || name === "then") {
        return void 0;
      }
      return callback(name);
    }
  });
};
typeof window === "undefined" || "Deno" in window || ((_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b.NODE_ENV) === "test" || !!((_d = (_c = globalThis.process) == null ? void 0 : _c.env) == null ? void 0 : _d.JEST_WORKER_ID) || !!((_f = (_e = globalThis.process) == null ? void 0 : _e.env) == null ? void 0 : _f.VITEST_WORKER_ID);
function identity(x) {
  return x;
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}
function observable(subscribe) {
  const self = {
    subscribe(observer) {
      let teardownRef = null;
      let isDone = false;
      let unsubscribed = false;
      let teardownImmediately = false;
      function unsubscribe() {
        if (teardownRef === null) {
          teardownImmediately = true;
          return;
        }
        if (unsubscribed) {
          return;
        }
        unsubscribed = true;
        if (typeof teardownRef === "function") {
          teardownRef();
        } else if (teardownRef) {
          teardownRef.unsubscribe();
        }
      }
      teardownRef = subscribe({
        next(value) {
          var _a2;
          if (isDone) {
            return;
          }
          (_a2 = observer.next) == null ? void 0 : _a2.call(observer, value);
        },
        error(err) {
          var _a2;
          if (isDone) {
            return;
          }
          isDone = true;
          (_a2 = observer.error) == null ? void 0 : _a2.call(observer, err);
          unsubscribe();
        },
        complete() {
          var _a2;
          if (isDone) {
            return;
          }
          isDone = true;
          (_a2 = observer.complete) == null ? void 0 : _a2.call(observer);
          unsubscribe();
        }
      });
      if (teardownImmediately) {
        unsubscribe();
      }
      return {
        unsubscribe
      };
    },
    pipe(...operations) {
      return pipeFromArray(operations)(self);
    }
  };
  return self;
}
function share(_opts) {
  return (originalObserver) => {
    let refCount = 0;
    let subscription = null;
    const observers = [];
    function startIfNeeded() {
      if (subscription) {
        return;
      }
      subscription = originalObserver.subscribe({
        next(value) {
          var _a2;
          for (const observer of observers) {
            (_a2 = observer.next) == null ? void 0 : _a2.call(observer, value);
          }
        },
        error(error) {
          var _a2;
          for (const observer of observers) {
            (_a2 = observer.error) == null ? void 0 : _a2.call(observer, error);
          }
        },
        complete() {
          var _a2;
          for (const observer of observers) {
            (_a2 = observer.complete) == null ? void 0 : _a2.call(observer);
          }
        }
      });
    }
    function resetIfNeeded() {
      if (refCount === 0 && subscription) {
        const _sub = subscription;
        subscription = null;
        _sub.unsubscribe();
      }
    }
    return {
      subscribe(observer) {
        refCount++;
        observers.push(observer);
        startIfNeeded();
        return {
          unsubscribe() {
            refCount--;
            resetIfNeeded();
            const index = observers.findIndex((v) => v === observer);
            if (index > -1) {
              observers.splice(index, 1);
            }
          }
        };
      }
    };
  };
}
class ObservableAbortError extends Error {
  constructor(message) {
    super(message);
    this.name = "ObservableAbortError";
    Object.setPrototypeOf(this, ObservableAbortError.prototype);
  }
}
function observableToPromise(observable2) {
  let abort;
  const promise = new Promise((resolve, reject) => {
    let isDone = false;
    function onDone() {
      if (isDone) {
        return;
      }
      isDone = true;
      reject(new ObservableAbortError("This operation was aborted."));
      obs$.unsubscribe();
    }
    const obs$ = observable2.subscribe({
      next(data) {
        isDone = true;
        resolve(data);
        onDone();
      },
      error(data) {
        isDone = true;
        reject(data);
        onDone();
      },
      complete() {
        isDone = true;
        onDone();
      }
    });
    abort = onDone;
  });
  return {
    promise,
    abort
  };
}
function createChain(opts) {
  return observable((observer) => {
    function execute(index = 0, op = opts.op) {
      const next = opts.links[index];
      if (!next) {
        throw new Error("No more links to execute - did you forget to add an ending link?");
      }
      const subscription = next({
        op,
        next(nextOp) {
          const nextObserver = execute(index + 1, nextOp);
          return nextObserver;
        }
      });
      return subscription;
    }
    const obs$ = execute();
    return obs$.subscribe(observer);
  });
}
function isObject(value) {
  return !!value && !Array.isArray(value) && typeof value === "object";
}
function transformResultInner(response, runtime) {
  if ("error" in response) {
    const error = runtime.transformer.deserialize(response.error);
    return {
      ok: false,
      error: {
        ...response,
        error
      }
    };
  }
  const result = {
    ...response.result,
    ...(!response.result.type || response.result.type === "data") && {
      type: "data",
      data: runtime.transformer.deserialize(response.result.data)
    }
  };
  return {
    ok: true,
    result
  };
}
class TransformResultError extends Error {
  constructor() {
    super("Unable to transform response from server");
  }
}
function transformResult(response, runtime) {
  let result;
  try {
    result = transformResultInner(response, runtime);
  } catch (err) {
    throw new TransformResultError();
  }
  if (!result.ok && (!isObject(result.error.error) || typeof result.error.error.code !== "number")) {
    throw new TransformResultError();
  }
  if (result.ok && !isObject(result.result)) {
    throw new TransformResultError();
  }
  return result;
}
function isTRPCClientError(cause) {
  return cause instanceof TRPCClientError || cause instanceof Error && cause.name === "TRPCClientError";
}
function isTRPCErrorResponse(obj) {
  return isObject(obj) && isObject(obj.error) && typeof obj.error.code === "number" && typeof obj.error.message === "string";
}
class TRPCClientError extends Error {
  static from(_cause, opts = {}) {
    const cause = _cause;
    if (isTRPCClientError(cause)) {
      if (opts.meta) {
        cause.meta = {
          ...cause.meta,
          ...opts.meta
        };
      }
      return cause;
    }
    if (isTRPCErrorResponse(cause)) {
      return new TRPCClientError(cause.error.message, {
        ...opts,
        result: cause
      });
    }
    if (!(cause instanceof Error)) {
      return new TRPCClientError("Unknown error", {
        ...opts,
        cause
      });
    }
    return new TRPCClientError(cause.message, {
      ...opts,
      cause: getCauseFromUnknown(cause)
    });
  }
  constructor(message, opts) {
    var _a2, _b2;
    const cause = opts == null ? void 0 : opts.cause;
    super(message, {
      cause
    });
    this.meta = opts == null ? void 0 : opts.meta;
    this.cause = cause;
    this.shape = (_a2 = opts == null ? void 0 : opts.result) == null ? void 0 : _a2.error;
    this.data = (_b2 = opts == null ? void 0 : opts.result) == null ? void 0 : _b2.error.data;
    this.name = "TRPCClientError";
    Object.setPrototypeOf(this, TRPCClientError.prototype);
  }
}
const isFunction = (fn) => typeof fn === "function";
function getFetch(customFetchImpl) {
  if (customFetchImpl) {
    return customFetchImpl;
  }
  if (typeof window !== "undefined" && isFunction(window.fetch)) {
    return window.fetch;
  }
  if (typeof globalThis !== "undefined" && isFunction(globalThis.fetch)) {
    return globalThis.fetch;
  }
  throw new Error("No fetch implementation found");
}
function getAbortController(customAbortControllerImpl) {
  if (customAbortControllerImpl) {
    return customAbortControllerImpl;
  }
  if (typeof window !== "undefined" && window.AbortController) {
    return window.AbortController;
  }
  if (typeof globalThis !== "undefined" && globalThis.AbortController) {
    return globalThis.AbortController;
  }
  return null;
}
function resolveHTTPLinkOptions(opts) {
  return {
    url: opts.url.toString().replace(/\/$/, ""),
    fetch: opts.fetch,
    AbortController: getAbortController(opts.AbortController)
  };
}
function arrayToDict(array) {
  const dict = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    dict[index] = element;
  }
  return dict;
}
const METHOD = {
  query: "GET",
  mutation: "POST"
};
function getInput(opts) {
  return "input" in opts ? opts.runtime.transformer.serialize(opts.input) : arrayToDict(opts.inputs.map((_input) => opts.runtime.transformer.serialize(_input)));
}
const getUrl = (opts) => {
  let url = opts.url + "/" + opts.path;
  const queryParts = [];
  if ("inputs" in opts) {
    queryParts.push("batch=1");
  }
  if (opts.type === "query") {
    const input = getInput(opts);
    if (input !== void 0) {
      queryParts.push(`input=${encodeURIComponent(JSON.stringify(input))}`);
    }
  }
  if (queryParts.length) {
    url += "?" + queryParts.join("&");
  }
  return url;
};
const getBody = (opts) => {
  if (opts.type === "query") {
    return void 0;
  }
  const input = getInput(opts);
  return input !== void 0 ? JSON.stringify(input) : void 0;
};
const jsonHttpRequester = (opts) => {
  return httpRequest({
    ...opts,
    contentTypeHeader: "application/json",
    getUrl,
    getBody
  });
};
async function fetchHTTPResponse(opts, ac) {
  const url = opts.getUrl(opts);
  const body = opts.getBody(opts);
  const { type } = opts;
  const resolvedHeaders = await opts.headers();
  /* istanbul ignore if -- @preserve */
  if (type === "subscription") {
    throw new Error("Subscriptions should use wsLink");
  }
  const headers = {
    ...opts.contentTypeHeader ? {
      "content-type": opts.contentTypeHeader
    } : {},
    ...opts.batchModeHeader ? {
      "trpc-batch-mode": opts.batchModeHeader
    } : {},
    ...resolvedHeaders
  };
  return getFetch(opts.fetch)(url, {
    method: METHOD[type],
    signal: ac == null ? void 0 : ac.signal,
    body,
    headers
  });
}
function httpRequest(opts) {
  const ac = opts.AbortController ? new opts.AbortController() : null;
  const meta = {};
  let done = false;
  const promise = new Promise((resolve, reject) => {
    fetchHTTPResponse(opts, ac).then((_res) => {
      meta.response = _res;
      done = true;
      return _res.json();
    }).then((json) => {
      meta.responseJSON = json;
      resolve({
        json,
        meta
      });
    }).catch((err) => {
      done = true;
      reject(TRPCClientError.from(err, {
        meta
      }));
    });
  });
  const cancel = () => {
    if (!done) {
      ac == null ? void 0 : ac.abort();
    }
  };
  return {
    promise,
    cancel
  };
}
const throwFatalError = () => {
  throw new Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new");
};
function dataLoader(batchLoader) {
  let pendingItems = null;
  let dispatchTimer = null;
  const destroyTimerAndPendingItems = () => {
    clearTimeout(dispatchTimer);
    dispatchTimer = null;
    pendingItems = null;
  };
  function groupItems(items) {
    var _a2, _b2;
    const groupedItems = [
      []
    ];
    let index = 0;
    while (true) {
      const item = items[index];
      if (!item) {
        break;
      }
      const lastGroup = groupedItems[groupedItems.length - 1];
      if (item.aborted) {
        (_a2 = item.reject) == null ? void 0 : _a2.call(item, new Error("Aborted"));
        index++;
        continue;
      }
      const isValid = batchLoader.validate(lastGroup.concat(item).map((it) => it.key));
      if (isValid) {
        lastGroup.push(item);
        index++;
        continue;
      }
      if (lastGroup.length === 0) {
        (_b2 = item.reject) == null ? void 0 : _b2.call(item, new Error("Input is too big for a single dispatch"));
        index++;
        continue;
      }
      groupedItems.push([]);
    }
    return groupedItems;
  }
  function dispatch() {
    const groupedItems = groupItems(pendingItems);
    destroyTimerAndPendingItems();
    for (const items of groupedItems) {
      if (!items.length) {
        continue;
      }
      const batch = {
        items,
        cancel: throwFatalError
      };
      for (const item of items) {
        item.batch = batch;
      }
      const unitResolver = (index, value) => {
        var _a2;
        const item = batch.items[index];
        (_a2 = item.resolve) == null ? void 0 : _a2.call(item, value);
        item.batch = null;
        item.reject = null;
        item.resolve = null;
      };
      const { promise, cancel } = batchLoader.fetch(batch.items.map((_item) => _item.key), unitResolver);
      batch.cancel = cancel;
      promise.then((result) => {
        var _a2;
        for (let i = 0; i < result.length; i++) {
          const value = result[i];
          unitResolver(i, value);
        }
        for (const item of batch.items) {
          (_a2 = item.reject) == null ? void 0 : _a2.call(item, new Error("Missing result"));
          item.batch = null;
        }
      }).catch((cause) => {
        var _a2;
        for (const item of batch.items) {
          (_a2 = item.reject) == null ? void 0 : _a2.call(item, cause);
          item.batch = null;
        }
      });
    }
  }
  function load(key) {
    const item = {
      aborted: false,
      key,
      batch: null,
      resolve: throwFatalError,
      reject: throwFatalError
    };
    const promise = new Promise((resolve, reject) => {
      item.reject = reject;
      item.resolve = resolve;
      if (!pendingItems) {
        pendingItems = [];
      }
      pendingItems.push(item);
    });
    if (!dispatchTimer) {
      dispatchTimer = setTimeout(dispatch);
    }
    const cancel = () => {
      var _a2;
      item.aborted = true;
      if ((_a2 = item.batch) == null ? void 0 : _a2.items.every((item2) => item2.aborted)) {
        item.batch.cancel();
        item.batch = null;
      }
    };
    return {
      promise,
      cancel
    };
  }
  return {
    load
  };
}
function createHTTPBatchLink(requester) {
  return function httpBatchLink2(opts) {
    var _a2;
    const resolvedOpts = resolveHTTPLinkOptions(opts);
    const maxURLLength = (_a2 = opts.maxURLLength) != null ? _a2 : Infinity;
    return (runtime) => {
      const batchLoader = (type) => {
        const validate = (batchOps) => {
          if (maxURLLength === Infinity) {
            return true;
          }
          const path = batchOps.map((op) => op.path).join(",");
          const inputs = batchOps.map((op) => op.input);
          const url = getUrl({
            ...resolvedOpts,
            runtime,
            type,
            path,
            inputs
          });
          return url.length <= maxURLLength;
        };
        const fetch = requester({
          ...resolvedOpts,
          runtime,
          type,
          opts
        });
        return {
          validate,
          fetch
        };
      };
      const query = dataLoader(batchLoader("query"));
      const mutation = dataLoader(batchLoader("mutation"));
      const subscription = dataLoader(batchLoader("subscription"));
      const loaders = {
        query,
        subscription,
        mutation
      };
      return ({ op }) => {
        return observable((observer) => {
          const loader = loaders[op.type];
          const { promise, cancel } = loader.load(op);
          let _res = void 0;
          promise.then((res) => {
            _res = res;
            const transformed = transformResult(res.json, runtime);
            if (!transformed.ok) {
              observer.error(TRPCClientError.from(transformed.error, {
                meta: res.meta
              }));
              return;
            }
            observer.next({
              context: res.meta,
              result: transformed.result
            });
            observer.complete();
          }).catch((err) => {
            observer.error(TRPCClientError.from(err, {
              meta: _res == null ? void 0 : _res.meta
            }));
          });
          return () => {
            cancel();
          };
        });
      };
    };
  };
}
const batchRequester = (requesterOpts) => {
  return (batchOps) => {
    const path = batchOps.map((op) => op.path).join(",");
    const inputs = batchOps.map((op) => op.input);
    const { promise, cancel } = jsonHttpRequester({
      ...requesterOpts,
      path,
      inputs,
      headers() {
        if (!requesterOpts.opts.headers) {
          return {};
        }
        if (typeof requesterOpts.opts.headers === "function") {
          return requesterOpts.opts.headers({
            opList: batchOps
          });
        }
        return requesterOpts.opts.headers;
      }
    });
    return {
      promise: promise.then((res) => {
        const resJSON = Array.isArray(res.json) ? res.json : batchOps.map(() => res.json);
        const result = resJSON.map((item) => ({
          meta: res.meta,
          json: item
        }));
        return result;
      }),
      cancel
    };
  };
};
const httpBatchLink = createHTTPBatchLink(batchRequester);
class TRPCUntypedClient {
  $request({ type, input, path, context = {} }) {
    const chain$ = createChain({
      links: this.links,
      op: {
        id: ++this.requestId,
        type,
        path,
        input,
        context
      }
    });
    return chain$.pipe(share());
  }
  requestAsPromise(opts) {
    const req$ = this.$request(opts);
    const { promise, abort } = observableToPromise(req$);
    const abortablePromise = new Promise((resolve, reject) => {
      var _a2;
      (_a2 = opts.signal) == null ? void 0 : _a2.addEventListener("abort", abort);
      promise.then((envelope) => {
        resolve(envelope.result.data);
      }).catch((err) => {
        reject(TRPCClientError.from(err));
      });
    });
    return abortablePromise;
  }
  query(path, input, opts) {
    return this.requestAsPromise({
      type: "query",
      path,
      input,
      context: opts == null ? void 0 : opts.context,
      signal: opts == null ? void 0 : opts.signal
    });
  }
  mutation(path, input, opts) {
    return this.requestAsPromise({
      type: "mutation",
      path,
      input,
      context: opts == null ? void 0 : opts.context,
      signal: opts == null ? void 0 : opts.signal
    });
  }
  subscription(path, input, opts) {
    const observable$ = this.$request({
      type: "subscription",
      path,
      input,
      context: opts == null ? void 0 : opts.context
    });
    return observable$.subscribe({
      next(envelope) {
        var _a2, _b2, _c2;
        if (envelope.result.type === "started") {
          (_a2 = opts.onStarted) == null ? void 0 : _a2.call(opts);
        } else if (envelope.result.type === "stopped") {
          (_b2 = opts.onStopped) == null ? void 0 : _b2.call(opts);
        } else {
          (_c2 = opts.onData) == null ? void 0 : _c2.call(opts, envelope.result.data);
        }
      },
      error(err) {
        var _a2;
        (_a2 = opts.onError) == null ? void 0 : _a2.call(opts, err);
      },
      complete() {
        var _a2;
        (_a2 = opts.onComplete) == null ? void 0 : _a2.call(opts);
      }
    });
  }
  constructor(opts) {
    this.requestId = 0;
    const combinedTransformer = (() => {
      const transformer = opts.transformer;
      if (!transformer) {
        return {
          input: {
            serialize: (data) => data,
            deserialize: (data) => data
          },
          output: {
            serialize: (data) => data,
            deserialize: (data) => data
          }
        };
      }
      if ("input" in transformer) {
        return opts.transformer;
      }
      return {
        input: transformer,
        output: transformer
      };
    })();
    this.runtime = {
      transformer: {
        serialize: (data) => combinedTransformer.input.serialize(data),
        deserialize: (data) => combinedTransformer.output.deserialize(data)
      },
      combinedTransformer
    };
    this.links = opts.links.map((link) => link(this.runtime));
  }
}
const clientCallTypeMap = {
  query: "query",
  mutate: "mutation",
  subscribe: "subscription"
};
const clientCallTypeToProcedureType = (clientCallType) => {
  return clientCallTypeMap[clientCallType];
};
function createTRPCClientProxy(client2) {
  return createFlatProxy((key) => {
    if (client2.hasOwnProperty(key)) {
      return client2[key];
    }
    if (key === "__untypedClient") {
      return client2;
    }
    return createRecursiveProxy(({ path, args }) => {
      const pathCopy = [
        key,
        ...path
      ];
      const procedureType = clientCallTypeToProcedureType(pathCopy.pop());
      const fullPath = pathCopy.join(".");
      return client2[procedureType](fullPath, ...args);
    });
  });
}
function createTRPCProxyClient(opts) {
  const client2 = new TRPCUntypedClient(opts);
  const proxy = createTRPCClientProxy(client2);
  return proxy;
}
const mkTrpc = (port) => createTRPCProxyClient({
  links: [
    httpBatchLink({
      url: `http://localhost:${port}/trpc`
    })
  ]
});
const trpc = mkTrpc((_h = (_g = globalThis == null ? void 0 : globalThis.location) == null ? void 0 : _g.port) != null ? _h : 3e3);
const _appState = {
  projectPath: "Not loaded",
  error: "",
  traceFiles: {},
  data: []
};
const appState = reactive(_appState);
trpc.projectPath.query().then((path) => appState.projectPath = path != null ? path : ".").catch(() => {
});
function processTraceData() {
  const data = [];
  for (const fileName in appState.traceFiles) {
    data.push(...appState.traceFiles[fileName].data);
  }
  data.sort((a, b) => a.ts - b.ts);
  for (let i = 0; i < data.length; i++) {
    data[i].idx = i;
  }
  appState.data = data;
  return data;
}
export { QItemLabel as Q, useDark as a, useModelToggleProps as b, clearSelection as c, useModelToggleEmits as d, useTimeout as e, useModelToggle as f, useHistory as g, between as h, usePreventScroll as i, getScrollTarget as j, getVerticalScrollPosition as k, getHorizontalScrollPosition as l, getScrollbarWidth as m, appState as n, QItem as o, processTraceData as p, normalizeToInterval as q, scrollTargetProp as s, trpc as t, useDarkProps as u };
