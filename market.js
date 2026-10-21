/* Market, market.saqeralkhalifa.com. Listings posted through the form live in Supabase; the WhatsApp imports live in import.json. */
(function(){
var SB = {url:"https://nvzdniisxdllohxfsjil.supabase.co", key:"sb_publishable_MPqPXsk6BkRbeVBsenDoFg_Qyya0cZG"};
var LIVE = SB.url.indexOf("http") === 0;
function sbh(extra){ var h = {apikey:SB.key}; for(var k in extra) h[k] = extra[k]; return h; }
function rpc(fn, body){ return fetch(SB.url+"/rest/v1/rpc/"+fn, {method:"POST", headers:sbh({"Content-Type":"application/json"}), body:JSON.stringify(body)}).then(function(r){ return r.json().then(function(j){ if(!r.ok) throw new Error(j && j.message || r.status); return j; }); }); }
function upPhoto(dataUrl, i){
  var bin = atob(dataUrl.split(",")[1]), a = new Uint8Array(bin.length); for(var k=0;k<bin.length;k++) a[k] = bin.charCodeAt(k);
  var name = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2,8) + "-" + i + ".jpg";
  return fetch(SB.url+"/storage/v1/object/photos/"+name, {method:"POST", headers:sbh({"Content-Type":"image/jpeg"}), body:new Blob([a],{type:"image/jpeg"})}).then(function(r){ if(!r.ok) throw new Error("photo"); return SB.url+"/storage/v1/object/public/photos/"+name; });
}
var T = {
 en:{kicker:"Team Bahrain community", h:"Market", sub:"New and used sports equipment in Bahrain: bikes, wheels, trainers, watches, shoes and everything for triathlon, cycling, running and swimming. Anyone can post, and a listing appears as soon as it is submitted.",
  post:"Post an item", search:"Search the market", all:"Everything", showSold:"Show sold items", sortNew:"Newest first", sortLow:"Price, low to high", sortHigh:"Price, high to low",
  count:function(n){return n===1?"1 item for sale":n+" items for sale";}, empty:"Nothing matches yet. Try another category or a shorter search.", loading:"Loading the market",
  sold:"Sold", nophoto:"No photo yet", onreq:"Price on request", back:"Back to the market", posted:"Posted", seller:"Seller", contact:"Contact the seller",
  wa:"WhatsApp", call:"Call", copy:"Copy link", copied:"Link copied", nophone:"The seller did not leave a number with this post. Message them in the Team Bahrain WhatsApp group.",
  waMsg:function(t){return "Hello, I saw your "+t+" on the Market at market.saqeralkhalifa.com. Is it still available?";},
  safety:"The Market is a noticeboard. Listings are posted by their sellers and are not checked by anyone. See the item in person before you pay, and meet in a public place.",
  ownQ:"Is this your item? Mark it as sold", ownQ2:"Is this your item? Mark it as available again", ownP:"Enter the WhatsApp number shown on this listing to confirm it is yours.", ownPh:"Your WhatsApp number",
  ownWrong:"That number does not match this listing. Use the number shown above.", ownUnknown:"This listing cannot be changed here yet. Use the Report this listing link below and it will be updated for you.",
  smpBadge:"Sample photo", smpNote:"Sample photo of a similar item, not the seller's own. Ask the seller for photos of the actual item.", smpBy:"Photo",
  report:"Report this listing", fromWa:"First posted in the Team Bahrain WhatsApp group.", fromIg:"First posted on the Team Bahrain Triathlon Instagram page.", notfound:"This listing was not found. It may have been removed by the seller.",
  manage:"Manage your listing", manageP:"This private link lets you change the status of your listing. Keep it to yourself.", markSold:"Mark as sold", markAvail:"Mark as available", remove:"Remove listing", done:"Saved.",
  fh:"Post an item", fp:"Fill in the details and add photos. Your listing goes live on the Market as soon as you submit it.",
  fTitle:"What are you selling?", fTitleH:"Brand, model and size, for example Canyon Speedmax CF 8, size M", fCat:"Category", fCond:"Condition", fPrice:"Price", fPriceH:"Leave empty to show price on request",
  fSize:"Size", fSizeH:"Frame size, shoe size or watch size, if it applies", fLoc:"Location", fDesc:"Description", fDescH:"Condition, what is included, why you are selling",
  fPhotos:"Photos", fAdd:"Add photos from your phone or computer", fPhotosH:"Up to 10 photos. They are resized before upload.", fName:"Your name", fPhone:"WhatsApp number",
  fPhoneH:"Buyers will contact you on this number. It is shown on the listing.", fConsent:"I am the owner of this item or selling it with the owner's permission, and I agree that my name, number and photos are shown publicly on this page.",
  submit:"Post my item", sending:"Posting", errTitle:"Please write what you are selling.", errPhone:"Please add a WhatsApp number with at least 8 digits.", errConsent:"Please tick the box to confirm.",
  errNet:"The listing could not be posted. Check your connection and try again.", errOff:"Posting opens later today. Please try again in a few hours.", okH:"Your item is live.", okView:"View your listing", okKeep:"Save this private link. You will need it to mark the item as sold or remove it:",
  foot:'Market <span class="sep"></span> Dr. Saqer AlKhalifa <span class="sep"></span> <a href="https://saqeralkhalifa.com/">saqeralkhalifa.com</a> <span class="sep"></span> <a href="https://saqeralkhalifa.com/privacy/">Privacy</a>'},
 ar:{kicker:"مجتمع فريق البحرين", h:"السوق", sub:"معدات رياضية جديدة ومستعملة في البحرين: دراجات وعجلات وأجهزة تدريب منزلي وساعات وأحذية وكل ما يلزم للترايثلون والدراجات والجري والسباحة. يمكن لأي شخص أن يعرض منتجه، ويظهر الإعلان فور إرساله.",
  post:"اعرض منتجك", search:"ابحث في السوق", all:"الكل", showSold:"إظهار المباع", sortNew:"الأحدث أولا", sortLow:"السعر من الأقل", sortHigh:"السعر من الأعلى",
  count:function(n){return n+" منتج معروض للبيع";}, empty:"لا توجد نتائج. جرّب قسما آخر أو كلمة بحث أقصر.", loading:"جار تحميل السوق",
  sold:"تم البيع", nophoto:"لا توجد صورة", onreq:"السعر عند التواصل", back:"العودة إلى السوق", posted:"نشر في", seller:"البائع", contact:"تواصل مع البائع",
  wa:"واتساب", call:"اتصال", copy:"نسخ الرابط", copied:"تم نسخ الرابط", nophone:"لم يترك البائع رقما مع هذا الإعلان. راسله في مجموعة فريق البحرين على واتساب.",
  waMsg:function(t){return "مرحبا، رأيت إعلانك ("+t+") في السوق على market.saqeralkhalifa.com. هل ما زال متوفرا؟";},
  safety:"السوق لوحة إعلانات. ينشر البائعون إعلاناتهم بأنفسهم ولا يراجعها أحد. عاين المنتج بنفسك قبل الدفع، واختر مكانا عاما للقاء.",
  ownQ:"هل هذا منتجك؟ اجعله مباعا", ownQ2:"هل هذا منتجك؟ اجعله متوفرا من جديد", ownP:"أدخل رقم الواتساب الظاهر في هذا الإعلان لتأكيد أنه لك.", ownPh:"رقم الواتساب",
  ownWrong:"هذا الرقم لا يطابق الإعلان. استخدم الرقم الظاهر أعلاه.", ownUnknown:"لا يمكن تعديل هذا الإعلان من هنا بعد. استخدم رابط الإبلاغ عن الإعلان في الأسفل وسيتم تحديثه.",
  smpBadge:"صورة توضيحية", smpNote:"صورة توضيحية لمنتج مشابه وليست للمنتج المعروض. اطلب من البائع صورا للمنتج نفسه.", smpBy:"الصورة",
  report:"الإبلاغ عن هذا الإعلان", fromWa:"نشر أولا في مجموعة فريق البحرين على واتساب.", fromIg:"نشر أولا على صفحة فريق البحرين للترايثلون في إنستغرام.", notfound:"لم يتم العثور على هذا الإعلان. ربما حذفه البائع.",
  manage:"إدارة إعلانك", manageP:"هذا الرابط الخاص يتيح لك تغيير حالة إعلانك. احتفظ به لنفسك.", markSold:"تم البيع", markAvail:"متوفر", remove:"حذف الإعلان", done:"تم الحفظ.",
  fh:"اعرض منتجك", fp:"أدخل التفاصيل وأضف الصور. يظهر إعلانك في السوق فور إرساله.",
  fTitle:"ماذا تبيع؟", fTitleH:"الماركة والموديل والمقاس، مثل Canyon Speedmax CF 8 مقاس M", fCat:"القسم", fCond:"الحالة", fPrice:"السعر", fPriceH:"اتركه فارغا ليظهر السعر عند التواصل",
  fSize:"المقاس", fSizeH:"مقاس الإطار أو الحذاء أو الساعة إن وجد", fLoc:"الموقع", fDesc:"الوصف", fDescH:"الحالة وما يشمله البيع وسبب البيع",
  fPhotos:"الصور", fAdd:"أضف صورا من هاتفك أو حاسوبك", fPhotosH:"حتى 10 صور، يتم تصغيرها قبل الرفع.", fName:"اسمك", fPhone:"رقم الواتساب",
  fPhoneH:"سيتواصل معك المشترون على هذا الرقم، وهو يظهر في الإعلان.", fConsent:"أنا مالك هذا المنتج أو أبيعه بإذن مالكه، وأوافق على ظهور اسمي ورقمي والصور للعامة في هذه الصفحة.",
  submit:"انشر الإعلان", sending:"جار النشر", errTitle:"اكتب ما الذي تبيعه.", errPhone:"أضف رقم واتساب من 8 أرقام على الأقل.", errConsent:"ضع علامة في المربع للتأكيد.",
  errNet:"تعذر نشر الإعلان. تأكد من الاتصال وحاول مرة أخرى.", errOff:"يفتح النشر لاحقا اليوم. حاول مرة أخرى بعد ساعات.", okH:"إعلانك منشور الآن.", okView:"عرض إعلانك", okKeep:"احفظ هذا الرابط الخاص، ستحتاجه لتغيير الحالة إلى تم البيع أو لحذف الإعلان:",
  foot:'السوق <span class="sep"></span> د. صقر آل خليفة <span class="sep"></span> <a href="https://saqeralkhalifa.com/">saqeralkhalifa.com</a> <span class="sep"></span> <a href="https://saqeralkhalifa.com/privacy/">الخصوصية</a>'}
};
var CATS = [
 ["bikes","Bikes","الدراجات"],["wheels","Wheels","العجلات"],["trainers","Indoor trainers","أجهزة التدريب المنزلي"],["watches","Watches and electronics","الساعات والأجهزة"],
 ["shoes","Shoes","الأحذية"],["apparel","Clothing and tri suits","الملابس وبدلات الترايثلون"],["helmets","Helmets","الخوذ"],["swim","Swim","السباحة"],["run","Run","الجري"],
 ["parts","Parts and accessories","القطع والإكسسوارات"],["nutrition","Nutrition","التغذية"],["entries","Race entries","تذاكر السباقات"],["other","Other","أخرى"]];
var CONDS = [["new","New","جديد"],["like-new","Like new","شبه جديد"],["used","Used","مستعمل"],["for-parts","For parts or repair","للقطع أو الإصلاح"]];
var W = {
 en:{tabSale:"For sale", tabWant:"Wanted", ask:"Post a request", backW:"Back to wanted",
  wSub:"Looking for something you cannot find for sale? Post what you need, and shops and members who have it can reply to you on WhatsApp. Requests stay up for 30 days.",
  wCount:function(n){return n===1?"1 open request":n+" open requests";}, wEmpty:"No requests here yet. Be the first to post what you are looking for.",
  wSearch:"Search the requests", showFound:"Show requests already found", cantFind:"Cannot find what you need?",
  budget:"Budget", nobudget:"Open to offers", found:"Found", expired:"Expired", buyer:"Posted by", shop:"Shop",
  replies:function(n){return n===0?"No replies yet":n===1?"1 reply":n+" replies";},
  haveH:"I have this", haveP:"Leave your details and a price if you like. Your reply is shown on this request, and WhatsApp opens with a message to the person looking for it.",
  rName:"Your name", rShop:"I am replying for a shop", rShopName:"Shop name", rPhone:"Your WhatsApp number", rPrice:"Your price (optional)", rNote:"Note (optional)", rNoteH:"Condition, size, or where the item can be seen",
  rSend:"Send reply and open WhatsApp", rDone:"Your reply is posted. If WhatsApp did not open, use the button below.", rOpen:"Open WhatsApp",
  rErrGone:"This request is closed and cannot take new replies.", rErrFull:"This request has reached its limit of replies.", rNone:"Nobody has replied yet. If you have this item, use the form to reply.",
  waAsk:function(t){return "Hello, I saw your request for "+t+" on the Market at market.saqeralkhalifa.com. I have one.";},
  waPrice:"My price is", waBuyer:"WhatsApp the buyer", waReply:function(t){return "Hello, I saw your reply to my request for "+t+" on the Market.";},
  askH:"Post a request", askP:"Tell people what you are looking for. Shops and members who have it can reply to you on WhatsApp. Your request stays up for 30 days, and you can renew it.",
  aTitle:"What are you looking for?", aTitleH:"Brand, model and size, for example Garmin Forerunner 965, or a 955 in good condition", aCond:"New or used", aBudget:"Budget", aBudgetH:"Leave empty if you are open to offers",
  aDesc:"Details", aDescH:"Anything that helps, such as size, color, year or when you need it", aPhoneH:"Sellers will contact you on this number. It is shown on the request.",
  fShop:"I am posting for a shop", fShopName:"Shop name", aConsent:"I agree that my name, number and request are shown publicly on this page.",
  aSubmit:"Post my request", aErrTitle:"Please write what you are looking for.", aOk:"Your request is live.", aView:"View your request", aKeep:"Save this private link. You will need it to mark the request as found or to remove it:",
  wOwnQ:"Is this your request? Mark it as found", wOwnQ2:"Is this your request? Open it again", wOwnP:"Enter the WhatsApp number shown on this request to confirm it is yours.",
  markFound:"Mark as found", renew:"Still looking, renew for 30 days", removeR:"Remove request", wManage:"Manage your request", wManageP:"This private link lets you change your request. Keep it to yourself.",
  wNotfound:"This request was not found. It may have been removed.", until:"Open until",
  wSafety:"Requests are posted by the people looking for the items and are not checked by anyone. See the item in person before you pay, and meet in a public place."},
 ar:{tabSale:"للبيع", tabWant:"مطلوب", ask:"اطلب منتجا", backW:"العودة إلى المطلوب",
  wSub:"تبحث عن شيء لا تجده معروضا للبيع؟ انشر ما تحتاجه، وسيتواصل معك على واتساب أصحاب المحلات والأعضاء الذين يملكونه. يبقى الطلب منشورا 30 يوما.",
  wCount:function(n){return n+" طلب مفتوح";}, wEmpty:"لا توجد طلبات هنا بعد. كن أول من ينشر ما يبحث عنه.",
  wSearch:"ابحث في الطلبات", showFound:"إظهار الطلبات التي تم إيجادها", cantFind:"لم تجد ما تبحث عنه؟",
  budget:"الميزانية", nobudget:"مفتوح للعروض", found:"تم إيجاده", expired:"انتهت مدته", buyer:"صاحب الطلب", shop:"محل",
  replies:function(n){return n===0?"لا توجد ردود بعد":n===1?"رد واحد":n===2?"ردان":n+" ردود";},
  haveH:"عندي هذا المنتج", haveP:"اترك بياناتك وسعرا إن أردت. يظهر ردك على هذا الطلب، ويفتح واتساب برسالة إلى صاحب الطلب.",
  rName:"اسمك", rShop:"أرد باسم محل", rShopName:"اسم المحل", rPhone:"رقم الواتساب", rPrice:"سعرك (اختياري)", rNote:"ملاحظة (اختيارية)", rNoteH:"الحالة أو المقاس أو مكان معاينة المنتج",
  rSend:"أرسل الرد وافتح واتساب", rDone:"تم نشر ردك. إذا لم يفتح واتساب فاستخدم الزر أدناه.", rOpen:"افتح واتساب",
  rErrGone:"هذا الطلب مغلق ولا يقبل ردودا جديدة.", rErrFull:"وصل هذا الطلب إلى الحد الأقصى من الردود.", rNone:"لم يرد أحد بعد. إذا كان المنتج عندك فاستخدم النموذج للرد.",
  waAsk:function(t){return "مرحبا، رأيت طلبك ("+t+") في السوق على market.saqeralkhalifa.com. لدي ما تبحث عنه.";},
  waPrice:"سعري", waBuyer:"راسل صاحب الطلب على واتساب", waReply:function(t){return "مرحبا، رأيت ردك على طلبي ("+t+") في السوق.";},
  askH:"اطلب منتجا", askP:"اكتب ما تبحث عنه، وسيتواصل معك على واتساب من يملكه من المحلات والأعضاء. يبقى طلبك منشورا 30 يوما ويمكنك تجديده.",
  aTitle:"ما الذي تبحث عنه؟", aTitleH:"الماركة والموديل والمقاس، مثل Garmin Forerunner 965 أو 955 بحالة جيدة", aCond:"جديد أو مستعمل", aBudget:"الميزانية", aBudgetH:"اتركها فارغة إذا كنت تقبل العروض",
  aDesc:"التفاصيل", aDescH:"أي معلومة تساعد، مثل المقاس أو اللون أو سنة الصنع أو موعد الحاجة", aPhoneH:"سيتواصل معك البائعون على هذا الرقم، وهو يظهر في الطلب.",
  fShop:"أنشر باسم محل", fShopName:"اسم المحل", aConsent:"أوافق على ظهور اسمي ورقمي وطلبي للعامة في هذه الصفحة.",
  aSubmit:"انشر الطلب", aErrTitle:"اكتب ما الذي تبحث عنه.", aOk:"طلبك منشور الآن.", aView:"عرض طلبك", aKeep:"احفظ هذا الرابط الخاص، ستحتاجه لتغيير الحالة إلى تم إيجاده أو لحذف الطلب:",
  wOwnQ:"هل هذا طلبك؟ اجعله تم إيجاده", wOwnQ2:"هل هذا طلبك؟ افتحه من جديد", wOwnP:"أدخل رقم الواتساب الظاهر في هذا الطلب لتأكيد أنه لك.",
  markFound:"تم إيجاده", renew:"ما زلت أبحث، جدده 30 يوما", removeR:"حذف الطلب", wManage:"إدارة طلبك", wManageP:"هذا الرابط الخاص يتيح لك تغيير طلبك. احتفظ به لنفسك.",
  wNotfound:"لم يتم العثور على هذا الطلب. ربما تم حذفه.", until:"مفتوح حتى",
  wSafety:"ينشر أصحاب الطلبات طلباتهم بأنفسهم ولا يراجعها أحد. عاين المنتج بنفسك قبل الدفع، واختر مكانا عاما للقاء."}
};
for(var wl in W){ for(var wk in W[wl]) T[wl][wk] = W[wl][wk]; }
var WCONDS = [["any","New or used","جديد أو مستعمل"],["new","New only","جديد فقط"],["used","Used is fine","مستعمل"]];
var MON = {en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]};

