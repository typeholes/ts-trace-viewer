"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/trpcRouter.ts
function mkAppRouter(vs2, tsTraceViewer2) {
  const t = import_server.initTRPC.create();
  tsTraceViewer2 ??= {
    durationWarning: 15,
    addTraceDiagnostic: () => {
    },
    clearTraceDiagnostic: () => {
    }
  };
  const appRouter = t.router({
    durationWarning: t.procedure.query(() => {
      return tsTraceViewer2.durationWarning;
    }),
    clearWarnings: t.procedure.query(() => {
      tsTraceViewer2.clearTraceDiagnostic();
      return "cleared";
    }),
    addWarning: t.procedure.input(addWarningArgs).query((opts) => {
      const { fileName, pos, end, duration } = opts.input;
      tsTraceViewer2.addTraceDiagnostic(fileName, pos, end, duration);
      return "added";
    }),
    ping: t.procedure.query(() => {
      if (vs2) {
        vs2.window.showInformationMessage("pinged from front end");
        return "pinged";
      } else {
        return "no vs";
      }
    }),
    projectPath: t.procedure.query(() => {
      if (!vs2) {
        return "/home/hw/projects/ts-diag-transform";
      }
      return vs2.workspace.workspaceFolders?.[0]?.name;
    }),
    openFile: t.procedure.input(import_zod.z.string()).query((opts) => {
      const fileName = opts.input;
      vs2.commands.executeCommand("vscode.open", vs2.Uri.parse(fileName));
      return "opened";
    })
  });
  return appRouter;
}
var import_zod, import_server, import_client, addWarningArgs, mkTrpc, trpc;
var init_trpcRouter = __esm({
  "src/trpcRouter.ts"() {
    "use strict";
    import_zod = require("zod");
    import_server = require("@trpc/server");
    import_client = require("@trpc/client");
    addWarningArgs = import_zod.z.object({
      fileName: import_zod.z.string(),
      pos: import_zod.z.number(),
      end: import_zod.z.number(),
      duration: import_zod.z.number()
    });
    mkTrpc = (port2) => (0, import_client.createTRPCProxyClient)({
      links: [
        (0, import_client.httpBatchLink)({
          url: `http://localhost:${port2}/trpc`
        })
      ]
    });
    trpc = mkTrpc(globalThis?.location?.port ?? "3000");
  }
});

// src-ssr/middlewares/vscodeApi.ts
var vscodeApi_exports = {};
__export(vscodeApi_exports, {
  default: () => vscodeApi_default
});
var import_wrappers2, trpcExpress, vs, vscodeApi_default;
var init_vscodeApi = __esm({
  "src-ssr/middlewares/vscodeApi.ts"() {
    "use strict";
    import_wrappers2 = require("quasar/wrappers");
    trpcExpress = __toESM(require("@trpc/server/adapters/express"));
    init_trpcRouter();
    globalThis.tsTraceViewer ??= {
      durationWarning: 15,
      addTraceDiagnostic: () => {
      },
      clearTraceDiagnostic: () => {
      }
    };
    vs = globalThis.vs;
    vscodeApi_default = (0, import_wrappers2.ssrMiddleware)(
      async ({ app: app2 }) => {
        const appRouter = mkAppRouter(vs, tsTraceViewer);
        const createContext = ({
          req,
          res
        }) => ({});
        app2.use(
          "/trpc",
          trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext
          })
        );
      }
    );
  }
});

// src-ssr/middlewares/render.ts
var render_exports = {};
__export(render_exports, {
  default: () => render_default
});
var import_wrappers3, render_default;
var init_render = __esm({
  "src-ssr/middlewares/render.ts"() {
    "use strict";
    import_wrappers3 = require("quasar/wrappers");
    render_default = (0, import_wrappers3.ssrMiddleware)(({ app: app2, resolve, render: render2, serve }) => {
      app2.get(resolve.urlPath("*"), (req, res) => {
        res.setHeader("Content-Type", "text/html");
        render2({ req, res }).then((html) => {
          res.send(html);
        }).catch((err) => {
          if (err.url) {
            if (err.code) {
              res.redirect(err.code, err.url);
            } else {
              res.redirect(err.url);
            }
          } else if (err.code === 404) {
            res.status(404).send("404 | Page Not Found");
          } else if (false) {
            serve.error({ err, req, res });
          } else {
            res.status(500).send("500 | Internal Server Error");
            if (false) {
              console.error(err.stack);
            }
          }
        });
      });
    });
  }
});

// .quasar/ssr-prod-webserver.js
var ssr_prod_webserver_exports = {};
__export(ssr_prod_webserver_exports, {
  default: () => ssr_prod_webserver_default
});
module.exports = __toCommonJS(ssr_prod_webserver_exports);
var import_path = require("path");
var import_server_renderer = require("vue/server-renderer");
var import_render_template = __toESM(require("./render-template.js"));
var import_quasar_manifest = __toESM(require("./quasar.manifest.json"));
var import_server_entry = __toESM(require("./server/server-entry.js"));

