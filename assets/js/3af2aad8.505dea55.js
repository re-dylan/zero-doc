"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[9998],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return N}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),u=p(n),N=l,g=u["".concat(o,".").concat(N)]||u[N]||m[N]||r;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5549:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return k},default:function(){return u}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],d={sidebar_position:1},o="goctl\u4ecb\u7ecd",p={unversionedId:"build-tool/tool-intro",id:"build-tool/tool-intro",title:"goctl\u4ecb\u7ecd",description:"goctl \u8bfb\u4f5c go control\uff0c\u4e0d\u8981\u8bfb\u6210 go C-T-L\u3002goctl \u7684\u610f\u601d\u662f\u4e0d\u8981\u88ab\u4ee3\u7801\u63a7\u5236\uff0c\u800c\u662f\u8981\u53bb\u63a7\u5236\u5b83\u3002\u5176\u4e2d\u7684 go \u4e0d\u662f\u6307 golang\u3002\u5728\u8bbe\u8ba1 goctl \u4e4b\u521d\uff0c\u6211\u5c31\u5e0c\u671b\u901a\u8fc7 \u5979 \u6765\u89e3\u653e\u6211\u4eec\u7684\u53cc\u624b\ud83d\udc48",source:"@site/docs/build-tool/tool-intro.md",sourceDirName:"build-tool",slug:"/build-tool/tool-intro",permalink:"/zero-doc/docs/build-tool/tool-intro",editUrl:"https://github.com/zeromicro/zero-doc/tree/main/website/docs/build-tool/tool-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efaRPC\u670d\u52a1",permalink:"/zero-doc/docs/quick-start/build-rpc"},next:{title:"api\u8bed\u6cd5",permalink:"/zero-doc/docs/build-tool/api-grammar"}},k=[{value:"api \u751f\u6210",id:"api-\u751f\u6210",children:[],level:3},{value:"rpc \u751f\u6210",id:"rpc-\u751f\u6210",children:[],level:3},{value:"model \u751f\u6210",id:"model-\u751f\u6210",children:[],level:3},{value:"template \u6a21\u677f\u64cd\u4f5c",id:"template-\u6a21\u677f\u64cd\u4f5c",children:[],level:3},{value:"config \u914d\u7f6e\u6587\u4ef6\u751f\u6210",id:"config-\u914d\u7f6e\u6587\u4ef6\u751f\u6210",children:[],level:3},{value:"docker \u751f\u6210Dockerfile",id:"docker-\u751f\u6210dockerfile",children:[],level:3},{value:"upgrade goctl\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c",id:"upgrade-goctl\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c",children:[],level:3},{value:"kube \u751f\u6210k8s\u90e8\u7f72\u6587\u4ef6",id:"kube-\u751f\u6210k8s\u90e8\u7f72\u6587\u4ef6",children:[],level:3},{value:"deploy k8s deploymenet",id:"deploy-k8s-deploymenet",children:[],level:3}],m={toc:k};function u(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"goctl\u4ecb\u7ecd"},"goctl\u4ecb\u7ecd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"goctl")," \u8bfb\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"go control"),"\uff0c\u4e0d\u8981\u8bfb\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"go C-T-L"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"goctl")," \u7684\u610f\u601d\u662f\u4e0d\u8981\u88ab\u4ee3\u7801\u63a7\u5236\uff0c\u800c\u662f\u8981\u53bb\u63a7\u5236\u5b83\u3002\u5176\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," \u4e0d\u662f\u6307 ",(0,r.kt)("inlineCode",{parentName:"p"},"golang"),"\u3002\u5728\u8bbe\u8ba1 ",(0,r.kt)("inlineCode",{parentName:"p"},"goctl")," \u4e4b\u521d\uff0c\u6211\u5c31\u5e0c\u671b\u901a\u8fc7 \u5979 \u6765\u89e3\u653e\u6211\u4eec\u7684\u53cc\u624b\ud83d\udc48"),(0,r.kt)("h3",{id:"api-\u751f\u6210"},"api \u751f\u6210"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o")),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210api\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goctl api -o user.api"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"new")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u521b\u5efa\u4e00\u4e2aapi\u670d\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goctl api new user"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format")),(0,r.kt)("td",{parentName:"tr",align:null},"api\u683c\u5f0f\u5316\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"vscode"),"\u4f7f\u7528 ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"-dir"),"\u76ee\u6807\u76ee\u5f55 ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"-iu"),"\u662f\u5426\u81ea\u52a8\u66f4\u65b0goctl ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"-stdin"),"\u662f\u5426\u4ece\u6807\u51c6\u8f93\u5165\u8bfb\u53d6\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"validate")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1api\u6587\u4ef6\u662f\u5426\u6709\u6548 ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"-api")," \u6307\u5b9aapi\u6587\u4ef6\u6e90"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goctl api validate -api user.api"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc")),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210doc markdown ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"-dir"),"\u6307\u5b9a\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goctl api doc -dir user"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"go")),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210golang api\u670d\u52a1",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-dir"),"\u6307\u5b9a\u751f\u6210\u4ee3\u7801\u76ee\u5f55",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-api"),"\u6307\u5b9aapi\u6587\u4ef6\u6e90",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-force"),"\u662f\u5426\u5f3a\u5236\u8986\u76d6\u5df2\u5b58\u5728\u7684\u6587\u4ef6",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero: \u5c0f\u5199\uff0cgo_zero: \u4e0b\u5212\u7ebf,GoZero: \u9a7c\u5cf0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"java")),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u8bbf\u95eeapi\u670d\u52a1\u4ee3\u7801-java\u8bed\u8a00",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-dir"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-api"),"\u6307\u5b9aapi\u6587\u4ef6\u6e90"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts")),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u8bbf\u95eeapi\u670d\u52a1\u4ee3\u7801-ts\u8bed\u8a00",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-dir"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-api"),"\u6307\u5b9aapi\u6587\u4ef6\u6e90",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"webapi"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"caller"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"unwrap")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dart")),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u8bbf\u95eeapi\u670d\u52a1\u4ee3\u7801-dart\u8bed\u8a00",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-dir"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-api"),"\u6307\u5b9aapi\u6587\u4ef6\u6e90"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kt")),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u8bbf\u95eeapi\u670d\u52a1\u4ee3\u7801-kotlin\u8bed\u8a00",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-dir"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-api"),"\u6307\u5b9aapi\u6587\u4ef6\u6e90",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"pkg"),"\u6307\u5b9a\u5305\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plugin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-plugin"),"\u53ef\u6267\u884c\u6587\u4ef6",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-dir"),"\u4ee3\u7801\u5b58\u653e\u76ee\u6807\u6587\u4ef6\u5939",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-api"),"api\u6e90\u7801\u6587\u4ef6",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6587\u4ef6\u540d\u547d\u540d\u683c\u5f0f\u5316"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"rpc-\u751f\u6210"},"rpc \u751f\u6210"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"new")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u751f\u6210\u4e00\u4e2arpc\u670d\u52a1",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-idea"),"\u6807\u8bc6\u547d\u4ee4\u662f\u5426\u6765\u6e90\u4e8eidea\u63d2\u4ef6\uff0c\u7528\u4e8eidea\u63d2\u4ef6\u5f00\u53d1\u4f7f\u7528\uff0c\u7ec8\u7aef\u6267\u884c\u8bf7\u5ffd\u7565","[\u53ef\u9009\u53c2\u6570]",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero:\u5c0f\u5199\uff0cgo_zero:\u4e0b\u5212\u7ebf,GoZero:\u9a7c\u5cf0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"template")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u4e00\u4e2aproto\u6a21\u677f\u6587\u4ef6",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-idea"),"\u6807\u8bc6\u547d\u4ee4\u662f\u5426\u6765\u6e90\u4e8eidea\u63d2\u4ef6\uff0c\u7528\u4e8eidea\u63d2\u4ef6\u5f00\u53d1\u4f7f\u7528\uff0c\u7ec8\u7aef\u6267\u884c\u8bf7\u5ffd\u7565","[\u53ef\u9009\u53c2\u6570]",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-out,o"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proto")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636eproto\u751f\u6210rpc\u670d\u52a1",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-src,s"),"\u6307\u5b9aproto\u6587\u4ef6\u6e90",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-proto_path,I"),"\u6307\u5b9aproto import\u67e5\u627e\u76ee\u5f55\uff0cprotoc\u539f\u751f\u547d\u4ee4\uff0c\u5177\u4f53\u7528\u6cd5\u53ef\u53c2\u8003protoc -h\u67e5\u770b",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-dir,d"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-idea"),"\u6807\u8bc6\u547d\u4ee4\u662f\u5426\u6765\u6e90\u4e8eidea\u63d2\u4ef6\uff0c\u7528\u4e8eidea\u63d2\u4ef6\u5f00\u53d1\u4f7f\u7528\uff0c\u7ec8\u7aef\u6267\u884c\u8bf7\u5ffd\u7565","[\u53ef\u9009\u53c2\u6570]",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero:\u5c0f\u5199\uff0cgo_zero:\u4e0b\u5212\u7ebf,GoZero:\u9a7c\u5cf0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"model")),(0,r.kt)("td",{parentName:"tr",align:null},"model\u5c42\u4ee3\u7801\u64cd\u4f5c",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"mysql"),"\u4ecemysql\u751f\u6210model\u4ee3\u7801",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"ddl"),"\u6307\u5b9a\u6570\u636e\u6e90\u4e3addl\u6587\u4ef6\u751f\u6210model\u4ee3\u7801",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-src,s"),"\u6307\u5b9a\u5305\u542bddl\u7684sql\u6587\u4ef6\u6e90\uff0c\u652f\u6301\u901a\u914d\u7b26\u5339\u914d",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-dir,d"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero:\u5c0f\u5199\uff0cgo_zero:\u4e0b\u5212\u7ebf,GoZero:\u9a7c\u5cf0",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-cache,c"),"\u751f\u6210\u4ee3\u7801\u662f\u5426\u5e26redis\u7f13\u5b58\u903b\u8f91\uff0cbool\u503c",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-idea"),"\u6807\u8bc6\u547d\u4ee4\u662f\u5426\u6765\u6e90\u4e8eidea\u63d2\u4ef6\uff0c\u7528\u4e8eidea\u63d2\u4ef6\u5f00\u53d1\u4f7f\u7528\uff0c\u7ec8\u7aef\u6267\u884c\u8bf7\u5ffd\u7565","[\u53ef\u9009\u53c2\u6570]",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"datasource"),"\u6307\u5b9a\u6570\u636e\u6e90\u4ece\u6570\u636e\u5e93\u94fe\u63a5\u751f\u6210model\u4ee3\u7801",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-url"),"\u6307\u5b9a\u6570\u636e\u5e93\u94fe\u63a5",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-table,t"),"\u6307\u5b9a\u8868\u540d\uff0c\u652f\u6301\u901a\u914d\u7b26",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-dir,d"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero:\u5c0f\u5199\uff0cgo_zero:\u4e0b\u5212\u7ebf,GoZero:\u9a7c\u5cf0",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-cache,c"),"\u751f\u6210\u4ee3\u7801\u662f\u5426\u5e26redis\u7f13\u5b58\u903b\u8f91\uff0cbool\u503c",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-idea"),"\u6807\u8bc6\u547d\u4ee4\u662f\u5426\u6765\u6e90\u4e8eidea\u63d2\u4ef6\uff0c\u7528\u4e8eidea\u63d2\u4ef6\u5f00\u53d1\u4f7f\u7528\uff0c\u7ec8\u7aef\u6267\u884c\u8bf7\u5ffd\u7565","[\u53ef\u9009\u53c2\u6570]",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"mongo"),"\u4ecemongo\u751f\u6210model\u4ee3\u7801",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-type,t"),"\u6307\u5b9aGo Type\u540d\u79f0",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-cache,c"),"\u751f\u6210\u4ee3\u7801\u662f\u5426\u5e26redis\u7f13\u5b58\u903b\u8f91\uff0cbool\u503c\uff0c\u9ed8\u8ba4\u5426",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-dir,d"),"\u6307\u5b9a\u4ee3\u7801\u751f\u6210\u76ee\u5f55",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero:\u5c0f\u5199\uff0cgo_zero:\u4e0b\u5212\u7ebf,GoZero:\u9a7c\u5cf0"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"model-\u751f\u6210"},"model \u751f\u6210"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mysql")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ecemysql\u751f\u6210model\u4ee3\u7801",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"ddl"),"\u6307\u5b9a\u6570\u636e\u6e90\u4e3addl\u6587\u4ef6\u751f\u6210model\u4ee3\u7801",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-src,s"),"\u6307\u5b9a\u5305\u542bddl\u7684sql\u6587\u4ef6\u6e90\uff0c\u652f\u6301\u901a\u914d\u7b26\u5339\u914d",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-dir,d"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero:\u5c0f\u5199\uff0cgo_zero:\u4e0b\u5212\u7ebf,GoZero:\u9a7c\u5cf0",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-cache,c"),"\u751f\u6210\u4ee3\u7801\u662f\u5426\u5e26redis\u7f13\u5b58\u903b\u8f91\uff0cbool\u503c",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-idea"),"\u6807\u8bc6\u547d\u4ee4\u662f\u5426\u6765\u6e90\u4e8eidea\u63d2\u4ef6\uff0c\u7528\u4e8eidea\u63d2\u4ef6\u5f00\u53d1\u4f7f\u7528\uff0c\u7ec8\u7aef\u6267\u884c\u8bf7\u5ffd\u7565","[\u53ef\u9009\u53c2\u6570]",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"datasource"),"\u6307\u5b9a\u6570\u636e\u6e90\u4ece\u6570\u636e\u5e93\u94fe\u63a5\u751f\u6210model\u4ee3\u7801",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-url"),"\u6307\u5b9a\u6570\u636e\u5e93\u94fe\u63a5",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-table,t"),"\u6307\u5b9a\u8868\u540d\uff0c\u652f\u6301\u901a\u914d\u7b26",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-dir,d"),"\u6307\u5b9a\u4ee3\u7801\u5b58\u653e\u76ee\u5f55",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero:\u5c0f\u5199\uff0cgo_zero:\u4e0b\u5212\u7ebf,GoZero:\u9a7c\u5cf0",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-cache,c"),"\u751f\u6210\u4ee3\u7801\u662f\u5426\u5e26redis\u7f13\u5b58\u903b\u8f91\uff0cbool\u503c",(0,r.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-idea"),"\u6807\u8bc6\u547d\u4ee4\u662f\u5426\u6765\u6e90\u4e8eidea\u63d2\u4ef6\uff0c\u7528\u4e8eidea\u63d2\u4ef6\u5f00\u53d1\u4f7f\u7528\uff0c\u7ec8\u7aef\u6267\u884c\u8bf7\u5ffd\u7565","[\u53ef\u9009\u53c2\u6570]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mongo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ecemongo\u751f\u6210model\u4ee3\u7801",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-type,t"),"\u6307\u5b9aGo Type\u540d\u79f0",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-cache,c"),"\u751f\u6210\u4ee3\u7801\u662f\u5426\u5e26redis\u7f13\u5b58\u903b\u8f91\uff0cbool\u503c\uff0c\u9ed8\u8ba4\u5426",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-dir,d"),"\u6307\u5b9a\u4ee3\u7801\u751f\u6210\u76ee\u5f55",(0,r.kt)("br",null),"\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"td"},"-style"),"\u6307\u5b9a\u6587\u4ef6\u540d\u547d\u540d\u98ce\u683c\uff0cgozero:\u5c0f\u5199\uff0cgo_zero:\u4e0b\u5212\u7ebf,GoZero:\u9a7c\u5cf0"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"template-\u6a21\u677f\u64cd\u4f5c"},"template \u6a21\u677f\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"init")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58",(0,r.kt)("inlineCode",{parentName:"td"},"api"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"rpc"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"model"),"\u6a21\u677f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goctl template init"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clean")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e05\u7a7a\u7f13\u5b58\u6a21\u677f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goctl template clean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u6a21\u677f",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-category,c"),"\u6307\u5b9a\u9700\u8981\u66f4\u65b0\u7684\u5206\u7ec4\u540d ",(0,r.kt)("inlineCode",{parentName:"td"},"api"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"rpc"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"model")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goctl template update -c api"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"revert")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd8\u539f\u6307\u5b9a\u6a21\u677f\u6587\u4ef6",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-category,c"),"\u6307\u5b9a\u9700\u8981\u66f4\u65b0\u7684\u5206\u7ec4\u540d ",(0,r.kt)("inlineCode",{parentName:"td"},"api"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"rpc"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"model"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-name,n"),"\u6307\u5b9a\u6a21\u677f\u6587\u4ef6\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"config-\u914d\u7f6e\u6587\u4ef6\u751f\u6210"},"config \u914d\u7f6e\u6587\u4ef6\u751f\u6210"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-path,p")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goctl config -p user"))))),(0,r.kt)("h3",{id:"docker-\u751f\u6210dockerfile"},"docker \u751f\u6210Dockerfile"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-go")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9amain\u51fd\u6570\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u66b4\u9732\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"upgrade-goctl\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c"},"upgrade goctl\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c"),(0,r.kt)("h3",{id:"kube-\u751f\u6210k8s\u90e8\u7f72\u6587\u4ef6"},"kube \u751f\u6210k8s\u90e8\u7f72\u6587\u4ef6"),(0,r.kt)("h3",{id:"deploy-k8s-deploymenet"},"deploy k8s deploymenet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9ak8s namespace"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-image")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u955c\u50cf\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-secret")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u83b7\u53d6\u955c\u50cf\u7684k8s secret"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-requestCpu")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9acpu\u9ed8\u8ba4\u5206\u914d\u989d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-requestMem")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5185\u5b58\u9ed8\u8ba4\u5206\u914d\u989d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-limitCpu")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9acpu\u6700\u5927\u5206\u914d\u989d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-limitMem")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5185\u5b58\u6700\u5927\u5206\u914d\u989d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o")),(0,r.kt)("td",{parentName:"tr",align:null},"deployment.yaml\u8f93\u51fa\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-replicas")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u526f\u672c\u6570"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-revisions")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4fdd\u7559\u53d1\u5e03\u8bb0\u5f55\u6570"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u670d\u52a1\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-nodePort")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u670d\u52a1\u5bf9\u5916\u66b4\u9732\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-minReplicas")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6700\u5c0f\u526f\u672c\u6570"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-maxReplicas")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6700\u5927\u526f\u672c\u6570"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);