var loading = false, items = null, wants = null, rcount = {}, state = {cat:"all", q:"", sold:true, sort:"new", view:"sale", wcat:"all", wq:"", found:false}, view = document.getElementById("view");
function L(){ return document.documentElement.lang === "ar" ? "ar" : "en"; }
function t(k){ return T[L()][k]; }
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
function lab(list, k){ for(var i=0;i<list.length;i++) if(list[i][0]===k) return L()==="ar" ? list[i][2] : list[i][1]; return k; }
function price(it){ if(it.price == null || it.price === "" || isNaN(it.price)) return t("onreq"); var n = Number(it.price).toLocaleString("en-US"); return L()==="ar" ? n+" "+(it.currency==="BHD"?"د.ب":it.currency) : (it.currency||"BHD")+" "+n; }
function date(s){ var d = new Date(s); if(isNaN(d)) return ""; return d.getDate()+" "+MON[L()][d.getMonth()]+" "+d.getFullYear(); }
function digits(p){ var d = String(p||"").replace(/\D/g,""); if(d.length === 8) d = "973"+d; return d; }
function pretty(p){ var d = digits(p); if(!d) return ""; if(d.indexOf("973")===0 && d.length===11) return "+973 "+d.slice(3,7)+" "+d.slice(7); return "+"+d; }
function img(src){ return /^https?:/.test(src) ? src : src; }
function params(){ return new URLSearchParams(location.search); }
function go(url){ history.pushState(null, "", url); route(); window.scrollTo(0, 0); }

