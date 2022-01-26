"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[6517],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,c(c({ref:t},s),{},{components:r})):n.createElement(g,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2495:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={sidebar_position:4},p="\u6784\u5efaRPC\u670d\u52a1",l={unversionedId:"quick-start/build-rpc",id:"quick-start/build-rpc",title:"\u6784\u5efaRPC\u670d\u52a1",description:"\u521b\u5efauser rpc\u670d\u52a1",source:"@site/docs/quick-start/build-rpc.md",sourceDirName:"quick-start",slug:"/quick-start/build-rpc",permalink:"/zero-doc/zh/docs/quick-start/build-rpc",editUrl:"https://github.com/zeromicro/zero-doc/tree/main/website/docs/quick-start/build-rpc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efaAPI\u670d\u52a1",permalink:"/zero-doc/zh/docs/quick-start/build-api"},next:{title:"goctl\u4ecb\u7ecd",permalink:"/zero-doc/zh/docs/build-tool/tool-intro"}},s=[{value:"\u521b\u5efauser rpc\u670d\u52a1",id:"\u521b\u5efauser-rpc\u670d\u52a1",children:[],level:3},{value:"\u542f\u52a8\u670d\u52a1\u5e76\u9a8c\u8bc1",id:"\u542f\u52a8\u670d\u52a1\u5e76\u9a8c\u8bc1",children:[],level:3}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6784\u5efarpc\u670d\u52a1"},"\u6784\u5efaRPC\u670d\u52a1"),(0,o.kt)("h3",{id:"\u521b\u5efauser-rpc\u670d\u52a1"},"\u521b\u5efauser rpc\u670d\u52a1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efauser rpc\u670d\u52a1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo/mall \n$ mkdir -p user/rpc && cd user/rpc  \n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"user.proto"),"\u6587\u4ef6\uff0c\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"getUser"),"\u65b9\u6cd5"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="$ vim ~/go-zero-demo/mall/user/rpc/user.proto"',title:'"$',vim:!0,'~/go-zero-demo/mall/user/rpc/user.proto"':!0},'syntax = "proto3";\n\npackage user;\n\n//protoc-gen-go \u7248\u672c\u5927\u4e8e1.4.0, proto\u6587\u4ef6\u9700\u8981\u52a0\u4e0ago_package,\u5426\u5219\u65e0\u6cd5\u751f\u6210\noption go_package = "./user";\n\nmessage IdRequest {\n    string id = 1;\n}\n\nmessage UserResponse {\n    // \u7528\u6237id\n    string id = 1;\n    // \u7528\u6237\u540d\u79f0\n    string name = 2;\n    // \u7528\u6237\u6027\u522b\n    string gender = 3;\n}\n\nservice User {\n    rpc getUser(IdRequest) returns(UserResponse);\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u751f\u6210\u4ee3\u7801"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo/mall/user/rpc\n$ goctl rpc template -o user.proto\n$ goctl rpc proto -src user.proto -dir .\n[goclt version <=1.2.1] protoc  -I=/Users/xx/mall/user user.proto --goctl_out=plugins=grpc:/Users/xx/mall/user/user\n[goctl version > 1.2.1] protoc  -I=/Users/xx/mall/user user.proto --go_out=plugins=grpc:/Users/xx/mall/user/user\nDone.\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"protoc-gen-go\u7248\u672c")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u5b89\u88c5\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc-gen-go")," \u7248\u5927\u4e8e1.4.0, proto\u6587\u4ef6\u5efa\u8bae\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"p"},"go_package"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u586b\u5145\u4e1a\u52a1\u903b\u8f91"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/logic/getuserlogic.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package logic\n\nimport (\n    "context"\n\n  "go-zero-demo/mall/user/rpc/internal/svc"\n  "go-zero-demo/mall/user/rpc/user"\n    \n  "github.com/tal-tech/go-zero/core/logx"\n)\n\ntype GetUserLogic struct {\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n    logx.Logger\n}\n\nfunc NewGetUserLogic(ctx context.Context, svcCtx *svc.ServiceContext) *GetUserLogic {\n    return &GetUserLogic{\n        ctx:    ctx,\n        svcCtx: svcCtx,\n        Logger: logx.WithContext(ctx),\n    }\n}\n\nfunc (l *GetUserLogic) GetUser(in *user.IdRequest) (*user.UserResponse, error) {\n    return &user.UserResponse{\n        Id:   "1",\n        Name: "test",\n    }, nil\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4fee\u6539\u914d\u7f6e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/config/config.go\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package config\n\nimport (\n    "github.com/tal-tech/go-zero/zrpc"\n)\n\ntype Config struct {\n    zrpc.RpcServerConf\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0yaml\u914d\u7f6e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim etc/user.yaml \n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: user.rpc\nListenOn: 127.0.0.1:8080\nEtcd:\n  Hosts:\n  - 127.0.0.1:2379\n  Key: user.rpc\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4fee\u6539\u76ee\u5f55\u6587\u4ef6"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo/mall/rpc\n$ mkdir userclient && mv /user/user.go /userclient \n")))),(0,o.kt)("h3",{id:"\u542f\u52a8\u670d\u52a1\u5e76\u9a8c\u8bc1"},"\u542f\u52a8\u670d\u52a1\u5e76\u9a8c\u8bc1"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"etcd\u5b89\u88c5")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.5/install/"},"\u70b9\u6b64\u67e5\u770betcd\u5b89\u88c5\u6559\u7a0b"),"\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8etcd",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ etcd\n"))),(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8user rpc",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go run user.go -f etc/user.yaml\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Starting rpc server at 127.0.0.1:8080...\n")))))}m.isMDXComponent=!0}}]);