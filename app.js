const guides={
quickstart:{title:"Quick start & overview",html:`<img class="visual" src="./assets/ns-guide-overview.png" alt="NeuroStrip overview"><div class="step-list">
<div class="step"><strong>1. Prepare the NeuroStrip</strong><br>Confirm the device is charged and ready for the planned session.</div>
<div class="step"><strong>2. Prepare the user and target site</strong><br>Identify the target muscle and proceed through skin preparation, placement and patch alignment.</div>
<div class="step"><strong>3. Open the NeuroStrip application</strong><br>Use the dashboard to manage clients, protocols and Connections.</div>
<div class="step"><strong>4. Connect and assign channels</strong><br>Wake the device, scan for it and assign it to the intended channel and muscle placement.</div>
<div class="step"><strong>5. Start or review a session</strong><br>Select a client, choose the protocol and confirm the live graph before recording.</div></div>`},

skinprep:{title:"Skin preparation",html:`<img class="visual" src="./assets/ns-skin-preparation.jpg" alt="NeuroStrip skin preparation visual guide"><p>Good preparation improves electrode contact and supports clearer, more repeatable sEMG readings.</p><div class="step-list">
<div class="step"><strong>1. Locate the target muscle.</strong> Identify the muscle and fibre direction.</div>
<div class="step"><strong>2. Shave if required.</strong> Remove hair only if it will interfere with electrode contact or patch adhesion.</div>
<div class="step"><strong>3. Clean and abrade.</strong> Use an alcohol wipe, then allow the skin to dry completely.</div>
<div class="step"><strong>4. Conductive solution.</strong> Wipe or spray the conductive solution onto the skin and allow it to dry completely.</div>
<div class="step"><strong>5. Apply the patch.</strong> Continue only after the prepared skin is dry.</div></div>`},

placement:{title:"EMG placement",html:`<div class="visual-grid"><img src="./assets/ns-emg-placement-1.jpg" alt="NeuroStrip sEMG placement guide"><img src="./assets/ns-emg-placement-2.jpg" alt="NeuroStrip body muscle placement guide"></div><p>The target muscle should respond, at least minimally, to a command to contract and should return to rest in a timely manner.</p><ol>
<li>Place NeuroStrip over the intended active muscle rather than a tendon or joint.</li><li>Align NeuroStrip with the direction of the muscle fibres.</li><li>Use consistent placement for repeated measurements.</li><li>Press the electrode patch firmly onto prepared, dry skin.</li></ol>
<div class="callout">Examples in the supplied placement material include biceps brachii, triceps, quadriceps, hamstrings, gastrocnemius, rectus abdominis and obliques.</div>`},

patch:{title:"Patch alignment",html:`<img class="visual" src="./assets/ns-patch-alignment.jpg" alt="NeuroStrip patch alignment visual guide"><ol>
<li>Remove the key-hole liner from the top of the NeuroStrip patch.</li><li>Place the patch in the base of the Patch Alignment Tool.</li><li>Fit the top of the tool onto the base so it is flush and snug.</li><li>Insert NeuroStrip into the outline and press down to adhere it to the patch.</li><li>Remove the joined NeuroStrip and patch from the tool.</li><li>Remove the bottom liner, adhere to the body and apply overdressing to the tail section as directed.</li></ol>`},

connections:{title:"Connect NeuroStrip",html:`<img class="visual" src="./assets/ns-guide-connections.png" alt="NeuroStrip Connections screen"><ol>
<li>Open <strong>Connections</strong> from the application.</li><li>Shake / wake the NeuroStrip before scanning.</li><li>Select <strong>Scan for Devices</strong>.</li><li>Connect the required NeuroStrip.</li><li>Use the Channels tab to assign each device to a channel and muscle.</li><li>Use the ? icon beside the device name to view firmware and serial information.</li></ol>`},

patient:{title:"Patient / Client Manager",html:`<div class="visual-grid"><img src="./assets/ns-guide-dashboard.png" alt="NeuroStrip client dashboard"><img src="./assets/ns-guide-new-patient.png" alt="NeuroStrip new patient setup"></div>
<img class="visual" src="./assets/ns-guide-patient-overview.png" alt="NeuroStrip patient overview metrics">
<div class="visual-grid"><img src="./assets/ns-guide-patient-sessions.png" alt="NeuroStrip patient sessions"><img src="./assets/ns-guide-measurements.png" alt="NeuroStrip patient measurements"></div>
<ol><li>Use the Clients tab to search, filter, open or create a client.</li><li>Select <strong>New Patient</strong> to enter client details and optional tags.</li><li>Open a client to access Overview, Sessions, Notes and Measurements.</li><li>The Overview includes amplitude, distribution and iEMG metric views.</li><li>Sessions contains previous recordings and export actions.</li><li>Measurements supports saved results, latest/best values, performance delta and trend graphs.</li></ol>`},

protocols:{title:"Create / edit protocols",html:`<img class="visual" src="./assets/ns-guide-protocols.png" alt="NeuroStrip protocols screen"><div class="visual-grid"><img src="./assets/ns-guide-create-protocol-1.png" alt="Create a NeuroStrip protocol"><img src="./assets/ns-guide-create-protocol-2.png" alt="NeuroStrip protocol visualisation"></div><img class="visual" src="./assets/ns-guide-edit-protocol.png" alt="NeuroStrip protocol preview"><ol>
<li>Open the Protocols tab.</li><li>Select <strong>New Protocol</strong>, or Clone/Edit an existing protocol.</li><li>Enter activity details and tags.</li><li>Select the required muscle channels.</li><li>Build the activity set timeline, including repetition, timing and intervals.</li><li>Configure visualisation settings such as graph scale, target line and target condition.</li><li>Use Preview to confirm activity order, timing, repetitions and visual feedback.</li><li>Save the protocol when confirmed.</li></ol>`},

session:{title:"Start a session",html:`<div class="visual-grid"><img src="./assets/ns-guide-new-session.png" alt="NeuroStrip create new session"><img src="./assets/ns-guide-select-protocol.png" alt="NeuroStrip select protocol"></div><ol>
<li>Select the required client and start a new session.</li><li>Scan for and connect the required NeuroStrip devices.</li><li>Confirm each connected device and status.</li><li>Assign devices to channels and select the body placement for each used channel.</li><li>Leave unused channels as Unassigned.</li><li>Select one or more protocols and confirm the selected sequence.</li><li>Continue to the Session Recording screen.</li></ol>`},

graph:{title:"Session graph & controls",html:`<div class="visual-grid"><img src="./assets/ns-guide-session-graph.png" alt="NeuroStrip session recording graph"><img src="./assets/ns-guide-graph-controls.png" alt="NeuroStrip graph controls"></div><ul>
<li><strong>EMG Chart:</strong> live muscle activity for active channels.</li><li><strong>Channel indicators:</strong> channel colour, placement and current reading.</li><li><strong>Recruitment Patterns:</strong> body-map visualisation.</li><li><strong>Widget controls:</strong> live readings, accelerometer, raw X/Y/Z, EMG chart and body heatmap.</li><li><strong>Audio:</strong> can provide a beep when a target line is reached.</li><li><strong>Repetition counter and Go intervals:</strong> track activity progress.</li><li><strong>Session controls:</strong> notes, skip, pause and stop.</li></ul>`},

review:{title:"Review sessions & measurements",html:`<div class="visual-grid"><img src="./assets/ns-guide-patient-sessions.png" alt="NeuroStrip session review and export"><img src="./assets/ns-guide-measurements.png" alt="NeuroStrip measurement trends"></div><ol>
<li>Open the client profile and select the Sessions tab.</li><li>Double-click a session to open and review it.</li><li>Use the dots beside a session for available export options.</li><li>Use Measurements to review saved performance tests and results.</li><li>Review latest result, best result, performance delta and trend history where available.</li></ol>`},

troubleshooting:{title:"Troubleshooting",html:`<img class="visual" src="./assets/ns-guide-troubleshooting.png" alt="NeuroStrip troubleshooting guide"><h3>Device does not appear</h3><ol><li>Confirm the device is awake and in BLE broadcast mode.</li><li>Open Connections and select Discover / Scan for Devices.</li></ol><h3>Device will not connect</h3><ol><li>Select Connect again; the supplied guide notes that one or two attempts may occasionally be required.</li></ol><h3>Inaccurate / erratic sEMG</h3><ol><li>Confirm skin preparation and patch adherence.</li><li>Check NeuroStrip-to-patch electrode alignment.</li><li>Use the Patch Alignment Tool if alignment is uncertain.</li><li>Place the connected device in the charger as a device check; the supplied guide describes a reading near 0 μV.</li><li>If required, use the supplied pin tool for a three-second hard reset.</li><li>Restart the NeuroStrip application as the final standard step.</li></ol><div class="callout warning">Escalate unresolved issues to Control Bionics Support rather than continuing unsupported troubleshooting.</div>`},

rehab:{title:"Rehabilitation pathway",html:`<img class="visual" src="./assets/ns-guide-patient-overview.png" alt="NeuroStrip rehabilitation client overview"><p>Use the core NeuroStrip workflow to support repeated rehabilitation sessions and progress review.</p><div class="choice-grid">
<button class="choice" data-jump="skinprep">Prepare skin</button><button class="choice" data-jump="placement">Choose placement</button><button class="choice" data-jump="patch">Align patch</button><button class="choice" data-jump="connections">Connect devices</button><button class="choice" data-jump="patient">Open client</button><button class="choice" data-jump="protocols">Set protocol</button><button class="choice" data-jump="session">Run session</button><button class="choice" data-jump="review">Review progress</button></div>`},

sport:{title:"Sports & Performance pathway",html:`<img class="visual" src="./assets/ns-guide-measurements.png" alt="NeuroStrip performance measurements"><p>Use protocols, live EMG and saved measurements for repeatable sport/performance workflows.</p><div class="choice-grid">
<button class="choice" data-jump="placement">Muscle placement</button><button class="choice" data-jump="connections">Connect devices</button><button class="choice" data-jump="protocols">Build protocol</button><button class="choice" data-jump="session">Run activity</button><button class="choice" data-jump="graph">Live monitoring</button><button class="choice" data-jump="review">Review measurements</button></div>`},

dysphagia:{title:"Dysphagia",html:`<div class="visual-grid"><img src="./assets/ns-dysphagia-overview.png" alt="NeuroStrip dysphagia overview"><img src="./assets/ns-dysphagia-use-cases.png" alt="NeuroStrip dysphagia use cases"></div><p>The supplied Dysphagia material describes sEMG biofeedback as real-time visual feedback of swallowing-muscle activation. It identifies the mylohyoid, geniohyoid, digastric and genioglossus muscles and describes visualising contraction timing, duration and amplitude.</p><h3>Examples listed in the supplied material</h3><ul><li>Effortful swallow and Masako manoeuvre.</li><li>Swallow timing and coordination practice.</li><li>Supraglottic swallow and Mendelsohn manoeuvre.</li><li>Post-stroke dysphagia rehabilitation.</li><li>Head and neck cancer recovery.</li><li>Baseline assessment and pre/post-intervention comparison.</li><li>Research, data collection, education and training.</li></ul><div class="callout warning">Dysphagia assessment and treatment require appropriate clinical expertise and governance. This hub provides product-operation information only.</div>`}
};