function load(){
  if(loading) return; loading = true;
  view.innerHTML = '<p class="mk-empty">'+esc(t("loading"))+'</p>';
  var cols = "id,created,status,category,title,description,price,currency,condition,size,location,seller,phone,photos,source,sample,is_shop,shop_name";
  var a = fetch("import.json?v=" + Date.now()).then(function(r){ return r.json(); }).catch(function(){ return []; });
  var b = LIVE ? fetch(SB.url+"/rest/v1/listings?select="+cols+"&order=created.desc", {headers:sbh({})}).then(function(r){ return r.ok ? r.json() : []; }).catch(function(){ return []; }) : Promise.resolve([]);
  var m = LIVE ? fetch(SB.url+"/rest/v1/status_marks?select=id,status", {headers:sbh({})}).then(function(r){ return r.ok ? r.json() : []; }).catch(function(){ return []; }) : Promise.resolve([]);
  var wq = LIVE ? fetch(SB.url+"/rest/v1/wanted?select=id,created,expires,status,category,title,description,budget,currency,want_cond,size,location,name,phone,is_shop,shop_name&order=created.desc", {headers:sbh({})}).then(function(r){ return r.ok ? r.json() : []; }).catch(function(){ return []; }) : Promise.resolve([]);
  var rq = LIVE ? fetch(SB.url+"/rest/v1/wanted_replies?select=wanted_id", {headers:sbh({})}).then(function(r){ return r.ok ? r.json() : []; }).catch(function(){ return []; }) : Promise.resolve([]);
  Promise.all([a,b,m,wq,rq]).then(function(x){ loading = false; var mk = {}; wants = x[3]; rcount = {}; x[4].forEach(function(r){ rcount[r.wanted_id] = (rcount[r.wanted_id]||0)+1; }); x[2].forEach(function(r){ mk[r.id] = r.status; });
    var l = x[1].concat(x[0]).filter(function(it){ return mk[it.id] !== "removed"; }); l.forEach(function(it){ if(mk[it.id]) it.status = mk[it.id]; }); l.sort(function(p,q){ return p.created < q.created ? 1 : -1; }); items = l; route(); });
}
function route(){
  var p = params();
  state.view = (p.get("view") === "wanted" || p.get("want") || p.get("ask")) ? "wanted" : "sale";
  document.getElementById("hero").hidden = !!(p.get("item") || p.get("post") || p.get("ask") || p.get("want"));
  heroTexts();
  if(p.get("post")) return renderForm();
  if(p.get("ask")) return renderAsk();
  if(items === null || wants === null){ load(); return; }
  if(p.get("want")) return renderWant(p.get("want"), p.get("key"));
  if(state.view === "wanted"){ if(p.get("cat")) state.wcat = p.get("cat"); return renderWanted(); }
  if(p.get("item")) return renderItem(p.get("item"), p.get("key"));
  if(p.get("cat")) state.cat = p.get("cat");
  renderList();
}

function filtered(){
  var q = state.q.trim().toLowerCase();
  var r = items.filter(function(it){
    if(state.cat !== "all" && it.category !== state.cat) return false;
    if(!state.sold && it.status === "sold") return false;
    if(q){ var hay = (it.title+" "+it.description+" "+lab(CATS,it.category)+" "+it.size).toLowerCase(); var w = q.split(/\s+/); for(var i=0;i<w.length;i++) if(hay.indexOf(w[i]) < 0) return false; }
    return true;
  });
  var pv = function(x){ return x.price == null || x.price === "" ? null : Number(x.price) * (x.currency==="SAR"?0.1:x.currency==="AED"?0.1:x.currency==="USD"?0.376:1); };
  if(state.sort === "low") r.sort(function(a,b){ var x=pv(a), y=pv(b); return (x==null?1e12:x) - (y==null?1e12:y); });
  else if(state.sort === "high") r.sort(function(a,b){ var x=pv(a), y=pv(b); return (y==null?-1:y) - (x==null?-1:x); });
  else r.sort(function(a,b){ if((a.status==="sold") !== (b.status==="sold")) return a.status==="sold" ? 1 : -1; return a.created < b.created ? 1 : -1; });
  return r;
}

function renderList(){
  var counts = {all:0}; items.forEach(function(it){ if(it.status==="sold") return; counts.all++; counts[it.category] = (counts[it.category]||0)+1; });
  var chips = '<button class="mk-chip" data-cat="all" aria-pressed="'+(state.cat==="all")+'">'+esc(t("all"))+'<span class="n">'+counts.all+'</span></button>';
  CATS.forEach(function(c){ if(!counts[c[0]] && state.cat !== c[0]) return; chips += '<button class="mk-chip" data-cat="'+c[0]+'" aria-pressed="'+(state.cat===c[0])+'">'+esc(lab(CATS,c[0]))+'<span class="n">'+(counts[c[0]]||0)+'</span></button>'; });
  var r = filtered();
  document.title = "Market: new and used sports equipment in Bahrain";
  var h = tabs() + '<div class="mk-ctrl"><div class="mk-search"><input class="mk-in" id="q" type="search" placeholder="'+esc(t("search"))+'" aria-label="'+esc(t("search"))+'" value="'+esc(state.q)+'"></div>'+
    '<div class="mk-chips" role="toolbar">'+chips+'</div>'+
    '<div class="mk-row"><span class="mk-count">'+esc(t("count")(r.filter(function(x){ return x.status!=="sold"; }).length))+'</span><span class="mk-opts"><label class="mk-check"><input type="checkbox" id="sold"'+(state.sold?" checked":"")+'>'+esc(t("showSold"))+'</label>'+
    '<select class="mk-sel" id="sort" aria-label="Sort"><option value="new">'+esc(t("sortNew"))+'</option><option value="low">'+esc(t("sortLow"))+'</option><option value="high">'+esc(t("sortHigh"))+'</option></select></span></div></div>';
  h += r.length ? '<div class="mk-grid">'+r.map(card).join("")+'</div>' : '<p class="mk-empty">'+esc(t("empty"))+'</p>';
  h += '<p class="mk-find">'+esc(t("cantFind"))+' <a href="?ask=1" data-ask="1">'+esc(t("ask"))+'</a></p>';
  h += '<p class="mk-note">'+esc(t("safety"))+'</p>';
  view.innerHTML = h;
  document.getElementById("sort").value = state.sort;
  var q = document.getElementById("q");
  q.addEventListener("input", function(){ state.q = q.value; var pos = q.selectionStart; renderList(); var n = document.getElementById("q"); n.focus(); try{ n.setSelectionRange(pos,pos); }catch(e){} });
  document.getElementById("sold").addEventListener("change", function(e){ state.sold = e.target.checked; renderList(); });
  document.getElementById("sort").addEventListener("change", function(e){ state.sort = e.target.value; renderList(); });
  Array.prototype.forEach.call(view.querySelectorAll(".mk-chip"), function(b){ b.addEventListener("click", function(){ state.cat = b.getAttribute("data-cat"); var u = state.cat==="all" ? location.pathname : "?cat="+state.cat; history.replaceState(null,"",u); renderList(); }); });
}

