const CONFIG={email:"bandaruharisravan@gmail.com",linkedin:"https://www.linkedin.com/in/hari-sravan-bandaru-90a33731b/",github:"https://github.com/BandaruHarisravan",repos:{hr:"",sales:""},formEndpoint:"https://formsubmit.co/ajax/bandaruharisravan@gmail.com"};
const IMG={"xl":"assets/images/dashboards/excel-employee-attrition-dashboard.jpg","pbi":"assets/images/dashboards/powerbi-hr-talent-acquisition-dashboard.jpg","tab":"assets/images/dashboards/tableau-workforce-overview-dashboard.jpg","sales":"assets/images/dashboards/powerbi-sales-performance-dashboard.jpg"};
const CIMG=["assets/certificates/images/ExcelR_Data_Analytics_Certificate.jpg","assets/certificates/images/Proxima_HR_Analytics_Capstone_Certificate.jpg","assets/certificates/images/NASSCOM_Exploratory_Data_Analysis_Certificate.jpg","assets/certificates/images/Deloitte_Data_Analytics_Job_Simulation_Certificate.jpg","assets/certificates/images/TATA_GenAI_Data_Analytics_Job_Simulation_Certificate.jpg","assets/certificates/images/IBM_SQL_and_Relational_Databases_101_Certificate.jpg"];
const PDF=["assets/certificates/pdf/ExcelR_Data_Analytics_Certificate.pdf","assets/certificates/pdf/Proxima_HR_Analytics_Capstone_Certificate.pdf","assets/certificates/pdf/NASSCOM_Exploratory_Data_Analysis_Certificate.pdf","assets/certificates/pdf/Deloitte_Data_Analytics_Job_Simulation_Certificate.pdf","assets/certificates/pdf/TATA_GenAI_Data_Analytics_Job_Simulation_Certificate.pdf","assets/certificates/pdf/IBM_SQL_and_Relational_Databases_101_Certificate.pdf"];const RESUME="assets/resume/Bandaru_Hari_Sravan_Resume.pdf";const SQLFILE="assets/files/Attrition_Retention_SQL.sql";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches,hov=matchMedia("(hover:hover)").matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function openPdf(k){window.open(PDF[k],"_blank","noopener")}
function downloadFile(path,name){const a=document.createElement("a");a.href=path;a.download=name;document.body.append(a);a.click();a.remove()}

/* ----- content ----- */
const WHY="I started as a Computer Science student who loved logic and problem solving. Along the way I noticed that the most interesting problems were hidden inside data: numbers waiting to explain why a business grows, struggles or changes. Data analytics gave me a way to use my technical background to answer real questions. Training in Data Analytics with Generative AI at ExcelR, and building dashboards for an HR attrition capstone and a sales performance project, showed me how much a clear chart can change a decision.";
$("#why").textContent=WHY;
const EDU=[["2022 – 2026","B.Tech, Computer Science and Engineering","Bharath Institute of Higher Education and Research, Chennai, Tamil Nadu","Grade: 84.4%"],["2020 – 2022","Intermediate (MPC: Maths, Physics, Chemistry)","Krishnaveni Junior College, Khammam, Telangana","Grade: 85.5%"],["2019 – 2020","SSC (10th)","Triveni Talent School, Kothagudem, Telangana","GPA: 10.0"]];
const EDU2=[["Undergraduate","B.Tech · Computer Science and Engineering","Bharath Institute of Higher Education and Research","Chennai, Tamil Nadu","2022 – 2026","Grade: 84.4%"],["Intermediate","MPC · Maths, Physics, Chemistry","Krishnaveni Junior College","Khammam, Telangana","2020 – 2022","Grade: 85.5%"],["Secondary","SSC (10th)","Triveni Talent School","Kothagudem, Telangana","2019 – 2020","GPA: 10.0"]];
const SW=[],K=(2*Math.PI*.55)**2,C=1.0,MAXT=1.15,clampT=v=>Math.max(-MAXT,Math.min(MAXT,v));
const kick=(f,v)=>{f.w=Math.max(-6,Math.min(6,f.w+v))};
function setT(f){f.el.style.transform=`rotate(${f.th}rad)`;if(f.sh)f.sh(f)}
function swingify(f){f.th=0;f.w=0;f.drag=false;f.pt=0;f.moved=0;SW.push(f);const h=f.hit;
 h.addEventListener("pointermove",e=>{if(rm)return;if(f.drag){const p=f.pivot(),dx=e.clientX-p.x,dy=Math.max(60,e.clientY-p.y),th=clampT(-Math.atan2(dx,dy)),now=performance.now(),dtt=Math.max(.008,(now-f.pt)/1000);f.w=.6*f.w+.4*((th-f.th)/dtt);f.th=th;f.pt=now;f.moved+=Math.abs(e.movementX||0)+Math.abs(e.movementY||0);setT(f)}else if(e.pointerType=="mouse")kick(f,-(e.movementX||0)*.012)});
 h.addEventListener("pointerdown",e=>{f.drag=true;f.moved=0;f.pt=performance.now();f.w=0;try{h.setPointerCapture(e.pointerId)}catch(er){}});
 h.addEventListener("pointerup",e=>{if(!f.drag)return;f.drag=false;if(f.moved<6){if(f.tap)f.tap();else{const r=h.getBoundingClientRect();kick(f,(e.clientX<r.left+r.width/2)?-3.2:3.2)}}else f.w=Math.max(-4,Math.min(4,f.w*.55))});
 h.addEventListener("pointercancel",()=>{f.drag=false});
 h.addEventListener("keydown",e=>{if(e.key=="Enter"||e.key==" "){e.preventDefault();if(f.tap)f.tap();else kick(f,Math.random()<.5?-3.2:3.2)}});return f}
