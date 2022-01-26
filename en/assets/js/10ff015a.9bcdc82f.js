"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[4881],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?i.createElement(h,r(r({ref:n},p),{},{components:t})):i.createElement(h,r({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},317:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),r=["components"],l={sidebar_position:1},c="Development Specifications",s={unversionedId:"project/specification",id:"project/specification",title:"Development Specifications",description:"In the actual business development, in addition to improving business development efficiency, shortening business development cycle, ensuring high performance and high availability of online business indicators, good programming habits is also one of the basic qualities of a developer, in this section, we will introduce the coding specification in go-zero, this section is optional, the content is for communication and reference only",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/project/specification.md",sourceDirName:"project",slug:"/project/specification",permalink:"/zero-doc/en/docs/project/specification",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/project/specification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Preparation work",permalink:"/zero-doc/en/docs/project/prepare"},next:{title:"Development process",permalink:"/zero-doc/en/docs/project/process"}},p=[{value:"Three principles of development",id:"three-principles-of-development",children:[{value:"Clarity",id:"clarity",children:[],level:3},{value:"Simplicity",id:"simplicity",children:[],level:3},{value:"Productivity",id:"productivity",children:[],level:3}],level:2},{value:"Naming conventions",id:"naming-conventions",children:[{value:"Normative suggestions",id:"normative-suggestions",children:[],level:3},{value:"Naming guidelines",id:"naming-guidelines",children:[],level:3},{value:"File naming convention",id:"file-naming-convention",children:[],level:3},{value:"Variable naming convention reference",id:"variable-naming-convention-reference",children:[],level:3},{value:"Function and constant naming convention",id:"function-and-constant-naming-convention",children:[],level:3},{value:"Reference documentation",id:"reference-documentation",children:[],level:3}],level:2},{value:"Routing specifications",id:"routing-specifications",children:[],level:2},{value:"Coding specification",id:"coding-specification",children:[{value:"import",id:"import",children:[],level:3},{value:"Function returns",id:"function-returns",children:[],level:3},{value:"Error handling",id:"error-handling",children:[],level:3},{value:"Function body coding",id:"function-body-coding",children:[],level:3}],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development-specifications"},"Development Specifications"),(0,a.kt)("p",null,"In the actual business development, in addition to improving business development efficiency, shortening business development cycle, ensuring high performance and high availability of online business indicators, good programming habits is also one of the basic qualities of a developer, in this section, we will introduce the coding specification in go-zero, this section is optional, the content is for communication and reference only"),(0,a.kt)("h2",{id:"three-principles-of-development"},"Three principles of development"),(0,a.kt)("h3",{id:"clarity"},"Clarity"),(0,a.kt)("p",null,"The authors quote ",(0,a.kt)("inlineCode",{parentName:"p"},"Hal Abelson and Gerald Sussman"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Programs must be written for people to read, and only incidentally for machines to execute")),(0,a.kt)("p",null,"Programs are what they are, programs must be written for developers to read, and only incidentally for machines to execute, 99% of the time program code is geared towards developers, and only 1% of the time it may be executed by machines, the ratio is not the point here, from which we can see how important clear code is, because all programs, not just Go languages, are written by developers for others to read and maintain."),(0,a.kt)("h3",{id:"simplicity"},"Simplicity"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Simplicity is prerequisite for reliability")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Edsger W. Dijkstra")," believes that: the prerequisite for reliability is simplicity, we have all encountered in the actual development, what this code is writing and what it wants to accomplish, the developer does not understand this code, and therefore does not know how to maintain it, which brings complexity, the more complex the program is the harder it is to maintain, the harder it is to maintain it will be the program becomes more and more complex, therefore The first thing you should think of when you encounter a complex program is - refactoring, refactoring will redesign the program to make it simple."),(0,a.kt)("h3",{id:"productivity"},"Productivity"),(0,a.kt)("p",null,"In the go-zero team, we have been emphasizing this topic, the amount of developer productivity is not how many lines of code you have written or how many modules you have completed, but we need to use various effective ways to maximize the development efficiency with limited time, and Goctl was born to improve productivity.\nSo this development principle is very much agreeable to me."),(0,a.kt)("h2",{id:"naming-conventions"},"Naming conventions"),(0,a.kt)("p",null,"In any language development, there are naming conventions for the language domain, and good naming can"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reduce the cost of reading code"),(0,a.kt)("li",{parentName:"ul"},"reduce maintenance difficulties"),(0,a.kt)("li",{parentName:"ul"},"Reduce code complexity")),(0,a.kt)("h3",{id:"normative-suggestions"},"Normative suggestions"),(0,a.kt)("p",null,"In our actual development, there are many developers who may have moved from one language to another language domain, and after moving to another language\nWe all retain our programming habits for the old language, and what I suggest here is that although some of the specifications may have been common before for different languages.\nBut it is better to follow the official demos to get familiar with the programming conventions of the current language than to migrate them directly from the original language."),(0,a.kt)("h3",{id:"naming-guidelines"},"Naming guidelines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When the distance between the definition and the last use of a variable name is short, a short name looks better."),(0,a.kt)("li",{parentName:"ul"},"Variable naming should try to describe its content, not its type"),(0,a.kt)("li",{parentName:"ul"},"Constant naming should try to describe its value, not how the value is used"),(0,a.kt)("li",{parentName:"ul"},"When it comes to loops or branches such as for, if, etc., single letter naming is recommended to identify parameters and return values"),(0,a.kt)("li",{parentName:"ul"},"word naming is recommended for method, interface, type, package"),(0,a.kt)("li",{parentName:"ul"},"Package names are also part of naming, please try to make use of them"),(0,a.kt)("li",{parentName:"ul"},"Use a consistent naming style")),(0,a.kt)("h3",{id:"file-naming-convention"},"File naming convention"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All lowercase"),(0,a.kt)("li",{parentName:"ul"},"Avoid underscores (_) except for unit test"),(0,a.kt)("li",{parentName:"ul"},"File names should not be too long")),(0,a.kt)("h3",{id:"variable-naming-convention-reference"},"Variable naming convention reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lowercase first letter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hump naming")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"See the name and avoid phonetic substitution for English")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is not recommended to include underscores (_)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Not recommended to include numbers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Scope of application **"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Local variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"function reference, input reference"))),(0,a.kt)("h3",{id:"function-and-constant-naming-convention"},"Function and constant naming convention"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Humped naming"),(0,a.kt)("li",{parentName:"ul"},"Exported must be capitalized"),(0,a.kt)("li",{parentName:"ul"},"Non-exported must be lowercase"),(0,a.kt)("li",{parentName:"ul"},"Avoid all capitalization and underscore (_) combinations")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are contributing go-zero code, you must strictly follow this naming convention"))),(0,a.kt)("h3",{id:"reference-documentation"},"Reference documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[Practical Go: Real world advice for writing maintainable Go programs]","(",(0,a.kt)("a",{parentName:"li",href:"https://dave.cheney.net/practical-go/presentations/gophercon-"},"https://dave.cheney.net/practical-go/presentations/gophercon-")," singapore-2019.html#_simplicity)")),(0,a.kt)("h2",{id:"routing-specifications"},"Routing specifications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recommended spine naming"),(0,a.kt)("li",{parentName:"ul"},"lowercase words, horizontal bar (-) combinations"),(0,a.kt)("li",{parentName:"ul"},"see the name to know the meaning")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"/user/get-info\n/user/get/info\n/user/password/change/:id\n")),(0,a.kt)("h2",{id:"coding-specification"},"Coding specification"),(0,a.kt)("h3",{id:"import"},"import"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Single line import is not recommended to be wrapped in parentheses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Introduce ",(0,a.kt)("inlineCode",{parentName:"p"},"official package'', "),"new line'', ",(0,a.kt)("inlineCode",{parentName:"p"},"current project package'', "),"new line'', ``third-party dependency package'' in order"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "string"\n\n    "greet/user/internal/config"\n\n    "google.golang.org/grpc"\n)\n')))),(0,a.kt)("h3",{id:"function-returns"},"Function returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"objects avoid non-pointer returns"),(0,a.kt)("li",{parentName:"ul"},"Follow the principle that if there is a normal value returned, there must be no error, and if there is an error, there must be no normal value returned")),(0,a.kt)("h3",{id:"error-handling"},"Error handling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"must handle if there is an error, must throw if it cannot be handled."),(0,a.kt)("li",{parentName:"ul"},"Avoid underscores (_) to receive error")),(0,a.kt)("h3",{id:"function-body-coding"},"Function body coding"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is recommended that a block ends with an empty line, such as if, for, etc."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main (){\n    if x==1{\n        // do something\n    }\n\n    fmt.println("xxx")\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"empty line before return"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func getUser(id string)(string,error){\n    ....\n\n    return "xx",nil\n}\n')))))}m.isMDXComponent=!0}}]);