"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[6884],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,y=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4288:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:18},u="DB Cache",c={unversionedId:"extension/sql-cache",id:"extension/sql-cache",title:"DB Cache",description:"QueryRowIndex",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extension/sql-cache.md",sourceDirName:"extension",slug:"/extension/sql-cache",permalink:"/zero-doc/en/docs/extension/sql-cache",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/extension/sql-cache.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"SharedCalls",permalink:"/zero-doc/en/docs/extension/sharedcalls"},next:{title:"zRPC",permalink:"/zero-doc/en/docs/extension/zrpc"}},p=[{value:"QueryRowIndex",id:"queryrowindex",children:[],level:2}],m={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"db-cache"},"DB Cache"),(0,i.kt)("h2",{id:"queryrowindex"},"QueryRowIndex"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u67e5\u8be2\u6761\u4ef6\u5230Primary\u6620\u5c04\u7684\u7f13\u5b58",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u67e5\u8be2\u6761\u4ef6\u5230DB\u53bb\u67e5\u8be2\u884c\u8bb0\u5f55\uff0c\u7136\u540e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u628aPrimary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\u5199\u5230redis\u91cc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u628a\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u6620\u5c04\u4fdd\u5b58\u5230redis\u91cc"),"\uff0c",(0,i.kt)("em",{parentName:"li"},"\u6846\u67b6\u7684Take\u65b9\u6cd5\u81ea\u52a8\u505a\u4e86")))),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u7684\u8fc7\u671f\u987a\u5e8f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u6620\u5c04\u7f13\u5b58\u672a\u8fc7\u671f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\u672a\u8fc7\u671f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u884c\u8bb0\u5f55"))),(0,i.kt)("li",{parentName:"ul"},"Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\u5df2\u8fc7\u671f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7Primary\u5230DB\u83b7\u53d6\u884c\u8bb0\u5f55\uff0c\u5e76\u5199\u5165\u7f13\u5b58",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u5b58\u5728\u7684\u95ee\u9898\u662f\uff0c\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u7f13\u5b58\u53ef\u80fd\u5df2\u7ecf\u5feb\u8981\u8fc7\u671f\u4e86\uff0c\u77ed\u65f6\u95f4\u5185\u7684\u67e5\u8be2\u53c8\u4f1a\u89e6\u53d1\u4e00\u6b21\u6570\u636e\u5e93\u67e5\u8be2"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u8ba9",(0,i.kt)("strong",{parentName:"li"},"\u4e0a\u9762\u7c97\u4f53\u90e8\u5206"),"\u7b2c\u4e00\u4e2a\u8fc7\u671f\u65f6\u95f4\u7565\u957f\u4e8e\u7b2c\u4e8c\u4e2a\uff0c\u6bd4\u59825\u79d2"))))))),(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u6620\u5c04\u7f13\u5b58\u5df2\u8fc7\u671f\uff0c\u4e0d\u7ba1Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\u662f\u5426\u8fc7\u671f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u6620\u5c04\u4f1a\u88ab\u91cd\u65b0\u83b7\u53d6\uff0c\u83b7\u53d6\u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u5199\u5165\u65b0\u7684Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\uff0c\u8fd9\u6837\u4e24\u79cd\u7f13\u5b58\u7684\u8fc7\u671f\u65f6\u95f4\u90fd\u662f\u521a\u521a\u8bbe\u7f6e"))))))),(0,i.kt)("li",{parentName:"ul"},"\u6709\u67e5\u8be2\u6761\u4ef6\u5230Primary\u6620\u5c04\u7684\u7f13\u5b58",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7Primary\u5230DB\u67e5\u8be2\u884c\u8bb0\u5f55\uff0c\u5e76\u5199\u5165\u7f13\u5b58"))),(0,i.kt)("li",{parentName:"ul"},"\u6709Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u7ed3\u679c")))))))}s.isMDXComponent=!0}}]);