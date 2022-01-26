"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[7054],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=i,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return t?o.createElement(g,a(a({ref:n},u),{},{components:t})):o.createElement(g,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5887:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],s={sidebar_position:3},c="Configuration introduction",l={unversionedId:"project/config",id:"project/config",title:"Configuration introduction",description:"Before we officially use go-zero, let's take a look at the configuration definitions for the different service types in go-zero and see what each of the fields in the configuration does",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/project/config.md",sourceDirName:"project",slug:"/project/config",permalink:"/zero-doc/en/docs/project/config",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/project/config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Development process",permalink:"/zero-doc/en/docs/project/process"},next:{title:"Business Development",permalink:"/zero-doc/en/docs/project/business"}},u=[{value:"api configuration",id:"api-configuration",children:[{value:"Configuration description",id:"configuration-description",children:[{value:"Config",id:"config",children:[],level:4},{value:"rest.RestConf",id:"restrestconf",children:[],level:4},{value:"service.ServiceConf",id:"serviceserviceconf",children:[],level:4},{value:"logx.LogConf",id:"logxlogconf",children:[],level:4},{value:"prometheus.Config",id:"prometheusconfig",children:[],level:4},{value:"SignatureConf",id:"signatureconf",children:[],level:4},{value:"PrivateKeyConf",id:"privatekeyconf",children:[],level:4},{value:"cache.CacheConf",id:"cachecacheconf",children:[],level:4},{value:"redis.RedisConf",id:"redisredisconf",children:[],level:4}],level:3}],level:2},{value:"rpc configuration",id:"rpc-configuration",children:[{value:"configuration description",id:"configuration-description-1",children:[{value:"zrpc.RpcServerConf",id:"zrpcrpcserverconf",children:[],level:4},{value:"discov.EtcdConf",id:"discovetcdconf",children:[],level:4},{value:"redis.RedisKeyConf",id:"redisrediskeyconf",children:[],level:4}],level:3}],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-introduction"},"Configuration introduction"),(0,r.kt)("p",null,"Before we officially use go-zero, let's take a look at the configuration definitions for the different service types in go-zero and see what each of the fields in the configuration does"),(0,r.kt)("h2",{id:"api-configuration"},"api configuration"),(0,r.kt)("p",null,"The api configuration controls various functions in the api service, including but not limited to service listener address, port, environment configuration, logging configuration, etc. Let's take a look at a simple configuration to see what the common configurations in api do respectively."),(0,r.kt)("h3",{id:"configuration-description"},"Configuration description"),(0,r.kt)("p",null,"Through the yaml configuration we will find that there are many parameters we do not align with the config, this is because the config definition, there are many are with ",(0,r.kt)("inlineCode",{parentName:"p"},"optional")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\nFor the ",(0,r.kt)("inlineCode",{parentName:"p"},"optional")," option, you can determine whether you need to set it according to your needs, for the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," tag, if you think the default value is enough, you can not set.\nGenerally, the value in ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," does not need to be modified and can be considered as the best practice value."),(0,r.kt)("h4",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct{\n    RestConf // rest api configuration\n    Auth struct { // jwt authentication configuration\n        AccessSecret string // jwt key\n        AccessExpire int64 // expiration date in seconds\n    Mysql struct { // database}\n    Mysql struct { // database configuration, in addition to mysql, there may be other databases such as mongo\n        DataSource string // mysql link address, meet $user:$password@tcp($ip:$port)/$db?$queries format can be\n    }\n    CacheRedis cache.CacheConf // redis cache\n    UserRpc zrpc.RpcClientConf // rpc client configuration\n}    \n")),(0,r.kt)("h4",{id:"restrestconf"},"rest.RestConf"),(0,r.kt)("p",null,"api service base configuration, including listening address, listening port, certificate configuration, flow limit, fuse parameters, timeout parameters and other controls, to which we can expand to see."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ServiceConf // service configuration\nHost string `json:",default=0.0.0.0"` // http listening ip, default 0.0.0.0\nPort int // http listening port, required\nCertFile string `json:",optional"` // https certificate file, optional\nKeyFile string `json:",optional"` // https private key file, optional \nVerbose bool `json:",optional"` // Whether to print detailed http request logs\nMaxConns int `json:",default=10000"` // Maximum number of requests that can be accepted at the same time by http (limited number of streams), default 10000\nMaxBytes int64 `json:",default=1048576,range=[0:8388608]"` // The maximum ContentLength of http requests that can be accepted, default 1048576, the set value must not be between 0 and 8388608\n// milliseconds\nTimeout int64 `json:",default=3000"` // Timeout duration control, unit: milliseconds, default 3000\nCpuThreshold int64 `json:",default=900,range=[0:1000]"` // cpu down load threshold, default 900, allowable range 0 to 1000\nSignature SignatureConf `json:",optional"` // signature configuration\n')),(0,r.kt)("h4",{id:"serviceserviceconf"},"service.ServiceConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type ServiceConf struct {\n    Name string // Service name\n    Log logx.LogConf // Logging configuration\n    Mode string ``json:",default=pro,options=dev|test|pre|pro"` // Service environment, dev-development environment, test-test environment, pre-pre-release environment, pro-formal environment\n    MetricsUrl string `json:",optional"` // The address of the metrics reporting interface, which needs to support post json\n    Prometheus prometheus.Config `json:",optional"` // prometheus configuration\n}\n')),(0,r.kt)("h4",{id:"logxlogconf"},"logx.LogConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type LogConf struct {\n    ServiceName string `json:",optional"` // Service name\n    Mode string `json:",default=console,options=console|file|volume"` // Logging mode, console-output to console, file-output to current server (container) file, volume-output docker hanging inside the file\n    Path string `json:",default=logs"` // log storage path\n    Level string `json:",default=info,options=info|error|severe"` // Logging level\n    Compress bool `json:",optional"` // whether to enable gzip compression\n    KeepDays int `json:",optional"` // the number of days to keep the logs\n    StackCooldownMillis int `json:",default=100"` // Log write interval\n}\n')),(0,r.kt)("h4",{id:"prometheusconfig"},"prometheus.Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    Host string `json:",optional"` // prometheus listens to host\n    Port int `json:",default=9101"` // prometheus listens to the port\n    Path string `json:",default=/metrics"` // report address\n}\n')),(0,r.kt)("h4",{id:"signatureconf"},"SignatureConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'SignatureConf struct {\n    Strict bool `json:",default=false"` // Strict mode or not, if yes then PrivateKeys are required\n    Expiry time.Duration `json:",default=1h"` // validity period, default 1 hour\n    PrivateKeys []PrivateKeyConf // Signature key related configuration\n}\n')),(0,r.kt)("h4",{id:"privatekeyconf"},"PrivateKeyConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"PrivateKeyConf struct {\n    Fingerprint string // Fingerprint configuration\n    KeyFile string // key configuration\n}\n")),(0,r.kt)("h4",{id:"cachecacheconf"},"cache.CacheConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ClusterConf []NodeConf\n\nNodeConf struct {\n    redis.RedisConf\n    Weight int `json:",default=100"` // weight\n}\n')),(0,r.kt)("h4",{id:"redisredisconf"},"redis.RedisConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'RedisConf struct {\n    Host string // redis address\n    Type string `json:",default=node,options=node|cluster"` // redis type\n    Pass string `json:",optional"` // redis password\n}\n')),(0,r.kt)("h2",{id:"rpc-configuration"},"rpc configuration"),(0,r.kt)("p",null,"The rpc configuration controls the various functions of an rpc service, including but not limited to listening address, etcd configuration, timeout, fuse configuration, etc. Below we illustrate with a common rpc service configuration."),(0,r.kt)("h3",{id:"configuration-description-1"},"configuration description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"Config struct {\n    zrpc.RpcServerConf\n    CacheRedis cache.CacheConf // redis cache configuration, see the api configuration notes for details, not to be repeated here\n    Mysql struct { // mysql database access configuration, see the api configuration notes for details, not here\n        DataSource string\n    dataSource string }\nDataSource string }\n")),(0,r.kt)("h4",{id:"zrpcrpcserverconf"},"zrpc.RpcServerConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'RpcServerConf struct {\n    service.ServiceConf // service configuration, see the api configuration description for details, not to be repeated here\n    ListenOn string // rpc listener address and port, e.g. 127.0.0.1:8888\n    Etcd discov.EtcdConf `json:",optional"` // etcd related configuration\n    Auth bool `json:",optional"` // whether Auth is enabled, if yes then Redis is required\n    Redis redis.RedisKeyConf `json:",optional"` // Auth authentication\n    StrictControl bool `json:",optional"` // Strict mode or not, if yes then Auth fails if an error is encountered, otherwise it can be considered successful\n    // pending forever is not allowed\n    // never set it to 0, if zero, the underlying will set to 2s automatically\n    Timeout int64 `json:",default=2000"` // Timeout control, in milliseconds\n    CpuThreshold int64 `json:",default=900,range=[0:1000]"` cpu down load threshold, default 900, allowable range 0 to 1000\n}\n')),(0,r.kt)("h4",{id:"discovetcdconf"},"discov.EtcdConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type EtcdConf struct {\n    Hosts []string // etcd host array\n    Key string // rpc registration key\n}\n")),(0,r.kt)("h4",{id:"redisrediskeyconf"},"redis.RedisKeyConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'RedisConf struct {\n    Host string // redis host\n    Type string `json:",default=node,options=node|cluster"` // redis type\n    Pass string `json:",optional"` // redis password\n}\n\nRedisKeyConf struct {\n    RedisConf\n    Key string `json:",optional"` // authentication key\n}\n')))}p.isMDXComponent=!0}}]);