const guides={
// NeuroStrip
"ns-quickstart":{title:"NeuroStrip — Quick start & overview",source:"NeuroStrip User Guide",steps:[
 [
  "https://hounpydwftmlwncezujd.supabase.co/storage/v1/object/public/support-images/NeuroStrip/getting-started/quick%20view.png",
      "Quick view",
      "Review the supplied Quick View guide for a high-level overview of NeuroStrip setup and operation."],
    ["./assets/ns-guide-overview.png","Overview","Confirm NeuroStrip is charged, prepare the target site, connect it in the application and select the appropriate workflow."],
["./assets/ns-guide-dashboard.png","Application dashboard","Use the dashboard to access Clients, Protocols and Connections."]
]},
"ns-skinprep":{title:"NeuroStrip — Skin preparation",source:"Supplied Skin Preparation guide",steps:[
["./assets/ns-skin-preparation.jpg","Skin preparation","Locate the target muscle, shave if required, clean and abrade the area, apply conductive solution as directed, and allow the skin to dry completely."]
]},
"ns-placement":{title:"NeuroStrip — EMG placement",source:"Supplied sEMG placement guides",steps:[
["./assets/ns-emg-placement-1.jpg","sEMG placement principles","Place NeuroStrip over the intended active muscle rather than a tendon or joint, and align it with the muscle fibre direction."],
["./assets/ns-emg-placement-2.jpg","Body placement examples","Review the supplied examples for common upper-body, core and lower-body sites."]
]},
"ns-patch":{title:"NeuroStrip — Patch alignment",source:"Supplied Patch Alignment guide",steps:[
["./assets/ns-patch-alignment.jpg","Patch Alignment Tool","Follow the supplied six-step alignment process before applying the joined NeuroStrip and patch to the prepared site."]
]},
"ns-connections":{title:"NeuroStrip — Connect NeuroStrip",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-connections.png","Connections","Wake NeuroStrip, scan for devices, connect the required unit and assign it to the correct channel / muscle."]
]},
"ns-patient":{title:"NeuroStrip — Patient / Client Manager",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-dashboard.png","Client dashboard","Search, filter, select or create a client."],
["./assets/ns-guide-new-patient.png","Create a patient / client","Enter the required information and optional tags."],
["./assets/ns-guide-patient-overview.png","Overview","Review available amplitude, distribution and iEMG metrics."],
["./assets/ns-guide-patient-sessions.png","Sessions","Review previous recordings and session actions."],
["./assets/ns-guide-measurements.png","Measurements","Review latest and best results, performance delta and trends."]
]},
"ns-protocols":{title:"NeuroStrip — Create / edit protocols",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-protocols.png","Open Protocols","Choose an existing protocol to Clone/Edit or select New Protocol."],
["./assets/ns-guide-create-protocol-1.png","Protocol details","Enter protocol details, tags and selected muscle channels."],
["./assets/ns-guide-create-protocol-2.png","Timeline & visualisation","Configure repetitions, timing, intervals, graph scale and target settings."],
["./assets/ns-guide-edit-protocol.png","Preview & save","Confirm the sequence and visual feedback before saving."]
]},
"ns-session":{title:"NeuroStrip — Start a session",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-new-session.png","Devices, channels & placement","Connect devices and assign them to channels and body placements."],
["./assets/ns-guide-select-protocol.png","Select protocol(s)","Choose the required protocol(s) and confirm the selected sequence."],
["./assets/ns-guide-session-graph.png","Recording screen","Confirm channel indicators, placements and live sEMG before recording."]
]},
"ns-graph":{title:"NeuroStrip — Session graph & controls",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-session-graph.png","Session Recording","Review live sEMG, channel indicators and recruitment patterns."],
["./assets/ns-guide-graph-controls.png","Graph controls","Use widgets, audio, repetitions, Go intervals, notes, skip, pause and stop controls."]
]},
"ns-review":{title:"NeuroStrip — Review sessions & measurements",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-patient-sessions.png","Saved sessions","Review previous sessions and available export actions."],
["./assets/ns-guide-measurements.png","Measurements & trends","Review saved tests, latest/best results, performance delta and trend history."]
]},
"ns-troubleshooting":{title:"NeuroStrip — Troubleshooting",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-troubleshooting.png","Troubleshooting checks","Check device wake/connection, skin preparation, patch adherence and NeuroStrip-to-patch alignment. Escalate unresolved issues to Support."]
]},
"ns-rehab":{title:"NeuroStrip — Rehabilitation pathway",source:"NeuroStrip support materials",jump:["ns-skinprep","ns-placement","ns-connections","ns-patient","ns-protocols","ns-session","ns-review"]},
"ns-sport":{title:"NeuroStrip — Sports & Performance pathway",source:"NeuroStrip support materials",jump:["ns-placement","ns-connections","ns-protocols","ns-session","ns-graph","ns-review"]},
"ns-dysphagia":{title:"NeuroStrip — Dysphagia",source:"Supplied Dysphagia 2-pager",steps:[
["./assets/ns-dysphagia-overview.png","Dysphagia overview","The supplied resource describes sEMG biofeedback for swallowing-muscle activation."],
["./assets/ns-dysphagia-use-cases.png","Use cases","Review the supplied swallowing exercises, clinical contexts and research / education examples."]
],warning:"Dysphagia assessment and treatment require appropriate clinical expertise and governance. This hub provides product-operation guidance only."},