if(!rm){let lt=performance.now();(function loop(tt){const dt=Math.min(.033,(tt-lt)/1000);lt=tt;SW.forEach(f=>{if(f.drag)return;if(Math.abs(f.th)<1e-4&&Math.abs(f.w)<1e-3){if(f.th||f.w){f.th=0;f.w=0;setT(f)}return}f.w+=(-K*Math.sin(f.th)-C*f.w)*dt;f.th+=f.w*dt;if(f.th>MAXT){f.th=MAXT;f.w=-Math.abs(f.w)*.4}if(f.th<-MAXT){f.th=-MAXT;f.w=Math.abs(f.w)*.4}setT(f)});requestAnimationFrame(loop)})(lt)}
const IDPH=["assets/images/id/btech.jpg","assets/images/id/inter.jpg","assets/images/id/ssc.jpg"];
$("#wall").innerHTML=EDU2.map((e,i)=>`<div class="hw"><span class="nail" aria-hidden="true"></span><div class="hang"><svg class="strap" viewBox="0 0 100 104" preserveAspectRatio="none" aria-hidden="true"><line x1="50" y1="0" x2="37" y2="100"/><line x1="50" y1="0" x2="63" y2="100"/><line class="d" x1="50" y1="0" x2="37" y2="100"/><line class="d" x1="50" y1="0" x2="63" y2="100"/></svg><span class="clip" aria-hidden="true"></span><div class="idc" tabindex="0" role="group" aria-label="${esc(e[1])}, ${e[4]}. Press Enter to swing the card."><span class="slot"></span><div class="ih2"><b>BHS</b><span>Bandaru Hari Sravan</span></div><div class="iph2"><img src="${IDPH[i]}" alt="Photo of Bandaru Hari Sravan during ${esc(e[0])} studies"></div><h3>Bandaru Hari Sravan</h3><div class="role">${esc(e[1])}</div><hr><div class="irow"><i><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3 2 8v2h20V8L12 3zm-8 9v7H2v2h20v-2h-2v-7h-2v7h-3v-7h-2v7h-2v-7H9v7H6v-7H4z"/></svg></i><div><small>Institution</small><span>${esc(e[2])}</span></div></div><div class="irow"><i><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg></i><div><small>Location</small><span>${e[3]}</span></div></div><div class="irow"><i><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 8v10H5V10h14z"/></svg></i><div><small>Years · Grade</small><span>${e[4]} · ${e[5]}</span></div></div><div class="ifoot"><svg class="wv" viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><path d="M0 14C22 0 55 2 100 8V14Z" fill="var(--idh)"/></svg>Dream · Learn · Achieve</div></div></div></div>`).join("");
const IDS=$$(".hang").map(el=>{const hit=el.querySelector(".idc"),hw=el.parentElement;return swingify({el,hit,pivot:()=>{const r=hw.getBoundingClientRect();return{x:r.left+r.width/2,y:r.top}},sh:f=>{hit.style.boxShadow=`${(-f.th*70).toFixed(1)}px 22px 34px rgba(0,0,0,.45)`}})});
if(!rm)new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();IDS.forEach((f,i)=>setTimeout(()=>kick(f,(i%2?1:-1)*(2.2+i*.4)),250+i*220))}},{threshold:.3}).observe($("#wall"));
/* theme switch */
function setTheme(m){document.documentElement.dataset.theme=m;const b=$("#theme");b.textContent=m=="dark"?"☀":"☾";b.setAttribute("aria-label",m=="dark"?"Switch to light theme":"Switch to dark theme");b.title=b.getAttribute("aria-label");try{localStorage.setItem("theme",m)}catch(e){}}
$("#theme").onclick=()=>setTheme(document.documentElement.dataset.theme=="dark"?"light":"dark");setTheme(document.documentElement.dataset.theme=="light"?"light":"dark");
const TOOLS=[["Excel","Xl","Used in projects","Analysed employee exit data (departments, performance ratings, exit reasons) and built the attrition dashboard workbook."],["SQL (MySQL)","SQL","Used in projects","Wrote queries for total exits, voluntary, involuntary and regrettable attrition, monthly and department-wise exits."],["Power BI","BI","Used in projects","Built the sales performance dashboard and worked on the HR recruitment analytics dashboard."],["Tableau","Tb","Used in projects","Team workforce overview dashboard: demographics, job levels and distribution."],["Python","Py","In my skill set","Listed on my resume."],["Statistics","St","In my skill set","Listed on my resume."],["R","R","In my skill set","Listed on my resume."]];
const TMAP={"Excel":{p:0,k:"xl"},"SQL (MySQL)":{p:0,k:null,c:true},"Power BI":{p:1,k:"sales"},"Tableau":{p:0,k:"tab"}};
function showTool(i){const t=TOOLS[i];$("#tdetail").innerHTML=`<b>${t[0]}</b> · <em>${t[2]}</em><p style="margin:6px 0 0">${t[3]}</p>`}showTool(0);
const rope=$("#rope"),NS="http://www.w3.org/2000/svg",RS=document.createElementNS(NS,"svg");RS.id="rsvg";rope.append(RS);
const SLD=TOOLS.map((t,i)=>{const d=document.createElement("div");d.className="sl";d.innerHTML=`<span class="peg" aria-hidden="true"></span><div class="sc" tabindex="0" role="button" aria-label="${t[0]}. ${TMAP[t[0]]?"Opens the related project.":"In my skill set."}" style="--c:var(--t${i%5+1});--cx:var(--t${i%5+1}x)"><div class="st">${t[1]}</div><b>${t[0]}</b><span class="sk">${t[2]}</span><em class="go">${TMAP[t[0]]?"View project →":"Skill set"}</em></div>`;rope.append(d);return d});
const SLF=SLD.map((d,i)=>swingify({el:d,hit:d.querySelector(".sc"),px:0,py:0,pivot(){const r=rope.getBoundingClientRect();return{x:r.left+this.px,y:r.top+this.py}},tap:()=>toolTap(i)}));
function yAt(r,x){const cx=(r.x0+r.x1)/2,cy=(r.y0+r.y1)/2+2*r.sag,u=(x-r.x0)/(r.x1-r.x0);return(1-u)*(1-u)*r.y0+2*(1-u)*u*cy+u*u*r.y1}
function layoutRope(){const W=rope.clientWidth,wide=W>=860,sw=wide?132:104;let H,ropes;
 if(wide){H=350;ropes=[{x0:0,y0:20,x1:W,y1:118,sag:34,ids:[0,1,2,3],xs:[.07,.2,.33,.46]},{x0:W,y0:20,x1:0,y1:118,sag:34,ids:[4,5,6],xs:[.64,.78,.92]}]}
 else{const rows=[[0,1,2],[3,4],[5,6]];H=rows.length*250;ropes=rows.map((ids,r)=>{const up=r%2==0;return{x0:0,y0:r*250+(up?14:50),x1:W,y1:r*250+(up?50:14),sag:18,ids,xs:ids.map((_,k)=>(k+1)/(ids.length+1))}})}
 rope.style.height=H+"px";RS.setAttribute("width",W);RS.setAttribute("height",H);RS.setAttribute("viewBox",`0 0 ${W} ${H}`);
 RS.innerHTML=ropes.map(r=>{const cx=(r.x0+r.x1)/2,cy=(r.y0+r.y1)/2+2*r.sag,d=`M${r.x0} ${r.y0} Q${cx} ${cy} ${r.x1} ${r.y1}`;return `<path class="r1" d="${d}"/><path class="r2" d="${d}"/><circle class="knot" cx="${r.x0}" cy="${r.y0}" r="7"/><circle class="knot" cx="${r.x1}" cy="${r.y1}" r="7"/>`}).join("");
 ropes.forEach(r=>r.ids.forEach((id,k)=>{const x=r.xs[k]*W,y=yAt(r,x),d=SLD[id],f=SLF[id];f.px=x;f.py=y;d.style.setProperty("--sw",sw+"px");d.style.left=(x-sw/2)+"px";d.style.top=(y-10)+"px"}))}
