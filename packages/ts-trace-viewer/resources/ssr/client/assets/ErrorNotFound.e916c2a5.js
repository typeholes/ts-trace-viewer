import { Q as QBtn } from "./QBtn.f91393a2.js";
import { F as defineComponent, G as openBlock, H as createElementBlock, N as createBaseVNode, I as createVNode } from "./index.6747db59.js";
import "./use-router-link.5a78fe4c.js";
const _hoisted_1 = { class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { style: { "font-size": "30vh" } }, " 404 ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", {
  class: "text-h2",
  style: { "opacity": ".4" }
}, " Oops. Nothing here... ", -1);
const _sfc_main = defineComponent({
  ...{
    name: "ErrorNotFound"
  },
  __name: "ErrorNotFound",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          _hoisted_2,
          _hoisted_3,
          createVNode(QBtn, {
            class: "q-mt-xl",
            color: "white",
            "text-color": "blue",
            unelevated: "",
            to: "/",
            label: "Go Home",
            "no-caps": ""
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