// AAC product landing guides — Trial Cards take priority
"aac-trilogy":{title:"AAC — NeuroNode Trilogy",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/nn-trilogy-windows-setup-1.jpg","Windows — EyeGaze setup","Turn on the device, check EyeGaze cables and position the user before calibration."],
["./assets/nn-trilogy-windows-setup-2.jpg","Windows — NeuroNode + Grid 3","Open the NeuroNode Controller App, Shake to Wake, connect and place NeuroNode, then open Grid 3."],
["./assets/nn-trilogy-ios-setup-1.jpg","iOS / Oskol 2 — EyeGaze setup","Turn on the device, check the rear toggle, complete Hiru calibration and review iOS Accessibility settings."],
["./assets/nn-trilogy-ios-setup-2.jpg","iOS — NeuroNode + AAC","Connect NeuroNode in the Controller App, place it, then open Grid for iPad or other communication software."]
]},
"aac-duo":{title:"AAC — NeuroNode Duo",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/nn-duo-windows-quick.jpg","Windows Easy Read","Turn on the device, open Controller App, Shake to Wake and connect NeuroNode, place it, then open Grid 3 or other AAC software."],
["./assets/nn-duo-ios-quick.jpg","iOS Easy Read","Turn on the device, open Controller App, Shake to Wake and connect NeuroNode, place it, then open Grid for iPad or other AAC software."]
]},
"aac-eyegaze-duo":{title:"AAC — EyeGaze Duo (Windows)",source:"TRIAL CARDS (2).pdf + supplied Control Bionics EyeGaze guides",steps:[
["./assets/aac-eyegaze-duo-trial.jpg","EyeGaze Duo Easy Read / trial guide","Start with the simplified Trial Card workflow for Windows EyeGaze Duo."],
["./assets/aac-eyegaze-usb.jpg","USB cable connections","Make sure the USB-C end connects to the EyeGaze camera and the USB-A end connects to the USB hub on the back of the device."],
["./assets/aac-eyegaze-positioning.jpg","EyeGaze positioning","Position the user approximately 45–60 cm from the display and keep the top of the screen approximately level with the user's eyes."]
]},
"aac-oskol2":{title:"AAC — Oskol 2 (iOS)",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/aac-oskol2-trial.jpg","Oskol 2 / Hiru trial guide","Use the Trial Card as the primary setup reference for iOS EyeGaze."],
["./assets/aac-eyegaze-positioning.jpg","EyeGaze positioning","Use the same core positioning principles: approximately 45–60 cm from the display, with the top of the screen near eye level."]
]},
"aac-uno-touch":{title:"AAC — UNO Touch",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/aac-uno-touch-trial.jpg","UNO Touch trial guide","Use the Trial Card workflow as the primary frontline setup guide."],
["./assets/aac-uno-touch-guide.jpg","UNO Touch additional trial instructions","Follow the supplied Trial Card instructions for the device and AAC software."]
]},
"aac-neuronode":{title:"AAC — NeuroNode",source:"TRIAL CARDS (2).pdf — priority for frontline; NeuroNode User Guide for deeper detail",jump:["nn-connect","nn-electrodes","nn-charge","nn-controller","nn-grid3","nn-troubleshoot"]},
"aac-mounts":{title:"AAC — Mounts",source:"TRIAL CARDS (2).pdf — Trial Mounting Systems",steps:[]},
"aac-eyegaze-usb":{title:"AAC — EyeGaze USB cable connections",source:"Supplied Control Bionics EyeGaze troubleshooting guide",steps:[
["./assets/aac-eyegaze-usb.jpg","Insert the EyeGaze USB cable correctly","USB-C goes into the EyeGaze camera. USB-A goes into the USB hub located on the back of the device."]
]},
"aac-eyegaze-position":{title:"AAC — EyeGaze positioning",source:"Supplied Control Bionics EyeGaze troubleshooting guide",steps:[
["./assets/aac-eyegaze-positioning.jpg","Position the user and display","Ideal EyeGaze distance is approximately 45–60 cm. Keep the top of the screen approximately level with the user's eyes for better tracking accuracy."]
]},
"aac-eye-cameras":{title:"AAC — EyeGaze camera reference",source:"Supplied Control Bionics EyeGaze Cameras guide",steps:[
["./assets/aac-eyegaze-cameras.jpg","Alea and Hiru","Alea is shown as a Windows-only camera option. Hiru is shown for Windows / iOS."]
]},