function card(it){
  var ph = it.photos && it.photos.length ? '<img loading="lazy" src="'+esc(img(it.photos[0]))+'" alt="'+esc(it.title)+'">' : '<span class="none">'+esc(lab(CATS,it.category))+'</span>';
  var sold = it.status === "sold";
  return '<a class="mk-card'+(sold?" sold":"")+'" href="?item='+encodeURIComponent(it.id)+'" data-item="'+esc(it.id)+'"><span class="mk-ph">'+ph+(sold?'<span class="mk-badge">'+esc(t("sold"))+'</span>':'')+(it.sample?'<span class="mk-badge smp">'+esc(t("smpBadge"))+'</span>':'')+(it.is_shop?'<span class="mk-badge shop">'+esc(t("shop"))+'</span>':'')+'</span>'+
    '<span class="mk-cb"><span class="mk-price">'+esc(price(it))+'</span><span class="mk-ct" dir="auto">'+esc(it.title)+'</span><span class="mk-meta">'+esc(lab(CONDS,it.condition))+(it.location?', '+esc(it.location):'')+'</span></span></a>';
}

function renderItem(id, key){
  var it = null; for(var i=0;i<items.length;i++) if(items[i].id === id) it = items[i];
  var back = '<a class="mk-back" href="./" data-home="1">'+(L()==="ar"?"&rarr; ":"&larr; ")+esc(t("back"))+'</a>';
  if(!it){ view.innerHTML = back + '<p class="mk-empty">'+esc(t("notfound"))+'</p>'; document.title = "Market"; return; }
  document.title = it.title + " | Market";
  var gal = it.photos && it.photos.length ? '<div class="mk-gal" id="gal">'+it.photos.map(function(p){ return '<img src="'+esc(img(p))+'" alt="'+esc(it.title)+'">'; }).join("")+'</div>'+
    (it.photos.length>1 ? '<div class="mk-thumbs">'+it.photos.map(function(p,i){ return '<button type="button" data-i="'+i+'" aria-label="Photo '+(i+1)+'"><img src="'+esc(img(p))+'" alt=""></button>'; }).join("")+'</div>' : '') :
    '<div class="mk-nophoto">'+esc(t("nophoto"))+'</div>';
  if(it.sample) gal += '<p class="mk-smp">'+esc(t("smpNote"))+' '+esc(t("smpBy"))+': <a href="'+esc(it.sample.url)+'" target="_blank" rel="noopener">'+esc(it.sample.by)+'</a>, '+esc(it.sample.lic)+', Wikimedia Commons.</p>';
  var sold = it.status === "sold";
  var d = digits(it.phone);
  var contact = d ? '<div class="mk-acts">'+(sold?'':'<a class="mk-btn" target="_blank" rel="noopener" href="https://wa.me/'+d+'?text='+encodeURIComponent(t("waMsg")(it.title))+'">'+esc(t("wa"))+'</a><a class="mk-btn ghost" href="tel:+'+d+'">'+esc(t("call"))+'</a>')+'<button class="mk-btn ghost" type="button" id="copy">'+esc(t("copy"))+'</button></div>'
    : '<p class="mk-note">'+esc(t("nophone"))+'</p><div class="mk-acts"><button class="mk-btn ghost" type="button" id="copy">'+esc(t("copy"))+'</button></div>';
  var h = back + '<div class="mk-item"><div>'+gal+'</div><div>'+
    '<h1 dir="auto">'+esc(it.title)+'</h1>'+(sold?'<span class="mk-soldline">'+esc(t("sold"))+'</span>':'')+'<div class="mk-bigprice">'+esc(price(it))+'</div>'+
    '<div class="mk-facts"><span class="mk-fact">'+esc(lab(CATS,it.category))+'</span><span class="mk-fact">'+esc(lab(CONDS,it.condition))+'</span>'+(it.size?'<span class="mk-fact">'+esc(it.size)+'</span>':'')+(it.location?'<span class="mk-fact">'+esc(it.location)+'</span>':'')+'<span class="mk-fact">'+esc(t("posted"))+' '+esc(date(it.created))+'</span></div>'+
    (it.description?'<div class="mk-desc" dir="auto">'+esc(it.description)+'</div>':'')+
    '<div class="mk-seller"><div class="lbl">'+esc(t("seller"))+'</div>'+(it.seller||it.shop_name?'<div class="nm" dir="auto">'+esc(it.shop_name||it.seller)+shopTag(it)+'</div>'+(it.shop_name&&it.seller?'<div class="sub" dir="auto">'+esc(it.seller)+'</div>':''):'')+(d?'<div class="ph">'+esc(pretty(it.phone))+'</div>':'')+contact+'</div>'+
    (it.source==="whatsapp"?'<p class="mk-note">'+esc(t("fromWa"))+'</p>':'')+(it.source==="instagram"?'<p class="mk-note">'+esc(t("fromIg"))+'</p>':'')+
    '<p class="mk-note">'+esc(t("safety"))+' <a href="mailto:contact@saqeralkhalifa.com?subject='+encodeURIComponent("Market report "+it.id)+'">'+esc(t("report"))+'</a></p>'+
    (key?'<div class="mk-manage"><div class="mk-seller" style="margin:0;padding:0;border:0"><div class="lbl">'+esc(t("manage"))+'</div></div><p class="mk-note" style="margin-top:8px">'+esc(t("manageP"))+'</p><div class="mk-acts">'+
      '<button class="mk-btn" type="button" data-st="'+(sold?"available":"sold")+'">'+esc(sold?t("markAvail"):t("markSold"))+'</button><button class="mk-btn ghost" type="button" data-st="removed">'+esc(t("remove"))+'</button></div><p class="mk-note" id="mst"></p></div>':'')+
    (!key && d ? '<details class="mk-own"><summary>'+esc(sold?t("ownQ2"):t("ownQ"))+'</summary><p class="mk-note">'+esc(t("ownP"))+'</p>'+
      '<input class="mk-in" id="ownph" type="tel" inputmode="tel" autocomplete="tel" placeholder="'+esc(t("ownPh"))+'" aria-label="'+esc(t("ownPh"))+'">'+
      '<div class="mk-acts"><button class="mk-btn" type="button" data-own="'+(sold?"available":"sold")+'">'+esc(sold?t("markAvail"):t("markSold"))+'</button><button class="mk-btn ghost" type="button" data-own="removed">'+esc(t("remove"))+'</button></div><p class="mk-note" id="ownst" role="status"></p></details>' : '')+
    '</div></div>';
  view.innerHTML = h;
  var g = document.getElementById("gal");
  Array.prototype.forEach.call(view.querySelectorAll(".mk-thumbs button"), function(b){ b.addEventListener("click", function(){ var i = +b.getAttribute("data-i"); g.scrollTo({left:g.children[i].offsetLeft - g.offsetLeft, behavior:"instant"}); }); });
  var c = document.getElementById("copy"); if(c) c.addEventListener("click", function(){ var u = location.origin + location.pathname + "?item=" + encodeURIComponent(it.id); (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function(){ c.textContent = t("copied"); }, function(){ prompt("", u); }); });
  Array.prototype.forEach.call(view.querySelectorAll("[data-st]"), function(b){ b.addEventListener("click", function(){
    var st = b.getAttribute("data-st"); b.disabled = true;
    rpc("set_listing_status", {p_id:it.id, p_token:key, p_status:st}).then(function(j){
      document.getElementById("mst").textContent = j.ok ? t("done") : t("errNet");
      if(j.ok){ if(st==="removed"){ items = items.filter(function(x){ return x.id!==it.id; }); } else it.status = st; setTimeout(function(){ route(); }, 600); }
    }).catch(function(){ document.getElementById("mst").textContent = t("errNet"); b.disabled = false; });
  }); });
  Array.prototype.forEach.call(view.querySelectorAll("[data-own]"), function(b){ b.addEventListener("click", function(){
    var st = b.getAttribute("data-own"), out = document.getElementById("ownst"), ph = document.getElementById("ownph").value;
    if(String(ph).replace(/\D/g,"").length < 8){ out.textContent = t("errPhone"); return; }
    b.disabled = true;
    rpc("mark_status", {p_id:it.id, p_phone:ph, p_status:st}).then(function(j){
      b.disabled = false;
      if(!j || !j.ok){ out.textContent = j && j.error === "unknown" ? t("ownUnknown") : j && j.error === "phone" ? t("ownWrong") : t("errNet"); return; }
      out.textContent = t("done");
      if(st==="removed"){ items = items.filter(function(x){ return x.id!==it.id; }); setTimeout(function(){ go("./"); }, 700); }
      else { it.status = st; setTimeout(function(){ route(); }, 700); }
    }).catch(function(){ b.disabled = false; out.textContent = t("errNet"); });
  }); });
}