layoutRope();let _rt;addEventListener("resize",()=>{clearTimeout(_rt);_rt=setTimeout(layoutRope,120)});
function toolTap(i){const t=TOOLS[i],m=TMAP[t[0]];showTool(i);if(m)jumpProject(m,t[0])}
function jumpProject(m,name){const sl=$$(".slide")[m.p];$("#projects").scrollIntoView({behavior:rm?"auto":"smooth"});
 setTimeout(()=>{go(m.p);$$(".layer").forEach(l=>l.classList.remove("pick"));$$(".pbanner").forEach(b=>b.hidden=true);if(m.k){const l=sl.querySelector(`.layer[data-k="${m.k}"]`);if(l)l.classList.add("pick")}
  const b=sl.querySelector(".pbanner");b.hidden=false;b.textContent=m.k?`Showing the ${name} dashboard from this project, as picked in Tools.`:`Opening the ${name} case study from Tools.`;if(m.c)setTimeout(()=>openCase(m.p),450)},rm?0:700)}


/* ----- projects ----- */
const SQLSNIP="-- Which reasons drive the most exits?\nSELECT ExitReason,\n  COUNT(ExitID) AS Total_Exits,\n  ROUND(COUNT(ExitID)*100.0/\n   (SELECT COUNT(*) FROM exit_details),2)\n   AS Exit_Percentage\nFROM exit_details\nGROUP BY ExitReason\nORDER BY Total_Exits DESC\nLIMIT 5;";
const PR=[
{id:"hr",title:"HR Workforce & Attrition Analytics",sub:"Why employees leave, who the workforce is and how hiring performs",short:"A team capstone that combines SQL queries, an Excel attrition dashboard, a Tableau workforce overview and a Power BI recruitment dashboard.",tags:["SQL (MySQL)","Excel","Power BI","Tableau"],
 imgs:[["xl","Excel · Employee Attrition Dashboard"],["tab","Tableau · Workforce Overview"],["pbi","Power BI · HR Talent Acquisition Dashboard"]],
 objective:"Understand employee attrition, workforce distribution and recruitment trends: find which departments see more exits, separate voluntary from involuntary exits, examine exit reasons and performance ratings, and present the results in dashboards.",
 dataset:["Excel workbook with the sheets Employees_Master, Calender, DepMonthlyHC, MonthlyAnalysis and Exit_Details; the exit records contain 987 employee exits.","MySQL database hr_analytics with the tables exit_details, employees and monthlyanalysis.","Tableau workforce data built from employee, department, designation, location and exit tables (the dashboard shows 2,299 employees).","Power BI recruitment data with candidate, department, status, year, gender and source fields."],
 tools:["SQL (MySQL)","Excel","Power BI","Tableau"],
 method:["Prepared and cleaned the HR data (resume: data cleaning, transformation and analysis in Excel and SQL).","SQL: wrote queries for total exits, voluntary, involuntary and regrettable attrition, overall attrition rate, monthly exits, department-wise attrition, top 5 exit reasons, and gender, region and exit-type breakdowns.","Excel: analysed employee exit information, department-wise attrition, performance ratings and exit reasons.","Tableau: the team built dashboards on employee demographics, job levels and workforce distribution.","Power BI: worked on the recruitment analytics dashboard covering hiring trends, recruitment sources, offer acceptance rate and average time to hire."],
 role:"Group 6 team project. My parts: the SQL queries, the Excel analysis and the Power BI recruitment dashboard. The Tableau dashboard was built by the team.",
 findings:["Excel dashboard: 987 employee exits, 83.99% voluntary and 18.84% regrettable.","Engineering had the largest share of exits (35.46%).","Top exit reasons: better compensation (31.70%) and career growth / promotion (23.97%).","The 5–10 year tenure band had the largest share of exits (64.03%).","Tableau dashboard: 2,299 employees, 35.28% female; most employees are aged 25–34 (1,666).","Power BI dashboard: 626 hires from about 11K applicants, 87.55% offer acceptance and a 5.88% overall hiring rate."],sql:true},
{id:"sales",title:"Sales Performance Analysis Dashboard",sub:"Sales, profit, categories, regions and top products",short:"An interactive Power BI dashboard with four KPIs, monthly trends and slicers, built after exploring the data with Excel and SQL.",tags:["Excel","SQL","Power BI"],
 imgs:[["sales","Power BI · Sales Performance Dashboard"]],
 objective:"Analyse sales data to understand business performance: sales trends, category-wise performance, regional sales and top-performing products.",
 dataset:["Sales data with category, region, customer segment, product, sales, profit, quantity and order ID fields, as used in the dashboard slicers and KPIs.","The dashboard KPIs show 1M total sales, 205K total profit, 356 total quantity and 44 orders (values rounded as displayed)."],
 tools:["Excel","SQL","Power BI"],
 method:["Used Excel and SQL to explore sales trends, category-wise performance, regional sales and top-performing products.","Built a Power BI dashboard with four KPIs: Total Sales, Total Profit, Total Quantity and Order ID.","Created visuals for monthly sales trend, sales by category, sales by region, top 5 products and profit by category.","Added interactive slicers for category, region, customer segment and product."],
 role:"Individual project: I did the analysis in Excel and SQL and developed the Power BI dashboard.",
 findings:["Electronics led sales (0.92M) and profit (0.13M); furniture followed with 0.29M sales and 0.05M profit.","South (0.39M) and North (0.37M) were the strongest regions; West was lowest (0.24M).","Top products by sales: Laptop (0.41M), Monitor (0.20M) and Desk (0.16M).","January was the highest sales month (0.20M) and May the lowest (0.06M)."]}];
