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
  count:function(n){return n===1?"1 item":n+" items";}, empty:"Nothing matches yet. Try another category or a shorter search.", loading:"Loading the market",
  sold:"Sold", nophoto:"No photo yet", onreq:"Price on request", back:"Back to the market", posted:"Posted", seller:"Seller", contact:"Contact the seller",
  wa:"WhatsApp", call:"Call", copy:"Copy link", copied:"Link copied", nophone:"The seller did not leave a number with this post. Message them in the Team Bahrain WhatsApp group.",
  waMsg:function(t){return "Hello, I saw your "+t+" on the Market at market.saqeralkhalifa.com. Is it still available?";},
  safety:"The Market is a noticeboard. Listings are posted by their sellers and are not checked by anyone. See the item in person before you pay, and meet in a public place.",
  report:"Report this listing", fromWa:"First posted in the Team Bahrain WhatsApp group.", notfound:"This listing was not found. It may have been removed by the seller.",
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
  count:function(n){return n+" منتج";}, empty:"لا توجد نتائج. جرّب قسما آخر أو كلمة بحث أقصر.", loading:"جار تحميل السوق",
  sold:"تم البيع", nophoto:"لا توجد صورة", onreq:"السعر عند التواصل", back:"العودة إلى السوق", posted:"نشر في", seller:"البائع", contact:"تواصل مع البائع",
  wa:"واتساب", call:"اتصال", copy:"نسخ الرابط", copied:"تم نسخ الرابط", nophone:"لم يترك البائع رقما مع هذا الإعلان. راسله في مجموعة فريق البحرين على واتساب.",
  waMsg:function(t){return "مرحبا، رأيت إعلانك ("+t+") في السوق على market.saqeralkhalifa.com. هل ما زال متوفرا؟";},
  safety:"السوق لوحة إعلانات. ينشر البائعون إعلاناتهم بأنفسهم ولا يراجعها أحد. عاين المنتج بنفسك قبل الدفع، واختر مكانا عاما للقاء.",
  report:"الإبلاغ عن هذا الإعلان", fromWa:"نشر أولا في مجموعة فريق البحرين على واتساب.", notfound:"لم يتم العثور على هذا الإعلان. ربما حذفه البائع.",
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
var MON = {en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]};

