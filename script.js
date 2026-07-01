const STORAGE_KEY = 'leerapp_state_v3';

const SEED_ITEMS = [
  { id: 'nl1', category: 'NL woord', front: 'eloquent', back: 'welbespraakt: iemand die zich vlot en overtuigend kan uitdrukken.', example: 'Ze hield een eloquente toespraak die iedereen wist te overtuigen.' },
  { id: 'nl2', category: 'NL woord', front: 'chagrijnig', back: 'humeurig, snel geïrriteerd of ontevreden.', example: 'Hij werd chagrijnig omdat de trein weer vertraging had.' },
  { id: 'nl3', category: 'NL woord', front: 'perplex', back: 'stomverbaasd, niet wetend wat te zeggen.', example: 'Ik stond perplex toen ik het nieuws hoorde.' },
  { id: 'nl4', category: 'NL woord', front: 'pertinent', back: 'nadrukkelijk, absoluut — bijvoorbeeld in "pertinent onjuist" (volkomen onjuist).', example: 'Zijn bewering bleek pertinent onjuist te zijn.' },
  { id: 'nl5', category: 'NL woord', front: 'nonchalant', back: 'achteloos, zorgeloos in houding of gedrag.', example: 'Ze haalde nonchalant haar schouders op alsof het haar niet interesseerde.' },
  { id: 'nl6', category: 'NL woord', front: 'pragmatisch', back: 'praktisch ingesteld, gericht op wat werkt in plaats van op principes.', example: 'In plaats van te discussiëren koos hij voor een pragmatische oplossing.' },
  { id: 'nl7', category: 'NL woord', front: 'authentiek', back: 'origineel, echt, niet nagemaakt.', example: 'Het restaurantje serveert authentieke Italiaanse gerechten.' },
  { id: 'nl8', category: 'NL woord', front: 'ambivalent', back: 'tegenstrijdige gevoelens hebbend over iets.', example: 'Ik voel me ambivalent over de verhuizing — spannend, maar ook eng.' },
  { id: 'nl9', category: 'NL woord', front: 'luguber', back: 'griezelig, angstaanjagend somber.', example: 'Het verlaten huis had een lugubere sfeer.' },
  { id: 'nl10', category: 'NL woord', front: 'pedant', back: 'schoolmeesterachtig, overdreven belerend en zelfingenomen over eigen kennis.', example: 'Hij klonk nogal pedant toen hij iedereen verbeterde.' },
  { id: 'nl11', category: 'NL woord', front: 'onverbloemd', back: 'zonder omhaal, ronduit, zonder iets te verzachten.', example: 'Ze gaf onverbloemd haar mening over het plan.' },
  { id: 'nl12', category: 'NL woord', front: 'capricieus', back: 'grillig, wispelturig, onvoorspelbaar van humeur.', example: 'Het weer was deze week erg capricieus.' },
  { id: 'nl13', category: 'NL woord', front: 'vermetel', back: 'overmoedig, gedurfd tot roekeloos aan toe.', example: 'Het was een vermetele poging om de berg zonder gids te beklimmen.' },
  { id: 'nl14', category: 'NL woord', front: 'anticiperen', back: 'vooruitlopen op iets, van tevoren rekening houden met iets.', example: 'We anticiperen op drukte door extra personeel in te plannen.' },
  { id: 'nl15', category: 'NL woord', front: 'redundant', back: 'overbodig, overtollig, meer dan nodig.', example: 'Die zin bevat een redundant woord, je kan het weglaten.' },
  { id: 'nl16', category: 'NL woord', front: 'façade', back: 'voorgevel; figuurlijk: uiterlijke schijn die de werkelijkheid verbergt.', example: 'Zijn zelfverzekerdheid was maar een façade.' },
  { id: 'nl17', category: 'NL woord', front: 'inherent', back: 'vanzelfsprekend verbonden met iets, er onlosmakelijk bij horend.', example: 'Risico is inherent aan ondernemen.' },
  { id: 'nl18', category: 'NL woord', front: 'dubieus', back: 'twijfelachtig, verdacht, niet helemaal te vertrouwen.', example: 'Het verhaal klonk nogal dubieus.' },
  { id: 'nl19', category: 'NL woord', front: 'notoir', back: 'berucht, bekend om iets negatiefs.', example: 'Hij staat notoir bekend om zijn te laat komen.' },
  { id: 'nl20', category: 'NL woord', front: 'exorbitant', back: 'buitensporig hoog, overdreven, vaak gezegd van prijzen.', example: 'De huurprijzen in de stad zijn exorbitant.' },
  { id: 'nl21', category: 'NL woord', front: 'futiel', back: 'onbeduidend, nietig, van weinig belang.', example: 'Ze maakten ruzie over iets futiels.' },
  { id: 'nl22', category: 'NL woord', front: 'precair', back: 'hachelijk, onzeker en gevoelig, licht uit balans te brengen.', example: 'De vrede in de regio is precair.' },
  { id: 'nl23', category: 'NL woord', front: 'verhullen', back: 'verbergen, aan het zicht onttrekken, vaak figuurlijk.', example: 'Hij probeerde zijn teleurstelling te verhullen met een glimlach.' },
  { id: 'nl24', category: 'NL woord', front: 'sporadisch', back: 'heel af en toe voorkomend, zelden.', example: 'Hij komt nog maar sporadisch langs.' },
  { id: 'nl25', category: 'NL woord', front: 'cynisch', back: 'spottend wantrouwend tegenover de goede bedoelingen van anderen.', example: 'Ze reageerde cynisch op het nieuws over de loonsverhoging.' },
  { id: 'nl26', category: 'NL woord', front: 'bagatelliseren', back: 'iets kleiner of onbelangrijker voorstellen dan het is.', example: 'Hij bagatelliseerde de schade aan de auto.' },
  { id: 'nl27', category: 'NL woord', front: 'paradoxaal', back: 'schijnbaar tegenstrijdig, maar toch waar.', example: 'Paradoxaal genoeg werd hij rustiger naarmate de druk toenam.' },
  { id: 'nl28', category: 'NL woord', front: 'rancuneus', back: 'haatdragend, wraakzuchtig van aard.', example: 'Ze bleef jarenlang rancuneus over die ene opmerking.' },
  { id: 'nl29', category: 'NL woord', front: 'exponentieel', back: 'steeds sneller toenemend, in versnellend tempo groeiend.', example: 'Het aantal gebruikers groeide exponentieel.' },
  { id: 'nl30', category: 'NL woord', front: 'subtiel', back: 'fijn, verfijnd, niet opvallend maar toch merkbaar.', example: 'Er zat een subtiele hint van citroen in de saus.' },
  { id: 'nl31', category: 'NL woord', front: 'arbitrair', back: 'willekeurig, niet op logische gronden gebaseerd.', example: 'De grens tussen de twee categorieën lijkt nogal arbitrair.' },
  { id: 'nl32', category: 'NL woord', front: 'gedreven', back: 'vol overgave en motivatie ergens naar strevend.', example: 'Ze werkte gedreven aan haar eigen bedrijf.' },
  { id: 'nl33', category: 'NL woord', front: 'onverstoorbaar', back: 'kalm blijvend, niet uit balans te brengen door drukte of kritiek.', example: 'Hij bleef onverstoorbaar terwijl iedereen om hem heen in paniek raakte.' },
  { id: 'nl34', category: 'NL woord', front: 'vluchtig', back: 'kortstondig, snel voorbijgaand, oppervlakkig.', example: 'Ze wierp een vluchtige blik op de klok.' },
  { id: 'nl35', category: 'NL woord', front: 'weerbarstig', back: 'lastig te temmen of te beheersen, koppig verzet biedend.', example: 'Zijn weerbarstige haar wilde niet blijven zitten.' },
  { id: 'nl36', category: 'NL woord', front: 'cryptisch', back: 'moeilijk te doorgronden, met een verborgen of onduidelijke betekenis.', example: 'Hij stuurde een cryptisch bericht dat niemand begreep.' },
  { id: 'nl37', category: 'NL woord', front: 'desolaat', back: 'troosteloos, verlaten en somber.', example: 'Na de storm zag het dorp er desolaat uit.' },
  { id: 'nl38', category: 'NL woord', front: 'omfloerst', back: 'gedempt, verzacht, alsof er een sluier overheen ligt.', example: 'Haar stem klonk omfloerst van verdriet.' },
];