PR.forEach((p,i)=>p.label="Project 0"+(i+1));
const items=p=>p.imgs.map(x=>({src:IMG[x[0]],cap:x[1]}));
$("#ptrack").innerHTML=PR.map((p,i)=>`<article class="slide" role="listitem" aria-label="${p.label}"><div class="pbanner" hidden></div><div><span class="num">${p.label}</span><h3>${esc(p.title)}</h3><span class="sub">${esc(p.sub)}</span><p style="margin-top:10px">${esc(p.short)}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></div><div class="deck ${p.imgs.length==1?"one":""}">${p.imgs.map((x,j)=>`<img class="layer" src="${IMG[x[0]]}" alt="${esc(x[1])}" data-k="${x[0]}" data-view="${i}" data-j="${j}" loading="lazy">`).join("")}</div><div class="srepo"><button class="btn" type="button" data-case="${i}">Case study</button><button class="btn" type="button" data-view="${i}">View dashboards</button><a class="btn solid" href="${CONFIG.repos[p.id]||CONFIG.github}" target="_blank" rel="noopener">View repository ↗</a></div></article>`).join("");
$("#pdots").style.cssText="display:flex;gap:8px;align-items:center";
$("#pdots").innerHTML=PR.map((p,i)=>`<button class="dot" type="button" aria-label="Go to ${p.label}" data-d="${i}"></button>`).join("");
const pt=$("#ptrack");function pidx(){return Math.round(pt.scrollLeft/Math.max(1,pt.clientWidth+26))}
function pupd(){const i=pidx();$$(".dot").forEach((d,k)=>d.setAttribute("aria-current",k==i));$("#pp").disabled=i<=0;$("#pn").disabled=i>=PR.length-1}
pt.addEventListener("scroll",pupd,{passive:true});pupd();
const go=i=>pt.scrollTo({left:i*(pt.clientWidth+26),behavior:rm?"auto":"smooth"});
$("#pp").onclick=()=>go(Math.max(0,pidx()-1));$("#pn").onclick=()=>go(Math.min(PR.length-1,pidx()+1));$("#pdots").onclick=e=>{const d=e.target.closest("[data-d]");if(d)go(+d.dataset.d)};
pt.addEventListener("keydown",e=>{if(e.key=="ArrowRight")go(Math.min(PR.length-1,pidx()+1));if(e.key=="ArrowLeft")go(Math.max(0,pidx()-1))});
$$(".deck").forEach(d=>{const L=[...d.querySelectorAll(".layer")];const set=(nx,ny)=>L.forEach((l,i)=>l.style.transform=`translateZ(${l.classList.contains("pick")?170:i*55}px) translate(${nx*(i+1)*22}px,${ny*(i+1)*13}px) rotateY(${nx*10}deg) rotateX(${-ny*7}deg)`);
 d.addEventListener("mousemove",e=>{if(rm)return;const r=d.getBoundingClientRect();set((e.clientX-r.left)/r.width*2-1,(e.clientY-r.top)/r.height*2-1)});d.addEventListener("mouseleave",()=>set(0,0))});
