/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var v=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var W=Object.prototype.hasOwnProperty;var U=(s,n)=>{for(var e in n)v(s,e,{get:n[e],enumerable:!0})},I=(s,n,e,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of F(n))!W.call(s,t)&&t!==e&&v(s,t,{get:()=>n[t],enumerable:!(o=O(n,t))||o.enumerable});return s};var G=s=>I(v({},"__esModule",{value:!0}),s);var Y={};U(Y,{RUBY_REGEXP:()=>m,RubyInsertModal:()=>f,default:()=>h});module.exports=G(Y);var c=require("obsidian");var H=s=>{var n;if(s.textContent){let e=Array.from(s.textContent.matchAll(m)),o=s;for(let t of e){let d=t.groups.ruby,r=(n=t.groups)!=null&&n.body1?t.groups.body1:t.groups.body2,a=document.createElement("ruby");if(a.addClass("ruby"),a.appendText(r),a.createEl("rt",{text:d}),o.textContent){let g=o.textContent.indexOf(t[0]),y=o.splitText(g);o=y.splitText(t[0].length),y.replaceWith(a)}}}return s},C=(s,n)=>{let e=s.querySelectorAll("p, h1, h2, h3, h4, h5, h6, ol, ul, table");if(e.length===0)return;function o(t){let d=[];t.childNodes.forEach(r=>{r.nodeType===Node.TEXT_NODE?d.push(r):r.hasChildNodes()&&r.nodeName!=="CODE"&&r.nodeName!=="RUBY"&&o(r)}),d.forEach(r=>{r.replaceWith(H(r))})}e.forEach(t=>{o(t)})};var _=require("@codemirror/view"),N=require("@codemirror/state"),p=require("obsidian");var S=class extends _.WidgetType{constructor(e,o){super();this.body=e;this.ruby=o}toDOM(e){let o=document.createElement("ruby");return o.appendText(this.body),o.createEl("rt",{text:this.ruby}),o}};function T(s,n){return _.ViewPlugin.fromClass(class{constructor(e){this.decorations=this.updateDecorations(e),this.sourceModeRendering=n.settings.sourceModeRendering}update(e){(e.docChanged||e.viewportChanged||e.selectionSet||e.startState.field(p.editorLivePreviewField)!=e.state.field(p.editorLivePreviewField)||!e.startState.field(p.editorLivePreviewField)&&this.sourceModeRendering!=n.settings.sourceModeRendering)&&(this.sourceModeRendering!=n.settings.sourceModeRendering&&(this.sourceModeRendering=n.settings.sourceModeRendering),this.decorations=this.updateDecorations(e.view))}destroy(){}updateDecorations(e){return n.settings.sourceModeRendering||e.state.field(p.editorLivePreviewField)?this.buildDecorations(e):_.Decoration.none}buildDecorations(e){var d;let o=new N.RangeSetBuilder,t=[...e.state.selection.ranges];for(let r of e.visibleRanges){t.forEach(a=>{a.to>=r.from&&a.from<=r.to});for(let a=r.from;a<=r.to;){let g=e.state.doc.lineAt(a),y=Array.from(g.text.matchAll(m));for(let u of y){let P=!0,A=u.groups.ruby,B=(d=u.groups)!=null&&d.body1?u.groups.body1:u.groups.body2,w=u.index!=null?u.index+g.from:-1,k=w+u[0].length;t.forEach(D=>{D.to>=w&&D.from<=k&&(P=!1)}),P&&o.add(w,k,_.Decoration.widget({widget:new S(B,A)}))}a=g.to+1}}return o.finish()}},{decorations:e=>e.decorations})}var l=require("obsidian");var R=require("obsidian");var x={command_insert_novel_ruby:"Insert novel ruby",command_insert_novel_dot:"Insert novel emphasis dot",command_remove_novel_ruby:"Remove novel ruby from selection",ruby_insert_modal_title:"Insert ruby",ruby_insert_modal_body:"Body",ruby_insert_modal_ruby:"Ruby",ruby_insert_modal_ok:"OK",notice_insert_novel_dot_no_selection:"Selection is required to insert dots",settings_command_title:"Command",settings_support_title:"Support",settings_source_mode_render_name:"Enable ruby preview in source mode",settings_source_mode_render_desc:"Turn off if you want to display ruby marks as is in source mode.",settings_ruby_size_name:"Ruby size",settings_ruby_size_desc:"Set the ratio of ruby size to body. (default: 0.5)",settings_insert_full_width_separator_name:'Insert full-width "\uFF5C" by insert-ruby command',settings_insert_full_width_separator_desc:'Turn off if you want to insert half-width "|" by ruby insert dialog. Does not affect rendering.',settings_emphashis_dot_name:"Emphasis dot character",settings_emphashis_dot_desc:"A character for the emphasis dot. Only the first character will be saved.",settings_donate_name:"Donate",settings_donate_desc:"If you like this plugin, I would be grateful if you would consider making a donation to support development.",settings_donate_button:"Buy me a rice ball"};var V={command_insert_novel_ruby:"\u30EB\u30D3\u3092\u633F\u5165",command_insert_novel_dot:"\u508D\u70B9\u3092\u633F\u5165",command_remove_novel_ruby:"\u9078\u629E\u7BC4\u56F2\u304B\u3089\u30EB\u30D3\u3092\u524A\u9664",ruby_insert_modal_title:"\u30EB\u30D3\u3092\u633F\u5165",ruby_insert_modal_body:"\u672C\u6587",ruby_insert_modal_ruby:"\u30EB\u30D3",ruby_insert_modal_ok:"OK",notice_insert_novel_dot_no_selection:"\u5148\u306B\u508D\u70B9\u3092\u632F\u308A\u305F\u3044\u672C\u6587\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",settings_command_title:"\u30B3\u30DE\u30F3\u30C9",settings_support_title:"\u30B5\u30DD\u30FC\u30C8",settings_source_mode_render_name:"\u30BD\u30FC\u30B9\u30E2\u30FC\u30C9\u3067\u30EB\u30D3\u3092\u8868\u793A",settings_source_mode_render_desc:"\u30BD\u30FC\u30B9\u30E2\u30FC\u30C9\u3067\u306F\u30EB\u30D3\u8A18\u53F7\u3092\u5165\u529B\u3057\u305F\u307E\u307E\u306E\u6587\u5B57\u3068\u3057\u3066\u8868\u793A\u3057\u305F\u3044\u5834\u5408\u3001\u30AA\u30D5\u306B\u3057\u3066\u304F\u3060\u3055\u3044",settings_ruby_size_name:"\u30EB\u30D3\u306E\u30B5\u30A4\u30BA",settings_ruby_size_desc:"\u672C\u6587\u306B\u5BFE\u3059\u308B\u30EB\u30D3\u306E\u5927\u304D\u3055\u3092\u6BD4\u7387\u3067\u6307\u5B9A\u3057\u307E\u3059 (\u30C7\u30D5\u30A9\u30EB\u30C8: 0.5)",settings_insert_full_width_separator_name:'\u300C\u30EB\u30D3\u3092\u633F\u5165\u300D\u30B3\u30DE\u30F3\u30C9\u3067\u5168\u89D2\u306E "\uFF5C" \u3092\u4F7F\u3046',settings_insert_full_width_separator_desc:'\u30B3\u30DE\u30F3\u30C9\u3067\u534A\u89D2\u306E "|" \u3092\u633F\u5165\u3057\u305F\u3044\u5834\u5408\u3001\u30AA\u30D5\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3000\u203B\u8868\u793A\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093',settings_emphashis_dot_name:"\u508D\u70B9\u306E\u6587\u5B57",settings_emphashis_dot_desc:"\u300C\u508D\u70B9\u3092\u633F\u5165\u300D\u30B3\u30DE\u30F3\u30C9\u3067\u633F\u5165\u3059\u308B\u6587\u5B57\u3092\u6307\u5B9A\u3057\u307E\u3059\u30021\u6587\u5B57\u76EE\u3057\u304B\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093",settings_donate_name:"\u5BC4\u4ED8",settings_donate_desc:"\u3053\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u6C17\u306B\u5165\u3063\u305F\u3089\u3001\u958B\u767A\u652F\u63F4\u306E\u305F\u3081\u306E\u5BC4\u4ED8\u3092\u8003\u3048\u3066\u3044\u305F\u3060\u3051\u308B\u3068\u5B09\u3057\u3044\u3067\u3059",settings_donate_button:"\u304A\u306B\u304E\u308A\u3044\u3063\u3053\u304A\u3054\u308B"};var L={en:x,ja:V},E=L[R.moment.locale()];function i(s){return E||console.error("Error: dictionary locale not found",R.moment.locale()),E&&E[s]||x[s]}var b=class extends l.PluginSettingTab{constructor(e,o){super(e,o);this.plugin=o}display(){let{containerEl:e}=this;e.empty(),new l.Setting(e).setName(i("settings_source_mode_render_name")).setDesc(i("settings_source_mode_render_desc")).addToggle(o=>o.setValue(this.plugin.settings.sourceModeRendering).onChange(async t=>{this.plugin.settings.sourceModeRendering=t,await this.plugin.saveSettings()})),new l.Setting(e).setName(i("settings_ruby_size_name")).setDesc(i("settings_ruby_size_desc")).addText(o=>o.setValue(String(this.plugin.settings.rubySize)).setPlaceholder("0.5").onChange(async t=>{let d=Number(t)?Number(t):.5;this.plugin.settings.rubySize=d,await this.plugin.saveSettings()})),new l.Setting(e).setName(i("settings_command_title")).setHeading(),new l.Setting(e).setName(i("settings_insert_full_width_separator_name")).setDesc(i("settings_insert_full_width_separator_desc")).addToggle(o=>o.setValue(this.plugin.settings.insertFullWidthMark).onChange(async t=>{this.plugin.settings.insertFullWidthMark=t,await this.plugin.saveSettings()})),new l.Setting(e).setName(i("settings_emphashis_dot_name")).setDesc(i("settings_emphashis_dot_desc")).addText(o=>o.setValue(this.plugin.settings.emphasisDot).onChange(async t=>{this.plugin.settings.emphasisDot=t[0],await this.plugin.saveSettings()})),new l.Setting(e).setName(i("settings_support_title")).setHeading(),new l.Setting(e).setName(i("settings_donate_name")).setDesc(i("settings_donate_desc")).addButton(o=>o.setButtonText(i("settings_donate_button")).setCta().onClick(()=>{setTimeout(()=>location.replace("https://buymeacoffee.com/quels"),0)}))}};var m=/(?:(?:[|｜]?(?<body1>[一-龠]+?))|(?:[|｜](?<body2>[^|｜]+?)))《(?<ruby>.+?)》/gm,X={sourceModeRendering:!0,insertFullWidthMark:!0,emphasisDot:"\u30FB",rubySize:.5},h=class extends c.Plugin{constructor(){super(...arguments);this.rubyPostProcessor=C}async onload(){await this.loadSettings(),this.registerMarkdownPostProcessor(this.rubyPostProcessor),this.registerEditorExtension(T(this.app,this)),this.addCommand({id:"novel-ruby-insert",name:i("command_insert_novel_ruby"),editorCallback:(e,o)=>{let t=M(e.getSelection());new f(this.app,t,(d,r)=>{let a=this.settings.insertFullWidthMark?"\uFF5C":"|";e.replaceSelection(a+d+"\u300A"+r+"\u300B")}).open()}}),this.addCommand({id:"novel-ruby-insert-dot",name:i("command_insert_novel_dot"),editorCallback:(e,o)=>{let t=e.getSelection();if(t=="")new c.Notice(i("notice_insert_novel_dot_no_selection"),2e3);else{let d="",r=this.settings.insertFullWidthMark?"\uFF5C":"|";t=M(t);for(let a=0;a<t.length;a++)d+=r+t[a]+"\u300A"+this.settings.emphasisDot[0]+"\u300B";e.replaceSelection(d)}}}),this.addCommand({id:"novel-ruby-remove",name:i("command_remove_novel_ruby"),editorCallback:(e,o)=>{e.replaceSelection(M(e.getSelection()))}}),this.addSettingTab(new b(this.app,this))}onunload(){}async loadSettings(){this.settings=Object.assign({},X,await this.loadData()),z(this.settings.rubySize)}async saveSettings(){await this.saveData(this.settings),z(this.settings.rubySize),this.app.workspace.updateOptions()}};function M(s){var o;let n=s,e=Array.from(s.matchAll(m));for(let t of e){let d=(o=t.groups)!=null&&o.body1?t.groups.body1:t.groups.body2;n=n.replace(t[0],d)}return n}var f=class extends c.Modal{constructor(e,o,t){super(e);this.onSubmit=t,this.body=o}onOpen(){let{contentEl:e}=this;e.createEl("h1",{text:i("ruby_insert_modal_title")}),new c.Setting(e).setName(i("ruby_insert_modal_body")).addText(o=>o.setValue(this.body).onChange(t=>{this.body=t})),new c.Setting(e).setName(i("ruby_insert_modal_ruby")).addText(o=>o.onChange(t=>{this.ruby=t})),new c.Setting(e).addButton(o=>o.setButtonText(i("ruby_insert_modal_ok")).setCta().onClick(()=>{this.close(),this.onSubmit(this.body,this.ruby)}))}onClose(){let{contentEl:e}=this;e.empty()}};function z(s){activeDocument.body.style.setProperty("--ruby-size",`${s}`)}

/* nosourcemap */