var photos = [];
function renderForm(){
  document.title = t("fh") + " | Market";
  var opt = function(list){ return list.map(function(c){ return '<option value="'+c[0]+'">'+esc(lab(list,c[0]))+'</option>'; }).join(""); };
  var back = '<a class="mk-back" href="./" data-home="1">'+(L()==="ar"?"&rarr; ":"&larr; ")+esc(t("back"))+'</a>';
  view.innerHTML = back + '<form class="mk-form" id="f" novalidate><h2>'+esc(t("fh"))+'</h2><p class="lead">'+esc(t("fp"))+'</p>'+
    '<div class="mk-f"><label class="l" for="f-title">'+esc(t("fTitle"))+'</label><input class="mk-in" id="f-title" maxlength="120" required><span class="hint">'+esc(t("fTitleH"))+'</span></div>'+
    '<div class="mk-two"><div class="mk-f"><label class="l" for="f-cat">'+esc(t("fCat"))+'</label><select class="mk-sel" id="f-cat">'+opt(CATS)+'</select></div>'+
    '<div class="mk-f"><label class="l" for="f-cond">'+esc(t("fCond"))+'</label><select class="mk-sel" id="f-cond">'+opt(CONDS).replace('value="used"','value="used" selected')+'</select></div></div>'+
    '<div class="mk-two"><div class="mk-f"><label class="l" for="f-price">'+esc(t("fPrice"))+'</label><div class="mk-pr"><select class="mk-sel" id="f-cur" aria-label="Currency"><option>BHD</option><option>SAR</option><option>AED</option><option>USD</option></select><input class="mk-in" id="f-price" inputmode="decimal" maxlength="9"></div><span class="hint">'+esc(t("fPriceH"))+'</span></div>'+
    '<div class="mk-f"><label class="l" for="f-size">'+esc(t("fSize"))+'</label><input class="mk-in" id="f-size" maxlength="40"><span class="hint">'+esc(t("fSizeH"))+'</span></div></div>'+
    '<div class="mk-f"><label class="l" for="f-desc">'+esc(t("fDesc"))+'</label><textarea class="mk-ta" id="f-desc" maxlength="3000"></textarea><span class="hint">'+esc(t("fDescH"))+'</span></div>'+
    '<div class="mk-f"><span class="l" style="display:block;font-size:16px;font-weight:500;margin-bottom:8px">'+esc(t("fPhotos"))+'</span><label class="mk-drop" style="position:relative">'+esc(t("fAdd"))+'<input type="file" id="f-ph" accept="image/*" multiple></label><span class="hint">'+esc(t("fPhotosH"))+'</span><div class="mk-prev" id="prev"></div></div>'+
    '<div class="mk-two"><div class="mk-f"><label class="l" for="f-name">'+esc(t("fName"))+'</label><input class="mk-in" id="f-name" maxlength="60" autocomplete="name"></div>'+
    '<div class="mk-f"><label class="l" for="f-phone">'+esc(t("fPhone"))+'</label><input class="mk-in" id="f-phone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel" placeholder="+973"><span class="hint">'+esc(t("fPhoneH"))+'</span></div></div>'+
    '<label class="mk-check" style="margin-top:16px"><input type="checkbox" id="f-shop">'+esc(t("fShop"))+'</label>'+
    '<div class="mk-two" id="f-shopbox" hidden><div class="mk-f" style="margin-top:8px"><label class="l" for="f-shopname">'+esc(t("fShopName"))+'</label><input class="mk-in" id="f-shopname" maxlength="60"></div></div>'+
    '<div class="mk-two"><div class="mk-f"><label class="l" for="f-loc">'+esc(t("fLoc"))+'</label><input class="mk-in" id="f-loc" maxlength="60" value="Bahrain"></div></div>'+
    '<div class="mk-hp" aria-hidden="true"><input id="f-web" tabindex="-1" autocomplete="off"></div>'+
    '<label class="mk-consent"><input type="checkbox" id="f-ok"><span>'+esc(t("fConsent"))+'</span></label>'+
    '<p class="mk-err" id="err" role="alert"></p><div class="mk-acts"><button class="mk-btn" type="submit" id="go">'+esc(t("submit"))+'</button></div><div id="okbox"></div></form>';
  photos = []; drawPrev();
  document.getElementById("f-ph").addEventListener("change", function(e){
    var fs = Array.prototype.slice.call(e.target.files || []).slice(0, 10 - photos.length);
    var left = fs.length; if(!left) return;
    fs.forEach(function(file){ shrink(file, function(u){ if(u) photos.push(u); if(--left === 0){ drawPrev(); e.target.value = ""; } }); });
  });
  var fs_ = document.getElementById("f-shop"); fs_.addEventListener("change", function(){ document.getElementById("f-shopbox").hidden = !fs_.checked; });
  document.getElementById("f").addEventListener("submit", submit);
}
function drawPrev(){
  var p = document.getElementById("prev"); if(!p) return;
  p.innerHTML = photos.map(function(u,i){ return '<div><img src="'+u+'" alt=""><button type="button" data-x="'+i+'" aria-label="Remove">&times;</button></div>'; }).join("");
  Array.prototype.forEach.call(p.querySelectorAll("button"), function(b){ b.addEventListener("click", function(){ photos.splice(+b.getAttribute("data-x"),1); drawPrev(); }); });
}
function shrink(file, cb){
  var r = new FileReader();
  r.onload = function(){ var im = new Image(); im.onload = function(){ var M = 1600, w = im.naturalWidth, h = im.naturalHeight, s = Math.min(1, M/Math.max(w,h)); var c = document.createElement("canvas"); c.width = Math.round(w*s); c.height = Math.round(h*s); c.getContext("2d").drawImage(im,0,0,c.width,c.height); cb(c.toDataURL("image/jpeg",0.82)); }; im.onerror = function(){ cb(null); }; im.src = r.result; };
  r.onerror = function(){ cb(null); }; r.readAsDataURL(file);
}
function submit(e){
  e.preventDefault();
  var v = function(id){ return document.getElementById(id).value.trim(); };
  var err = document.getElementById("err"); err.textContent = "";
  if(v("f-title").length < 3){ err.textContent = t("errTitle"); return; }
  if(v("f-phone").replace(/\D/g,"").length < 8){ err.textContent = t("errPhone"); return; }
  if(!document.getElementById("f-ok").checked){ err.textContent = t("errConsent"); return; }
  if(!LIVE){ err.textContent = t("errOff"); return; }
  var b = document.getElementById("go"); b.disabled = true; b.textContent = t("sending");
  var body = {title:v("f-title"), category:v("f-cat"), condition:v("f-cond"), price:v("f-price").replace(/[^\d.]/g,""), currency:v("f-cur"), size:v("f-size"),
    description:v("f-desc"), seller:v("f-name"), phone:v("f-phone"), location:v("f-loc"), shop:document.getElementById("f-shop").checked, shop_name:document.getElementById("f-shop").checked ? v("f-shopname") : ""};
  if(v("f-web")) return;
  Promise.all(photos.map(upPhoto)).then(function(urls){ body.photos = urls; return rpc("post_listing", {p:body}); }).then(function(j){
    if(!j || !j.ok) throw new Error("post");
    var base = location.origin + location.pathname;
    var view_ = base + "?item=" + j.id, man = view_ + "&key=" + j.token;
    items = null;
    var box = document.getElementById("okbox");
    b.hidden = true;
    box.innerHTML = '<div class="mk-ok"><strong>'+esc(t("okH"))+'</strong><div class="mk-acts"><a class="mk-btn" href="'+esc(view_)+'">'+esc(t("okView"))+'</a></div><p style="margin-top:16px">'+esc(t("okKeep"))+'</p><input class="mk-in" readonly value="'+esc(man)+'" onclick="this.select()"></div>';
    box.scrollIntoView();
  }).catch(function(){ err.textContent = t("errNet"); b.disabled = false; b.textContent = t("submit"); });
}