const STEP_ORDER = ['new', 'day', 'week', 'month', 'done'];
const STEP_INTERVAL_DAYS = { day: 1, week: 7, month: 30 };

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(dateStr, n) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const saved = raw ? JSON.parse(raw) : null;
  const customItems = (saved && saved.customItems) || [];
  const deletedSeedIds = (saved && saved.deletedSeedIds) || [];

  const definitions = [
    ...SEED_ITEMS.filter(seed => !deletedSeedIds.includes(seed.id)),
    ...customItems,
  ];

  const items = {};
  definitions.forEach(def => {
    const savedItem = saved && saved.items[def.id];
    items[def.id] = {
      ...def,
      step: savedItem ? savedItem.step : 'new',
      everShown: savedItem ? savedItem.everShown : false,
      nextDue: savedItem ? savedItem.nextDue : null,
    };
  });

  if (saved) return { ...saved, items, customItems, deletedSeedIds };
  return {
    items, customItems, deletedSeedIds,
    lastComputedDate: null, mainWordIds: [], streak: 0, lastOpenDate: null,
  };
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

function pickUnseenItem() {
  const candidates = Object.values(state.items).filter(it => !it.everShown);
  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function ensureDailyState() {
  const today = todayStr();

  if (state.lastOpenDate !== today) {
    const yesterday = addDays(today, -1);
    state.streak = state.lastOpenDate === yesterday ? state.streak + 1 : 1;
    state.lastOpenDate = today;
  }

  if (state.lastComputedDate !== today) {
    state.lastComputedDate = today;
    state.mainWordIds = [];
    const picked = pickUnseenItem();
    if (picked) {
      picked.everShown = true;
      state.mainWordIds.push(picked.id);
    }
  }

  saveState(state);
}

function getReviewItems() {
  const today = todayStr();
  return Object.values(state.items).filter(it =>
    ['day', 'week', 'month'].includes(it.step) &&
    it.nextDue && it.nextDue <= today &&
    !state.mainWordIds.includes(it.id)
  );
}

function getMainItems() {
  return state.mainWordIds
    .map(id => state.items[id])
    .filter(item => item && item.step !== 'done');
}

function renderStats() {
  const items = Object.values(state.items);
  const geleerd = items.filter(i => i.step === 'done').length;
  const bezig = items.filter(i => ['day', 'week', 'month'].includes(i.step)).length;
  const nieuw = items.filter(i => i.step === 'new').length;
  document.getElementById('stats').textContent =
    `📚 ${geleerd} geleerd · ${bezig} bezig · ${nieuw} nog te ontdekken`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function updateItemState(id, action) {
  const item = state.items[id];
  if (!item) return;
  const today = todayStr();

  if (action === 'niet') {
    item.step = 'day';
    item.nextDue = addDays(today, STEP_INTERVAL_DAYS.day);
    item.everShown = true;
  } else if (action === 'herhaal') {
    const currentIndex = STEP_ORDER.indexOf(item.step);
    const nextStep = STEP_ORDER[Math.min(currentIndex + 1, STEP_ORDER.length - 1)];
    item.step = nextStep;
    if (nextStep === 'done') {
      item.nextDue = null;
      showToast(`🎉 Geleerd: "${item.front}"!`);
    } else {
      item.nextDue = addDays(today, STEP_INTERVAL_DAYS[nextStep]);
    }
    item.everShown = true;
  } else if (action === 'klaar') {
    item.step = 'done';
    item.nextDue = null;
    item.everShown = true;
    showToast(`🎉 Geleerd: "${item.front}"!`);
  }

  saveState(state);
  renderStats();
}

function addNewHoofdwoord() {
  const picked = pickUnseenItem();
  if (!picked) {
    showToast('Geen nieuwe woorden meer beschikbaar.');
    return false;
  }
  picked.everShown = true;
  state.mainWordIds.push(picked.id);
  saveState(state);
  document.getElementById('hoofdwoorden-lijst').appendChild(createCard(picked));
  return true;
}

function handleNogEenWoord() {
  addNewHoofdwoord();
}

const STEP_LABELS = { new: 'nieuw', day: 'dag', week: 'week', month: 'maand', done: 'geleerd' };

function addCustomWord(front, back, example, category) {
  const id = 'custom-' + todayStr() + '-' + Math.random().toString(36).slice(2, 8);
  const newItem = { id, category: category || 'NL woord', front, back, example: example || '' };
  state.customItems.push(newItem);
  state.items[id] = { ...newItem, step: 'new', everShown: false, nextDue: null };
  saveState(state);
  renderStats();
  renderBeheer();
}

function deleteWord(id) {
  delete state.items[id];
  state.customItems = state.customItems.filter(it => it.id !== id);
  if (SEED_ITEMS.some(s => s.id === id) && !state.deletedSeedIds.includes(id)) {
    state.deletedSeedIds.push(id);
  }
  state.mainWordIds = state.mainWordIds.filter(mid => mid !== id);
  saveState(state);
  renderStats();
  renderBeheer();
  render();
}

function renderBeheer() {
  const lijst = document.getElementById('woorden-lijst');
  lijst.innerHTML = '';
  const alleItems = Object.values(state.items).sort((a, b) => a.front.localeCompare(b.front));

  if (alleItems.length === 0) {
    lijst.textContent = 'Nog geen woorden.';
    return;
  }

  alleItems.forEach(item => {
    const rij = document.createElement('div');
    rij.className = 'woord-rij';

    const info = document.createElement('div');
    info.className = 'woord-info';

    const front = document.createElement('span');
    front.className = 'front';
    front.textContent = item.front;
    info.appendChild(front);

    const meta = document.createElement('span');
    meta.className = 'meta';
    meta.textContent = `${item.category} · ${STEP_LABELS[item.step]}`;
    info.appendChild(meta);

    rij.appendChild(info);

    const verwijderBtn = document.createElement('button');
    verwijderBtn.className = 'verwijder-btn';
    verwijderBtn.textContent = 'Verwijderen';
    verwijderBtn.onclick = () => {
      if (confirm(`Weet je zeker dat je "${item.front}" wil verwijderen?`)) {
        deleteWord(item.id);
      }
    };
    rij.appendChild(verwijderBtn);

    lijst.appendChild(rij);
  });
}

function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card';

  const cat = document.createElement('span');
  cat.className = 'category';
  cat.textContent = item.category;
  card.appendChild(cat);

  const front = document.createElement('div');
  front.className = 'front';
  front.textContent = item.front;
  card.appendChild(front);

  const back = document.createElement('div');
  back.className = 'back hidden';

  const definitie = document.createElement('p');
  definitie.textContent = item.back;
  back.appendChild(definitie);

  if (item.example) {
    const voorbeeld = document.createElement('p');
    voorbeeld.className = 'example';
    voorbeeld.textContent = `Bijvoorbeeld: "${item.example}"`;
    back.appendChild(voorbeeld);
  }

  card.appendChild(back);

  const revealBtn = document.createElement('button');
  revealBtn.className = 'reveal-btn';
  revealBtn.textContent = 'Toon betekenis';
  revealBtn.onclick = () => back.classList.toggle('hidden');
  card.appendChild(revealBtn);

  const actions = document.createElement('div');
  actions.className = 'actions';

  const btnNiet = document.createElement('button');
  btnNiet.textContent = 'Ken ik niet';

  const btnHerhaal = document.createElement('button');
  btnHerhaal.textContent = 'Nog even herhalen';

  const btnKlaar = document.createElement('button');
  btnKlaar.textContent = 'Ken ik, klaar';

  function confirmPress(pressedBtn, pressedClass, action) {
    [btnNiet, btnHerhaal, btnKlaar].forEach(btn => { btn.disabled = true; });
    pressedBtn.classList.add(pressedClass);
    updateItemState(item.id, action);

    if (action === 'klaar') {
      const wasMainWord = state.mainWordIds.includes(item.id);
      const listId = wasMainWord ? 'hoofdwoorden-lijst' : 'herhalingen-lijst';
      card.classList.add('fading');
      setTimeout(() => {
        card.remove();
        const lijst = document.getElementById(listId);
        if (lijst.children.length === 0) {
          lijst.textContent = wasMainWord
            ? 'Geen woorden meer voor vandaag.'
            : 'Geen herhalingen vandaag.';
        }
      }, 350);
    }
  }

  btnNiet.onclick = () => {
    back.classList.remove('hidden');
    confirmPress(btnNiet, 'pressed-niet', 'niet');
  };
  btnHerhaal.onclick = () => confirmPress(btnHerhaal, 'pressed-herhaal', 'herhaal');
  btnKlaar.onclick = () => confirmPress(btnKlaar, 'pressed-klaar', 'klaar');

  actions.append(btnNiet, btnHerhaal, btnKlaar);
  card.appendChild(actions);

  return card;
}

function render() {
  document.getElementById('streak').textContent = `🔥 ${state.streak} dag(en) op rij`;
  renderStats();

  const hoofdLijst = document.getElementById('hoofdwoorden-lijst');
  hoofdLijst.innerHTML = '';
  const mainItems = getMainItems();
  if (mainItems.length === 0) {
    hoofdLijst.textContent = 'Geen nieuwe woorden meer beschikbaar — voeg er toe in script.js.';
  } else {
    mainItems.forEach(item => hoofdLijst.appendChild(createCard(item)));
  }

  const herhaalLijst = document.getElementById('herhalingen-lijst');
  herhaalLijst.innerHTML = '';
  const reviewItems = getReviewItems();
  if (reviewItems.length === 0) {
    herhaalLijst.textContent = 'Geen herhalingen vandaag.';
  } else {
    reviewItems.forEach(item => herhaalLijst.appendChild(createCard(item)));
  }
}

document.getElementById('nog-een-woord-btn').addEventListener('click', handleNogEenWoord);

document.getElementById('beheer-toggle-btn').addEventListener('click', () => {
  const beheer = document.getElementById('beheer');
  beheer.classList.toggle('hidden');
  if (!beheer.classList.contains('hidden')) renderBeheer();
});

document.getElementById('woord-toevoegen-btn').addEventListener('click', () => {
  const front = document.getElementById('nieuw-woord').value.trim();
  const back = document.getElementById('nieuw-betekenis').value.trim();
  const example = document.getElementById('nieuw-voorbeeld').value.trim();
  const category = document.getElementById('nieuw-categorie').value.trim();

  if (!front || !back) {
    showToast('Vul in ieder geval een woord en betekenis in.');
    return;
  }

  addCustomWord(front, back, example, category);
  document.getElementById('nieuw-woord').value = '';
  document.getElementById('nieuw-betekenis').value = '';
  document.getElementById('nieuw-voorbeeld').value = '';
  document.getElementById('nieuw-categorie').value = '';
  showToast(`"${front}" toegevoegd!`);
});

ensureDailyState();
render();
