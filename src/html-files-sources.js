// This module simply defines several HTML quantities as text strings.
// This avoids the need for the application to carry along 
// resource functions that need to be available and read in.

"use strict;"
// Sinorca Screen is the main CSS file used to display the apg output in HTML format.
// All of the pages, `/html/console.html`, etc. use it.
/*******************************************************************************************************************************
 * TITLE: Sinorca Screen Stylesheet * URI : sinorca/sinorca-screen.css * MODIF: 2003-Apr-30 19:31 +0800 *
 ******************************************************************************************************************************/
exports.screenCss = function(){
  var html = '';
  html = '<style media="screen">';
  html += "pre {";
  html += "line-height: 1.2em;";
  html += "font-size: 1.2em;";0
  html += "}";
  html += "body {";
  html += "color: black;";
  html += "background-color: rgb(240, 240, 240);";
  html += "font-family: verdana, helvetica, arial, sans-serif;";
  html += "font-size: 71%; /* Enables font size scaling in MSIE */";
  html += "margin: 0;";
  html += "padding: 0;";
  html += "}";
  html += "html>body {";
  html += "font-size: 8.5pt;";
  html += "}";
  html += "acronym, .titleTip {";
  html += "border-bottom: 1px dotted rgb(153, 153, 153);";
  html += "cursor: help;";
  html += "margin: 0;";
  html += "padding: 0 0 0.4px 0;";
  html += "}";
  html += ".doNotDisplay {";
  html += "display: none;";
  html += "}";
  html += ".smallCaps {";
  html += "font-size: 110%;";
  html += "font-variant: small-caps;";
  html += "}";
  html += ".superHeader {";
  html += "color: white;";
  html += "background-color: rgb(100, 135, 220);";
  html += "height: 2em;";
  html += "}";
  html += ".superHeader a {";
  html += "color: white;";
  html += "background-color: transparent;";
  html += "text-decoration: none;";
  html += "font-size: 91%;";
  html += "margin: 0;";
  html += "padding: 0 0.5ex 0 0.25ex;";
  html += "}";
  html += ".superHeader a:hover {";
  html += "text-decoration: underline;";
  html += "}";
  html += ".superHeader .left {";
  html += "position: absolute;";
  html += "left: 1.5mm;";
  html += "top: 0.75ex;";
  html += "}";
  html += ".superHeader .right {";
  html += "position: absolute;";
  html += "right: 1.5mm;";
  html += "top: 0.75ex;";
  html += "}";
  html += ".midHeader {";
  html += "color: rgb(39, 78, 144);";
  html += "background-color: rgb(140, 170, 230);";
  html += "}";
  html += ".headerTitle {";
  html += "font-size: 337%;";
  html += "font-weight: normal;";
  html += "margin: 0 0 0 4mm;";
  html += "padding: 0.25ex 0;";
  html += "}";
  html += ".subHeader {";
  html += "color: white;";
  html += "background-color: rgb(0, 51, 153);";
  html += "margin: 0;";
  html += "padding: 1ex 1ex 1ex 1.5mm;";
  html += "}";
  html += ".subHeader a {";
  html += "color: white;";
  html += "background-color: transparent;";
  html += "text-decoration: none;";
  html += "font-weight: bold;";
  html += "margin: 0;";
  html += "padding: 0 0.75ex 0 0.5ex;";
  html += "}";
  html += ".subHeader a:hover {";
  html += "text-decoration: underline;";
  html += "}";
  html += ".superHeader .highlight, .subHeader .highlight {";
  html += "color: rgb(253, 160, 91);";
  html += "background-color: transparent;";
  html += "}";
  html += "#side-bar {";
  html += "width: 15em;";
  html += "float: left;";
  html += "clear: left;";
  html += "border-right: 1px solid rgb(153, 153, 153);";
  html += "}";
  html += "#side-bar div {";
  html += "border-bottom: 1px solid rgb(153, 153, 153);";
  html += "}";
  html += ".sideBarTitle {";
  html += "font-weight: bold;";
  html += "margin: 0 0 0.5em 2.5mm;";
  html += "padding: 1em 0 0 0;";
  html += "}";
  html += "#side-bar ul {";
  html += "list-style-type: none;";
  html += "list-style-position: outside;";
  html += "margin: 0;";
  html += "padding: 0 0 1.1em 0;";
  html += "}";
  html += "#side-bar li {";
  html += "margin: 0;";
  html += "padding: 0.1ex 0; /* Circumvents a rendering bug (?) in MSIE 6.0 */";
  html += "}";
  html += "#side-bar a, .thisPage {";
  html += "color: rgb(0, 102, 204);";
  html += "background-color: transparent;";
  html += "text-decoration: none;";
  html += "margin: 0;";
  html += "padding: 0.75em 1ex 0.75em 5mm;";
  html += "display: block;";
  html += "}";
  html += ".thisPage {";
  html += "color: black;";
  html += "background-color: white;";
  html += "padding-left: 4mm;";
  html += "border-top: 1px solid rgb(153, 153, 153);";
  html += "border-bottom: 1px solid rgb(153, 153, 153);";
  html += "}";
  html += "#side-bar a:hover {";
  html += "color: white;";
  html += "background-color: rgb(100, 135, 220);";
  html += "text-decoration: none;";
  html += "}";
  html += ".sideBarText {";
  html += "line-height: 1.5em;";
  html += "margin: 0 0 1em 0;";
  html += "padding: 0 1.5ex 0 2.5mm;";
  html += "display: block;";
  html += "}";
  html += "#side-bar .sideBarText a {";
  html += "text-decoration: underline;";
  html += "margin: 0;";
  html += "padding: 0;";
  html += "display: inline;";
  html += "}";
  html += "#side-bar .sideBarText a:hover {";
  html += "color: rgb(0, 102, 204);";
  html += "background-color: transparent;";
  html += "text-decoration: none;";
  html += "}";
  html += ".lighterBackground {";
  html += "color: inherit;";
  html += "background-color: white;";
  html += "}";
  html += "#main-copy {";
  html += "color: black;";
  html += "background-color: white;";
  html += "text-align: justify;";
  html += "line-height: 1.5em;";
  html += "margin: 0 0 0 15em;";
  html += "padding: 0.5mm 5mm 5mm 5mm;";
  html += "border-left: 1px solid rgb(153, 153, 153);";
  html += "}";
  html += "#main-copy p {";
  html += "margin: 1em 1ex 2em 1ex;";
  html += "padding: 0;";
  html += "}";
  html += "#main-copy a {";
  html += "color: rgb(0, 102, 204);";
  html += "background-color: transparent;";
  html += "text-decoration: underline;";
  html += "}";
  html += "#main-copy a:hover {";
  html += "text-decoration: none;";
  html += "}";
  html += "#main-copy h1 {";
  html += "color: white;";
  html += "background-color: rgb(100, 135, 220);";
  html += "font-size: 100%;";
  html += "font-weight: bold;";
  html += "margin: 3em 0 0 0;";
  html += "padding: 0.5ex 0 0.5ex 1ex;";
  html += "}";
  html += "#main-copy .topOfPage {";
  html += "color: white;";
  html += "background-color: transparent;";
  html += "font-size: 91%;";
  html += "font-weight: bold;";
  html += "text-decoration: none;";
  html += "margin: 2.5ex 1ex 0 0; /* For MSIE */";
  html += "padding: 0;";
  html += "float: right;";
  html += "}";
  html += "#main-copy>.topOfPage {";
  html += "margin: 2.75ex 1ex 0 0; /* For fully standards-compliant user agents */";
  html += "}";
  html += "dl {";
  html += "margin: 1em 1ex 2em 1ex;";
  html += "padding: 0;";
  html += "}";
  html += "dt {";
  html += "font-weight: bold;";
  html += "margin: 0 0 0 0;";
  html += "padding: 0;";
  html += "}";
  html += "dd {";
  html += "margin: 0 0 2em 2em;";
  html += "padding: 0;";
  html += "}";
  html += "#footer {";
  html += "color: white;";
  html += "background-color: rgb(100, 135, 220);";
  html += "font-size: 91%;";
  html += "margin: 0;";
  html += "padding: 1em 2.5mm 2.5ex 2.5mm;";
  html += "clear: both;";
  html += "}";
  html += "#footer .left {";
  html += "line-height: 1.45em;";
  html += "float: left;";
  html += "clear: left;";
  html += "}";
  html += "#footer .right {";
  html += "text-align: right;";
  html += "line-height: 1.45em;";
  html += "}";
  html += "#footer a {";
  html += "color: white;";
  html += "background-color: transparent;";
  html += "text-decoration: underline;";
  html += "}";
  html += "#footer a:hover {";
  html += "text-decoration: none;";
  html += "}";
  html += '</style>\n';
  return html;
}
//An alternative CSS style sheet to be used for printing an HTML page.
/*******************************************************************************************************************************
 * TITLE: Sinorca Print Stylesheet * URI : sinorca/sinorca-print.css * MODIF: 2003-May-01 19:30 +0800 *
 ******************************************************************************************************************************/
