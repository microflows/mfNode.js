module.exports=(()=>{var e={273:function(e){!function(o,t){true?e.exports=t():0}(this,function(){"use strict";function n(o,t){return e=n=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},e.default=e,e.__esModule=!0,n(o,t)}let e=n;e.default=e,e.__esModule=!0;const o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}};function l(t,n,s){return r=l=o()?Reflect.construct:function(o,t,n){var r=[null];r.push.apply(r,t);r=new(Function.bind.apply(o,r));return n&&e(r,n.prototype),r},r.default=r,r.__esModule=!0,l.apply(null,arguments)}o.default=o,o.__esModule=!0;let r=l;r.default=r,r.__esModule=!0;const s=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")};function i(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}s.default=s,s.__esModule=!0;const a=function(e,o,t){return o&&i(e.prototype,o),t&&i(e,t),e};a.default=a,a.__esModule=!0;var u={Greeter:{sayHello:function(e){e.res={message:"Hello "+e.req.name}},sayHi:function(e){e.res={message:"Hi "+e.req.name}}}},f={"helloworld.Greeter":{SayHello:{path:"/helloworld.Greeter/SayHello",requestStream:!1,responseStream:!1,requestSerialize:void 0,requestDeserialize:void 0,responseSerialize:void 0,responseDeserialize:void 0,originalName:"sayHello",requestType:{format:"Protocol Buffer 3 DescriptorProto",type:{field:[{name:"name",extendee:"",number:1,label:"LABEL_OPTIONAL",type:"TYPE_STRING",typeName:"",defaultValue:"",options:null,oneofIndex:0,jsonName:""}],nestedType:[],enumType:[],extensionRange:[],extension:[],oneofDecl:[],reservedRange:[],reservedName:[],name:"HelloRequest",options:null},fileDescriptorProtos:[{0:10,1:16,2:104,3:101,4:108,5:108,6:111,7:119,8:111,9:114,10:108,11:100,12:46,13:112,14:114,15:111,16:116,17:111,18:18,19:10,20:104,21:101,22:108,23:108,24:111,25:119,26:111,27:114,28:108,29:100,30:34,31:28,32:10,33:12,34:72,35:101,36:108,37:108,38:111,39:82,40:101,41:113,42:117,43:101,44:115,45:116,46:18,47:12,48:10,49:4,50:110,51:97,52:109,53:101,54:24,55:1,56:32,57:1,58:40,59:9,60:34,61:29,62:10,63:10,64:72,65:101,66:108,67:108,68:111,69:82,70:101,71:112,72:108,73:121,74:18,75:15,76:10,77:7,78:109,79:101,80:115,81:115,82:97,83:103,84:101,85:24,86:1,87:32,88:1,89:40,90:9,91:50,92:130,93:1,94:10,95:7,96:71,97:114,98:101,99:101,100:116,101:101,102:114,103:18,104:60,105:10,106:8,107:83,108:97,109:121,110:72,111:101,112:108,113:108,114:111,115:18,116:24,117:46,118:104,119:101,120:108,121:108,122:111,123:119,124:111,125:114,126:108,127:100,128:46,129:72,130:101,131:108,132:108,133:111,134:82,135:101,136:113,137:117,138:101,139:115,140:116,141:26,142:22,143:46,144:104,145:101,146:108,147:108,148:111,149:119,150:111,151:114,152:108,153:100,154:46,155:72,156:101,157:108,158:108,159:111,160:82,161:101,162:112,163:108,164:121,165:18,166:57,167:10,168:5,169:83,170:97,171:121,172:72,173:105,174:18,175:24,176:46,177:104,178:101,179:108,180:108,181:111,182:119,183:111,184:114,185:108,186:100,187:46,188:72,189:101,190:108,191:108,192:111,193:82,194:101,195:113,196:117,197:101,198:115,199:116,200:26,201:22,202:46,203:104,204:101,205:108,206:108,207:111,208:119,209:111,210:114,211:108,212:100,213:46,214:72,215:101,216:108,217:108,218:111,219:82,220:101,221:112,222:108,223:121,224:98,225:6,226:112,227:114,228:111,229:116,230:111,231:51}]},responseType:{format:"Protocol Buffer 3 DescriptorProto",type:{field:[{name:"message",extendee:"",number:1,label:"LABEL_OPTIONAL",type:"TYPE_STRING",typeName:"",defaultValue:"",options:null,oneofIndex:0,jsonName:""}],nestedType:[],enumType:[],extensionRange:[],extension:[],oneofDecl:[],reservedRange:[],reservedName:[],name:"HelloReply",options:null},fileDescriptorProtos:[{0:10,1:16,2:104,3:101,4:108,5:108,6:111,7:119,8:111,9:114,10:108,11:100,12:46,13:112,14:114,15:111,16:116,17:111,18:18,19:10,20:104,21:101,22:108,23:108,24:111,25:119,26:111,27:114,28:108,29:100,30:34,31:28,32:10,33:12,34:72,35:101,36:108,37:108,38:111,39:82,40:101,41:113,42:117,43:101,44:115,45:116,46:18,47:12,48:10,49:4,50:110,51:97,52:109,53:101,54:24,55:1,56:32,57:1,58:40,59:9,60:34,61:29,62:10,63:10,64:72,65:101,66:108,67:108,68:111,69:82,70:101,71:112,72:108,73:121,74:18,75:15,76:10,77:7,78:109,79:101,80:115,81:115,82:97,83:103,84:101,85:24,86:1,87:32,88:1,89:40,90:9,91:50,92:130,93:1,94:10,95:7,96:71,97:114,98:101,99:101,100:116,101:101,102:114,103:18,104:60,105:10,106:8,107:83,108:97,109:121,110:72,111:101,112:108,113:108,114:111,115:18,116:24,117:46,118:104,119:101,120:108,121:108,122:111,123:119,124:111,125:114,126:108,127:100,128:46,129:72,130:101,131:108,132:108,133:111,134:82,135:101,136:113,137:117,138:101,139:115,140:116,141:26,142:22,143:46,144:104,145:101,146:108,147:108,148:111,149:119,150:111,151:114,152:108,153:100,154:46,155:72,156:101,157:108,158:108,159:111,160:82,161:101,162:112,163:108,164:121,165:18,166:57,167:10,168:5,169:83,170:97,171:121,172:72,173:105,174:18,175:24,176:46,177:104,178:101,179:108,180:108,181:111,182:119,183:111,184:114,185:108,186:100,187:46,188:72,189:101,190:108,191:108,192:111,193:82,194:101,195:113,196:117,197:101,198:115,199:116,200:26,201:22,202:46,203:104,204:101,205:108,206:108,207:111,208:119,209:111,210:114,211:108,212:100,213:46,214:72,215:101,216:108,217:108,218:111,219:82,220:101,221:112,222:108,223:121,224:98,225:6,226:112,227:114,228:111,229:116,230:111,231:51}]}},SayHi:{path:"/helloworld.Greeter/SayHi",requestStream:!1,responseStream:!1,requestSerialize:void 0,requestDeserialize:void 0,responseSerialize:void 0,responseDeserialize:void 0,originalName:"sayHi",requestType:{format:"Protocol Buffer 3 DescriptorProto",type:{field:[{name:"name",extendee:"",number:1,label:"LABEL_OPTIONAL",type:"TYPE_STRING",typeName:"",defaultValue:"",options:null,oneofIndex:0,jsonName:""}],nestedType:[],enumType:[],extensionRange:[],extension:[],oneofDecl:[],reservedRange:[],reservedName:[],name:"HelloRequest",options:null},fileDescriptorProtos:[{0:10,1:16,2:104,3:101,4:108,5:108,6:111,7:119,8:111,9:114,10:108,11:100,12:46,13:112,14:114,15:111,16:116,17:111,18:18,19:10,20:104,21:101,22:108,23:108,24:111,25:119,26:111,27:114,28:108,29:100,30:34,31:28,32:10,33:12,34:72,35:101,36:108,37:108,38:111,39:82,40:101,41:113,42:117,43:101,44:115,45:116,46:18,47:12,48:10,49:4,50:110,51:97,52:109,53:101,54:24,55:1,56:32,57:1,58:40,59:9,60:34,61:29,62:10,63:10,64:72,65:101,66:108,67:108,68:111,69:82,70:101,71:112,72:108,73:121,74:18,75:15,76:10,77:7,78:109,79:101,80:115,81:115,82:97,83:103,84:101,85:24,86:1,87:32,88:1,89:40,90:9,91:50,92:130,93:1,94:10,95:7,96:71,97:114,98:101,99:101,100:116,101:101,102:114,103:18,104:60,105:10,106:8,107:83,108:97,109:121,110:72,111:101,112:108,113:108,114:111,115:18,116:24,117:46,118:104,119:101,120:108,121:108,122:111,123:119,124:111,125:114,126:108,127:100,128:46,129:72,130:101,131:108,132:108,133:111,134:82,135:101,136:113,137:117,138:101,139:115,140:116,141:26,142:22,143:46,144:104,145:101,146:108,147:108,148:111,149:119,150:111,151:114,152:108,153:100,154:46,155:72,156:101,157:108,158:108,159:111,160:82,161:101,162:112,163:108,164:121,165:18,166:57,167:10,168:5,169:83,170:97,171:121,172:72,173:105,174:18,175:24,176:46,177:104,178:101,179:108,180:108,181:111,182:119,183:111,184:114,185:108,186:100,187:46,188:72,189:101,190:108,191:108,192:111,193:82,194:101,195:113,196:117,197:101,198:115,199:116,200:26,201:22,202:46,203:104,204:101,205:108,206:108,207:111,208:119,209:111,210:114,211:108,212:100,213:46,214:72,215:101,216:108,217:108,218:111,219:82,220:101,221:112,222:108,223:121,224:98,225:6,226:112,227:114,228:111,229:116,230:111,231:51}]},responseType:{format:"Protocol Buffer 3 DescriptorProto",type:{field:[{name:"message",extendee:"",number:1,label:"LABEL_OPTIONAL",type:"TYPE_STRING",typeName:"",defaultValue:"",options:null,oneofIndex:0,jsonName:""}],nestedType:[],enumType:[],extensionRange:[],extension:[],oneofDecl:[],reservedRange:[],reservedName:[],name:"HelloReply",options:null},fileDescriptorProtos:[{0:10,1:16,2:104,3:101,4:108,5:108,6:111,7:119,8:111,9:114,10:108,11:100,12:46,13:112,14:114,15:111,16:116,17:111,18:18,19:10,20:104,21:101,22:108,23:108,24:111,25:119,26:111,27:114,28:108,29:100,30:34,31:28,32:10,33:12,34:72,35:101,36:108,37:108,38:111,39:82,40:101,41:113,42:117,43:101,44:115,45:116,46:18,47:12,48:10,49:4,50:110,51:97,52:109,53:101,54:24,55:1,56:32,57:1,58:40,59:9,60:34,61:29,62:10,63:10,64:72,65:101,66:108,67:108,68:111,69:82,70:101,71:112,72:108,73:121,74:18,75:15,76:10,77:7,78:109,79:101,80:115,81:115,82:97,83:103,84:101,85:24,86:1,87:32,88:1,89:40,90:9,91:50,92:130,93:1,94:10,95:7,96:71,97:114,98:101,99:101,100:116,101:101,102:114,103:18,104:60,105:10,106:8,107:83,108:97,109:121,110:72,111:101,112:108,113:108,114:111,115:18,116:24,117:46,118:104,119:101,120:108,121:108,122:111,123:119,124:111,125:114,126:108,127:100,128:46,129:72,130:101,131:108,132:108,133:111,134:82,135:101,136:113,137:117,138:101,139:115,140:116,141:26,142:22,143:46,144:104,145:101,146:108,147:108,148:111,149:119,150:111,151:114,152:108,153:100,154:46,155:72,156:101,157:108,158:108,159:111,160:82,161:101,162:112,163:108,164:121,165:18,166:57,167:10,168:5,169:83,170:97,171:121,172:72,173:105,174:18,175:24,176:46,177:104,178:101,179:108,180:108,181:111,182:119,183:111,184:114,185:108,186:100,187:46,188:72,189:101,190:108,191:108,192:111,193:82,194:101,195:113,196:117,197:101,198:115,199:116,200:26,201:22,202:46,203:104,204:101,205:108,206:108,207:111,208:119,209:111,210:114,211:108,212:100,213:46,214:72,215:101,216:108,217:108,218:111,219:82,220:101,221:112,222:108,223:121,224:98,225:6,226:112,227:114,228:111,229:116,230:111,231:51}]}}},"helloworld.HelloRequest":{format:"Protocol Buffer 3 DescriptorProto",type:{field:[{name:"name",extendee:"",number:1,label:"LABEL_OPTIONAL",type:"TYPE_STRING",typeName:"",defaultValue:"",options:null,oneofIndex:0,jsonName:""}],nestedType:[],enumType:[],extensionRange:[],extension:[],oneofDecl:[],reservedRange:[],reservedName:[],name:"HelloRequest",options:null},fileDescriptorProtos:[{0:10,1:16,2:104,3:101,4:108,5:108,6:111,7:119,8:111,9:114,10:108,11:100,12:46,13:112,14:114,15:111,16:116,17:111,18:18,19:10,20:104,21:101,22:108,23:108,24:111,25:119,26:111,27:114,28:108,29:100,30:34,31:28,32:10,33:12,34:72,35:101,36:108,37:108,38:111,39:82,40:101,41:113,42:117,43:101,44:115,45:116,46:18,47:12,48:10,49:4,50:110,51:97,52:109,53:101,54:24,55:1,56:32,57:1,58:40,59:9,60:34,61:29,62:10,63:10,64:72,65:101,66:108,67:108,68:111,69:82,70:101,71:112,72:108,73:121,74:18,75:15,76:10,77:7,78:109,79:101,80:115,81:115,82:97,83:103,84:101,85:24,86:1,87:32,88:1,89:40,90:9,91:50,92:130,93:1,94:10,95:7,96:71,97:114,98:101,99:101,100:116,101:101,102:114,103:18,104:60,105:10,106:8,107:83,108:97,109:121,110:72,111:101,112:108,113:108,114:111,115:18,116:24,117:46,118:104,119:101,120:108,121:108,122:111,123:119,124:111,125:114,126:108,127:100,128:46,129:72,130:101,131:108,132:108,133:111,134:82,135:101,136:113,137:117,138:101,139:115,140:116,141:26,142:22,143:46,144:104,145:101,146:108,147:108,148:111,149:119,150:111,151:114,152:108,153:100,154:46,155:72,156:101,157:108,158:108,159:111,160:82,161:101,162:112,163:108,164:121,165:18,166:57,167:10,168:5,169:83,170:97,171:121,172:72,173:105,174:18,175:24,176:46,177:104,178:101,179:108,180:108,181:111,182:119,183:111,184:114,185:108,186:100,187:46,188:72,189:101,190:108,191:108,192:111,193:82,194:101,195:113,196:117,197:101,198:115,199:116,200:26,201:22,202:46,203:104,204:101,205:108,206:108,207:111,208:119,209:111,210:114,211:108,212:100,213:46,214:72,215:101,216:108,217:108,218:111,219:82,220:101,221:112,222:108,223:121,224:98,225:6,226:112,227:114,228:111,229:116,230:111,231:51}]},"helloworld.HelloReply":{format:"Protocol Buffer 3 DescriptorProto",type:{field:[{name:"message",extendee:"",number:1,label:"LABEL_OPTIONAL",type:"TYPE_STRING",typeName:"",defaultValue:"",options:null,oneofIndex:0,jsonName:""}],nestedType:[],enumType:[],extensionRange:[],extension:[],oneofDecl:[],reservedRange:[],reservedName:[],name:"HelloReply",options:null},fileDescriptorProtos:[{0:10,1:16,2:104,3:101,4:108,5:108,6:111,7:119,8:111,9:114,10:108,11:100,12:46,13:112,14:114,15:111,16:116,17:111,18:18,19:10,20:104,21:101,22:108,23:108,24:111,25:119,26:111,27:114,28:108,29:100,30:34,31:28,32:10,33:12,34:72,35:101,36:108,37:108,38:111,39:82,40:101,41:113,42:117,43:101,44:115,45:116,46:18,47:12,48:10,49:4,50:110,51:97,52:109,53:101,54:24,55:1,56:32,57:1,58:40,59:9,60:34,61:29,62:10,63:10,64:72,65:101,66:108,67:108,68:111,69:82,70:101,71:112,72:108,73:121,74:18,75:15,76:10,77:7,78:109,79:101,80:115,81:115,82:97,83:103,84:101,85:24,86:1,87:32,88:1,89:40,90:9,91:50,92:130,93:1,94:10,95:7,96:71,97:114,98:101,99:101,100:116,101:101,102:114,103:18,104:60,105:10,106:8,107:83,108:97,109:121,110:72,111:101,112:108,113:108,114:111,115:18,116:24,117:46,118:104,119:101,120:108,121:108,122:111,123:119,124:111,125:114,126:108,127:100,128:46,129:72,130:101,131:108,132:108,133:111,134:82,135:101,136:113,137:117,138:101,139:115,140:116,141:26,142:22,143:46,144:104,145:101,146:108,147:108,148:111,149:119,150:111,151:114,152:108,153:100,154:46,155:72,156:101,157:108,158:108,159:111,160:82,161:101,162:112,163:108,164:121,165:18,166:57,167:10,168:5,169:83,170:97,171:121,172:72,173:105,174:18,175:24,176:46,177:104,178:101,179:108,180:108,181:111,182:119,183:111,184:114,185:108,186:100,187:46,188:72,189:101,190:108,191:108,192:111,193:82,194:101,195:113,196:117,197:101,198:115,199:116,200:26,201:22,202:46,203:104,204:101,205:108,206:108,207:111,208:119,209:111,210:114,211:108,212:100,213:46,214:72,215:101,216:108,217:108,218:111,219:82,220:101,221:112,222:108,223:121,224:98,225:6,226:112,227:114,228:111,229:116,230:111,231:51}]}},c=function(){function t(){s(this,t),this.email="gonorth@qq.com",this.name="mfNode.js",this.version="0.0.2",this.urls=["https://github.com/microflows/mfNode.js"],this.author="",this.description="",this.icon="",this.categories=["demo"],this.resources={git:"https://github.com/microflows/mfNode.js"},this.proto=f;for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n]}return a(t,[{key:"init",value:function(){}},{key:"instance",value:function(){return u}}]),t}();function p(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];return r(c,o)}return console.log("remote: ",p().name),p})}};var o={};function __nccwpck_require__(t){if(o[t]){return o[t].exports}var n=o[t]={exports:{}};var r=true;try{e[t].call(n.exports,n,n.exports,__nccwpck_require__);r=false}finally{if(r)delete o[t]}return n.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(273)})();