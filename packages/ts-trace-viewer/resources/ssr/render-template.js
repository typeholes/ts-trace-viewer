module.exports=function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html>\n<html ' +
((__t = ( _meta.htmlAttrs )) == null ? '' : __t) +
'>\n  <head>' +
((__t = ( _meta.headTags )) == null ? '' : __t) +
'\n    <title>ts-trace-viewer-ssr</title>\n\n    <meta charset="utf-8">\n    <meta name="description" content="front end for ts-trace-viewer">\n    <meta name="format-detection" content="telephone=no">\n    <meta name="msapplication-tap-highlight" content="no">\n    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">\n\n    <link rel="icon" type="image/png" sizes="128x128" href="/icons/favicon-128x128.png">\n    <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png">\n    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">\n    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">\n    <link rel="icon" type="image/ico" href="/favicon.ico">\n    <script type="module" crossorigin src="/assets/index.6747db59.js"></script>\n    <link rel="stylesheet" href="/assets/index.138fb746.css">\n  ' +
((__t = ( _meta.endingHeadTags || '' )) == null ? '' : __t) +
'</head>\n  <body class="' +
((__t = ( _meta.bodyClasses )) == null ? '' : __t) +
'" ' +
((__t = ( _meta.bodyAttrs )) == null ? '' : __t) +
'>' +
((__t = ( _meta.bodyTags )) == null ? '' : __t) +
'\n    <div id="q-app">' +
((__t = ( _meta.runtimePageContent )) == null ? '' : __t) +
'</div>\n  </body>\n</html>\n';

}
return __p
}