exports.printCss = function(){
  var html = '';
  html = '<style media="print">';
  html += 'body {';
  html += 'color: black;';
  html += 'background-color: white;';
  html += 'font-family: "times new roman", times, roman, serif;';
  html += 'font-size: 12pt;';
  html += 'margin: 0;';
  html += 'padding: 0;';
  html += '}';
  html += 'acronym, .titleTip {';
  html += 'font-style: italic;';
  html += 'border-bottom: none;';
  html += '}';
  html += 'acronym:after, .titleTip:after {  /* Prints titles after the acronyms/titletips. Doesn\'t work in MSIE */';
  html += 'content: "(" attr(title) ")\n  font-size: 90%;';
  html += 'font-style: normal;';
  html += 'padding-left: 1ex;';
  html += '}';
  html += '.doNotPrint {';
  html += 'display: none !important;';
  html += '}';
  html += '#header {';
  html += 'margin: 0;';
  html += 'padding: 0;';
  html += 'border-bottom: 1px solid black;';
  html += '}';
  html += '.superHeader {';
  html += 'display: none;';
  html += '}';
  html += '.headerTitle {';
  html += 'color: black;';
  html += 'background-color: transparent;';
  html += 'font-family: "trebuchet ms", verdana, helvetica, arial, sans-serif;';
  html += 'font-size: 200%;';
  html += 'font-weight: normal;';
  html += 'text-decoration: none;';
  html += 'margin: 0;';
  html += 'padding: 0 0 0.5ex 0;';
  html += '}';
  html += '.subHeader {';
  html += 'display: none;';
  html += '}';
  html += '#side-bar {';
  html += 'display: none;';
  html += '}';
  html += '#main-copy {';
  html += 'text-align: justify;';
  html += 'margin: 0;';
  html += 'padding: 0;';
  html += '}';
  html += '#main-copy h1 {';
  html += 'font-family: "trebuchet ms", verdana, helvetica, arial, sans-serif;';
  html += 'font-size: 120%;';
  html += 'margin: 2ex 0 1ex 0;';
  html += 'padding: 0;';
  html += '}';
  html += '#main-copy a {';
  html += 'color: black;';
  html += 'background-color: transparent;';
  html += 'text-decoration: none;';
  html += '}';
  html += '#main-copy a:after {  /* Prints the links\' URIs after the links\' texts.Doesn\'t work in MSIE */';
  html += 'content: "<" attr(href) ">\n  font-size: 90%;';
  html += 'padding-left: 1ex;';
  html += '}';
  html += 'p {';
  html += 'margin: 0 0 2ex 0;';
  html += 'padding: 0;';
  html += '}';
  html += 'dl {';
  html += 'margin: 0;';
  html += 'padding: 0;';
  html += '}';
  html += 'dt {';
  html += 'font-weight: bold;';
  html += 'margin: 0;';
  html += 'padding: 0 0 1ex 0;';
  html += '}';
  html += 'dd {';
  html += 'margin: 0 0 2ex 1.5em;';
  html += 'padding: 0;';
  html += '}';
  html += '.topOfPage {';
  html += 'display: none;';
  html += '}';
  html += '#footer {';
  html += 'margin: 2em 0 0 0;';
  html += 'padding: 1ex 0 0 0;';
  html += 'border-top: 1px solid black;';
  html += '}';
  html += '#footer a {';
  html += 'color: black;';
  html += 'background-color: transparent;';
  html += 'text-decoration: none;';
  html += '}';
  html += '</style>\n';
  return html;
}
//Attributes table style.
exports.attrsStyle = function(){
  var html = '';
  html = "<style>";
  html += ".attr-table{\n";
  html += "font-family:monospace;\n";
  html += "font-size:100%;\n";
  html += "font-style:normal;\n";
  html += "font-weight:normal;\n";
  html += "border:1px solid black;\n";
  html += "border-collapse:collapse;\n";
  html += "}\n";
  html += ".attr-table th,\n";
  html += ".attr-table td{\n";
  html += "text-align:center;\n";
  html += "border:1px solid black;\n";
  html += "border-collapse:collapse;\n";
  html += "}\n";
  html += ".attr-table caption{font-size:125%;font-weight:bold;text-align:left;}\n";
  html += ".attr-table th:nth-child(1){text-align:right;}\n";
  html += ".attr-table th:nth-child(2){text-align:right;}\n";
  html += ".attr-table td:nth-child(1){text-align:right;}\n";
  html += ".attr-table td:nth-child(2){text-align:right;}\n";
  html += "</style>\n";
  return html;
}
// This is the JavaScript code for sorting the rule list
// as well for the show/hide anchors for the list of dependent rules.
// The `window.onload` function is written to work even if `jQuery` is not available.
// In that case the table will display, but the anchors for sorting will not work.
// Uses the `<script>` data written to the page by
// [rulesWithReferencesToHtml()](./attributes.html#section-12)
exports.rulesSort = function(classname){
  var html = '';
  html = '<script type="text/javascript">\n'
  html += "\"use strict;\"\n";
  html += "\n";
  html += 'window.onload = function() {\n';
  html += 'if(window.jQuery){\n';
  html += '    sort({data: "index"});\n';
  html += '  }else{\n';
  html += '    var el = document.getElementById("sort-links");\n';
  html += '    el.innerHTML = tableGen();\n';
  html += '  }\n';
  html += '}\n';
  html += "\n";
  html += "function sortByNameDown(lhs, rhs){\n";
  html += " if(lhs.name < rhs.name){\n";
  html += "   return -1;\n";
  html += " }\n";
  html += " if(lhs.name > rhs.name){\n";
  html += "   return 1;\n";
  html += " }\n";
  html += " return 0;\n";
  html += "}\n";
  html += "function sortByNameUp(lhs, rhs){\n";
  html += " if(lhs.name < rhs.name){\n";
  html += "   return 1;\n";
  html += " }\n";
  html += " if(lhs.name > rhs.name){\n";
  html += "   return -1;\n";
  html += " }\n";
  html += " return 0;\n";
  html += "}\n";
  html += "function sortByIndexDown(lhs, rhs){\n";
  html += " if(lhs.index < rhs.index){\n";
  html += "   return -1;\n";
  html += " }\n";
  html += " if(lhs.index > rhs.index){\n";
  html += "   return 1;\n";
  html += " }\n";
  html += " return 0;\n";
  html += "}\n";
  html += "function sortByIndexUp(lhs, rhs){\n";
  html += " if(lhs.index < rhs.index){\n";
  html += "   return 1;\n";
  html += " }\n";
  html += " if(lhs.index > rhs.index){\n";
  html += "   return -1;\n";
  html += " }\n";
  html += " return 0;\n";
  html += "}\n";
  html += "function sort(e) {\n";
  html += " if(e.data === \"index\"){\n";
  html += "   if(tableData.indexSort === \"down\"){\n";
  html += "     tableData.rows.sort(sortByIndexUp);\n";
  html += "     tableData.indexSort = \"up\"\n";
  html += "   }else{\n";
  html += "     tableData.rows.sort(sortByIndexDown);\n";
  html += "     tableData.indexSort = \"down\"\n";
  html += "   }\n";
  html += " }else{\n";
  html += "   if(tableData.nameSort === \"down\"){\n";
  html += "     tableData.rows.sort(sortByNameUp);\n";
  html += "     tableData.nameSort = \"up\"\n";
  html += "   }else{\n";
  html += "     tableData.rows.sort(sortByNameDown);\n";
  html += "     tableData.nameSort = \"down\"\n";
  html += "   }\n";
  html += " }\n";
  html += " $(\"div#sort-links\").html(tableGen());\n";
  html += " $(\"#sort-links a.sortIndex\").click(\"index\", sort);\n";
  html += " $(\"#sort-links a.sortName\").click(\"name\", sort);\n";
  html += " $(\"#sort-links a.sortExpand\").click(\"show\", showAll);\n";
  html += " $(\"#sort-links a.sortCollapse\").click(\"hide\", showAll);\n";
  html += " tableData.rows.forEach(function(row) {\n";
  html += "   var text = $(\"#sort-links a.show-\" + row.name);\n";
  html += "   text.click(row, show);\n";
  html += "   if(row.visible === true){\n";
  html += "     text.html(\"hide\");\n";
  html += "     $(\"#sort-links tr.tr-\" + row.name).show();\n";
  html += "   }else{\n";
  html += "     text.html(\"show\");\n";
  html += "     $(\"#sort-links tr.tr-\" + row.name).hide();\n";
  html += "   }\n";
  html += " });\n";
  html += "}\n";
  html += "function showAll(e){\n";
  html += " tableData.rows.forEach(function(row){\n";
  html += "   var text = $(\"#sort-links a.show-\" + row.name);\n";
  html += "   var line = $(\"#sort-links tr.tr-\" + row.name);\n";
  html += "   if(e.data === \"show\"){\n";
  html += "     text.html(\"hide\");\n";
  html += "     $(\"#sort-links tr.tr-\" + row.name).show();\n";
  html += "     row.visible = true;\n";
  html += "   }else{\n";
  html += "     text.html(\"show\");\n";
  html += "     $(\"#sort-links tr.tr-\" + row.name).hide();\n";
  html += "     row.visible = false;\n";
  html += "   }\n";
  html += " });\n";
  html += "}\n";
  html += "function show(e) {\n";
  html += " var row = e.data;\n";
  html += " var text = $(e.target);\n";
  html += " if(row.visible === true){\n";
  html += "   text.html(\"show\");\n";
  html += "   $(\"#sort-links tr.tr-\" + row.name).hide();\n";
  html += "   row.visible = false;\n";
  html += " }else{\n";
  html += "   text.html(\"hide\");\n";
  html += "   $(\"#sort-links tr.tr-\" + row.name).show();\n";
  html += "   row.visible = true;\n";
  html += " }\n";
  html += "}\n";
  html += "function tableGen(e) {\n";
  html += " var title = \"Rules with Dependencies\"\n";
  html += " var html = \"\";\n";
  html += " html += '<table class=\""+classname+"\">';\n";
  html += " html += '<caption>' + title;\n";
  html += " html += '<br><a class=sortExpand href=\"#\">show all<\/a><br><a class=sortCollapse href=\"#\">hide all<\/a>';\n";
  html += " html += '<\/caption>';\n";
  html += " html += '<tr><th><a class=\"sortIndex\" href=\"#\">index<\/a><\/th><th><a class=\"sortName\" href=\"#\">rule<\/a><\/th><th>refers to<\/th><\/tr>';\n";
  html += " tableData.rows.forEach(function(rule) {\n";
  html += "   if (rule.dependents.length > 0) {\n";
  html += "     html += '<tr><td>' + rule.index + '<\/td><td>' + rule.name\n";
  html += "         + '<\/td><td><a class=\"show-' + rule.name\n";
  html += "         + '\" href=\"#\">hide<\/a><\/td><\/tr>';\n";
  html += "     html += '<div class=\"div-' + rule.name + '\">';\n";
  html += "     for (var i = 0; i < rule.dependents.length; i += 1) {\n";
  html += "       var obj = rule.dependents[i];\n";
  html += "       html += '<tr class=\"tr-' + rule.name + '\"><td><\/td><td>'\n";
  html += "           + obj.index + '<\/td><td>' + obj.name\n";
  html += "           + '<\/td><\/tr>';\n";
  html += "     }\n";
  html += "   } else {\n";
  html += "     html += '<tr><td>' + rule.index + '<\/td><td>' + rule.name\n";
  html += "         + '<\/td><td><\/td><\/tr>';\n";
  html += "   }\n";
  html += " });\n";
  html += " html += \"<\/table>\";\n";
  html += " return html;\n";
  html += "}<\/script>\n";
  return html;
}
// This is the JavaScript code for sorting the attributes list
// on the `html/attributes.html` page.
// The `window.onload` function is written to work even if `jQuery` is not available.
// In that case the table will display, but the anchors for sorting will not work.
// Uses the `<script>` data written to the page by
// [attrsToHtml()](./attributes.html#section-7)
exports.attrsSort = function(classname){
  var html = '';
  html = '<script type="text/javascript">\n'
  html += "\"use strict;\"\n";
  html += "\n";
  html += 'window.onload = function() {\n';
  html += 'if(window.jQuery){\n';
  html += '    sort({data: "null"});\n';
  html += '  }else{\n';
  html += '    var el = document.getElementById("sort-links");\n';
  html += '    el.innerHTML = tableGen();\n';
  html += '  }\n';
  html += '}\n';
  html += "\n";
  html += "function sortCols(lhs, rhs) {\n";
  html += " var lval, rval;\n";
  html += " switch (attrSortCol) {\n";
  html += " case \"rule\":\n";
  html += "   \/\/ alphabetical\n";
  html += "   lval = lhs.lower;\n";
  html += "   rval = rhs.lower;\n";
  html += "   break;\n";
  html += " case \"type\":\n";
  html += "   \/\/ numerical on type\n";
  html += "   lval = lhs.type;\n";
  html += "   rval = rhs.type;\n";
  html += "   break;\n";
  html += " case \"left\":\n";
  html += "   \/\/ descending: false (no) preceeds true (yes)\n";
  html += "   lval = (lhs.left === false) ? 0 : 1;\n";
  html += "   rval = (rhs.left === false) ? 0 : 1;\n";
  html += "   break;\n";
  html += " case \"nested\":\n";
  html += "   lval = (lhs.nested === false) ? 0 : 1;\n";
  html += "   rval = (rhs.nested === false) ? 0 : 1;\n";
  html += "   break;\n";
  html += " case \"right\":\n";
  html += "   lval = (lhs.right === false) ? 0 : 1;\n";
  html += "   rval = (rhs.right === false) ? 0 : 1;\n";
  html += "   break;\n";
  html += " case \"cyclic\":\n";
  html += "   lval = (lhs.cyclic === false) ? 0 : 1;\n";
  html += "   rval = (rhs.cyclic === false) ? 0 : 1;\n";
  html += "   break;\n";
  html += " case \"finite\":\n";
  html += "   lval = (lhs.finite === false) ? 0 : 1;\n";
  html += "   rval = (rhs.finite === false) ? 0 : 1;\n";
  html += "   break;\n";
  html += " case \"empty\":\n";
  html += "   lval = (lhs.empty === false) ? 0 : 1;\n";
  html += "   rval = (rhs.empty === false) ? 0 : 1;\n";
  html += "   break;\n";
  html += " case \"notempty\":\n";
  html += "   lval = (lhs.notempty === false) ? 0 : 1;\n";
  html += "   rval = (rhs.notempty === false) ? 0 : 1;\n";
  html += "   break;\n";
  html += " case \"index\":\n";
  html += " default:\n";
  html += "   \/\/ numerical\n";
  html += "   lval = lhs.index;\n";
  html += "   rval = rhs.index;\n";
  html += "   break;\n";
  html += " }\n";
  html += " if (lval < rval) {\n";
  html += "   if (attrSortDir === 0) {\n";
  html += "     return -1;\n";
  html += "   }\n";
  html += "   return 1;\n";
  html += " }\n";
  html += " if (lval > rval) {\n";
  html += "   if (attrSortDir === 0) {\n";
  html += "     return 1;\n";
  html += "   }\n";
  html += "   return -1;\n";
  html += " }\n";
  html += " return 0;\n";
  html += "}\n";
  html += "function sortErrors(lhs, rhs) {\n";
  html += " var rerror = (rhs.left === true || rhs.cyclic === true || rhs.finite === false) ? true : false;\n";
  html += " var lerror = (lhs.left === true || lhs.cyclic === true || lhs.finite === false) ? true : false;\n";
  html += " \n";
  html += " if (rerror === false && lerror === true ) {\n";
  html += "   return -1;\n";
  html += " }\n";
  html += " if (rerror === true && lerror === false) {\n";
  html += "   return 1;\n";
  html += " }\n";
  html += " return 0;\n";
  html += "}\n";
  html += "function sort(e) {\n";
  html += " if (e.data !== null) {\n";
  html += "   \/\/ sort direction: 0 = descending, 1 = ascending\n";
  html += "   switch (e.data) {\n";
  html += "   case \"rule\":\n";
  html += "     attrSortCol = \"rule\"\n";
  html += "     attrDirs.rule = (attrDirs.rule === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.rule;\n";
  html += "     break;\n";
  html += "   case \"type\":\n";
  html += "     attrSortCol = \"type\"\n";
  html += "     attrDirs.type = (attrDirs.type === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.type;\n";
  html += "     break;\n";
  html += "   case \"left\":\n";
  html += "     attrSortCol = \"left\"\n";
  html += "     attrDirs.left = (attrDirs.left === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.left;\n";
  html += "     break;\n";
  html += "   case \"nested\":\n";
  html += "     attrSortCol = \"nested\"\n";
  html += "     attrDirs.nested = (attrDirs.nested === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.nested;\n";
  html += "     break;\n";
  html += "   case \"right\":\n";
  html += "     attrSortCol = \"right\"\n";
  html += "     attrDirs.right = (attrDirs.right === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.right;\n";
  html += "     break;\n";
  html += "   case \"cyclic\":\n";
  html += "     attrSortCol = \"cyclic\"\n";
  html += "     attrDirs.cyclic = (attrDirs.cyclic === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.cyclic;\n";
  html += "     break;\n";
  html += "   case \"finite\":\n";
  html += "     attrSortCol = \"finite\"\n";
  html += "     attrDirs.finite = (attrDirs.finite === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.finite;\n";
  html += "     break;\n";
  html += "   case \"empty\":\n";
  html += "     attrSortCol = \"empty\"\n";
  html += "     attrDirs.empty = (attrDirs.empty === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.empty;\n";
  html += "     break;\n";
  html += "   case \"notempty\":\n";
  html += "     attrSortCol = \"notempty\"\n";
  html += "     attrDirs.notempty = (attrDirs.notempty === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.notempty;\n";
  html += "     break;\n";
  html += "   case \"index\":\n";
  html += "   default:\n";
  html += "     attrSortCol = \"index\"\n";
  html += "     attrDirs.index = (attrDirs.index === 0) ? 1 : 0;\n";
  html += "     attrSortDir = attrDirs.index;\n";
  html += "     break;\n";
  html += "   }\n";
  html += "   attrRows.sort(sortCols);\n";
  html += "   if (attrHasErrors && attrSortErrors) {\n";
  html += "     attrRows.sort(sortErrors);\n";
  html += "   }\n";
  html += " }\n";
  html += " function check(){\n";
  html += "   var errors = $(\"#sort-links input#errors\");\n";
  html += "   if(errors.is(\":checked\")){\n";
  html += "     attrSortErrors = true;\n";
  html += "   }else{\n";
  html += "     attrSortErrors = false;\n";
  html += "   }\n";
  html += " }\n";
  html += "\n";
  html += " $(\"div#sort-links\").html(tableGen());\n";
  html += " $(\"#sort-links a.index\").click(\"index\", sort);\n";
  html += " $(\"#sort-links a.rule\").click(\"rule\", sort);\n";
  html += " $(\"#sort-links a.type\").click(\"type\", sort);\n";
  html += " $(\"#sort-links a.left\").click(\"left\", sort);\n";
  html += " $(\"#sort-links a.nested\").click(\"nested\", sort);\n";
  html += " $(\"#sort-links a.right\").click(\"right\", sort);\n";
  html += " $(\"#sort-links a.cyclic\").click(\"cyclic\", sort);\n";
  html += " $(\"#sort-links a.finite\").click(\"finite\", sort);\n";
  html += " $(\"#sort-links a.empty\").click(\"empty\", sort);\n";
  html += " $(\"#sort-links a.notempty\").click(\"notempty\", sort);\n";
  html += " $(\"#sort-links input#errors\").click(check);\n";
  html += "}\n";
  html += "function yesno(val) {\n";
  html += " return (val === true) ? \"yes\" : \"no\"\n";
  html += "}\n";
  html += "function tableGen(e) {\n";
  html += " var title = \"Grammar Attributes\"\n";
  html += " var checked = attrSortErrors ? \"checked\" : \"\"\n";
  html += " var html = \"\"\n";
  html += " html += '<table class=\"attr-table\">';\n";
  html += " html += '<caption>' + title;\n";
  html += " if(attrHasErrors){\n";
  html += "   html += '<br><input id=\"errors\" type=\"checkbox\" '+checked+'>keep errors at top<\/input><\/caption>';\n";
  html += " }\n";
  html += " html += '<\/caption>';\n";
  html += " html += '<tr>';\n";
  html += " html += '<th><a class=\"index\" href=\"#\">index<\/a><\/th>';\n";
  html += " html += '<th><a class=\"rule\" href=\"#\">rule<\/a><\/th>';\n";
  html += " html += '<th><a class=\"type\" href=\"#\">type<\/a><\/th>';\n";
  html += " html += '<th><a class=\"left\" href=\"#\">left<\/a><\/th>';\n";
  html += " html += '<th><a class=\"nested\" href=\"#\">nested<\/a><\/th>';\n";
  html += " html += '<th><a class=\"right\" href=\"#\">right<\/a><\/th>';\n";
  html += " html += '<th><a class=\"cyclic\" href=\"#\">cyclic<\/a><\/th>';\n";
  html += " html += '<th><a class=\"finite\" href=\"#\">finite<\/a><\/th>';\n";
  html += " html += '<th><a class=\"empty\" href=\"#\">empty<\/a><\/th>';\n";
  html += " html += '<th><a class=\"notempty\" href=\"#\">not empty<\/a><\/th>';\n";
  html += " html += '<\/tr>';\n";
  html += " attrRows.forEach(function(row) {\n";
  html += "   var left = yesno(row.left);\n";
  html += "   if (row.left === true) {\n";
  html += "     left = '<span class=\""+classname+"\">' + left + '<\/span>';\n";
  html += "   }\n";
  html += "   var cyclic = yesno(row.cyclic);\n";
  html += "   if (row.cyclic === true) {\n";
  html += "     cyclic = '<span class=\""+classname+"\">' + cyclic + '<\/span>';\n";
  html += "   }\n";
  html += "   var finite = yesno(row.finite);\n";
  html += "   if (row.finite === false) {\n";
  html += "     finite = '<span class=\""+classname+"\">' + finite + '<\/span>';\n";
  html += "   }\n";
  html += "   html += '<tr>';\n";
  html += "   html += '<td>' + row.index + '<\/td>';\n";
  html += "   html += '<td>' + row.rule + '<\/td>';\n";
  html += "   html += '<td>' + row.typename + '<\/td>';\n";
  html += "   html += '<td>' + left + '<\/td>';\n";
  html += "   html += '<td>' + yesno(row.nested) + '<\/td>';\n";
  html += "   html += '<td>' + yesno(row.right) + '<\/td>';\n";
  html += "   html += '<td>' + cyclic + '<\/td>';\n";
  html += "   html += '<td>' + finite + '<\/td>';\n";
  html += "   html += '<td>' + yesno(row.empty) + '<\/td>';\n";
  html += "   html += '<td>' + yesno(row.notempty) + '<\/td>';\n";
  html += "   html += '<\/tr>';\n";
  html += " });\n";
  html += " html += \"<\/table>\"\n";
  html += " return html;\n";
  html += "}<\/script>\n";
  return html;
}