// Shared NeuroNode support inside AAC
"nn-connect":{title:"AAC — NeuroNode connection / Shake to Wake",source:"TRIAL CARDS + NeuroNode User Guide",steps:[
["./assets/nn-connect.jpg","Initial connection","Turn Bluetooth on, Shake to Wake NeuroNode and connect it in the Controller App."],
["./assets/nn-shake-wake.jpg","Shake to Wake","Use Shake to Wake to bring NeuroNode out of Standby so it can reconnect."],
["./assets/nn-standby.jpg","Standby / resume","Standby places NeuroNode into a low-power mode; Shake to Wake resumes it."]
]},
"nn-grid3":{title:"AAC — Connect NeuroNode to Grid 3",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/nn-grid3-connect.jpg","Grid 3 switch connection","Go to Menu → Settings → Access → Switches → Connection → Change Key, activate NeuroNode, then save the connection."],
["./assets/nn-hid-f9.jpg","HID Keycode Sendout","Where required, use Controller App → Home → Advanced → Advanced Settings and set HID Keycode Sendout to F9."]
]},
"nn-charge":{title:"AAC — NeuroNode charging",source:"TRIAL CARDS + NeuroNode User Guide",steps:[
["./assets/nn-features-charge.jpg","How to charge","Place NeuroNode correctly on the supplied charging plate and check the indicator."],
["./assets/nn-charging-detail.jpg","Charging detail","Review the detailed charging information if the basic setup is not enough."]
]},
"nn-electrodes":{title:"AAC — NeuroNode electrodes, bezel & placement",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/nn-electrode-options.jpg","Electrode types","Trial Card guidance covers non-adhesive, adhesive and cloth electrodes for different placement situations."],
["./assets/nn-band-bezel.jpg","Band and bezel","Follow the illustrated sequence for the electrode, bezel and NeuroNode band."],
["./assets/nn-emg-placement-1.jpg","EMG placement","Position the active electrode indicators along the intended muscle when using EMG access."]
]},
"nn-controller":{title:"AAC — NeuroNode Controller App",source:"NeuroNode User Guide",steps:[
["./assets/nn-controller-graph.jpg","Graph display","Use the graph to observe real-time switching activity."],
["./assets/nn-home-menu.jpg","Home Menu","Access Graph, About, Advanced and Standby from the Home Menu."],
["./assets/nn-graph-settings.jpg","Graph settings","Adjust thresholds and graph behaviour for the user's access method."]
]},
"nn-troubleshoot":{title:"AAC — NeuroNode troubleshooting / Bluetooth scrub",source:"TRIAL CARDS (2).pdf — priority; NeuroNode User Guide",steps:[
["./assets/nn-power-cycle.jpg","Try a power cycle first","If possible, place NeuroNode in Standby, then Shake to Wake and reconnect."],
["./assets/nn-reset-repair.jpg","Manual Bluetooth scrub / reset","Close Controller App, forget NeuroNode in Bluetooth settings, turn Bluetooth off, use the push-pin reset until the indicator transitions from rapid white to rapid blue, then reconnect."],
["./assets/nn-indicator-quick.jpg","Check the indicator","Use the light state to decide whether NeuroNode is searching, connected, low battery or in an error state."]
],warning:"If the documented reset flow does not resolve the issue, contact Control Bionics Support."}
};