$("#ptrack").addEventListener("click",e=>{const c=e.target.closest("[data-case]");if(c)return openCase(+c.dataset.case);const v=e.target.closest("[data-view]");if(v)openLB(items(PR[+v.dataset.view]),+(v.dataset.j||0))});
const ALLDASH=[{src:IMG.xl,cap:"Excel · Employee Attrition Dashboard"},{src:IMG.pbi,cap:"Power BI · HR Talent Acquisition Dashboard"},{src:IMG.tab,cap:"Tableau · Workforce Overview"},{src:IMG.sales,cap:"Power BI · Sales Performance Dashboard"}];
$("#viewdash").onclick=()=>openLB(ALLDASH,0);

/* ----- certificates ----- */
const CERTS=[["Certification Program in Data Analytics","ExcelR Edtech Pvt. Ltd. · Skill India / NSDC","30 September 2026","Grade A"],["Data Analyst Capstone: Proxima HR Analytics","Proxima HR Analytics · Mahendra Singh","14 November 2026",""],["Exploratory Data Analysis","IT-ITeS SSC NASSCOM · FutureSkills Prime","09 September 2026",""],["Data Analytics Job Simulation","Deloitte · via Forage","15 November 2026",""],["GenAI Powered Data Analytics Job Simulation","TATA · via Forage","14 September 2026",""],["SQL and Relational Databases 101","IBM · Cognitive Class","15 August 2024",""]];
const ROT=[-2.2,1.6,-1.2,2,-1.8,1.2],KIND=["Training","Capstone","Course","Job simulation","Job simulation","Course"];
$("#board").innerHTML=CERTS.map((c,i)=>`<article class="pin" role="listitem" style="--r:${ROT[i]}deg"><span class="tape" aria-hidden="true"></span><div class="ccard"><span class="rib">${KIND[i]}</span><button class="ci" type="button" data-cert="${i}" aria-label="View certificate: ${esc(c[0])}"><img src="${CIMG[i]}" alt="Thumbnail of the certificate: ${esc(c[0])}" loading="lazy"></button><div class="cbody"><h3>${esc(c[0])}</h3><p>${c[1]}</p><p><em>Issued: ${c[2]}${c[3]?" · "+c[3]:""}</em></p><button class="btn solid" type="button" data-cert="${i}">View Certificate</button></div></div></article>`).join("");
$("#board").addEventListener("click",e=>{const b=e.target.closest("[data-cert]");if(b)openCert(+b.dataset.cert)});
function openCert(i){const c=CERTS[i];openLB([{src:CIMG[i],cap:`${c[0]} · ${c[1]} · ${c[2]}`}],0,`<button class="btn" type="button" data-pdf="${i}">Open original PDF ↗</button>`)}

