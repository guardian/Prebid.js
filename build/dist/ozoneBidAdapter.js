(self.pbjsChunk=self.pbjsChunk||[]).push([[206],{5413:(e,t,i)=>{var r=i(8676),o=i(1218),n=i(433),a=i(3172),s=i(6028),d=i(8018),l=i(9581),p=i(4324),u=i(5768),g=i(4067);const c="https://elb.the-ozone-project.com",h="/openrtb2/auction",b="/static/load-cookie.html",f="https://test.ozpr.net",m="2.9.4",y={gvlid:524,aliases:[{code:"lmc",gvlid:524},{code:"venatus",gvlid:524}],version:m,code:"ozone",supportedMediaTypes:[d.G_,d.D4],cookieSyncBag:{publisherId:null,siteId:null,userIdObject:{}},propertyBag:{pageId:null,buildRequestsStart:0,buildRequestsEnd:0,endpointOverride:null},whitelabel_defaults:{logId:"OZONE",bidder:"ozone",keyPrefix:"oz",auctionUrl:c+h,cookieSyncUrl:c+b,rendererUrl:"https://prebid.the-ozone-project.com/ozone-renderer.js",batchRequests:!1},loadWhitelabelData(e){if(this.propertyBag.whitelabel)return;this.propertyBag.whitelabel=JSON.parse(JSON.stringify(this.whitelabel_defaults));let t=e.bidder||"ozone";this.propertyBag.whitelabel.logId=t.toUpperCase(),this.propertyBag.whitelabel.bidder=t;let i=l.$W.getConfig(t)||{};(0,o.fH)("got bidderConfig: ",(0,o.Go)(i)),i.kvpPrefix&&(this.propertyBag.whitelabel.keyPrefix=i.kvpPrefix);let r=this.getGetParametersAsObject();if(i.endpointOverride&&(i.endpointOverride.origin&&(this.propertyBag.endpointOverride=i.endpointOverride.origin,this.propertyBag.whitelabel.auctionUrl=i.endpointOverride.origin+h,this.propertyBag.whitelabel.cookieSyncUrl=i.endpointOverride.origin+b),r.hasOwnProperty("renderer")?r.renderer.match("%3A%2F%2F")?this.propertyBag.whitelabel.rendererUrl=decodeURIComponent(r.renderer):this.propertyBag.whitelabel.rendererUrl=r.renderer:i.endpointOverride.rendererUrl&&(this.propertyBag.whitelabel.rendererUrl=i.endpointOverride.rendererUrl),i.endpointOverride.cookieSyncUrl&&(this.propertyBag.whitelabel.cookieSyncUrl=i.endpointOverride.cookieSyncUrl),i.endpointOverride.auctionUrl&&(this.propertyBag.endpointOverride=i.endpointOverride.auctionUrl,this.propertyBag.whitelabel.auctionUrl=i.endpointOverride.auctionUrl)),i.hasOwnProperty("batchRequests")&&(this.batchValueIsValid(i.batchRequests)?this.propertyBag.whitelabel.batchRequests=i.batchRequests:(0,o.vV)("bidderConfig.batchRequests must be boolean or a number. Found & ignored data type: "+typeof i.batchRequests)),i.hasOwnProperty("videoParams")&&(this.propertyBag.whitelabel.videoParams=i.videoParams),r.hasOwnProperty("batchRequests")){let e=parseInt(r.batchRequests);this.batchValueIsValid(e)?this.propertyBag.whitelabel.batchRequests=e:(0,o.vV)("Ignoring query param: batchRequests - this must be a positive number")}try{r.hasOwnProperty("auction")&&"dev"===r.auction&&((0,o.fH)("GET: auction=dev"),this.propertyBag.whitelabel.auctionUrl=f+h),r.hasOwnProperty("cookiesync")&&"dev"===r.cookiesync&&((0,o.fH)("GET: cookiesync=dev"),this.propertyBag.whitelabel.cookieSyncUrl=f+b)}catch(e){}(0,o.fH)("set propertyBag.whitelabel to",this.propertyBag.whitelabel)},batchValueIsValid:e=>"boolean"==typeof e||"number"==typeof e&&e>0,getAuctionUrl(){return this.propertyBag.whitelabel.auctionUrl},getCookieSyncUrl(){return this.propertyBag.whitelabel.cookieSyncUrl},getRendererUrl(){return this.propertyBag.whitelabel.rendererUrl},getVideoPlacementValue:function(e){return["instream","outstream"].indexOf(e)<0?null:(0,n.A)(this.propertyBag,`whitelabel.videoParams.${e}`,null)},getBatchRequests(){return(0,o.fH)("getBatchRequests going to return ",this.propertyBag.whitelabel.batchRequests),!0===this.propertyBag.whitelabel.batchRequests?10:"number"==typeof this.propertyBag.whitelabel.batchRequests&&this.propertyBag.whitelabel.batchRequests>0&&this.propertyBag.whitelabel.batchRequests},isBidRequestValid(e){this.loadWhitelabelData(e),(0,o.fH)("isBidRequestValid : ",l.$W.getConfig(),e);let t=e.adUnitCode,i="VALIDATION FAILED : missing {param} : siteId, placementId and publisherId are REQUIRED";if(!e.params.hasOwnProperty("placementId"))return(0,o.vV)(i.replace("{param}","placementId"),t),!1;if(!this.isValidPlacementId(e.params.placementId))return(0,o.vV)("VALIDATION FAILED : placementId must be exactly 10 numeric characters",t),!1;if(!e.params.hasOwnProperty("publisherId"))return(0,o.vV)(i.replace("{param}","publisherId"),t),!1;if(!e.params.publisherId.toString().match(/^[a-zA-Z0-9\-]{12}$/))return(0,o.vV)("VALIDATION FAILED : publisherId must be exactly 12 alphanumeric characters including hyphens",t),!1;if(!e.params.hasOwnProperty("siteId"))return(0,o.vV)(i.replace("{param}","siteId"),t),!1;if(!e.params.siteId.toString().match(/^[0-9]{10}$/))return(0,o.vV)("VALIDATION FAILED : siteId must be exactly 10 numeric characters",t),!1;if(e.params.hasOwnProperty("customParams"))return(0,o.vV)("VALIDATION FAILED : customParams should be renamed to customData",t),!1;if(e.params.hasOwnProperty("customData")){if(!Array.isArray(e.params.customData))return(0,o.vV)("VALIDATION FAILED : customData is not an Array",t),!1;if(e.params.customData.length<1)return(0,o.vV)("VALIDATION FAILED : customData is an array but does not contain any elements",t),!1;if(!e.params.customData[0].hasOwnProperty("targeting"))return(0,o.vV)('VALIDATION FAILED : customData[0] does not contain "targeting"',t),!1;if("object"!=typeof e.params.customData[0].targeting)return(0,o.vV)("VALIDATION FAILED : customData[0] targeting is not an object",t),!1}if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(d.G_)){if(!e.mediaTypes[d.G_].hasOwnProperty("context"))return(0,o.vV)("No video context key/value in bid. Rejecting bid: ",e),!1;if("instream"!==e.mediaTypes[d.G_].context&&"outstream"!==e.mediaTypes[d.G_].context)return(0,o.vV)("video.context is invalid. Only instream/outstream video is supported. Rejecting bid: ",e),!1}return!0},isValidPlacementId:e=>e.toString().match(/^[0-9]{10}$/),buildRequests(e,t){this.loadWhitelabelData(e[0]),this.propertyBag.buildRequestsStart=(new Date).getTime();let i=this.propertyBag.whitelabel.bidder,r=this.propertyBag.whitelabel.keyPrefix;if((0,o.fH)(`buildRequests time: ${this.propertyBag.buildRequestsStart} v ${m} validBidRequests`,(0,o.Go)(e),"bidderRequest",(0,o.Go)(t)),this.blockTheRequest())return[];let s=!!t.fledgeEnabled,p={publisherId:"",siteId:""};e.length>0&&(this.cookieSyncBag.userIdObject=Object.assign(this.cookieSyncBag.userIdObject,this.findAllUserIdsFromEids(e[0])),this.cookieSyncBag.siteId=(0,n.A)(e[0],"params.siteId"),this.cookieSyncBag.publisherId=(0,n.A)(e[0],"params.publisherId"),p=e[0].params),(0,o.fH)("cookie sync bag",this.cookieSyncBag);let u=this.getWhitelabelConfigItem("ozone.singleRequest");u=!1!==u,(0,o.fH)(`config ${i}.singleRequest : `,u);let g={};(0,o.fH)("going to get ortb2 from bidder request...");let c=(0,n.A)(t,"ortb2",null);(0,o.fH)("got fpd: ",c),c&&(0,n.A)(c,"user")&&((0,o.fH)("added FPD user object"),g.user=c.user);const h=this.getGetParametersAsObject(),b=r+"testmode",f=h[b]||null;g.device=t?.ortb2?.device||{};let y=this.getPlacementIdOverrideFromGetParam(),I=null;var v=(0,n.A)(e,"0.ortb2.source.tid");"0"===v&&(v=null);let w=e.map((e=>{var t={};let r=y||this.getPlacementId(e);t.id=e.bidId,t.tagid=r;let l=(0,o.Dl)(this.getRefererInfo().page);t.secure="https"===l.protocol?1:0;let p=[];if(e.hasOwnProperty("mediaTypes")){if(e.mediaTypes.hasOwnProperty(d.D4)&&(p=e.mediaTypes[d.D4].sizes,(0,o.fH)("setting banner size from the mediaTypes.banner element for bidId "+t.id+": ",p)),e.mediaTypes.hasOwnProperty(d.G_)){if((0,o.fH)("openrtb 2.5 compliant video"),"object"==typeof e.mediaTypes[d.G_]){let i=(0,n.A)(e,"params.video",{});t.video=this.unpackVideoConfigIntoIABformat(e.mediaTypes[d.G_],i),t.video=this.addVideoDefaults(t.video,e.mediaTypes[d.G_],i)}let i=function(e){let t=_(e);if(!t)return null;if(t[0]&&"object"==typeof t[0]&&((0,o.fH)("getWidthAndHeightFromVideoObject found nested array inside playerSize.",t[0]),t=t[0],"number"!=typeof t[0]&&"string"!=typeof t[0]))return(0,o.fH)("getWidthAndHeightFromVideoObject found non-number/string type inside the INNER array in playerSize. This is totally wrong - cannot continue.",t[0]),null;if(2!==t.length)return(0,o.fH)("getWidthAndHeightFromVideoObject found playerSize with length of "+t.length+". This is totally wrong - cannot continue."),null;return{w:t[0],h:t[1]}}(t.video);(0,o.fH)("setting video object from the mediaTypes.video element: "+t.id+":",t.video,"wh=",i),i&&"object"==typeof i?(t.video.w=i.w,t.video.h=i.h,!function(e){let t=_(e);if(!t)return null;if(t.length<1)return null;return t[0]&&"object"==typeof t[0]}(t.video)?((0,o.fH)("setting obj.video.format to be an object"),t.video.ext.format=i):((0,o.fH)("setting obj.video.format to be an array of objects"),t.video.ext.format=[i])):(0,o.JE)("cannot set w, h & format values for video; the config is not right")}e.mediaTypes.hasOwnProperty(d.s6)&&(t.native=e.mediaTypes[d.s6],(0,o.fH)("setting native object from the mediaTypes.native element: "+t.id+":",t.native)),e.hasOwnProperty("getFloor")?((0,o.fH)("This bidRequest object has property: getFloor"),t.floor=this.getFloorObjectForAuction(e),(0,o.fH)("obj.floor is : ",t.floor)):(0,o.fH)("This bidRequest object DOES NOT have property: getFloor")}else e.hasOwnProperty("sizes")?((0,o.fH)("no mediaTypes detected - will use the sizes array in the config root"),p=e.sizes):(0,o.fH)("no mediaTypes detected, no sizes array in the config root either. Cannot set sizes for banner type");if(p.length>0&&(t.banner={topframe:1,w:p[0][0]||0,h:p[0][1]||0,format:p.map((e=>({w:e[0],h:e[1]})))}),t.placementId=r,(0,a.J)(t,"ext.prebid",{storedrequest:{id:r}}),t.ext[i]={},t.ext[i].adUnitCode=e.adUnitCode,e.params.hasOwnProperty("customData")&&(t.ext[i].customData=e.params.customData),(0,o.fH)(`obj.ext.${i} is `,t.ext[i]),null!=f)if((0,o.fH)("setting isTestMode to ",f),t.ext[i].hasOwnProperty("customData"))for(let e=0;e<t.ext[i].customData.length;e++)t.ext[i].customData[e].targeting[b]=f;else t.ext[i].customData=[{settings:{},targeting:{}}],t.ext[i].customData[0].targeting[b]=f;c&&(0,n.A)(c,"site")&&((0,o.fH)("adding fpd.site"),(0,n.A)(t,"ext."+i+".customData.0.targeting",!1)?t.ext[i].customData[0].targeting=Object.assign(t.ext[i].customData[0].targeting,c.site):(0,a.J)(t,"ext."+i+".customData.0.targeting",c.site)),!I&&(0,n.A)(e,"schain")&&(I=e.schain);let u=(0,n.A)(e,"ortb2Imp.ext.gpid");u&&(0,a.J)(t,"ext.gpid",u);let g=(0,n.A)(e,"ortb2Imp.ext.tid");if(g&&(t.ext[i].transactionId=g),v&&(t.ext[i].auctionId=v),s){const i=(0,n.A)(e,"ortb2Imp.ext.ae");(0,o.Fq)(i)?(0,a.J)(t,"ext.ae",i):(0,o.vV)("ortb2Imp.ext.ae is not an integer - ignoring it for obj.id="+t.id)}return t})),A={};if(A[i]={},A[i][r+"_pb_v"]=m,A[i][r+"_rw"]=y?1:0,e.length>0){let e=this.cookieSyncBag.userIdObject;e.hasOwnProperty("pubcid.org")&&(A[i].pubcid=e["pubcid.org"])}A[i].pv=this.getPageId();let O=this.getWhitelabelConfigItem("ozone.oz_omp_floor");(0,o.fH)(`${r}_omp_floor dollar value = `,O),"number"==typeof O?A[i][r+"_omp_floor"]=O:void 0!==O&&(0,o.vV)(`${r}_omp_floor is invalid - IF SET then this must be a number, representing dollar value eg. ${r}_omp_floor: 1.55. You have it set as a `+typeof O);let B=this.getWhitelabelConfigItem("ozone.oz_whitelist_adserver_keys"),R=(0,o.cy)(B)&&B.length>0;A[i][r+"_kvp_rw"]=R?1:0,"ozone"!==i&&((0,o.fH)("setting aliases object"),A.prebid={aliases:{ozone:i}}),h.hasOwnProperty("ozf")&&(A[i].ozf="true"===h.ozf||"1"===h.ozf?1:0),h.hasOwnProperty("ozpf")&&(A[i].ozpf="true"===h.ozpf||"1"===h.ozpf?1:0),h.hasOwnProperty("ozrp")&&h.ozrp.match(/^[0-3]$/)&&(A[i].ozrp=parseInt(h.ozrp)),h.hasOwnProperty("ozip")&&h.ozip.match(/^\d+$/)&&(A[i].ozip=parseInt(h.ozip)),null!=this.propertyBag.endpointOverride&&(A[i].origin=this.propertyBag.endpointOverride);let x=(0,n.A)(e,"0.userIdAsEids",[]);if(g.site={publisher:{id:p.publisherId},page:this.getRefererInfo().page,id:p.siteId},g.test=l.$W.getConfig("debug")?1:0,t&&t.gdprConsent){(0,o.fH)("ADDING GDPR info");let e=(0,n.A)(t,"gdprConsent.apiVersion",1);g.regs={ext:{gdpr:t.gdprConsent.gdprApplies?1:0,apiVersion:e}},(0,n.A)(g,"regs.ext.gdpr")?(0,a.J)(g,"user.ext.consent",t.gdprConsent.consentString):(0,o.fH)("**** Strange CMP info: bidderRequest.gdprConsent exists BUT bidderRequest.gdprConsent.gdprApplies is false. See bidderRequest logged above. ****")}else(0,o.fH)("WILL NOT ADD GDPR info; no bidderRequest.gdprConsent object");t&&t.uspConsent?((0,o.fH)("ADDING USP consent info"),(0,a.J)(g,"regs.ext.us_privacy",t.uspConsent)):(0,o.fH)("WILL NOT ADD USP consent info; no bidderRequest.uspConsent."),t?.ortb2?.regs?.gpp&&((0,a.J)(g,"regs.gpp",t.ortb2.regs.gpp),(0,a.J)(g,"regs.gpp_sid",t.ortb2.regs.gpp_sid)),I&&((0,o.fH)("schain found"),(0,a.J)(g,"source.ext.schain",I)),!0===l.$W.getConfig("coppa")&&(0,a.J)(g,"regs.coppa",1),A[i].cookieDeprecationLabel=(0,n.A)(t,"ortb2.device.ext.cdep","none"),(0,o.fH)("cookieDeprecationLabel from bidderRequest object = "+A[i].cookieDeprecationLabel);let D=this.getBatchRequests();if("number"==typeof D){(0,o.fH)("going to batch the requests");let e=[];for(let i=0;i<w.length;i+=D)g.id=(0,o.lk)(),(0,a.J)(g,"user.ext.eids",x),v&&(0,a.J)(g,"source.tid",v),g.imp=w.slice(i,i+D),g.ext=A,g.imp.length>0&&e.push({method:"POST",url:this.getAuctionUrl(),data:JSON.stringify(g),bidderRequest:t});return(0,o.fH)("batch request going to return : ",e),e}if((0,o.fH)("requests will not be batched."),u){(0,o.fH)("buildRequests starting to generate response for a single request"),g.id=(0,o.lk)(),g.imp=w,g.ext=A,(0,a.J)(g,"user.ext.eids",x),v&&(0,a.J)(g,"source.tid",v);var q={method:"POST",url:this.getAuctionUrl(),data:JSON.stringify(g),bidderRequest:t};return(0,o.fH)("buildRequests request data for single = ",(0,o.Go)(g)),this.propertyBag.buildRequestsEnd=(new Date).getTime(),(0,o.fH)(`buildRequests going to return for single at time ${this.propertyBag.buildRequestsEnd} (took ${this.propertyBag.buildRequestsEnd-this.propertyBag.buildRequestsStart}ms): `,q),q}let P=w.map((e=>{(0,o.fH)("buildRequests starting to generate non-single response, working on imp : ",e);let i=Object.assign({},g);return i.id=(0,o.lk)(),i.imp=[e],i.ext=A,(0,a.J)(i,"user.ext.eids",x),v&&(0,a.J)(i,"source.tid",v),(0,o.fH)("buildRequests RequestSingle (for non-single) = ",i),{method:"POST",url:this.getAuctionUrl(),data:JSON.stringify(i),bidderRequest:t}}));return this.propertyBag.buildRequestsEnd=(new Date).getTime(),(0,o.fH)(`buildRequests going to return for non-single at time ${this.propertyBag.buildRequestsEnd} (took ${this.propertyBag.buildRequestsEnd-this.propertyBag.buildRequestsStart}ms): `,P),P},getFloorObjectForAuction(e){const t={banner:(0,n.A)(e,"mediaTypes.banner.sizes",null),video:(0,n.A)(e,"mediaTypes.video.playerSize",null),native:(0,n.A)(e,"mediaTypes.native.image.sizes",null)};(0,o.fH)("getFloorObjectForAuction mediaTypesSizes : ",t);let i={};return t.banner&&(i.banner=e.getFloor({mediaType:"banner",currency:"USD",size:t.banner})||{}),t.video&&(i.video=e.getFloor({mediaType:"video",currency:"USD",size:t.video})||{}),t.native&&(i.native=e.getFloor({mediaType:"native",currency:"USD",size:t.native})||{}),(0,o.fH)("getFloorObjectForAuction returning : ",(0,o.Go)(i)),i},interpretResponse(e,t){t&&t.bidderRequest&&t.bidderRequest.bids&&this.loadWhitelabelData(t.bidderRequest.bids[0]);let i=(new Date).getTime(),r=this.propertyBag.whitelabel.bidder,a=this.propertyBag.whitelabel.keyPrefix;(0,o.fH)(`interpretResponse time: ${i} . Time between buildRequests done and interpretResponse start was ${i-this.propertyBag.buildRequestsEnd}ms`),(0,o.fH)("serverResponse, request",(0,o.Go)(e),(0,o.Go)(t));let s=(e=e.body||{}).id;if(!e.hasOwnProperty("seatbid"))return[];if("object"!=typeof e.seatbid)return[];let l=[],p=this.getWhitelabelConfigItem("ozone.enhancedAdserverTargeting");(0,o.fH)("enhancedAdserverTargeting",p),void 0===p&&(p=!0),(0,o.fH)("enhancedAdserverTargeting",p),e.seatbid=function(e){(0,o.fH)("injectAdIdsIntoAllBidResponses",(0,o.Go)(e));for(let t=0;t<e.length;t++){let i=e[t];for(let e=0;e<i.bid.length;e++)i.bid[e].adId=`${i.bid[e].impid}-${t}-${y.propertyBag.whitelabel.keyPrefix}-${e}`}return e}(e.seatbid),e.seatbid=this.removeSingleBidderMultipleBids(e.seatbid);let u=this.getWhitelabelConfigItem("ozone.oz_omp_floor"),g="number"==typeof u,c=this.getWhitelabelConfigItem("ozone.oz_whitelist_adserver_keys"),h=(0,o.cy)(c)&&c.length>0;for(let i=0;i<e.seatbid.length;i++){let b=e.seatbid[i];for(let f=0;f<b.bid.length;f++){let y=this.getBidRequestForBidId(b.bid[f].impid,t.bidderRequest.bids);(0,o.fH)(`seatbid:${i}, bid:${f} Going to set default w h for seatbid/bidRequest`,b.bid[f],y);let{defaultWidth:I,defaultHeight:_}=v(y),x=B(b.bid[f],I,_);x.meta={advertiserDomains:x.adomain||[]};let D=null,q=!1,P=(0,n.A)(x,"ext.prebid.type");(0,o.fH)(`this bid type is : ${P}`,f);let T={};if(P===d.G_)if(q=!0,this.setBidMediaTypeIfNotExist(x,d.G_),D=this.getVideoContextForBidId(x.bidId,t.bidderRequest.bids),"outstream"===D)(0,o.fH)("going to set thisBid.mediaType = VIDEO & attach a renderer to OUTSTREAM video : ",f),x.renderer=R(x.bidId);else if((0,o.fH)("bid is not an outstream video, will set thisBid.mediaType = VIDEO and thisBid.vastUrl and not attach a renderer: ",f),x.vastUrl=`https://${(0,n.A)(x,"ext.prebid.targeting.hb_cache_host","missing_host")}${(0,n.A)(x,"ext.prebid.targeting.hb_cache_path","missing_path")}?id=${(0,n.A)(x,"ext.prebid.targeting.hb_cache_id","missing_id")}`,T.hb_cache_host=(0,n.A)(x,"ext.prebid.targeting.hb_cache_host","no-host"),T.hb_cache_path=(0,n.A)(x,"ext.prebid.targeting.hb_cache_path","no-path"),x.hasOwnProperty("videoCacheKey"))(0,o.fH)("videoCacheKey already exists on the bid object, will not add it");else{let e=(0,n.A)(x,"ext.prebid.targeting.hb_uuid","no_hb_uuid");(0,o.fH)(`Adding videoCacheKey: ${e}`),x.videoCacheKey=e}else this.setBidMediaTypeIfNotExist(x,d.D4);if(p){let t=A(x.bidId,e.seatbid,I,_);(0,o.fH)("Going to iterate allBidsForThisBidId",(0,o.Go)(t)),Object.keys(t).forEach(((e,i,s)=>{(0,o.fH)(`adding adserverTargeting for ${e} for bidId ${x.bidId}`),T[a+"_"+e]=e,T[a+"_"+e+"_crid"]=String(t[e].crid),T[a+"_"+e+"_adv"]=String(t[e].adomain),T[a+"_"+e+"_adId"]=String(t[e].adId),T[a+"_"+e+"_pb_r"]=O(t[e].price,t[e].ext.prebid.type),T[a+"_"+e+"_size"]=String(t[e].width)+"x"+String(t[e].height),t[e].hasOwnProperty("dealid")&&(T[a+"_"+e+"_dealid"]=String(t[e].dealid)),g&&(T[a+"_"+e+"_omp"]=t[e].price>=u?"1":"0"),q&&(T[a+"_"+e+"_vid"]=D);let d=(0,n.A)(t[e],`ext.bidder.${r}.floor`,null);null!=d&&(T[a+"_"+e+"_flr"]=d);let l=(0,n.A)(t[e],`ext.bidder.${r}.ruleId`,null);null!=l&&(T[a+"_"+e+"_rid"]=l),e.match(/^ozappnexus/)&&(T[a+"_"+e+"_sid"]=String(t[e].cid))}))}else h?(0,o.JE)(`You have set a whitelist of adserver keys but this will be ignored because ${r}.enhancedAdserverTargeting is set to false. No per-bid keys will be sent to adserver.`):(0,o.fH)(`${r}.enhancedAdserverTargeting is set to false, so no per-bid keys will be sent to adserver.`);let{seat:H,bid:S}=w(x.bidId,e.seatbid);S=B(S,I,_),T[a+"_auc_id"]=String(s),T[a+"_winner"]=String(H),T[a+"_bid"]="true",T[a+"_cache_id"]=(0,n.A)(x,"ext.prebid.targeting.hb_cache_id","no-id"),T[a+"_uuid"]=(0,n.A)(x,"ext.prebid.targeting.hb_uuid","no-id"),p&&(T[a+"_imp_id"]=String(S.impid),T[a+"_pb_v"]=m,T[a+"_pb"]=S.price,T[a+"_pb_r"]=O(S.price,P),T[a+"_adId"]=String(S.adId),T[a+"_size"]=`${S.width}x${S.height}`),h&&((0,o.fH)("Going to filter out adserver targeting keys not in the whitelist: ",c),Object.keys(T).forEach((function(e){-1===c.indexOf(e)&&delete T[e]}))),x.adserverTargeting=T,l.push(x)}}let b=l,f=(0,n.A)(e,"ext.igi")||[];Array.isArray(f)&&f.length>0&&(f=f.filter((e=>!!this.isValidAuctionConfig(e)||((0,o.JE)("Malformed auction config detected:",e),!1))),b={bids:l,fledgeAuctionConfigs:f});let I=(new Date).getTime();return(0,o.fH)(`interpretResponse going to return at time ${I} (took ${I-i}ms) Time from buildRequests Start -> interpretRequests End = ${I-this.propertyBag.buildRequestsStart}ms`),(0,o.fH)("interpretResponse arrAllBids (serialised): ",(0,o.Go)(b)),b},isValidAuctionConfig:e=>"object"==typeof e&&null!==e,setBidMediaTypeIfNotExist(e,t){e.hasOwnProperty("mediaType")?(0,o.fH)(`found value for thisBid.mediaType: ${e.mediaType}`):((0,o.fH)(`setting thisBid.mediaType = ${t}`),e.mediaType=t)},getWhitelabelConfigItem(e){if("ozone"===this.propertyBag.whitelabel.bidder)return l.$W.getConfig(e);let t=e.replace("ozone",this.propertyBag.whitelabel.bidder);return t=t.replace("oz_",this.propertyBag.whitelabel.keyPrefix+"_"),l.$W.getConfig(t)},removeSingleBidderMultipleBids(e){var t=[];for(let a=0;a<e.length;a++){let s=e[a];var i={seat:s.seat,bid:[]},r=[];for(let e=0;e<s.bid.length;e++){var n=s.bid[e];if(!(0,o.gR)(r,n.impid)){r.push(n.impid);for(let t=e+1;t<s.bid.length;t++)s.bid[t].impid===n.impid&&s.bid[t].price>n.price&&(n=s.bid[t]);i.bid.push(n)}}t.push(i)}return t},getUserSyncs(e,t,i,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if((0,o.fH)("getUserSyncs optionsType",e,"serverResponse",t,"gdprConsent",i,"usPrivacy",r,"cookieSyncBag",this.cookieSyncBag),!t||0===t.length)return[];let{gppString:s="",applicableSections:d=[]}=a;if(e.iframeEnabled){var p=[];l.$W.getConfig("debug")&&p.push("pbjs_debug=true"),p.push("gdpr="+((0,n.A)(i,"gdprApplies",!1)?"1":"0")),p.push("gdpr_consent="+(0,n.A)(i,"consentString","")),p.push("usp_consent="+(r||"")),p.push("gpp="+s),Array.isArray(d)&&p.push(`gpp_sid=${d.join()}`);for(let e in this.cookieSyncBag.userIdObject)p.push(e+"="+this.cookieSyncBag.userIdObject[e]);p.push("publisherId="+this.cookieSyncBag.publisherId),p.push("siteId="+this.cookieSyncBag.siteId),p.push("cb="+Date.now()),p.push("bidder="+this.propertyBag.whitelabel.bidder);var u=p.join("&");return u.length>0&&(u="?"+u),(0,o.fH)("getUserSyncs going to return cookie sync url : "+this.getCookieSyncUrl()+u),[{type:"iframe",url:this.getCookieSyncUrl()+u}]}},getBidRequestForBidId(e,t){for(let i=0;i<t.length;i++)if(t[i].bidId===e)return t[i];return null},getVideoContextForBidId(e,t){let i=this.getBidRequestForBidId(e,t);return null!=i?(0,n.A)(i,"mediaTypes.video.context","unknown"):null},findAllUserIdsFromEids(e){let t={};if(!e.hasOwnProperty("userIdAsEids"))return(0,o.fH)("findAllUserIdsFromEids - no bidRequest.userIdAsEids object - will quit"),this.tryGetPubCidFromOldLocation(t,e),t;for(let i of e.userIdAsEids)t[i.source]=(0,n.A)(i,"uids.0.id");return this.tryGetPubCidFromOldLocation(t,e),t},tryGetPubCidFromOldLocation(e,t){if(!e.hasOwnProperty("pubcid")){let i=(0,n.A)(t,"crumbs.pubcid");i&&(e["pubcid.org"]=i)}},getPlacementId:e=>e.params.placementId.toString(),getPlacementIdOverrideFromGetParam(){let e=this.propertyBag.whitelabel.keyPrefix,t=this.getGetParametersAsObject();if(t.hasOwnProperty(e+"storedrequest")){if(this.isValidPlacementId(t[e+"storedrequest"]))return(0,o.fH)(`using GET ${e}storedrequest `+t[e+"storedrequest"]+" to replace placementId"),t[e+"storedrequest"];(0,o.vV)(`GET ${e}storedrequest FAILED VALIDATION - will not use it`)}return null},getGetParametersAsObject(){let e=(0,o.Dl)(this.getRefererInfo().location);return(0,o.fH)("getGetParametersAsObject found:",e.search),e.search},getRefererInfo(){if((0,g.EN)().hasOwnProperty("location"))return(0,o.fH)("FOUND location on getRefererInfo OK (prebid >= 7); will use getRefererInfo for location & page"),(0,g.EN)();(0,o.fH)("DID NOT FIND location on getRefererInfo (prebid < 7); will use legacy code that ALWAYS worked reliably to get location & page ;-)");try{return{page:top.location.href,location:top.location.href}}catch(e){return{page:window.location.href,location:window.location.href}}},blockTheRequest(){let e=this.getWhitelabelConfigItem("ozone.oz_request");return"boolean"==typeof e&&!e&&((0,o.JE)(`Will not allow auction : ${this.propertyBag.whitelabel.keyPrefix}_request is set to false`),!0)},getPageId:function(){if(null==this.propertyBag.pageId){let e="",t="0123456789abcdefghijklmnopqrstuvwxyz";for(let i=20;i>0;i--)e+=t[Math.floor(36*Math.random())];this.propertyBag.pageId=(new Date).getTime()+"_"+e}return this.propertyBag.pageId},unpackVideoConfigIntoIABformat(e,t){let i={ext:{}};return i=this._unpackVideoConfigIntoIABformat(i,e),i=this._unpackVideoConfigIntoIABformat(i,t),i},_unpackVideoConfigIntoIABformat(e,t){let i=["mimes","minduration","maxduration","protocols","w","h","startdelay","placement","plcmt","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype"];for(const o in t){var r=!1;i.forEach((function(i){i===o&&(e[o]=t[o],r=!0)})),r||(e.ext[o]=t[o])}return t.hasOwnProperty("ext")&&"object"==typeof t.ext&&(t.hasOwnProperty("ext")?e.ext=(0,o.D9)(e.ext,t.ext):e.ext=t.ext),e},addVideoDefaults(e,t,i){return e=this._addVideoDefaults(e,t,!1),e=this._addVideoDefaults(e,i,!0)},_addVideoDefaults(e,t,i){let r=this.getVideoPlacementValue((0,n.A)(t,"context"));r&&(e.placement=r);let o=(0,n.A)(t,"skippable",null);return null==o?i&&!e.hasOwnProperty("skip")&&(e.skip=o?1:0):e.skip=o?1:0,e},getLoggableBidObject(e){let t={ad:e.ad,adId:e.adId,adUnitCode:e.adUnitCode,adm:e.adm,adomain:e.adomain,adserverTargeting:e.adserverTargeting,auctionId:e.auctionId,bidId:e.bidId,bidder:e.bidder,bidderCode:e.bidderCode,cpm:e.cpm,creativeId:e.creativeId,crid:e.crid,currency:e.currency,h:e.h,w:e.w,impid:e.impid,mediaType:e.mediaType,params:e.params,price:e.price,transactionId:e.transactionId,ttl:e.ttl,ortb2:(0,n.A)(e,"ortb2"),ortb2Imp:(0,n.A)(e,"ortb2Imp")};return e.hasOwnProperty("floorData")&&(t.floorData=e.floorData),t}};function I(e){return Array.isArray(e)&&Array.isArray(e[0])?e[0]:e}function v(e){if(!e)return(0,o.fH)("defaultSize received empty bid obj! going to return fixed default size"),{defaultHeight:250,defaultWidth:300};const{sizes:t}=e,i={};return i.defaultWidth=I(t)[0],i.defaultHeight=I(t)[1],i}function w(e,t){let i=null,r=null;for(let o=0;o<t.length;o++){let n=t[o].bid,a=t[o].seat;for(let t=0;t<n.length;t++)if(n[t].impid===e&&(null==i||i.price<n[t].price)){i=n[t],r=a;break}}return{seat:r,bid:i}}function A(e,t,i,r){let o={};for(let n=0;n<t.length;n++){let a=t[n].bid,s=t[n].seat;for(let t=0;t<a.length;t++)a[t].impid===e&&(o.hasOwnProperty(s)?o[s].price<a[t].price&&(o[s]=B(a[t],i,r)):(o[s]=a[t],o[s]=B(a[t],i,r)))}return o}function O(e,t){const i=l.$W.getConfig(`mediaTypePriceGranularity.${t}`);let r=l.$W.getConfig("customPriceBucket"),n=l.$W.getConfig("priceGranularity"),a=function(e,t,i,r){if("object"==typeof t)return t;if("custom"===i)return r;return""}(0,i,n,r),s=function(e,t,i){if("string"==typeof t)return t;if("object"==typeof t)return"custom";if("string"==typeof i)return i;return"auto"}(0,i,n);(0,o.fH)("getRoundedBid. price:",e,"mediaType:",t,"configkey:",s,"configObject:",a,"mediaTypeGranularity:",i,"strBuckets:",n);let d=(0,p.j)(e,a,l.$W.getConfig("currency.granularityMultiplier"));(0,o.fH)("priceStringsObj",d);let u={medium:"med",custom:"custom",high:"high",low:"low",dense:"dense"};if(u.hasOwnProperty(s)){let e=u[s];return(0,o.fH)("getRoundedBid: looking for priceStringsKey:",e),d[e]}return d.auto}function B(e,t,i){return e.cpm=e.price,e.bidId=e.impid,e.requestId=e.impid,e.width=e.w||t,e.height=e.h||i,e.ad=e.adm,e.netRevenue=!0,e.creativeId=e.crid,e.currency="USD",e.ttl=300,e}function _(e){(0,o.fH)("getPlayerSizeFromObject received object",e);let t=(0,n.A)(e,"playerSize");return t||(t=(0,n.A)(e,"ext.playerSize")),t?"object"!=typeof t?((0,o.vV)("getPlayerSizeFromObject FAILED: playerSize is not an object/array",e),null):t:((0,o.vV)("getPlayerSizeFromObject FAILED: no playerSize in video object or ext",e),null)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=window.ozoneVideo;(0,o.fH)("newRenderer going to set loaded to "+(i?"true":"false"));const r=u.A4.install({url:y.getRendererUrl(),config:t,loaded:i,adUnitCode:e});try{r.setRender(x)}catch(e){(0,o.vV)("Prebid Error when calling setRender on renderer",r,e)}return(0,o.fH)("returning renderer object"),r}function x(e){(0,o.fH)("outstreamRender called. Going to push the call to window.ozoneVideo.outstreamRender(bid) bid = (first static, then reference)"),(0,o.fH)((0,o.Go)(y.getLoggableBidObject(e))),e.renderer.push((()=>{(0,o.fH)("Going to execute window.ozoneVideo.outstreamRender"),window.ozoneVideo.outstreamRender(e)}))}(0,s.a$)(y),(0,o.fH)(`*BidAdapter ${m} was loaded`),(0,r.E)("ozoneBidAdapter"),(0,r.E)("ozoneBidAdapter")}},e=>{e.O(0,[802,85],(()=>{return t=5413,e(e.s=t);var t}));e.O()}]);