const modal=document.getElementById("modal"),content=document.getElementById("modalContent");
let current=null, history=[];
function bindJumps(){content.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>openGuide(b.dataset.jump,true)))}
function openGuide(key,push=true){if(push&&current&&current!==key)history.push(current);current=key;const g=guides[key];content.innerHTML=`<span class="eyebrow">NEUROSTRIP SUPPORT GUIDE</span><h2>${g.title}</h2>${g.html}`;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";bindJumps()}
function closeGuide(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";current=null;history=[]}
document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>openGuide(b.dataset.open)));
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",closeGuide));
document.getElementById("backBtn").addEventListener("click",()=>{if(history.length){const p=history.pop();current=null;openGuide(p,false)}else closeGuide()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeGuide()});

const searchRoutes=[
[["skin","shave","alcohol","conductive"],"skinprep"],
[["placement","biceps","triceps","quad","hamstring","gastrocnemius","oblique"],"placement"],
[["patch","alignment"],"patch"],
[["connect","bluetooth","ble","scan","channel"],"connections"],
[["patient","client","measurement","overview"],"patient"],
[["protocol","target line","repetition"],"protocols"],
[["session","body placement","select protocol"],"session"],
[["graph","heatmap","accelerometer","widget"],"graph"],
[["export","measurement","trend"],"review"],
[["troubleshoot","erratic","inaccurate","reset","0 uv"],"troubleshooting"],
[["dysphagia","swallow","masako","mendelsohn"],"dysphagia"],
[["rehab","rehabilitation"],"rehab"],
[["sport","performance","return to play"],"sport"]
];
function doSearch(){const q=document.getElementById("searchInput").value.trim().toLowerCase();let best="quickstart",score=0;searchRoutes.forEach(([terms,key])=>{let s=0;terms.forEach(t=>{if(q.includes(t))s+=t.length});if(s>score){score=s;best=key}});openGuide(best)}
document.getElementById("searchBtn").addEventListener("click",doSearch);
document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")doSearch()});