const modal=document.getElementById("modal"),content=document.getElementById("modalContent");
let current=null,history=[],activeContext="neutral";

function cfg(ctx){
  return ctx==="aac"
   ? {name:"Nodi",img:"./assets/nodi-neuronode.png",label:"Ask Nodi",placeholder:"Ask Nodi an AAC question…"}
   : ctx==="neurostrip"
   ? {name:"Nero",img:"./assets/nero-transparent.png",label:"Ask Nero",placeholder:"Ask Nero a NeuroStrip question…"}
   : {name:"Guide",img:"./assets/nero-transparent.png",label:"Support Guide",placeholder:"Ask a support question…"};
}
function setContext(ctx){
  activeContext=ctx;
  document.body.classList.remove("context-neutral","context-neurostrip","context-aac");
  document.body.classList.add(`context-${ctx}`);
  const c=cfg(ctx);
  document.getElementById("mascotCompanionImg").src=c.img;
  document.getElementById("mascotCompanionImg").classList.remove("expression");
  document.getElementById("floatingMascotBtn").textContent=`✦ ${c.label}`;
  document.getElementById("askMascotTop").textContent=`✦ ${c.label}`;
  document.getElementById("assistantChatCharacter").src=c.img;
  document.getElementById("assistantIntroName").textContent=ctx==="neutral"?"Choose a section first":`Hi, I'm ${c.name} 👋`;
  document.getElementById("assistantIntroText").textContent=ctx==="aac"?"I guide AAC support, including NeuroNode, EyeGaze and communication devices.":ctx==="neurostrip"?"I guide NeuroStrip setup, application workflows and troubleshooting.":"Select NeuroStrip or AAC and the right support mascot will take over.";
  document.getElementById("assistantTitle").textContent=ctx==="neutral"?"Ask your support guide":c.label;
  document.getElementById("assistantInput").placeholder=c.placeholder;
}
document.querySelectorAll("[data-context]").forEach(a=>a.addEventListener("click",()=>setContext(a.dataset.context)));

function contextForKey(key){return key.startsWith("ns-")?"neurostrip":"aac"}