/* ----- lightbox ----- */
const lb=$("#lb");let lbItems=[],lbI=0,lbBack=null,lbSY=0;
function lbRender(){const it=lbItems[lbI];$("#lbi").src=it.src;$("#lbi").alt=it.cap;$("#lbc").textContent=it.cap+(lbItems.length>1?` (${lbI+1} of ${lbItems.length})`:"");$("#lbim").classList.remove("zoom");$("#lbim").scrollTo(0,0);const m=lbItems.length>1;$("#lbp").style.visibility=$("#lbn").style.visibility=m?"visible":"hidden";$("#lbth").innerHTML=m?lbItems.map((x,k)=>`<button type="button" data-t="${k}" aria-label="Show image ${k+1}" aria-current="${k==lbI}"><img src="${x.src}" alt=""></button>`).join(""):""}
function openLB(it,i=0,actions=""){lbItems=it;lbI=i;lbBack=document.activeElement;lbSY=scrollY;$("#lbact").innerHTML=actions;lb.classList.add("open");lbRender();$("#lbx").focus({preventScroll:true})}
function closeLB(){if(!lb.classList.contains("open"))return;lb.classList.remove("open");if(lbBack)lbBack.focus({preventScroll:true});scrollTo({top:lbSY,behavior:"instant"})}
const lbStep=d=>{lbI=(lbI+d+lbItems.length)%lbItems.length;lbRender()};
$("#lbp").onclick=()=>lbStep(-1);$("#lbn").onclick=()=>lbStep(1);$("#lbx").onclick=closeLB;
$("#lbth").onclick=e=>{const t=e.target.closest("[data-t]");if(t){lbI=+t.dataset.t;lbRender()}};
$("#lbi").onclick=()=>$("#lbim").classList.toggle("zoom");
lb.addEventListener("mousedown",e=>{if(e.target==lb)closeLB()});
$("#lbact").onclick=e=>{const b=e.target.closest("[data-pdf]");if(b){const k=+b.dataset.pdf;openPdf(k)}};
let lsx=null;$("#lbim").addEventListener("pointerdown",e=>lsx=e.clientX);$("#lbim").addEventListener("pointerup",e=>{if(lsx!==null&&lbItems.length>1&&!$("#lbim").classList.contains("zoom")){const dx=e.clientX-lsx;if(Math.abs(dx)>50)lbStep(dx<0?1:-1)}lsx=null});
lb.addEventListener("wheel",e=>{if(!e.target.closest(".lbim")&&!e.target.closest(".lbth"))e.preventDefault()},{passive:false});

/* ----- case-study modal ----- */
const ov=$("#ov"),modal=$("#modal");let mFocus=null,mSY=0;
function openCase(i){const p=PR[i];mFocus=document.activeElement;mSY=scrollY;
 modal.innerHTML=`<div class="mh"><div><span class="kick">${p.label}</span><h3 id="mt">${esc(p.title)}</h3></div><button class="mx" type="button" id="mclose" aria-label="Close project details">✕</button></div><div class="mb">
 <h4>Project objective</h4><p>${esc(p.objective)}</p>
 <h4>Dataset overview</h4><ul>${p.dataset.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
 <h4>Tools and technologies</h4><div>${p.tools.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
 <h4>Analysis methodology</h4><ul>${p.method.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><div class="role"><b>My role:</b> ${esc(p.role)}</div>
 <h4>Dashboard screenshots</h4><div class="figs">${p.imgs.map((x,j)=>`<button type="button" data-fig="${j}"><img src="${IMG[x[0]]}" alt="${esc(x[1])}">${esc(x[1])}</button>`).join("")}</div>
 ${p.sql?`<h4>Sample SQL query</h4><pre><code>${esc(SQLSNIP)}</code></pre>`:""}
 <h4>Key findings</h4><ul>${p.findings.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
 <h4>Links and files</h4><div class="mlinks"><a class="btn solid" href="${CONFIG.repos[p.id]||CONFIG.github}" target="_blank" rel="noopener">View repository ↗</a>${p.sql?`<button class="btn" type="button" id="sqldl">Download SQL script (.sql)</button>`:""}</div></div>`;
 modal._i=i;ov.classList.add("open");$("#mclose").focus({preventScroll:true});if(p.sql)$("#sqldl").onclick=()=>downloadFile(SQLFILE,"Attrition_Retention_SQL.sql");scrollTo({top:mSY,behavior:"instant"})}
function closeModal(){if(!ov.classList.contains("open"))return;ov.classList.remove("open");modal.innerHTML="";if(mFocus)mFocus.focus({preventScroll:true});scrollTo({top:mSY,behavior:"instant"})}
modal.addEventListener("click",e=>{if(e.target.closest("#mclose"))return closeModal();const f=e.target.closest("[data-fig]");if(f)openLB(items(PR[modal._i]),+f.dataset.fig)});
ov.addEventListener("mousedown",e=>{if(e.target==ov)closeModal()});
ov.addEventListener("wheel",e=>{if(!e.target.closest(".mb"))e.preventDefault()},{passive:false});
document.addEventListener("keydown",e=>{
 if(lb.classList.contains("open")){if(e.key=="Escape"){closeLB();e.stopPropagation();return}if(e.key=="ArrowRight"&&lbItems.length>1)lbStep(1);if(e.key=="ArrowLeft"&&lbItems.length>1)lbStep(-1);if(e.key=="Tab"){const f=[...lb.querySelectorAll("button")].filter(x=>x.offsetParent!==null);if(f.length){const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement==a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement==z){e.preventDefault();a.focus()}}}return}
 if(!ov.classList.contains("open"))return;if(e.key=="Escape"){closeModal();return}
 if(e.key=="Tab"){const f=[...modal.querySelectorAll("button,a[href]")].filter(x=>x.offsetParent!==null);if(!f.length)return;const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement==a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement==z){e.preventDefault();a.focus()}}});

