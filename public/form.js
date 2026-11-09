(() => {
  'use strict';

  const COPY = {
    es: {
      close: 'Cerrar formulario', eyebrow: 'Tu proyecto solar',
      titles: ['¿Dónde está tu proyecto?', 'Una solución a tu medida', '¿Cómo podemos contactarte?'],
      descriptions: ['Empecemos por tu código postal. Nos ayuda a situar tu proyecto.', 'Cuéntanos un poco sobre el inmueble y lo que necesitas.', 'Elige el canal que prefieras e indica tus datos de contacto.'],
      step: (n) => `Paso ${n} de 3`, next: 'Continuar', back: 'Atrás', review: 'Revisar solicitud',
      postcode: 'Código postal', postcodePlaceholder: 'Ej. 03001', postcodeError: 'Introduce un código postal de exactamente cinco cifras.',
      locationNote: 'La disponibilidad se confirma según tu zona, el tipo de proyecto y las empresas colaboradoras. El código postal no garantiza cobertura.',
      property: 'Tipo de inmueble', properties: {home: 'Vivienda', business: 'Empresa'},
      service: '¿Qué necesitas?', services: {solar: 'Placas solares', 'solar-battery': 'Placas solares y batería', battery: 'Añadir una batería'},
      backup: '¿Necesitas alimentación de respaldo?', optional: '(opcional)', backupOptions: {yes: 'Sí', no: 'No', unsure: 'No lo sé'},
      backupHint: 'El instalador revisará qué solución y equipos son adecuados para esta función.',
      name: 'Tu nombre', namePlaceholder: 'Nombre', nameError: 'Indica tu nombre.',
      channel: 'Canal de contacto', channels: {whatsapp: 'WhatsApp', call: 'Llamada', email: 'Email'},
      phone: 'Teléfono', phonePlaceholder: '+34 o cualquier prefijo internacional', phoneHint: 'Puedes utilizar un número de cualquier país.',
      phoneError: 'Introduce un teléfono válido, con entre 7 y 15 cifras.', email: 'Correo electrónico', emailPlaceholder: 'nombre@ejemplo.com', emailError: 'Introduce una dirección de correo válida.',
      sharingNote: 'La transmisión de tus datos a instaladores se acordará contigo por separado.',
      demo: 'Vista previa: los datos no se envían',
      reviewTitle: 'Tu solicitud, en resumen', reviewDescription: 'Comprueba los datos de esta vista previa.',
      reviewNote: 'Esta revisión es local. No se ha enviado ninguna solicitud ni compartido tus datos.',
      edit: 'Editar datos', finish: 'Cerrar revisión', notSpecified: 'Sin indicar', language: 'Idioma del formulario'
    },
    en: {
      close: 'Close request form', eyebrow: 'Your solar project',
      titles: ['Where is your project?', 'A solution for your property', 'How can we contact you?'],
      descriptions: ['Start with your postcode so we can locate your project.', 'Tell us a little about the property and what you need.', 'Choose your preferred channel and enter the relevant contact details.'],
      step: (n) => `Step ${n} of 3`, next: 'Continue', back: 'Back', review: 'Review request',
      postcode: 'Postcode', postcodePlaceholder: 'e.g. 03001', postcodeError: 'Enter a postcode containing exactly five digits.',
      locationNote: 'Availability is confirmed according to your area, project type and partner companies. A valid postcode does not guarantee coverage.',
      property: 'Property type', properties: {home: 'Home', business: 'Business'},
      service: 'What do you need?', services: {solar: 'Solar panels', 'solar-battery': 'Solar panels and battery', battery: 'Add a battery'},
      backup: 'Do you need backup power?', optional: '(optional)', backupOptions: {yes: 'Yes', no: 'No', unsure: 'Not sure'},
      backupHint: 'The installer will assess which solution and equipment can provide this function.',
      name: 'Your name', namePlaceholder: 'Name', nameError: 'Please enter your name.',
      channel: 'Preferred contact channel', channels: {whatsapp: 'WhatsApp', call: 'Phone call', email: 'Email'},
      phone: 'Phone number', phonePlaceholder: '+34 or another international code', phoneHint: 'You can use a phone number from any country.',
      phoneError: 'Enter a valid phone number containing 7 to 15 digits.', email: 'Email address', emailPlaceholder: 'name@example.com', emailError: 'Enter a valid email address.',
      sharingNote: 'Sharing your details with installers will be agreed with you separately.',
      demo: 'Preview: your details are not sent',
      reviewTitle: 'Your request at a glance', reviewDescription: 'Check the details in this preview.',
      reviewNote: 'This review stays on your device. No request has been sent and your details have not been shared.',
      edit: 'Edit details', finish: 'Close review', notSpecified: 'Not specified', language: 'Form language'
    },
    ru: {
      close: 'Закрыть форму заявки', eyebrow: 'Ваш солнечный проект',
      titles: ['Где находится ваш объект?', 'Решение для вашего объекта', 'Как с вами связаться?'],
      descriptions: ['Начнём с почтового индекса — он поможет определить расположение объекта.', 'Расскажите немного об объекте и о том, что вам нужно.', 'Выберите удобный способ связи и укажите соответствующий контакт.'],
      step: (n) => `Шаг ${n} из 3`, next: 'Продолжить', back: 'Назад', review: 'Проверить заявку',
      postcode: 'Почтовый индекс', postcodePlaceholder: 'Например, 03001', postcodeError: 'Введите почтовый индекс из пяти цифр.',
      locationNote: 'Доступность уточняется по региону, типу проекта и территории работы партнёров. Корректный индекс не подтверждает наличие подходящих компаний.',
      property: 'Тип объекта', properties: {home: 'Жилой дом', business: 'Бизнес'},
      service: 'Что вам нужно?', services: {solar: 'Солнечные панели', 'solar-battery': 'Панели и аккумулятор', battery: 'Добавить аккумулятор'},
      backup: 'Нужно ли резервное питание?', optional: '(необязательно)', backupOptions: {yes: 'Да', no: 'Нет', unsure: 'Не знаю'},
      backupHint: 'Установщик уточнит, какое решение и оборудование подойдут для этой задачи.',
      name: 'Ваше имя', namePlaceholder: 'Имя', nameError: 'Укажите ваше имя.',
      channel: 'Удобный способ связи', channels: {whatsapp: 'WhatsApp', call: 'Звонок', email: 'Email'},
      phone: 'Номер телефона', phonePlaceholder: '+34 или другой международный код', phoneHint: 'Можно указать номер любой страны.',
      phoneError: 'Введите корректный номер телефона: от 7 до 15 цифр.', email: 'Электронная почта', emailPlaceholder: 'name@example.com', emailError: 'Введите корректный адрес электронной почты.',
      sharingNote: 'Передача ваших контактов установщикам будет согласована с вами отдельно.',
      demo: 'Предпросмотр: данные не отправляются',
      reviewTitle: 'Обзор вашей заявки', reviewDescription: 'Проверьте данные в этом предпросмотре.',
      reviewNote: 'Этот обзор доступен только на вашем устройстве. Заявка не отправлена, ваши данные никому не переданы.',
      edit: 'Изменить данные', finish: 'Закрыть обзор', notSpecified: 'Не указано', language: 'Язык формы'
    }
  };

  const ICONS = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/></svg>'
  };

  const state = {lang: 'es', step: 1, postcode: '', property: 'home', service: 'solar', backup: '', name: '', channel: 'whatsapp', contact: '', review: false, errors: {}};
  let dialog;
  let opener;
  let openerIndex = -1;
  let openerWasInMenu = false;
  let scrollStyles;
  let closing = false;
  let sessionCounter = 0;
  let activeSession = 0;
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
  const text = () => COPY[state.lang];
  const openerSelector = 'button[data-open-form], button[data-request], .postcode-form button';

  function captureInputs() {
    if (!dialog?.open || state.review) return;
    dialog.querySelectorAll('input').forEach((input) => {
      if (input.type !== 'radio' || input.checked) state[input.name] = input.value;
    });
  }

  function ensureDialog() {
    if (dialog) return;
    dialog = document.createElement('dialog');
    dialog.className = 'solar-dialog';
    dialog.id = 'solar-request-dialog';
    dialog.setAttribute('aria-labelledby', 'sf-title');
    dialog.setAttribute('aria-describedby', 'sf-description');
    document.body.append(dialog);
    dialog.addEventListener('cancel', (event) => { event.preventDefault(); close(); });
    dialog.addEventListener('close', () => { if (!dialog.open) cleanup(); });
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close();
    });
  }

  function options(name, items, value, extraClass = '') {
    return `<div class="sf-options ${extraClass}">${Object.entries(items).map(([key, label]) => `<label class="sf-choice"><input id="sf-${name}-${key}" type="radio" name="${name}" value="${key}" ${value === key ? 'checked' : ''}><span>${esc(label)}</span></label>`).join('')}</div>`;
  }

  function error(key) {
    return state.errors[key] ? `<p class="sf-error" id="sf-${key}-error" role="alert">${esc(text()[state.errors[key]])}</p>` : '';
  }

  function stepOne(t) {
    return `<div class="sf-group"><label class="sf-label" for="sf-postcode">${t.postcode}</label><input class="sf-input sf-postcode" id="sf-postcode" name="postcode" type="text" required inputmode="numeric" autocomplete="postal-code" maxlength="5" pattern="[0-9]{5}" value="${esc(state.postcode)}" placeholder="${t.postcodePlaceholder}" ${state.errors.postcode ? 'aria-invalid="true" aria-describedby="sf-postcode-error"' : 'aria-describedby="sf-location-note"'}>${error('postcode')}</div><div class="sf-location-note" id="sf-location-note">${ICONS.pin}<span>${t.locationNote}</span></div>`;
  }

  function stepTwo(t) {
    return `<fieldset class="sf-group"><legend>${t.property}</legend>${options('property', t.properties, state.property)}</fieldset><fieldset class="sf-group"><legend>${t.service}</legend>${options('service', t.services, state.service, 'sf-stacked')}</fieldset><fieldset class="sf-group"><legend>${t.backup} <span class="sf-optional">${t.optional}</span></legend>${options('backup', t.backupOptions, state.backup, 'sf-three sf-backup')}<p class="sf-hint">${t.backupHint}</p></fieldset>`;
  }

  function stepThree(t) {
    const email = state.channel === 'email';
    return `<div class="sf-group"><label class="sf-label" for="sf-name">${t.name}</label><input class="sf-input" id="sf-name" name="name" type="text" required autocomplete="given-name" maxlength="80" value="${esc(state.name)}" placeholder="${t.namePlaceholder}" ${state.errors.name ? 'aria-invalid="true" aria-describedby="sf-name-error"' : ''}>${error('name')}</div><fieldset class="sf-group"><legend>${t.channel}</legend>${options('channel', t.channels, state.channel, 'sf-three')}</fieldset><div class="sf-group"><label class="sf-label" for="sf-contact">${email ? t.email : t.phone}</label><input class="sf-input" id="sf-contact" name="contact" required type="${email ? 'email' : 'tel'}" autocomplete="${email ? 'email' : 'tel'}" inputmode="${email ? 'email' : 'tel'}" maxlength="${email ? '254' : '40'}" value="${esc(state.contact)}" placeholder="${email ? t.emailPlaceholder : t.phonePlaceholder}" ${state.errors.contact ? 'aria-invalid="true" aria-describedby="sf-contact-error"' : (!email ? 'aria-describedby="sf-phone-hint"' : '')}>${error('contact')}${!email ? `<p class="sf-hint" id="sf-phone-hint">${t.phoneHint}</p>` : ''}</div><p class="sf-hint">${t.sharingNote}</p>`;
  }

  function review(t) {
    const rows = [[t.postcode, state.postcode], [t.property, t.properties[state.property]], [t.service, t.services[state.service]], [t.backup, t.backupOptions[state.backup] || t.notSpecified], [t.name, state.name.trim()], [t.channel, t.channels[state.channel]], [state.channel === 'email' ? t.email : t.phone, state.contact.trim()]];
    return `<dl class="sf-review">${rows.map(([label, value]) => `<div class="sf-review-row"><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl><div class="sf-review-note">${ICONS.info}<span>${t.reviewNote}</span></div>`;
  }

  function render(focusTarget) {
    const t = text();
    dialog.lang = state.lang;
    dialog.innerHTML = `<div class="sf-top"><div class="sf-brand">${ICONS.sun}<span>SOLARSPAIN</span></div><div class="sf-top-actions"><div class="sf-languages" role="group" aria-label="${t.language}">${['es', 'en', 'ru'].map((lang) => `<button type="button" class="sf-language" id="sf-lang-${lang}" data-sf-lang="${lang}" aria-pressed="${state.lang === lang}">${lang.toUpperCase()}</button>`).join('')}</div><button class="sf-close" type="button" aria-label="${t.close}" data-sf-close>${ICONS.close}</button></div></div><div class="sf-body"><p class="sf-eyebrow">${t.eyebrow}</p><h2 class="sf-title" id="sf-title" tabindex="-1">${state.review ? t.reviewTitle : t.titles[state.step - 1]}</h2><p class="sf-description" id="sf-description">${state.review ? t.reviewDescription : t.descriptions[state.step - 1]}</p>${state.review ? '' : `<div class="sf-progress" aria-hidden="true">${[1, 2, 3].map((n) => `<span class="${n <= state.step ? 'sf-complete' : ''}"></span>`).join('')}</div><p class="sf-step-label" aria-live="polite">${t.step(state.step)}</p>`}<form class="sf-form" novalidate>${state.review ? review(t) : [stepOne, stepTwo, stepThree][state.step - 1](t)}<div class="sf-actions">${state.review ? `<button type="button" class="sf-button sf-secondary" data-sf-edit>${t.edit}</button><button type="button" class="sf-button sf-primary" data-sf-close>${t.finish}${ICONS.arrow}</button>` : `${state.step > 1 ? `<button type="button" class="sf-button sf-secondary" data-sf-back>${t.back}</button>` : ''}<button type="submit" class="sf-button sf-primary">${state.step === 3 ? t.review : t.next}${ICONS.arrow}</button>`}</div></form><p class="sf-demo">${ICONS.eye}<span>${t.demo}</span></p></div>`;

    dialog.querySelectorAll('[data-sf-close]').forEach((button) => button.addEventListener('click', close));
    dialog.querySelector('[data-sf-back]')?.addEventListener('click', () => { captureInputs(); state.step -= 1; state.errors = {}; render('sf-title'); });
    dialog.querySelector('[data-sf-edit]')?.addEventListener('click', () => { state.review = false; state.step = 3; render('sf-title'); });
    dialog.querySelectorAll('[data-sf-lang]').forEach((button) => button.addEventListener('click', () => {
      setLanguage(button.dataset.sfLang);
      document.dispatchEvent(new CustomEvent('solarspain:language', {detail: {lang: button.dataset.sfLang}}));
    }));
    dialog.querySelector('.sf-form').addEventListener('submit', (event) => { event.preventDefault(); advance(); });
    dialog.querySelectorAll('input').forEach((input) => input.addEventListener('input', () => {
      const previousChannel = state.channel;
      state[input.name] = input.value;
      if (input.name === 'channel' && previousChannel !== input.value) {
        state.contact = '';
        delete state.errors.contact;
        render(`sf-channel-${input.value}`);
      }
    }));
    if (focusTarget) requestAnimationFrame(() => {
      const target = dialog.querySelector(`#${focusTarget}`);
      target?.focus({preventScroll: true});
      if (target?.matches('input[type="text"], input[type="tel"]')) target.setSelectionRange(target.value.length, target.value.length);
    });
  }

  function advance() {
    captureInputs();
    state.errors = {};
    if (state.step === 1 && !/^\d{5}$/.test(state.postcode)) state.errors.postcode = 'postcodeError';
    if (state.step === 3) {
      if (!state.name.trim()) state.errors.name = 'nameError';
      if (state.channel === 'email') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.contact.trim())) state.errors.contact = 'emailError';
      } else {
        const digits = state.contact.replace(/\D/g, '');
        if (!/^\+?[\d\s().-]+$/.test(state.contact.trim()) || digits.length < 7 || digits.length > 15) state.errors.contact = 'phoneError';
      }
    }
    if (Object.keys(state.errors).length) { render(`sf-${Object.keys(state.errors)[0]}`); return; }
    if (state.step === 3) state.review = true;
    else state.step += 1;
    render('sf-title');
    dialog.scrollTop = 0;
  }

  function setLanguage(lang) {
    if (!COPY[lang] || state.lang === lang) return;
    captureInputs();
    const focusedId = dialog?.contains(document.activeElement) ? document.activeElement.id : null;
    state.lang = lang;
    if (dialog?.open) render(focusedId || 'sf-title');
  }

  function open({lang, postcode, service, property, trigger} = {}) {
    ensureDialog();
    if (!dialog.open && activeSession) cleanup();
    if (COPY[lang]) state.lang = lang;
    if (typeof postcode === 'string') state.postcode = postcode;
    if (Object.hasOwn(COPY.es.services, service)) state.service = service;
    if (Object.hasOwn(COPY.es.properties, property)) state.property = property;
    if (dialog.open) { render('sf-title'); return; }
    state.step = 1;
    state.review = false;
    state.errors = {};
    opener = trigger instanceof HTMLElement ? trigger : document.activeElement;
    openerIndex = [...document.querySelectorAll(openerSelector)].indexOf(opener);
    openerWasInMenu = !!opener?.closest('.mobile-menu');
    closing = false;
    activeSession = ++sessionCounter;
    render();
    scrollStyles = {overflow: document.body.style.overflow, paddingRight: document.body.style.paddingRight};
    const scrollbarGap = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
    if (scrollbarGap) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight || '0') + scrollbarGap}px`;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    requestAnimationFrame(() => dialog.querySelector('#sf-postcode')?.focus({preventScroll: true}));
  }

  function close() {
    if (!dialog?.open || closing) return;
    closing = true;
    dialog.close();
    cleanup();
  }

  function cleanup() {
    if (!activeSession) return;
    const endedSession = activeSession;
    activeSession = 0;
    state.name = '';
    state.contact = '';
    state.channel = 'whatsapp';
    state.review = false;
    state.errors = {};
    dialog.innerHTML = '';
    if (scrollStyles) {
      document.body.style.overflow = scrollStyles.overflow;
      document.body.style.paddingRight = scrollStyles.paddingRight;
      scrollStyles = null;
    }
    const replacementOpener = openerIndex < 0 ? null : document.querySelectorAll(openerSelector)[openerIndex];
    const candidates = [openerWasInMenu ? document.querySelector('.menu-toggle') : null, opener, replacementOpener, ...document.querySelectorAll(openerSelector)];
    const target = candidates.find((element) => element?.isConnected && element.getClientRects().length && !element.closest('[hidden], [inert]'));
    requestAnimationFrame(() => {
      if (!activeSession && sessionCounter === endedSession) target?.focus({preventScroll: true});
    });
    opener = null;
    openerIndex = -1;
    openerWasInMenu = false;
    closing = false;
  }

  // Future integrations belong behind separate request and coverage adapters.
  // This preview deliberately has no submission handler or coverage lookup.
  // No form values are sent, logged, or written to browser storage.
  window.SolarForm = Object.freeze({open, setLanguage});
})();
