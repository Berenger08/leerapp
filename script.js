const CATEGORIES = [
  {
    id: 'nl-woorden',
    label: 'NL woorden',
    storageKey: 'leerapp_nlwoorden_v1',
    seedItems: [
      { id: 'nl1', front: 'eloquent', back: 'welbespraakt: iemand die zich vlot en overtuigend kan uitdrukken.', example: 'Ze hield een eloquente toespraak die iedereen wist te overtuigen.' },
      { id: 'nl2', front: 'chagrijnig', back: 'humeurig, snel geïrriteerd of ontevreden.', example: 'Hij werd chagrijnig omdat de trein weer vertraging had.' },
      { id: 'nl3', front: 'perplex', back: 'stomverbaasd, niet wetend wat te zeggen.', example: 'Ik stond perplex toen ik het nieuws hoorde.' },
      { id: 'nl4', front: 'pertinent', back: 'nadrukkelijk, absoluut — bijvoorbeeld in "pertinent onjuist" (volkomen onjuist).', example: 'Zijn bewering bleek pertinent onjuist te zijn.' },
      { id: 'nl5', front: 'nonchalant', back: 'achteloos, zorgeloos in houding of gedrag.', example: 'Ze haalde nonchalant haar schouders op alsof het haar niet interesseerde.' },
      { id: 'nl6', front: 'pragmatisch', back: 'praktisch ingesteld, gericht op wat werkt in plaats van op principes.', example: 'In plaats van te discussiëren koos hij voor een pragmatische oplossing.' },
      { id: 'nl7', front: 'authentiek', back: 'origineel, echt, niet nagemaakt.', example: 'Het restaurantje serveert authentieke Italiaanse gerechten.' },
      { id: 'nl8', front: 'ambivalent', back: 'tegenstrijdige gevoelens hebbend over iets.', example: 'Ik voel me ambivalent over de verhuizing — spannend, maar ook eng.' },
      { id: 'nl9', front: 'luguber', back: 'griezelig, angstaanjagend somber.', example: 'Het verlaten huis had een lugubere sfeer.' },
      { id: 'nl10', front: 'pedant', back: 'schoolmeesterachtig, overdreven belerend en zelfingenomen over eigen kennis.', example: 'Hij klonk nogal pedant toen hij iedereen verbeterde.' },
      { id: 'nl11', front: 'onverbloemd', back: 'zonder omhaal, ronduit, zonder iets te verzachten.', example: 'Ze gaf onverbloemd haar mening over het plan.' },
      { id: 'nl12', front: 'capricieus', back: 'grillig, wispelturig, onvoorspelbaar van humeur.', example: 'Het weer was deze week erg capricieus.' },
      { id: 'nl13', front: 'vermetel', back: 'overmoedig, gedurfd tot roekeloos aan toe.', example: 'Het was een vermetele poging om de berg zonder gids te beklimmen.' },
      { id: 'nl14', front: 'anticiperen', back: 'vooruitlopen op iets, van tevoren rekening houden met iets.', example: 'We anticiperen op drukte door extra personeel in te plannen.' },
      { id: 'nl15', front: 'redundant', back: 'overbodig, overtollig, meer dan nodig.', example: 'Die zin bevat een redundant woord, je kan het weglaten.' },
      { id: 'nl16', front: 'façade', back: 'voorgevel; figuurlijk: uiterlijke schijn die de werkelijkheid verbergt.', example: 'Zijn zelfverzekerdheid was maar een façade.' },
      { id: 'nl17', front: 'inherent', back: 'vanzelfsprekend verbonden met iets, er onlosmakelijk bij horend.', example: 'Risico is inherent aan ondernemen.' },
      { id: 'nl18', front: 'dubieus', back: 'twijfelachtig, verdacht, niet helemaal te vertrouwen.', example: 'Het verhaal klonk nogal dubieus.' },
      { id: 'nl19', front: 'notoir', back: 'berucht, bekend om iets negatiefs.', example: 'Hij staat notoir bekend om zijn te laat komen.' },
      { id: 'nl20', front: 'exorbitant', back: 'buitensporig hoog, overdreven, vaak gezegd van prijzen.', example: 'De huurprijzen in de stad zijn exorbitant.' },
      { id: 'nl21', front: 'futiel', back: 'onbeduidend, nietig, van weinig belang.', example: 'Ze maakten ruzie over iets futiels.' },
      { id: 'nl22', front: 'precair', back: 'hachelijk, onzeker en gevoelig, licht uit balans te brengen.', example: 'De vrede in de regio is precair.' },
      { id: 'nl23', front: 'verhullen', back: 'verbergen, aan het zicht onttrekken, vaak figuurlijk.', example: 'Hij probeerde zijn teleurstelling te verhullen met een glimlach.' },
      { id: 'nl24', front: 'sporadisch', back: 'heel af en toe voorkomend, zelden.', example: 'Hij komt nog maar sporadisch langs.' },
      { id: 'nl25', front: 'cynisch', back: 'spottend wantrouwend tegenover de goede bedoelingen van anderen.', example: 'Ze reageerde cynisch op het nieuws over de loonsverhoging.' },
      { id: 'nl26', front: 'bagatelliseren', back: 'iets kleiner of onbelangrijker voorstellen dan het is.', example: 'Hij bagatelliseerde de schade aan de auto.' },
      { id: 'nl27', front: 'paradoxaal', back: 'schijnbaar tegenstrijdig, maar toch waar.', example: 'Paradoxaal genoeg werd hij rustiger naarmate de druk toenam.' },
      { id: 'nl28', front: 'rancuneus', back: 'haatdragend, wraakzuchtig van aard.', example: 'Ze bleef jarenlang rancuneus over die ene opmerking.' },
      { id: 'nl29', front: 'exponentieel', back: 'steeds sneller toenemend, in versnellend tempo groeiend.', example: 'Het aantal gebruikers groeide exponentieel.' },
      { id: 'nl30', front: 'subtiel', back: 'fijn, verfijnd, niet opvallend maar toch merkbaar.', example: 'Er zat een subtiele hint van citroen in de saus.' },
      { id: 'nl31', front: 'arbitrair', back: 'willekeurig, niet op logische gronden gebaseerd.', example: 'De grens tussen de twee categorieën lijkt nogal arbitrair.' },
      { id: 'nl32', front: 'gedreven', back: 'vol overgave en motivatie ergens naar strevend.', example: 'Ze werkte gedreven aan haar eigen bedrijf.' },
      { id: 'nl33', front: 'onverstoorbaar', back: 'kalm blijvend, niet uit balans te brengen door drukte of kritiek.', example: 'Hij bleef onverstoorbaar terwijl iedereen om hem heen in paniek raakte.' },
      { id: 'nl34', front: 'vluchtig', back: 'kortstondig, snel voorbijgaand, oppervlakkig.', example: 'Ze wierp een vluchtige blik op de klok.' },
      { id: 'nl35', front: 'weerbarstig', back: 'lastig te temmen of te beheersen, koppig verzet biedend.', example: 'Zijn weerbarstige haar wilde niet blijven zitten.' },
      { id: 'nl36', front: 'cryptisch', back: 'moeilijk te doorgronden, met een verborgen of onduidelijke betekenis.', example: 'Hij stuurde een cryptisch bericht dat niemand begreep.' },
      { id: 'nl37', front: 'desolaat', back: 'troosteloos, verlaten en somber.', example: 'Na de storm zag het dorp er desolaat uit.' },
      { id: 'nl38', front: 'omfloerst', back: 'gedempt, verzacht, alsof er een sluier overheen ligt.', example: 'Haar stem klonk omfloerst van verdriet.' },
    ],
  },
  {
    id: 'nl-gezegdes',
    label: 'NL gezegdes',
    storageKey: 'leerapp_nlgezegdes_v1',
    seedItems: [
      { id: 'gez1', front: 'de kat uit de boom kijken', back: 'afwachten wat er gebeurt voordat je zelf iets onderneemt.', example: 'Hij bleef de kat uit de boom kijken voordat hij zijn mening gaf.' },
      { id: 'gez2', front: 'met de deur in huis vallen', back: 'meteen ter zake komen, zonder omhaal.', example: 'Ze viel met de deur in huis en vroeg meteen om opslag.' },
      { id: 'gez3', front: 'een steek onder water geven', back: 'een verholen, subtiele kritische opmerking maken.', example: 'Met die grap gaf hij hem een steek onder water.' },
      { id: 'gez4', front: 'iets in de wind slaan', back: 'een waarschuwing of advies negeren.', example: 'Hij sloeg alle adviezen in de wind en deed het toch op zijn eigen manier.' },
      { id: 'gez5', front: 'de handen ineenslaan', back: 'gaan samenwerken.', example: 'De twee bedrijven sloegen de handen ineen voor het nieuwe project.' },
      { id: 'gez6', front: 'boter bij de vis doen', back: 'meteen betalen, geen uitstel geven.', example: 'Bij deze deal willen we boter bij de vis: contant afrekenen.' },
      { id: 'gez7', front: 'een appeltje met iemand te schillen hebben', back: 'nog een geschil of onenigheid met iemand moeten uitpraten.', example: 'Ik heb nog een appeltje met jou te schillen over gisteren.' },
      { id: 'gez8', front: 'de spijker op zijn kop slaan', back: 'precies zeggen waar het om gaat, het exact goed benoemen.', example: 'Met die opmerking sloeg ze de spijker op zijn kop.' },
      { id: 'gez9', front: 'iets door de vingers zien', back: 'een fout of overtreding bewust negeren, niet ingrijpen.', example: 'De leraar zag de kleine overtreding door de vingers.' },
      { id: 'gez10', front: 'de kat de bel aanbinden', back: 'als eerste een moeilijk of gevoelig onderwerp durven aansnijden.', example: 'Niemand durfde het te zeggen, tot zij de kat de bel aanbond.' },
      { id: 'gez11', front: 'van een mug een olifant maken', back: 'een klein probleem enorm overdrijven.', example: 'Maak er nou geen olifant van een mug, het is maar een kleine vlek.' },
      { id: 'gez12', front: 'de put dempen als het kalf verdronken is', back: 'pas maatregelen nemen nadat het ongeluk al gebeurd is.', example: 'Extra hekken plaatsen na het ongeluk is de put dempen als het kalf verdronken is.' },
      { id: 'gez13', front: 'iemand een hak zetten', back: 'iemand opzettelijk dwarszitten of benadelen.', example: 'Hij probeerde zijn collega een hak te zetten door het project te vertragen.' },
      { id: 'gez14', front: 'op eieren lopen', back: 'heel voorzichtig zijn, bijvoorbeeld in een gevoelige situatie.', example: 'Na de ruzie liepen we allemaal op eieren.' },
      { id: 'gez15', front: 'de kool en de geit sparen', back: 'proberen iedereen tevreden te houden door geen duidelijke keuze te maken.', example: 'Zijn compromis probeerde de kool en de geit te sparen.' },
      { id: 'gez16', front: 'een doekje voor het bloeden', back: 'een klein, symbolisch gebaar dat de echte schade niet werkelijk goedmaakt.', example: 'De korting was maar een doekje voor het bloeden na alle problemen.' },
      { id: 'gez17', front: 'de draad kwijtraken', back: 'de aandacht of het overzicht verliezen tijdens iets.', example: 'Halverwege het verhaal raakte hij de draad kwijt.' },
      { id: 'gez18', front: 'iets achter de ellebogen hebben', back: 'listig of sluw zijn, niet helemaal eerlijk.', example: 'Pas op met hem, hij heeft wel wat achter de ellebogen.' },
      { id: 'gez19', front: 'de plank misslaan', back: 'het helemaal fout hebben, een verkeerde inschatting maken.', example: 'Met die grap sloeg hij de plank flink mis.' },
      { id: 'gez20', front: 'iemand het vuur na aan de schenen leggen', back: 'iemand onder druk zetten om verantwoording af te leggen.', example: 'De journalist legde de minister het vuur na aan de schenen.' },
      { id: 'gez21', front: 'de druppel die de emmer doet overlopen', back: 'de laatste kleine gebeurtenis die maakt dat een opgebouwde ergernis eindelijk uitbarst.', example: 'Die ene opmerking was de druppel die de emmer deed overlopen.' },
      { id: 'gez22', front: 'zijn hand niet omdraaien voor iets', back: 'iets moeiteloos, zonder aarzelen doen.', example: 'Hij draait zijn hand niet om voor zo\'n klein klusje.' },
      { id: 'gez23', front: 'achter het net vissen', back: 'net te laat zijn en daardoor iets mislopen.', example: 'Doordat hij twijfelde, viste hij achter het net en was het kaartje al weg.' },
      { id: 'gez24', front: 'iets met de mantel der liefde bedekken', back: 'een fout bewust vergoelijken of niet ter sprake brengen uit clementie.', example: 'We bedekken deze blunder maar met de mantel der liefde.' },
      { id: 'gez25', front: 'de kat in de zak kopen', back: 'iets kopen of aangaan zonder het vooraf goed te controleren, met een onaangename verrassing tot gevolg.', example: 'Door niet te laten keuren, kocht hij de kat in de zak.' },
    ],
  },
];

