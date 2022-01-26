"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[7777],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:4},c="Distributed Transaction Support",u={unversionedId:"ecology/distributed-transaction",id:"ecology/distributed-transaction",title:"Distributed Transaction Support",description:"Demand Scenarios",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ecology/distributed-transaction.md",sourceDirName:"ecology",slug:"/ecology/distributed-transaction",permalink:"/zero-doc/en/docs/ecology/distributed-transaction",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/ecology/distributed-transaction.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Plugin Center",permalink:"/zero-doc/en/docs/ecology/plugin-center"},next:{title:"Highly Concurrent Microservices",permalink:"/zero-doc/en/docs/extension/shorturl"}},l=[{value:"Demand Scenarios",id:"demand-scenarios",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3}],d={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributed-transaction-support"},"Distributed Transaction Support"),(0,i.kt)("h3",{id:"demand-scenarios"},"Demand Scenarios"),(0,i.kt)("p",null,"In microservices architecture, when we need to ensure data consistency across services, the original database transaction is not able to cope with the cross-library and cross-service multiple operations in a single transaction. There are many application scenarios like this, and we can list many of them."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cross-bank transfer scenario, where the data is not in one database, but you need to ensure that the balance deduction and balance increase either succeed or fail at the same time"),(0,i.kt)("li",{parentName:"ul"},"Posting articles and then updating statistics such as the total number of articles. Where publishing articles and updating statistics are usually not in one microservice"),(0,i.kt)("li",{parentName:"ul"},"The order system after microservicing"),(0,i.kt)("li",{parentName:"ul"},"Traveling requires booking several tickets at the same time in a third-party system")),(0,i.kt)("p",null,"In the face of these scenarios that cannot be solved by local transactions, we need a distributed transaction solution to ensure the consistency of updated data across services and databases."),(0,i.kt)("h3",{id:"solution"},"Solution"),(0,i.kt)("p",null,"go-zero and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dtm-labs/dtm"},"dtm")," have joined forces to introduce a minimalist solution for seamless access to dtm in go-zero, the first microservice framework in the go ecosystem to provide distributed transaction capabilities. The solution has the following features."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dtm services can be directly registered to go-zero's registry through configuration"),(0,i.kt)("li",{parentName:"ul"},"go-zero can access the dtm server in the built-in target format"),(0,i.kt)("li",{parentName:"ul"},"dtm can recognize go-zero's target format and dynamically access the services in go-zero")),(0,i.kt)("p",null,"For detailed access methods, see the dtm documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://dtm.pub/ref/gozero.html"},"go-zero support")))}p.isMDXComponent=!0}}]);