// src-ssr/server.ts
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_wrappers = require("quasar/wrappers");
var create = (0, import_wrappers.ssrCreate)(() => {
  const app2 = (0, import_express.default)();
  app2.disable("x-powered-by");
  if (true) {
    app2.use((0, import_compression.default)());
  }
  return app2;
});
var listen = (0, import_wrappers.ssrListen)(async ({ app: app2, port: port2, isReady: isReady2 }) => {
  await isReady2();
  return app2.listen(port2, () => {
    if (true) {
      console.log("Server listening at port " + port2);
    }
  });
});
var close = (0, import_wrappers.ssrClose)(({ listenResult }) => {
  return listenResult.close();
});
var maxAge = false ? 0 : 1e3 * 60 * 60 * 24 * 30;
var serveStaticContent = (0, import_wrappers.ssrServeStaticContent)((path, opts) => {
  return import_express.default.static(path, {
    maxAge,
    ...opts
  });
});
var jsRE = /\.js$/;
var cssRE = /\.css$/;
var woffRE = /\.woff$/;
var woff2RE = /\.woff2$/;
var gifRE = /\.gif$/;
var jpgRE = /\.jpe?g$/;
var pngRE = /\.png$/;
var renderPreloadTag = (0, import_wrappers.ssrRenderPreloadTag)((file) => {
  if (jsRE.test(file) === true) {
    return `<link rel="modulepreload" href="${file}" crossorigin>`;
  }
  if (cssRE.test(file) === true) {
    return `<link rel="stylesheet" href="${file}">`;
  }
  if (woffRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  }
  if (woff2RE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  }
  if (gifRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/gif">`;
  }
  if (jpgRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  }
  if (pngRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/png">`;
  }
  return "";
});

// .quasar/ssr-middlewares.js
function injectMiddlewares(opts) {
  return Promise.all([
    Promise.resolve().then(() => (init_vscodeApi(), vscodeApi_exports)),
    Promise.resolve().then(() => (init_render(), render_exports))
  ]).then(async (rawMiddlewares) => {
    const middlewares = rawMiddlewares.map((entry) => entry.default);
    for (let i = 0; i < middlewares.length; i++) {
      try {
        await middlewares[i](opts);
      } catch (err) {
        console.error("[Quasar SSR] middleware error:", err);
        return;
      }
    }
  });
}

// .quasar/ssr-prod-webserver.js
var port = process.env.PORT || 3e3;
var doubleSlashRE = /\/\//g;
var publicPath = `/`;
var resolveUrlPath = publicPath === "/" ? (url) => url || "/" : (url) => url ? (publicPath + url).replace(doubleSlashRE, "/") : publicPath;
var rootFolder = __dirname;
var publicFolder = (0, import_path.join)(__dirname, "client");
function resolvePublicFolder() {
  return (0, import_path.join)(publicFolder, ...arguments);
}
function renderModulesPreload(modules) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = import_quasar_manifest.default[id];
    if (files === void 0) {
      return;
    }
    files.forEach((file) => {
      if (seen.has(file) === true) {
        return;
      }
      seen.add(file);
      const filename = (0, import_path.basename)(file);
      if (import_quasar_manifest.default[filename] !== void 0) {
        for (const depFile of import_quasar_manifest.default[filename]) {
          links += renderPreloadTag(depFile);
          seen.add(depFile);
        }
      }
      links += renderPreloadTag(file);
    });
  });
  return links;
}
async function render(ssrContext) {
  const onRenderedList = [];
  Object.assign(ssrContext, {
    _meta: {},
    onRendered: (fn) => {
      onRenderedList.push(fn);
    }
  });
  try {
    const renderFn = await (0, import_server_entry.default)(ssrContext);
    const runtimePageContent = await (0, import_server_renderer.renderToString)(renderFn, ssrContext);
    onRenderedList.forEach((fn) => {
      fn();
    });
    typeof ssrContext.rendered === "function" && ssrContext.rendered();
    ssrContext._meta.runtimePageContent = runtimePageContent;
    ssrContext._meta.endingHeadTags += renderModulesPreload(ssrContext.modules);
    return (0, import_render_template.default)(ssrContext);
  } catch (err) {
    throw err;
  }
}
var serveStatic = (path, opts = {}) => serveStaticContent(resolvePublicFolder(path), opts);
var middlewareParams = {
  port,
  resolve: {
    urlPath: resolveUrlPath,
    root() {
      return (0, import_path.join)(rootFolder, ...arguments);
    },
    public: resolvePublicFolder
  },
  publicPath,
  folders: {
    root: rootFolder,
    public: publicFolder
  },
  render: (ssrContext) => render(ssrContext),
  serve: {
    static: serveStatic
  }
};
var app = create(middlewareParams);
middlewareParams.app = app;
app.use(resolveUrlPath("/"), serveStatic("."));
var isReady = () => injectMiddlewares(middlewareParams);
var ssrHandler = (req, res, next) => {
  return isReady().then(() => app(req, res, next));
};
var ssr_prod_webserver_default = listen({
  isReady,
  ssrHandler,
  ...middlewareParams
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
