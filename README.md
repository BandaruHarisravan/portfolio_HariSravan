# Bandaru Hari Sravan – Data Analyst Portfolio

## Folder structure
```
portfolio-site/
├── index.html                  <- the page (open this file)
├── css/style.css               <- all colours, layout, dark and light themes
├── js/main.js                  <- all interactions, text content, links (CONFIG at the top)
└── assets/
    ├── frames/                 <- 121 HD frames (frame-001.webp ... frame-121.webp) for the scroll animation
    ├── video/hari-intro-original.mp4   <- your original Kling video (kept for reference, not used by the page)
    ├── images/
    │   ├── dashboards/         <- Excel, Tableau and Power BI dashboard screenshots
    │   └── id/                 <- the 3 ID-card photos (btech.jpg, inter.jpg, ssc.jpg)
    ├── certificates/
    │   ├── images/             <- certificate pictures shown on the page
    │   └── pdf/                <- original certificate PDFs
    ├── resume/Bandaru_Hari_Sravan_Resume.pdf
    └── files/Attrition_Retention_SQL.sql
```

## Open it on your computer
Double-click `index.html`. Keep all folders next to it, the page loads its pictures from them.

## Put it online (free)
1. Go to netlify.com and sign up.
2. Drag the whole `portfolio-site` folder onto the "Deploy" area.
3. You get a live link in about a minute.

## Make the contact forms reach your Gmail
Both forms (Recruiter and Friend) send to `bandaruharisravan@gmail.com` through the free FormSubmit service.
1. Put the site online first (the forms do not send from a local file).
2. Send one test message from the live site.
3. FormSubmit emails you an activation message. Open it (check Spam) and click "Activate".
4. From then on every message arrives in your inbox.
If sending fails, the form opens the visitor's email app instead.

## Things you can change
- Repository links: `js/main.js`, top line `CONFIG` -> `repos:{hr:"",sales:""}`
- Your story text: `js/main.js`, constant `WHY`
- Colours: `css/style.css`, the `:root` blocks (dark) and `:root[data-theme="light"]` (light)
