"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[4575],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9552:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:2},l="Development process",p={unversionedId:"project/process",id:"project/process",title:"Development process",description:"The development process here is not the same concept as our actual business development process, the definition here is limited to the use of go-zero, i.e. the code level development details.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/project/process.md",sourceDirName:"project",slug:"/project/process",permalink:"/zero-doc/en/docs/project/process",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/project/process.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Development Specifications",permalink:"/zero-doc/en/docs/project/specification"},next:{title:"Configuration introduction",permalink:"/zero-doc/en/docs/project/config"}},s=[{value:"Development Tools",id:"development-tools",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development-process"},"Development process"),(0,i.kt)("p",null,"The development process here is not the same concept as our actual business development process, the definition here is limited to the use of go-zero, i.e. the code level development details."),(0,i.kt)("h1",{id:"-development-process"},"# Development process"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"goctl environment preparation ","[1]"),(0,i.kt)("li",{parentName:"ul"},"Database design"),(0,i.kt)("li",{parentName:"ul"},"Business development"),(0,i.kt)("li",{parentName:"ul"},"New project creation"),(0,i.kt)("li",{parentName:"ul"},"Create service directory"),(0,i.kt)("li",{parentName:"ul"},"Creating service types (api/rpc/rmq/job/script)"),(0,i.kt)("li",{parentName:"ul"},"Writing api, proto files"),(0,i.kt)("li",{parentName:"ul"},"Code generation"),(0,i.kt)("li",{parentName:"ul"},"Generate database access layer code mod"),(0,i.kt)("li",{parentName:"ul"},"Configure config, yaml changes"),(0,i.kt)("li",{parentName:"ul"},"Resource dependency populating (ServiceContext)"),(0,i.kt)("li",{parentName:"ul"},"Adding middleware"),(0,i.kt)("li",{parentName:"ul"},"Business code populating"),(0,i.kt)("li",{parentName:"ul"},"Error handling")),(0,i.kt)("h2",{id:"development-tools"},"Development Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visual Studio Code"),(0,i.kt)("li",{parentName:"ul"},"Goland (recommended)")))}d.isMDXComponent=!0}}]);