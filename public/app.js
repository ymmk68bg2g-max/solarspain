(() => {
  'use strict';
  const serviceIds = ['solar', 'solar-battery', 'battery'];
  const paths = {
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    arrowUp: '<path d="M6 18 18 6M6 6h12v12"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
    shield: '<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6Z"/><path d="m8 12 3 3 5-6"/>',
    sliders: '<path d="M4 7h7m4 0h5M4 17h3m4 0h9"/><circle cx="13" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    leaf: '<path d="M20 3c-9-1-15 2-15 9a7 7 0 0 0 7 7c7 0 9-7 8-16Z"/><path d="M4 21 16 9"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    menu: '<path d="M4 7h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    home: '<path d="m3 11 9-8 9 8M5 9v12h14V9M9 21v-7h6v7"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>'
  };
  const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.sun}</svg>`;
  const mark = () => `<svg class="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="8" stroke="currentColor" stroke-width="2"/><path d="M20 2v5m0 26v5M2 20h5m26 0h5M7.3 7.3l3.6 3.6m18.2 18.2 3.6 3.6M7.3 32.7l3.6-3.6m18.2-18.2 3.6-3.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
  const brand = (footer = false) => `<a class="brand${footer ? ' brand-footer' : ''}" href="#top" aria-label="SOLARSPAIN">${mark()}<span>SOLAR<span class="brand-light">SPAIN</span></span></a>`;
  const arrowButton = (text, attrs = '', cls = 'button-lime') => `<button class="button ${cls}" ${attrs}><span>${text}</span><span class="button-icon">${icon('arrow')}</span></button>`;
  const inert = (text, cls = '') => `<span class="inactive ${cls}" aria-disabled="true">${text}</span>`;
  let lang = /^\/(en|ru|es)(?:\/|$)/.exec(location.pathname)?.[1] || 'es';
  let heroPostcode = '';
  let mobileOpen = false;
  let menuTrigger = null;

  function render() {
    const t = window.CONTENT[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').content = t.meta.description;
    const languages = (where) => `<nav class="language-switch ${where || ''}" aria-label="${t.ui.languageNav}">${['es','en','ru'].map(l => `<a href="/${l}" data-language="${l}" ${l===lang?'aria-current="page"':''}>${l.toUpperCase()}</a>`).join('')}</nav>`;
    document.getElementById('app').innerHTML = `
      <a class="skip-link" href="#main">${t.ui.skipToContent}</a>
      <header class="header" id="header"><div class="container header-inner">
        ${brand()}
        <nav class="desktop-nav" aria-label="${t.ui.mainNav}">
          <a href="#solutions">${t.nav.solutions}</a><a href="#process">${t.nav.process}</a><a href="#zones">${t.nav.zones}</a>${inert(t.nav.business)}
        </nav>
        <div class="header-actions">${languages('header-languages')}${arrowButton(t.ui.cta,'data-request data-open-form','button-white header-cta')}<button class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="${t.ui.menuOpen}">${icon('menu')}</button></div>
      </div></header>
      <div class="mobile-menu" id="mobile-menu" inert hidden><div class="container"><nav aria-label="${t.ui.mainNav}"><a href="#solutions">${t.nav.solutions}</a><a href="#process">${t.nav.process}</a><a href="#zones">${t.nav.zones}</a>${inert(t.nav.business)}</nav>${arrowButton(t.ui.cta,'data-request data-open-form')}</div></div>
      <main id="main">
        <section class="hero" id="top">
          <div class="hero-glow" aria-hidden="true"></div>
          <div class="container hero-grid">
            <div class="hero-copy">
              <div class="hero-badge">
                <span class="status-dot" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" focusable="false">
                    <circle cx="12" cy="12" r="7" fill="currentColor" fill-opacity=".04"/>
                    <circle class="status-dot-wave" cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                </span>
                ${t.hero.badge}
              </div>
              <h1>${t.hero.title}</h1>
              <p class="hero-description">${t.hero.description}</p>
              <form class="postcode-form" novalidate>
                <div class="postcode-field"><label for="hero-postcode">${t.hero.postcodeLabel}</label><div>${icon('pin')}<input id="hero-postcode" name="postcode" inputmode="numeric" autocomplete="postal-code" placeholder="${t.hero.postcodePlaceholder}" maxlength="5" aria-describedby="hero-postcode-error"></div></div>
                ${arrowButton(t.ui.cta,'type="submit"')}
              </form>
              <p class="postcode-error" id="hero-postcode-error" aria-live="polite"></p>
              <div class="hero-facts">${t.hero.facts.map(f=>`<span>${icon('check')}${f}</span>`).join('')}</div>
            </div>
            <div class="hero-visual">
              <div class="hero-image-wrap"><img class="hero-image" src="/assets/hero-villa.webp" alt="${t.hero.imageAlt}" width="1280" height="1024" fetchpriority="high"><span class="image-location">${icon('pin')}${lang === 'ru' ? 'Аликанте, Испания' : lang === 'en' ? 'Alicante, Spain' : 'Alicante, España'}</span><div class="hero-image-footer"><span>${t.hero.eyebrow}</span></div></div>
              <div class="hero-stamp">${icon('sun')}<span>${t.hero.imageTag}</span></div>
            </div>
          </div>
          <div class="container"><div class="benefits">${t.benefits.map((b,i)=>`<div class="benefit">${icon(['leaf','sliders','shield'][i])}<div><h3>${b.title}</h3><p>${b.description}</p></div></div>`).join('')}</div></div>
        </section>

        <section class="section solutions" id="solutions"><div class="container">
          <div class="section-heading"><div><span class="eyebrow">${t.solutions.eyebrow}</span><h2>${t.solutions.title}</h2></div><p>${t.solutions.description}</p></div>
          <div class="solutions-grid">${t.solutions.items.map((s,i)=>`<article class="solution-card"><div class="solution-image"><img src="/assets/${i===0?'villa-detail':i===1?'solar-home':'home-battery'}.webp" width="700" height="620" loading="lazy" alt="${s.imageAlt}"><span class="photo-tag">${s.tag}</span><span class="solution-number">0${i+1}</span></div><div class="solution-content"><h3>${s.title.replace(/\.$/,'')}</h3><p>${s.description}</p><button class="text-button" data-request data-open-form data-service="${serviceIds[i]}"><span>${t.ui.cta}</span>${icon('arrowUp')}</button></div></article>`).join('')}</div>
        </div></section>

        <section class="section process" id="process"><div class="container process-grid">
          <div class="process-visual"><img src="/assets/process-home.webp" width="850" height="1050" loading="lazy" alt="${t.process.imageAlt}"><div class="process-photo-note">${icon('sun')}<span>${t.process.imageTag}</span></div><div class="process-roundel" aria-hidden="true">${icon('arrowUp')}</div></div>
          <div class="process-copy"><span class="eyebrow">${t.process.eyebrow}</span><h2>${t.process.title.replace(/\.$/,'')}</h2><div class="process-steps">${t.process.steps.map((s,i)=>`<div class="process-step"><span class="step-number">0${i+1}</span><div><h3>${s.title.replace(/\.$/,'')}</h3><p>${s.description}</p></div></div>`).join('')}</div><div class="process-note">${icon('shield')}<p>${t.process.note}</p></div></div>
        </div></section>

        <section class="section geography" id="zones"><div class="container"><div class="geography-panel">
          <div class="geography-copy"><span class="eyebrow eyebrow-light">${t.geography.eyebrow}</span><h2>${t.geography.title.replace(/\.$/,'')}</h2><p>${t.geography.description}</p><div class="city-pills">${t.geography.cities.map(c=>`<span>${icon('pin')}${c}</span>`).join('')}</div><p class="geography-note">${t.geography.note}</p>${arrowButton(t.geography.cta,'data-request data-open-form')}</div>
          <div class="geography-image"><img src="/assets/alicante-coast.webp" width="1200" height="950" alt="${t.geography.imageAlt}" loading="lazy"><div class="geo-label">${icon('pin')}<span>${lang === 'ru' ? 'Провинция Аликанте' : lang === 'en' ? 'Province of Alicante' : 'Provincia de Alicante'}</span></div><div class="geo-image-caption"><span>ALICANTE</span><span>COSTA BLANCA</span></div></div>
        </div></div></section>

        <section class="section business"><div class="container business-grid"><div class="business-copy"><span class="eyebrow">${t.business.eyebrow}</span><h2>${t.business.title}</h2><p>${t.business.description}</p>${inert(`${t.business.link}${icon('arrowUp')}`,'business-link')}</div><div class="business-image"><img src="/assets/solar-business.webp" width="1000" height="700" alt="${t.business.imageAlt}" loading="lazy"></div></div></section>

        <section class="section faq" id="faq"><div class="container faq-grid"><div class="faq-intro"><span class="eyebrow">${t.faq.eyebrow}</span><h2>${t.faq.title}</h2><p>${t.faq.intro}</p><div class="faq-sun" aria-hidden="true">${mark()}</div></div><div class="faq-list">${t.faq.items.map((f,i)=>`<details class="faq-item"><summary><span class="faq-number">0${i+1}</span><span>${f.question}</span><span class="faq-plus">${icon('plus')}</span></summary><div class="faq-answer"><p>${f.answer}</p></div></details>`).join('')}</div></div></section>

        <section class="final-section"><div class="container"><div class="final-panel"><div class="final-art" aria-hidden="true">${mark()}</div><div class="final-copy"><span class="eyebrow eyebrow-light">${t.final.eyebrow}</span><h2>${t.final.title.replace(/\.$/,'')}</h2><p>${t.final.description}</p></div>${arrowButton(t.ui.cta,'data-request data-open-form')}</div></div></section>
      </main>
      <footer class="footer"><div class="container"><div class="footer-main"><div class="footer-brand">${brand(true)}<p>${t.footer.description}</p><span class="footer-geography">${icon('pin')}${t.footer.geography}</span></div><div class="footer-nav"><span class="footer-label">${t.footer.navTitle}</span><a href="#solutions">${t.nav.solutions}</a><a href="#process">${t.nav.process}</a><a href="#zones">${t.nav.zones}</a></div><div class="footer-nav"><span class="footer-label">SOLARSPAIN</span>${inert(t.nav.business)}${inert(t.footer.about)}${inert(t.footer.contact)}</div><div class="footer-language">${languages('footer-languages')}<p>${t.footer.tagline}</p></div></div><div class="footer-bottom"><span>${t.footer.copyright}</span><div>${inert(t.footer.legal)}${inert(t.footer.privacy)}${inert(t.footer.cookies)}</div><a href="#top" class="back-top" aria-label="${t.ui.backTop}">${icon('arrowUp')}</a></div></div></footer>`;
    bindEvents();
    document.getElementById('hero-postcode').value = heroPostcode;
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 24);
  }

  function setLanguage(next) {
    if (!window.CONTENT[next] || next === lang) return;
    const scroll = window.scrollY;
    const focusedLanguage = document.activeElement?.closest('[data-language]')?.dataset.language;
    heroPostcode = document.getElementById('hero-postcode')?.value || heroPostcode;
    closeMenu();
    lang = next;
    history.pushState({lang}, '', `/${lang}${location.hash}`);
    render();
    window.SolarForm?.setLanguage(lang);
    window.scrollTo({top: scroll, behavior: 'instant'});
    if (focusedLanguage) document.querySelector(`.header [data-language="${next}"]`)?.focus({preventScroll:true});
  }
  function closeMenu() {
    mobileOpen = false;
    const menu = document.getElementById('mobile-menu');
    const trigger = document.querySelector('.menu-toggle');
    if (menu) { menu.hidden = true; menu.inert = true; }
    if (trigger) {trigger.setAttribute('aria-expanded','false');trigger.setAttribute('aria-label',window.CONTENT[lang].ui.menuOpen);trigger.innerHTML=icon('menu');}
    document.body.classList.remove('menu-open');
  }
  function bindEvents() {
    document.querySelectorAll('[data-language]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();setLanguage(a.dataset.language);}));
    document.querySelectorAll('[data-request]').forEach(b=>b.addEventListener('click',()=>{
      heroPostcode = document.getElementById('hero-postcode').value;
      closeMenu();
      window.SolarForm.open({lang, postcode: /^\d{5}$/.test(heroPostcode) ? heroPostcode : undefined, service:b.dataset.service, trigger:b});
    }));
    const form=document.querySelector('.postcode-form');
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const input=document.getElementById('hero-postcode');
      const error=document.getElementById('hero-postcode-error');
      heroPostcode=input.value.trim();
      if(heroPostcode && !/^\d{5}$/.test(heroPostcode)) {input.setAttribute('aria-invalid','true');error.textContent=window.CONTENT[lang].ui.postcodeError;input.focus();return;}
      input.removeAttribute('aria-invalid');error.textContent='';
      window.SolarForm.open({lang,postcode:heroPostcode||undefined,trigger:form.querySelector('button')});
    });
    document.getElementById('hero-postcode').addEventListener('input',e=>{heroPostcode=e.target.value; e.target.removeAttribute('aria-invalid');document.getElementById('hero-postcode-error').textContent='';});
    document.querySelector('.menu-toggle').addEventListener('click',e=>{
      mobileOpen=!mobileOpen;
      const menu=document.getElementById('mobile-menu');menu.hidden=!mobileOpen;menu.inert=!mobileOpen;
      const trigger=e.currentTarget;menuTrigger=trigger;
      trigger.setAttribute('aria-expanded',String(mobileOpen));trigger.setAttribute('aria-label',window.CONTENT[lang].ui[mobileOpen?'menuClose':'menuOpen']);trigger.innerHTML=icon(mobileOpen?'close':'menu');
      document.body.classList.toggle('menu-open',mobileOpen);
    });
    document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{closeMenu();}));
    document.querySelectorAll('.faq-item').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.faq-item').forEach(other=>{if(other!==d)other.open=false;});}));
  }
  window.addEventListener('scroll',()=>document.getElementById('header')?.classList.toggle('scrolled',window.scrollY>24),{passive:true});
  window.addEventListener('popstate',()=>{closeMenu();const next=/^\/(en|ru|es)(?:\/|$)/.exec(location.pathname)?.[1]||'es';lang=next;render();window.SolarForm?.setLanguage(lang);});
  document.addEventListener('solarspain:language',e=>setLanguage(e.detail.lang));
  document.addEventListener('keydown',e=>{
    if(!mobileOpen)return;
    if(e.key==='Escape'){closeMenu();menuTrigger?.focus();}
    if(e.key==='Tab'){
      const focusable=[...document.querySelectorAll('.header a,.header button,.mobile-menu a,.mobile-menu button')].filter(el=>el.getClientRects().length);
      const first=focusable[0],last=focusable.at(-1);
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  render();
})();
