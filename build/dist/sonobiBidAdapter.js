(self.pbjsChunk=self.pbjsChunk||[]).push([[761],{1792:(e,t,i)=>{var r=i(8676),n=i(6028),s=i(1218),a=i(433),d=i(8018),o=i(9581),p=i(5768),l=i(1695),u=i(8420),c=i(9707),m=i(8707);const f="sonobi",y=(0,s.lk)(),b="https://mtrx.go.sonobi.com/sbi_outstream_renderer.js",g={code:f,gvlid:104,supportedMediaTypes:[d.D4,d.G_],isBidRequestValid:e=>{if(!e.params)return!1;if(!e.params.ad_unit&&!e.params.placement_id)return!1;if(!(0,a.A)(e,"mediaTypes.banner")&&!(0,a.A)(e,"mediaTypes.video"))return!1;if((0,a.A)(e,"mediaTypes.banner")){if(!(0,a.A)(e,"mediaTypes.banner.sizes")&&!e.params.sizes)return!1}else if((0,a.A)(e,"mediaTypes.video")){if("outstream"===(0,a.A)(e,"mediaTypes.video.context")&&!(0,a.A)(e,"mediaTypes.video.playerSize"))return!1;if("instream"===(0,a.A)(e,"mediaTypes.video.context")&&!(0,a.A)(e,"mediaTypes.video.playerSize"))return!1}return!0},buildRequests:(e,t)=>{const i=e.map((e=>{let t=function(e){if(e.params.ad_unit)return e.params.ad_unit;return e.params.placement_id}(e);return/^[\/]?[\d]+[[\/].+[\/]?]?$/.test(t)?(t="/"===t.charAt(0)?t:"/"+t,{[`${t}|${e.bidId}`]:`${v(e)}|${h(e)}${x(e)}${A(e)}`}):/^[0-9a-fA-F]{20}$/.test(t)&&20===t.length?{[e.bidId]:`${t}|${v(e)}|${h(e)}${x(e)}${A(e)}`}:void(0,s.vV)(`The ad unit code or Sonobi Placement id for slot ${e.bidId} is invalid`)}));let r={};i.forEach((e=>{Object.assign(r,e)}));const n={key_maker:JSON.stringify(r),ref:t.refererInfo.page,s:(0,s.lk)(),pv:y,vp:T(),lib_name:"prebid",lib_v:"8.52.0-10",us:0,iqid:u.u.get(f,"storageAllowed")?JSON.stringify($()):null},d=t.ortb2;d&&(delete d.experianRtidData,delete d.experianRtidKey,n.fpd=JSON.stringify(d)),o.$W.getConfig("userSync")&&o.$W.getConfig("userSync").syncsPerBidder&&(n.us=o.$W.getConfig("userSync").syncsPerBidder),l.zt.canBidderRegisterSync("iframe",f)?n.ius=1:n.ius=0,(0,a.A)(e[0],"params.hfa")&&(n.hfa=(0,a.A)(e[0],"params.hfa")),e[0].params.referrer&&(n.ref=e[0].params.referrer),e[0].params.pageViewId&&(n.pv=e[0].params.pageViewId),e[0].params.appNexusTargeting&&(n.gmgt=e[0].params.appNexusTargeting),e[0].params.render&&(n.render=e[0].params.render),t&&t.gdprConsent&&(n.gdpr=t.gdprConsent.gdprApplies?"true":"false",t.gdprConsent.consentString&&(n.consent_string=t.gdprConsent.consentString)),e[0].schain&&(n.schain=JSON.stringify(e[0].schain));const p=(0,a.A)(e[0],"userIdAsEids");Array.isArray(p)&&p.length>0&&(n.eids=JSON.stringify(p));let m=(0,c.D)(t.ortb2,...e.map((e=>e.params.keywords))).join(",");if(m&&(n.kw=m),t&&t.uspConsent&&(n.us_privacy=t.uspConsent),!0===o.$W.getConfig("coppa")?n.coppa=1:n.coppa=0,(0,s.Im)(r))return null;let b="https://apex.go.sonobi.com/trinity.json";return(0,a.A)(e[0],"params.bid_request_url")&&(b=(0,a.A)(e[0],"params.bid_request_url")),{method:"GET",url:b,withCredentials:!0,data:n,bidderRequests:e}},interpretResponse:(e,t)=>{const i=e.body,r=[],n=t.data.ref;return 0===Object.keys(i.slots).length||Object.keys(i.slots).forEach((e=>{const d=i.slots[e],o=e.split("|").slice(-1)[0];const l=function(e,t){for(let i=0;i<e.length;i++)if(e[i].bidId===t)return e[i]}(t.bidderRequests,o);let u=null;if("video"===d.sbi_ct){u="video";"outstream"===(0,a.A)(l,"mediaTypes.video.context")&&(u="outstream")}const c=_(u,n);if(d.sbi_aid&&d.sbi_mouse&&d.sbi_size){const[e=1,t=1]=d.sbi_size.split("x");let n=[];d.sbi_adomain&&(n=[d.sbi_adomain]);const m={requestId:o,cpm:Number(d.sbi_mouse),width:Number(e),height:Number(t),ad:c(i.sbi_dc,d.sbi_aid),ttl:500,creativeId:d.sbi_crid||d.sbi_aid,aid:d.sbi_aid,netRevenue:!0,currency:"USD",meta:{advertiserDomains:n}};if(d.sbi_dozer&&(m.dealId=d.sbi_dozer),"video"===u)m.mediaType="video",m.vastUrl=c(i.sbi_dc,d.sbi_aid),delete m.ad,delete m.width,delete m.height;else if("outstream"===u&&l){delete m.ad,m.mediaType="video",m.vastUrl=c(i.sbi_dc,d.sbi_aid),m.renderer=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=p.A4.install({id:t.aid,url:b,config:i,loaded:!1,adUnitCode:e});try{r.setRender(w)}catch(e){(0,s.JE)("Prebid Error calling setRender on renderer",e)}return r.setEventHandlers({impression:()=>(0,s.OG)("Sonobi outstream video impression event"),loaded:()=>(0,s.OG)("Sonobi outstream video loaded event"),ended:()=>{(0,s.OG)("Sonobi outstream renderer video event")}}),r}(l.adUnitCode,m,(0,a.A)(l,"renderer.options"));let e=(0,a.A)(l,"mediaTypes.video.playerSize");e&&(m.width=e[0],m.height=e[1])}r.push(m)}})),r},getUserSyncs:(e,t,i,r)=>{const n=[];try{e.pixelEnabled&&t[0].body.sbi_px.forEach((e=>{n.push({type:e.type,url:e.url})}))}catch(e){}return n}};function v(e){let t=[];return(0,a.A)(e,"mediaTypes.video.playerSize")&&t.push((0,a.A)(e,"mediaTypes.video.playerSize")),(0,a.A)(e,"mediaTypes.video.sizes")&&t.push((0,a.A)(e,"mediaTypes.video.sizes")),(0,a.A)(e,"params.sizes")&&t.push((0,a.A)(e,"params.sizes")),(0,a.A)(e,"mediaTypes.banner.sizes")&&t.push((0,a.A)(e,"mediaTypes.banner.sizes")),(0,a.A)(e,"sizes")&&t.push((0,a.A)(e,"sizes")),[...new Set((0,s.kK)(...t))].join(",")}function h(e){const t=function(e){if(!(0,s.fp)(e.getFloor))return e.params.floor?e.params.floor:null;let t=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if((0,s.Qd)(t)&&!isNaN(t.floor)&&"USD"===t.currency)return t.floor;return""}(e);return t?`f=${t},`:""}function x(e){const t=(0,a.A)(e,"ortb2Imp.ext.gpid")||(0,a.A)(e,"ortb2Imp.ext.data.pbadslot")||(0,a.A)((0,m.p)(e.adUnitCode),"gptSlot")||e.params.ad_unit;return t?`gpid=${t},`:""}function A(e){let t;(0,a.A)(e,"mediaTypes.video")?t="video":(0,a.A)(e,"mediaTypes.banner")&&(t="display");let i="";if("video"===t){if(i="c=v,",(0,a.A)(e,"mediaTypes.video.playbackmethod")&&(i=`${i}pm=${(0,a.A)(e,"mediaTypes.video.playbackmethod").join(":")},`),(0,a.A)(e,"mediaTypes.video.placement")){i=`${i}p=${(0,a.A)(e,"mediaTypes.video.placement")},`}if((0,a.A)(e,"mediaTypes.video.plcmt")){i=`${i}pl=${(0,a.A)(e,"mediaTypes.video.plcmt")},`}}else"display"===t&&(i="c=d,");return i}const _=(e,t)=>(i,r)=>{if("video"===e||"outstream"===e)return function(e,t,i){return`https://${e}apex.go.sonobi.com/vast.xml?vid=${t}&ref=${encodeURIComponent(i)}`}(i,r,t);return'<script type="text/javascript" src="'+`https://${i}apex.go.sonobi.com/sbi.js?aid=${r}&as=null&ref=${encodeURIComponent(t)}`+'"><\/script>'};const S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER;return e.innerWidth>=t&&e.innerWidth<i}};function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;const t=S(e),i=992,r=768;return t(0,768)?"mobile":t(r,i)?"tablet":"desktop"}function $(){var e,t,i,r="_iiq_fdata",n=function(){if(void 0!==e)return e;try{return e=!!window.localStorage}catch(t){e=!1}return!1},s=function(e){try{return JSON.parse(e)}catch(e){return null}}((t=r,n()?window.localStorage.getItem(t):null));s&&s.pcid?s&&!s.pcidDate&&(s.pcidDate=Date.now()):s={pcid:(i=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=(i+16*Math.random())%16|0;return i=Math.floor(i/16),("x"===e?t:3&t|8).toString(16)}))),pcidDate:Date.now()};return function(e,t){try{n()&&window.localStorage.setItem(e,t)}catch(e){return null}}(r,JSON.stringify(s)),s}function w(e){e.renderer.push((()=>{const[t,i]=e.getSize().split("x"),r=new window.SbiOutstreamRenderer;r.init({vastUrl:e.vastUrl,height:i,width:t}),r.setRootElement(e.adUnitCode)}))}(0,n.a$)(g),(0,r.E)("sonobiBidAdapter"),(0,r.E)("sonobiBidAdapter")}},e=>{e.O(0,[247,5,802,85],(()=>{return t=1792,e(e.s=t);var t}));e.O()}]);