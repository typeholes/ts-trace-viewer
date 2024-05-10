import * as vscode from 'vscode';

export function webView() {
   const panel = vscode.window.createWebviewPanel(
      'tsTraceView',
      'TS Trace View',
      vscode.ViewColumn.One,
      {
         enableScripts: true,
         retainContextWhenHidden: true,
      }
   );
   panel.webview.html = getWebviewContent();
}

function getWebviewContent() {
   return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TS Trace Viewer</title>
</head>
<body>
    <iframe src="http://localhost:3000/" width="100%" height="100vh" style="border:1px solid black; height:100vh">
</iframe>
</body
</html>
`;
}