/* ----- connect + hire form ----- */
$("#links").innerHTML=`<a class="lk" href="${CONFIG.linkedin}" target="_blank" rel="noopener"><i>in</i><div><b>LinkedIn</b><span>hari-sravan-bandaru</span></div></a><a class="lk" href="${CONFIG.github}" target="_blank" rel="noopener"><i>Gh</i><div><b>GitHub</b><span>BandaruHarisravan</span></div></a><a class="lk" href="mailto:${CONFIG.email}"><i>@</i><div><b>Email</b><span>${CONFIG.email}</span></div></a><a class="lk" href="#" id="dlres"><i>↓</i><div><b>Download resume</b><span>PDF</span></div></a>`;
$("#dlres").onclick=e=>{e.preventDefault();downloadFile(RESUME,"Bandaru_Hari_Sravan_Resume.pdf")};
async function sendToInbox(fields,subject){if(!CONFIG.formEndpoint)return false;try{const r=await fetch(CONFIG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...fields,_subject:subject,_template:"table",_captcha:"false"})});if(!r.ok)return false;const j=await r.json().catch(()=>({}));return j.success!=="false"&&j.success!==false}catch(e){return false}}
$("#form").addEventListener("submit",async e=>{e.preventDefault();const f=e.target,st=$("#fstat");const d=Object.fromEntries(new FormData(f));if(d.website)return;
 const miss=["name","company","email","role","message"].filter(k=>!String(d[k]||"").trim());if(miss.length){st.textContent="Please fill in: "+miss.join(", ")+".";f.querySelector(`[name=${miss[0]}]`).focus();return}
 if(!/^\S+@\S+\.\S+$/.test(d.email)){st.textContent="Please enter a valid email address.";f.email.focus();return}
 if(await sendToInbox({name:d.name,company:d.company,email:d.email,phone:d.phone||"",role:d.role,location:d.location||"",message:d.message},"Hiring request: "+d.role+" at "+d.company)){st.textContent="Thank you! Your hiring request has been sent to Hari. He will reply by email.";f.reset();return}
 const body=`Hello Hari Sravan,\n\nName: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nPhone: ${d.phone||"-"}\nRole offered: ${d.role}\nLocation / work mode: ${d.location||"-"}\n\nMessage:\n${d.message}\n`;
 const a=document.createElement("a");a.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("Hiring request: "+d.role+" at "+d.company)}&body=${encodeURIComponent(body)}`;document.body.append(a);a.click();a.remove();
 st.textContent="I could not send it directly from here, so your email app should open with the message ready to send. If nothing opens, please email "+CONFIG.email+" directly."});


function setWho(w){const rec=w=="rec";$("#form").hidden=!rec;$("#form2").hidden=rec;$("#tabrec").setAttribute("aria-selected",rec);$("#tabfr").setAttribute("aria-selected",!rec)}
$("#tabrec").onclick=()=>setWho("rec");$("#tabfr").onclick=()=>setWho("fr");
$("#form2").addEventListener("submit",async e=>{e.preventDefault();const f=e.target,st=$("#fstat2"),d=Object.fromEntries(new FormData(f));if(d.website)return;
 const miss=["name","contact","message"].filter(k=>!String(d[k]||"").trim());if(miss.length){st.textContent="Please fill in: "+miss.join(", ")+".";f.querySelector(`[name=${miss[0]}]`).focus();return}
 const em=/^\S+@\S+\.\S+$/.test(d.contact)?d.contact:"";if(await sendToInbox({name:d.name,reach_me_at:d.contact,about:d.topic,message:d.message,...(em?{email:em}:{})},"Hello from "+d.name+": "+d.topic)){st.textContent="Thank you! Your message has been sent to Hari.";f.reset();return}
 const body=`Hi Hari,\n\nName: ${d.name}\nReach me at: ${d.contact}\nAbout: ${d.topic}\n\nMessage:\n${d.message}\n`;
 const a=document.createElement("a");a.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("Hello from "+d.name+": "+d.topic)}&body=${encodeURIComponent(body)}`;document.body.append(a);a.click();a.remove();
 st.textContent="I could not send it directly from here, so your email app should open with the message ready to send. If nothing opens, please email "+CONFIG.email+" directly."});
