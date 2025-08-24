/*
 * HydraRoute Import Bookmarklet
 *
 * Использование:
 * 1) Откройте страницу HydraRoute с правилами.
 * 2) Добавьте закладку в браузере, в URL вставьте содержимое ниже (одной строкой).
 * 3) Кликните закладку — и все группы из hydraroute-groups.json загрузятся автоматически.
 */

javascript:(async()=>{try{
  const url="https://raw.githubusercontent.com/afroll/hydraroute-dns-rules/main/hydraroute-groups.json"; // RAW-ссылка на JSON
  const r=await fetch(url,{cache:"no-store"});
  if(!r.ok) return alert("Ошибка загрузки JSON: "+r.status);
  const d=await r.json();
  if(!d.groups||!Array.isArray(d.groups)) return alert("Некорректный JSON");

  const addField=()=>{const btn=[...document.querySelectorAll("button,a")]
    .find(el=>el.textContent.includes("+ Добавить поле")); if(btn) btn.click(); return !!btn;};
  const wait=ms=>new Promise(r=>setTimeout(r,ms));

  // Убедимся, что есть хотя бы одно поле
  if(document.querySelectorAll("textarea").length===0){addField(); await wait(200);}
  while(document.querySelectorAll("textarea").length<d.groups.length){if(!addField()) break; await wait(100);}
  await wait(300);

  const areas=[...document.querySelectorAll("textarea")];
  const nameInputs=[...document.querySelectorAll('input[type="text"]')];
  const descInputs=[...document.querySelectorAll('input[placeholder*="Описание"],textarea[placeholder*="Описание"]')];

  d.groups.forEach((g,i)=>{if(!areas[i])return;
    areas[i].value=(g.domains||"").trim();
    if(nameInputs[i]) nameInputs[i].value=g.name||`Rule ${i+1}`;
    if(descInputs[i]) descInputs[i].value=g.description||"";
  });

  if(confirm("Группы загружены. Нажать «Сохранить»?")){
    const saveBtn=[...document.querySelectorAll("button")].find(el=>/сохранить/i.test(el.textContent));
    saveBtn?.click();
  }
}catch(e){alert("Ошибка: "+e.message);console.error(e);}})();
