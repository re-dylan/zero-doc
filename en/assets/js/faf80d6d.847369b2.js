"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[5904],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={sidebar_position:0},p="Preparation work",s={unversionedId:"project/prepare",id:"project/prepare",title:"Preparation work",description:"Before we enter the actual development, we need to do some preparation work, such as: Go environment installation, grpc code generation tools installation, the installation of essential tools Goctl, Golang environment configuration, etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/project/prepare.md",sourceDirName:"project",slug:"/project/prepare",permalink:"/zero-doc/en/docs/project/prepare",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/project/prepare.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"MapReduce",permalink:"/zero-doc/en/docs/other-component/mapreduce"},next:{title:"Development Specifications",permalink:"/zero-doc/en/docs/project/specification"}},c=[{value:"Golang environment installation",id:"golang-environment-installation",children:[{value:"Official documentation",id:"official-documentation",children:[],level:3},{value:"mac OS installation of Go",id:"mac-os-installation-of-go",children:[],level:3},{value:"linux install Go",id:"linux-install-go",children:[],level:3},{value:"Windows installation of Go",id:"windows-installation-of-go",children:[],level:3},{value:"Other",id:"other",children:[],level:3}],level:2},{value:"Go Module Setup",id:"go-module-setup",children:[{value:"Introduction to Go Module",id:"introduction-to-go-module",children:[],level:3},{value:"MODULE configuration",id:"module-configuration",children:[],level:3}],level:2},{value:"Goctl installation",id:"goctl-installation",children:[{value:"Installation (mac&amp;linux)",id:"installation-maclinux",children:[],level:3}],level:2},{value:"protoc &amp; protoc-gen-go installation",id:"protoc--protoc-gen-go-installation",children:[{value:"protoc installation",id:"protoc-installation",children:[],level:3},{value:"protoc-gen-go installation",id:"protoc-gen-go-installation",children:[],level:3}],level:2},{value:"Other",id:"other-1",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"preparation-work"},"Preparation work"),(0,l.kt)("p",null,"Before we enter the actual development, we need to do some preparation work, such as: Go environment installation, grpc code generation tools installation, the installation of essential tools Goctl, Golang environment configuration, etc."),(0,l.kt)("h2",{id:"golang-environment-installation"},"Golang environment installation"),(0,l.kt)("p",null,"To develop a golang program, you must install the environment, we choose to take 1.15.1 as an example."),(0,l.kt)("h3",{id:"official-documentation"},"Official documentation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://golang.google.cn/doc/install"},"https://golang.google.cn/doc/install")),(0,l.kt)("h3",{id:"mac-os-installation-of-go"},"mac OS installation of Go"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download and install ",(0,l.kt)("a",{parentName:"li",href:"https://dl.google.com/go/go1.15.1.darwin-amd64.pkg"},"Go for Mac")),(0,l.kt)("li",{parentName:"ul"},"Verify the installation result",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 darwin/amd64\n")))),(0,l.kt)("h3",{id:"linux-install-go"},"linux install Go"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{parentName:"li",href:"https://golang.org/dl/go1.15.8.linux-amd64.tar.gz"},"Go for Linux")),(0,l.kt)("li",{parentName:"ul"},"Unzip the archive to `",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local"),"''",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ tar -C /usr/local -xzf go1.15.8.linux-amd64.tar.gz\n"))),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/go/bin")," to the environment variable",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ $HOME/.profile\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:/usr/local/go/bin\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ source $HOME/.profile\n"))),(0,l.kt)("li",{parentName:"ul"},"Verify the installation result",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 linux/amd64\n")))),(0,l.kt)("h3",{id:"windows-installation-of-go"},"Windows installation of Go"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download and install ",(0,l.kt)("a",{parentName:"li",href:"https://golang.org/dl/go1.15.8.windows-amd64.msi"},"Go for Windows")),(0,l.kt)("li",{parentName:"ul"},"Verify the installation result",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 windows/amd64\n")))),(0,l.kt)("h3",{id:"other"},"Other"),(0,l.kt)("p",null,"For more OS installations see ",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"https://golang.org/dl/")),(0,l.kt)("h2",{id:"go-module-setup"},"Go Module Setup"),(0,l.kt)("h3",{id:"introduction-to-go-module"},"Introduction to Go Module"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Modules are how Go manages dependencies.","[1]")),(0,l.kt)("p",null,"That is, Go Module is how Golang manages dependencies, similar to Maven in Java and Gradle in Android."),(0,l.kt)("h3",{id:"module-configuration"},"MODULE configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check if ",(0,l.kt)("inlineCode",{parentName:"p"},"GO111MODULE")," is on"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go env GO111MODULE\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"on\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enable ",(0,l.kt)("inlineCode",{parentName:"p"},"GO111MODULE"),", skip if it is enabled (i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"go env GO111MODULE")," results in ",(0,l.kt)("inlineCode",{parentName:"p"},"on"),")."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ go env -w GO111MODULE="on"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Set GOPROXY"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go env -w GOPROXY=https://goproxy.cn\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Set GOMODCACHE"),(0,l.kt)("p",{parentName:"li"},"  View GOMODCACHE"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go env GOMODCACHE\n")),(0,l.kt)("p",{parentName:"li"},"  If the directory is not empty or ",(0,l.kt)("inlineCode",{parentName:"p"},"/dev/null"),", skip it."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"go env -w GOMODCACHE=$GOPATH/pkg/mod\n")))),(0,l.kt)("h2",{id:"goctl-installation"},"Goctl installation"),(0,l.kt)("p",null,"Goctl has a great role in go-zero project development, it can effectively help developers to greatly improve development efficiency, reduce the error rate of the code, shorten the workload of business development,\nHere we highly recommend you to install it, because most of our subsequent demo examples will be demonstrated with goctl."),(0,l.kt)("h3",{id:"installation-maclinux"},"Installation (mac&linux)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download&install"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Go 1.15 and earlier\nGO111MODULE=on GOPROXY=https://goproxy.cn/,direct go get -u github.com/tal-tech/go-zero/tools/goctl@latest\n\n# Go 1.16 and later\nGOPROXY=https://goproxy.cn/,direct go install github.com/tal-tech/go-zero/tools/goctl@latest\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Environment variable detection"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"go get")," downloads the compiled binaries located in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," directory, make sure ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," has been added to the environment variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo vim /etc/paths\n")),(0,l.kt)("p",null,"Add the following to the last line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$GOPATH/bin\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH")," is the address of the file on your local machine "))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Installation result verification")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl -v\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"goctl version 1.1.4 darwin/amd64\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Add environment variables for windows users, please google it yourself"))),(0,l.kt)("h2",{id:"protoc--protoc-gen-go-installation"},"protoc & protoc-gen-go installation"),(0,l.kt)("p",null,"protoc is a tool written in C++ that translates proto files into code in a given language. In go-zero microservices, we use grpc to communicate between services, and the writing of grpc requires the use of protoc and the plugin protoc-gen-go which translates into go language rpc stub code."),(0,l.kt)("p",null,"This article demonstrates the environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mac OS"),(0,l.kt)("li",{parentName:"ul"},"protoc 3.14.0")),(0,l.kt)("h3",{id:"protoc-installation"},"protoc installation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf/releases"},"protobuf release")," page and select the appropriate zip file for your operating system"),(0,l.kt)("li",{parentName:"ul"},"Unzip ",(0,l.kt)("inlineCode",{parentName:"li"},"protoc-3.14.0-osx-x86_64.zip")," and go to ",(0,l.kt)("inlineCode",{parentName:"li"},"protoc-3.14.0-osx-x86_64"),"\n``shell\n$ cd protoc-3.14.0-osx-x86_64/bin",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},""))),(0,l.kt)("li",{parentName:"ul"},"Move the startup ",(0,l.kt)("inlineCode",{parentName:"li"},"protoc")," binary to any path that is added to the environment variable, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"$GOPATH/bin"),", it is not recommended here to put it directly with the following paths of the system.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ mv protoc $GOPATH/bin\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"$GOPATH is the actual folder address on your local machine"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verify the installation result",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoc --version\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"libprotoc 3.14.0\n")))),(0,l.kt)("h3",{id:"protoc-gen-go-installation"},"protoc-gen-go installation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download and install ",(0,l.kt)("inlineCode",{parentName:"p"},"protoc-gen-go")),(0,l.kt)("p",{parentName:"li"},"If the goctl version is already 1.2.1 or later, you can ignore this step."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go get -u github.com/golang/protobuf/protoc-gen-go@v1.3.2\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"go: found github.com/golang/protobuf/protoc-gen-go in github.com/golang/protobuf v1.4.3\ngo: google.golang.org/protobuf upgrade => v1.25.0\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Move protoc-gen-go to any path where the environment variable is being added, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),". Since the binary itself after ",(0,l.kt)("inlineCode",{parentName:"p"},"go get")," is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," directory, just make sure your ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," is in the environment variable."))),(0,l.kt)("h2",{id:"other-1"},"Other"),(0,l.kt)("p",null,"We have already prepared Go environment, Go Module configuration, Goctl, protoc & protoc-gen-go installation, these are the environments that developers must prepare in the development phase, and the next environments you can selectively install, because these environments generally exist on the server (installation work will be done for you by operations), but in order to follow I recommend that you install them locally, because most of our demo environments will be local. The following only gives the required preparation work, not the length of the document for a detailed introduction."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://etcd.io/docs/current/rfc/v3api/"},"etcd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://redis.io/"},"redis")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"mysql"))))}d.isMDXComponent=!0}}]);