/* ----- page chrome ----- */
const T=["Excel · SQL · Power BI · Tableau","Dashboards that tell a story","Turning data into insights"];let ti=0,tc=0,td=false;
(function ty(){const el=$("#typed"),w=T[ti];if(rm){el.textContent=T[0];return}tc+=td?-1:1;el.textContent=w.slice(0,tc);let t=td?30:65;if(!td&&tc==w.length){td=true;t=1500}else if(td&&tc==0){td=false;ti=(ti+1)%T.length;t=300}setTimeout(ty,t)})();
const links=$$("#nav li a"),secs=links.map(a=>$(a.getAttribute("href")));
function onScroll(){$("#nav").classList.toggle("solid",scrollY>40);$("#prog").style.width=(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+"%";let idx=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<=innerHeight*.35)idx=i});links.forEach((a,i)=>a.classList.toggle("on",i==idx))}
addEventListener("scroll",onScroll,{passive:true});onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});$$(".rv").forEach(x=>io.observe(x));
function carousel(root){const tr=root.querySelector(".track");let ok=false,raf=0,last=0,pos=0,dir=1;const L=root.querySelector(".arr.l"),Rr=root.querySelector(".arr.r");
 function stop(){cancelAnimationFrame(raf);raf=0;root.classList.remove("auto")}function interact(){ok=false;stop()}
 L.onclick=()=>{interact();tr.scrollBy({left:-tr.clientWidth*.8,behavior:rm?"auto":"smooth"})};Rr.onclick=()=>{interact();tr.scrollBy({left:tr.clientWidth*.8,behavior:rm?"auto":"smooth"})};
 function tick(t){if(!ok){stop();return}const dt=Math.min(50,t-last)/1000;last=t;const max=tr.scrollWidth-tr.clientWidth;pos+=dir*28*dt;if(pos>=max){pos=max;dir=-1}else if(pos<=0){pos=0;dir=1}tr.scrollLeft=pos;raf=requestAnimationFrame(tick)}
 root.addEventListener("mouseenter",()=>{if(rm||!hov)return;ok=true;pos=tr.scrollLeft;last=performance.now();root.classList.add("auto");if(!raf)raf=requestAnimationFrame(tick)});root.addEventListener("mouseleave",()=>{ok=false;stop()});
 ["pointerdown","wheel","touchstart","focusin","keydown"].forEach(ev=>root.addEventListener(ev,interact,{passive:true}));
 const upd=()=>{const m=tr.scrollWidth-tr.clientWidth;L.disabled=tr.scrollLeft<=2;Rr.disabled=tr.scrollLeft>=m-2};tr.addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);upd()}


/* ----- full-HD background: frame-by-frame, driven by scrolling (moves while you scroll, stops when you stop) ----- */
const FRAMES=Array.from({length:121},(_,i)=>`assets/frames/frame-${String(i+1).padStart(3,"0")}.webp`);
(function(){const cv=$("#bgv"),g=cv.getContext("2d");cv.width=1920;cv.height=1080;cv.style.backgroundImage=`url(${FRAMES[0]})`;cv.style.backgroundSize="cover";
 const N=FRAMES.length,cache=new Map(),pend=new Set();let endY=0,rangeY=1,target=0,cur=0,hid=false,drawn="",need=true;
 function lay(){const W=innerWidth,H=innerHeight,vw=H*16/9,sx=W>=900?.72:.62;cv.style.height=H+"px";cv.style.width=vw+"px";cv.style.left=(sx*W-vw*.5)+"px";const s=$("#story");endY=s.offsetTop+s.offsetHeight;rangeY=Math.max(1,s.offsetTop+s.offsetHeight*.3)}
 lay();addEventListener("resize",lay);addEventListener("load",lay);
 function bmp(i){i=Math.max(0,Math.min(N-1,i));if(cache.has(i))return cache.get(i);if(!pend.has(i)){pend.add(i);const im=new Image();im.onload=()=>createImageBitmap(im).then(b=>{cache.set(i,b);pend.delete(i);need=true}).catch(()=>pend.delete(i));im.onerror=()=>pend.delete(i);im.src=FRAMES[i]}return null}
 function nearest(i){for(let d=0;d<N;d++){if(cache.has(i-d))return cache.get(i-d);if(cache.has(i+d))return cache.get(i+d)}return null}
 function evict(c){for(const [k,b] of cache){if(Math.abs(k-c)>18){if(b.close)b.close();cache.delete(k)}}}
 function upd(){target=Math.max(0,Math.min(1,scrollY/rangeY));hid=scrollY>endY+20;const fade=Math.max(0,Math.min(1,(endY-scrollY-innerHeight*.1)/(innerHeight*.6)));cv.style.opacity=(innerWidth<900?.6:1)*fade;cv.style.visibility=hid?"hidden":"visible"}
 let lt=performance.now();function loop(now){const dt=Math.min(.1,Math.max(.001,(now-lt)/1000));lt=now;if(!hid){cur=rm?target:cur+(target-cur)*(1-Math.exp(-dt*9));if(Math.abs(target-cur)<.0004)cur=target;const f=cur*(N-1),i=Math.floor(f),t=f-i;for(let k=-3;k<=10;k++)bmp(i+k);
   const key=f.toFixed(3);if(key!==drawn||need){const a=cache.get(i)||nearest(i),b=cache.get(Math.min(N-1,i+1));if(a){g.globalAlpha=1;g.drawImage(a,0,0,1920,1080);if(b&&t>.01&&cache.get(i)){g.globalAlpha=t;g.drawImage(b,0,0,1920,1080)}g.globalAlpha=1;drawn=key;need=false}}evict(i)}
  requestAnimationFrame(loop)}
 addEventListener("scroll",upd,{passive:true});upd();requestAnimationFrame(loop)})();
if(!rm&&hov){const g=$("#glow");addEventListener("mousemove",e=>{g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"})}
