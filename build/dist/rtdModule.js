(self.pbjsChunk=self.pbjsChunk||[]).push([[79],{2269:(t,e,n)=>{var o=n(8676),i=n(9581),a=n(9328),r=n(1218),s=n(5662),c=n(6650),u=n(2305),f=n(2649),l=n(7260),g=n(8001),d=n(9024),D=n(7570);const h=(0,n(5451).ZI)((t=>u.Ay.resolveAlias(t)));let p,E,m=[],T=[],y=[];const R=function(){let t=!1;return function(){t||(Object.entries({[c.qY.AUCTION_INIT]:["onAuctionInitEvent"],[c.qY.AUCTION_END]:["onAuctionEndEvent",I],[c.qY.BID_RESPONSE]:["onBidResponseEvent"],[c.qY.BID_REQUESTED]:["onBidRequestEvent"],[c.qY.BID_ACCEPTED]:["onBidAcceptedEvent"]}).forEach((t=>{let[e,[n,o]]=t;s.on(e,(t=>{o&&o(t),T.forEach((e=>{try{e[n]&&e[n](t,e.config,E)}catch(t){(0,r.vV)(`RTD provider '${e.name}': error in '${n}':`,t)}}))}))})),t=!0)}}();function v(){return{gdpr:f.mW.getConsentData(),usp:f.t6.getConsentData(),gpp:f.ad.getConsentData(),coppa:!!i.$W.getConfig("coppa")}}function A(){E=v();let t=[];y.forEach((e=>{const n=(0,l.I6)(m,(t=>t.name===e.name));n&&n.init&&n.init(e,E)&&t.push(Object.assign(n,{config:e}))})),T=t,(0,r.fH)(`Real time data module enabled, using submodules: ${T.map((t=>t.name)).join(", ")}`)}const b=(0,g.Ak)("rtd",(function(t,e){E=v();const n=[],o=[];T.forEach((t=>{if("function"!=typeof t.getBidRequestData)return;n.push(t);const e=t.config;e&&e.waitForIt&&o.push(t)}));const i=o.length&&p.auctionDelay&&p.auctionDelay>0;let a,r=o.length,s=!1;const c=[];if(!n.length)return f();function u(){s||(this.config&&this.config.waitForIt&&r--,0===r&&setTimeout(f,0))}function f(){s||(s=!0,clearTimeout(a),c.forEach((t=>t())),t.call(this,e))}a=setTimeout(f,i?p.auctionDelay:0),n.forEach((t=>{const n=(0,D.Qo)(e.ortb2Fragments||{},h(d.zu,t.name));c.push(n.verify),e.ortb2Fragments=n.obj,t.getBidRequestData(e,u.bind(t),t.config,E)}))}));function I(t){const e=T.filter((t=>"function"==typeof t.getTargetingData));if(!e.length)return;const n=t.adUnitCodes;if(!n)return;let o=[];for(let i=e.length-1;i>=0;i--){const a=e[i].getTargetingData(n,e[i].config,E,t);a&&"object"==typeof a?o.push(a):(0,r.JE)("invalid getTargetingData response for sub module",e[i].name)}const i=function(t){if(!Array.isArray(t)||!t.length)return{};return t.reduce(((t,e)=>{for(let n in e)if(e.hasOwnProperty(n))if(t.hasOwnProperty(n)){const o=e[n];for(let e in o)o.hasOwnProperty(e)&&(t[n][e]=o[e])}else t[n]=e[n];return t}),{})}(o);return t.adUnits.forEach((t=>{const e=t.code&&i[t.code];e&&((0,r.fH)("RTD set ad unit targeting of",e,"for",t),t[c.iD.ADSERVER_TARGETING]=Object.assign(t[c.iD.ADSERVER_TARGETING]||{},e))})),t.adUnits}function q(t){T.forEach((t=>{if("function"==typeof t.onDataDeletionRequest)try{t.onDataDeletionRequest(t.config)}catch(e){(0,r.vV)(`Error executing ${t.name}.onDataDeletionRequest`,e)}}));for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];t.apply(this,n)}(0,a.xG)("realTimeData",(function(t){return m.push(t),f.o2.register(d.zu,t.name,t.gvlid),function(){const e=m.indexOf(t);e>=0&&(m.splice(e,1),A())}})),function(t){const e=t.getConfig("realTimeData",(t=>{let{realTimeData:n}=t;n.dataProviders?(e(),p=n,y=n.dataProviders,R(),(0,a.Yn)("startAuction").before(b,20),u.Ay.callDataDeletionRequest.before(q),A()):(0,r.vV)("missing parameters for real time module")}))}(i.$W),(0,o.E)("rtdModule"),(0,o.E)("rtdModule")}},t=>{t.O(0,[881,802,85],(()=>{return e=2269,t(t.s=e);var e}));t.O()}]);