function imageClass(src){
  return /skin-preparation|patch-alignment|emg-placement|dysphagia|eyegaze|trial|setup|charge|band|indicator|overview|guide/i.test(src) ? "portrait" : "landscape";
}
function renderGuide(key){
  const g=guides[key];
  let html=`<div class="guide-title"><span class="eyebrow">${contextForKey(key)==="aac"?"AAC SUPPORT GUIDE":"NEUROSTRIP SUPPORT GUIDE"}</span><h2>${g.title}</h2><p>Scroll down through the visual guide. Click any image to view it fullscreen.</p></div>`;
  if(g.jump){
    const names={"ns-skinprep":"Skin preparation","ns-placement":"EMG placement","ns-connections":"Connect NeuroStrip","ns-patient":"Client Manager","ns-protocols":"Protocols","ns-session":"Start a session","ns-graph":"Session graph","ns-review":"Review progress","nn-connect":"Connection","nn-electrodes":"Electrodes & placement","nn-charge":"Charging","nn-controller":"Controller App","nn-grid3":"Grid 3","nn-troubleshoot":"Troubleshooting"};
    html+=`<div class="choice-grid">${g.jump.map(k=>`<button class="choice" data-jump="${k}">${names[k]||k}</button>`).join("")}</div>`;
  }
  if(g.steps && g.steps.length){
    html+=`<div class="vertical-guide">`+g.steps.map((s,i)=>`<section class="guide-step"><span class="step-kicker">STEP / VISUAL ${i+1} OF ${g.steps.length}</span><h3>${s[1]}</h3><p>${s[2]}</p><div class="guide-image-wrap"><img class="guide-image ${imageClass(s[0])}" src="${s[0]}" alt="${s[1]}"></div><div class="image-actions">Click image to enlarge <a href="${s[0]}" target="_blank" rel="noopener">Open image in new tab ↗</a></div></section>`).join("")+`</div>`;
  }
  if(key==="aac-mounts"){
    const mountAssets=["./assets/aac-mounts-1.jpg","./assets/aac-mounts-2.jpg"].filter(src=>assetExists(src));
    html+=`<div class="vertical-guide"><section class="guide-step"><span class="step-kicker">TRIAL MOUNTING SYSTEMS</span><h3>Table Stand & Floor Stand</h3><p>The Trial Cards identify Table Stand and Floor Stand as the available trial mounting systems. Use the supplied mounting documentation or contact Support for configuration-specific mounting assistance.</p>${mountAssets.map((src,i)=>`<div class="guide-image-wrap"><img class="guide-image portrait" src="${src}" alt="Trial mounting system ${i+1}"></div><div class="image-actions">Click image to enlarge <a href="${src}" target="_blank">Open image in new tab ↗</a></div>`).join("")}</section></div>`;
  }
  if(g.warning)html+=`<div class="callout warning">${g.warning}</div>`;
  html+=`<div class="source-note">Source basis: ${g.source}</div>`;
  return html;
}
function assetExists(src){const test=new Image();test.src=src;return true}

function openGuide(key,push=true){
  if(push&&current&&current!==key)history.push(current);
  current=key;setContext(contextForKey(key));
  content.innerHTML=renderGuide(key);
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
  content.querySelectorAll("[data-jump]").forEach(b=>b.onclick=()=>openGuide(b.dataset.jump,true));
  bindZoom(content);
  document.querySelector(".dialog").scrollTop=0;
}
function closeGuide(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";current=null;history=[]}
document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openGuide(b.dataset.open));
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=closeGuide);
document.getElementById("backBtn").onclick=()=>{if(history.length){const p=history.pop();current=null;openGuide(p,false)}else closeGuide()};

/* Fullscreen images */
const lightbox=document.getElementById("imageLightbox"),lightboxImg=document.getElementById("imageLightboxImg"),lightboxNewTab=document.getElementById("imageLightboxNewTab");
function bindZoom(scope=document){scope.querySelectorAll(".guide-image").forEach(img=>{img.onclick=()=>{lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightboxNewTab.href=img.src;lightbox.classList.add("open")}})}
document.querySelectorAll("[data-lightbox-close]").forEach(el=>el.onclick=()=>lightbox.classList.remove("open"));