/* ---------- Wanted: requests from people looking for an item ---------- */
function wOpen(w){ return w.status === "open" && new Date(w.expires).getTime() > Date.now(); }
function shopTag(x){ return x && x.is_shop ? '<span class="mk-shop">'+esc(t("shop"))+'</span>' : ''; }
function money(v, cur){ var n = Number(v).toLocaleString("en-US"); return L()==="ar" ? n+" "+(cur==="BHD"?"د.ب":cur) : (cur||"BHD")+" "+n; }
function budget(w){ return (w.budget == null || w.budget === "") ? t("nobudget") : t("budget")+": "+money(w.budget, w.currency); }
function arrow(){ return L()==="ar" ? "&rarr; " : "&larr; "; }
function tabs(){
  var nS = items ? items.filter(function(x){ return x.status !== "sold"; }).length : "";
  var nW = wants ? wants.filter(wOpen).length : "";
  var s = state.view === "wanted";
  return '<nav class="mk-tabs" aria-label="Market"><a href="./" data-tab="sale"'+(s?'':' aria-current="page"')+'>'+esc(t("tabSale"))+'<span class="n">'+nS+'</span></a>'+
    '<a href="?view=wanted" data-tab="wanted"'+(s?' aria-current="page"':'')+'>'+esc(t("tabWant"))+'<span class="n">'+nW+'</span></a></nav>';
}
function wcard(w){
  var n = rcount[w.id] || 0, found = w.status === "found";
  var meta = [lab(WCONDS, w.want_cond), w.size, w.location].filter(Boolean).join(L()==="ar" ? "، " : ", ");
  return '<a class="mk-wcard'+(found?' found':'')+'" href="?want='+encodeURIComponent(w.id)+'" data-want="'+esc(w.id)+'">'+
    '<span class="mk-wtop"><span class="mk-wcat">'+esc(lab(CATS, w.category))+'</span>'+(found?'<span class="mk-wst">'+esc(t("found"))+'</span>':'')+'</span>'+
    '<span class="mk-ct" dir="auto">'+esc(w.title)+'</span><span class="mk-wb">'+esc(budget(w))+'</span>'+
    (meta?'<span class="mk-meta" dir="auto">'+esc(meta)+'</span>':'')+
    '<span class="mk-wfoot"><span dir="auto">'+esc(w.shop_name || w.name)+'</span>'+shopTag(w)+'<span class="mk-wn">'+esc(t("replies")(n))+'</span></span></a>';
}
function renderWanted(){
  document.title = t("tabWant") + " | Market";
  var counts = {all:0}; wants.forEach(function(w){ if(!wOpen(w)) return; counts.all++; counts[w.category] = (counts[w.category]||0)+1; });
  var chips = '<button class="mk-chip" data-wcat="all" aria-pressed="'+(state.wcat==="all")+'">'+esc(t("all"))+'<span class="n">'+counts.all+'</span></button>';
  CATS.forEach(function(c){ if(!counts[c[0]] && state.wcat !== c[0]) return; chips += '<button class="mk-chip" data-wcat="'+c[0]+'" aria-pressed="'+(state.wcat===c[0])+'">'+esc(lab(CATS,c[0]))+'<span class="n">'+(counts[c[0]]||0)+'</span></button>'; });
  var q = state.wq.trim().toLowerCase();
  var r = wants.filter(function(w){
    if(!wOpen(w) && !(state.found && w.status === "found")) return false;
    if(state.wcat !== "all" && w.category !== state.wcat) return false;
    if(q){ var hay = (w.title+" "+w.description+" "+lab(CATS,w.category)+" "+w.size+" "+w.shop_name+" "+w.name).toLowerCase(); var ws = q.split(/\s+/); for(var i=0;i<ws.length;i++) if(hay.indexOf(ws[i]) < 0) return false; }
    return true;
  }).sort(function(a,b){ if((a.status==="found") !== (b.status==="found")) return a.status==="found" ? 1 : -1; return a.created < b.created ? 1 : -1; });
  var h = tabs() + '<div class="mk-ctrl"><div class="mk-search"><input class="mk-in" id="wq" type="search" placeholder="'+esc(t("wSearch"))+'" aria-label="'+esc(t("wSearch"))+'" value="'+esc(state.wq)+'"></div>'+
    '<div class="mk-chips" role="toolbar">'+chips+'</div>'+
    '<div class="mk-row"><span class="mk-count">'+esc(t("wCount")(r.filter(wOpen).length))+'</span><span class="mk-opts"><label class="mk-check"><input type="checkbox" id="wfound"'+(state.found?" checked":"")+'>'+esc(t("showFound"))+'</label></span></div></div>';
  h += r.length ? '<div class="mk-wgrid">'+r.map(wcard).join("")+'</div>' : '<p class="mk-empty">'+esc(t("wEmpty"))+'</p>';
  h += '<div class="mk-acts" style="margin:0 0 8px"><a class="mk-btn" href="?ask=1" data-ask="1">'+esc(t("ask"))+'</a></div>';
  h += '<p class="mk-note">'+esc(t("wSafety"))+'</p>';
  view.innerHTML = h;
  var qi = document.getElementById("wq");
  qi.addEventListener("input", function(){ state.wq = qi.value; var pos = qi.selectionStart; renderWanted(); var n = document.getElementById("wq"); n.focus(); try{ n.setSelectionRange(pos,pos); }catch(e){} });
  document.getElementById("wfound").addEventListener("change", function(e){ state.found = e.target.checked; renderWanted(); });
  Array.prototype.forEach.call(view.querySelectorAll("[data-wcat]"), function(b){ b.addEventListener("click", function(){ state.wcat = b.getAttribute("data-wcat"); history.replaceState(null, "", "?view=wanted"+(state.wcat==="all"?"":"&cat="+state.wcat)); renderWanted(); }); });
}

