// ============================================================
// SNOWY PET SYSTEM 🐾
// Aaradhya's companion — earns tokens by solving questions,
// spends them caring for Snowy the white puppy.
// ============================================================

(function () {
  'use strict';

  // ── CATALOG ──────────────────────────────────────────────
  const CATALOG = {
    food: [
      { id: 'kibble',       name: 'Premium Kibble',    emoji: '🥣', cost: 10,  desc: 'Nutritious daily meal' },
      { id: 'salmon_treat', name: 'Salmon Treat',      emoji: '🐟', cost: 20,  desc: "Snowy's favourite!" },
      { id: 'milk_bone',    name: 'Milk Bone',         emoji: '🦴', cost: 15,  desc: 'Classic crunchy bone' },
      { id: 'cupcake',      name: 'Puppy Cupcake',     emoji: '🧁', cost: 35,  desc: 'A very special treat' },
      { id: 'royal_canin',  name: 'Royal Canin',       emoji: '👑', cost: 40,  desc: 'Premium breed food' },
      { id: 'apple_slice',  name: 'Apple Slices',      emoji: '🍎', cost: 12,  desc: 'Healthy fruity snack' },
      { id: 'cheese_bit',   name: 'Cheese Bits',       emoji: '🧀', cost: 18,  desc: 'Soft and yummy chunks' },
      { id: 'carrot',       name: 'Baby Carrots',      emoji: '🥕', cost: 8,   desc: 'Good for her teeth!' },
    ],
    clothing: [
      { id: 'pink_bow',     name: 'Pink Bow',          emoji: '🎀', cost: 25,  desc: 'A cute pink hairbow' },
      { id: 'raincoat',     name: 'Yellow Raincoat',   emoji: '🧥', cost: 45,  desc: 'Stay dry in style' },
      { id: 'sweater',      name: 'Cozy Sweater',      emoji: '🧶', cost: 40,  desc: 'Warm winter knit' },
      { id: 'sunglasses',   name: 'Cool Sunglasses',   emoji: '🕶️', cost: 30,  desc: 'Look fabulous!' },
      { id: 'birthday_hat', name: 'Birthday Hat',      emoji: '🎂', cost: 20,  desc: 'Party time!' },
      { id: 'bandana',      name: 'Flower Bandana',    emoji: '🌸', cost: 22,  desc: 'Boho chic vibes' },
      { id: 'tiara',        name: 'Sparkle Tiara',     emoji: '👸', cost: 55,  desc: 'For a princess pup' },
      { id: 'boots',        name: 'Mini Boots',        emoji: '👢', cost: 38,  desc: 'Paw protection!' },
    ],
    luxury: [
      { id: 'diamond_collar', name: 'Diamond Collar',  emoji: '💎', cost: 120, desc: 'Ultimate luxury collar' },
      { id: 'spa_day',       name: 'Spa Day',          emoji: '🛁', cost: 80,  desc: 'Full grooming session' },
      { id: 'velvet_bed',    name: 'Velvet Dog Bed',   emoji: '🛏️', cost: 100, desc: 'Cloud-soft sleeping' },
      { id: 'toy_castle',    name: 'Toy Castle',       emoji: '🏰', cost: 150, desc: "Snowy's dream palace" },
      { id: 'gold_bowl',     name: 'Gold Food Bowl',   emoji: '🏆', cost: 90,  desc: 'Eat like royalty' },
      { id: 'perfume',       name: 'Doggy Perfume',    emoji: '🌹', cost: 75,  desc: 'Smell divine always' },
      { id: 'pool',          name: 'Splash Pool',      emoji: '🏊', cost: 110, desc: 'Summer fun outdoors' },
      { id: 'limo_ride',     name: 'Limo Ride',        emoji: '🚗', cost: 130, desc: 'Ride in style, queen' },
    ],
  };

  // Flat lookup map
  const ITEM_MAP = {};
  Object.values(CATALOG).forEach(cat => cat.forEach(i => { ITEM_MAP[i.id] = i; }));

  // ── CONSTANTS ─────────────────────────────────────────────
  const LS_KEY         = 'studyhub_snowy';
  const TOKEN_FIRST    = 3;   // correct on first try
  const TOKEN_RETRY    = 1;   // correct after wrong
  const TOKEN_STREAK   = 2;   // bonus every 3-streak
  const TOKEN_HARD     = 5;   // numerical / diagram MCQ
  const TOKEN_QUIZ_ACE = 10;  // perfect quiz bonus

  const MOOD_STATES = [
    { key: 'sad',      label: '😢 Sad',      emoji: '😢', min: 0  },
    { key: 'meh',      label: '😐 Meh',      emoji: '😐', min: 25 },
    { key: 'content',  label: '🙂 Content',  emoji: '🙂', min: 50 },
    { key: 'happy',    label: '😊 Happy',    emoji: '😊', min: 70 },
    { key: 'overjoyed',label: '🥰 Overjoyed',emoji: '🥰', min: 90 },
  ];

  const DEMAND_MESSAGES = [
    "I'm hungry, Aaradhya!",
    "Can I have this please? 🥺",
    "Pretty please? With kibble on top?",
    "I've been such a good girl!",
    "This would make me SO happy!",
    "Woof! I really want this today!",
  ];

  // ── STATE ─────────────────────────────────────────────────
  let state = loadState();
  let shopTab = 'food';

  function defaultState() {
    return {
      tokens:      20,
      inventory:   [],
      demand:      null,        // { itemId, expiresAt, met }
      happiness:   50,
      lastFedAt:   null,
      totalEarned: 0,
      totalSpent:  0,
      streak:      0,
      lastSolvedAt: null,
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {}
    return defaultState();
  }

  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ── HAPPINESS ENGINE ──────────────────────────────────────
  function calcHappiness() {
    let h = 40; // base

    // Demand met today?
    if (state.demand && state.demand.met) h += 45;
    else if (!state.demand) h += 10; // no pending demand

    // Fed recently?
    if (state.lastFedAt) {
      const msAgo = Date.now() - new Date(state.lastFedAt).getTime();
      const hoursAgo = msAgo / 3600000;
      if (hoursAgo < 6)  h += 15;
      else if (hoursAgo < 24) h += 8;
    }

    // Owned luxury items boost baseline
    const luxuryOwned = (state.inventory || []).filter(id => CATALOG.luxury.find(i => i.id === id)).length;
    h += Math.min(luxuryOwned * 5, 15);

    return Math.max(0, Math.min(100, h));
  }

  function getMood(h) {
    let mood = MOOD_STATES[0];
    MOOD_STATES.forEach(m => { if (h >= m.min) mood = m; });
    return mood;
  }

  function happinessBarClass(h) {
    if (h < 25) return 'h-low';
    if (h < 50) return 'h-meh';
    if (h < 70) return 'h-good';
    if (h < 90) return 'h-great';
    return 'h-max';
  }

  // ── DAILY DEMAND ENGINE ───────────────────────────────────
  function todayKey() {
    return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  }

  function refreshDemand() {
    const today = todayKey();
    // Demand already set and valid for today
    if (state.demand && state.demand.expiresAt === today) return;
    // Pick a random item from all categories (weighted: food most often)
    const pool = [
      ...CATALOG.food,
      ...CATALOG.food,          // food appears twice — more likely
      ...CATALOG.clothing,
      ...CATALOG.luxury.slice(0, 3), // only cheaper luxury items as demands
    ];
    const pick = pool[Math.floor(Math.random() * pool.length)];
    state.demand = {
      itemId:    pick.id,
      expiresAt: today,
      met:       false,
      message:   DEMAND_MESSAGES[Math.floor(Math.random() * DEMAND_MESSAGES.length)],
    };
    saveState();
  }

  // ── TOKEN ENGINE ──────────────────────────────────────────
  /**
   * Called from app.js recordAttempt hook.
   * meta: { guessed, inQuiz, questionType, streak }
   */
  function earnTokens(qId, isCorrect, meta) {
    if (isCorrect !== true) return;
    meta = meta || {};

    let earned = 0;
    const isFirstTry = !meta.wasWrongBefore;
    const isHard = meta.questionType === 'numerical' || meta.questionType === 'diagram_mcq';

    if (isHard) {
      earned = TOKEN_HARD;
    } else if (isFirstTry) {
      earned = TOKEN_FIRST;
    } else {
      earned = TOKEN_RETRY;
    }

    // Streak bonus
    state.streak = (state.lastSolvedAt && (Date.now() - new Date(state.lastSolvedAt).getTime()) < 600000)
      ? (state.streak || 0) + 1
      : 1;
    state.lastSolvedAt = new Date().toISOString();

    if (state.streak > 0 && state.streak % 3 === 0) {
      earned += TOKEN_STREAK;
    }

    if (earned > 0) {
      state.tokens = (state.tokens || 0) + earned;
      state.totalEarned = (state.totalEarned || 0) + earned;
      saveState();
      showFloatingTokens(earned);
      updateHUD();
    }
  }

  /** Called from quiz score rendering when all answers correct */
  function earnPerfectBonus(total) {
    if (total < 3) return; // minimum 3 questions to count
    state.tokens = (state.tokens || 0) + TOKEN_QUIZ_ACE;
    state.totalEarned = (state.totalEarned || 0) + TOKEN_QUIZ_ACE;
    saveState();
    showFloatingTokens(TOKEN_QUIZ_ACE, true);
    updateHUD();
  }

  // ── PURCHASE LOGIC ────────────────────────────────────────
  function buyItem(itemId) {
    const item = ITEM_MAP[itemId];
    if (!item) return;

    const owned = (state.inventory || []).includes(itemId);
    if (owned) {
      showToastMsg('You already own ' + item.name + '! 🐾');
      return;
    }

    if ((state.tokens || 0) < item.cost) {
      showToastMsg('Not enough tokens! Need ' + item.cost + ' 🪙 — keep solving questions!');
      return;
    }

    // Deduct & add to inventory
    state.tokens -= item.cost;
    state.totalSpent = (state.totalSpent || 0) + item.cost;
    state.inventory = [...(state.inventory || []), itemId];
    state.lastFedAt = new Date().toISOString();

    // Check if this fulfils today's demand
    let demandMet = false;
    if (state.demand && !state.demand.met && state.demand.itemId === itemId) {
      state.demand.met = true;
      demandMet = true;
    }

    state.happiness = calcHappiness();
    saveState();
    renderShopPanel();
    updateHUD();

    if (demandMet) {
      showCelebration(item);
    } else {
      showToastMsg(item.emoji + ' Bought ' + item.name + ' for Snowy!');
    }
  }

  // ── HUD ───────────────────────────────────────────────────
  function updateHUD() {
    state.happiness = calcHappiness();
    const h = state.happiness;
    const mood = getMood(h);

    const card = document.getElementById('snowy-hud-card');
    if (!card) return;

    // Avatar mood class
    const avatar = card.querySelector('.snowy-hud-avatar');
    if (avatar) {
      avatar.className = 'snowy-hud-avatar mood-' + mood.key;
    }

    // Token count
    const tokenEl = card.querySelector('.snowy-hud-token-val');
    if (tokenEl) tokenEl.textContent = state.tokens;

    // Mood chip
    const moodEl = card.querySelector('.snowy-mood-chip');
    if (moodEl) moodEl.textContent = mood.label;

    // Happiness bar
    const bar = card.querySelector('.snowy-happiness-bar');
    if (bar) {
      bar.style.width = h + '%';
      bar.className = 'snowy-happiness-bar ' + happinessBarClass(h);
    }

    // Demand badge
    const badge = document.getElementById('snowy-demand-badge');
    if (badge) {
      if (state.demand && !state.demand.met) {
        const demItem = ITEM_MAP[state.demand.itemId];
        badge.hidden = false;
        badge.innerHTML = demItem
          ? demItem.emoji + ' Snowy wants ' + demItem.name + '!'
          : '🐾 Snowy has a request!';
      } else {
        badge.hidden = true;
      }
    }
  }

  function renderHUD() {
    const root = document.getElementById('snowy-hud');
    if (!root) return;

    state.happiness = calcHappiness();
    const h = state.happiness;
    const mood = getMood(h);

    root.innerHTML = `
      <div class="snowy-demand-badge" id="snowy-demand-badge" onclick="snowyOpenShop()" hidden>
      </div>
      <div class="snowy-hud-card" id="snowy-hud-card" onclick="snowyOpenShop()" title="Visit Snowy's Shop">
        <img class="snowy-hud-avatar mood-${mood.key}"
             src="images/snowy.jpg"
             alt="Snowy"
             onerror="this.style.fontSize='2rem';this.style.lineHeight='52px';this.style.textAlign='center';this.outerHTML='<div class=\\'snowy-hud-avatar mood-${mood.key}\\' style=\\'display:flex;align-items:center;justify-content:center;font-size:2rem;\\'>🐕</div>'">
        <div class="snowy-hud-info">
          <div class="snowy-hud-name">
            Snowy
            <span class="snowy-mood-chip">${mood.label}</span>
          </div>
          <div class="snowy-happiness-bar-wrap">
            <div class="snowy-happiness-bar ${happinessBarClass(h)}" style="width:${h}%"></div>
          </div>
          <div class="snowy-tokens-row">
            <span class="snowy-token-icon">🪙</span>
            <span class="snowy-hud-token-val">${state.tokens}</span>
            <span style="font-weight:400;color:var(--ink-3)">tokens</span>
          </div>
        </div>
      </div>`;

    updateHUD();
  }

  // ── SHOP MODAL ────────────────────────────────────────────
  function openShop() {
    if (document.getElementById('snowy-modal-overlay')) return;

    refreshDemand();
    state.happiness = calcHappiness();

    const overlay = document.createElement('div');
    overlay.className = 'snowy-modal-overlay';
    overlay.id = 'snowy-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', "Snowy's Shop");

    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeShop();
    });

    overlay.innerHTML = buildModalHTML();
    document.body.appendChild(overlay);

    // Keyboard close
    document._snowyEscHandler = e => { if (e.key === 'Escape') closeShop(); };
    document.addEventListener('keydown', document._snowyEscHandler);
  }

  function closeShop() {
    const overlay = document.getElementById('snowy-modal-overlay');
    if (overlay) overlay.remove();
    if (document._snowyEscHandler) {
      document.removeEventListener('keydown', document._snowyEscHandler);
      delete document._snowyEscHandler;
    }
  }

  function buildModalHTML() {
    const h = state.happiness;
    const mood = getMood(h);
    const demanded = state.demand && !state.demand.met ? ITEM_MAP[state.demand.itemId] : null;

    const demandBubble = state.demand && !state.demand.met && demanded
      ? `<div class="snowy-demand-bubble">
           <strong>${state.demand.message}</strong>
           <div class="snowy-demand-item-chip">${demanded.emoji} ${demanded.name} — ${demanded.cost} 🪙</div>
         </div>`
      : state.demand && state.demand.met
      ? `<div class="snowy-demand-met">✅ Thank you Aaradhya! I love you! 🥰</div>`
      : `<div class="snowy-demand-bubble"><strong>I'm happy today!</strong><br>No special request for now 🐾</div>`;

    const invItems = (state.inventory || []);
    const invHTML = invItems.length
      ? invItems.map(id => {
          const it = ITEM_MAP[id];
          return it ? `<span class="snowy-inv-chip">${it.emoji} ${it.name}</span>` : '';
        }).join('')
      : '<span class="snowy-inv-empty">Nothing yet — visit the shop!</span>';

    return `
      <div class="snowy-modal">
        <div class="snowy-modal-header">
          <div class="snowy-modal-title">🛍️ Snowy's World</div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="snowy-modal-tokens">🪙 <span id="snowy-modal-token-count">${state.tokens}</span> tokens</div>
            <button class="snowy-modal-close" onclick="snowyCloseShop()" aria-label="Close">✕</button>
          </div>
        </div>
        <div class="snowy-modal-body">

          <!-- LEFT: Snowy's room -->
          <div class="snowy-pet-panel">
            <div class="snowy-photo-wrap mood-${mood.key}" id="snowy-photo-wrap">
              <img src="images/snowy.jpg" alt="Snowy"
                   onerror="this.parentElement.innerHTML='<div style=\\'font-size:6rem;line-height:200px;text-align:center;\\'>🐕</div>'">
              <div class="snowy-mood-overlay">${mood.emoji}</div>
            </div>

            <div class="snowy-happiness-section">
              <div class="snowy-happiness-label">
                <span>Happiness</span>
                <span id="snowy-h-val">${h}%</span>
              </div>
              <div class="snowy-happiness-track">
                <div class="snowy-happiness-fill ${happinessBarClass(h)}"
                     id="snowy-h-fill"
                     style="width:${h}%"></div>
              </div>
            </div>

            ${demandBubble}

            <div class="snowy-inv-label">🎒 Aaradhya's Bag</div>
            <div class="snowy-inventory-chips" id="snowy-inv-chips">
              ${invHTML}
            </div>
          </div>

          <!-- RIGHT: Shop -->
          <div class="snowy-shop-panel">
            <div class="snowy-shop-header">
              <div class="snowy-shop-title">🏪 Snowy's Shopping Mall</div>
              <div class="snowy-tabs">
                <div class="snowy-tab ${shopTab==='food'?'active':''}" onclick="snowySetTab('food')">🍖 Food & Treats</div>
                <div class="snowy-tab ${shopTab==='clothing'?'active':''}" onclick="snowySetTab('clothing')">👗 Clothing</div>
                <div class="snowy-tab ${shopTab==='luxury'?'active':''}" onclick="snowySetTab('luxury')">👑 Luxury</div>
              </div>
            </div>
            <div class="snowy-shop-grid" id="snowy-shop-grid">
              ${buildItemCards(shopTab)}
            </div>
          </div>

        </div>
      </div>`;
  }

  function buildItemCards(tab) {
    const items = CATALOG[tab] || [];
    const demandId = state.demand && !state.demand.met ? state.demand.itemId : null;
    const owned = new Set(state.inventory || []);
    const tokens = state.tokens || 0;

    return items.map(item => {
      const isOwned    = owned.has(item.id);
      const isDemanded = item.id === demandId;
      const canAfford  = tokens >= item.cost;

      let cardClass = 'snowy-item-card';
      if (isOwned)    cardClass += ' owned';
      if (isDemanded) cardClass += ' demanded';
      if (!canAfford && !isOwned) cardClass += ' cant-afford';

      let tag = '';
      if (isDemanded) tag = '<span class="snowy-demanded-tag">⭐ Wanted</span>';
      if (isOwned)    tag = '<span class="snowy-owned-tag">✓ Owned</span>';

      let btnClass = 'snowy-buy-btn ';
      let btnText  = '';
      let btnAttr  = '';
      if (isOwned) {
        btnClass += 'already-owned';
        btnText   = '✓ Already owned';
        btnAttr   = 'disabled';
      } else if (!canAfford) {
        btnClass += 'cant-buy';
        btnText   = 'Need ' + item.cost + ' 🪙';
        btnAttr   = 'disabled';
      } else {
        btnClass += 'can-buy';
        btnText   = 'Buy for ' + item.cost + ' 🪙';
        btnAttr   = `onclick="snowyBuy('${item.id}')"`;
      }

      return `
        <div class="${cardClass}">
          ${tag}
          <div class="snowy-item-emoji">${item.emoji}</div>
          <div class="snowy-item-name">${item.name}</div>
          <div class="snowy-item-desc">${item.desc}</div>
          <div class="snowy-item-cost">🪙 ${item.cost}</div>
          <button class="${btnClass}" ${btnAttr}>${btnText}</button>
        </div>`;
    }).join('');
  }

  function renderShopPanel() {
    const grid = document.getElementById('snowy-shop-grid');
    if (grid) grid.innerHTML = buildItemCards(shopTab);

    // Update token counter in modal
    const tc = document.getElementById('snowy-modal-token-count');
    if (tc) tc.textContent = state.tokens;

    // Update happiness
    const h = calcHappiness();
    state.happiness = h;
    const mood = getMood(h);
    const fill = document.getElementById('snowy-h-fill');
    const hval = document.getElementById('snowy-h-val');
    if (fill) { fill.style.width = h + '%'; fill.className = 'snowy-happiness-fill ' + happinessBarClass(h); }
    if (hval) hval.textContent = h + '%';

    const wrap = document.getElementById('snowy-photo-wrap');
    if (wrap) wrap.className = 'snowy-photo-wrap mood-' + mood.key;

    // Update inventory chips
    const chips = document.getElementById('snowy-inv-chips');
    if (chips) {
      const invItems = state.inventory || [];
      chips.innerHTML = invItems.length
        ? invItems.map(id => {
            const it = ITEM_MAP[id];
            return it ? `<span class="snowy-inv-chip">${it.emoji} ${it.name}</span>` : '';
          }).join('')
        : '<span class="snowy-inv-empty">Nothing yet — visit the shop!</span>';
    }
  }

  function setTab(tab) {
    shopTab = tab;
    // Update tab active states
    document.querySelectorAll('.snowy-tab').forEach(el => {
      el.classList.toggle('active', el.textContent.toLowerCase().includes(tab));
    });
    renderShopPanel();
  }

  // ── FLOATING TOKEN ANIMATION ──────────────────────────────
  function showFloatingTokens(amount, isPerfect) {
    // Find HUD card to animate towards
    const card = document.getElementById('snowy-hud-card');
    const rect = card ? card.getBoundingClientRect() : null;

    // Start position: near bottom of answer area or random
    const startX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const startY = window.innerHeight - 200;

    const el = document.createElement('div');
    el.className = 'snowy-token-float';
    el.textContent = (isPerfect ? '🌟 ' : '+') + amount + ' 🪙';
    el.style.left = startX + 'px';
    el.style.top  = startY + 'px';
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 1500);
  }

  // ── CELEBRATION ───────────────────────────────────────────
  function showCelebration(item) {
    launchConfetti();

    const cel = document.createElement('div');
    cel.className = 'snowy-celebration';
    cel.innerHTML = `
      <div class="snowy-celebrate-card" onclick="this.parentElement.remove()">
        <span class="snowy-celebrate-emoji">${item.emoji}</span>
        <div class="snowy-celebrate-text">Snowy is overjoyed!</div>
        <div class="snowy-celebrate-sub">You gave her ${item.name} 🐾<br>She loves you, Aaradhya!</div>
      </div>`;
    document.body.appendChild(cel);
    setTimeout(() => cel.remove(), 3500);

    updateHUD();
  }

  function launchConfetti() {
    const colors = ['#f0a500','#ee5a24','#0e9f6e','#5b54d6','#d6336c','#ffd700','#3bb6c7'];
    for (let i = 0; i < 50; i++) {
      const dot = document.createElement('div');
      dot.className = 'snowy-confetti-dot';
      dot.style.left  = Math.random() * 100 + 'vw';
      dot.style.top   = '-20px';
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      dot.style.setProperty('--dur',   (1.2 + Math.random() * 1.2) + 's');
      dot.style.setProperty('--delay', (Math.random() * .5) + 's');
      dot.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
      dot.style.width  = (6 + Math.random() * 8) + 'px';
      dot.style.height = (6 + Math.random() * 8) + 'px';
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 3000);
    }
  }

  // ── SIMPLE TOAST (fallback if app's showToast not ready) ──
  function showToastMsg(msg) {
    if (typeof showToast === 'function') {
      showToast('success', msg);
      return;
    }
    const t = document.createElement('div');
    t.style.cssText = `position:fixed;bottom:100px;left:50%;transform:translateX(-50%);
      background:var(--surface);border:1px solid var(--line);border-radius:12px;
      padding:10px 18px;font-size:.85rem;font-family:var(--font-ui);color:var(--ink);
      box-shadow:var(--shadow);z-index:9999;pointer-events:none;animation:snowy-token-rise 2.5s forwards`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
  }

  // ── PUBLIC API (called by inline onclick + app.js) ────────
  window.snowyEarnTokens     = earnTokens;
  window.snowyEarnPerfectBonus = earnPerfectBonus;
  window.snowyOpenShop       = openShop;
  window.snowyCloseShop      = closeShop;
  window.snowyBuy            = buyItem;
  window.snowySetTab         = setTab;
  window.snowyGetState       = () => state;

  // ── INIT ──────────────────────────────────────────────────
  function init() {
    refreshDemand();
    state.happiness = calcHappiness();
    saveState();
    renderHUD();
    updateHUD();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // If already loaded (script added late), run immediately
    init();
  }

})();