/* Search + simple mascot router */
const routes=[
["eyegaze cable usb type c type a","aac-eyegaze-usb"],["eyegaze position positioning distance 45 60 tracking accuracy","aac-eyegaze-position"],["eyegaze duo","aac-eyegaze-duo"],["oskol hiru ipad ios","aac-oskol2"],["uno touch","aac-uno-touch"],["trilogy","aac-trilogy"],["duo neuronode","aac-duo"],["mount floor stand table stand","aac-mounts"],["neuronode connect bluetooth shake wake","nn-connect"],["neuronode grid 3 f9 switch","nn-grid3"],["neuronode charge charging","nn-charge"],["neuronode electrode placement bezel band","nn-electrodes"],["neuronode reset scrub red error","nn-troubleshoot"],["neurostrip skin preparation","ns-skinprep"],["neurostrip placement emg","ns-placement"],["neurostrip connect","ns-connections"],["neurostrip protocol","ns-protocols"],["neurostrip session graph","ns-graph"],["neurostrip dysphagia swallow","ns-dysphagia"]
];
function findRoute(q){q=q.toLowerCase();let best=null,score=0;for(const [terms,key] of routes){let s=0;for(const t of terms.split(" ")){if(q.includes(t))s+=t.length}if(s>score){score=s;best=key}}return score?best:null}
function doSearch(){const q=document.getElementById("searchInput").value.trim(),k=findRoute(q);if(k)openGuide(k);else goAssistant(q)}
document.getElementById("searchBtn").onclick=doSearch;document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")doSearch()});

const neroStates=["happy","curious","focused","proud"];let ni=0,busy=false;
setInterval(()=>{if(activeContext==="neurostrip"&&!busy){const img=document.getElementById("mascotCompanionImg"),chat=document.getElementById("assistantChatCharacter"),src=`./assets/nero-${neroStates[ni++%neroStates.length]}.jpg`;[img,chat].forEach(x=>{x.src=src;x.classList.add("expression")})}},5000);

function ask(text){
  text=text.trim();if(!text)return;
  const log=document.getElementById("assistantChatLog"),c=cfg(activeContext);
  const u=document.createElement("div");u.className="assistant-msg user";u.textContent=text;log.appendChild(u);
  const k=findRoute(text);busy=true;
  if(activeContext==="neurostrip"){document.getElementById("mascotCompanionImg").src="./assets/nero-thinking.jpg";document.getElementById("assistantChatCharacter").src="./assets/nero-thinking.jpg"}
  setTimeout(()=>{const a=document.createElement("div");a.className="assistant-msg";if(k){const target=contextForKey(k),name=cfg(target).name;a.innerHTML=`<strong>${activeContext==="neutral"?"Guide":c.name}:</strong> I found the matching ${target==="aac"?"AAC":"NeuroStrip"} guide. <button class="choice" data-open-result="${k}">Open guide →</button>`;if(target!==activeContext)setContext(target)}else a.innerHTML=`<strong>${activeContext==="neutral"?"Guide":c.name}:</strong> I couldn't confidently match that to one of the current support guides. Try including the product and issue.`;log.appendChild(a);log.scrollTop=log.scrollHeight;a.querySelectorAll("[data-open-result]").forEach(b=>b.onclick=()=>openGuide(b.dataset.openResult));busy=false},450);
}
function goAssistant(prefill=""){document.getElementById("ask-guide").scrollIntoView({behavior:"smooth"});setTimeout(()=>{const i=document.getElementById("assistantInput");i.focus();if(prefill)i.value=prefill},350)}
document.getElementById("assistantSend").onclick=()=>{const i=document.getElementById("assistantInput");ask(i.value);i.value=""};document.getElementById("assistantInput").addEventListener("keydown",e=>{if(e.key==="Enter"){ask(e.target.value);e.target.value=""}});document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>ask(b.dataset.q));document.getElementById("floatingMascotBtn").onclick=()=>goAssistant();document.getElementById("askMascotTop").onclick=()=>goAssistant();

const io=new IntersectionObserver(entries=>{const v=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(v)setContext(v.target.id==="aac"?"aac":"neurostrip")},{threshold:[.35,.55]});["neurostrip","aac"].forEach(id=>io.observe(document.getElementById(id)));
setContext("neutral");
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(lightbox.classList.contains("open"))lightbox.classList.remove("open");else if(modal.classList.contains("open"))closeGuide()}});