function renderWant(id, key){
  var w = null; for(var i=0;i<wants.length;i++) if(wants[i].id === id) w = wants[i];
  var back = '<a class="mk-back" href="?view=wanted" data-tab="wanted">'+arrow()+esc(t("backW"))+'</a>';
  if(!w){ view.innerHTML = back + '<p class="mk-empty">'+esc(t("wNotfound"))+'</p>'; document.title = "Market"; return; }
  document.title = t("tabWant") + ": " + w.title + " | Market";
  var open = wOpen(w), found = w.status === "found", d = digits(w.phone);
  var wa = d ? "https://wa.me/"+d+"?text="+encodeURIComponent(t("waAsk")(w.title)) : "";
  var stateLine = found ? '<span class="mk-soldline ok">'+esc(t("found"))+'</span>' : (!open ? '<span class="mk-soldline">'+esc(t("expired"))+'</span>' : '');
  var btns = function(attr){ return (found || !open ? '<button class="mk-btn" type="button" '+attr+'="open">'+esc(t("renew"))+'</button>' : '<button class="mk-btn" type="button" '+attr+'="found">'+esc(t("markFound"))+'</button><button class="mk-btn ghost" type="button" '+attr+'="open">'+esc(t("renew"))+'</button>')+
    '<button class="mk-btn ghost" type="button" '+attr+'="removed">'+esc(t("removeR"))+'</button>'; };
  var left = '<span class="mk-wcat">'+esc(lab(CATS, w.category))+'</span><h1 dir="auto" style="margin-top:8px">'+esc(w.title)+'</h1>'+stateLine+
    '<div class="mk-bigprice">'+esc(budget(w))+'</div>'+
    '<div class="mk-facts"><span class="mk-fact">'+esc(lab(WCONDS, w.want_cond))+'</span>'+(w.size?'<span class="mk-fact" dir="auto">'+esc(w.size)+'</span>':'')+(w.location?'<span class="mk-fact" dir="auto">'+esc(w.location)+'</span>':'')+
    '<span class="mk-fact">'+esc(t("posted"))+' '+esc(date(w.created))+'</span>'+(open?'<span class="mk-fact">'+esc(t("until"))+' '+esc(date(w.expires))+'</span>':'')+'</div>'+
    (w.description?'<div class="mk-desc" dir="auto">'+esc(w.description)+'</div>':'')+
    '<div class="mk-seller"><div class="lbl">'+esc(t("buyer"))+'</div><div class="nm" dir="auto">'+esc(w.shop_name || w.name)+shopTag(w)+'</div>'+(w.shop_name && w.name?'<div class="sub" dir="auto">'+esc(w.name)+'</div>':'')+
    (d?'<div class="ph">'+esc(pretty(w.phone))+'</div>':'')+'<div class="mk-acts">'+(d && !found?'<a class="mk-btn" target="_blank" rel="noopener" href="'+esc(wa)+'">'+esc(t("waBuyer"))+'</a>':'')+'<button class="mk-btn ghost" type="button" id="copy">'+esc(t("copy"))+'</button></div></div>'+
    '<p class="mk-note">'+esc(t("wSafety"))+' <a href="mailto:contact@saqeralkhalifa.com?subject='+encodeURIComponent("Market request report "+w.id)+'">'+esc(t("report"))+'</a></p>'+
    (key?'<div class="mk-manage"><div class="mk-seller" style="margin:0;padding:0;border:0"><div class="lbl">'+esc(t("wManage"))+'</div></div><p class="mk-note" style="margin-top:8px">'+esc(t("wManageP"))+'</p><div class="mk-acts">'+btns("data-wst")+'</div><p class="mk-note" id="mst"></p></div>':'')+
    (!key && d ? '<details class="mk-own"><summary>'+esc(found||!open?t("wOwnQ2"):t("wOwnQ"))+'</summary><p class="mk-note">'+esc(t("wOwnP"))+'</p>'+
      '<input class="mk-in" id="ownph" type="tel" inputmode="tel" autocomplete="tel" placeholder="'+esc(t("ownPh"))+'" aria-label="'+esc(t("ownPh"))+'">'+
      '<div class="mk-acts">'+btns("data-wown")+'</div><p class="mk-note" id="ownst" role="status"></p></details>' : '');
  var right = '<h2 class="mk-h2" id="rh">'+esc(t("replies")(rcount[w.id]||0))+'</h2><div id="rlist"><p class="mk-note">'+esc(t("loading"))+'</p></div>'+
    (open ? '<form class="mk-have" id="hf" novalidate><h2 class="mk-h2">'+esc(t("haveH"))+'</h2><p class="mk-note" style="margin-top:8px">'+esc(t("haveP"))+'</p>'+
      '<div class="mk-f"><label class="l" for="r-name">'+esc(t("rName"))+'</label><input class="mk-in" id="r-name" maxlength="60" autocomplete="name"></div>'+
      '<div class="mk-f"><label class="l" for="r-phone">'+esc(t("rPhone"))+'</label><input class="mk-in" id="r-phone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel" placeholder="+973"></div>'+
      '<label class="mk-check" style="margin-top:12px"><input type="checkbox" id="r-shop">'+esc(t("rShop"))+'</label>'+
      '<div class="mk-f" id="r-shopbox" hidden style="margin-top:8px"><label class="l" for="r-shopname">'+esc(t("rShopName"))+'</label><input class="mk-in" id="r-shopname" maxlength="60"></div>'+
      '<div class="mk-f"><label class="l" for="r-price">'+esc(t("rPrice"))+'</label><div class="mk-pr"><select class="mk-sel" id="r-cur" aria-label="Currency"><option>BHD</option><option>SAR</option><option>AED</option><option>USD</option></select><input class="mk-in" id="r-price" inputmode="decimal" maxlength="9"></div></div>'+
      '<div class="mk-f"><label class="l" for="r-note">'+esc(t("rNote"))+'</label><textarea class="mk-ta" id="r-note" maxlength="500" style="min-height:96px"></textarea><span class="hint">'+esc(t("rNoteH"))+'</span></div>'+
      '<div class="mk-hp" aria-hidden="true"><input id="r-web" tabindex="-1" autocomplete="off"></div>'+
      '<p class="mk-err" id="rerr" role="alert"></p><div class="mk-acts"><button class="mk-btn" type="submit" id="rgo">'+esc(t("rSend"))+'</button></div><div id="rok"></div></form>' : '');
  view.innerHTML = back + '<div class="mk-item"><div>'+left+'</div><div>'+right+'</div></div>';
  loadReplies(w);
  var c = document.getElementById("copy"); if(c) c.addEventListener("click", function(){ var u = location.origin + location.pathname + "?want=" + encodeURIComponent(w.id); (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function(){ c.textContent = t("copied"); }, function(){ prompt("", u); }); });
  var sb = document.getElementById("r-shop"); if(sb) sb.addEventListener("change", function(){ document.getElementById("r-shopbox").hidden = !sb.checked; });
  var hf = document.getElementById("hf"); if(hf) hf.addEventListener("submit", function(e){ sendReply(e, w, d); });
  var after = function(st){ if(st === "removed"){ wants = wants.filter(function(x){ return x.id !== w.id; }); setTimeout(function(){ go("?view=wanted"); }, 700); }
    else { w.status = st; if(st === "open") w.expires = new Date(Date.now() + 30*864e5).toISOString(); setTimeout(function(){ route(); }, 700); } };
  Array.prototype.forEach.call(view.querySelectorAll("[data-wst]"), function(b){ b.addEventListener("click", function(){
    var st = b.getAttribute("data-wst"), out = document.getElementById("mst"); b.disabled = true;
    rpc("set_wanted_status", {p_id:w.id, p_token:key, p_status:st}).then(function(j){ out.textContent = j.ok ? t("done") : t("errNet"); if(j.ok) after(st); else b.disabled = false; })
      .catch(function(){ out.textContent = t("errNet"); b.disabled = false; });
  }); });
  Array.prototype.forEach.call(view.querySelectorAll("[data-wown]"), function(b){ b.addEventListener("click", function(){
    var st = b.getAttribute("data-wown"), out = document.getElementById("ownst"), ph = document.getElementById("ownph").value;
    if(String(ph).replace(/\D/g,"").length < 8){ out.textContent = t("errPhone"); return; }
    b.disabled = true;
    rpc("mark_wanted", {p_id:w.id, p_phone:ph, p_status:st}).then(function(j){ b.disabled = false;
      if(!j || !j.ok){ out.textContent = j && j.error === "phone" ? t("ownWrong") : t("errNet"); return; }
      out.textContent = t("done"); after(st);
    }).catch(function(){ b.disabled = false; out.textContent = t("errNet"); });
  }); });
}
function loadReplies(w){
  fetch(SB.url+"/rest/v1/wanted_replies?select=id,created,name,phone,is_shop,shop_name,note,price,currency&wanted_id=eq."+encodeURIComponent(w.id)+"&order=created.desc", {headers:sbh({})})
    .then(function(r){ return r.ok ? r.json() : []; }).catch(function(){ return []; }).then(function(rs){
      var box = document.getElementById("rlist"); if(!box) return;
      rcount[w.id] = rs.length; var rh = document.getElementById("rh"); if(rh) rh.textContent = t("replies")(rs.length);
      if(!rs.length){ box.innerHTML = '<p class="mk-note" style="margin-top:12px">'+esc(t("rNone"))+'</p>'; return; }
      box.innerHTML = rs.map(function(r){ var rd = digits(r.phone);
        return '<div class="mk-reply"><div class="nm" dir="auto">'+esc(r.shop_name || r.name)+shopTag(r)+'</div>'+(r.shop_name && r.name?'<div class="sub" dir="auto">'+esc(r.name)+'</div>':'')+
          (r.price != null && r.price !== ""?'<div class="pr">'+esc(money(r.price, r.currency))+'</div>':'')+(r.note?'<p dir="auto">'+esc(r.note)+'</p>':'')+
          (rd?'<div class="ph">'+esc(pretty(r.phone))+'</div><div class="mk-acts" style="margin-top:8px"><a class="mk-btn ghost" target="_blank" rel="noopener" href="https://wa.me/'+rd+'?text='+encodeURIComponent(t("waReply")(w.title))+'">'+esc(t("wa"))+'</a></div>':'')+
          '<div class="dt">'+esc(date(r.created))+'</div></div>'; }).join("");
    });
}
function sendReply(e, w, d){
  e.preventDefault();
  var v = function(id){ return document.getElementById(id).value.trim(); };
  var err = document.getElementById("rerr"); err.textContent = "";
  if(v("r-phone").replace(/\D/g,"").length < 8){ err.textContent = t("errPhone"); return; }
  if(v("r-web")) return;
  var shop = document.getElementById("r-shop").checked, pr = v("r-price").replace(/[^\d.]/g,""), cur = v("r-cur"), note = v("r-note");
  var msg = t("waAsk")(w.title) + (pr ? " " + t("waPrice") + " " + money(pr, cur) + "." : "") + (note ? " " + note : "");
  var url = d ? "https://wa.me/"+d+"?text="+encodeURIComponent(msg) : "";
  if(url){ try{ window.open(url, "_blank"); }catch(x){} }
  var b = document.getElementById("rgo"); b.disabled = true; b.textContent = t("sending");
  rpc("post_reply", {p:{wanted_id:w.id, name:v("r-name"), phone:v("r-phone"), shop:shop, shop_name:shop ? v("r-shopname") : "", price:pr, currency:cur, note:note}}).then(function(j){
    if(!j || !j.ok){ err.textContent = j && j.error === "gone" ? t("rErrGone") : j && j.error === "full" ? t("rErrFull") : t("errNet"); b.disabled = false; b.textContent = t("rSend"); return; }
    b.hidden = true;
    document.getElementById("rok").innerHTML = '<div class="mk-ok">'+esc(t("rDone"))+(url?'<div class="mk-acts"><a class="mk-btn" target="_blank" rel="noopener" href="'+esc(url)+'">'+esc(t("rOpen"))+'</a></div>':'')+'</div>';
    loadReplies(w);
  }).catch(function(){ err.textContent = t("errNet"); b.disabled = false; b.textContent = t("rSend"); });
}