var loading = false, items = null, state = {cat:"all", q:"", sold:true, sort:"new"}, view = document.getElementById("view");
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
  var cols = "id,created,status,category,title,description,price,currency,condition,size,location,seller,phone,photos,source";
  var a = fetch("import.json?v=" + Date.now()).then(function(r){ return r.json(); }).catch(function(){ return []; });
  var b = LIVE ? fetch(SB.url+"/rest/v1/listings?select="+cols+"&order=created.desc", {headers:sbh({})}).then(function(r){ return r.ok ? r.json() : []; }).catch(function(){ return []; }) : Promise.resolve([]);
  Promise.all([a,b]).then(function(x){ loading = false; var l = x[1].concat(x[0]); l.sort(function(p,q){ return p.created < q.created ? 1 : -1; }); items = l; route(); });
}
function route(){
  var p = params();
  document.getElementById("hero").hidden = !!(p.get("item") || p.get("post"));
  if(p.get("post")) return renderForm();
  if(items === null){ load(); return; }
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
  var counts = {all:0}; items.forEach(function(it){ if(!state.sold && it.status==="sold") return; counts.all++; counts[it.category] = (counts[it.category]||0)+1; });
  var chips = '<button class="mk-chip" data-cat="all" aria-pressed="'+(state.cat==="all")+'">'+esc(t("all"))+'<span class="n">'+counts.all+'</span></button>';
  CATS.forEach(function(c){ if(!counts[c[0]] && state.cat !== c[0]) return; chips += '<button class="mk-chip" data-cat="'+c[0]+'" aria-pressed="'+(state.cat===c[0])+'">'+esc(lab(CATS,c[0]))+'<span class="n">'+(counts[c[0]]||0)+'</span></button>'; });
  var r = filtered();
  var h = '<div class="mk-ctrl"><div class="mk-search"><input class="mk-in" id="q" type="search" placeholder="'+esc(t("search"))+'" aria-label="'+esc(t("search"))+'" value="'+esc(state.q)+'"></div>'+
    '<div class="mk-chips" role="toolbar">'+chips+'</div>'+
    '<div class="mk-row"><span class="mk-count">'+esc(t("count")(r.length))+'</span><span class="mk-opts"><label class="mk-check"><input type="checkbox" id="sold"'+(state.sold?" checked":"")+'>'+esc(t("showSold"))+'</label>'+
    '<select class="mk-sel" id="sort" aria-label="Sort"><option value="new">'+esc(t("sortNew"))+'</option><option value="low">'+esc(t("sortLow"))+'</option><option value="high">'+esc(t("sortHigh"))+'</option></select></span></div></div>';
  h += r.length ? '<div class="mk-grid">'+r.map(card).join("")+'</div>' : '<p class="mk-empty">'+esc(t("empty"))+'</p>';
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
  return '<a class="mk-card'+(sold?" sold":"")+'" href="?item='+encodeURIComponent(it.id)+'" data-item="'+esc(it.id)+'"><span class="mk-ph">'+ph+(sold?'<span class="mk-badge">'+esc(t("sold"))+'</span>':'')+'</span>'+
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
  var sold = it.status === "sold";
  var d = digits(it.phone);
  var contact = d ? '<div class="mk-acts">'+(sold?'':'<a class="mk-btn" target="_blank" rel="noopener" href="https://wa.me/'+d+'?text='+encodeURIComponent(t("waMsg")(it.title))+'">'+esc(t("wa"))+'</a><a class="mk-btn ghost" href="tel:+'+d+'">'+esc(t("call"))+'</a>')+'<button class="mk-btn ghost" type="button" id="copy">'+esc(t("copy"))+'</button></div>'
    : '<p class="mk-note">'+esc(t("nophone"))+'</p><div class="mk-acts"><button class="mk-btn ghost" type="button" id="copy">'+esc(t("copy"))+'</button></div>';
  var h = back + '<div class="mk-item"><div>'+gal+'</div><div>'+
    '<h1 dir="auto">'+esc(it.title)+'</h1>'+(sold?'<span class="mk-soldline">'+esc(t("sold"))+'</span>':'')+'<div class="mk-bigprice">'+esc(price(it))+'</div>'+
    '<div class="mk-facts"><span class="mk-fact">'+esc(lab(CATS,it.category))+'</span><span class="mk-fact">'+esc(lab(CONDS,it.condition))+'</span>'+(it.size?'<span class="mk-fact">'+esc(it.size)+'</span>':'')+(it.location?'<span class="mk-fact">'+esc(it.location)+'</span>':'')+'<span class="mk-fact">'+esc(t("posted"))+' '+esc(date(it.created))+'</span></div>'+
    (it.description?'<div class="mk-desc" dir="auto">'+esc(it.description)+'</div>':'')+
    '<div class="mk-seller"><div class="lbl">'+esc(t("seller"))+'</div>'+(it.seller?'<div class="nm" dir="auto">'+esc(it.seller)+'</div>':'')+(d?'<div class="ph">'+esc(pretty(it.phone))+'</div>':'')+contact+'</div>'+
    (it.source==="whatsapp"?'<p class="mk-note">'+esc(t("fromWa"))+'</p>':'')+
    '<p class="mk-note">'+esc(t("safety"))+' <a href="mailto:contact@saqeralkhalifa.com?subject='+encodeURIComponent("Market report "+it.id)+'">'+esc(t("report"))+'</a></p>'+
    (key?'<div class="mk-manage"><div class="mk-seller" style="margin:0;padding:0;border:0"><div class="lbl">'+esc(t("manage"))+'</div></div><p class="mk-note" style="margin-top:8px">'+esc(t("manageP"))+'</p><div class="mk-acts">'+
      '<button class="mk-btn" type="button" data-st="'+(sold?"available":"sold")+'">'+esc(sold?t("markAvail"):t("markSold"))+'</button><button class="mk-btn ghost" type="button" data-st="removed">'+esc(t("remove"))+'</button></div><p class="mk-note" id="mst"></p></div>':'')+
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
    description:v("f-desc"), seller:v("f-name"), phone:v("f-phone"), location:v("f-loc")};
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

function texts(){
  var l = L();
  document.getElementById("t-kicker").textContent = T[l].kicker;
  document.getElementById("t-h").textContent = T[l].h;
  document.getElementById("t-sub").textContent = T[l].sub;
  document.getElementById("t-post").textContent = T[l].post;
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
});
window.addEventListener("popstate", route);
var l0 = "en"; try{ l0 = mcInitLang(); }catch(e){}
document.documentElement.lang = l0; document.documentElement.dir = l0 === "ar" ? "rtl" : "ltr";
texts(); route();
})();
