(self.pbjsChunk=self.pbjsChunk||[]).push([[496],{7247:(e,o,t)=>{var n=t(8676),d=t(1218),r=t(9328),i=t(2649),a=t(2707),u=t(9024),c=t(2186);const s=(0,a.vM)({moduleType:u.fW,moduleName:"sharedId"}),m="cookie",l="html5",f="_pubcid_optout",p="PublisherCommonId";function g(e,o){if(o===m)return s.getCookie(e);if(o===l&&s.hasLocalStorage()){const o=s.getDataFromLocalStorage(`${e}_exp`);if(!o)return s.getDataFromLocalStorage(e);if(new Date(o).getTime()-Date.now()>0)return s.getDataFromLocalStorage(e)}}function b(e,o){return function(t,n){o?I(o,e,(()=>{t(n()||e)}))():t(e)}}function I(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0;if(!e)return;const n=(0,d.Dl)(e);n.search.id=encodeURIComponent("pubcid:"+o);const r=(0,d.c$)(n);return function(){(0,d.z$)(r,t)}}function h(){return!!(s.cookiesAreEnabled()&&g(f,m)||s.hasLocalStorage()&&g(f,l))}const v={name:"sharedId",aliasName:"pubCommonId",gvlid:i.B1,decode(e,o){if(h())return void(0,d.fH)("PubCommonId decode: Has opted-out");(0,d.fH)(" Decoded value PubCommonId "+e);return{pubcid:e}},getId:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>2?arguments[2]:void 0;if(h())return void(0,d.fH)("PubCommonId: Has opted-out");if(i.et.getCoppa())return void(0,d.fH)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");const{params:{create:t=!0,pixelUrl:n}={}}=e;let r=o;if(!r){try{"object"==typeof window[p]&&(r=window[p].getId())}catch(e){}r||(r=t&&(0,d.N9)()?(0,d.lk)():void 0)}return{id:r,callback:b(r,n)}},extendId:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>2?arguments[2]:void 0;if(h())return(0,d.fH)("PubCommonId: Has opted-out"),{id:void 0};if(i.et.getCoppa())return void(0,d.fH)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");const{params:{extend:t=!1,pixelUrl:n}={}}=e;if(t){if(n){return{callback:I(n,o)}}return{id:o}}},domainOverride:(0,c.w)(s,"sharedId"),eids:{pubcid:{source:"pubcid.org",atype:1}}};(0,r.bz)("userId",v),(0,n.E)("sharedIdSystem"),(0,n.E)("sharedIdSystem")}},e=>{e.O(0,[764,802,85],(()=>{return o=7247,e(e.s=o);var o}));e.O()}]);