function renderAsk(){
  document.title = t("askH") + " | Market";
  var opt = function(list, sel){ return list.map(function(c){ return '<option value="'+c[0]+'"'+(c[0]===sel?' selected':'')+'>'+esc(lab(list,c[0]))+'</option>'; }).join(""); };
  var back = '<a class="mk-back" href="?view=wanted" data-tab="wanted">'+arrow()+esc(t("backW"))+'</a>';
  view.innerHTML = back + '<form class="mk-form" id="af" novalidate><h2>'+esc(t("askH"))+'</h2><p class="lead">'+esc(t("askP"))+'</p>'+
    '<div class="mk-f"><label class="l" for="a-title">'+esc(t("aTitle"))+'</label><input class="mk-in" id="a-title" maxlength="120" required><span class="hint">'+esc(t("aTitleH"))+'</span></div>'+
    '<div class="mk-two"><div class="mk-f"><label class="l" for="a-cat">'+esc(t("fCat"))+'</label><select class="mk-sel" id="a-cat">'+opt(CATS, state.wcat)+'</select></div>'+
    '<div class="mk-f"><label class="l" for="a-cond">'+esc(t("aCond"))+'</label><select class="mk-sel" id="a-cond">'+opt(WCONDS, "any")+'</select></div></div>'+
    '<div class="mk-two"><div class="mk-f"><label class="l" for="a-budget">'+esc(t("aBudget"))+'</label><div class="mk-pr"><select class="mk-sel" id="a-cur" aria-label="Currency"><option>BHD</option><option>SAR</option><option>AED</option><option>USD</option></select><input class="mk-in" id="a-budget" inputmode="decimal" maxlength="9"></div><span class="hint">'+esc(t("aBudgetH"))+'</span></div>'+
    '<div class="mk-f"><label class="l" for="a-size">'+esc(t("fSize"))+'</label><input class="mk-in" id="a-size" maxlength="40"><span class="hint">'+esc(t("fSizeH"))+'</span></div></div>'+
    '<div class="mk-f"><label class="l" for="a-desc">'+esc(t("aDesc"))+'</label><textarea class="mk-ta" id="a-desc" maxlength="1500"></textarea><span class="hint">'+esc(t("aDescH"))+'</span></div>'+
    '<div class="mk-two"><div class="mk-f"><label class="l" for="a-name">'+esc(t("fName"))+'</label><input class="mk-in" id="a-name" maxlength="60" autocomplete="name"></div>'+
    '<div class="mk-f"><label class="l" for="a-phone">'+esc(t("fPhone"))+'</label><input class="mk-in" id="a-phone" type="tel" inputmode="tel" maxlength="20" autocomplete="tel" placeholder="+973"><span class="hint">'+esc(t("aPhoneH"))+'</span></div></div>'+
    '<label class="mk-check" style="margin-top:16px"><input type="checkbox" id="a-shop">'+esc(t("fShop"))+'</label>'+
    '<div class="mk-two" id="a-shopbox" hidden><div class="mk-f" style="margin-top:8px"><label class="l" for="a-shopname">'+esc(t("fShopName"))+'</label><input class="mk-in" id="a-shopname" maxlength="60"></div></div>'+
    '<div class="mk-two"><div class="mk-f"><label class="l" for="a-loc">'+esc(t("fLoc"))+'</label><input class="mk-in" id="a-loc" maxlength="60" value="Bahrain"></div></div>'+
    '<div class="mk-hp" aria-hidden="true"><input id="a-web" tabindex="-1" autocomplete="off"></div>'+
    '<label class="mk-consent"><input type="checkbox" id="a-ok"><span>'+esc(t("aConsent"))+'</span></label>'+
    '<p class="mk-err" id="err" role="alert"></p><div class="mk-acts"><button class="mk-btn" type="submit" id="go">'+esc(t("aSubmit"))+'</button></div><div id="okbox"></div></form>';
  var sb = document.getElementById("a-shop"); sb.addEventListener("change", function(){ document.getElementById("a-shopbox").hidden = !sb.checked; });
  document.getElementById("af").addEventListener("submit", function(e){
    e.preventDefault();
    var v = function(id){ return document.getElementById(id).value.trim(); };
    var err = document.getElementById("err"); err.textContent = "";
    if(v("a-title").length < 3){ err.textContent = t("aErrTitle"); return; }
    if(v("a-phone").replace(/\D/g,"").length < 8){ err.textContent = t("errPhone"); return; }
    if(!document.getElementById("a-ok").checked){ err.textContent = t("errConsent"); return; }
    if(v("a-web")) return;
    var b = document.getElementById("go"); b.disabled = true; b.textContent = t("sending");
    var shop = sb.checked;
    rpc("post_wanted", {p:{title:v("a-title"), category:v("a-cat"), want_cond:v("a-cond"), budget:v("a-budget").replace(/[^\d.]/g,""), currency:v("a-cur"), size:v("a-size"),
      description:v("a-desc"), name:v("a-name"), phone:v("a-phone"), location:v("a-loc"), shop:shop, shop_name:shop ? v("a-shopname") : ""}}).then(function(j){
      if(!j || !j.ok) throw new Error("post");
      var base = location.origin + location.pathname, vu = base + "?want=" + j.id, man = vu + "&key=" + j.token;
      wants = null; items = null; b.hidden = true;
      var box = document.getElementById("okbox");
      box.innerHTML = '<div class="mk-ok"><strong>'+esc(t("aOk"))+'</strong><div class="mk-acts"><a class="mk-btn" href="'+esc(vu)+'">'+esc(t("aView"))+'</a></div><p style="margin-top:16px">'+esc(t("aKeep"))+'</p><input class="mk-in" readonly value="'+esc(man)+'" onclick="this.select()"></div>';
      box.scrollIntoView();
    }).catch(function(){ err.textContent = t("errNet"); b.disabled = false; b.textContent = t("aSubmit"); });
  });
}

function heroTexts(){
  var w = state.view === "wanted", l = L();
  document.getElementById("t-sub").textContent = w ? T[l].wSub : T[l].sub;
  var a = document.getElementById("t-post"), b = document.getElementById("t-ask");
  if(a && b){ a.className = w ? "mk-btn ghost" : "mk-btn"; b.className = w ? "mk-btn" : "mk-btn ghost"; var c = a.parentNode; if(w) c.insertBefore(b, a); else c.insertBefore(a, b); }
}
function texts(){
  var l = L();
  document.getElementById("t-kicker").textContent = T[l].kicker;
  document.getElementById("t-h").textContent = T[l].h;
  document.getElementById("t-sub").textContent = T[l].sub;
  document.getElementById("t-post").textContent = T[l].post;
  var ta = document.getElementById("t-ask"); if(ta) ta.textContent = T[l].ask;
  heroTexts();
  document.getElementById("t-foot").innerHTML = T[l].foot;
}
function setLang(l){
  document.documentElement.lang = l; document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  try{ mcSaveLang(l); }catch(e){}
  texts(); route();
}
document.getElementById("langToggle").addEventListener("click", function(){ setLang(L() === "ar" ? "en" : "ar"); });
document.addEventListener("click", function(e){
  var a = e.target.closest && e.target.closest("a"); if(!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  if(a.hasAttribute("data-item")){ e.preventDefault(); go("?item=" + encodeURIComponent(a.getAttribute("data-item"))); }
  else if(a.hasAttribute("data-home")){ e.preventDefault(); go(location.pathname + (state.cat !== "all" ? "?cat="+state.cat : "")); }
  else if(a.id === "t-post"){ e.preventDefault(); go("?post=1"); }
  else if(a.id === "t-ask" || a.hasAttribute("data-ask")){ e.preventDefault(); go("?ask=1"); }
  else if(a.hasAttribute("data-want")){ e.preventDefault(); go("?want=" + encodeURIComponent(a.getAttribute("data-want"))); }
  else if(a.hasAttribute("data-tab")){ e.preventDefault(); go(a.getAttribute("data-tab") === "wanted" ? "?view=wanted" + (state.wcat !== "all" ? "&cat="+state.wcat : "") : location.pathname + (state.cat !== "all" ? "?cat="+state.cat : "")); }
});
window.addEventListener("popstate", route);
var l0 = "en"; try{ l0 = mcInitLang(); }catch(e){}
document.documentElement.lang = l0; document.documentElement.dir = l0 === "ar" ? "rtl" : "ltr";
texts(); route();
})();
