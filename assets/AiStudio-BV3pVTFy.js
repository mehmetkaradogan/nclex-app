import{i as e,n as t,o as n,r,t as i}from"./cn-DhjY6Zld.js";import{n as a,t as o}from"./trash-CcCCjoye.js";import{b as s,ct as c,lt as l,q as u,x as d}from"./index-BBjKpV8y.js";var f={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]};f.node;var p=t(f),m=n(e(),1),h=[{id:`soru-analiz`,title:`Soru Analizi`,purpose:`Yanlış yaptığın ya da emin olmadığın bir NCLEX sorusunu, QBank'in doğru cevabı ve rationale'ı ile birlikte yapay zekâya adım adım açıklat. Soru kökünün ne istediğini, doğru cevabın mantığını ve senin seçiminin neden yanlış olduğunu basit İngilizce ve Türkçe özetle öğrenirsin.`,fields:[{key:`soru`,label:`Soru metni (vaka + soru kökü)`,placeholder:`A client with heart failure is receiving furosemide... Which finding requires immediate follow-up?`,multiline:!0},{key:`secenekler`,label:`Seçenekler`,placeholder:`A) Potassium 3.1 mEq/L  B) Weight loss of 1 kg  C) Urine output 60 mL/hr  D) Blood pressure 118/76`,multiline:!0},{key:`isaretledigim`,label:`İşaretlediğim cevap`,placeholder:`B`},{key:`qbank-cevap`,label:`QBank'in doğru cevabı`,placeholder:`A`},{key:`qbank-rationale`,label:`QBank rationale metni`,placeholder:`QBank'ten kopyaladığın rationale metnini buraya yapıştır...`,multiline:!0}],template:`You are an experienced NCLEX-RN tutor who coaches internationally educated nurses. The student is a nurse from Turkey with English level A2-B1. The student knows clinical nursing well but is new to the US system, delegation rules and the NCLEX question style.

Here is the question the student answered:

QUESTION:
{{soru}}

OPTIONS:
{{secenekler}}

STUDENT'S ANSWER: {{isaretledigim}}

QUESTION BANK'S CORRECT ANSWER: {{qbank-cevap}}

QUESTION BANK RATIONALE:
{{qbank-rationale}}

Please do the following, in this exact order:

1. KEYWORDS: List the key words in the question stem (for example: first, priority, immediate follow-up, further teaching, except) and explain in one sentence what the question is really asking.
2. CORRECT ANSWER: Use the question bank's correct answer given above (do not pick a different one yourself). Explain why it is correct in 3-5 short sentences, based on the question bank rationale. Name the prioritization framework used (Maslow, ABC, acute vs chronic, safety, nursing process, expected vs unexpected).
3. STUDENT'S ANSWER: Explain why the student's answer is wrong or less important. Be kind but direct.
4. OTHER OPTIONS: Explain each remaining wrong option in one sentence.
5. RULE: Write one short rule the student can remember next time (maximum 20 words).
6. TURKISH SUMMARY: Write a 3-4 sentence summary in Turkish.

Constraints:
- Use simple English at B1 level. Short sentences. No idioms.
- Explain any medical term that is not basic (for example: "hypokalemia = low potassium").
- Do not invent facts. If the question is ambiguous, say so.
- Use headings and bullet points.
- If you are not sure, write "I am not sure". If your explanation conflicts with the question bank's answer or rationale, say so clearly.`},{id:`rationale-basit`,title:`Rationale Sadeleştirici`,purpose:`UWorld veya Archer'ın uzun ve teknik rationale metnini B1 seviyesinde sadeleştir. Ana fikri, klinik mantığı ve sınavda işine yarayacak tek kuralı kısa sürede çıkarırsın; nöbet ertesi yorgun günlerde de okunabilir hale gelir.`,fields:[{key:`rationale`,label:`Rationale metni`,placeholder:`QBank'ten kopyaladığın rationale metnini buraya yapıştır...`,multiline:!0}],template:`You are an NCLEX-RN tutor who rewrites difficult explanations for nurses whose English level is A2-B1. The student is a Turkish nurse preparing for the NCLEX-RN. The student reads slowly in English, and long explanations are tiring.

Here is a rationale from a question bank:

RATIONALE:
{{rationale}}

Please rewrite it in the following format:

1. MAIN IDEA (1-2 sentences): What is the most important point?
2. SIMPLE EXPLANATION (5-8 short sentences): Explain the clinical reasoning step by step. Use simple English at B1 level. One idea per sentence.
3. KEY TERMS: List up to 6 medical terms from the text. For each term give a simple English definition and the Turkish equivalent. Format: term - simple meaning - Türkçe.
4. NCLEX RULE: One rule the student can use on other questions (maximum 20 words).
5. MEMORY TIP: One short mnemonic, comparison or picture that helps the student remember.
6. TURKISH SUMMARY: 3-4 sentences in Turkish that summarize everything.

Constraints:
- Do not add new medical information that is not in the rationale, unless it is needed to correct a clear error. If you add something, mark it with "(extra)".
- No idioms, no long sentences, no passive voice when possible.
- Keep the total answer under 350 words.
- If you are not sure, write "I am not sure". If you think the rationale conflicts with your knowledge, say so clearly; do not silently change it.`},{id:`ngn-simulasyon`,title:`NGN Vaka Simülasyonu`,purpose:`Seçtiğin konu ve formatta (bow-tie, matrix, highlight) gerçek sınava benzer bir NGN vakası ürettir. Önce kendin cevaplarsın, sonra yapay zekâ puanlar ve Klinik Muhakeme Modeli'nin hangi adımında hata yaptığını gösterir.`,fields:[{key:`konu`,label:`Konu`,placeholder:`Örn: Sepsis, DKA, preeklampsi, KOAH alevlenmesi`},{key:`format`,label:`Format (bow-tie / matrix / highlight)`,placeholder:`bow-tie`}],template:`You are an NCLEX-RN item writer who creates Next Generation NCLEX (NGN) case studies. The student is a Turkish nurse with English level A2-B1 who needs realistic practice.

Topic: {{konu}}
Item format: {{format}}

Create ONE practice item using the NCSBN Clinical Judgment Measurement Model.

Step 1 - CASE: Write a realistic client case in an electronic health record style. Include these tabs: Nurses' Notes (with times), Vital Signs (at least 2 time points), Laboratory Results (with reference ranges), and Orders if relevant. Use clear, simple English (B1 level), but keep the real clinical terms used on the NCLEX.

Step 2 - ITEM: Write the question in the requested format:
- bow-tie: 1 condition (choose from 4 options), 2 actions to take (choose from 5), 2 parameters to monitor (choose from 5).
- matrix: 5-6 rows, each row marked as "Indicated / Not indicated / Contraindicated" or "Effective / Ineffective".
- highlight: a nurses' note where the student must select the findings that require follow-up.

Step 3 - STOP. Do not give the answer. Write: "Send me your answers."

When I send my answers:
- Score each part with NGN partial credit rules (+/- or 0/1 scoring) and show my total score.
- Explain each correct answer in 1-2 simple sentences.
- Tell me which Clinical Judgment step I missed (recognize cues, analyze cues, prioritize hypotheses, generate solutions, take action, evaluate outcomes).
- End with a 3-sentence summary in Turkish.

Rules for the whole conversation:
- If you are not sure about a fact or a score, write "I am not sure".
- This is AI-made practice, not an official NCLEX item. If anything you wrote conflicts with a question bank (UWorld, Archer, Bootcamp) answer or rationale, say so clearly and tell the student to trust the question bank.`},{id:`oncelik-mantik`,title:`Öncelik Mantığı Koçu`,purpose:`Kendi yazdığın ya da sorudan aldığın bir senaryoda hangi hastayı önce göreceğini veya hangi işlemi önce yapacağını sorgulat. Yapay zekâ sana önce sorular sorar, sonra Maslow, ABC, akut-kronik ve stabil-unstabil çerçeveleriyle mantığı açıklar.`,fields:[{key:`senaryo`,label:`Senaryo`,placeholder:`The nurse receives report on four clients: 1) A client with COPD with SpO2 89%... 2) ...`,multiline:!0}],template:`You are an NCLEX-RN coach who specializes in prioritization and delegation. The student is a Turkish nurse (English level A2-B1). Nursing roles and scope of practice in Turkey are different from the US RN / LPN / UAP system, so US delegation and prioritization rules are new for the student.

Here is the scenario:

SCENARIO:
{{senaryo}}

Please coach the student using the Socratic method:

PART 1 - QUESTIONS FIRST: Ask the student 3 short guiding questions that help the student think (for example: "Which client has an airway problem?", "Which finding is expected for this disease?", "Which client is unstable?"). Then write: "Answer these questions, then read Part 2." Leave a visible separator line.

PART 2 - REASONING: Rank the clients or actions from first to last. For each one, give one sentence of reasoning and name the framework you used:
- Maslow (physiological before safety before psychosocial)
- ABC (airway, breathing, circulation; CAB in cardiac arrest)
- Acute vs chronic, unstable vs stable, actual vs potential
- Expected vs unexpected finding
- Nursing process (assess before implement)

PART 3 - DELEGATION: If relevant, say which tasks the RN must keep and which can be given to an LPN or UAP, and why.

PART 4 - COMMON TRAP: Describe the most common wrong choice and why students pick it.

PART 5 - TURKISH SUMMARY: 3-4 sentences in Turkish.

Constraints: simple English at B1 level, short sentences, no idioms, use numbered lists. If you are not sure, write "I am not sure". If your ranking conflicts with the question bank's answer or rationale, say so clearly.`},{id:`altin-not`,title:`Altın Not Üretici`,purpose:`Yanlış yaptığın bir sorudan, bir daha aynı hatayı yapmamanı sağlayacak tek cümlelik “altın not” çıkar. Not hem İngilizce hem Türkçe olur; uygulamadaki Altın Notlar listesine doğrudan kopyalayabilirsin.`,fields:[{key:`soru`,label:`Soru (kısa özet)`,placeholder:`Client on digoxin, HR 56, K 3.2. What should the nurse do first?`},{key:`dogru-cevap`,label:`Doğru cevap`,placeholder:`Hold the dose and notify the provider`},{key:`neden-yanlis`,label:`Neden yanlış yaptım?`,placeholder:`Ben önce potasyum replasmanı istemeyi seçtim, çünkü...`}],template:`You are an NCLEX-RN tutor who helps students turn their mistakes into short, powerful memory notes ("golden notes"). The student is a Turkish nurse with English level A2-B1.

QUESTION (summary): {{soru}}
CORRECT ANSWER: {{dogru-cevap}}
WHY THE STUDENT CHOSE WRONG (the student's own words, may be in Turkish): {{neden-yanlis}}

Please do the following:

1. ERROR TYPE: Classify the student's mistake as ONE of these: knowledge gap, misreading the question, choosing between two good options, ignoring a keyword, Turkish practice habit (different from US practice), or test anxiety. Explain in 1-2 sentences.

2. GOLDEN NOTE (English): Write ONE rule in maximum 20 words. It must be general enough to work for other questions, not only this one. Start with a verb or "If ... then ...".

3. GOLDEN NOTE (Turkish): Translate the same rule into natural Turkish.

4. TRIGGER WORDS: List 2-4 English words or phrases that should remind the student of this rule when they appear in a question.

5. MINI CHECK: Write one new short practice question (4 options) that tests the same rule. Put the answer and a one-sentence explanation at the very end, after a line of dashes.

6. TAGS: Suggest 2-3 short tags (for example: cardiac, pharmacology, delegation, priority).

Constraints:
- Simple English at B1 level. No idioms.
- Be encouraging: mistakes are learning data.
- Keep the whole answer under 250 words.
- If you are not sure, write "I am not sure". If the correct answer above conflicts with your knowledge or with the question bank's rationale, say so clearly.`}],g=r(),_=1.5,v=()=>new Date().toISOString().slice(0,10),y=`input w-full`;function b(){return(0,g.jsxs)(`div`,{className:`space-y-10`,children:[(0,g.jsxs)(`header`,{children:[(0,g.jsx)(`h1`,{className:`font-serif text-3xl leading-tight sm:text-5xl`,children:`Hata Defteri & AI`}),(0,g.jsx)(`p`,{className:`muted mt-1 text-sm`,children:`Yanlış yaptığın sorudan tek cümlelik kalıcı kural çıkar ve deftere yaz; takıldığın soruyu hazır prompt'la bir AI'a açıklat. Soru/doğru sayılarını Blok Kaydı'na gir.`})]}),(0,g.jsx)(C,{}),(0,g.jsx)(x,{})]})}function x(){let[e,t]=(0,m.useState)(h[0].id),[n,r]=(0,m.useState)({}),[i,a]=(0,m.useState)(!1),o=h.find(t=>t.id===e),s=n[e]??{},u=(0,m.useMemo)(()=>o.template.split(/(\{\{[\w-]+\}\})/g),[o]),d=u.map(e=>{let t=e.match(/^\{\{([\w-]+)\}\}$/);return t?s[t[1]]?.trim()?s[t[1]]:`[${t[1]}]`:e}).join(``);return(0,g.jsxs)(`section`,{children:[(0,g.jsx)(`h2`,{className:`mb-1 font-serif text-2xl`,children:`AI prompt kütüphanesi`}),(0,g.jsx)(`p`,{className:`muted mb-3 text-sm`,children:`AI yanılabilir: cevabı her zaman QBank rationale’ı ile karşılaştır.`}),(0,g.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-[280px_1fr]`,children:[(0,g.jsx)(`div`,{className:`space-y-2`,children:h.map(n=>(0,g.jsxs)(`button`,{onClick:()=>t(n.id),className:`relative block w-full rounded-2xl border border-[var(--line)] p-3 text-left`,children:[e===n.id&&(0,g.jsx)(c.span,{layoutId:`prompt-sel`,className:`absolute inset-0 rounded-2xl border-2 border-forest bg-forest/10`}),(0,g.jsx)(`span`,{className:`relative block font-serif text-lg`,children:n.title}),(0,g.jsx)(`span`,{className:`muted relative line-clamp-3 text-xs`,children:n.purpose})]},n.id))}),(0,g.jsxs)(`div`,{className:`card space-y-4 p-5`,children:[(0,g.jsx)(`p`,{className:`muted text-sm`,children:o.purpose}),o.fields.map(t=>(0,g.jsxs)(`label`,{className:`block space-y-1`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold`,children:t.label}),t.multiline?(0,g.jsx)(`textarea`,{rows:4,className:y,placeholder:t.placeholder,value:s[t.key]??``,onChange:i=>r({...n,[e]:{...s,[t.key]:i.target.value}})}):(0,g.jsx)(`input`,{className:y,placeholder:t.placeholder,value:s[t.key]??``,onChange:i=>r({...n,[e]:{...s,[t.key]:i.target.value}})})]},t.key)),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{className:`muted mb-1 text-xs font-semibold uppercase tracking-wide`,children:`Önizleme`}),(0,g.jsx)(`pre`,{className:`max-h-80 overflow-auto whitespace-pre-wrap rounded-xl bg-[var(--bg-2)] p-3 font-mono text-xs leading-relaxed`,children:u.map((e,t)=>{let n=e.match(/^\{\{([\w-]+)\}\}$/);return n?s[n[1]]?.trim()?(0,g.jsx)(`span`,{children:s[n[1]]},t):(0,g.jsxs)(`mark`,{className:`rounded bg-amber/30 px-0.5 text-ink`,children:[`[`,n[1],`]`]},t):(0,g.jsx)(`span`,{children:e},t)})})]}),(0,g.jsxs)(`div`,{className:`relative flex flex-wrap items-center gap-3`,children:[(0,g.jsxs)(`button`,{className:`btn btn-primary`,onClick:async()=>{try{await navigator.clipboard.writeText(d)}catch{}a(!0),setTimeout(()=>a(!1),1500)},children:[(0,g.jsx)(p,{size:16,strokeWidth:_}),` Kopyala`]}),(0,g.jsx)(`span`,{className:`muted text-xs`,children:`ChatGPT, Claude veya Gemini'ye yapıştır.`}),(0,g.jsx)(l,{children:i&&(0,g.jsx)(c.span,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0},className:`rounded-full bg-forest px-3 py-1 text-xs text-paper-50`,children:`Kopyalandı`})})]})]})]})]})}var S=[`Farmakoloji`,`Önceliklendirme`,`Delegasyon`,`Maternal`,`Pediatri`,`Psikiyatri`,`Lab`,`Kardiyak`,`Endokrin`,`Güvenlik`];function C(){let{state:e,dispatch:t}=d(),[n,r]=(0,m.useState)(``),[f,p]=(0,m.useState)([]),[h,b]=(0,m.useState)(``),[x,C]=(0,m.useState)(null),w=e=>{let t=e.split(`,`).map(e=>e.trim()).filter(Boolean);t.length&&p(e=>[...new Set([...e,...t])]),b(``)},T=e=>{(e.key===`Enter`||e.key===`,`)&&(e.preventDefault(),w(h))},E=()=>{n.trim()&&(t({type:`addNote`,note:{id:s(),date:v(),text:n.trim(),tags:[...new Set([...f,...h.split(`,`).map(e=>e.trim()).filter(Boolean)])]}}),r(``),p([]),b(``))},D=[...new Set(e.notes.flatMap(e=>e.tags))],O=x?e.notes.filter(e=>e.tags.includes(x)):e.notes;return(0,g.jsxs)(`section`,{className:`space-y-4`,children:[(0,g.jsx)(`h2`,{className:`font-serif text-2xl`,children:`Hata defteri (altın notlar)`}),(0,g.jsxs)(`div`,{className:`card space-y-3 p-4`,children:[(0,g.jsx)(`textarea`,{rows:3,className:y,placeholder:`Yanlış yaptığın sorudan çıkardığın kalıcı klinik kural…`,value:n,onChange:e=>r(e.target.value)}),(0,g.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[f.map(e=>(0,g.jsxs)(`span`,{className:`chip gap-1 border-forest/40 text-forest`,children:[e,(0,g.jsx)(`button`,{"aria-label":`${e} etiketini kaldır`,className:`-my-2 -mr-2 grid h-11 w-11 place-items-center`,onClick:()=>p(f.filter(t=>t!==e)),children:(0,g.jsx)(u,{size:12,strokeWidth:_})})]},e)),(0,g.jsx)(`input`,{className:i(y,`min-w-[160px] flex-1`),placeholder:`Etiket yaz (virgül veya Enter)`,value:h,onChange:e=>b(e.target.value),onKeyDown:T})]}),(0,g.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:S.filter(e=>!f.includes(e)).map(e=>(0,g.jsxs)(`button`,{className:`chip muted min-h-11 px-3 hover:border-sage`,onClick:()=>p([...f,e]),children:[`+ `,e]},e))}),(0,g.jsxs)(`button`,{className:`btn btn-primary`,onClick:E,disabled:!n.trim(),children:[(0,g.jsx)(a,{size:16,strokeWidth:_}),` Nota Ekle`]})]}),D.length>0&&(0,g.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,g.jsx)(`button`,{className:i(`chip min-h-11 px-3`,!x&&`border-forest bg-forest text-paper-50`),onClick:()=>C(null),children:`Tümü`}),D.map(e=>(0,g.jsx)(`button`,{className:i(`chip min-h-11 px-3`,x===e&&`border-forest bg-forest text-paper-50`),onClick:()=>C(x===e?null:e),children:e},e))]}),O.length===0?(0,g.jsx)(`p`,{className:`muted rounded-2xl border border-dashed border-[var(--line)] p-8 text-center font-serif text-lg`,children:`Defterin henüz boş. Bir sonraki yanlışından tek cümlelik bir kural çıkar, buraya yaz.`}):(0,g.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2`,children:(0,g.jsx)(l,{children:O.map(e=>(0,g.jsxs)(c.article,{layout:!0,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},className:`card flex flex-col gap-3 border-l-4 border-l-amber p-4`,children:[(0,g.jsxs)(`p`,{className:`font-serif text-xl leading-snug`,children:[`“`,e.text,`”`]}),(0,g.jsxs)(`div`,{className:`mt-auto flex flex-wrap items-center gap-2`,children:[e.tags.map(e=>(0,g.jsx)(`span`,{className:`chip`,children:e},e)),(0,g.jsx)(`span`,{className:`muted ml-auto font-mono text-xs`,children:e.date}),(0,g.jsx)(`button`,{"aria-label":`Notu sil`,className:`muted grid h-11 w-11 place-items-center hover:text-terracotta`,onClick:()=>t({type:`removeNote`,id:e.id}),children:(0,g.jsx)(o,{size:16,strokeWidth:_})})]})]},e.id))})})]})}export{b as default};