const STEP_ORDER = ['new', 'day', 'week', 'month', 'done'];
const STEP_INTERVAL_DAYS = { day: 1, week: 7, month: 30 };
const STEP_LABELS = { new: 'nieuw', day: 'dag', week: 'week', month: 'maand', done: 'geleerd' };

let activeCategory = null;
let state = null;

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(dateStr, n) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

function loadState(cat) {
  const raw = localStorage.getItem(cat.storageKey);
  const saved = raw ? JSON.parse(raw) : null;
  const customItems = (saved && saved.customItems) || [];
  const deletedSeedIds = (saved && saved.deletedSeedIds) || [];

  const definitions = [
    ...cat.seedItems.filter(seed => !deletedSeedIds.includes(seed.id)),
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

function saveState() {
  localStorage.setItem(activeCategory.storageKey, JSON.stringify(state));
}

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

  saveState();
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

  saveState();
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
  saveState();
  document.getElementById('hoofdwoorden-lijst').appendChild(createCard(picked));
  return true;
}

function handleNogEenWoord() {
  addNewHoofdwoord();
}

function addCustomWord(front, back, example) {
  const id = 'custom-' + todayStr() + '-' + Math.random().toString(36).slice(2, 8);
  const newItem = { id, front, back, example: example || '' };
  state.customItems.push(newItem);
  state.items[id] = { ...newItem, step: 'new', everShown: false, nextDue: null };
  saveState();
  renderStats();
  renderBeheer();
}

function deleteWord(id) {
  delete state.items[id];
  state.customItems = state.customItems.filter(it => it.id !== id);
  if (activeCategory.seedItems.some(s => s.id === id) && !state.deletedSeedIds.includes(id)) {
    state.deletedSeedIds.push(id);
  }
  state.mainWordIds = state.mainWordIds.filter(mid => mid !== id);
  saveState();
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
    meta.textContent = STEP_LABELS[item.step];
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
    hoofdLijst.textContent = "Geen nieuwe woorden meer beschikbaar — voeg er toe via 'Alle woorden beheren'.";
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

function selectCategory(cat) {
  activeCategory = cat;
  state = loadState(cat);
  document.getElementById('app-titel').textContent = `Dagelijkse Leerapp — ${cat.label}`;
  document.getElementById('home').classList.add('hidden');
  document.getElementById('app-view').classList.remove('hidden');
  document.getElementById('beheer').classList.add('hidden');
  ensureDailyState();
  render();
}

function showHome() {
  document.getElementById('app-view').classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
  document.getElementById('app-titel').textContent = 'Dagelijkse Leerapp';
}

function renderHome() {
  const lijst = document.getElementById('categorie-lijst');
  lijst.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'categorie-btn';
    btn.textContent = cat.label;
    btn.onclick = () => selectCategory(cat);
    lijst.appendChild(btn);
  });
}

document.getElementById('nog-een-woord-btn').addEventListener('click', handleNogEenWoord);
document.getElementById('terug-btn').addEventListener('click', showHome);

document.getElementById('beheer-toggle-btn').addEventListener('click', () => {
  const beheer = document.getElementById('beheer');
  beheer.classList.toggle('hidden');
  if (!beheer.classList.contains('hidden')) renderBeheer();
});

document.getElementById('woord-toevoegen-btn').addEventListener('click', () => {
  const front = document.getElementById('nieuw-woord').value.trim();
  const back = document.getElementById('nieuw-betekenis').value.trim();
  const example = document.getElementById('nieuw-voorbeeld').value.trim();

  if (!front || !back) {
    showToast('Vul in ieder geval een woord en betekenis in.');
    return;
  }

  addCustomWord(front, back, example);
  document.getElementById('nieuw-woord').value = '';
  document.getElementById('nieuw-betekenis').value = '';
  document.getElementById('nieuw-voorbeeld').value = '';
  showToast(`"${front}" toegevoegd!`);
});

renderHome();
